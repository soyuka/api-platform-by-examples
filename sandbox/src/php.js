const fs = require('fs');
const phpCode = fs.readFileSync(__dirname + '/php/api-platform.php', 'utf8');
const phpBinary = require('../php-wasm/php-web');
const NUM = 'number'
const STR = 'string'

function php() {
  return phpBinary({
      onAbort: function(reason) {
        console.error('WASM aborted: ' + reason)
      },
      print: function (...args) {
        if (args[0]) {
          console.log.apply(null, args)
        }
      },
      printErr: function (...args) {
        if (args[0]) {
          console.error.apply(null, args)
        }
      }
  })
  .then(({ccall, FS}) => {
    let retVal = ccall(
      'pib_init'
      , NUM
      , [STR]
      , []
    );

    console.log('PHP initialized', retVal)

    const phpVersion = ccall(
      'pib_exec'
      , STR
      , [STR]
      , [`phpversion();`]
    );

    console.log('PHP version', phpVersion)

    ccall(
      'pib_run'
      , NUM
      , [STR]
      , [`?>${phpCode}`]
    )

    // unpersist-memory
    // refresh()
    // {
    // 	const call = this.binary.then(php => php.ccall(
    // 		'pib_refresh'
    // 		, NUM
    // 		, []
    // 		, []
    // 	));
    //
    // 	call.catch(error => console.error(error));
    //
    // 	return call;
    // }
    return {ccall, FS}
  })
}

module.exports = php
