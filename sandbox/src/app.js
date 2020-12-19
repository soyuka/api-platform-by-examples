const marked = require('marked')
const {readFileSync} = require('fs')
const {registerToggleButtons} = require('./utils')

const phpCode = readFileSync(`${__dirname}/php/api-platform.php`, 'utf8')
const ROOT_DIR = '/src/api-platform/persisted-examples'

function createPhpRequest({
  method, uri, contentType, accept, body,
}) {
  return `Request::create('${uri}', '${method}', [], [], [], [
    'CONTENT_TYPE' => '${contentType}',
    'HTTP_ACCEPT' => '${accept}'
  ], ${method === 'GET' ? 'null' : `'${body}'`})`
}

function getFormRequestState(form, bodyView) {
  const formData = new FormData(form)
  return {
    method: formData.get('method'),
    contentType: formData.get('content-type'),
    accept: formData.get('accept'),
    uri: formData.get('uri'),
    body: bodyView.getBody(),
  }
}

function updateForm(form, state, bodyView) {
  Object.keys(state).forEach((key) => {
    if (key === 'body' && state[key]) {
      document.getElementsByTagName('details')[0].setAttribute('open', 'open')
      bodyView.setBody(JSON.stringify(state[key]))
    }

    const el = form.querySelector(`[name="${key}"]`)
    if (!el) return
    el.value = state[key]
  })
}

function App([editor, /* responseView */, fileTree, runCode, reset, bodyView, fs]) {
  const requestForm = document.getElementById('request')
  const exampleSelect = document.getElementById('example')
  const saveButton = document.getElementById('save')
  const story = document.getElementById('story-inner')
  const saveTimeout = () => {
    if (this.timeout) { clearTimeout(this.timeout) }
    this.timeout = setTimeout(() => editor.save(), 5000)
  }

  const params = new URLSearchParams(window.location.search.substring(1))

  if (params.get('example')) {
    exampleSelect.value = params.get('example')
  }

  function resetEditor() {
    fileTree.resetFsTree()
    reset()
    runCode(`${phpCode}`)
  }

  function runPhpRequest(example) {
    runCode(`<? use Symfony\\Component\\HttpFoundation\\Request; $run(${createPhpRequest(getFormRequestState(requestForm, bodyView))}, '${example}');`)
  }

  function loadExample(example) {
    fileTree.buildFsTree(`${ROOT_DIR}/${example}/src`)
    // load readme
    const readme = fs.readFile(`${ROOT_DIR}/${example}/README.md`, {encoding: 'utf8'})
    story.innerHTML = marked(readme)
    // load state
    try {
      let state = fs.readFile(`${ROOT_DIR}/${example}/state.json`, {encoding: 'utf8'})
      state = JSON.parse(state) // keep this like this for stack traces
      editor.loadFile(`${ROOT_DIR}/${example}/${state.file}`)
      updateForm(requestForm, state, bodyView)
    } catch (err) {
      console.error('No valid state found for example %s', example)
      console.error(err)
    }
  }

  resetEditor()
  loadExample(exampleSelect.value)

  // register data-toggle buttons
  registerToggleButtons()

  requestForm.addEventListener('submit', (event) => {
    event.preventDefault()
    runPhpRequest(exampleSelect.value)
  })

  // reset php memory, file tree and load another example
  exampleSelect.addEventListener('change', () => {
    resetEditor()
    loadExample(exampleSelect.value)
  })

  saveButton.addEventListener('click', (event) => {
    event.preventDefault()
    editor.save()
  })

  editor.addEventListener('change', (state) => {
    if (state.changed) {
      saveButton.removeAttribute('disabled')
      saveTimeout()
    } else {
      saveButton.setAttribute('disabled', 'disabled')
    }
  })

  fileTree.treeElement.addEventListener('vtree-select', (event) => {
    editor.loadFile(fileTree.treeRef[event.detail.id])
  })
}

module.exports = App
