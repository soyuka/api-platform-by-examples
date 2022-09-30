-include .env

API_PLATFORM_DIR=api-platform
UID?=1000 # Change this in your .env file if you're not UID 1001
DOCKER_RUN=docker run --rm -e UID=${UID} -e ENVIRONMENT=web -v $(CURDIR):/src -v $(CURDIR)/../${API_PLATFORM_DIR}:/src/${API_PLATFORM_DIR} -w /src soyuka/php-emscripten-builder

preload:
	${DOCKER_RUN} python3 /emsdk/upstream/emscripten/tools/file_packager.py ./php-wasm/php-web.data --preload "/src/api-platform" --js-output=./php-wasm/php-web.data.js --no-node --use-preload-cache --exclude '*Tests*' '*features*' '*public*' '*/.*'
	${DOCKER_RUN} chown ${UID} ./php-wasm/php-web.data.js ./php-wasm/php-web.data
	sed -e '/Module = Module || {/r./php-wasm/php-web.data.js' php-wasm/php-web.js > src/php-web.js
	cp php-wasm/php-web.data public/
	rmdir ${API_PLATFORM_DIR}

install:
	npm install
	cp -r node_modules/monaco-editor public/
	cp -r node_modules/normalize.css/normalize.css public/
	# and Add these
	# public/php-web.wasm 
	# php-web.data
	# and php-wasm/php-web.ori.js
	# and php-wasm/php-web.data.js
	# and php-wasm/php-web.js

start:
	caddy start

watch-preload:
	find ../api-platform | entr sh -c 'make preload | head -n 20'

watch:
	watchify -t brfs src/index.js -o public/main.js
