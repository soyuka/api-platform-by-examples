function BodyView({monaco, editor}) {
  return {
    getBody: () => editor.getValue(),
    setBody: (body) => {
      const oldModel = editor.getModel()
      const newModel = monaco.editor.createModel(body, 'json')
      editor.setModel(newModel)
      if (oldModel) {
        oldModel.dispose()
      }
    },
  }
}

module.exports = BodyView
