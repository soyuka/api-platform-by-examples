-include .env

API_PLATFORM_DIR=api-platform
UID?=1000 # Change this in your .env file if you're not UID 1001
DOCKER_RUN=docker run --rm -e UID=${UID} -e ENVIRONMENT=web -v $(CURDIR):/src -v $(CURDIR)/../${API_PLATFORM_DIR}:/src/${API_PLATFORM_DIR} -w /src soyuka/php-emscripten-builder

preload:
	${DOCKER_RUN} python3 /emsdk/upstream/emscripten/tools/file_packager.py ./public/php-web.data --preload "/src/${API_PLATFORM_DIR}" --js-output=./php-wasm/php-web.data.js
	${DOCKER_RUN} chown ${UID} ./php-wasm/php-web.data.js
	sed -e '/Module = Module || {/r./php-wasm/php-web.data.js' php-wasm/php-web.ori.js > php-wasm/php-web.js
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

serve:
	serve public

watch:
	watchify -t brfs src/index.js -o public/main.js
