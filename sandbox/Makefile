-include .env

UID?=1000 # Change this in your .env file if you're not UID 1001
DOCKER_RUN=docker run --rm -e UID=${UID} -e ENVIRONMENT=web -v $(CURDIR):/src -v $(CURDIR)/../api-platform-light:/src/api-platform-light -w /src soyuka/php-emscripten-builder:latest 

preload:
	${DOCKER_RUN} python3 /emsdk/upstream/emscripten/tools/file_packager.py ./public/php-web.data --preload "/src/api-platform-light" --js-output=./php-wasm/php-web.data.js
	${DOCKER_RUN} chown ${UID} ./php-wasm/php-web.data.js
	sed -e '/\/\/ INSERT DATA HERE/r./php-wasm/php-web.data.js' php-wasm/php-web.ori.js > php-wasm/php-web.js
	rmdir api-platform-light
