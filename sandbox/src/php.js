const {Observable} = require('rxjs')
const phpBinary = require('./php-web');

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
    .then((t) => {
      const {ccall, FS, IDBFS} = t
      ccall('pib_init', NUM, [STR], []);
      const phpVersion = ccall('pib_exec', STR, [STR], ['phpversion();']);
      const apiPlatformVersion = ccall('pib_exec', STR, [STR], [`str_replace('^', '', json_decode(file_get_contents('/src/api-platform/composer.json'))->require->{'api-platform/core'});`]);
      const runCode = (phpCode) => {
        ccall('pib_run', NUM, [STR], [`?> ${phpCode}`])
      }

      const reset = () => ccall('pib_refresh', NUM, [], [])
      return {
        ccall, FS, stdout, stderr, phpVersion, apiPlatformVersion, runCode, reset,
      }
    })
}

module.exports = php
