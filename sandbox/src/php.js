const {Observable} = require('rxjs')
const phpBinary = require('../php-wasm/php-web');

const NUM = 'number'
const STR = 'string'

function php() {
  let onStdout = {next: () => {}}
  let onStderr = {next: () => {}}
  const stdout = new Observable((subscriber) => { onStdout = subscriber })
  const stderr = new Observable((subscriber) => { onStderr = subscriber })

  return phpBinary({
    onAbort(reason) {
      console.error(`WASM aborted: ${reason}`)
    },
    print(data) {
      if (data) {
        onStdout.next(data)
      }
    },
    printErr(data) {
      if (data) {
        onStderr.next(data)
      }
    },
  })
    .then(({ccall, FS, IDBFS}) => {
      ccall('pib_init', NUM, [STR], []);
      const phpVersion = ccall('pib_exec', STR, [STR], ['phpversion();']);
      const runCode = (phpCode) => {
        ccall('pib_run', NUM, [STR], [`?>${phpCode}`])
      }

      const reset = () => ccall('pib_refresh', NUM, [], [])
      return {
        ccall, FS, stdout, stderr, phpVersion, runCode, reset, IDBFS,
      }
    })
}

module.exports = php
