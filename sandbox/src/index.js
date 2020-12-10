const VanillaTree = require('./vanillatree');
const php = require('./php')
const ROOT_DIR = '/src/api-platform-light/src'

function App() {
  let monaco, editor, FS
  const tree = new VanillaTree('#file-list');

  function loadFile(file) {
    const phpCode = FS.readFile(file, {encoding: 'utf8'})
    const oldModel = editor.getModel();
    const newModel = monaco.editor.createModel(phpCode, 'php');
    editor.setModel(newModel);
    if (oldModel) {
      oldModel.dispose();
    }
  }

  function buildFSTree(root, parent) {
    const files = FS.readdir(root)

    files.forEach((file) => {
      if (file === '.' || file === '..') return
      const path = `${root}/${file}`
      const stat = FS.stat(path)
      if (FS.isDir(stat.mode)) {
        tree.add({label: file, id: path, opened: true, parent})
        buildFSTree(path, path)
      } else {
        tree.add({label: file, id: 'file-'+file, parent})
      }
    })
  }

  function loadPhp() {
    return php()
    .then(php => {
      FS = php.FS
    })
  }

  function loadEditor() {
    const editorIframe = document.getElementById('editor')

    return new Promise((resolve) => {
      editorIframe.addEventListener("load", function(event) {
        editor = editorIframe.contentWindow.editor
        monaco = editorIframe.contentWindow.monaco
        resolve()
      })
    })
  }

  let initialized, failed
  const promise = new Promise((resolve, reject) => {
    initialized = resolve
    failed = reject

    return Promise.all([loadEditor(), loadPhp()])
    .then(() => {
      buildFSTree(ROOT_DIR)
      loadFile(`${ROOT_DIR}/Entity/Book.php`)
    })
  })

  return { initialized, failed }
}

const {initialized, failed} = App()
initialized(() => console.log('App started'))
failed((err) => console.error('App errored', err))
