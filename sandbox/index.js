require('./php-wasm/php-web.data.js');
const php = new (require('./php-wasm/PhpWeb').PhpWeb);
const fs = require('fs');

const code = fs.readFileSync(__dirname + '/index.php', 'utf8');

const frame = document.getElementById('frame');

php.addEventListener('output', (event) => {
  frame.contentWindow.document.write(event.detail);
});

php.addEventListener('error', (event) => {
  console.log(event)
})

php.addEventListener('ready', () => {
  console.log('ready')
  php.run(code).then(retVal => {
    console.log('ok', retVal)
      // retVal contains the return code.
  }).catch(err => {
    console.error(err)
  });
});

