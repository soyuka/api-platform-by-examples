const { tap, debounceTime } = require('rxjs/operators');

function ResponseView({
  monaco, editor, stdout, stderr,
}) {
  function loadResponse(data, language = 'json') {
    const oldModel = editor.getModel();
    const newModel = monaco.editor.createModel(data, language);
    editor.setModel(newModel);
    if (oldModel) {
      oldModel.dispose();
    }
  }

  let out = ''
  stdout.pipe(tap((d) => {
    out += `${d}\n`
  }), debounceTime(300)).subscribe(() => {
    let response = out
    out = ''
    try {
      response = JSON.stringify(JSON.parse(response), null, 2)
    } catch (err) {} // eslint-disable-line no-empty
    loadResponse(response)
  })

  let err = ''
  stderr.pipe(tap((d) => {
    err += `${d}\n`
  }), debounceTime(300)).subscribe(() => {
    console.error(err)
    err = ''
  })
}

module.exports = ResponseView
