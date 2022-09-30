function Editor({FS, monaco, editor}) {
  const eventListeners = {change: []}
  const state = {loadedFile: null, changed: false}
  const onDidChangeContent = () => {
    state.changed = true
    eventListeners.change.forEach((listener) => listener(state))
    return {
      dispose: () => {
        state.changed = false
      },
    }
  }

  function save() {
    FS.writeFile(state.loadedFile, editor.getValue())
    FS.syncfs(() => {})
    state.changed = false
    eventListeners.change.forEach((listener) => listener(state))
  }

  function loadFile(file) {
    if (state.loadedFile && state.changed) {
      save()
    }

    let phpCode

    try {
      phpCode = FS.readFile(file, {encoding: 'utf8'})
    } catch (err) {
      console.error('Error reading file %s', file)
      console.error(err)
      return;
    }

    state.loadedFile = file
    const oldModel = editor.getModel()
    const newModel = monaco.editor.createModel(phpCode, 'php')
    editor.setModel(newModel)
    if (oldModel) {
      oldModel.dispose()
    }
    newModel.onDidChangeContent(onDidChangeContent)
    eventListeners.change.forEach((listener) => listener(state))
  }

  function addEventListener(event, listener) {
    if (!eventListeners[event]) throw new Error(`No event ${event} available.`)
    eventListeners[event].push(listener)
  }

  return {
    loadFile, state, save, addEventListener,
  }
}

module.exports = Editor
