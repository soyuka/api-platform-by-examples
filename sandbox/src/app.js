const nodeFs = require('fs')
const {registerToggleButtons} = require('./utils')
const uritemplate = require('uritemplate')

const apiPlatformBootstrapCode = nodeFs.readFileSync(`${__dirname}/php/api-platform.php`, 'utf8')
const ROOT_DIR = '/src/api-platform/persisted-examples'

function createPhpRequest({
  method, uri, contentType, accept, body,
}) {
  return `Symfony\\Component\\HttpFoundation\\Request::create('${uri}', '${method}', [], [], [], [
    'CONTENT_TYPE' => '${contentType}',
    'HTTP_ACCEPT' => '${accept}'
  ], ${method === 'GET' ? 'null' : `'${body}'`})`
}

function getFormRequestState(form, bodyView, routesSelect) {
  const formData = new FormData(form)
  let method = 'GET'
  let uri = '/'

  if (routesSelect.options[routesSelect.selectedIndex]) {
    const dataset = routesSelect.options[routesSelect.selectedIndex].dataset
    method = dataset.method || method
    uri = dataset.uri || uri
  }

  const uriVariables = {}
  const template = uritemplate.parse(uri)
  template.expressions.forEach((e) => {
    if (!e.templateText) {
      return;
    }

    uriVariables[e.templateText] = formData.get('uri-variable-' + e.templateText) || ''
  })

  return {
    method: method,
    contentType: formData.get('content-type'),
    accept: formData.get('accept'),
    uri: template.expand(uriVariables),
    body: bodyView.getBody(),
  }
}

function updateForm(form, state, bodyView) {
  Object.keys(state).forEach((key) => {
    if (key === 'body') {
      if (state[key]) {
        document.getElementsByTagName('details')[0].setAttribute('open', 'open')
        bodyView.setBody(JSON.stringify(state[key]))
      } else {
        bodyView.setBody('')
      }
    }

    const el = form.querySelector(`[name="${key}"]`)
    if (!el) return
    el.value = state[key]
  })
}

function App([editor, /* responseView */, fileTree, runCode, reset, bodyView, fs, ccall]) {
  let shouldResetPhp = false
  const requestForm = document.getElementById('request')
  const requestFormContent = document.getElementById('request-content')
  const exampleSelect = document.getElementById('example')
  const routesSelect = document.getElementById('routes')
  const saveButton = document.getElementById('save')
  const openRequestButton = document.getElementById('open-request')

  // const story = document.getElementById('story-inner')
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
    runCode(`${apiPlatformBootstrapCode}`)
  }

  function runPhpRequest(example) {
    if (shouldResetPhp) {
      reset()
      runCode(`${apiPlatformBootstrapCode}`)
    }

    runCode(`<? $run(${createPhpRequest(getFormRequestState(requestForm, bodyView, routesSelect))}, '${ROOT_DIR}/${example}');`)
  }

  function loadRoutes(example, state) {
    const routes = ccall('pib_exec', 'string', ['string'], [`$getRoutes('${ROOT_DIR}/${example}');`]);

    Array.from(routesSelect.children).forEach((e) => {
      routesSelect.removeChild(e)
    })

    let routesArray = []
    try {
      if (!routes) {
        throw new Error('No routes found');
      }

      routesArray = JSON.parse(routes)
    } catch (err) {
      console.error(err);
    }

    routesArray.map((route) => {
      const option = document.createElement('option')
      option.innerText = `${route.method} ${route.path}`
      option.value = `${route.method}-${route.path}`
      option.dataset.method = route.method
      option.dataset.uri = route.path
      option.selected = state.method === route.method && state.uri === route.path
      routesSelect.appendChild(option)
    })
  }

  function loadExample(example) {
    fileTree.buildFsTree(`${ROOT_DIR}/${example}/src`)
    try {
      let state = fs.readFile(`${ROOT_DIR}/${example}/state.json`, {encoding: 'utf8'})
      state = JSON.parse(state) // keep this like this for stack traces
      editor.loadFile(`${ROOT_DIR}/${example}/${state.file}`)
      updateForm(requestForm, state, bodyView)
      loadRoutes(example, state)
    } catch (err) {
      console.error('No valid state found for example %s', example)
      console.error(err)
    }
  }
  function loadExamples(example) {
    const lastExample = window.localStorage.getItem('selected-example')

    try {
      let list = fs.readdir(ROOT_DIR)
      let num = 1

      list.forEach((e, i) => {
        if (e === '.' || e === '..') return;

        let title = e
        try {
          let state = fs.readFile(`${ROOT_DIR}/${e}/state.json`, {encoding: 'utf8'})
          state = JSON.parse(state) // keep this like this for stack traces
          title = state.title ? `${num} - ${state.title}` : title
        } catch (err) {
          return;
        }

        const option = document.createElement('option')
        option.value = e
        option.innerText = title
        option.selected = lastExample ? lastExample === e : num === 1

        exampleSelect.appendChild(option) 
        num++
      })
    } catch (err) {
      console.error('No valid state found for example %s', example)
      console.error(err)
    }
  }

  loadExamples()

  resetEditor()
  loadExample(exampleSelect.value)
  runPhpRequest(exampleSelect.value)

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
    runPhpRequest(exampleSelect.value)
    window.localStorage.setItem('selected-example', exampleSelect.value)
  })

  routesSelect.addEventListener('change', () => {
    const {uri} = routesSelect.options[routesSelect.selectedIndex].dataset
    const template = uritemplate.parse(uri)

    Array.from(document.getElementsByClassName('uri-variable')).forEach((e) => {
      e.parentNode.removeChild(e)
    })

    template.expressions.forEach((e) => {
      if (!e.templateText) {
        return;
      }

      const uriVariable = document.createElement('input')
      uriVariable.className = 'uri-variable'
      uriVariable.style.maxWidth = '10%'
      uriVariable.style.paddingLeft = '1em'
      uriVariable.setAttribute('name', 'uri-variable-' + e.templateText)
      uriVariable.setAttribute('placeholder', e.templateText)
      routesSelect.after(uriVariable)
    })
  })

  saveButton.addEventListener('click', (event) => {
    event.preventDefault()
    editor.save()
  })

  editor.addEventListener('change', (state) => {
    if (state.changed) {
      shouldResetPhp = true
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
