
var PHP = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(PHP) {
  PHP = PHP || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof PHP !== 'undefined' ? PHP : {};


// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)

// INSERT DATA HERE

  var Module = typeof Module !== 'undefined' ? Module : {};
  
  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads++;
  (function() {
   var loadPackage = function(metadata) {
  
      var PACKAGE_PATH;
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
      } else if (typeof location !== 'undefined') {
        // worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
      } else {
        throw 'using preloaded data can only be done on a web page or in a web worker';
      }
      var PACKAGE_NAME = './public/php-web.data';
      var REMOTE_PACKAGE_BASE = 'php-web.data';
      if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
        Module['locateFile'] = Module['locateFilePackage'];
        err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
    
      var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];
      var PACKAGE_UUID = metadata['package_uuid'];
    
      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', packageName, true);
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = function(event) {
          var url = packageName;
          var size = packageSize;
          if (event.total) size = event.total;
          if (event.loaded) {
            if (!xhr.addedTotal) {
              xhr.addedTotal = true;
              if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
              Module.dataFileDownloads[url] = {
                loaded: event.loaded,
                total: size
              };
            } else {
              Module.dataFileDownloads[url].loaded = event.loaded;
            }
            var total = 0;
            var loaded = 0;
            var num = 0;
            for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
              total += data.total;
              loaded += data.loaded;
              num++;
            }
            total = Math.ceil(total * Module.expectedDataFileDownloads/num);
            if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
          } else if (!Module.dataFileDownloads) {
            if (Module['setStatus']) Module['setStatus']('Downloading data...');
          }
        };
        xhr.onerror = function(event) {
          throw new Error("NetworkError for: " + packageName);
        }
        xhr.onload = function(event) {
          if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            var packageData = xhr.response;
            callback(packageData);
          } else {
            throw new Error(xhr.statusText + " : " + xhr.responseURL);
          }
        };
        xhr.send(null);
      };

      function handleError(error) {
        console.error('package error:', error);
      };
    
        var fetchedCallback = null;
        var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

        if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
          if (fetchedCallback) {
            fetchedCallback(data);
            fetchedCallback = null;
          } else {
            fetched = data;
          }
        }, handleError);
      
    function runWithFS() {
  
      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
  Module['FS_createPath']('/', 'src', true, true);
Module['FS_createPath']('/src', 'api-platform-light', true, true);
Module['FS_createPath']('/src/api-platform-light', 'vendor', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor', 'api-platform', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform', 'core', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core', 'features', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'http_cache', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'push_relations', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'openapi', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'swagger', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'files', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'jsonld', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'json', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'authorization', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'mercure', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'jsonapi', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'graphql', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'security', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'hydra', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'hal', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'main', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'elasticsearch', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/features', 'mongodb', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core', '.github', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.github', 'workflows', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core', 'src', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'OpenApi', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/OpenApi', 'Model', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/OpenApi', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/OpenApi', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Operation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Operation', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Filter', 'Validator', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'JsonLd', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/JsonLd', 'Action', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/JsonLd', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Action', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'DataTransformer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'HttpCache', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/HttpCache', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'GraphQl', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/GraphQl', 'Error', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/GraphQl', 'Resolver', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver', 'Stage', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/GraphQl', 'Action', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/GraphQl', 'Subscription', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/GraphQl', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Serializer', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/GraphQl', 'Type', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type', 'Definition', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'JsonSchema', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/JsonSchema', 'Command', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Mercure', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Mercure', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'PathResolver', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Problem', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Problem', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Documentation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Documentation', 'Action', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Validator', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Validator', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Validator', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Metadata', 'schema', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Metadata', 'Property', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Metadata', 'Extractor', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Metadata', 'Resource', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Swagger', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Swagger', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Cache', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'DataProvider', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Bridge', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge', 'Doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine', 'MongoDbOdm', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm', 'Extension', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Metadata', 'Property', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm', 'PropertyInfo', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine', 'Common', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine', 'Orm', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm', 'Extension', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Metadata', 'Property', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge', 'Symfony', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony', 'Messenger', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony', 'Validator', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator/Metadata', 'Property', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator/Metadata/Property', 'Restriction', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony', 'PropertyInfo', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/PropertyInfo', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/PropertyInfo/Metadata', 'Property', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony', 'Bundle', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle', 'Action', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle', 'SwaggerUi', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle', 'Resources', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources', 'views', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/views', 'SwaggerUi', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/views', 'Graphiql', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/views', 'DataCollector', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/views', 'GraphQlPlayground', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources', 'config', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config', 'metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config', 'routing', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/routing', 'graphql', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources', 'public', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public', 'es6-promise', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public', 'redoc', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public', 'react', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public', 'graphiql', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public', 'fetch', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public', 'swagger-ui', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public', 'graphql-playground', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle', 'CacheWarmer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle', 'DataProvider', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle', 'DataPersister', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle', 'DataCollector', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle', 'DependencyInjection', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DependencyInjection', 'Compiler', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle', 'Test', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Test', 'Constraint', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle', 'Command', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony', 'Identifier', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Identifier', 'Normalizer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony', 'Routing', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge', 'RamseyUuid', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/RamseyUuid', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/RamseyUuid', 'Identifier', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/RamseyUuid/Identifier', 'Normalizer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge', 'Elasticsearch', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Metadata', 'Resource', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Metadata/Resource', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Metadata', 'Document', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Metadata/Document', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch', 'DataProvider', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider', 'Extension', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Serializer', 'NameConverter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch', 'Api', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge', 'FosUser', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge', 'NelmioApiDoc', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/NelmioApiDoc', 'Parser', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/NelmioApiDoc', 'Extractor', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Bridge/NelmioApiDoc/Extractor', 'AnnotationsProvider', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Serializer', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Security', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Security', 'Core', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Security/Core', 'Authorization', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Security', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Identifier', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Identifier', 'Normalizer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Hal', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Hal', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'DataPersister', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Api', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Hydra', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Hydra', 'JsonSchema', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Hydra', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/Hydra', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Test', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'JsonApi', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/JsonApi', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src/JsonApi', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/src', 'Annotation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core', 'tests', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'OpenApi', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/OpenApi', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/OpenApi', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Operation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Operation', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Filter', 'Validator', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Fixtures', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures', 'app', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app', 'config', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config', 'api_platform', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app', 'public', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures', 'JsonHal', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures', 'Elasticsearch', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Elasticsearch', 'Mappings', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Elasticsearch', 'Fixtures', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Elasticsearch', 'Model', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures', 'JsonSchema', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures', 'TestBundle', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Doctrine', 'Generator', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Doctrine', 'Orm', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Doctrine/Orm', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'BrowserKit', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Action', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'DataTransformer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Resources', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Resources', 'config', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Resources/config', 'serialization', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Resources/config', 'api_resources', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'GraphQl', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl', 'Resolver', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl', 'Type', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Type', 'Definition', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Validator', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Enum', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'MessengerHandler', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/MessengerHandler', 'Document', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/MessengerHandler', 'Entity', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'DataProvider', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'MessageHandler', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Model', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Dto', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto', 'Document', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Serializer', 'Normalizer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Serializer', 'Denormalizer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Serializer', 'NameConverter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Document', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'DataPersister', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Entity', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle', 'Controller', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Controller', 'Payment', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Controller', 'MongoDbOdm', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Controller', 'Orm', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Controller', 'DummyDtoNoInput', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Metadata', 'schema', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Fixtures', 'FileConfigurations', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'JsonLd', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/JsonLd', 'Action', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/JsonLd', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Action', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'HttpCache', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/HttpCache', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'GraphQl', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/GraphQl', 'Resolver', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver', 'Stage', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/GraphQl', 'Action', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Action', 'Fixtures', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/GraphQl', 'Subscription', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/GraphQl', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Serializer', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/GraphQl', 'Type', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Type', 'Definition', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Mock', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Mock', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'JsonSchema', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/JsonSchema', 'Command', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Mercure', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Mercure', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'PathResolver', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Problem', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Problem', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Documentation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Documentation', 'Action', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Validator', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Validator', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Metadata', 'schema', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Metadata', 'Property', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Metadata', 'Extractor', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Metadata', 'Resource', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Swagger', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Swagger', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'DataProvider', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Bridge', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge', 'Doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine', 'MongoDbOdm', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm', 'Extension', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/Metadata', 'Property', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm', 'PropertyInfo', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/PropertyInfo', 'Fixtures', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine', 'Common', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Common', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Common', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine', 'Orm', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm', 'Extension', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Metadata', 'Property', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge', 'Symfony', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony', 'Messenger', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony', 'Validator', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Validator', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Validator', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Validator/Metadata', 'Property', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Validator', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony', 'PropertyInfo', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/PropertyInfo', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/PropertyInfo/Metadata', 'Property', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony', 'Bundle', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle', 'Action', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle', 'SwaggerUi', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle', 'Twig', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle', 'DataProvider', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle', 'DataPersister', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle', 'DataCollector', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle', 'DependencyInjection', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DependencyInjection', 'Compiler', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle', 'Test', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/Test', 'Constraint', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle', 'Command', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony', 'Identifier', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Identifier', 'Normalizer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony', 'Routing', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge', 'RamseyUuid', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/RamseyUuid', 'Normalizer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge', 'Elasticsearch', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch', 'Metadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Metadata', 'Resource', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Metadata/Resource', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Metadata', 'Document', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Metadata/Document', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch', 'DataProvider', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/DataProvider', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/DataProvider', 'Extension', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Serializer', 'NameConverter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch', 'Api', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge', 'NelmioApiDoc', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/NelmioApiDoc', 'Parser', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/NelmioApiDoc', 'Extractor', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Bridge/NelmioApiDoc/Extractor', 'AnnotationsProvider', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Serializer', 'Filter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Security', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Security', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Identifier', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Identifier', 'Normalizer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Hal', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Hal', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'DataPersister', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Api', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Hydra', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Hydra', 'JsonSchema', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Hydra', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/Hydra', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Behat', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'JsonApi', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/JsonApi', 'Serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests/JsonApi', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/tests', 'Annotation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core', '.git', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git', 'hooks', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git', 'info', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git', 'objects', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git/objects', 'pack', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git/objects', 'info', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git', 'logs', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git/logs', 'refs', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git/logs/refs', 'heads', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git/logs/refs', 'remotes', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git/logs/refs/remotes', 'origin', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git', 'refs', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git/refs', 'heads', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git/refs', 'remotes', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/api-platform/core/.git/refs/remotes', 'origin', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor', 'composer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor', 'doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine', 'cache', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/cache', 'lib', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/cache/lib', 'Doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine', 'Common', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common', 'Cache', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine', 'event-manager', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/event-manager', 'lib', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/event-manager/lib', 'Doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/event-manager/lib/Doctrine', 'Common', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine', 'common', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/common', 'lib', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/common/lib', 'Doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/common/lib/Doctrine', 'Common', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common', 'Proxy', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Proxy', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/common', 'docs', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/common/docs', 'en', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/common/docs/en', 'reference', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine', 'collections', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/collections', 'lib', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/collections/lib', 'Doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine', 'Common', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common', 'Collections', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections', 'Expr', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/collections', 'docs', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/collections/docs', 'en', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine', 'persistence', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/persistence', '.github', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/persistence/.github', 'workflows', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/persistence', 'lib', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/persistence/lib', 'Doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine', 'Persistence', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence', 'Event', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence', 'Reflection', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence', 'Mapping', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping', 'Driver', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine', 'Common', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Common', 'Persistence', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine', 'lexer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/lexer', 'lib', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/lexer/lib', 'Doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/lexer/lib/Doctrine', 'Common', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/lexer/lib/Doctrine/Common', 'Lexer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine', 'annotations', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/annotations', '.github', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/annotations/.github', 'workflows', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/annotations', 'lib', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/annotations/lib', 'Doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine', 'Common', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common', 'Annotations', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations', 'Annotation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/annotations', 'docs', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/annotations/docs', 'en', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine', 'inflector', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/inflector', 'lib', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/inflector/lib', 'Doctrine', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine', 'Inflector', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector', 'Rules', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules', 'NorwegianBokmal', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules', 'Turkish', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules', 'Portuguese', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules', 'English', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules', 'Spanish', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules', 'French', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/inflector', 'docs', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/doctrine/inflector/docs', 'en', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor', 'webmozart', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/webmozart', 'assert', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/webmozart/assert', 'src', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor', 'willdurand', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/willdurand', 'negotiation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/willdurand/negotiation', 'src', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/willdurand/negotiation/src', 'Negotiation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/willdurand/negotiation', 'tests', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/willdurand/negotiation/tests', 'Negotiation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/willdurand/negotiation/tests/Negotiation', 'Tests', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor', 'bin', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor', 'symfony', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'serializer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer', 'CacheWarmer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer', 'Normalizer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer', 'Encoder', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer', 'Extractor', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer', 'Mapping', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer/Mapping', 'Loader', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer/Mapping/Loader', 'schema', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer/Mapping/Loader/schema', 'dic', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer/Mapping/Loader/schema/dic', 'serializer-mapping', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer/Mapping', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer', 'DependencyInjection', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer', 'NameConverter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/serializer', 'Annotation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'polyfill-intl-grapheme', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'web-link', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/web-link', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'validator', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator', 'Resources', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator/Resources', 'translations', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator', 'Validator', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator', 'Violation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator', 'Mapping', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator/Mapping', 'Loader', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator/Mapping/Loader', 'schema', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/schema', 'dic', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/schema/dic', 'constraint-mapping', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator/Mapping', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator', 'Constraints', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator', 'Context', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator', 'DataCollector', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator', 'DependencyInjection', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator', 'Test', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/validator', 'Command', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'http-foundation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-foundation', 'RateLimiter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-foundation', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-foundation', 'Session', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-foundation/Session', 'Attribute', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-foundation/Session', 'Storage', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage', 'Handler', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage', 'Proxy', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-foundation/Session', 'Flash', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-foundation', 'File', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-foundation/File', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-foundation', 'Test', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-foundation/Test', 'Constraint', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'http-client-contracts', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-client-contracts', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-client-contracts', 'Test', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-client-contracts/Test', 'Fixtures', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-client-contracts/Test/Fixtures', 'web', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'polyfill-php80', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/polyfill-php80', 'Resources', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/polyfill-php80/Resources', 'stubs', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'http-kernel', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'HttpCache', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'Config', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'Resources', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'Attribute', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'ControllerMetadata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'Event', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'CacheWarmer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'Profiler', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'Fragment', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'Debug', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'CacheClearer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'Bundle', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'Log', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'EventListener', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'DataCollector', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'Controller', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel/Controller', 'ArgumentResolver', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/http-kernel', 'DependencyInjection', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'polyfill-php73', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/polyfill-php73', 'Resources', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/polyfill-php73/Resources', 'stubs', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'translation-contracts', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/translation-contracts', 'Test', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'property-access', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/property-access', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'error-handler', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/error-handler', 'Error', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/error-handler', 'ErrorEnhancer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/error-handler', 'Resources', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/error-handler/Resources', 'assets', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/error-handler/Resources/assets', 'images', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/error-handler/Resources/assets', 'css', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/error-handler/Resources/assets', 'js', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/error-handler/Resources', 'views', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/error-handler', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/error-handler', 'ErrorRenderer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'polyfill-ctype', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'string', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/string', 'Resources', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/string/Resources', 'data', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/string', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/string', 'Slugger', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/string', 'Inflector', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'event-dispatcher', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/event-dispatcher', 'Debug', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/event-dispatcher', 'DependencyInjection', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'event-dispatcher-contracts', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'routing', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/routing', 'Generator', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/routing/Generator', 'Dumper', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/routing', 'Matcher', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/routing/Matcher', 'Dumper', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/routing', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/routing', 'Loader', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/routing/Loader', 'schema', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/routing/Loader/schema', 'routing', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/routing/Loader', 'Configurator', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/routing/Loader/Configurator', 'Traits', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/routing', 'DependencyInjection', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/routing', 'Annotation', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'property-info', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/property-info', 'Extractor', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/property-info', 'Util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/property-info', 'DependencyInjection', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'var-dumper', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper', 'Caster', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper', 'Server', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper', 'Resources', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper/Resources', 'bin', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper/Resources', 'css', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper/Resources', 'js', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper/Resources', 'functions', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper', 'Dumper', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper/Dumper', 'ContextProvider', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper', 'Cloner', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper', 'Test', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper', 'Command', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/var-dumper/Command', 'Descriptor', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'polyfill-intl-normalizer', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer', 'Resources', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer/Resources', 'stubs', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer/Resources', 'unidata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'deprecation-contracts', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony', 'polyfill-mbstring', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/polyfill-mbstring', 'Resources', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/symfony/polyfill-mbstring/Resources', 'unidata', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor', 'phpdocumentor', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor', 'reflection-common', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/reflection-common', '.github', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/reflection-common/.github', 'workflows', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/reflection-common', 'src', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor', 'reflection-docblock', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/reflection-docblock', 'src', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src', 'Exception', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src', 'DocBlock', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock', 'Tags', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags', 'Reference', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags', 'Formatter', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags', 'Factory', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor', 'type-resolver', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/type-resolver', 'src', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/type-resolver/src', 'Types', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/phpdocumentor/type-resolver/src', 'PseudoTypes', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor', 'fig', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/fig', 'link-util', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/fig/link-util', 'src', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor', 'psr', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/psr', 'cache', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/psr/cache', 'src', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/psr', 'link', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/psr/link', 'src', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/psr', 'container', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/psr/container', 'src', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/psr', 'log', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/psr/log', 'Psr', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/psr/log/Psr', 'Log', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/psr/log/Psr/Log', 'Test', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/psr', 'event-dispatcher', true, true);
Module['FS_createPath']('/src/api-platform-light/vendor/psr/event-dispatcher', 'src', true, true);
Module['FS_createPath']('/src/api-platform-light', 'src', true, true);
Module['FS_createPath']('/src/api-platform-light/src', 'Entity', true, true);

      /** @constructor */
      function DataRequest(start, end, audio) {
        this.start = start;
        this.end = end;
        this.audio = audio;
      }
      DataRequest.prototype = {
        requests: {},
        open: function(mode, name) {
          this.name = name;
          this.requests[name] = this;
          Module['addRunDependency']('fp ' + this.name);
        },
        send: function() {},
        onload: function() {
          var byteArray = this.byteArray.subarray(this.start, this.end);
          this.finish(byteArray);
        },
        finish: function(byteArray) {
          var that = this;
  
          Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
          Module['removeRunDependency']('fp ' + that.name);
  
          this.requests[this.name] = null;
        }
      };
  
          var files = metadata['files'];
          for (var i = 0; i < files.length; ++i) {
            new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio']).open('GET', files[i]['filename']);
          }
  
    
      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        
          // Reuse the bytearray from the XHR as the source for file reads.
          DataRequest.prototype.byteArray = byteArray;
    
            var files = metadata['files'];
            for (var i = 0; i < files.length; ++i) {
              DataRequest.prototype.requests[files[i].filename].onload();
            }
                Module['removeRunDependency']('datafile_./public/php-web.data');

      };
      Module['addRunDependency']('datafile_./public/php-web.data');
    
      if (!Module.preloadResults) Module.preloadResults = {};
    
        Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
        if (fetched) {
          processPackageData(fetched);
          fetched = null;
        } else {
          fetchedCallback = processPackageData;
        }
      
    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }
  
   }
   loadPackage({"files": [{"filename": "/src/api-platform-light/composer.lock", "start": 0, "end": 121326, "audio": 0}, {"filename": "/src/api-platform-light/composer.json", "start": 121326, "end": 121930, "audio": 0}, {"filename": "/src/api-platform-light/index.php", "start": 121930, "end": 153536, "audio": 0}, {"filename": "/src/api-platform-light/vendor/autoload.php", "start": 153536, "end": 153714, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/update-js.sh", "start": 153714, "end": 155537, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/README.md", "start": 155537, "end": 157457, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.editorconfig", "start": 157457, "end": 158628, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/CHANGELOG.md", "start": 158628, "end": 204690, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/composer.json", "start": 204690, "end": 210226, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/behat.yml.dist", "start": 210226, "end": 215257, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/LICENSE", "start": 215257, "end": 216340, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.gitattributes", "start": 216340, "end": 216732, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.php_cs.dist", "start": 216732, "end": 220138, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/CONTRIBUTING.md", "start": 220138, "end": 225057, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/phpunit_mongodb.xml", "start": 225057, "end": 226541, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/phpstan.neon.dist", "start": 226541, "end": 235490, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.gitignore", "start": 235490, "end": 235692, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/yarn.lock", "start": 235692, "end": 344575, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/phpunit.xml.dist", "start": 344575, "end": 346428, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/serializer/deserialize_objects_using_constructor.feature", "start": 346428, "end": 347566, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/serializer/property_filter.feature", "start": 347566, "end": 361900, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/serializer/vo_relations.feature", "start": 361900, "end": 367457, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/serializer/group_filter.feature", "start": 367457, "end": 398857, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/http_cache/headers.feature", "start": 398857, "end": 399429, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/http_cache/tags.feature", "start": 399429, "end": 404576, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/push_relations/push.feature", "start": 404576, "end": 405538, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/openapi/docs.feature", "start": 405538, "end": 419466, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/doctrine/search_filter.feature", "start": 419466, "end": 452068, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/doctrine/numeric_filter.feature", "start": 452068, "end": 459825, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/doctrine/order_filter.feature", "start": 459825, "end": 490934, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/doctrine/range_filter.feature", "start": 490934, "end": 508957, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/doctrine/date_filter.feature", "start": 508957, "end": 533287, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/doctrine/boolean_filter.feature", "start": 533287, "end": 551390, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/doctrine/messenger.feature", "start": 551390, "end": 552971, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/doctrine/exists_filter.feature", "start": 552971, "end": 561039, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/doctrine/multiple_filter.feature", "start": 561039, "end": 562677, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/swagger/docs.feature", "start": 562677, "end": 571791, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/files/test.gif", "start": 571791, "end": 571826, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonld/network_path.feature", "start": 571826, "end": 574867, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonld/interface_as_resource.feature", "start": 574867, "end": 576527, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonld/iri_only.feature", "start": 576527, "end": 578241, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonld/context.feature", "start": 578241, "end": 581807, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonld/absolute_url.feature", "start": 581807, "end": 584727, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonld/input_output.feature", "start": 584727, "end": 595119, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonld/max_depth.feature", "start": 595119, "end": 597096, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonld/non_resource.feature", "start": 597096, "end": 600167, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonld/json_serializable.feature", "start": 600167, "end": 603575, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/json/relation.feature", "start": 603575, "end": 610048, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/json/input_output.feature", "start": 610048, "end": 611290, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/authorization/legacy_deny.feature", "start": 611290, "end": 615093, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/authorization/deny.feature", "start": 615093, "end": 621508, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/mercure/discover.feature", "start": 621508, "end": 622277, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonapi/filtering.feature", "start": 622277, "end": 624877, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonapi/network_path.feature", "start": 624877, "end": 628304, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonapi/related-resouces-inclusion.feature", "start": 628304, "end": 649593, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonapi/errors.feature", "start": 649593, "end": 651487, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonapi/ordering.feature", "start": 651487, "end": 655397, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonapi/absolute_url.feature", "start": 655397, "end": 658875, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonapi/jsonapi.feature", "start": 658875, "end": 666930, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonapi/input_output.feature", "start": 666930, "end": 668795, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonapi/collection_attributes.feature", "start": 668795, "end": 670163, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonapi/non_resource.feature", "start": 670163, "end": 673941, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/jsonapi/pagination.feature", "start": 673941, "end": 676101, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/graphql/mutation.feature", "start": 676101, "end": 707975, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/graphql/subscription.feature", "start": 707975, "end": 715302, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/graphql/type.feature", "start": 715302, "end": 717856, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/graphql/filters.feature", "start": 717856, "end": 726289, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/graphql/input_output.feature", "start": 726289, "end": 732474, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/graphql/authorization.feature", "start": 732474, "end": 740147, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/graphql/non_resource.feature", "start": 740147, "end": 742456, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/graphql/schema.feature", "start": 742456, "end": 744159, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/graphql/query.feature", "start": 744159, "end": 756472, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/graphql/collection.feature", "start": 756472, "end": 781756, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/graphql/introspection.feature", "start": 781756, "end": 796725, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/filter/property_filter.feature", "start": 796725, "end": 797791, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/filter/filter_validation.feature", "start": 797791, "end": 806967, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/security/README.md", "start": 806967, "end": 811134, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/security/validate_incoming_content-types.feature", "start": 811134, "end": 812080, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/security/strong_typing.feature", "start": 812080, "end": 818050, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/security/validate_response_types.feature", "start": 818050, "end": 820681, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/security/send_security_headers.feature", "start": 820681, "end": 822179, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/security/unknown_attributes.feature", "start": 822179, "end": 823349, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/hydra/entrypoint.feature", "start": 823349, "end": 825193, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/hydra/error.feature", "start": 825193, "end": 831038, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/hydra/docs.feature", "start": 831038, "end": 837834, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/hydra/collection.feature", "start": 837834, "end": 856346, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/hal/hal.feature", "start": 856346, "end": 861746, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/hal/network_path.feature", "start": 861746, "end": 864942, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/hal/absolute_url.feature", "start": 864942, "end": 868327, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/hal/input_output.feature", "start": 868327, "end": 869994, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/hal/max_depth.feature", "start": 869994, "end": 873526, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/hal/non_resource.feature", "start": 873526, "end": 874695, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/hal/problem.feature", "start": 874695, "end": 876571, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/hal/collection.feature", "start": 876571, "end": 894214, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/uuid.feature", "start": 894214, "end": 900124, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/content_negotiation.feature", "start": 900124, "end": 906887, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/composite.feature", "start": 906887, "end": 911867, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/relation.feature", "start": 911867, "end": 928722, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/serializable_item_data_provider.feature", "start": 928722, "end": 929282, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/crud_abstract.feature", "start": 929282, "end": 934545, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/custom_writable_identifier.feature", "start": 934545, "end": 938878, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/custom_normalized.feature", "start": 938878, "end": 944729, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/table_inheritance.feature", "start": 944729, "end": 966699, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/patch.feature", "start": 966699, "end": 967811, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/operation.feature", "start": 967811, "end": 970602, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/custom_identifier.feature", "start": 970602, "end": 974617, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/custom_operation.feature", "start": 974617, "end": 978188, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/url_encoded_id.feature", "start": 978188, "end": 979186, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/validation.feature", "start": 979186, "end": 981452, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/overridden_operation.feature", "start": 981452, "end": 986056, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/headers.feature", "start": 986056, "end": 986374, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/circular_reference.feature", "start": 986374, "end": 989095, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/custom_identifier_with_subresource.feature", "start": 989095, "end": 992155, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/default_order.feature", "start": 992155, "end": 998075, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/subresource.feature", "start": 998075, "end": 1011993, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/configurable.feature", "start": 1011993, "end": 1013958, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/exposed_state.feature", "start": 1013958, "end": 1015291, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/main/crud.feature", "start": 1015291, "end": 1033506, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/elasticsearch/order_filter.feature", "start": 1033506, "end": 1045104, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/elasticsearch/read.feature", "start": 1045104, "end": 1058596, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/elasticsearch/match_filter.feature", "start": 1058596, "end": 1065514, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/elasticsearch/term_filter.feature", "start": 1065514, "end": 1074363, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/features/mongodb/filters.feature", "start": 1074363, "end": 1076283, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.github/FUNDING.yml", "start": 1076283, "end": 1076323, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.github/workflows/ci.yml", "start": 1076323, "end": 1108014, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/OpenApi.php", "start": 1108014, "end": 1111265, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Options.php", "start": 1111265, "end": 1113689, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/Response.php", "start": 1113689, "end": 1115464, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/Parameter.php", "start": 1115464, "end": 1120424, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/MediaType.php", "start": 1120424, "end": 1122158, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/ExternalDocumentation.php", "start": 1122158, "end": 1123219, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/SecurityScheme.php", "start": 1123219, "end": 1126276, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/Components.php", "start": 1126276, "end": 1129969, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/Contact.php", "start": 1129969, "end": 1131248, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/Schema.php", "start": 1131248, "end": 1134969, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/OAuthFlow.php", "start": 1134969, "end": 1136811, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/ExtensionTrait.php", "start": 1136811, "end": 1137562, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/Info.php", "start": 1137562, "end": 1139986, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/License.php", "start": 1139986, "end": 1140953, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/Paths.php", "start": 1140953, "end": 1141616, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/PathItem.php", "start": 1141616, "end": 1146258, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/Link.php", "start": 1146258, "end": 1148406, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/Operation.php", "start": 1148406, "end": 1153182, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/Server.php", "start": 1153182, "end": 1154586, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/OAuthFlows.php", "start": 1154586, "end": 1156548, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/RequestBody.php", "start": 1156548, "end": 1157988, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Model/Encoding.php", "start": 1157988, "end": 1160098, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Serializer/OpenApiNormalizer.php", "start": 1160098, "end": 1162692, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Factory/OpenApiFactory.php", "start": 1162692, "end": 1187284, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/OpenApi/Factory/OpenApiFactoryInterface.php", "start": 1187284, "end": 1187781, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Operation/UnderscorePathSegmentNameGenerator.php", "start": 1187781, "end": 1188632, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Operation/PathSegmentNameGeneratorInterface.php", "start": 1188632, "end": 1189469, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Operation/DashPathSegmentNameGenerator.php", "start": 1189469, "end": 1190438, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Operation/Factory/SubresourceOperationFactory.php", "start": 1190438, "end": 1200171, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Operation/Factory/CachedSubresourceOperationFactory.php", "start": 1200171, "end": 1201334, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Operation/Factory/SubresourceOperationFactoryInterface.php", "start": 1201334, "end": 1201924, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Filter/QueryParameterValidator.php", "start": 1201924, "end": 1203708, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Filter/Validator/Pattern.php", "start": 1203708, "end": 1204667, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Filter/Validator/Bounds.php", "start": 1204667, "end": 1206348, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Filter/Validator/ValidatorInterface.php", "start": 1206348, "end": 1207127, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Filter/Validator/Enum.php", "start": 1207127, "end": 1208086, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Filter/Validator/Required.php", "start": 1208086, "end": 1211021, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Filter/Validator/ArrayItems.php", "start": 1211021, "end": 1213529, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Filter/Validator/MultipleOf.php", "start": 1213529, "end": 1214500, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Filter/Validator/Length.php", "start": 1214500, "end": 1215770, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonLd/AnonymousContextBuilderInterface.php", "start": 1215770, "end": 1216605, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonLd/ContextBuilder.php", "start": 1216605, "end": 1223396, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonLd/ContextBuilderInterface.php", "start": 1223396, "end": 1225092, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonLd/Action/ContextAction.php", "start": 1225092, "end": 1227327, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonLd/Serializer/JsonLdContextTrait.php", "start": 1227327, "end": 1229233, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonLd/Serializer/ItemNormalizer.php", "start": 1229233, "end": 1234249, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonLd/Serializer/ObjectNormalizer.php", "start": 1234249, "end": 1237391, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Action/PlaceholderAction.php", "start": 1237391, "end": 1237981, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Action/EntrypointAction.php", "start": 1237981, "end": 1238905, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Action/NotFoundAction.php", "start": 1238905, "end": 1239488, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Action/ExceptionAction.php", "start": 1239488, "end": 1241902, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataTransformer/DataTransformerInterface.php", "start": 1241902, "end": 1242961, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataTransformer/DataTransformerInitializerInterface.php", "start": 1242961, "end": 1243679, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/HttpCache/VarnishPurger.php", "start": 1243679, "end": 1246313, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/HttpCache/PurgerInterface.php", "start": 1246313, "end": 1246928, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/HttpCache/EventListener/AddTagsListener.php", "start": 1246928, "end": 1248905, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/HttpCache/EventListener/AddHeadersListener.php", "start": 1248905, "end": 1253059, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Executor.php", "start": 1253059, "end": 1254044, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/ExecutorInterface.php", "start": 1254044, "end": 1254974, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Error/ErrorHandlerInterface.php", "start": 1254974, "end": 1255697, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Error/ErrorHandler.php", "start": 1255697, "end": 1256413, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/ResourceFieldResolver.php", "start": 1256413, "end": 1258260, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/QueryItemResolverInterface.php", "start": 1258260, "end": 1258868, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/QueryCollectionResolverInterface.php", "start": 1258868, "end": 1259540, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/MutationResolverInterface.php", "start": 1259540, "end": 1260166, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/ValidateStage.php", "start": 1260166, "end": 1261665, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/ValidateStageInterface.php", "start": 1261665, "end": 1262346, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/ReadStage.php", "start": 1262346, "end": 1270033, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/ReadStageInterface.php", "start": 1270033, "end": 1270665, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/SecurityPostDenormalizeStage.php", "start": 1270665, "end": 1273146, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/SecurityPostDenormalizeStageInterface.php", "start": 1273146, "end": 1273825, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/SecurityStage.php", "start": 1273825, "end": 1275809, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/SecurityStageInterface.php", "start": 1275809, "end": 1276501, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/WriteStageInterface.php", "start": 1276501, "end": 1277151, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/SerializeStageInterface.php", "start": 1277151, "end": 1277816, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/WriteStage.php", "start": 1277816, "end": 1280182, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/DeserializeStageInterface.php", "start": 1280182, "end": 1280868, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/DeserializeStage.php", "start": 1280868, "end": 1283168, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Stage/SerializeStage.php", "start": 1283168, "end": 1291941, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Util/IdentifierTrait.php", "start": 1291941, "end": 1292674, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Factory/ItemMutationResolverFactory.php", "start": 1292674, "end": 1298608, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Factory/ItemResolverFactory.php", "start": 1298608, "end": 1303980, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Factory/ResolverFactoryInterface.php", "start": 1303980, "end": 1304575, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Factory/ItemSubscriptionResolverFactory.php", "start": 1304575, "end": 1308449, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Resolver/Factory/CollectionResolverFactory.php", "start": 1308449, "end": 1313059, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Action/EntrypointAction.php", "start": 1313059, "end": 1321432, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Action/GraphiQlAction.php", "start": 1321432, "end": 1322952, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Action/GraphQlPlaygroundAction.php", "start": 1322952, "end": 1324565, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Subscription/MercureSubscriptionIriGeneratorInterface.php", "start": 1324565, "end": 1325217, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Subscription/SubscriptionIdentifierGeneratorInterface.php", "start": 1325217, "end": 1325803, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Subscription/MercureSubscriptionIriGenerator.php", "start": 1325803, "end": 1327147, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Subscription/SubscriptionIdentifierGenerator.php", "start": 1327147, "end": 1327916, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Subscription/SubscriptionManagerInterface.php", "start": 1327916, "end": 1328557, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Subscription/SubscriptionManager.php", "start": 1328557, "end": 1332794, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Serializer/ItemNormalizer.php", "start": 1332794, "end": 1337956, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Serializer/ObjectNormalizer.php", "start": 1337956, "end": 1341014, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Serializer/SerializerContextBuilderInterface.php", "start": 1341014, "end": 1341636, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Serializer/SerializerContextBuilder.php", "start": 1341636, "end": 1346215, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Serializer/Exception/ErrorNormalizer.php", "start": 1346215, "end": 1347199, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Serializer/Exception/ValidationExceptionNormalizer.php", "start": 1347199, "end": 1349631, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Serializer/Exception/HttpExceptionNormalizer.php", "start": 1349631, "end": 1351101, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Serializer/Exception/RuntimeExceptionNormalizer.php", "start": 1351101, "end": 1352365, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/FieldsBuilder.php", "start": 1352365, "end": 1375244, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/TypeNotFoundException.php", "start": 1375244, "end": 1376194, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/TypeConverter.php", "start": 1376194, "end": 1382534, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/TypesFactory.php", "start": 1382534, "end": 1383711, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/TypesFactoryInterface.php", "start": 1383711, "end": 1384200, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/SchemaBuilderInterface.php", "start": 1384200, "end": 1384720, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/FieldsBuilderInterface.php", "start": 1384720, "end": 1386684, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/SchemaBuilder.php", "start": 1386684, "end": 1391330, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/TypeConverterInterface.php", "start": 1391330, "end": 1392447, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/TypesContainer.php", "start": 1392447, "end": 1393743, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/TypeBuilderInterface.php", "start": 1393743, "end": 1395326, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/TypesContainerInterface.php", "start": 1395326, "end": 1396770, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/TypeBuilder.php", "start": 1396770, "end": 1408670, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/Definition/UploadType.php", "start": 1408670, "end": 1411015, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/Definition/IterableType.php", "start": 1411015, "end": 1415422, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/GraphQl/Type/Definition/TypeInterface.php", "start": 1415422, "end": 1415885, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/DeserializationException.php", "start": 1415885, "end": 1416534, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/InvalidResourceException.php", "start": 1416534, "end": 1417008, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/InvalidArgumentException.php", "start": 1417008, "end": 1417500, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/ItemNotFoundException.php", "start": 1417500, "end": 1417964, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/PropertyNotFoundException.php", "start": 1417964, "end": 1418444, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/FilterValidationException.php", "start": 1418444, "end": 1419379, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/RuntimeException.php", "start": 1419379, "end": 1419846, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/ResourceClassNotSupportedException.php", "start": 1419846, "end": 1420345, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/InvalidValueException.php", "start": 1420345, "end": 1420715, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/InvalidIdentifierException.php", "start": 1420715, "end": 1421207, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/ErrorCodeSerializableInterface.php", "start": 1421207, "end": 1421755, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/ResourceClassNotFoundException.php", "start": 1421755, "end": 1422246, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Exception/ExceptionInterface.php", "start": 1422246, "end": 1422689, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonSchema/SchemaFactoryInterface.php", "start": 1422689, "end": 1423553, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonSchema/Schema.php", "start": 1423553, "end": 1427050, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonSchema/TypeFactory.php", "start": 1427050, "end": 1433273, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonSchema/SchemaFactory.php", "start": 1433273, "end": 1448877, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonSchema/TypeFactoryInterface.php", "start": 1448877, "end": 1449797, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonSchema/Command/JsonSchemaGenerateCommand.php", "start": 1449797, "end": 1454164, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Mercure/EventListener/AddLinkHeaderListener.php", "start": 1454164, "end": 1456083, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/PathResolver/DashOperationPathResolver.php", "start": 1456083, "end": 1457501, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/PathResolver/UnderscoreOperationPathResolver.php", "start": 1457501, "end": 1458949, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/PathResolver/OperationPathResolverInterface.php", "start": 1458949, "end": 1460113, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/PathResolver/CustomOperationPathResolver.php", "start": 1460113, "end": 1461525, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/PathResolver/OperationPathResolver.php", "start": 1461525, "end": 1463742, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Problem/Serializer/ErrorNormalizer.php", "start": 1463742, "end": 1466073, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Problem/Serializer/ConstraintViolationListNormalizer.php", "start": 1466073, "end": 1467947, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Problem/Serializer/ErrorNormalizerTrait.php", "start": 1467947, "end": 1469560, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Documentation/Documentation.php", "start": 1469560, "end": 1471609, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Documentation/DocumentationInterface.php", "start": 1471609, "end": 1471988, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Documentation/Action/DocumentationAction.php", "start": 1471988, "end": 1475697, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Validator/ValidatorInterface.php", "start": 1475697, "end": 1476353, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Validator/Exception/ValidationException.php", "start": 1476353, "end": 1476872, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Validator/EventListener/ValidateListener.php", "start": 1476872, "end": 1479132, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/schema/metadata.xsd", "start": 1479132, "end": 1484588, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/PropertyNameCollection.php", "start": 1484588, "end": 1485576, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/SubresourceMetadata.php", "start": 1485576, "end": 1486955, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/PropertyMetadata.php", "start": 1486955, "end": 1496748, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/InheritedPropertyNameCollectionFactory.php", "start": 1496748, "end": 1498940, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/AnnotationSubresourceMetadataFactory.php", "start": 1498940, "end": 1502667, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/SerializerPropertyMetadataFactory.php", "start": 1502667, "end": 1512333, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/CachedPropertyMetadataFactory.php", "start": 1512333, "end": 1513736, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/DefaultPropertyMetadataFactory.php", "start": 1513736, "end": 1515554, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/AnnotationPropertyMetadataFactory.php", "start": 1515554, "end": 1520540, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/PropertyMetadataFactoryInterface.php", "start": 1520540, "end": 1521334, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/ExtractorPropertyMetadataFactory.php", "start": 1521334, "end": 1526744, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/AnnotationPropertyNameCollectionFactory.php", "start": 1526744, "end": 1530157, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/CachedPropertyNameCollectionFactory.php", "start": 1530157, "end": 1531553, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/InheritedPropertyMetadataFactory.php", "start": 1531553, "end": 1533558, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/PropertyNameCollectionFactoryInterface.php", "start": 1533558, "end": 1534410, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Property/Factory/ExtractorPropertyNameCollectionFactory.php", "start": 1534410, "end": 1536860, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Extractor/AbstractExtractor.php", "start": 1536860, "end": 1540571, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Extractor/ExtractorInterface.php", "start": 1540571, "end": 1541267, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Extractor/XmlExtractor.php", "start": 1541267, "end": 1547173, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Extractor/YamlExtractor.php", "start": 1547173, "end": 1552991, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/ResourceMetadata.php", "start": 1552991, "end": 1562044, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/ToggleableOperationAttributeTrait.php", "start": 1562044, "end": 1563086, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/ResourceNameCollection.php", "start": 1563086, "end": 1564063, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/OperationResourceMetadataFactory.php", "start": 1564063, "end": 1569662, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/ResourceMetadataFactoryInterface.php", "start": 1569662, "end": 1570427, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/ShortNameResourceMetadataFactory.php", "start": 1570427, "end": 1571696, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/InputOutputResourceMetadataFactory.php", "start": 1571696, "end": 1575469, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/ResourceNameCollectionFactoryInterface.php", "start": 1575469, "end": 1576131, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/AnnotationResourceNameCollectionFactory.php", "start": 1576131, "end": 1577912, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/ExtractorResourceNameCollectionFactory.php", "start": 1577912, "end": 1579518, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/CachedResourceMetadataFactory.php", "start": 1579518, "end": 1580806, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/FormatsResourceMetadataFactory.php", "start": 1580806, "end": 1585886, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/CachedResourceNameCollectionFactory.php", "start": 1585886, "end": 1587095, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/PhpDocResourceMetadataFactory.php", "start": 1587095, "end": 1588954, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/ExtractorResourceMetadataFactory.php", "start": 1588954, "end": 1592740, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/AnnotationResourceMetadataFactory.php", "start": 1592740, "end": 1597280, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Metadata/Resource/Factory/AnnotationResourceFilterMetadataFactory.php", "start": 1597280, "end": 1600311, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Swagger/Serializer/DocumentationNormalizer.php", "start": 1600311, "end": 1641435, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Swagger/Serializer/ApiGatewayNormalizer.php", "start": 1641435, "end": 1647400, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Cache/CachedTrait.php", "start": 1647400, "end": 1648590, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/Pagination.php", "start": 1648590, "end": 1658708, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/SerializerAwareDataProviderTrait.php", "start": 1658708, "end": 1659648, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/PaginationOptions.php", "start": 1659648, "end": 1661664, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/ChainItemDataProvider.php", "start": 1661664, "end": 1664131, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/SerializerAwareDataProviderInterface.php", "start": 1664131, "end": 1664718, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/ItemDataProviderInterface.php", "start": 1664718, "end": 1665519, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/ChainSubresourceDataProvider.php", "start": 1665519, "end": 1667429, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/ContextAwareCollectionDataProviderInterface.php", "start": 1667429, "end": 1668117, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/CollectionDataProviderInterface.php", "start": 1668117, "end": 1668864, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/PartialPaginatorInterface.php", "start": 1668864, "end": 1669543, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/ArrayPaginator.php", "start": 1669543, "end": 1671554, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/SubresourceDataProviderInterface.php", "start": 1671554, "end": 1672672, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/OperationDataProviderTrait.php", "start": 1672672, "end": 1677040, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/RestrictedDataProviderInterface.php", "start": 1677040, "end": 1677563, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/PaginatorInterface.php", "start": 1677563, "end": 1678300, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/ChainCollectionDataProvider.php", "start": 1678300, "end": 1680164, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataProvider/DenormalizedIdentifiersAwareItemDataProviderInterface.php", "start": 1680164, "end": 1680881, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/ItemDataProvider.php", "start": 1680881, "end": 1685426, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/CollectionDataProvider.php", "start": 1685426, "end": 1688874, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/PropertyHelperTrait.php", "start": 1688874, "end": 1693589, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/SubresourceDataProvider.php", "start": 1693589, "end": 1702212, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Paginator.php", "start": 1702212, "end": 1707189, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Filter/FilterInterface.php", "start": 1707189, "end": 1707984, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Filter/RangeFilter.php", "start": 1707984, "end": 1711882, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Filter/SearchFilter.php", "start": 1711882, "end": 1719585, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Filter/NumericFilter.php", "start": 1719585, "end": 1722147, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Filter/AbstractFilter.php", "start": 1722147, "end": 1725613, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Filter/OrderFilter.php", "start": 1725613, "end": 1729452, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Filter/ExistsFilter.php", "start": 1729452, "end": 1733387, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Filter/DateFilter.php", "start": 1733387, "end": 1738561, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Filter/BooleanFilter.php", "start": 1738561, "end": 1740691, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Extension/AggregationItemExtensionInterface.php", "start": 1740691, "end": 1741438, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Extension/OrderExtension.php", "start": 1741438, "end": 1744867, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Extension/AggregationCollectionExtensionInterface.php", "start": 1744867, "end": 1745612, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Extension/PaginationExtension.php", "start": 1745612, "end": 1750910, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Extension/FilterExtension.php", "start": 1750910, "end": 1753067, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Extension/AggregationResultCollectionExtensionInterface.php", "start": 1753067, "end": 1754019, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Extension/AggregationResultItemExtensionInterface.php", "start": 1754019, "end": 1754971, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/Metadata/Property/DoctrineMongoDbOdmPropertyMetadataFactory.php", "start": 1754971, "end": 1757353, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/MongoDbOdm/PropertyInfo/DoctrineExtractor.php", "start": 1757353, "end": 1762887, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/DataPersister.php", "start": 1762887, "end": 1765514, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/PropertyHelperTrait.php", "start": 1765514, "end": 1771348, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Filter/ExistsFilterInterface.php", "start": 1771348, "end": 1771950, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Filter/SearchFilterTrait.php", "start": 1771950, "end": 1777585, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Filter/ExistsFilterTrait.php", "start": 1777585, "end": 1780774, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Filter/BooleanFilterTrait.php", "start": 1780774, "end": 1783821, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Filter/OrderFilterTrait.php", "start": 1783821, "end": 1786336, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Filter/DateFilterTrait.php", "start": 1786336, "end": 1788852, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Filter/RangeFilterInterface.php", "start": 1788852, "end": 1789623, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Filter/RangeFilterTrait.php", "start": 1789623, "end": 1794163, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Filter/OrderFilterInterface.php", "start": 1794163, "end": 1795174, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Filter/NumericFilterTrait.php", "start": 1795174, "end": 1799073, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Filter/DateFilterInterface.php", "start": 1799073, "end": 1800113, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Filter/SearchFilterInterface.php", "start": 1800113, "end": 1801238, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Common/Util/IdentifierManagerTrait.php", "start": 1801238, "end": 1804827, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/ItemDataProvider.php", "start": 1804827, "end": 1810094, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/CollectionDataProvider.php", "start": 1810094, "end": 1813040, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/PropertyHelperTrait.php", "start": 1813040, "end": 1816342, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/SubresourceDataProvider.php", "start": 1816342, "end": 1827908, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/AbstractPaginator.php", "start": 1827908, "end": 1829909, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/QueryAwareInterface.php", "start": 1829909, "end": 1830510, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Paginator.php", "start": 1830510, "end": 1831714, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Filter/FilterInterface.php", "start": 1831714, "end": 1832557, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Filter/RangeFilter.php", "start": 1832557, "end": 1837493, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Filter/SearchFilter.php", "start": 1837493, "end": 1849001, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Filter/ContextAwareFilterInterface.php", "start": 1849001, "end": 1849793, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Filter/NumericFilter.php", "start": 1849793, "end": 1852972, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Filter/AbstractContextAwareFilter.php", "start": 1852972, "end": 1854187, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Filter/AbstractFilter.php", "start": 1854187, "end": 1860218, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Filter/OrderFilter.php", "start": 1860218, "end": 1865291, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Filter/ExistsFilter.php", "start": 1865291, "end": 1873104, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Filter/DateFilter.php", "start": 1873104, "end": 1879644, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Filter/BooleanFilter.php", "start": 1879644, "end": 1881974, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Extension/ContextAwareQueryCollectionExtensionInterface.php", "start": 1881974, "end": 1882820, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Extension/QueryResultItemExtensionInterface.php", "start": 1882820, "end": 1883642, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Extension/ContextAwareQueryResultCollectionExtensionInterface.php", "start": 1883642, "end": 1884529, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Extension/OrderExtension.php", "start": 1884529, "end": 1887947, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Extension/QueryCollectionExtensionInterface.php", "start": 1887947, "end": 1888770, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Extension/EagerLoadingExtension.php", "start": 1888770, "end": 1903922, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Extension/QueryItemExtensionInterface.php", "start": 1903922, "end": 1904784, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Extension/PaginationExtension.php", "start": 1904784, "end": 1923056, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Extension/QueryResultCollectionExtensionInterface.php", "start": 1923056, "end": 1923928, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Extension/ContextAwareQueryResultItemExtensionInterface.php", "start": 1923928, "end": 1924803, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Extension/FilterExtension.php", "start": 1924803, "end": 1927886, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Extension/FilterEagerLoadingExtension.php", "start": 1927886, "end": 1935018, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Metadata/Property/DoctrineOrmPropertyMetadataFactory.php", "start": 1935018, "end": 1938001, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Util/QueryChecker.php", "start": 1938001, "end": 1944528, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Util/QueryNameGenerator.php", "start": 1944528, "end": 1945625, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Util/QueryBuilderHelper.php", "start": 1945625, "end": 1952617, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Util/QueryJoinParser.php", "start": 1952617, "end": 1955411, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Util/QueryNameGeneratorInterface.php", "start": 1955411, "end": 1956109, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/Orm/Util/EagerLoadingTrait.php", "start": 1956109, "end": 1959042, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/EventListener/WriteListener.php", "start": 1959042, "end": 1961387, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/EventListener/PurgeHttpCacheListener.php", "start": 1961387, "end": 1966443, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Doctrine/EventListener/PublishMercureUpdatesListener.php", "start": 1966443, "end": 1977183, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Messenger/DispatchTrait.php", "start": 1977183, "end": 1978570, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Messenger/DataPersister.php", "start": 1978570, "end": 1983052, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Messenger/DataTransformer.php", "start": 1983052, "end": 1985281, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Messenger/ContextStamp.php", "start": 1985281, "end": 1986129, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Messenger/RemoveStamp.php", "start": 1986129, "end": 1986695, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator/Validator.php", "start": 1986695, "end": 1989087, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator/ValidationGroupsGeneratorInterface.php", "start": 1989087, "end": 1989754, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator/Exception/ValidationException.php", "start": 1989754, "end": 1991421, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator/Metadata/Property/ValidatorPropertyMetadataFactory.php", "start": 1991421, "end": 1998765, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator/Metadata/Property/Restriction/PropertySchemaLengthRestriction.php", "start": 1998765, "end": 2000735, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator/Metadata/Property/Restriction/PropertySchemaFormat.php", "start": 2000735, "end": 2002311, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator/Metadata/Property/Restriction/PropertySchemaRegexRestriction.php", "start": 2002311, "end": 2003446, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator/Metadata/Property/Restriction/PropertySchemaRestrictionMetadataInterface.php", "start": 2003446, "end": 2004782, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator/EventListener/ValidationExceptionListener.php", "start": 2004782, "end": 2007107, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Validator/EventListener/ValidateListener.php", "start": 2007107, "end": 2010197, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/PropertyInfo/Metadata/Property/PropertyInfoPropertyMetadataFactory.php", "start": 2010197, "end": 2013731, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/PropertyInfo/Metadata/Property/PropertyInfoPropertyNameCollectionFactory.php", "start": 2013731, "end": 2015034, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/ApiPlatformBundle.php", "start": 2015034, "end": 2017525, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Action/SwaggerUiAction.php", "start": 2017525, "end": 2026670, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/SwaggerUi/SwaggerUiContext.php", "start": 2026670, "end": 2028525, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/SwaggerUi/SwaggerUiAction.php", "start": 2028525, "end": 2034244, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/views/SwaggerUi/index.html.twig", "start": 2034244, "end": 2039856, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/views/Graphiql/index.html.twig", "start": 2039856, "end": 2040768, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/views/DataCollector/request.html.twig", "start": 2040768, "end": 2049085, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/views/DataCollector/api-platform-icon.svg", "start": 2049085, "end": 2051494, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/views/DataCollector/api-platform.svg", "start": 2051494, "end": 2055018, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/views/GraphQlPlayground/index.html.twig", "start": 2055018, "end": 2074848, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/doctrine_mongodb_odm_mercure_publisher.xml", "start": 2074848, "end": 2076326, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/jsonld.xml", "start": 2076326, "end": 2079818, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/swagger.xml", "start": 2079818, "end": 2083432, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/symfony_uid.xml", "start": 2083432, "end": 2084245, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/http_cache.xml", "start": 2084245, "end": 2085269, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/nelmio_api_doc.xml", "start": 2085269, "end": 2086876, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/openapi.xml", "start": 2086876, "end": 2090567, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/data_persister.xml", "start": 2090567, "end": 2091219, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/filter.xml", "start": 2091219, "end": 2092178, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/test.xml", "start": 2092178, "end": 2092711, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/swagger-ui.xml", "start": 2092711, "end": 2096701, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/problem.xml", "start": 2096701, "end": 2097982, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/debug.xml", "start": 2097982, "end": 2099559, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/fos_user.xml", "start": 2099559, "end": 2100186, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/ramsey_uuid.xml", "start": 2100186, "end": 2100953, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/messenger.xml", "start": 2100953, "end": 2102152, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/doctrine_mongodb_odm.xml", "start": 2102152, "end": 2113463, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/graphql_mercure.xml", "start": 2113463, "end": 2114030, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/http_cache_tags.xml", "start": 2114030, "end": 2114951, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/data_provider.xml", "start": 2114951, "end": 2117917, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/security.xml", "start": 2117917, "end": 2120168, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/validator.xml", "start": 2120168, "end": 2123419, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/elasticsearch.xml", "start": 2123419, "end": 2134153, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/doctrine_orm_mercure_publisher.xml", "start": 2134153, "end": 2135599, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/mercure.xml", "start": 2135599, "end": 2136311, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/hydra.xml", "start": 2136311, "end": 2141399, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/api.xml", "start": 2141399, "end": 2162737, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/doctrine_orm.xml", "start": 2162737, "end": 2174713, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/graphql.xml", "start": 2174713, "end": 2192916, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/jsonapi.xml", "start": 2192916, "end": 2198812, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/hal.xml", "start": 2198812, "end": 2202243, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/doctrine_orm_http_cache_purger.xml", "start": 2202243, "end": 2203203, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/data_collector.xml", "start": 2203203, "end": 2204490, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/json_schema.xml", "start": 2204490, "end": 2206491, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/metadata/php_doc.xml", "start": 2206491, "end": 2207198, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/metadata/annotation.xml", "start": 2207198, "end": 2210342, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/metadata/xml.xml", "start": 2210342, "end": 2212635, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/metadata/metadata.xml", "start": 2212635, "end": 2219947, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/metadata/yaml.xml", "start": 2219947, "end": 2222451, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/routing/jsonld.xml", "start": 2222451, "end": 2223060, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/routing/docs.xml", "start": 2223060, "end": 2223572, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/routing/api.xml", "start": 2223572, "end": 2224190, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/routing/graphql/graphql_playground.xml", "start": 2224190, "end": 2224665, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/routing/graphql/graphql.xml", "start": 2224665, "end": 2225105, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/config/routing/graphql/graphiql.xml", "start": 2225105, "end": 2225550, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/init-graphiql.js", "start": 2225550, "end": 2227959, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/graphiql-style.css", "start": 2227959, "end": 2230798, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/style.css", "start": 2230798, "end": 2237843, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/init-redoc-ui.js", "start": 2237843, "end": 2238036, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/logo-header.svg", "start": 2238036, "end": 2245364, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/init-swagger-ui.js", "start": 2245364, "end": 2250923, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/init-graphql-playground.js", "start": 2250923, "end": 2251362, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/web.png", "start": 2251362, "end": 2273291, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/webby.png", "start": 2273291, "end": 2280552, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/es6-promise/es6-promise.auto.min.js", "start": 2280552, "end": 2287136, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/redoc/redoc.standalone.js", "start": 2287136, "end": 3212904, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/react/react.production.min.js", "start": 3212904, "end": 3225367, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/react/react-dom.production.min.js", "start": 3225367, "end": 3344023, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/graphiql/graphiql.min.js", "start": 3344023, "end": 4097192, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/graphiql/graphiql.css", "start": 4097192, "end": 4132058, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/fetch/fetch.js", "start": 4132058, "end": 4147014, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/swagger-ui/swagger-ui-bundle.js", "start": 4147014, "end": 5182769, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/swagger-ui/swagger-ui-bundle.js.map", "start": 5182769, "end": 9762340, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/swagger-ui/swagger-ui-standalone-preset.js.map", "start": 9762340, "end": 11261465, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/swagger-ui/swagger-ui.css", "start": 11261465, "end": 11404409, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/swagger-ui/swagger-ui-standalone-preset.js", "start": 11404409, "end": 11734058, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/swagger-ui/swagger-ui.css.map", "start": 11734058, "end": 12015306, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/swagger-ui/oauth2-redirect.html", "start": 12015306, "end": 12017806, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/graphql-playground/middleware.js", "start": 12017806, "end": 14377841, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/public/graphql-playground/index.css", "start": 14377841, "end": 14378554, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/CacheWarmer/CachePoolClearerCacheWarmer.php", "start": 14378554, "end": 14379886, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DataProvider/TraceableChainItemDataProvider.php", "start": 14379886, "end": 14383058, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DataProvider/TraceableChainCollectionDataProvider.php", "start": 14383058, "end": 14385658, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DataProvider/TraceableChainSubresourceDataProvider.php", "start": 14385658, "end": 14388277, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DataPersister/TraceableChainDataPersister.php", "start": 14388277, "end": 14390515, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/EventListener/SwaggerUiListener.php", "start": 14390515, "end": 14391461, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DataCollector/RequestDataCollector.php", "start": 14391461, "end": 14398149, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DependencyInjection/Configuration.php", "start": 14398149, "end": 14429937, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DependencyInjection/ApiPlatformExtension.php", "start": 14429937, "end": 14466705, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DependencyInjection/Compiler/GraphQlQueryResolverPass.php", "start": 14466705, "end": 14468020, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DependencyInjection/Compiler/DataProviderPass.php", "start": 14468020, "end": 14469676, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DependencyInjection/Compiler/DeprecateMercurePublisherPass.php", "start": 14469676, "end": 14471130, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DependencyInjection/Compiler/FilterPass.php", "start": 14471130, "end": 14472575, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DependencyInjection/Compiler/GraphQlTypePass.php", "start": 14472575, "end": 14473958, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DependencyInjection/Compiler/AnnotationFilterPass.php", "start": 14473958, "end": 14477603, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DependencyInjection/Compiler/ElasticsearchClientPass.php", "start": 14477603, "end": 14479321, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DependencyInjection/Compiler/GraphQlMutationResolverPass.php", "start": 14479321, "end": 14480659, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/DependencyInjection/Compiler/MetadataAwareNameConverterPass.php", "start": 14480659, "end": 14482388, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Test/Response.php", "start": 14482388, "end": 14487456, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Test/ApiTestAssertionsTrait.php", "start": 14487456, "end": 14493529, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Test/ApiTestCase.php", "start": 14493529, "end": 14497051, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Test/Client.php", "start": 14497051, "end": 14504011, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Test/BrowserKitAssertionsTrait.php", "start": 14504011, "end": 14510883, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Test/Constraint/ArraySubsetTrait.php", "start": 14510883, "end": 14513479, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Test/Constraint/MatchesJsonSchema.php", "start": 14513479, "end": 14516503, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Test/Constraint/ArraySubsetLegacy.php", "start": 14516503, "end": 14517212, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Test/Constraint/ArraySubset.php", "start": 14517212, "end": 14518317, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Test/Constraint/ArraySubsetV9.php", "start": 14518317, "end": 14519042, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Command/SwaggerCommand.php", "start": 14519042, "end": 14523707, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Command/GraphQlExportCommand.php", "start": 14523707, "end": 14525955, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Command/OpenApiCommand.php", "start": 14525955, "end": 14529284, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Identifier/Normalizer/UlidNormalizer.php", "start": 14529284, "end": 14530453, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Identifier/Normalizer/UuidNormalizer.php", "start": 14530453, "end": 14531622, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Routing/IriConverter.php", "start": 14531622, "end": 14539772, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Routing/RouteNameResolver.php", "start": 14539772, "end": 14542198, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Routing/RouteNameGenerator.php", "start": 14542198, "end": 14544180, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Routing/RouterOperationPathResolver.php", "start": 14544180, "end": 14546704, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Routing/Router.php", "start": 14546704, "end": 14549799, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Routing/CachedRouteNameResolver.php", "start": 14549799, "end": 14551222, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Routing/OperationMethodResolverInterface.php", "start": 14551222, "end": 14552336, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Routing/OperationMethodResolver.php", "start": 14552336, "end": 14557719, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Routing/ApiLoader.php", "start": 14557719, "end": 14569669, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Symfony/Routing/RouteNameResolverInterface.php", "start": 14569669, "end": 14570470, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/RamseyUuid/Serializer/UuidDenormalizer.php", "start": 14570470, "end": 14571280, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/RamseyUuid/Identifier/Normalizer/UuidNormalizer.php", "start": 14571280, "end": 14572571, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Exception/IndexNotFoundException.php", "start": 14572571, "end": 14573151, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Exception/NonUniqueIdentifierException.php", "start": 14573151, "end": 14573743, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Metadata/Resource/Factory/ElasticsearchOperationResourceMetadataFactory.php", "start": 14573743, "end": 14575207, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Metadata/Document/DocumentMetadata.php", "start": 14575207, "end": 14576717, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Metadata/Document/Factory/CachedDocumentMetadataFactory.php", "start": 14576717, "end": 14579250, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Metadata/Document/Factory/AttributeDocumentMetadataFactory.php", "start": 14579250, "end": 14581871, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Metadata/Document/Factory/ConfiguredDocumentMetadataFactory.php", "start": 14581871, "end": 14583862, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Metadata/Document/Factory/DocumentMetadataFactoryInterface.php", "start": 14583862, "end": 14584699, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Metadata/Document/Factory/CatDocumentMetadataFactory.php", "start": 14584699, "end": 14587535, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/ItemDataProvider.php", "start": 14587535, "end": 14591593, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/CollectionDataProvider.php", "start": 14591593, "end": 14596174, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Paginator.php", "start": 14596174, "end": 14599598, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Filter/FilterInterface.php", "start": 14599598, "end": 14600305, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Filter/SortFilterInterface.php", "start": 14600305, "end": 14600830, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Filter/AbstractSearchFilter.php", "start": 14600830, "end": 14607380, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Filter/TermFilter.php", "start": 14607380, "end": 14608625, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Filter/ConstantScoreFilterInterface.php", "start": 14608625, "end": 14609174, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Filter/MatchFilter.php", "start": 14609174, "end": 14610357, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Filter/AbstractFilter.php", "start": 14610357, "end": 14615434, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Filter/OrderFilter.php", "start": 14615434, "end": 14619109, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Extension/SortFilterExtension.php", "start": 14619109, "end": 14620266, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Extension/RequestBodySearchCollectionExtensionInterface.php", "start": 14620266, "end": 14621075, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Extension/ConstantScoreFilterExtension.php", "start": 14621075, "end": 14622361, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Extension/AbstractFilterExtension.php", "start": 14622361, "end": 14624674, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/DataProvider/Extension/SortExtension.php", "start": 14624674, "end": 14628445, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Serializer/ItemNormalizer.php", "start": 14628445, "end": 14631997, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Serializer/NameConverter/InnerFieldsNameConverter.php", "start": 14631997, "end": 14633979, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Api/IdentifierExtractor.php", "start": 14633979, "end": 14635405, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Api/IdentifierExtractorInterface.php", "start": 14635405, "end": 14636177, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/Elasticsearch/Util/FieldDatatypeTrait.php", "start": 14636177, "end": 14638879, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/FosUser/EventListener.php", "start": 14638879, "end": 14640408, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/NelmioApiDoc/Parser/ApiPlatformParser.php", "start": 14640408, "end": 14651013, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Bridge/NelmioApiDoc/Extractor/AnnotationsProvider/ApiPlatformProvider.php", "start": 14651013, "end": 14659793, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/JsonEncoder.php", "start": 14659793, "end": 14662313, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/AbstractConstraintViolationListNormalizer.php", "start": 14662313, "end": 14665272, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/ContextTrait.php", "start": 14665272, "end": 14665984, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/ItemNormalizer.php", "start": 14665984, "end": 14670502, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/CacheKeyTrait.php", "start": 14670502, "end": 14671460, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/InputOutputMetadataTrait.php", "start": 14671460, "end": 14672929, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/AbstractItemNormalizer.php", "start": 14672929, "end": 14706943, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/ResourceList.php", "start": 14706943, "end": 14707314, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/SerializerContextBuilderInterface.php", "start": 14707314, "end": 14708105, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/SerializerFilterContextBuilder.php", "start": 14708105, "end": 14710383, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/SerializerContextBuilder.php", "start": 14710383, "end": 14714981, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/AbstractCollectionNormalizer.php", "start": 14714981, "end": 14719602, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/Filter/FilterInterface.php", "start": 14719602, "end": 14720372, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/Filter/PropertyFilter.php", "start": 14720372, "end": 14726289, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Serializer/Filter/GroupFilter.php", "start": 14726289, "end": 14728448, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Security/ResourceAccessCheckerInterface.php", "start": 14728448, "end": 14729133, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Security/ExpressionLanguage.php", "start": 14729133, "end": 14730807, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Security/ResourceAccessChecker.php", "start": 14730807, "end": 14734863, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Security/Core/Authorization/ExpressionLanguageProvider.php", "start": 14734863, "end": 14735995, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Security/EventListener/DenyAccessListener.php", "start": 14735995, "end": 14740971, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Identifier/ContextAwareIdentifierConverterInterface.php", "start": 14740971, "end": 14741601, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Identifier/IdentifierConverterInterface.php", "start": 14741601, "end": 14742662, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Identifier/IdentifierConverter.php", "start": 14742662, "end": 14746123, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Identifier/CompositeIdentifierParser.php", "start": 14746123, "end": 14747723, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Identifier/Normalizer/DateTimeIdentifierDenormalizer.php", "start": 14747723, "end": 14748772, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Identifier/Normalizer/IntegerDenormalizer.php", "start": 14748772, "end": 14750013, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hal/Serializer/ItemNormalizer.php", "start": 14750013, "end": 14758574, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hal/Serializer/ObjectNormalizer.php", "start": 14758574, "end": 14761541, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hal/Serializer/CollectionNormalizer.php", "start": 14761541, "end": 14765325, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hal/Serializer/EntrypointNormalizer.php", "start": 14765325, "end": 14767869, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataPersister/ChainDataPersister.php", "start": 14767869, "end": 14769558, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataPersister/ContextAwareDataPersisterInterface.php", "start": 14769558, "end": 14770323, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/DataPersister/DataPersisterInterface.php", "start": 14770323, "end": 14771140, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/EventListener/WriteListener.php", "start": 14771140, "end": 14775483, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/EventListener/ReadListener.php", "start": 14775483, "end": 14780520, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/EventListener/EventPriorities.php", "start": 14780520, "end": 14781442, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/EventListener/ExceptionListener.php", "start": 14781442, "end": 14783178, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/EventListener/AddFormatListener.php", "start": 14783178, "end": 14790134, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/EventListener/QueryParameterValidateListener.php", "start": 14790134, "end": 14792244, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/EventListener/SerializeListener.php", "start": 14792244, "end": 14797110, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/EventListener/DeserializeListener.php", "start": 14797110, "end": 14802555, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/EventListener/RespondListener.php", "start": 14802555, "end": 14806611, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/CachedIdentifiersExtractor.php", "start": 14806611, "end": 14811115, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/FilterLocatorTrait.php", "start": 14811115, "end": 14813291, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/IdentifiersExtractor.php", "start": 14813291, "end": 14817613, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/FilterInterface.php", "start": 14817613, "end": 14819283, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/OperationAwareFormatsProviderInterface.php", "start": 14819283, "end": 14820063, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/IdentifiersExtractorInterface.php", "start": 14820063, "end": 14820938, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/UrlGeneratorInterface.php", "start": 14820938, "end": 14823921, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/FormatMatcher.php", "start": 14823921, "end": 14825469, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/Entrypoint.php", "start": 14825469, "end": 14826293, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/FormatsProviderInterface.php", "start": 14826293, "end": 14826977, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/FormatsProvider.php", "start": 14826977, "end": 14830853, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/OperationTypeDeprecationHelper.php", "start": 14830853, "end": 14832061, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/OperationMethodResolverInterface.php", "start": 14832061, "end": 14833134, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/FilterCollectionFactory.php", "start": 14833134, "end": 14834258, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/OperationType.php", "start": 14834258, "end": 14834785, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/IriConverterInterface.php", "start": 14834785, "end": 14836750, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/FilterCollection.php", "start": 14836750, "end": 14837720, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/ResourceClassResolverInterface.php", "start": 14837720, "end": 14838728, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Api/ResourceClassResolver.php", "start": 14838728, "end": 14842707, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/CorsTrait.php", "start": 14842707, "end": 14843428, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/ResourceClassInfoTrait.php", "start": 14843428, "end": 14845602, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/Inflector.php", "start": 14845602, "end": 14847009, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/IriHelper.php", "start": 14847009, "end": 14850461, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/RequestParser.php", "start": 14850461, "end": 14853817, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/CloneTrait.php", "start": 14853817, "end": 14854566, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/AttributesExtractor.php", "start": 14854566, "end": 14856748, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/Reflection.php", "start": 14856748, "end": 14857693, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/ClassInfoTrait.php", "start": 14857693, "end": 14859137, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/AnnotationFilterExtractorTrait.php", "start": 14859137, "end": 14864120, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/ArrayTrait.php", "start": 14864120, "end": 14865102, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/RequestAttributesExtractor.php", "start": 14865102, "end": 14866002, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/ReflectionClassRecursiveIterator.php", "start": 14866002, "end": 14867962, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/ErrorFormatGuesser.php", "start": 14867962, "end": 14869399, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Util/SortTrait.php", "start": 14869399, "end": 14870135, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hydra/JsonSchema/SchemaFactory.php", "start": 14870135, "end": 14875012, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hydra/Serializer/ErrorNormalizer.php", "start": 14875012, "end": 14877571, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hydra/Serializer/CollectionFiltersNormalizer.php", "start": 14877571, "end": 14882784, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hydra/Serializer/ConstraintViolationListNormalizer.php", "start": 14882784, "end": 14884517, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hydra/Serializer/PartialCollectionViewNormalizer.php", "start": 14884517, "end": 14891679, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hydra/Serializer/CollectionNormalizer.php", "start": 14891679, "end": 14896044, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hydra/Serializer/DocumentationNormalizer.php", "start": 14896044, "end": 14920333, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hydra/Serializer/EntrypointNormalizer.php", "start": 14920333, "end": 14923053, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Hydra/EventListener/AddLinkHeaderListener.php", "start": 14923053, "end": 14924724, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Test/DoctrineMongoDbOdmSetup.php", "start": 14924724, "end": 14928271, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Test/DoctrineOrmFilterTestCase.php", "start": 14928271, "end": 14932508, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Test/DoctrineMongoDbOdmFilterTestCase.php", "start": 14932508, "end": 14935332, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Test/DoctrineMongoDbOdmTestCase.php", "start": 14935332, "end": 14936843, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonApi/Serializer/ErrorNormalizer.php", "start": 14936843, "end": 14939149, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonApi/Serializer/ItemNormalizer.php", "start": 14939149, "end": 14953790, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonApi/Serializer/ReservedAttributeNameConverter.php", "start": 14953790, "end": 14955842, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonApi/Serializer/ConstraintViolationListNormalizer.php", "start": 14955842, "end": 14958886, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonApi/Serializer/ObjectNormalizer.php", "start": 14958886, "end": 14962205, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonApi/Serializer/CollectionNormalizer.php", "start": 14962205, "end": 14966397, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonApi/Serializer/EntrypointNormalizer.php", "start": 14966397, "end": 14969040, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonApi/EventListener/TransformPaginationParametersListener.php", "start": 14969040, "end": 14970333, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonApi/EventListener/TransformFieldsetsParametersListener.php", "start": 14970333, "end": 14972910, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonApi/EventListener/TransformSortingParametersListener.php", "start": 14972910, "end": 14974775, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/JsonApi/EventListener/TransformFilteringParametersListener.php", "start": 14974775, "end": 14975953, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Annotation/ApiSubresource.php", "start": 14975953, "end": 14976478, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Annotation/AttributesHydratorTrait.php", "start": 14976478, "end": 14978775, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Annotation/ApiResource.php", "start": 14978775, "end": 14992715, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Annotation/ApiProperty.php", "start": 14992715, "end": 14995647, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/src/Annotation/ApiFilter.php", "start": 14995647, "end": 14997420, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/ProphecyTrait.php", "start": 14997420, "end": 15000930, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/OpenApi/Serializer/OpenApiNormalizerTest.php", "start": 15000930, "end": 15010501, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/OpenApi/Factory/OpenApiFactoryTest.php", "start": 15010501, "end": 15047294, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Operation/DashedPathSegmentNameGeneratorTest.php", "start": 15047294, "end": 15048070, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Operation/Factory/CachedSubresourceOperationFactoryTest.php", "start": 15048070, "end": 15052545, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Operation/Factory/SubresourceOperationFactoryTest.php", "start": 15052545, "end": 15110996, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Filter/QueryParameterValidatorTest.php", "start": 15110996, "end": 15114664, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Filter/Validator/BoundsTest.php", "start": 15114664, "end": 15119115, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Filter/Validator/ArrayItemsTest.php", "start": 15119115, "end": 15124945, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Filter/Validator/MultipleOfTest.php", "start": 15124945, "end": 15126676, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Filter/Validator/RequiredTest.php", "start": 15126676, "end": 15129291, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Filter/Validator/EnumTest.php", "start": 15129291, "end": 15130927, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Filter/Validator/PatternTest.php", "start": 15130927, "end": 15133520, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Filter/Validator/LengthTest.php", "start": 15133520, "end": 15137109, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyResourceInterface.php", "start": 15137109, "end": 15137500, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyObjectWithOnlyPrivateProperty.php", "start": 15137500, "end": 15137873, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyEntityFilterAnnotated.php", "start": 15137873, "end": 15138632, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyObjectWithoutProperty.php", "start": 15138632, "end": 15138979, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/ArrayAccessible.php", "start": 15138979, "end": 15140076, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/ClassWithNoDocBlock.php", "start": 15140076, "end": 15140444, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyObjectWithoutConstructor.php", "start": 15140444, "end": 15141012, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyObjectWithOnlyPublicProperty.php", "start": 15141012, "end": 15141383, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyFilter.php", "start": 15141383, "end": 15142547, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyValidatedEntity.php", "start": 15142547, "end": 15143862, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Foo.php", "start": 15143862, "end": 15144219, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Query.php", "start": 15144219, "end": 15144773, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/AnnotatedClass.php", "start": 15144773, "end": 15145882, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/RelatedDummyEntity.php", "start": 15145882, "end": 15146305, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyObjectWithPublicAndPrivateProperty.php", "start": 15146305, "end": 15146700, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyMercurePublisher.php", "start": 15146700, "end": 15147364, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Serializable.php", "start": 15147364, "end": 15147792, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyIriWithValidationEntity.php", "start": 15147792, "end": 15149199, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyResourceImplementation.php", "start": 15149199, "end": 15149690, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyEntity.php", "start": 15149690, "end": 15150099, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/NullPurger.php", "start": 15150099, "end": 15150816, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/NotAResource.php", "start": 15150816, "end": 15151703, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/DummyObjectWithConstructor.php", "start": 15151703, "end": 15152272, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/AppKernel.php", "start": 15152272, "end": 15159130, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/bootstrap.php", "start": 15159130, "end": 15160081, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/console", "start": 15160081, "end": 15160765, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/routing_common.yml", "start": 15160765, "end": 15161024, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/config_test.yml", "start": 15161024, "end": 15167110, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/config_common.yml", "start": 15167110, "end": 15182746, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/config_behat_orm.yml", "start": 15182746, "end": 15183332, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/routing_mongodb.yml", "start": 15183332, "end": 15183681, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/api_resources_mongodb_odm.yaml", "start": 15183681, "end": 15184223, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/routing_sqlite.yml", "start": 15184223, "end": 15184261, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/routing.yml", "start": 15184261, "end": 15184309, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/config_behat_mongodb.yml", "start": 15184309, "end": 15184911, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/config_postgres.yml", "start": 15184911, "end": 15185292, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/config_elasticsearch.yml", "start": 15185292, "end": 15186025, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/routing_mysql.yml", "start": 15186025, "end": 15186063, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/config_mysql.yml", "start": 15186063, "end": 15186432, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/routing_test.yml", "start": 15186432, "end": 15186774, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/routing_postgres.yml", "start": 15186774, "end": 15186812, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/api_resources_orm.yaml", "start": 15186812, "end": 15187419, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/config_mongodb.yml", "start": 15187419, "end": 15193769, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/config_sqlite.yml", "start": 15193769, "end": 15194047, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/routing_elasticsearch.yml", "start": 15194047, "end": 15194080, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/config/api_platform/flex.yaml", "start": 15194080, "end": 15194080, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/app/public/index.php", "start": 15194080, "end": 15194683, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/JsonHal/jsonhal.json", "start": 15194683, "end": 15196784, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/JsonHal/link.json", "start": 15196784, "end": 15198161, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/JsonHal/base.json", "start": 15198161, "end": 15199432, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Elasticsearch/Mappings/tweet.json", "start": 15199432, "end": 15200187, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Elasticsearch/Mappings/user.json", "start": 15200187, "end": 15200950, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Elasticsearch/Fixtures/tweet.json", "start": 15200950, "end": 15209067, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Elasticsearch/Fixtures/user.json", "start": 15209067, "end": 15216018, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Elasticsearch/Model/User.php", "start": 15216018, "end": 15218843, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Elasticsearch/Model/Tweet.php", "start": 15218843, "end": 15220844, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/JsonSchema/jsonapi.json", "start": 15220844, "end": 15231992, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/TestBundle.php", "start": 15231992, "end": 15232471, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Doctrine/Generator/Uuid.php", "start": 15232471, "end": 15233093, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Doctrine/Generator/UuidGenerator.php", "start": 15233093, "end": 15233661, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Doctrine/Generator/DocumentUuidGenerator.php", "start": 15233661, "end": 15234631, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Doctrine/Orm/Filter/DummyFilter.php", "start": 15234631, "end": 15235728, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/BrowserKit/Client.php", "start": 15235728, "end": 15237314, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Filter/PatternFilter.php", "start": 15237314, "end": 15238634, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Filter/DoesNotImplementInterfaceFilter.php", "start": 15238634, "end": 15239106, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Filter/RequiredAllowEmptyFilter.php", "start": 15239106, "end": 15240451, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Filter/RequiredFilter.php", "start": 15240451, "end": 15241837, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Filter/NoPropertiesArgumentFilter.php", "start": 15241837, "end": 15242629, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Filter/NoConstructorFilter.php", "start": 15242629, "end": 15243297, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Filter/EnumFilter.php", "start": 15243297, "end": 15244604, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Filter/MultipleOfFilter.php", "start": 15244604, "end": 15245915, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Filter/ArrayRequiredFilter.php", "start": 15245915, "end": 15247338, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Filter/ArrayItemsFilter.php", "start": 15247338, "end": 15250036, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Filter/LengthFilter.php", "start": 15250036, "end": 15251599, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Filter/BoundsFilter.php", "start": 15251599, "end": 15253743, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Action/ConfigCustom.php", "start": 15253743, "end": 15254726, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataTransformer/OutputDtoSameClassTransformer.php", "start": 15254726, "end": 15256799, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataTransformer/InitializeInputDataTransformer.php", "start": 15256799, "end": 15258757, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataTransformer/CustomInputDtoDataTransformer.php", "start": 15258757, "end": 15260418, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataTransformer/DummyDtoNoInputToOutputDtoDataTransformer.php", "start": 15260418, "end": 15262081, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataTransformer/InputDtoDataTransformer.php", "start": 15262081, "end": 15264022, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataTransformer/OutputDtoDataTransformer.php", "start": 15264022, "end": 15265915, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataTransformer/MessengerWithArrayDtoDataTransformer.php", "start": 15265915, "end": 15267408, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataTransformer/RecoverPasswordInputDataTransformer.php", "start": 15267408, "end": 15268884, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataTransformer/CustomOutputDtoDataTransformer.php", "start": 15268884, "end": 15270699, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataTransformer/RecoverPasswordOutputDataTransformer.php", "start": 15270699, "end": 15271870, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Resources/config/api_resources.yml", "start": 15271870, "end": 15272173, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Resources/config/serialization/abstract_dummy.yml", "start": 15272173, "end": 15272618, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Resources/config/api_resources/my_resource.yml", "start": 15272618, "end": 15272853, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/SumMutationResolver.php", "start": 15272853, "end": 15274082, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/DummyCustomQueryCollectionResolver.php", "start": 15274082, "end": 15275287, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/SumOnlyPersistMutationResolver.php", "start": 15275287, "end": 15276325, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/DummyCustomQueryNoReadAndSerializeCollectionResolver.php", "start": 15276325, "end": 15277692, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/UploadMultipleMediaObjectResolver.php", "start": 15277692, "end": 15279204, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/SumOnlyPersistDocumentMutationResolver.php", "start": 15279204, "end": 15280299, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/UploadMediaObjectResolver.php", "start": 15280299, "end": 15281485, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/DummyCustomQueryNoReadAndSerializeItemDocumentResolver.php", "start": 15281485, "end": 15282643, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/DummyCustomQueryNotRetrievedItemDocumentResolver.php", "start": 15282643, "end": 15283850, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/DummyCustomQueryItemResolver.php", "start": 15283850, "end": 15284917, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/SumNoWriteCustomResultMutationResolver.php", "start": 15284917, "end": 15285962, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/DummyCustomQueryNoReadAndSerializeItemResolver.php", "start": 15285962, "end": 15287058, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/SumNotPersistedMutationResolver.php", "start": 15287058, "end": 15288037, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Resolver/DummyCustomQueryNotRetrievedItemResolver.php", "start": 15288037, "end": 15289228, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Type/TypeConverter.php", "start": 15289228, "end": 15291134, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/GraphQl/Type/Definition/DateTimeType.php", "start": 15291134, "end": 15293622, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Validator/DummyValidationGroupsGenerator.php", "start": 15293622, "end": 15294336, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Enum/ContentStatus.php", "start": 15294336, "end": 15295974, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/MessengerHandler/MessengerWithResponseHandler.php", "start": 15295974, "end": 15296861, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/MessengerHandler/Document/MessengerWithInputHandler.php", "start": 15296861, "end": 15297677, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/MessengerHandler/Entity/MessengerWithInputHandler.php", "start": 15297677, "end": 15298489, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataProvider/DummyDtoNoInputCollectionDataProvider.php", "start": 15298489, "end": 15300716, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataProvider/TaxonItemDataProvider.php", "start": 15300716, "end": 15302293, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataProvider/SerializableItemDataProvider.php", "start": 15302293, "end": 15303764, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataProvider/ContainNonResourceItemDataProvider.php", "start": 15303764, "end": 15305484, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataProvider/ProductItemDataProvider.php", "start": 15305484, "end": 15307077, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataProvider/ResourceInterfaceImplementationDataProvider.php", "start": 15307077, "end": 15308615, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataProvider/GeneratorDataProvider.php", "start": 15308615, "end": 15309664, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/MessageHandler/PasswordResetRequestHandler.php", "start": 15309664, "end": 15310727, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Model/ProductInterface.php", "start": 15310727, "end": 15312061, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Model/ResourceInterface.php", "start": 15312061, "end": 15312498, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Model/MediaObject.php", "start": 15312498, "end": 15313708, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Model/TaxonInterface.php", "start": 15313708, "end": 15314824, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Model/ResourceBarInterface.php", "start": 15314824, "end": 15315225, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Model/ResourceInterfaceImplementation.php", "start": 15315225, "end": 15316247, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Model/SerializableResource.php", "start": 15316247, "end": 15317019, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/RecoverPasswordInput.php", "start": 15317019, "end": 15317555, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/PasswordResetRequestResult.php", "start": 15317555, "end": 15318292, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/NonResourceClass.php", "start": 15318292, "end": 15318769, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/MessengerResponseInput.php", "start": 15318769, "end": 15319179, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/RecoverPasswordOutput.php", "start": 15319179, "end": 15319718, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/MessengerInput.php", "start": 15319718, "end": 15320120, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/CustomOutputDto.php", "start": 15320120, "end": 15320573, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/OutputDtoDummy.php", "start": 15320573, "end": 15321024, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/PasswordResetRequest.php", "start": 15321024, "end": 15321700, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/InputDto.php", "start": 15321700, "end": 15322341, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/OutputDto.php", "start": 15322341, "end": 15323039, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/CustomInputDto.php", "start": 15323039, "end": 15323491, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/InitializeInputDto.php", "start": 15323491, "end": 15323955, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/Document/InputDto.php", "start": 15323955, "end": 15324639, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Dto/Document/OutputDto.php", "start": 15324639, "end": 15325380, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Serializer/Normalizer/OverrideDocumentationNormalizer.php", "start": 15325380, "end": 15326974, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Serializer/Denormalizer/SerializableResourceDenormalizer.php", "start": 15326974, "end": 15328131, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Serializer/NameConverter/CustomConverter.php", "start": 15328131, "end": 15329138, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/PersonToPet.php", "start": 15329138, "end": 15330098, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DisableItemOperation.php", "start": 15330098, "end": 15331132, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyTableInheritanceDifferentChild.php", "start": 15331132, "end": 15332015, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyProperty.php", "start": 15332015, "end": 15334585, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/ConvertedBoolean.php", "start": 15334585, "end": 15335509, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/VoDummyCar.php", "start": 15335509, "end": 15337435, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/PatchDummy.php", "start": 15337435, "end": 15338275, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/MessengerWithInput.php", "start": 15338275, "end": 15339059, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/ContainNonResource.php", "start": 15339059, "end": 15340207, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyDate.php", "start": 15340207, "end": 15341950, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/NoCollectionDummy.php", "start": 15341950, "end": 15342683, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Content.php", "start": 15342683, "end": 15346109, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/ConcreteDummy.php", "start": 15346109, "end": 15347050, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyCustomMutation.php", "start": 15347050, "end": 15350047, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/UuidIdentifierDummy.php", "start": 15350047, "end": 15351114, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/EmbeddableDummy.php", "start": 15351114, "end": 15353957, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/UrlEncodedId.php", "start": 15353957, "end": 15354844, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyAggregateOffer.php", "start": 15354844, "end": 15356986, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/SingleFileConfigDummy.php", "start": 15356986, "end": 15357878, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyDtoCustom.php", "start": 15357878, "end": 15359317, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/FooDummy.php", "start": 15359317, "end": 15360783, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/ConvertedDate.php", "start": 15360783, "end": 15361700, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/SecuredDummy.php", "start": 15361700, "end": 15365071, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/LegacySecuredDummy.php", "start": 15365071, "end": 15367610, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyDtoOutputSameClass.php", "start": 15367610, "end": 15368600, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/AbsoluteUrlDummy.php", "start": 15368600, "end": 15369527, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Payment.php", "start": 15369527, "end": 15371183, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Dummy.php", "start": 15371183, "end": 15378223, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyCarColor.php", "start": 15378223, "end": 15380059, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyEntityWithConstructor.php", "start": 15380059, "end": 15382223, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/VoDummyVehicle.php", "start": 15382223, "end": 15383990, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/CustomActionDummy.php", "start": 15383990, "end": 15385581, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/WritableId.php", "start": 15385581, "end": 15386328, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/InitializeInput.php", "start": 15386328, "end": 15387117, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/FilterValidator.php", "start": 15387117, "end": 15389148, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/RelatedDummy.php", "start": 15389148, "end": 15393686, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/CustomGeneratedIdentifier.php", "start": 15393686, "end": 15394567, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyCustomQuery.php", "start": 15394567, "end": 15397019, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Pet.php", "start": 15397019, "end": 15398160, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/AbsoluteUrlRelationDummy.php", "start": 15398160, "end": 15399298, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Order.php", "start": 15399298, "end": 15400477, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/ConvertedInteger.php", "start": 15400477, "end": 15401694, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/CustomMultipleIdentifierDummy.php", "start": 15401694, "end": 15403223, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyDtoOutputFallbackToSameClass.php", "start": 15403223, "end": 15404281, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Answer.php", "start": 15404281, "end": 15406909, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Address.php", "start": 15406909, "end": 15407831, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/FileConfigDummy.php", "start": 15407831, "end": 15408991, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Customer.php", "start": 15408991, "end": 15410188, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Taxon.php", "start": 15410188, "end": 15411277, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/RelatedNormalizedDummy.php", "start": 15411277, "end": 15413607, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Foo.php", "start": 15413607, "end": 15415324, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/JsonldContextDummy.php", "start": 15415324, "end": 15416591, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyProduct.php", "start": 15416591, "end": 15419329, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyOffer.php", "start": 15419329, "end": 15420826, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyTableInheritanceChild.php", "start": 15420826, "end": 15421724, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/RelatedOwnedDummy.php", "start": 15421724, "end": 15423474, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/MessengerWithPersist.php", "start": 15423474, "end": 15424282, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/RelatedOwningDummy.php", "start": 15424282, "end": 15426149, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyCustomFormat.php", "start": 15426149, "end": 15427293, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/CompositeLabel.php", "start": 15427293, "end": 15428590, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Greeting.php", "start": 15428590, "end": 15429527, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/ConvertedString.php", "start": 15429527, "end": 15430499, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/ThirdLevel.php", "start": 15430499, "end": 15432731, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyValidation.php", "start": 15432731, "end": 15435364, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/AbstractDummy.php", "start": 15435364, "end": 15436894, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/NetworkPathDummy.php", "start": 15436894, "end": 15437822, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Person.php", "start": 15437822, "end": 15439257, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DeprecatedResource.php", "start": 15439257, "end": 15440156, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/ConvertedRelated.php", "start": 15440156, "end": 15440922, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/CircularReference.php", "start": 15440922, "end": 15442162, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/CustomWritableIdentifierDummy.php", "start": 15442162, "end": 15443424, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/User.php", "start": 15443424, "end": 15447182, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyFriend.php", "start": 15447182, "end": 15448854, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/RelatedToDummyFriend.php", "start": 15448854, "end": 15451915, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/MessengerWithArray.php", "start": 15451915, "end": 15452828, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/SlugParentDummy.php", "start": 15452828, "end": 15455377, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/VoDummyInspection.php", "start": 15455377, "end": 15457502, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/RelationEmbedder.php", "start": 15457502, "end": 15459513, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/ReadableOnlyProperty.php", "start": 15459513, "end": 15460625, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/MaxDepthDummy.php", "start": 15460625, "end": 15461908, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyTableInheritanceRelated.php", "start": 15461908, "end": 15463707, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/EmbeddedDummy.php", "start": 15463707, "end": 15466577, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyGroup.php", "start": 15466577, "end": 15468923, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyTableInheritanceNotApiResourceChild.php", "start": 15468923, "end": 15469909, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Question.php", "start": 15469909, "end": 15471605, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyDifferentGraphQlSerializationGroup.php", "start": 15471605, "end": 15473410, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/FourthLevel.php", "start": 15473410, "end": 15474779, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/MaxDepthEagerDummy.php", "start": 15474779, "end": 15476072, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Product.php", "start": 15476072, "end": 15477815, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Book.php", "start": 15477815, "end": 15478861, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/CustomNormalizedDummy.php", "start": 15478861, "end": 15481118, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/VoDummyIdAwareTrait.php", "start": 15481118, "end": 15481710, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyDtoNoOutput.php", "start": 15481710, "end": 15482794, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyCar.php", "start": 15482794, "end": 15487691, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/SoMany.php", "start": 15487691, "end": 15488770, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/ParentDummy.php", "start": 15488770, "end": 15489687, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyMercure.php", "start": 15489687, "end": 15490604, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyDtoNoInput.php", "start": 15490604, "end": 15492410, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/IriOnlyDummy.php", "start": 15492410, "end": 15493557, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/ArrayFilterValidator.php", "start": 15493557, "end": 15494865, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyDtoInputOutput.php", "start": 15494865, "end": 15496289, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/ConvertedOwner.php", "start": 15496289, "end": 15497335, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/CompositeRelation.php", "start": 15497335, "end": 15499681, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/CompositeItem.php", "start": 15499681, "end": 15501332, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/SlugChildDummy.php", "start": 15501332, "end": 15503008, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/VoidPayment.php", "start": 15503008, "end": 15503995, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/VoDummyDriver.php", "start": 15503995, "end": 15505141, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/CompositePrimitiveItem.php", "start": 15505141, "end": 15506803, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/OverriddenOperationDummy.php", "start": 15506803, "end": 15510330, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/DummyTableInheritance.php", "start": 15510330, "end": 15512314, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/VoDummyInsuranceCompany.php", "start": 15512314, "end": 15513180, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/CustomIdentifierDummy.php", "start": 15513180, "end": 15514288, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/NetworkPathRelationDummy.php", "start": 15514288, "end": 15515427, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Document/Field.php", "start": 15515427, "end": 15517169, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/DataPersister/DummyDtoNoOutputDataPersister.php", "start": 15517169, "end": 15518998, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Util/AnnotationFilterExtractor.php", "start": 15518998, "end": 15519772, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/PersonToPet.php", "start": 15519772, "end": 15520664, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DisableItemOperation.php", "start": 15520664, "end": 15521761, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyForAdditionalFields.php", "start": 15521761, "end": 15522798, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyTableInheritanceDifferentChild.php", "start": 15522798, "end": 15523658, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyForAdditionalFieldsInput.php", "start": 15523658, "end": 15524318, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyProperty.php", "start": 15524318, "end": 15526869, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ConvertedBoolean.php", "start": 15526869, "end": 15527819, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Site.php", "start": 15527819, "end": 15529397, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/VoDummyCar.php", "start": 15529397, "end": 15531290, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/PatchDummy.php", "start": 15531290, "end": 15532148, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/InternalUser.php", "start": 15532148, "end": 15532866, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/MessengerWithInput.php", "start": 15532866, "end": 15533648, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ContainNonResource.php", "start": 15533648, "end": 15534813, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/UnknownDummy.php", "start": 15534813, "end": 15535466, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/FlexConfig.php", "start": 15535466, "end": 15536150, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyDate.php", "start": 15536150, "end": 15537895, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/NoCollectionDummy.php", "start": 15537895, "end": 15538645, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Relation3.php", "start": 15538645, "end": 15539840, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Content.php", "start": 15539840, "end": 15543344, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ConcreteDummy.php", "start": 15543344, "end": 15544262, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyCustomMutation.php", "start": 15544262, "end": 15547285, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/UuidIdentifierDummy.php", "start": 15547285, "end": 15548355, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyNoGetOperation.php", "start": 15548355, "end": 15549301, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/EmbeddableDummy.php", "start": 15549301, "end": 15552160, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/UrlEncodedId.php", "start": 15552160, "end": 15553040, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyAggregateOffer.php", "start": 15553040, "end": 15555165, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/SingleFileConfigDummy.php", "start": 15555165, "end": 15556075, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyDtoCustom.php", "start": 15556075, "end": 15557533, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/FooDummy.php", "start": 15557533, "end": 15558993, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ConvertedDate.php", "start": 15558993, "end": 15559936, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/SecuredDummy.php", "start": 15559936, "end": 15563278, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/LegacySecuredDummy.php", "start": 15563278, "end": 15565836, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyDtoOutputSameClass.php", "start": 15565836, "end": 15566830, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/AbsoluteUrlDummy.php", "start": 15566830, "end": 15567733, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Payment.php", "start": 15567733, "end": 15569464, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Dummy.php", "start": 15569464, "end": 15576339, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyCarColor.php", "start": 15576339, "end": 15578204, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/TruncatedDummy.php", "start": 15578204, "end": 15579038, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyEntityWithConstructor.php", "start": 15579038, "end": 15581222, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/VoDummyVehicle.php", "start": 15581222, "end": 15582948, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/CustomActionDummy.php", "start": 15582948, "end": 15584557, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/WritableId.php", "start": 15584557, "end": 15585281, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/InitializeInput.php", "start": 15585281, "end": 15586050, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/FilterValidator.php", "start": 15586050, "end": 15588050, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/RelatedDummy.php", "start": 15588050, "end": 15592463, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/CustomGeneratedIdentifier.php", "start": 15592463, "end": 15593376, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyCustomQuery.php", "start": 15593376, "end": 15595810, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Pet.php", "start": 15595810, "end": 15596958, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/AbsoluteUrlRelationDummy.php", "start": 15596958, "end": 15598085, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Order.php", "start": 15598085, "end": 15599369, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyImmutableDate.php", "start": 15599369, "end": 15600357, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ConvertedInteger.php", "start": 15600357, "end": 15601586, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/CustomMultipleIdentifierDummy.php", "start": 15601586, "end": 15603024, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyDtoOutputFallbackToSameClass.php", "start": 15603024, "end": 15604086, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Answer.php", "start": 15604086, "end": 15606710, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Address.php", "start": 15606710, "end": 15607574, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/MessengerWithResponse.php", "start": 15607574, "end": 15608302, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/FileConfigDummy.php", "start": 15608302, "end": 15609481, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Customer.php", "start": 15609481, "end": 15610649, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/UpperCaseIdentifierDummy.php", "start": 15610649, "end": 15611775, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Taxon.php", "start": 15611775, "end": 15612895, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/RelatedNormalizedDummy.php", "start": 15612895, "end": 15615233, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Foo.php", "start": 15615233, "end": 15616969, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/JsonldContextDummy.php", "start": 15616969, "end": 15618253, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyProduct.php", "start": 15618253, "end": 15620977, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyOffer.php", "start": 15620977, "end": 15622468, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyTableInheritanceChild.php", "start": 15622468, "end": 15623343, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/RelatedOwnedDummy.php", "start": 15623343, "end": 15625076, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/MessengerWithPersist.php", "start": 15625076, "end": 15625917, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyPropertyWithDefaultValue.php", "start": 15625917, "end": 15627246, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/RelatedOwningDummy.php", "start": 15627246, "end": 15629071, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyCustomFormat.php", "start": 15629071, "end": 15630233, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/CompositeLabel.php", "start": 15630233, "end": 15631548, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Greeting.php", "start": 15631548, "end": 15632552, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ConvertedString.php", "start": 15632552, "end": 15633550, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ThirdLevel.php", "start": 15633550, "end": 15635706, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/RamseyUuidDummy.php", "start": 15635706, "end": 15636550, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyValidation.php", "start": 15636550, "end": 15639203, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/AbstractDummy.php", "start": 15639203, "end": 15640746, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Relation1.php", "start": 15640746, "end": 15641483, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ExternalUser.php", "start": 15641483, "end": 15642262, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/NetworkPathDummy.php", "start": 15642262, "end": 15643166, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Person.php", "start": 15643166, "end": 15644597, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DeprecatedResource.php", "start": 15644597, "end": 15645454, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ConvertedRelated.php", "start": 15645454, "end": 15646263, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/CircularReference.php", "start": 15646263, "end": 15647499, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/CustomWritableIdentifierDummy.php", "start": 15647499, "end": 15648775, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/User.php", "start": 15648775, "end": 15652576, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/AbstractUser.php", "start": 15652576, "end": 15654267, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Relation2.php", "start": 15654267, "end": 15655149, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyFriend.php", "start": 15655149, "end": 15656775, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/RelatedToDummyFriend.php", "start": 15656775, "end": 15659749, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/MessengerWithArray.php", "start": 15659749, "end": 15660695, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/SlugParentDummy.php", "start": 15660695, "end": 15663341, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/VoDummyInspection.php", "start": 15663341, "end": 15665438, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/RelationEmbedder.php", "start": 15665438, "end": 15667448, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ReadableOnlyProperty.php", "start": 15667448, "end": 15668578, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/MaxDepthDummy.php", "start": 15668578, "end": 15669979, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyTravel.php", "start": 15669979, "end": 15671008, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyTableInheritanceRelated.php", "start": 15671008, "end": 15672847, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/EmbeddedDummy.php", "start": 15672847, "end": 15675657, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyGroup.php", "start": 15675657, "end": 15677975, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyTableInheritanceNotApiResourceChild.php", "start": 15677975, "end": 15678938, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/PlainObjectDummy.php", "start": 15678938, "end": 15679991, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Question.php", "start": 15679991, "end": 15681761, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyDifferentGraphQlSerializationGroup.php", "start": 15681761, "end": 15683616, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyPassenger.php", "start": 15683616, "end": 15684374, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/FourthLevel.php", "start": 15684374, "end": 15685724, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/MaxDepthEagerDummy.php", "start": 15685724, "end": 15687036, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Product.php", "start": 15687036, "end": 15688805, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Book.php", "start": 15688805, "end": 15689838, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/CustomNormalizedDummy.php", "start": 15689838, "end": 15692114, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/VoDummyIdAwareTrait.php", "start": 15692114, "end": 15692708, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyDtoNoOutput.php", "start": 15692708, "end": 15693811, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyCar.php", "start": 15693811, "end": 15698924, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/SoMany.php", "start": 15698924, "end": 15700007, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ParentDummy.php", "start": 15700007, "end": 15700837, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyMercure.php", "start": 15700837, "end": 15701704, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyDtoNoInput.php", "start": 15701704, "end": 15703520, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/IriOnlyDummy.php", "start": 15703520, "end": 15704685, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ArrayFilterValidator.php", "start": 15704685, "end": 15705962, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyDtoInputOutput.php", "start": 15705962, "end": 15707348, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/ConvertedOwner.php", "start": 15707348, "end": 15708380, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/CompositeRelation.php", "start": 15708380, "end": 15710686, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/CompositeItem.php", "start": 15710686, "end": 15712359, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/SlugChildDummy.php", "start": 15712359, "end": 15714193, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/VoidPayment.php", "start": 15714193, "end": 15715230, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/VoDummyDriver.php", "start": 15715230, "end": 15716354, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/CompositePrimitiveItem.php", "start": 15716354, "end": 15717811, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/NonRelationResource.php", "start": 15717811, "end": 15718618, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/OverriddenOperationDummy.php", "start": 15718618, "end": 15722166, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/DummyTableInheritance.php", "start": 15722166, "end": 15724200, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/VoDummyInsuranceCompany.php", "start": 15724200, "end": 15725043, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/CustomIdentifierDummy.php", "start": 15725043, "end": 15726180, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/NetworkPathRelationDummy.php", "start": 15726180, "end": 15727308, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Entity/Field.php", "start": 15727308, "end": 15729101, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Controller/CustomController.php", "start": 15729101, "end": 15729897, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Controller/Payment/VoidPaymentAction.php", "start": 15729897, "end": 15730703, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Controller/MongoDbOdm/CustomActionController.php", "start": 15730703, "end": 15733663, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Controller/MongoDbOdm/DummyValidationController.php", "start": 15733663, "end": 15734919, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Controller/Orm/CustomActionController.php", "start": 15734919, "end": 15737870, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Controller/Orm/DummyValidationController.php", "start": 15737870, "end": 15739119, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Controller/DummyDtoNoInput/CreateItemAction.php", "start": 15739119, "end": 15740139, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/TestBundle/Controller/DummyDtoNoInput/DoubleBatAction.php", "start": 15740139, "end": 15740956, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Metadata/schema/valid.xml", "start": 15740956, "end": 15744837, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/Metadata/schema/invalid.xml", "start": 15744837, "end": 15744882, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resourcenotfound.xml", "start": 15744882, "end": 15745310, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/interface_resource.yml", "start": 15745310, "end": 15745549, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/parse_exception.yml", "start": 15745549, "end": 15745571, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/nocollectionoperations.xml", "start": 15745571, "end": 15746248, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resources.yml", "start": 15746248, "end": 15747986, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/propertyinvalid.yml", "start": 15747986, "end": 15748119, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/empty-operation.yml", "start": 15748119, "end": 15748358, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/legacyoperations.xml", "start": 15748358, "end": 15749209, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resources_empty.yml", "start": 15749209, "end": 15749211, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/badpropertytype.yml", "start": 15749211, "end": 15749316, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resourcesoptional.xml", "start": 15749316, "end": 15749955, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resourcesoptional.yml", "start": 15749955, "end": 15750120, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/propertyinvalid.xml", "start": 15750120, "end": 15750607, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/noitemoperations.xml", "start": 15750607, "end": 15751301, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resources.xml", "start": 15751301, "end": 15754506, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resourcesinvalid.yml", "start": 15754506, "end": 15754527, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resources_empty.xml", "start": 15754527, "end": 15754832, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resources_with_parameters.yml", "start": 15754832, "end": 15756726, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resourcesinvalid_2.yml", "start": 15756726, "end": 15756758, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/propertiesinvalid.yml", "start": 15756758, "end": 15756872, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/single_resource.yml", "start": 15756872, "end": 15757773, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resourceswithoutnamespace.yml", "start": 15757773, "end": 15757802, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resourcenotfound.yml", "start": 15757802, "end": 15757889, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/empty-operation.xml", "start": 15757889, "end": 15758731, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resourcesinvalid_4.yml", "start": 15758731, "end": 15758803, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resourcesinvalid.xml", "start": 15758803, "end": 15759263, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resourcesinvalid_3.yml", "start": 15759263, "end": 15759315, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/bad_declaration.yml", "start": 15759315, "end": 15759392, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Fixtures/FileConfigurations/resources_with_parameters.xml", "start": 15759392, "end": 15762654, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonLd/ContextBuilderTest.php", "start": 15762654, "end": 15776333, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonLd/Action/ContextActionTest.php", "start": 15776333, "end": 15781106, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonLd/Serializer/ObjectNormalizerTest.php", "start": 15781106, "end": 15786856, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonLd/Serializer/ItemNormalizerTest.php", "start": 15786856, "end": 15793878, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Action/ExceptionActionTest.php", "start": 15793878, "end": 15797852, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Action/EntrypointActionTest.php", "start": 15797852, "end": 15799075, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Action/PlaceholderActionTest.php", "start": 15799075, "end": 15799752, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/HttpCache/VarnishPurgerTest.php", "start": 15799752, "end": 15802612, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/HttpCache/EventListener/AddTagsListenerTest.php", "start": 15802612, "end": 15810138, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/HttpCache/EventListener/AddHeadersListenerTest.php", "start": 15810138, "end": 15821618, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/ResourceFieldResolverTest.php", "start": 15821618, "end": 15824797, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/Stage/ReadStageTest.php", "start": 15824797, "end": 15836991, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/Stage/ValidateStageTest.php", "start": 15836991, "end": 15840525, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/Stage/SecurityStageTest.php", "start": 15840525, "end": 15845342, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/Stage/DeserializeStageTest.php", "start": 15845342, "end": 15849058, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/Stage/SerializeStageTest.php", "start": 15849058, "end": 15860498, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/Stage/SecurityPostDenormalizeStageTest.php", "start": 15860498, "end": 15866351, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/Stage/WriteStageTest.php", "start": 15866351, "end": 15871663, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/Util/IdentifierTraitTest.php", "start": 15871663, "end": 15873441, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/Factory/CollectionResolverFactoryTest.php", "start": 15873441, "end": 15882367, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/Factory/ItemMutationResolverFactoryTest.php", "start": 15882367, "end": 15898290, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/Factory/ItemResolverFactoryTest.php", "start": 15898290, "end": 15909410, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Resolver/Factory/ItemSubscriptionResolverFactoryTest.php", "start": 15909410, "end": 15918786, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Action/GraphQlPlaygroundActionTest.php", "start": 15918786, "end": 15920594, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Action/GraphiQlActionTest.php", "start": 15920594, "end": 15922329, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Action/EntrypointActionTest.php", "start": 15922329, "end": 15934138, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Action/Fixtures/test.gif", "start": 15934138, "end": 15934173, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Subscription/SubscriptionIdentifierGeneratorTest.php", "start": 15934173, "end": 15936957, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Subscription/MercureSubscriptionIriGeneratorTest.php", "start": 15936957, "end": 15938816, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Subscription/SubscriptionManagerTest.php", "start": 15938816, "end": 15948351, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Serializer/SerializerContextBuilderTest.php", "start": 15948351, "end": 15958859, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Serializer/ItemNormalizerTest.php", "start": 15958859, "end": 15968632, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Serializer/Exception/RuntimeExceptionNormalizerTest.php", "start": 15968632, "end": 15970229, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Serializer/Exception/ValidationExceptionNormalizerTest.php", "start": 15970229, "end": 15972713, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Serializer/Exception/ErrorNormalizerTest.php", "start": 15972713, "end": 15974041, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Serializer/Exception/HttpExceptionNormalizerTest.php", "start": 15974041, "end": 15976354, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Type/TypeBuilderTest.php", "start": 15976354, "end": 16010371, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Type/TypesContainerTest.php", "start": 16010371, "end": 16012467, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Type/TypesFactoryTest.php", "start": 16012467, "end": 16013793, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Type/FieldsBuilderTest.php", "start": 16013793, "end": 16056603, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Type/TypeConverterTest.php", "start": 16056603, "end": 16065144, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Type/SchemaBuilderTest.php", "start": 16065144, "end": 16073864, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/GraphQl/Type/Definition/IterableTypeTest.php", "start": 16073864, "end": 16077086, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Mock/Exception/ErrorCodeSerializable.php", "start": 16077086, "end": 16077681, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonSchema/SchemaTest.php", "start": 16077681, "end": 16080802, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonSchema/TypeFactoryTest.php", "start": 16080802, "end": 16098103, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonSchema/SchemaFactoryTest.php", "start": 16098103, "end": 16107300, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonSchema/Command/JsonSchemaGenerateCommandTest.php", "start": 16107300, "end": 16110278, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Mercure/EventListener/AddLinkHeaderListenerTest.php", "start": 16110278, "end": 16114552, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/PathResolver/OperationPathResolverTest.php", "start": 16114552, "end": 16115775, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/PathResolver/CustomOperationPathResolverTest.php", "start": 16115775, "end": 16118010, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/PathResolver/UnderscoreOperationPathResolverTest.php", "start": 16118010, "end": 16121125, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/PathResolver/DashOperationPathResolverTest.php", "start": 16121125, "end": 16124138, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Problem/Serializer/ConstraintViolationNormalizerTest.php", "start": 16124138, "end": 16127199, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Problem/Serializer/ErrorNormalizerTest.php", "start": 16127199, "end": 16131362, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Documentation/Action/DocumentationActionTest.php", "start": 16131362, "end": 16141187, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Validator/EventListener/ValidateListenerTest.php", "start": 16141187, "end": 16148739, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/schema/XmlSchemaTest.php", "start": 16148739, "end": 16149780, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/PropertyMetadataTest.php", "start": 16149780, "end": 16154303, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/PropertyNameCollectionTest.php", "start": 16154303, "end": 16155208, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/Factory/AnnotationPropertyMetadataFactoryTest.php", "start": 16155208, "end": 16160369, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/Factory/InheritedPropertyMetadataFactoryTest.php", "start": 16160369, "end": 16162813, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/Factory/SerializerPropertyMetadataFactoryTest.php", "start": 16162813, "end": 16171931, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/Factory/AnnotationSubresourceMetadataFactoryTest.php", "start": 16171931, "end": 16175525, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/Factory/CachedPropertyMetadataFactoryTest.php", "start": 16175525, "end": 16180597, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/Factory/AnnotationPropertyNameCollectionFactoryTest.php", "start": 16180597, "end": 16185992, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/Factory/CachedPropertyNameCollectionFactoryTest.php", "start": 16185992, "end": 16191121, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/Factory/ExtractorPropertyNameCollectionFactoryTest.php", "start": 16191121, "end": 16197912, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/Factory/InheritedPropertyNameCollectionFactoryTest.php", "start": 16197912, "end": 16201081, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/Factory/DefaultPropertyMetadataFactoryTest.php", "start": 16201081, "end": 16202875, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/Factory/FileConfigurationMetadataFactoryProvider.php", "start": 16202875, "end": 16205161, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Property/Factory/ExtractorPropertyMetadataFactoryTest.php", "start": 16205161, "end": 16217529, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Extractor/XmlExtractorTestCase.php", "start": 16217529, "end": 16218954, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Extractor/YamlExtractorTestCase.php", "start": 16218954, "end": 16222643, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Extractor/ExtractorTestCase.php", "start": 16222643, "end": 16244975, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/ResourceMetadataTest.php", "start": 16244975, "end": 16250538, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/ResourceNameCollectionTest.php", "start": 16250538, "end": 16251443, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/Factory/AnnotationResourceFilterMetadataFactoryTest.php", "start": 16251443, "end": 16253467, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/Factory/PhpDocResourceMetadataFactoryTest.php", "start": 16253467, "end": 16255763, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/Factory/ExtractorResourceMetadataFactoryTest.php", "start": 16255763, "end": 16270751, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/Factory/OperationResourceMetadataFactoryTest.php", "start": 16270751, "end": 16276970, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/Factory/CachedResourceNameCollectionFactoryTest.php", "start": 16276970, "end": 16281691, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/Factory/AnnotationResourceMetadataFactoryTest.php", "start": 16281691, "end": 16287965, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/Factory/AnnotationResourceNameCollectionFactoryTest.php", "start": 16287965, "end": 16289289, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/Factory/InputOutputResourceMetadataFactoryTest.php", "start": 16289289, "end": 16291861, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/Factory/FormatsResourceMetadataFactoryTest.php", "start": 16291861, "end": 16299256, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/Factory/FileConfigurationMetadataFactoryProvider.php", "start": 16299256, "end": 16303203, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/Factory/CachedResourceMetadataFactoryTest.php", "start": 16303203, "end": 16307708, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Metadata/Resource/Factory/ExtractorResourceNameCollectionFactoryTest.php", "start": 16307708, "end": 16310515, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Swagger/Serializer/ApiGatewayNormalizerTest.php", "start": 16310515, "end": 16332171, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Swagger/Serializer/DocumentationNormalizerV3Test.php", "start": 16332171, "end": 16480822, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Swagger/Serializer/DocumentationNormalizerV2Test.php", "start": 16480822, "end": 16639233, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/DataProvider/ChainSubresourcedataProviderTest.php", "start": 16639233, "end": 16645355, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/DataProvider/ChainCollectionDataProviderTest.php", "start": 16645355, "end": 16650577, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/DataProvider/ChainItemDataProviderTest.php", "start": 16650577, "end": 16657726, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/DataProvider/ArrayPaginatorTest.php", "start": 16657726, "end": 16659281, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/SubresourceDataProviderTest.php", "start": 16659281, "end": 16691136, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/ItemDataProviderTest.php", "start": 16691136, "end": 16706223, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/PaginatorTest.php", "start": 16706223, "end": 16713401, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/CollectionDataProviderTest.php", "start": 16713401, "end": 16721369, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/Filter/RangeFilterTest.php", "start": 16721369, "end": 16739258, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/Filter/NumericFilterTest.php", "start": 16739258, "end": 16744864, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/Filter/DateFilterTest.php", "start": 16744864, "end": 16758231, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/Filter/BooleanFilterTest.php", "start": 16758231, "end": 16761591, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/Filter/SearchFilterTest.php", "start": 16761591, "end": 16782934, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/Filter/OrderFilterTest.php", "start": 16782934, "end": 16798579, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/Filter/ExistsFilterTest.php", "start": 16798579, "end": 16813869, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/Extension/FilterExtensionTest.php", "start": 16813869, "end": 16817569, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/Extension/PaginationExtensionTest.php", "start": 16817569, "end": 16840612, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/Extension/OrderExtensionTest.php", "start": 16840612, "end": 16849145, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/Metadata/Property/DoctrineMongoDbOdmPropertyMetadataFactoryTest.php", "start": 16849145, "end": 16854648, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/PropertyInfo/DoctrineExtractorTest.php", "start": 16854648, "end": 16862237, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/PropertyInfo/Fixtures/DoctrineDummy.php", "start": 16862237, "end": 16864812, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/PropertyInfo/Fixtures/Foo.php", "start": 16864812, "end": 16865283, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/PropertyInfo/Fixtures/DoctrineFooType.php", "start": 16865283, "end": 16866391, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/PropertyInfo/Fixtures/DoctrineEmbeddable.php", "start": 16866391, "end": 16867034, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/PropertyInfo/Fixtures/DoctrineRelation.php", "start": 16867034, "end": 16867811, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/PropertyInfo/Fixtures/DoctrineWithEmbedded.php", "start": 16867811, "end": 16868728, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/MongoDbOdm/PropertyInfo/Fixtures/DoctrineGeneratedValue.php", "start": 16868728, "end": 16869516, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Common/DataPersisterTest.php", "start": 16869516, "end": 16875940, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Common/Filter/OrderFilterTestTrait.php", "start": 16875940, "end": 16883335, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Common/Filter/DateFilterTestTrait.php", "start": 16883335, "end": 16890078, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Common/Filter/RangeFilterTestTrait.php", "start": 16890078, "end": 16893639, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Common/Filter/NumericFilterTestTrait.php", "start": 16893639, "end": 16899586, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Common/Filter/ExistsFilterTestTrait.php", "start": 16899586, "end": 16907138, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Common/Filter/SearchFilterTestTrait.php", "start": 16907138, "end": 16921300, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Common/Filter/BooleanFilterTestTrait.php", "start": 16921300, "end": 16926022, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Common/Util/IdentifierManagerTraitTest.php", "start": 16926022, "end": 16935092, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/SubresourceDataProviderTest.php", "start": 16935092, "end": 16971067, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/ItemDataProviderTest.php", "start": 16971067, "end": 16985248, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/PaginatorTest.php", "start": 16985248, "end": 16988811, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/CollectionDataProviderTest.php", "start": 16988811, "end": 16994271, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Filter/RangeFilterTest.php", "start": 16994271, "end": 17007283, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Filter/NumericFilterTest.php", "start": 17007283, "end": 17011519, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Filter/DateFilterTest.php", "start": 17011519, "end": 17018306, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Filter/BooleanFilterTest.php", "start": 17018306, "end": 17021086, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Filter/SearchFilterTest.php", "start": 17021086, "end": 17046422, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Filter/OrderFilterTest.php", "start": 17046422, "end": 17057246, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Filter/ExistsFilterTest.php", "start": 17057246, "end": 17068582, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Filter/CommonFilterTest.php", "start": 17068582, "end": 17069650, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Extension/FilterExtensionTest.php", "start": 17069650, "end": 17075461, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Extension/PaginationExtensionTest.php", "start": 17075461, "end": 17155745, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Extension/FilterEagerLoadingExtensionTest.php", "start": 17155745, "end": 17184039, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Extension/EagerLoadingExtensionTest.php", "start": 17184039, "end": 17250881, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Extension/OrderExtensionTest.php", "start": 17250881, "end": 17259552, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Metadata/Property/DoctrineOrmPropertyMetadataFactoryTest.php", "start": 17259552, "end": 17267903, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Util/QueryBuilderHelperTest.php", "start": 17267903, "end": 17273023, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Util/QueryNameGeneratorTest.php", "start": 17273023, "end": 17273975, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Util/QueryJoinParserTest.php", "start": 17273975, "end": 17280336, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/Orm/Util/QueryCheckerTest.php", "start": 17280336, "end": 17297132, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/EventListener/WriteListenerTest.php", "start": 17297132, "end": 17303686, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/EventListener/PublishMercureUpdatesListenerTest.php", "start": 17303686, "end": 17322664, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Doctrine/EventListener/PurgeHttpCacheListenerTest.php", "start": 17322664, "end": 17330522, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Messenger/RemoveStampTest.php", "start": 17330522, "end": 17331214, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Messenger/DataPersisterTest.php", "start": 17331214, "end": 17341476, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Messenger/DataTransformerTest.php", "start": 17341476, "end": 17346822, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Messenger/ContextStampTest.php", "start": 17346822, "end": 17347681, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Validator/ValidatorTest.php", "start": 17347681, "end": 17354143, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Validator/Exception/ValidationExceptionTest.php", "start": 17354143, "end": 17355534, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Validator/Metadata/Property/ValidatorPropertyMetadataFactoryTest.php", "start": 17355534, "end": 17373241, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Validator/EventListener/ValidationExceptionListenerTest.php", "start": 17373241, "end": 17375984, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Validator/EventListener/ValidateListenerTest.php", "start": 17375984, "end": 17384775, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/PropertyInfo/Metadata/Property/PropertyInfoPropertyNameCollectionFactoryTest.php", "start": 17384775, "end": 17387420, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/ApiPlatformBundleTest.php", "start": 17387420, "end": 17390257, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/Action/SwaggerUiActionTest.php", "start": 17390257, "end": 17399281, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/SwaggerUi/SwaggerUiActionTest.php", "start": 17399281, "end": 17408179, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/Twig/ApiPlatformProfilerPanelTest.php", "start": 17408179, "end": 17421900, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DataProvider/TraceableChainItemDataCollectorTest.php", "start": 17421900, "end": 17427573, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DataProvider/TraceableChainCollectionDataCollectorTest.php", "start": 17427573, "end": 17433054, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DataProvider/TraceableChainSubresourceDataCollectorTest.php", "start": 17433054, "end": 17438836, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DataPersister/TraceableChainDataPersisterTest.php", "start": 17438836, "end": 17442443, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/EventListener/SwaggerUiListenerTest.php", "start": 17442443, "end": 17444320, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DataCollector/RequestDataCollectorTest.php", "start": 17444320, "end": 17457472, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DependencyInjection/ApiPlatformExtensionTest.php", "start": 17457472, "end": 17552144, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DependencyInjection/ConfigurationTest.php", "start": 17552144, "end": 17566008, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DependencyInjection/Compiler/ElasticsearchClientPassTest.php", "start": 17566008, "end": 17569759, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DependencyInjection/Compiler/FilterPassTest.php", "start": 17569759, "end": 17573248, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DependencyInjection/Compiler/MetadataAwareNameConverterPassTest.php", "start": 17573248, "end": 17578458, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DependencyInjection/Compiler/GraphQlMutationResolverPassTest.php", "start": 17578458, "end": 17581456, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DependencyInjection/Compiler/DeprecateMercurePublisherPassTest.php", "start": 17581456, "end": 17583565, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DependencyInjection/Compiler/GraphQlQueryResolverPassTest.php", "start": 17583565, "end": 17586542, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DependencyInjection/Compiler/AnnotationFilterPassTest.php", "start": 17586542, "end": 17602048, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/DependencyInjection/Compiler/GraphQlTypePassTest.php", "start": 17602048, "end": 17607003, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/Test/WebTestCaseTest.php", "start": 17607003, "end": 17617362, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/Test/ApiTestCaseTest.php", "start": 17617362, "end": 17623326, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/Test/ClientTest.php", "start": 17623326, "end": 17628259, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/Test/ResponseTest.php", "start": 17628259, "end": 17633459, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/Test/Constraint/ArraySubsetTest.php", "start": 17633459, "end": 17638020, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/Test/Constraint/MatchesJsonSchemaTest.php", "start": 17638020, "end": 17639344, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/Command/SwaggerCommandUnitTest.php", "start": 17639344, "end": 17641646, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/Command/OpenApiCommandTest.php", "start": 17641646, "end": 17644669, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Bundle/Command/SwaggerCommandTest.php", "start": 17644669, "end": 17648532, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Identifier/Normalizer/UuidNormalizerTest.php", "start": 17648532, "end": 17650399, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Identifier/Normalizer/UlidNormalizerTest.php", "start": 17650399, "end": 17652266, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Routing/ApiLoaderTest.php", "start": 17652266, "end": 17673240, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Routing/RouteNameResolverTest.php", "start": 17673240, "end": 17681701, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Routing/RouterOperationPathResolverTest.php", "start": 17681701, "end": 17686427, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Routing/CachedRouteNameResolverTest.php", "start": 17686427, "end": 17696176, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Routing/IriConverterTest.php", "start": 17696176, "end": 17719574, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Routing/RouteNameGeneratorTest.php", "start": 17719574, "end": 17721242, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Symfony/Routing/RouterTest.php", "start": 17721242, "end": 17725262, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/RamseyUuid/Normalizer/UuidNormalizerTest.php", "start": 17725262, "end": 17726924, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Exception/NonUniqueIdentifierExceptionTest.php", "start": 17726924, "end": 17727738, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Exception/IndexNotFoundExceptionTest.php", "start": 17727738, "end": 17728557, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Metadata/Resource/Factory/ElasticsearchOperationResourceMetadataFactoryTest.php", "start": 17728557, "end": 17731207, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Metadata/Document/DocumentMetadataTest.php", "start": 17731207, "end": 17732647, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Metadata/Document/Factory/ConfiguredDocumentMetadataFactoryTest.php", "start": 17732647, "end": 17735662, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Metadata/Document/Factory/CatDocumentMetadataFactoryTest.php", "start": 17735662, "end": 17741643, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Metadata/Document/Factory/CachedDocumentMetadataFactoryTest.php", "start": 17741643, "end": 17749555, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Metadata/Document/Factory/AttributeDocumentMetadataFactoryTest.php", "start": 17749555, "end": 17752888, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/DataProvider/ItemDataProviderTest.php", "start": 17752888, "end": 17760717, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/DataProvider/PaginatorTest.php", "start": 17760717, "end": 17766442, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/DataProvider/CollectionDataProviderTest.php", "start": 17766442, "end": 17775211, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/DataProvider/Filter/MatchFilterTest.php", "start": 17775211, "end": 17787442, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/DataProvider/Filter/TermFilterTest.php", "start": 17787442, "end": 17799605, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/DataProvider/Filter/OrderFilterTest.php", "start": 17799605, "end": 17806972, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/DataProvider/Extension/ConstantScoreFilterExtensionTest.php", "start": 17806972, "end": 17811371, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/DataProvider/Extension/SortExtensionTest.php", "start": 17811371, "end": 17817931, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/DataProvider/Extension/SortFilterExtensionTest.php", "start": 17817931, "end": 17821995, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Serializer/ItemNormalizerTest.php", "start": 17821995, "end": 17825413, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Serializer/NameConverter/InnerFieldsNameConverterTest.php", "start": 17825413, "end": 17827438, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Api/IdentifierExtractorTest.php", "start": 17827438, "end": 17830429, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/Elasticsearch/Util/FieldDatatypeTraitTest.php", "start": 17830429, "end": 17835390, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/NelmioApiDoc/Parser/ApiPlatformParserTest.php", "start": 17835390, "end": 17863458, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Bridge/NelmioApiDoc/Extractor/AnnotationsProvider/ApiPlatformProviderTest.php", "start": 17863458, "end": 17891638, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Serializer/JsonEncoderTest.php", "start": 17891638, "end": 17892981, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Serializer/SerializerContextBuilderTest.php", "start": 17892981, "end": 17898911, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Serializer/ResourceListTest.php", "start": 17898911, "end": 17899650, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Serializer/AbstractItemNormalizerTest.php", "start": 17899650, "end": 17961779, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Serializer/ItemNormalizerTest.php", "start": 17961779, "end": 17976141, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Serializer/SerializerFilterContextBuilderTest.php", "start": 17976141, "end": 17985855, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Serializer/Filter/GroupFilterTest.php", "start": 17985855, "end": 17990212, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Serializer/Filter/PropertyFilterTest.php", "start": 17990212, "end": 18000418, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Security/ResourceAccessCheckerTest.php", "start": 18000418, "end": 18004704, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Security/EventListener/DenyAccessListenerTest.php", "start": 18004704, "end": 18020173, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Identifier/CompositeIdentifierParserTest.php", "start": 18020173, "end": 18021725, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Identifier/IdentifierConverterTest.php", "start": 18021725, "end": 18026454, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Identifier/Normalizer/IntegerDenormalizerTest.php", "start": 18026454, "end": 18027527, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Identifier/Normalizer/DateTimeIdentifierNormalizerTest.php", "start": 18027527, "end": 18028515, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Hal/Serializer/EntrypointNormalizerTest.php", "start": 18028515, "end": 18031687, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Hal/Serializer/CollectionNormalizerTest.php", "start": 18031687, "end": 18038073, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Hal/Serializer/ItemNormalizerTest.php", "start": 18038073, "end": 18054828, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/DataPersister/ChainDataPersisterTest.php", "start": 18054828, "end": 18058662, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/EventListener/RespondListenerTest.php", "start": 18058662, "end": 18068388, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/EventListener/AddFormatListenerTest.php", "start": 18068388, "end": 18084205, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/EventListener/WriteListenerTest.php", "start": 18084205, "end": 18100467, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/EventListener/EventPrioritiesTest.php", "start": 18100467, "end": 18101776, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/EventListener/DeserializeListenerTest.php", "start": 18101776, "end": 18119871, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/EventListener/QueryParameterValidateListenerTest.php", "start": 18119871, "end": 18124772, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/EventListener/SerializeListenerTest.php", "start": 18124772, "end": 18134972, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/EventListener/ExceptionListenerTest.php", "start": 18134972, "end": 18137893, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/EventListener/ReadListenerTest.php", "start": 18137893, "end": 18158137, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Api/CachedIdentifiersExtractorTest.php", "start": 18158137, "end": 18168678, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Api/FilterCollectionTest.php", "start": 18168678, "end": 18169582, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Api/FilterCollectionFactoryTest.php", "start": 18169582, "end": 18171428, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Api/FormatsProviderTest.php", "start": 18171428, "end": 18182701, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Api/ResourceClassResolverTest.php", "start": 18182701, "end": 18192428, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Api/FilterLocatorTraitTest.php", "start": 18192428, "end": 18198302, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Api/EntrypointTest.php", "start": 18198302, "end": 18199206, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Api/IdentifiersExtractorTest.php", "start": 18199206, "end": 18210492, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Util/AnnotationFilterExtractorTraitTest.php", "start": 18210492, "end": 18214444, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Util/RequestParserTest.php", "start": 18214444, "end": 18216022, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Util/RequestAttributesExtractorTest.php", "start": 18216022, "end": 18224722, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Util/ArrayTraitTest.php", "start": 18224722, "end": 18226595, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Util/SortTraitTest.php", "start": 18226595, "end": 18227775, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Util/ErrorFormatGuesserTest.php", "start": 18227775, "end": 18229871, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Util/ReflectionTest.php", "start": 18229871, "end": 18230873, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Util/ClassInfoTraitTest.php", "start": 18230873, "end": 18232355, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Util/CloneTraitTest.php", "start": 18232355, "end": 18233376, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Util/IriHelperTest.php", "start": 18233376, "end": 18238411, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Hydra/JsonSchema/SchemaFactoryTest.php", "start": 18238411, "end": 18243740, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Hydra/Serializer/DocumentationNormalizerTest.php", "start": 18243740, "end": 18279049, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Hydra/Serializer/EntrypointNormalizerTest.php", "start": 18279049, "end": 18282699, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Hydra/Serializer/CollectionNormalizerTest.php", "start": 18282699, "end": 18300053, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Hydra/Serializer/CollectionFiltersNormalizerTest.php", "start": 18300053, "end": 18313578, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Hydra/Serializer/ConstraintViolationNormalizerTest.php", "start": 18313578, "end": 18317407, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Hydra/Serializer/PartialCollectionViewNormalizerTest.php", "start": 18317407, "end": 18323812, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Hydra/Serializer/ErrorNormalizerTest.php", "start": 18323812, "end": 18328272, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Hydra/EventListener/AddLinkHeaderListenerTest.php", "start": 18328272, "end": 18331187, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Behat/GraphqlContext.php", "start": 18331187, "end": 18336270, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Behat/DoctrineContext.php", "start": 18336270, "end": 18408186, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Behat/JsonContext.php", "start": 18408186, "end": 18410569, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Behat/CommandContext.php", "start": 18410569, "end": 18413304, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Behat/JsonApiContext.php", "start": 18413304, "end": 18420032, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Behat/HttpCacheContext.php", "start": 18420032, "end": 18421211, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Behat/JsonHalContext.php", "start": 18421211, "end": 18423434, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Behat/MercureContext.php", "start": 18423434, "end": 18425151, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Behat/CoverageContext.php", "start": 18425151, "end": 18427088, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Behat/ElasticsearchContext.php", "start": 18427088, "end": 18430911, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Behat/HydraContext.php", "start": 18430911, "end": 18441212, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Behat/OpenApiContext.php", "start": 18441212, "end": 18447921, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonApi/Serializer/ReservedAttributeNameConverterTest.php", "start": 18447921, "end": 18449912, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonApi/Serializer/EntrypointNormalizerTest.php", "start": 18449912, "end": 18454014, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonApi/Serializer/CollectionNormalizerTest.php", "start": 18454014, "end": 18467138, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonApi/Serializer/ConstraintViolationNormalizerTest.php", "start": 18467138, "end": 18471410, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonApi/Serializer/ErrorNormalizerTest.php", "start": 18471410, "end": 18475659, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonApi/Serializer/ItemNormalizerTest.php", "start": 18475659, "end": 18505937, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonApi/EventListener/TransformFilteringParametersListenerTest.php", "start": 18505937, "end": 18508782, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonApi/EventListener/TransformSortingParametersListenerTest.php", "start": 18508782, "end": 18511646, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonApi/EventListener/TransformFieldsetsParametersListenerTest.php", "start": 18511646, "end": 18517038, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/JsonApi/EventListener/TransformPaginationParametersListenerTest.php", "start": 18517038, "end": 18519937, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Annotation/ApiFilterTest.php", "start": 18519937, "end": 18521923, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Annotation/ApiPropertyTest.php", "start": 18521923, "end": 18524394, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/tests/Annotation/ApiResourceTest.php", "start": 18524394, "end": 18531676, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/HEAD", "start": 18531676, "end": 18531699, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/index", "start": 18531699, "end": 18715592, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/packed-refs", "start": 18715592, "end": 18720986, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/config", "start": 18720986, "end": 18721396, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/description", "start": 18721396, "end": 18721469, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/ORIG_HEAD", "start": 18721469, "end": 18721510, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/hooks/pre-applypatch.sample", "start": 18721510, "end": 18721934, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/hooks/commit-msg.sample", "start": 18721934, "end": 18722830, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/hooks/prepare-commit-msg.sample", "start": 18722830, "end": 18724322, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/hooks/post-update.sample", "start": 18724322, "end": 18724511, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/hooks/applypatch-msg.sample", "start": 18724511, "end": 18724989, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/hooks/pre-commit.sample", "start": 18724989, "end": 18726632, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/hooks/pre-rebase.sample", "start": 18726632, "end": 18731530, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/hooks/fsmonitor-watchman.sample", "start": 18731530, "end": 18736185, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/hooks/pre-merge-commit.sample", "start": 18736185, "end": 18736601, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/hooks/pre-push.sample", "start": 18736601, "end": 18737975, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/hooks/pre-receive.sample", "start": 18737975, "end": 18738519, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/hooks/update.sample", "start": 18738519, "end": 18742169, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/info/exclude", "start": 18742169, "end": 18742409, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/info/refs", "start": 18742409, "end": 18747958, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/objects/pack/pack-8de19237c54f675241df866c1fc59288567df87f.idx", "start": 18747958, "end": 20025914, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/objects/pack/pack-8de19237c54f675241df866c1fc59288567df87f.pack", "start": 20025914, "end": 41997907, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/objects/info/packs", "start": 41997907, "end": 41997961, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/logs/HEAD", "start": 41997961, "end": 41998559, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/logs/refs/heads/master", "start": 41998559, "end": 41998780, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/logs/refs/remotes/origin/HEAD", "start": 41998780, "end": 41999001, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/refs/heads/master", "start": 41999001, "end": 41999042, "audio": 0}, {"filename": "/src/api-platform-light/vendor/api-platform/core/.git/refs/remotes/origin/HEAD", "start": 41999042, "end": 41999074, "audio": 0}, {"filename": "/src/api-platform-light/vendor/composer/autoload_static.php", "start": 41999074, "end": 42009334, "audio": 0}, {"filename": "/src/api-platform-light/vendor/composer/autoload_psr4.php", "start": 42009334, "end": 42013065, "audio": 0}, {"filename": "/src/api-platform-light/vendor/composer/platform_check.php", "start": 42013065, "end": 42013744, "audio": 0}, {"filename": "/src/api-platform-light/vendor/composer/installed.json", "start": 42013744, "end": 42140543, "audio": 0}, {"filename": "/src/api-platform-light/vendor/composer/installed.php", "start": 42140543, "end": 42150997, "audio": 0}, {"filename": "/src/api-platform-light/vendor/composer/LICENSE", "start": 42150997, "end": 42152067, "audio": 0}, {"filename": "/src/api-platform-light/vendor/composer/autoload_real.php", "start": 42152067, "end": 42154588, "audio": 0}, {"filename": "/src/api-platform-light/vendor/composer/ClassLoader.php", "start": 42154588, "end": 42168063, "audio": 0}, {"filename": "/src/api-platform-light/vendor/composer/autoload_namespaces.php", "start": 42168063, "end": 42168212, "audio": 0}, {"filename": "/src/api-platform-light/vendor/composer/autoload_classmap.php", "start": 42168212, "end": 42169022, "audio": 0}, {"filename": "/src/api-platform-light/vendor/composer/InstalledVersions.php", "start": 42169022, "end": 42182325, "audio": 0}, {"filename": "/src/api-platform-light/vendor/composer/autoload_files.php", "start": 42182325, "end": 42183373, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/README.md", "start": 42183373, "end": 42184105, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/composer.json", "start": 42184105, "end": 42185723, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/LICENSE", "start": 42185723, "end": 42186788, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/UPGRADE.md", "start": 42186788, "end": 42187514, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/Cache.php", "start": 42187514, "end": 42190311, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/ZendDataCache.php", "start": 42190311, "end": 42191555, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/MemcachedCache.php", "start": 42191555, "end": 42195403, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/MultiOperationCache.php", "start": 42195403, "end": 42195654, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/MemcacheCache.php", "start": 42195654, "end": 42197774, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/CouchbaseCache.php", "start": 42197774, "end": 42200094, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/MongoDBCache.php", "start": 42200094, "end": 42203292, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/FlushableCache.php", "start": 42203292, "end": 42203642, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/MultiDeleteCache.php", "start": 42203642, "end": 42204108, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/ClearableCache.php", "start": 42204108, "end": 42204609, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/Version.php", "start": 42204609, "end": 42204708, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/MultiPutCache.php", "start": 42204708, "end": 42205406, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/ArrayCache.php", "start": 42205406, "end": 42207483, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/InvalidCacheId.php", "start": 42207483, "end": 42208223, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/XcacheCache.php", "start": 42208223, "end": 42210433, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/VoidCache.php", "start": 42210433, "end": 42211320, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/CouchbaseBucketCache.php", "start": 42211320, "end": 42215995, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/LegacyMongoDBCache.php", "start": 42215995, "end": 42220768, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/PredisCache.php", "start": 42220768, "end": 42224054, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/SQLite3Cache.php", "start": 42224054, "end": 42228689, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/ApcCache.php", "start": 42228689, "end": 42231073, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/MultiGetCache.php", "start": 42231073, "end": 42231666, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/PhpFileCache.php", "start": 42231666, "end": 42234341, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/FilesystemCache.php", "start": 42234341, "end": 42236402, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/CacheProvider.php", "start": 42236402, "end": 42244864, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/FileCache.php", "start": 42244864, "end": 42252831, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/ChainCache.php", "start": 42252831, "end": 42257678, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/ApcuCache.php", "start": 42257678, "end": 42259846, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/RedisCache.php", "start": 42259846, "end": 42264201, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/ExtMongoDBCache.php", "start": 42264201, "end": 42269516, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/cache/lib/Doctrine/Common/Cache/WinCacheCache.php", "start": 42269516, "end": 42271810, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/event-manager/README.md", "start": 42271810, "end": 42272611, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/event-manager/composer.json", "start": 42272611, "end": 42274091, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/event-manager/LICENSE", "start": 42274091, "end": 42275156, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/event-manager/.doctrine-project.json", "start": 42275156, "end": 42275537, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/event-manager/lib/Doctrine/Common/EventManager.php", "start": 42275537, "end": 42279501, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/event-manager/lib/Doctrine/Common/EventArgs.php", "start": 42279501, "end": 42280818, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/event-manager/lib/Doctrine/Common/EventSubscriber.php", "start": 42280818, "end": 42281322, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/README.md", "start": 42281322, "end": 42281805, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/UPGRADE_TO_2_2", "start": 42281805, "end": 42284232, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/composer.json", "start": 42284232, "end": 42285722, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/LICENSE", "start": 42285722, "end": 42286787, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/humbug.json.dist", "start": 42286787, "end": 42286956, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/phpstan.neon.dist", "start": 42286956, "end": 42290216, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/.doctrine-project.json", "start": 42290216, "end": 42291052, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/UPGRADE_TO_2_1", "start": 42291052, "end": 42293181, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/CommonException.php", "start": 42293181, "end": 42293457, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Comparable.php", "start": 42293457, "end": 42294174, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/ClassLoader.php", "start": 42294174, "end": 42302480, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Util/ClassUtils.php", "start": 42302480, "end": 42304707, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Util/Debug.php", "start": 42304707, "end": 42309420, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Proxy/Autoloader.php", "start": 42309420, "end": 42312335, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Proxy/ProxyDefinition.php", "start": 42312335, "end": 42313471, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Proxy/AbstractProxyFactory.php", "start": 42313471, "end": 42320518, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Proxy/ProxyGenerator.php", "start": 42320518, "end": 42355733, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Proxy/Proxy.php", "start": 42355733, "end": 42357470, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Proxy/Exception/InvalidArgumentException.php", "start": 42357470, "end": 42360149, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Proxy/Exception/UnexpectedValueException.php", "start": 42360149, "end": 42361809, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Proxy/Exception/OutOfBoundsException.php", "start": 42361809, "end": 42362399, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/lib/Doctrine/Common/Proxy/Exception/ProxyException.php", "start": 42362399, "end": 42362576, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/docs/en/index.rst", "start": 42362576, "end": 42362716, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/common/docs/en/reference/class-loading.rst", "start": 42362716, "end": 42372229, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/README.md", "start": 42372229, "end": 42377305, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/composer.json", "start": 42377305, "end": 42378521, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/LICENSE", "start": 42378521, "end": 42379586, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/CONTRIBUTING.md", "start": 42379586, "end": 42381472, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/psalm.xml.dist", "start": 42381472, "end": 42383360, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/.doctrine-project.json", "start": 42383360, "end": 42383610, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections/Criteria.php", "start": 42383610, "end": 42388529, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections/ExpressionBuilder.php", "start": 42388529, "end": 42392557, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections/Selectable.php", "start": 42392557, "end": 42393580, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections/Collection.php", "start": 42393580, "end": 42402502, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections/ArrayCollection.php", "start": 42402502, "end": 42411515, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections/AbstractLazyCollection.php", "start": 42411515, "end": 42417759, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections/Expr/Value.php", "start": 42417759, "end": 42418275, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections/Expr/ClosureExpressionVisitor.php", "start": 42418275, "end": 42426638, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections/Expr/Expression.php", "start": 42426638, "end": 42426867, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections/Expr/ExpressionVisitor.php", "start": 42426867, "end": 42428355, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections/Expr/Comparison.php", "start": 42428355, "end": 42430028, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/lib/Doctrine/Common/Collections/Expr/CompositeExpression.php", "start": 42430028, "end": 42431516, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/docs/en/lazy-collections.rst", "start": 42431516, "end": 42432256, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/docs/en/expression-builder.rst", "start": 42432256, "end": 42435798, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/docs/en/derived-collections.rst", "start": 42435798, "end": 42436536, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/docs/en/expressions.rst", "start": 42436536, "end": 42438763, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/docs/en/sidebar.rst", "start": 42438763, "end": 42438885, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/collections/docs/en/index.rst", "start": 42438885, "end": 42446973, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/README.md", "start": 42446973, "end": 42447603, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/composer.json", "start": 42447603, "end": 42449396, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/LICENSE", "start": 42449396, "end": 42450461, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/psalm.xml", "start": 42450461, "end": 42451304, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/.doctrine-project.json", "start": 42451304, "end": 42452666, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/UPGRADE-1.2.md", "start": 42452666, "end": 42453049, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/.github/workflows/continuous-integration.yml", "start": 42453049, "end": 42455320, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/.github/workflows/static-analysis.yml", "start": 42455320, "end": 42456820, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/.github/workflows/coding-standards.yml", "start": 42456820, "end": 42458021, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/.github/workflows/release-on-milestone-closed.yml", "start": 42458021, "end": 42460008, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/ManagerRegistry.php", "start": 42460008, "end": 42462739, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/PropertyChangedListener.php", "start": 42462739, "end": 42463422, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectRepository.php", "start": 42463422, "end": 42465091, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectManagerAware.php", "start": 42465091, "end": 42466112, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectManager.php", "start": 42466112, "end": 42471031, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/ConnectionRegistry.php", "start": 42471031, "end": 42471913, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Proxy.php", "start": 42471913, "end": 42472516, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/NotifyPropertyChanged.php", "start": 42472516, "end": 42473148, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectManagerDecorator.php", "start": 42473148, "end": 42475146, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/AbstractManagerRegistry.php", "start": 42475146, "end": 42481226, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Event/OnClearEventArgs.php", "start": 42481226, "end": 42482491, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Event/LoadClassMetadataEventArgs.php", "start": 42482491, "end": 42483474, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Event/PreUpdateEventArgs.php", "start": 42483474, "end": 42485923, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Event/ManagerEventArgs.php", "start": 42485923, "end": 42486514, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Event/LifecycleEventArgs.php", "start": 42486514, "end": 42487637, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Reflection/RuntimePublicReflectionProperty.php", "start": 42487637, "end": 42489266, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Reflection/TypedNoDefaultReflectionProperty.php", "start": 42489266, "end": 42490768, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/MappingException.php", "start": 42490768, "end": 42493003, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/ClassMetadataFactory.php", "start": 42493003, "end": 42494452, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/ClassMetadata.php", "start": 42494452, "end": 42498165, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/ReflectionService.php", "start": 42498165, "end": 42499664, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/RuntimeReflectionService.php", "start": 42499664, "end": 42502166, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/AbstractClassMetadataFactory.php", "start": 42502166, "end": 42514362, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/StaticReflectionService.php", "start": 42514362, "end": 42515655, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/Driver/AnnotationDriver.php", "start": 42515655, "end": 42522018, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/Driver/PHPDriver.php", "start": 42522018, "end": 42522923, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/Driver/SymfonyFileLocator.php", "start": 42522923, "end": 42529522, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/Driver/FileDriver.php", "start": 42529522, "end": 42534941, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/Driver/DefaultFileLocator.php", "start": 42534941, "end": 42539232, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/Driver/StaticPHPDriver.php", "start": 42539232, "end": 42542362, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/Driver/MappingDriverChain.php", "start": 42542362, "end": 42545814, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/Driver/MappingDriver.php", "start": 42545814, "end": 42546742, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Persistence/Mapping/Driver/FileLocator.php", "start": 42546742, "end": 42548004, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/persistence/lib/Doctrine/Common/Persistence/PersistentObject.php", "start": 42548004, "end": 42555776, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/lexer/README.md", "start": 42555776, "end": 42556128, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/lexer/composer.json", "start": 42556128, "end": 42557287, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/lexer/LICENSE", "start": 42557287, "end": 42558352, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/lexer/lib/Doctrine/Common/Lexer/AbstractLexer.php", "start": 42558352, "end": 42565767, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/README.md", "start": 42565767, "end": 42567024, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/phpbench.json.dist", "start": 42567024, "end": 42567156, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/phpstan.neon", "start": 42567156, "end": 42567968, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/CHANGELOG.md", "start": 42567968, "end": 42577126, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/composer.json", "start": 42577126, "end": 42578726, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/LICENSE", "start": 42578726, "end": 42579791, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/phpcs.xml.dist", "start": 42579791, "end": 42588994, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/.doctrine-project.json", "start": 42588994, "end": 42590106, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/.github/workflows/continuous-integration.yml", "start": 42590106, "end": 42591648, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/.github/workflows/static-analysis.yml", "start": 42591648, "end": 42592838, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/.github/workflows/coding-standards.yml", "start": 42592838, "end": 42593913, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/.github/workflows/release-on-milestone-closed.yml", "start": 42593913, "end": 42595900, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/Annotation.php", "start": 42595900, "end": 42597234, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/TokenParser.php", "start": 42597234, "end": 42603554, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/IndexedReader.php", "start": 42603554, "end": 42605832, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/SimpleAnnotationReader.php", "start": 42605832, "end": 42608553, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/DocParser.php", "start": 42608553, "end": 42652811, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/AnnotationException.php", "start": 42652811, "end": 42657495, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/NamedArgumentConstructorAnnotation.php", "start": 42657495, "end": 42657713, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/Reader.php", "start": 42657713, "end": 42660251, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/ImplicitlyIgnoredAnnotationNames.php", "start": 42660251, "end": 42665405, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/PhpParser.php", "start": 42665405, "end": 42667411, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/AnnotationRegistry.php", "start": 42667411, "end": 42673124, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/CachedReader.php", "start": 42673124, "end": 42680169, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/FileCacheReader.php", "start": 42680169, "end": 42688764, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/AnnotationReader.php", "start": 42688764, "end": 42698429, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/DocLexer.php", "start": 42698429, "end": 42701939, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/Annotation/IgnoreAnnotation.php", "start": 42701939, "end": 42702941, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/Annotation/Target.php", "start": 42702941, "end": 42705487, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/Annotation/Attributes.php", "start": 42705487, "end": 42705782, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/Annotation/Attribute.php", "start": 42705782, "end": 42706141, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/Annotation/Enum.php", "start": 42706141, "end": 42707879, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/lib/Doctrine/Common/Annotations/Annotation/Required.php", "start": 42707879, "end": 42708113, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/docs/en/annotations.rst", "start": 42708113, "end": 42718541, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/docs/en/sidebar.rst", "start": 42718541, "end": 42718606, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/docs/en/index.rst", "start": 42718606, "end": 42721520, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/annotations/docs/en/custom.rst", "start": 42721520, "end": 42730442, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/README.md", "start": 42730442, "end": 42731056, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/composer.json", "start": 42731056, "end": 42732547, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/LICENSE", "start": 42732547, "end": 42733612, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/phpstan.neon.dist", "start": 42733612, "end": 42733920, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/CachedWordInflector.php", "start": 42733920, "end": 42734432, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Language.php", "start": 42734432, "end": 42734862, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/NoopWordInflector.php", "start": 42734862, "end": 42735064, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Inflector.php", "start": 42735064, "end": 42747920, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/LanguageInflectorFactory.php", "start": 42747920, "end": 42748728, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/GenericLanguageInflectorFactory.php", "start": 42748728, "end": 42750407, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/InflectorFactory.php", "start": 42750407, "end": 42751824, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/RulesetInflector.php", "start": 42751824, "end": 42753179, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/WordInflector.php", "start": 42753179, "end": 42753323, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Ruleset.php", "start": 42753323, "end": 42754103, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Substitution.php", "start": 42754103, "end": 42754556, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Pattern.php", "start": 42754556, "end": 42755347, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Substitutions.php", "start": 42755347, "end": 42756720, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Transformation.php", "start": 42756720, "end": 42757512, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Transformations.php", "start": 42757512, "end": 42758161, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Word.php", "start": 42758161, "end": 42758456, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Patterns.php", "start": 42758456, "end": 42759154, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/NorwegianBokmal/Uninflected.php", "start": 42759154, "end": 42759805, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/NorwegianBokmal/Rules.php", "start": 42759805, "end": 42760689, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/NorwegianBokmal/InflectorFactory.php", "start": 42760689, "end": 42761160, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/NorwegianBokmal/Inflectible.php", "start": 42761160, "end": 42762142, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Turkish/Uninflected.php", "start": 42762142, "end": 42762796, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Turkish/Rules.php", "start": 42762796, "end": 42763672, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Turkish/InflectorFactory.php", "start": 42763672, "end": 42764135, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Turkish/Inflectible.php", "start": 42764135, "end": 42765180, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Portuguese/Uninflected.php", "start": 42765180, "end": 42765907, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Portuguese/Rules.php", "start": 42765907, "end": 42766786, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Portuguese/InflectorFactory.php", "start": 42766786, "end": 42767252, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Portuguese/Inflectible.php", "start": 42767252, "end": 42772939, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/English/Uninflected.php", "start": 42772939, "end": 42779450, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/English/Rules.php", "start": 42779450, "end": 42780326, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/English/InflectorFactory.php", "start": 42780326, "end": 42780789, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/English/Inflectible.php", "start": 42780789, "end": 42792122, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Spanish/Uninflected.php", "start": 42792122, "end": 42792776, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Spanish/Rules.php", "start": 42792776, "end": 42793652, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Spanish/InflectorFactory.php", "start": 42793652, "end": 42794115, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/Spanish/Inflectible.php", "start": 42794115, "end": 42796003, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/French/Uninflected.php", "start": 42796003, "end": 42796571, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/French/Rules.php", "start": 42796571, "end": 42797446, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/French/InflectorFactory.php", "start": 42797446, "end": 42797908, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/lib/Doctrine/Inflector/Rules/French/Inflectible.php", "start": 42797908, "end": 42799729, "audio": 0}, {"filename": "/src/api-platform-light/vendor/doctrine/inflector/docs/en/index.rst", "start": 42799729, "end": 42806253, "audio": 0}, {"filename": "/src/api-platform-light/vendor/webmozart/assert/README.md", "start": 42806253, "end": 42822312, "audio": 0}, {"filename": "/src/api-platform-light/vendor/webmozart/assert/.editorconfig", "start": 42822312, "end": 42822470, "audio": 0}, {"filename": "/src/api-platform-light/vendor/webmozart/assert/CHANGELOG.md", "start": 42822470, "end": 42827622, "audio": 0}, {"filename": "/src/api-platform-light/vendor/webmozart/assert/composer.json", "start": 42827622, "end": 42828511, "audio": 0}, {"filename": "/src/api-platform-light/vendor/webmozart/assert/LICENSE", "start": 42828511, "end": 42829595, "audio": 0}, {"filename": "/src/api-platform-light/vendor/webmozart/assert/psalm.xml", "start": 42829595, "end": 42830002, "audio": 0}, {"filename": "/src/api-platform-light/vendor/webmozart/assert/src/Assert.php", "start": 42830002, "end": 42885831, "audio": 0}, {"filename": "/src/api-platform-light/vendor/webmozart/assert/src/Mixin.php", "start": 42885831, "end": 42935369, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/README.md", "start": 42935369, "end": 42939944, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/appveyor.yml", "start": 42939944, "end": 42940842, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/composer.json", "start": 42940842, "end": 42941535, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/LICENSE", "start": 42941535, "end": 42942607, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/.travis.yml", "start": 42942607, "end": 42942869, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/CONTRIBUTING.md", "start": 42942869, "end": 42944087, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/.gitignore", "start": 42944087, "end": 42944110, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/phpunit.xml.dist", "start": 42944110, "end": 42944751, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/LanguageNegotiator.php", "start": 42944751, "end": 42945772, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/CharsetNegotiator.php", "start": 42945772, "end": 42945996, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/AcceptLanguage.php", "start": 42945996, "end": 42947059, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/Accept.php", "start": 42947059, "end": 42947884, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/AcceptCharset.php", "start": 42947884, "end": 42947988, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/BaseAccept.php", "start": 42947988, "end": 42950928, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/EncodingNegotiator.php", "start": 42950928, "end": 42951154, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/AcceptEncoding.php", "start": 42951154, "end": 42951259, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/AbstractNegotiator.php", "start": 42951259, "end": 42954893, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/Match.php", "start": 42954893, "end": 42956041, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/Negotiator.php", "start": 42956041, "end": 42958910, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/AcceptHeader.php", "start": 42958910, "end": 42958968, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/Exception/InvalidArgument.php", "start": 42958968, "end": 42959090, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/Exception/Exception.php", "start": 42959090, "end": 42959155, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/Exception/InvalidLanguage.php", "start": 42959155, "end": 42959269, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/Exception/InvalidMediaType.php", "start": 42959269, "end": 42959384, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/src/Negotiation/Exception/InvalidHeader.php", "start": 42959384, "end": 42959496, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/tests/bootstrap.php", "start": 42959496, "end": 42959844, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/tests/Negotiation/Tests/EncodingNegotiatorTest.php", "start": 42959844, "end": 42962254, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/tests/Negotiation/Tests/NegotiatorTest.php", "start": 42962254, "end": 42972976, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/tests/Negotiation/Tests/AcceptTest.php", "start": 42972976, "end": 42975663, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/tests/Negotiation/Tests/LanguageNegotiatorTest.php", "start": 42975663, "end": 42978360, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/tests/Negotiation/Tests/CharsetNegotiatorTest.php", "start": 42978360, "end": 42982912, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/tests/Negotiation/Tests/BaseAcceptTest.php", "start": 42982912, "end": 42985101, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/tests/Negotiation/Tests/AcceptLanguageTest.php", "start": 42985101, "end": 42986308, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/tests/Negotiation/Tests/TestCase.php", "start": 42986308, "end": 42986651, "audio": 0}, {"filename": "/src/api-platform-light/vendor/willdurand/negotiation/tests/Negotiation/Tests/MatchTest.php", "start": 42986651, "end": 42988292, "audio": 0}, {"filename": "/src/api-platform-light/vendor/bin/var-dump-server", "start": 42988292, "end": 42990330, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/README.md", "start": 42990330, "end": 42990993, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/CHANGELOG.md", "start": 42990993, "end": 43002086, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/SerializerInterface.php", "start": 43002086, "end": 43003008, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Serializer.php", "start": 43003008, "end": 43015457, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/composer.json", "start": 43015457, "end": 43017962, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/LICENSE", "start": 43017962, "end": 43019027, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/SerializerAwareInterface.php", "start": 43019027, "end": 43019526, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/SerializerAwareTrait.php", "start": 43019526, "end": 43020085, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/NotEncodableValueException.php", "start": 43020085, "end": 43020519, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/MappingException.php", "start": 43020519, "end": 43020938, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/ExtraAttributesException.php", "start": 43020938, "end": 43021907, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/InvalidArgumentException.php", "start": 43021907, "end": 43022389, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/UnexpectedValueException.php", "start": 43022389, "end": 43022869, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/LogicException.php", "start": 43022869, "end": 43023319, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/RuntimeException.php", "start": 43023319, "end": 43023777, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/CircularReferenceException.php", "start": 43023777, "end": 43024216, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/UnsupportedException.php", "start": 43024216, "end": 43024659, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/BadMethodCallException.php", "start": 43024659, "end": 43025043, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/NotNormalizableValueException.php", "start": 43025043, "end": 43025480, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/MissingConstructorArgumentsException.php", "start": 43025480, "end": 43025899, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Exception/ExceptionInterface.php", "start": 43025899, "end": 43026334, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/CacheWarmer/CompiledClassMetadataCacheWarmer.php", "start": 43026334, "end": 43028185, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/AbstractNormalizer.php", "start": 43028185, "end": 43046759, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/FormErrorNormalizer.php", "start": 43046759, "end": 43049103, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/ContextAwareNormalizerInterface.php", "start": 43049103, "end": 43049820, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/DenormalizableInterface.php", "start": 43049820, "end": 43051442, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/NormalizerAwareTrait.php", "start": 43051442, "end": 43052012, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/UidNormalizer.php", "start": 43052012, "end": 43053717, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/NormalizerAwareInterface.php", "start": 43053717, "end": 43054225, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/AbstractObjectNormalizer.php", "start": 43054225, "end": 43081277, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/DateIntervalNormalizer.php", "start": 43081277, "end": 43085473, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/MimeMessageNormalizer.php", "start": 43085473, "end": 43089332, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/DateTimeZoneNormalizer.php", "start": 43089332, "end": 43091572, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/ObjectToPopulateTrait.php", "start": 43091572, "end": 43092713, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/UnwrappingDenormalizer.php", "start": 43092713, "end": 43094756, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/ConstraintViolationListNormalizer.php", "start": 43094756, "end": 43099153, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/DenormalizerInterface.php", "start": 43099153, "end": 43101570, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/ArrayDenormalizer.php", "start": 43101570, "end": 43104857, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/DenormalizerAwareTrait.php", "start": 43104857, "end": 43105443, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/ProblemNormalizer.php", "start": 43105443, "end": 43107484, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/DataUriNormalizer.php", "start": 43107484, "end": 43112675, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/NormalizerInterface.php", "start": 43112675, "end": 43114664, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/DenormalizerAwareInterface.php", "start": 43114664, "end": 43115182, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/ObjectNormalizer.php", "start": 43115182, "end": 43122272, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/JsonSerializableNormalizer.php", "start": 43122272, "end": 43124336, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/NormalizableInterface.php", "start": 43124336, "end": 43125794, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/CacheableSupportsMethodInterface.php", "start": 43125794, "end": 43126489, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/GetSetMethodNormalizer.php", "start": 43126489, "end": 43131589, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/CustomNormalizer.php", "start": 43131589, "end": 43133810, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/DateTimeNormalizer.php", "start": 43133810, "end": 43138672, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/ContextAwareDenormalizerInterface.php", "start": 43138672, "end": 43139413, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Normalizer/PropertyNormalizer.php", "start": 43139413, "end": 43145200, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/JsonEncoder.php", "start": 43145200, "end": 43146682, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/ChainEncoder.php", "start": 43146682, "end": 43149246, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/CsvEncoder.php", "start": 43149246, "end": 43158775, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/JsonDecode.php", "start": 43158775, "end": 43162020, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/DecoderInterface.php", "start": 43162020, "end": 43163320, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/XmlEncoder.php", "start": 43163320, "end": 43181434, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/ContextAwareDecoderInterface.php", "start": 43181434, "end": 43182115, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/ChainDecoder.php", "start": 43182115, "end": 43184204, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/YamlEncoder.php", "start": 43184204, "end": 43186836, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/NormalizationAwareInterface.php", "start": 43186836, "end": 43187452, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/JsonEncode.php", "start": 43187452, "end": 43189170, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/EncoderInterface.php", "start": 43189170, "end": 43190219, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Encoder/ContextAwareEncoderInterface.php", "start": 43190219, "end": 43190900, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Extractor/ObjectPropertyListExtractor.php", "start": 43190900, "end": 43192046, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Extractor/ObjectPropertyListExtractorInterface.php", "start": 43192046, "end": 43192637, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/ClassMetadata.php", "start": 43192637, "end": 43196158, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/ClassDiscriminatorResolverInterface.php", "start": 43196158, "end": 43196965, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/AttributeMetadata.php", "start": 43196965, "end": 43200882, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/ClassDiscriminatorMapping.php", "start": 43200882, "end": 43202392, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/AttributeMetadataInterface.php", "start": 43202392, "end": 43204145, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/ClassDiscriminatorFromClassMetadata.php", "start": 43204145, "end": 43206897, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/ClassMetadataInterface.php", "start": 43206897, "end": 43208503, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Loader/AnnotationLoader.php", "start": 43208503, "end": 43215264, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Loader/FileLoader.php", "start": 43215264, "end": 43216329, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Loader/XmlFileLoader.php", "start": 43216329, "end": 43220491, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Loader/LoaderInterface.php", "start": 43220491, "end": 43221093, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Loader/YamlFileLoader.php", "start": 43221093, "end": 43226921, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Loader/LoaderChain.php", "start": 43226921, "end": 43228882, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Loader/schema/dic/serializer-mapping/serializer-mapping-1.0.xsd", "start": 43228882, "end": 43232197, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Factory/ClassMetadataFactoryInterface.php", "start": 43232197, "end": 43233807, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Factory/ClassMetadataFactory.php", "start": 43233807, "end": 43235713, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Factory/CompiledClassMetadataFactory.php", "start": 43235713, "end": 43238598, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Factory/ClassResolverTrait.php", "start": 43238598, "end": 43239847, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Factory/ClassMetadataFactoryCompiler.php", "start": 43239847, "end": 43241842, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Mapping/Factory/CacheClassMetadataFactory.php", "start": 43241842, "end": 43243586, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/DependencyInjection/SerializerPass.php", "start": 43243586, "end": 43245845, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/NameConverter/MetadataAwareNameConverter.php", "start": 43245845, "end": 43251205, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/NameConverter/CamelCaseToSnakeCaseNameConverter.php", "start": 43251205, "end": 43252986, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/NameConverter/NameConverterInterface.php", "start": 43252986, "end": 43253743, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/NameConverter/AdvancedNameConverterInterface.php", "start": 43253743, "end": 43254574, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Annotation/MaxDepth.php", "start": 43254574, "end": 43255918, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Annotation/Ignore.php", "start": 43255918, "end": 43256447, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Annotation/DiscriminatorMap.php", "start": 43256447, "end": 43258327, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Annotation/SerializedName.php", "start": 43258327, "end": 43259798, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/serializer/Annotation/Groups.php", "start": 43259798, "end": 43261250, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-grapheme/README.md", "start": 43261250, "end": 43262863, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-grapheme/composer.json", "start": 43262863, "end": 43263887, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-grapheme/LICENSE", "start": 43263887, "end": 43264952, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-grapheme/bootstrap.php", "start": 43264952, "end": 43267165, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-grapheme/Grapheme.php", "start": 43267165, "end": 43275328, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/web-link/HttpHeaderSerializer.php", "start": 43275328, "end": 43277008, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/web-link/README.md", "start": 43277008, "end": 43278391, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/web-link/CHANGELOG.md", "start": 43278391, "end": 43278491, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/web-link/GenericLinkProvider.php", "start": 43278491, "end": 43280146, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/web-link/composer.json", "start": 43280146, "end": 43281248, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/web-link/LICENSE", "start": 43281248, "end": 43282313, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/web-link/Link.php", "start": 43282313, "end": 43285680, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/web-link/EventListener/AddLinkHeaderListener.php", "start": 43285680, "end": 43287253, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/ContainerConstraintValidatorFactory.php", "start": 43287253, "end": 43289248, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/ConstraintValidatorInterface.php", "start": 43289248, "end": 43290017, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/README.md", "start": 43290017, "end": 43290601, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/GroupSequenceProviderInterface.php", "start": 43290601, "end": 43291286, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/ConstraintViolation.php", "start": 43291286, "end": 43296337, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/CHANGELOG.md", "start": 43296337, "end": 43313400, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/ConstraintViolationListInterface.php", "start": 43313400, "end": 43314983, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/composer.json", "start": 43314983, "end": 43317893, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/LICENSE", "start": 43317893, "end": 43318958, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/ValidatorBuilder.php", "start": 43318958, "end": 43331883, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/ConstraintValidatorFactoryInterface.php", "start": 43331883, "end": 43332592, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Validation.php", "start": 43332592, "end": 43334899, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraint.php", "start": 43334899, "end": 43345083, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/ConstraintValidator.php", "start": 43345083, "end": 43349920, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/ConstraintViolationList.php", "start": 43349920, "end": 43353775, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/ConstraintViolationInterface.php", "start": 43353775, "end": 43358013, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/ObjectInitializerInterface.php", "start": 43358013, "end": 43358819, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/ConstraintValidatorFactory.php", "start": 43358819, "end": 43360066, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.az.xlf", "start": 43360066, "end": 43382743, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.uk.xlf", "start": 43382743, "end": 43409855, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.en.xlf", "start": 43409855, "end": 43432658, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.ja.xlf", "start": 43432658, "end": 43456154, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.hu.xlf", "start": 43456154, "end": 43479699, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.sv.xlf", "start": 43479699, "end": 43502568, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.mn.xlf", "start": 43502568, "end": 43528499, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.be.xlf", "start": 43528499, "end": 43553451, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.nn.xlf", "start": 43553451, "end": 43575673, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.tr.xlf", "start": 43575673, "end": 43598180, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.zh_TW.xlf", "start": 43598180, "end": 43620008, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.sq.xlf", "start": 43620008, "end": 43643937, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.id.xlf", "start": 43643937, "end": 43666355, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.et.xlf", "start": 43666355, "end": 43687341, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.af.xlf", "start": 43687341, "end": 43710710, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.sl.xlf", "start": 43710710, "end": 43733318, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.nl.xlf", "start": 43733318, "end": 43756412, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.ru.xlf", "start": 43756412, "end": 43784095, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.el.xlf", "start": 43784095, "end": 43811966, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.hy.xlf", "start": 43811966, "end": 43835979, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.tl.xlf", "start": 43835979, "end": 43859780, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.nb.xlf", "start": 43859780, "end": 43882219, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.pl.xlf", "start": 43882219, "end": 43906049, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.gl.xlf", "start": 43906049, "end": 43929522, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.th.xlf", "start": 43929522, "end": 43956560, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.lv.xlf", "start": 43956560, "end": 43980233, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.lb.xlf", "start": 43980233, "end": 44000293, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.no.xlf", "start": 44000293, "end": 44022732, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.ro.xlf", "start": 44022732, "end": 44047248, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.de.xlf", "start": 44047248, "end": 44070735, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.pt.xlf", "start": 44070735, "end": 44090549, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.vi.xlf", "start": 44090549, "end": 44114529, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.lt.xlf", "start": 44114529, "end": 44138151, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.sk.xlf", "start": 44138151, "end": 44162090, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.es.xlf", "start": 44162090, "end": 44185680, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.fi.xlf", "start": 44185680, "end": 44208418, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.da.xlf", "start": 44208418, "end": 44231019, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.fr.xlf", "start": 44231019, "end": 44254716, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.cs.xlf", "start": 44254716, "end": 44278462, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.zh_CN.xlf", "start": 44278462, "end": 44300325, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.pt_BR.xlf", "start": 44300325, "end": 44323542, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.hr.xlf", "start": 44323542, "end": 44345038, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.fa.xlf", "start": 44345038, "end": 44371023, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.cy.xlf", "start": 44371023, "end": 44390354, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.it.xlf", "start": 44390354, "end": 44414003, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.he.xlf", "start": 44414003, "end": 44437959, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.sr_Latn.xlf", "start": 44437959, "end": 44461665, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.sr_Cyrl.xlf", "start": 44461665, "end": 44488805, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.ca.xlf", "start": 44488805, "end": 44512167, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.ar.xlf", "start": 44512167, "end": 44539828, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.eu.xlf", "start": 44539828, "end": 44559946, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.bs.xlf", "start": 44559946, "end": 44584082, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Resources/translations/validators.bg.xlf", "start": 44584082, "end": 44610812, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/ValidationFailedException.php", "start": 44610812, "end": 44611734, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/GroupDefinitionException.php", "start": 44611734, "end": 44612084, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/MappingException.php", "start": 44612084, "end": 44612426, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/ValidatorException.php", "start": 44612426, "end": 44612768, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/NoSuchMetadataException.php", "start": 44612768, "end": 44613176, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/MissingOptionsException.php", "start": 44613176, "end": 44613777, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/InvalidArgumentException.php", "start": 44613777, "end": 44614288, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/UnexpectedValueException.php", "start": 44614288, "end": 44615013, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/UnexpectedTypeException.php", "start": 44615013, "end": 44615559, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/LogicException.php", "start": 44615559, "end": 44615926, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/RuntimeException.php", "start": 44615926, "end": 44616413, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/InvalidOptionsException.php", "start": 44616413, "end": 44617014, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/UnsupportedMetadataException.php", "start": 44617014, "end": 44617433, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/BadMethodCallException.php", "start": 44617433, "end": 44617938, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/ConstraintDefinitionException.php", "start": 44617938, "end": 44618293, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/ExceptionInterface.php", "start": 44618293, "end": 44618751, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Exception/OutOfBoundsException.php", "start": 44618751, "end": 44619250, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Validator/TraceableValidator.php", "start": 44619250, "end": 44622777, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Validator/ValidatorInterface.php", "start": 44622777, "end": 44626937, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Validator/ContextualValidatorInterface.php", "start": 44626937, "end": 44630182, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Validator/RecursiveValidator.php", "start": 44630182, "end": 44633601, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Validator/LazyProperty.php", "start": 44633601, "end": 44634294, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Validator/RecursiveContextualValidator.php", "start": 44634294, "end": 44664426, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Violation/ConstraintViolationBuilderInterface.php", "start": 44664426, "end": 44667514, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Violation/ConstraintViolationBuilder.php", "start": 44667514, "end": 44671643, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/CascadingStrategy.php", "start": 44671643, "end": 44673063, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/TraversalStrategy.php", "start": 44673063, "end": 44674553, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/ClassMetadata.php", "start": 44674553, "end": 44690361, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/GenericMetadata.php", "start": 44690361, "end": 44697061, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/MemberMetadata.php", "start": 44697061, "end": 44702501, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/PropertyMetadataInterface.php", "start": 44702501, "end": 44703817, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/PropertyMetadata.php", "start": 44703817, "end": 44706774, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/ClassMetadataInterface.php", "start": 44706774, "end": 44710216, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/GetterMetadata.php", "start": 44710216, "end": 44712829, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/AutoMappingStrategy.php", "start": 44712829, "end": 44713634, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/MetadataInterface.php", "start": 44713634, "end": 44715282, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/AutoMappingTrait.php", "start": 44715282, "end": 44716325, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/StaticMethodLoader.php", "start": 44716325, "end": 44718096, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/YamlFilesLoader.php", "start": 44718096, "end": 44718776, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/AnnotationLoader.php", "start": 44718776, "end": 44723256, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/FileLoader.php", "start": 44723256, "end": 44724572, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/XmlFileLoader.php", "start": 44724572, "end": 44731327, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/AbstractLoader.php", "start": 44731327, "end": 44734281, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/PropertyInfoLoader.php", "start": 44734281, "end": 44741151, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/FilesLoader.php", "start": 44741151, "end": 44742507, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/LoaderInterface.php", "start": 44742507, "end": 44743223, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/YamlFileLoader.php", "start": 44743223, "end": 44748771, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/XmlFilesLoader.php", "start": 44748771, "end": 44749448, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/LoaderChain.php", "start": 44749448, "end": 44751166, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Loader/schema/dic/constraint-mapping/constraint-mapping-1.0.xsd", "start": 44751166, "end": 44757355, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Factory/BlackHoleMetadataFactory.php", "start": 44757355, "end": 44758334, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Factory/LazyLoadingMetadataFactory.php", "start": 44758334, "end": 44763985, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Mapping/Factory/MetadataFactoryInterface.php", "start": 44763985, "end": 44765174, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/CountryValidator.php", "start": 44765174, "end": 44766783, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/TimezoneValidator.php", "start": 44766783, "end": 44770715, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/DateTime.php", "start": 44770715, "end": 44772446, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Date.php", "start": 44772446, "end": 44773650, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Country.php", "start": 44773650, "end": 44775177, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/HostnameValidator.php", "start": 44775177, "end": 44777250, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/FileValidator.php", "start": 44777250, "end": 44786935, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/LessThan.php", "start": 44786935, "end": 44787788, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/File.php", "start": 44787788, "end": 44795036, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/ImageValidator.php", "start": 44795036, "end": 44804419, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/GroupSequence.php", "start": 44804419, "end": 44807162, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Traverse.php", "start": 44807162, "end": 44808377, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/CardSchemeValidator.php", "start": 44808377, "end": 44813476, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/ExpressionLanguageSyntaxValidator.php", "start": 44813476, "end": 44815462, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/DateTimeValidator.php", "start": 44815462, "end": 44818239, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/LuhnValidator.php", "start": 44818239, "end": 44821532, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/NotNull.php", "start": 44821532, "end": 44822594, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/PositiveOrZero.php", "start": 44822594, "end": 44823278, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/EqualToValidator.php", "start": 44823278, "end": 44824048, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Composite.php", "start": 44824048, "end": 44829616, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Language.php", "start": 44829616, "end": 44831149, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Expression.php", "start": 44831149, "end": 44834041, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Ulid.php", "start": 44834041, "end": 44835464, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IpValidator.php", "start": 44835464, "end": 44838611, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Existence.php", "start": 44838611, "end": 44839206, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/NotCompromisedPasswordValidator.php", "start": 44839206, "end": 44842671, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Luhn.php", "start": 44842671, "end": 44844095, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Image.php", "start": 44844095, "end": 44853277, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/LanguageValidator.php", "start": 44853277, "end": 44854892, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Unique.php", "start": 44854892, "end": 44856022, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/NotBlank.php", "start": 44856022, "end": 44857679, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Uuid.php", "start": 44857679, "end": 44861092, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IssnValidator.php", "start": 44861092, "end": 44865316, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IsNull.php", "start": 44865316, "end": 44866376, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/RegexValidator.php", "start": 44866376, "end": 44868084, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/NegativeOrZero.php", "start": 44868084, "end": 44868765, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/GreaterThanOrEqualValidator.php", "start": 44868765, "end": 44869607, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Optional.php", "start": 44869607, "end": 44870038, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/GreaterThanValidator.php", "start": 44870038, "end": 44870852, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/GroupSequenceProvider.php", "start": 44870852, "end": 44871381, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Ip.php", "start": 44871381, "end": 44874418, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Json.php", "start": 44874418, "end": 44875483, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/CollectionValidator.php", "start": 44875483, "end": 44878962, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Cascade.php", "start": 44878962, "end": 44879992, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IdenticalTo.php", "start": 44879992, "end": 44880892, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/GreaterThan.php", "start": 44880892, "end": 44881748, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/EmailValidator.php", "start": 44881748, "end": 44885564, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IsTrueValidator.php", "start": 44885564, "end": 44886734, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Regex.php", "start": 44886734, "end": 44890877, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/ValidValidator.php", "start": 44890877, "end": 44891883, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/LocaleValidator.php", "start": 44891883, "end": 44893564, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/NotEqualTo.php", "start": 44893564, "end": 44894422, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IsinValidator.php", "start": 44894422, "end": 44896961, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/CountValidator.php", "start": 44896961, "end": 44899590, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Count.php", "start": 44899590, "end": 44902977, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Email.php", "start": 44902977, "end": 44905640, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/NotEqualToValidator.php", "start": 44905640, "end": 44906421, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/NotIdenticalToValidator.php", "start": 44906421, "end": 44907217, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/LessThanValidator.php", "start": 44907217, "end": 44908023, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Sequentially.php", "start": 44908023, "end": 44909053, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/LessThanOrEqualValidator.php", "start": 44909053, "end": 44909887, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/DateValidator.php", "start": 44909887, "end": 44912063, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/UniqueValidator.php", "start": 44912063, "end": 44913656, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IdenticalToValidator.php", "start": 44913656, "end": 44914444, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/AtLeastOneOfValidator.php", "start": 44914444, "end": 44916173, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IsFalse.php", "start": 44916173, "end": 44917238, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/NotBlankValidator.php", "start": 44917238, "end": 44918628, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Negative.php", "start": 44918628, "end": 44919281, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Callback.php", "start": 44919281, "end": 44921036, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IsTrue.php", "start": 44921036, "end": 44922096, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/CardScheme.php", "start": 44922096, "end": 44924284, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/TimeValidator.php", "start": 44924284, "end": 44926403, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Positive.php", "start": 44926403, "end": 44927059, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/LessThanOrEqual.php", "start": 44927059, "end": 44927931, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/LengthValidator.php", "start": 44927931, "end": 44931203, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/ZeroComparisonConstraintTrait.php", "start": 44931203, "end": 44932500, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/NotNullValidator.php", "start": 44932500, "end": 44933577, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/AtLeastOneOf.php", "start": 44933577, "end": 44934768, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/CurrencyValidator.php", "start": 44934768, "end": 44936370, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Required.php", "start": 44936370, "end": 44936801, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/JsonValidator.php", "start": 44936801, "end": 44938207, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/NumberConstraintTrait.php", "start": 44938207, "end": 44939512, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Compound.php", "start": 44939512, "end": 44940913, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/EnableAutoMapping.php", "start": 44940913, "end": 44942232, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Hostname.php", "start": 44942232, "end": 44943481, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/RangeValidator.php", "start": 44943481, "end": 44951414, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Url.php", "start": 44951414, "end": 44953242, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Isin.php", "start": 44953242, "end": 44954739, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Currency.php", "start": 44954739, "end": 44956184, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/UlidValidator.php", "start": 44956184, "end": 44958594, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/CallbackValidator.php", "start": 44958594, "end": 44960735, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Bic.php", "start": 44960735, "end": 44964385, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/NotIdenticalTo.php", "start": 44964385, "end": 44965289, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/EqualTo.php", "start": 44965289, "end": 44966143, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/GreaterThanOrEqual.php", "start": 44966143, "end": 44967018, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/All.php", "start": 44967018, "end": 44967751, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Time.php", "start": 44967751, "end": 44968989, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/UrlValidator.php", "start": 44968989, "end": 44973628, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Range.php", "start": 44973628, "end": 44978852, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/ExpressionValidator.php", "start": 44978852, "end": 44980719, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/ChoiceValidator.php", "start": 44980719, "end": 44984797, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Collection.php", "start": 44984797, "end": 44987348, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Blank.php", "start": 44987348, "end": 44988411, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Choice.php", "start": 44988411, "end": 44991249, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Valid.php", "start": 44991249, "end": 44992304, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/NotCompromisedPassword.php", "start": 44992304, "end": 44993805, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/BlankValidator.php", "start": 44993805, "end": 44994893, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IsbnValidator.php", "start": 44994893, "end": 45000459, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IsNullValidator.php", "start": 45000459, "end": 45001533, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/DivisibleByValidator.php", "start": 45001533, "end": 45002907, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/AllValidator.php", "start": 45002907, "end": 45004240, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Type.php", "start": 45004240, "end": 45005907, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Locale.php", "start": 45005907, "end": 45007453, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/SequentiallyValidator.php", "start": 45007453, "end": 45008657, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Length.php", "start": 45008657, "end": 45012675, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/UuidValidator.php", "start": 45012675, "end": 45021218, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/DivisibleBy.php", "start": 45021218, "end": 45022029, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Isbn.php", "start": 45022029, "end": 45024823, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Timezone.php", "start": 45024823, "end": 45028160, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Iban.php", "start": 45028160, "end": 45029946, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/CompoundValidator.php", "start": 45029946, "end": 45030906, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/ExpressionLanguageSyntax.php", "start": 45030906, "end": 45032430, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/TypeValidator.php", "start": 45032430, "end": 45034935, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IsFalseValidator.php", "start": 45034935, "end": 45036073, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/AbstractComparisonValidator.php", "start": 45036073, "end": 45040640, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/IbanValidator.php", "start": 45040640, "end": 45051917, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/DisableAutoMapping.php", "start": 45051917, "end": 45053238, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/AbstractComparison.php", "start": 45053238, "end": 45055541, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/BicValidator.php", "start": 45055541, "end": 45061689, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Constraints/Issn.php", "start": 45061689, "end": 45063789, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Context/ExecutionContext.php", "start": 45063789, "end": 45072383, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Context/ExecutionContextInterface.php", "start": 45072383, "end": 45084621, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Context/ExecutionContextFactoryInterface.php", "start": 45084621, "end": 45085573, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Context/ExecutionContextFactory.php", "start": 45085573, "end": 45086798, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Util/PropertyPath.php", "start": 45086798, "end": 45088198, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/DataCollector/ValidatorDataCollector.php", "start": 45088198, "end": 45091314, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/DependencyInjection/AddValidatorInitializersPass.php", "start": 45091314, "end": 45092749, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/DependencyInjection/AddConstraintValidatorsPass.php", "start": 45092749, "end": 45094661, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/DependencyInjection/AddAutoMappingConfigurationPass.php", "start": 45094661, "end": 45097692, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Test/ConstraintValidatorTestCase.php", "start": 45097692, "end": 45114181, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/validator/Command/DebugCommand.php", "start": 45114181, "end": 45120411, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Response.php", "start": 45120411, "end": 45157259, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/README.md", "start": 45157259, "end": 45157790, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/BinaryFileResponse.php", "start": 45157790, "end": 45170288, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Request.php", "start": 45170288, "end": 45239277, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/JsonResponse.php", "start": 45239277, "end": 45246623, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/RequestMatcher.php", "start": 45246623, "end": 45251373, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/InputBag.php", "start": 45251373, "end": 45255465, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/CHANGELOG.md", "start": 45255465, "end": 45270311, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/composer.json", "start": 45270311, "end": 45271406, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/LICENSE", "start": 45271406, "end": 45272471, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/HeaderBag.php", "start": 45272471, "end": 45279874, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/ResponseHeaderBag.php", "start": 45279874, "end": 45287877, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/UrlHelper.php", "start": 45287877, "end": 45290983, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/StreamedResponse.php", "start": 45290983, "end": 45294126, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/ParameterBag.php", "start": 45294126, "end": 45300155, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/RequestMatcherInterface.php", "start": 45300155, "end": 45300842, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Cookie.php", "start": 45300842, "end": 45312468, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/ServerBag.php", "start": 45312468, "end": 45316510, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/AcceptHeader.php", "start": 45316510, "end": 45320149, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/ExpressionRequestMatcher.php", "start": 45320149, "end": 45321503, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/RequestStack.php", "start": 45321503, "end": 45323872, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/AcceptHeaderItem.php", "start": 45323872, "end": 45327313, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/FileBag.php", "start": 45327313, "end": 45331264, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/HeaderUtils.php", "start": 45331264, "end": 45340106, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/IpUtils.php", "start": 45340106, "end": 45345676, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/RedirectResponse.php", "start": 45345676, "end": 45348754, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/RateLimiter/RequestRateLimiterInterface.php", "start": 45348754, "end": 45349523, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/RateLimiter/AbstractRequestRateLimiter.php", "start": 45349523, "end": 45351181, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Exception/JsonException.php", "start": 45351181, "end": 45351710, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Exception/SuspiciousOperationException.php", "start": 45351710, "end": 45352239, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Exception/BadRequestException.php", "start": 45352239, "end": 45352690, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Exception/ConflictingHeadersException.php", "start": 45352690, "end": 45353217, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Exception/RequestExceptionInterface.php", "start": 45353217, "end": 45353701, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/SessionBagInterface.php", "start": 45353701, "end": 45354550, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/SessionInterface.php", "start": 45354550, "end": 45358450, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/SessionBagProxy.php", "start": 45358450, "end": 45360539, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/SessionUtils.php", "start": 45360539, "end": 45362168, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Session.php", "start": 45362168, "end": 45368357, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Attribute/NamespacedAttributeBag.php", "start": 45368357, "end": 45372461, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Attribute/AttributeBag.php", "start": 45372461, "end": 45375396, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Attribute/AttributeBagInterface.php", "start": 45375396, "end": 45376702, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/MetadataBag.php", "start": 45376702, "end": 45380351, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/MockArraySessionStorage.php", "start": 45380351, "end": 45385474, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/NativeSessionStorage.php", "start": 45385474, "end": 45399568, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/PhpBridgeSessionStorage.php", "start": 45399568, "end": 45401059, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/SessionStorageInterface.php", "start": 45401059, "end": 45405055, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/MockFileSessionStorage.php", "start": 45405055, "end": 45408854, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Handler/PdoSessionHandler.php", "start": 45408854, "end": 45445653, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Handler/MemcachedSessionHandler.php", "start": 45445653, "end": 45448557, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Handler/StrictSessionHandler.php", "start": 45448557, "end": 45450893, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Handler/AbstractSessionHandler.php", "start": 45450893, "end": 45455898, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Handler/MigratingSessionHandler.php", "start": 45455898, "end": 45459135, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Handler/SessionHandlerFactory.php", "start": 45459135, "end": 45462980, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Handler/MarshallingSessionHandler.php", "start": 45462980, "end": 45465144, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Handler/IdentityMarshaller.php", "start": 45465144, "end": 45466116, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Handler/RedisSessionHandler.php", "start": 45466116, "end": 45469700, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Handler/MongoDbSessionHandler.php", "start": 45469700, "end": 45475017, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Handler/NullSessionHandler.php", "start": 45475017, "end": 45476339, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Handler/NativeFileSessionHandler.php", "start": 45476339, "end": 45478166, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Proxy/SessionHandlerProxy.php", "start": 45478166, "end": 45480479, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Storage/Proxy/AbstractProxy.php", "start": 45480479, "end": 45482777, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Flash/AutoExpireFlashBag.php", "start": 45482777, "end": 45486246, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Flash/FlashBag.php", "start": 45486246, "end": 45488986, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Session/Flash/FlashBagInterface.php", "start": 45488986, "end": 45490860, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/File.php", "start": 45490860, "end": 45495517, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/UploadedFile.php", "start": 45495517, "end": 45505724, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Stream.php", "start": 45505724, "end": 45506229, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Exception/ExtensionFileException.php", "start": 45506229, "end": 45506714, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Exception/UploadException.php", "start": 45506714, "end": 45507175, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Exception/PartialFileException.php", "start": 45507175, "end": 45507656, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Exception/NoTmpDirFileException.php", "start": 45507656, "end": 45508141, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Exception/AccessDeniedException.php", "start": 45508141, "end": 45508743, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Exception/FileException.php", "start": 45508743, "end": 45509209, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Exception/IniSizeFileException.php", "start": 45509209, "end": 45509691, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Exception/UnexpectedTypeException.php", "start": 45509691, "end": 45510238, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Exception/NoFileException.php", "start": 45510238, "end": 45510714, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Exception/FormSizeFileException.php", "start": 45510714, "end": 45511198, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Exception/FileNotFoundException.php", "start": 45511198, "end": 45511784, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/File/Exception/CannotWriteFileException.php", "start": 45511784, "end": 45512272, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Test/Constraint/ResponseCookieValueSame.php", "start": 45512272, "end": 45514424, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Test/Constraint/ResponseStatusCodeSame.php", "start": 45514424, "end": 45515743, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Test/Constraint/ResponseIsSuccessful.php", "start": 45515743, "end": 45516888, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Test/Constraint/ResponseIsRedirected.php", "start": 45516888, "end": 45518031, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Test/Constraint/ResponseHasHeader.php", "start": 45518031, "end": 45519156, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Test/Constraint/RequestAttributeValueSame.php", "start": 45519156, "end": 45520363, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Test/Constraint/ResponseHasCookie.php", "start": 45520363, "end": 45522274, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-foundation/Test/Constraint/ResponseHeaderSame.php", "start": 45522274, "end": 45523567, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/ResponseInterface.php", "start": 45523567, "end": 45528451, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/README.md", "start": 45528451, "end": 45528791, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/HttpClientInterface.php", "start": 45528791, "end": 45534529, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/CHANGELOG.md", "start": 45534529, "end": 45534688, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/composer.json", "start": 45534688, "end": 45535729, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/LICENSE", "start": 45535729, "end": 45536794, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/ResponseStreamInterface.php", "start": 45536794, "end": 45537346, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/.gitignore", "start": 45537346, "end": 45537380, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/ChunkInterface.php", "start": 45537380, "end": 45539428, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/Exception/TimeoutExceptionInterface.php", "start": 45539428, "end": 45539878, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/Exception/DecodingExceptionInterface.php", "start": 45539878, "end": 45540361, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/Exception/ServerExceptionInterface.php", "start": 45540361, "end": 45540809, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/Exception/HttpExceptionInterface.php", "start": 45540809, "end": 45541377, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/Exception/ClientExceptionInterface.php", "start": 45541377, "end": 45541825, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/Exception/RedirectionExceptionInterface.php", "start": 45541825, "end": 45542326, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/Exception/ExceptionInterface.php", "start": 45542326, "end": 45542778, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/Exception/TransportExceptionInterface.php", "start": 45542778, "end": 45543239, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/Test/TestHttpServer.php", "start": 45543239, "end": 45544463, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/Test/HttpClientTestCase.php", "start": 45544463, "end": 45578675, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-client-contracts/Test/Fixtures/web/index.php", "start": 45578675, "end": 45583399, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php80/README.md", "start": 45583399, "end": 45584174, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php80/composer.json", "start": 45584174, "end": 45585259, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php80/LICENSE", "start": 45585259, "end": 45586319, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php80/Php80.php", "start": 45586319, "end": 45589692, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php80/bootstrap.php", "start": 45589692, "end": 45591170, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php80/Resources/stubs/Attribute.php", "start": 45591170, "end": 45591640, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php80/Resources/stubs/ValueError.php", "start": 45591640, "end": 45591682, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php80/Resources/stubs/UnhandledMatchError.php", "start": 45591682, "end": 45591733, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php80/Resources/stubs/Stringable.php", "start": 45591733, "end": 45591898, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/README.md", "start": 45591898, "end": 45592598, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/UriSigner.php", "start": 45592598, "end": 45595903, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/CHANGELOG.md", "start": 45595903, "end": 45611682, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/composer.json", "start": 45611682, "end": 45614176, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/LICENSE", "start": 45614176, "end": 45615241, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpClientKernel.php", "start": 45615241, "end": 45619157, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/RebootableInterface.php", "start": 45619157, "end": 45619944, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/KernelInterface.php", "start": 45619944, "end": 45624094, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpKernelInterface.php", "start": 45624094, "end": 45625354, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpKernelBrowser.php", "start": 45625354, "end": 45631547, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/KernelEvents.php", "start": 45631547, "end": 45635626, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/TerminableInterface.php", "start": 45635626, "end": 45636536, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Kernel.php", "start": 45636536, "end": 45665035, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpKernel.php", "start": 45665035, "end": 45675266, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpCache/HttpCache.php", "start": 45675266, "end": 45700960, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpCache/Store.php", "start": 45700960, "end": 45714760, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpCache/ResponseCacheStrategy.php", "start": 45714760, "end": 45722409, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpCache/Ssi.php", "start": 45722409, "end": 45725331, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpCache/Esi.php", "start": 45725331, "end": 45729043, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpCache/SurrogateInterface.php", "start": 45729043, "end": 45731446, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpCache/ResponseCacheStrategyInterface.php", "start": 45731446, "end": 45732447, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpCache/AbstractSurrogate.php", "start": 45732447, "end": 45736885, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpCache/SubRequestHandler.php", "start": 45736885, "end": 45740694, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/HttpCache/StoreInterface.php", "start": 45740694, "end": 45742911, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Config/FileLocator.php", "start": 45742911, "end": 45744020, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Resources/welcome.html.php", "start": 45744020, "end": 45776374, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Attribute/ArgumentInterface.php", "start": 45776374, "end": 45776759, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/ControllerMetadata/ArgumentMetadata.php", "start": 45776759, "end": 45779702, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/ControllerMetadata/ArgumentMetadataFactoryInterface.php", "start": 45779702, "end": 45780329, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/ControllerMetadata/ArgumentMetadataFactory.php", "start": 45780329, "end": 45783633, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/UnauthorizedHttpException.php", "start": 45783633, "end": 45784583, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/NotFoundHttpException.php", "start": 45784583, "end": 45785391, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/HttpException.php", "start": 45785391, "end": 45786524, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/BadRequestHttpException.php", "start": 45786524, "end": 45787327, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/NotAcceptableHttpException.php", "start": 45787327, "end": 45788133, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/LengthRequiredHttpException.php", "start": 45788133, "end": 45788940, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/HttpExceptionInterface.php", "start": 45788940, "end": 45789650, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/GoneHttpException.php", "start": 45789650, "end": 45790447, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/UnexpectedSessionUsageException.php", "start": 45790447, "end": 45790863, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/PreconditionFailedHttpException.php", "start": 45790863, "end": 45791674, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/InvalidMetadataException.php", "start": 45791674, "end": 45792022, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/ControllerDoesNotReturnResponseException.php", "start": 45792022, "end": 45794356, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/AccessDeniedHttpException.php", "start": 45794356, "end": 45795214, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/PreconditionRequiredHttpException.php", "start": 45795214, "end": 45796073, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/ServiceUnavailableHttpException.php", "start": 45796073, "end": 45797111, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/ConflictHttpException.php", "start": 45797111, "end": 45797912, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/MethodNotAllowedHttpException.php", "start": 45797912, "end": 45798866, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/TooManyRequestsHttpException.php", "start": 45798866, "end": 45799947, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/UnsupportedMediaTypeHttpException.php", "start": 45799947, "end": 45800760, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Exception/UnprocessableEntityHttpException.php", "start": 45800760, "end": 45801581, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Event/ViewEvent.php", "start": 45801581, "end": 45803163, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Event/ControllerEvent.php", "start": 45803163, "end": 45804395, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Event/ControllerArgumentsEvent.php", "start": 45804395, "end": 45805978, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Event/ExceptionEvent.php", "start": 45805978, "end": 45807914, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Event/TerminateEvent.php", "start": 45807914, "end": 45809013, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Event/FinishRequestEvent.php", "start": 45809013, "end": 45809466, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Event/ResponseEvent.php", "start": 45809466, "end": 45810659, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Event/KernelEvent.php", "start": 45810659, "end": 45812673, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Event/RequestEvent.php", "start": 45812673, "end": 45813922, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/CacheWarmer/CacheWarmerInterface.php", "start": 45813922, "end": 45814742, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/CacheWarmer/CacheWarmer.php", "start": 45814742, "end": 45815620, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/CacheWarmer/CacheWarmerAggregate.php", "start": 45815620, "end": 45819625, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/CacheWarmer/WarmableInterface.php", "start": 45819625, "end": 45820237, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Profiler/ProfilerStorageInterface.php", "start": 45820237, "end": 45821881, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Profiler/FileProfilerStorage.php", "start": 45821881, "end": 45830961, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Profiler/Profile.php", "start": 45830961, "end": 45836148, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Profiler/Profiler.php", "start": 45836148, "end": 45842918, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Fragment/FragmentHandler.php", "start": 45842918, "end": 45846706, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Fragment/EsiFragmentRenderer.php", "start": 45846706, "end": 45847269, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Fragment/SsiFragmentRenderer.php", "start": 45847269, "end": 45847832, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Fragment/FragmentRendererInterface.php", "start": 45847832, "end": 45848866, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Fragment/AbstractSurrogateFragmentRenderer.php", "start": 45848866, "end": 45852836, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Fragment/HIncludeFragmentRenderer.php", "start": 45852836, "end": 45856585, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Fragment/RoutableFragmentRenderer.php", "start": 45856585, "end": 45859513, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Fragment/InlineFragmentRenderer.php", "start": 45859513, "end": 45864536, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Debug/FileLinkFormatter.php", "start": 45864536, "end": 45867668, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Debug/TraceableEventDispatcher.php", "start": 45867668, "end": 45870949, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/CacheClearer/Psr6CacheClearer.php", "start": 45870949, "end": 45872231, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/CacheClearer/CacheClearerInterface.php", "start": 45872231, "end": 45872744, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/CacheClearer/ChainCacheClearer.php", "start": 45872744, "end": 45873516, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Bundle/BundleInterface.php", "start": 45873516, "end": 45875185, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Bundle/Bundle.php", "start": 45875185, "end": 45879574, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Log/Logger.php", "start": 45879574, "end": 45883465, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Log/DebugLoggerInterface.php", "start": 45883465, "end": 45884491, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/LocaleAwareListener.php", "start": 45884491, "end": 45886899, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/RouterListener.php", "start": 45886899, "end": 45893784, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/DebugHandlersListener.php", "start": 45893784, "end": 45900862, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/ValidateRequestListener.php", "start": 45900862, "end": 45902068, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/ErrorListener.php", "start": 45902068, "end": 45907457, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/LocaleListener.php", "start": 45907457, "end": 45910057, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/AbstractSessionListener.php", "start": 45910057, "end": 45917940, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/TestSessionListener.php", "start": 45917940, "end": 45918925, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/FragmentListener.php", "start": 45918925, "end": 45921837, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/AddRequestFormatsListener.php", "start": 45921837, "end": 45923064, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/ProfilerListener.php", "start": 45923064, "end": 45927126, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/DisallowRobotsIndexingListener.php", "start": 45927126, "end": 45928256, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/StreamedResponseListener.php", "start": 45928256, "end": 45929491, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/SessionListener.php", "start": 45929491, "end": 45931060, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/ResponseListener.php", "start": 45931060, "end": 45932392, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/AbstractTestSessionListener.php", "start": 45932392, "end": 45936019, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/DumpListener.php", "start": 45936019, "end": 45937777, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/EventListener/SurrogateListener.php", "start": 45937777, "end": 45939568, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/DataCollector.php", "start": 45939568, "end": 45942230, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/LateDataCollectorInterface.php", "start": 45942230, "end": 45942748, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/TimeDataCollector.php", "start": 45942748, "end": 45946486, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/RouterDataCollector.php", "start": 45946486, "end": 45948900, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/RequestDataCollector.php", "start": 45948900, "end": 45965181, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/AjaxDataCollector.php", "start": 45965181, "end": 45966017, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/ExceptionDataCollector.php", "start": 45966017, "end": 45968344, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/EventDataCollector.php", "start": 45968344, "end": 45972157, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/DumpDataCollector.php", "start": 45972157, "end": 45982181, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/LoggerDataCollector.php", "start": 45982181, "end": 45990973, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/MemoryDataCollector.php", "start": 45990973, "end": 45993552, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/ConfigDataCollector.php", "start": 45993552, "end": 46001557, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DataCollector/DataCollectorInterface.php", "start": 46001557, "end": 46002445, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ControllerResolverInterface.php", "start": 46002445, "end": 46003801, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ControllerReference.php", "start": 46003801, "end": 46005107, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ArgumentResolverInterface.php", "start": 46005107, "end": 46005966, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ContainerControllerResolver.php", "start": 46005966, "end": 46008615, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/TraceableArgumentResolver.php", "start": 46008615, "end": 46009654, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ErrorController.php", "start": 46009654, "end": 46011644, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ControllerResolver.php", "start": 46011644, "end": 46019103, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ArgumentValueResolverInterface.php", "start": 46019103, "end": 46020055, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/TraceableControllerResolver.php", "start": 46020055, "end": 46021066, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ArgumentResolver.php", "start": 46021066, "end": 46024707, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ArgumentResolver/VariadicValueResolver.php", "start": 46024707, "end": 46026143, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ArgumentResolver/RequestAttributeValueResolver.php", "start": 46026143, "end": 46027281, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ArgumentResolver/TraceableValueResolver.php", "start": 46027281, "end": 46029021, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ArgumentResolver/SessionValueResolver.php", "start": 46029021, "end": 46030355, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ArgumentResolver/NotTaggedControllerValueResolver.php", "start": 46030355, "end": 46033081, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ArgumentResolver/RequestValueResolver.php", "start": 46033081, "end": 46034184, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ArgumentResolver/DefaultValueResolver.php", "start": 46034184, "end": 46035394, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/Controller/ArgumentResolver/ServiceValueResolver.php", "start": 46035394, "end": 46038437, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/FragmentRendererPass.php", "start": 46038437, "end": 46040800, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/RemoveEmptyControllerArgumentLocatorsPass.php", "start": 46040800, "end": 46043595, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/MergeExtensionConfigurationPass.php", "start": 46043595, "end": 46044717, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/AddAnnotatedClassesToCachePass.php", "start": 46044717, "end": 46049023, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/ServicesResetter.php", "start": 46049023, "end": 46050074, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/ResettableServicePass.php", "start": 46050074, "end": 46052209, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/LazyLoadingFragmentHandler.php", "start": 46052209, "end": 46053537, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/RegisterLocaleAwareServicesPass.php", "start": 46053537, "end": 46055238, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/ControllerArgumentValueResolverPass.php", "start": 46055238, "end": 46057748, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/RegisterControllerArgumentLocatorsPass.php", "start": 46057748, "end": 46068521, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/LoggerPass.php", "start": 46068521, "end": 46069546, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/Extension.php", "start": 46069546, "end": 46070645, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/http-kernel/DependencyInjection/ConfigurableExtension.php", "start": 46070645, "end": 46071929, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php73/README.md", "start": 46071929, "end": 46072490, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php73/composer.json", "start": 46072490, "end": 46073478, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php73/LICENSE", "start": 46073478, "end": 46074543, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php73/Php73.php", "start": 46074543, "end": 46075414, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php73/bootstrap.php", "start": 46075414, "end": 46076426, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-php73/Resources/stubs/JsonException.php", "start": 46076426, "end": 46076706, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/translation-contracts/README.md", "start": 46076706, "end": 46077048, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/translation-contracts/TranslatorInterface.php", "start": 46077048, "end": 46079558, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/translation-contracts/TranslatableInterface.php", "start": 46079558, "end": 46080015, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/translation-contracts/CHANGELOG.md", "start": 46080015, "end": 46080174, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/translation-contracts/composer.json", "start": 46080174, "end": 46081184, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/translation-contracts/LICENSE", "start": 46081184, "end": 46082249, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/translation-contracts/TranslatorTrait.php", "start": 46082249, "end": 46090598, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/translation-contracts/.gitignore", "start": 46090598, "end": 46090632, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/translation-contracts/LocaleAwareInterface.php", "start": 46090632, "end": 46091304, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/translation-contracts/Test/TranslatorTest.php", "start": 46091304, "end": 46106005, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/README.md", "start": 46106005, "end": 46106570, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/PropertyPathInterface.php", "start": 46106570, "end": 46108876, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/PropertyPathBuilder.php", "start": 46108876, "end": 46118673, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/CHANGELOG.md", "start": 46118673, "end": 46120816, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/composer.json", "start": 46120816, "end": 46121893, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/LICENSE", "start": 46121893, "end": 46122958, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/PropertyAccessorBuilder.php", "start": 46122958, "end": 46130301, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/PropertyPathIterator.php", "start": 46130301, "end": 46131300, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/PropertyPath.php", "start": 46131300, "end": 46136802, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/PropertyAccessor.php", "start": 46136802, "end": 46165924, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/PropertyAccess.php", "start": 46165924, "end": 46166839, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/PropertyPathIteratorInterface.php", "start": 46166839, "end": 46167595, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/PropertyAccessorInterface.php", "start": 46167595, "end": 46172231, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/Exception/InvalidPropertyPathException.php", "start": 46172231, "end": 46172695, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/Exception/InvalidArgumentException.php", "start": 46172695, "end": 46173216, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/Exception/NoSuchIndexException.php", "start": 46173216, "end": 46173678, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/Exception/NoSuchPropertyException.php", "start": 46173678, "end": 46174134, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/Exception/UninitializedPropertyException.php", "start": 46174134, "end": 46174594, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/Exception/UnexpectedTypeException.php", "start": 46174594, "end": 46175774, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/Exception/RuntimeException.php", "start": 46175774, "end": 46176271, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/Exception/AccessException.php", "start": 46176271, "end": 46176737, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/Exception/ExceptionInterface.php", "start": 46176737, "end": 46177198, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-access/Exception/OutOfBoundsException.php", "start": 46177198, "end": 46177707, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/README.md", "start": 46177707, "end": 46179052, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/DebugClassLoader.php", "start": 46179052, "end": 46221164, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/CHANGELOG.md", "start": 46221164, "end": 46221588, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/composer.json", "start": 46221588, "end": 46222544, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/LICENSE", "start": 46222544, "end": 46223609, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/ErrorHandler.php", "start": 46223609, "end": 46252892, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/BufferingLogger.php", "start": 46252892, "end": 46254657, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/ThrowableUtils.php", "start": 46254657, "end": 46255387, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Debug.php", "start": 46255387, "end": 46256493, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Error/OutOfMemoryError.php", "start": 46256493, "end": 46256826, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Error/ClassNotFoundError.php", "start": 46256826, "end": 46257719, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Error/FatalError.php", "start": 46257719, "end": 46260561, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Error/UndefinedMethodError.php", "start": 46260561, "end": 46261456, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Error/UndefinedFunctionError.php", "start": 46261456, "end": 46262353, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/ErrorEnhancer/ClassNotFoundErrorEnhancer.php", "start": 46262353, "end": 46268889, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/ErrorEnhancer/UndefinedFunctionErrorEnhancer.php", "start": 46268889, "end": 46271966, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/ErrorEnhancer/ErrorEnhancerInterface.php", "start": 46271966, "end": 46272472, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/ErrorEnhancer/UndefinedMethodErrorEnhancer.php", "start": 46272472, "end": 46274635, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/images/icon-book.svg", "start": 46274635, "end": 46275548, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/images/icon-plus-square-o.svg", "start": 46275548, "end": 46276074, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/images/icon-support.svg", "start": 46276074, "end": 46276708, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/images/icon-plus-square.svg", "start": 46276708, "end": 46277150, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/images/icon-minus-square.svg", "start": 46277150, "end": 46277487, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/images/favicon.png.base64", "start": 46277487, "end": 46278726, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/images/symfony-ghost.svg.php", "start": 46278726, "end": 46286906, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/images/icon-minus-square-o.svg", "start": 46286906, "end": 46287338, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/images/symfony-logo.svg", "start": 46287338, "end": 46288280, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/images/chevron-right.svg", "start": 46288280, "end": 46288556, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/css/exception.css", "start": 46288556, "end": 46302530, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/css/error.css", "start": 46302530, "end": 46302805, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/css/exception_full.css", "start": 46302805, "end": 46305557, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/assets/js/exception.js", "start": 46305557, "end": 46319152, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/views/traces_text.html.php", "start": 46319152, "end": 46321214, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/views/exception.html.php", "start": 46321214, "end": 46325756, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/views/trace.html.php", "start": 46325756, "end": 46328075, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/views/traces.html.php", "start": 46328075, "end": 46330192, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/views/error.html.php", "start": 46330192, "end": 46330825, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/views/exception_full.html.php", "start": 46330825, "end": 46333015, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Resources/views/logs.html.php", "start": 46333015, "end": 46335066, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Exception/SilencedErrorContext.php", "start": 46335066, "end": 46336498, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/Exception/FlattenException.php", "start": 46336498, "end": 46346951, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/ErrorRenderer/SerializerErrorRenderer.php", "start": 46346951, "end": 46350583, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/ErrorRenderer/ErrorRendererInterface.php", "start": 46350583, "end": 46351229, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/ErrorRenderer/HtmlErrorRenderer.php", "start": 46351229, "end": 46374904, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/error-handler/ErrorRenderer/CliErrorRenderer.php", "start": 46374904, "end": 46376300, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-ctype/README.md", "start": 46376300, "end": 46376652, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-ctype/Ctype.php", "start": 46376652, "end": 46382921, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-ctype/composer.json", "start": 46382921, "end": 46383905, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-ctype/LICENSE", "start": 46383905, "end": 46384970, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-ctype/bootstrap.php", "start": 46384970, "end": 46386510, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/README.md", "start": 46386510, "end": 46387070, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/AbstractString.php", "start": 46387070, "end": 46405443, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/CHANGELOG.md", "start": 46405443, "end": 46406148, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/composer.json", "start": 46406148, "end": 46407352, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/LICENSE", "start": 46407352, "end": 46408417, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/.gitattributes", "start": 46408417, "end": 46408592, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/ByteString.php", "start": 46408592, "end": 46423904, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/CodePointString.php", "start": 46423904, "end": 46431963, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/UnicodeString.php", "start": 46431963, "end": 46444697, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/LazyString.php", "start": 46444697, "end": 46449602, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/AbstractUnicodeString.php", "start": 46449602, "end": 46475959, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/Resources/functions.php", "start": 46475959, "end": 46476645, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/Resources/data/wcswidth_table_zero.php", "start": 46476645, "end": 46490800, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/Resources/data/wcswidth_table_wide.php", "start": 46490800, "end": 46502985, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/Exception/InvalidArgumentException.php", "start": 46502985, "end": 46503369, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/Exception/RuntimeException.php", "start": 46503369, "end": 46503737, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/Exception/ExceptionInterface.php", "start": 46503737, "end": 46504074, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/Slugger/SluggerInterface.php", "start": 46504074, "end": 46504789, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/Slugger/AsciiSlugger.php", "start": 46504789, "end": 46510092, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/Inflector/EnglishInflector.php", "start": 46510092, "end": 46525043, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/Inflector/FrenchInflector.php", "start": 46525043, "end": 46531079, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/string/Inflector/InflectorInterface.php", "start": 46531079, "end": 46531984, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/GenericEvent.php", "start": 46531984, "end": 46535570, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/README.md", "start": 46535570, "end": 46536174, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/CHANGELOG.md", "start": 46536174, "end": 46538899, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/composer.json", "start": 46538899, "end": 46540423, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/LICENSE", "start": 46540423, "end": 46541488, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/EventDispatcher.php", "start": 46541488, "end": 46550619, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/LegacyEventDispatcherProxy.php", "start": 46550619, "end": 46551501, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/EventDispatcherInterface.php", "start": 46551501, "end": 46553966, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/EventSubscriberInterface.php", "start": 46553966, "end": 46555686, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/ImmutableEventDispatcher.php", "start": 46555686, "end": 46557915, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/Debug/TraceableEventDispatcher.php", "start": 46557915, "end": 46569332, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/Debug/WrappedListener.php", "start": 46569332, "end": 46573335, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/DependencyInjection/AddEventAliasesPass.php", "start": 46573335, "end": 46574629, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher/DependencyInjection/RegisterListenersPass.php", "start": 46574629, "end": 46583549, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher-contracts/README.md", "start": 46583549, "end": 46583899, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher-contracts/CHANGELOG.md", "start": 46583899, "end": 46584058, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher-contracts/composer.json", "start": 46584058, "end": 46585126, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher-contracts/LICENSE", "start": 46585126, "end": 46586191, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher-contracts/EventDispatcherInterface.php", "start": 46586191, "end": 46587198, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher-contracts/.gitignore", "start": 46587198, "end": 46587232, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/event-dispatcher-contracts/Event.php", "start": 46587232, "end": 46588743, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/README.md", "start": 46588743, "end": 46590275, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/RouteCompilerInterface.php", "start": 46590275, "end": 46591054, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/RequestContext.php", "start": 46591054, "end": 46598176, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/CHANGELOG.md", "start": 46598176, "end": 46610132, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/composer.json", "start": 46610132, "end": 46611740, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/LICENSE", "start": 46611740, "end": 46612805, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/RequestContextAwareInterface.php", "start": 46612805, "end": 46613363, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Router.php", "start": 46613363, "end": 46625791, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Route.php", "start": 46625791, "end": 46640577, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/CompiledRoute.php", "start": 46640577, "end": 46645012, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/RouterInterface.php", "start": 46645012, "end": 46646054, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/RouteCollection.php", "start": 46646054, "end": 46654684, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/RouteCompiler.php", "start": 46654684, "end": 46669594, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/RouteCollectionBuilder.php", "start": 46669594, "end": 46679273, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Generator/UrlGeneratorInterface.php", "start": 46679273, "end": 46682752, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Generator/ConfigurableRequirementsInterface.php", "start": 46682752, "end": 46684989, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Generator/UrlGenerator.php", "start": 46684989, "end": 46700159, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Generator/CompiledUrlGenerator.php", "start": 46700159, "end": 46702486, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Generator/Dumper/CompiledUrlGeneratorDumper.php", "start": 46702486, "end": 46704406, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Generator/Dumper/GeneratorDumperInterface.php", "start": 46704406, "end": 46705335, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Generator/Dumper/GeneratorDumper.php", "start": 46705335, "end": 46706116, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/TraceableUrlMatcher.php", "start": 46706116, "end": 46712936, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/ExpressionLanguageProvider.php", "start": 46712936, "end": 46714569, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/UrlMatcher.php", "start": 46714569, "end": 46723895, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/CompiledUrlMatcher.php", "start": 46723895, "end": 46724756, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/RequestMatcherInterface.php", "start": 46724756, "end": 46726050, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/RedirectableUrlMatcherInterface.php", "start": 46726050, "end": 46726910, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/RedirectableUrlMatcher.php", "start": 46726910, "end": 46729008, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/UrlMatcherInterface.php", "start": 46729008, "end": 46730423, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/Dumper/CompiledUrlMatcherTrait.php", "start": 46730423, "end": 46737994, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/Dumper/MatcherDumperInterface.php", "start": 46737994, "end": 46738921, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/Dumper/StaticPrefixCollection.php", "start": 46738921, "end": 46745776, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/Dumper/MatcherDumper.php", "start": 46745776, "end": 46746551, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Matcher/Dumper/CompiledUrlMatcherDumper.php", "start": 46746551, "end": 46765607, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Exception/InvalidParameterException.php", "start": 46765607, "end": 46766113, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Exception/NoConfigurationException.php", "start": 46766113, "end": 46766578, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Exception/MethodNotAllowedException.php", "start": 46766578, "end": 46767637, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Exception/RouteNotFoundException.php", "start": 46767637, "end": 46768138, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Exception/ResourceNotFoundException.php", "start": 46768138, "end": 46768686, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Exception/ExceptionInterface.php", "start": 46768686, "end": 46769116, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Exception/MissingMandatoryParametersException.php", "start": 46769116, "end": 46769678, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/AnnotationFileLoader.php", "start": 46769678, "end": 46774188, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/GlobFileLoader.php", "start": 46774188, "end": 46775245, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/XmlFileLoader.php", "start": 46775245, "end": 46791466, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/YamlFileLoader.php", "start": 46791466, "end": 46802209, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/DirectoryLoader.php", "start": 46802209, "end": 46803723, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/ObjectLoader.php", "start": 46803723, "end": 46806715, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/AnnotationClassLoader.php", "start": 46806715, "end": 46819756, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/ClosureLoader.php", "start": 46819756, "end": 46820835, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/PhpFileLoader.php", "start": 46820835, "end": 46823162, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/AnnotationDirectoryLoader.php", "start": 46823162, "end": 46825998, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/ContainerLoader.php", "start": 46825998, "end": 46826936, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/schema/routing/routing-1.0.xsd", "start": 46826936, "end": 46833876, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/Configurator/RoutingConfigurator.php", "start": 46833876, "end": 46835842, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/Configurator/ImportConfigurator.php", "start": 46835842, "end": 46837548, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/Configurator/RouteConfigurator.php", "start": 46837548, "end": 46838765, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/Configurator/CollectionConfigurator.php", "start": 46838765, "end": 46842047, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/Configurator/Traits/PrefixTrait.php", "start": 46842047, "end": 46844445, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/Configurator/Traits/RouteTrait.php", "start": 46844445, "end": 46848001, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/Configurator/Traits/LocalizedRouteTrait.php", "start": 46848001, "end": 46850534, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/Configurator/Traits/AddTrait.php", "start": 46850534, "end": 46852074, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Loader/Configurator/Traits/HostTrait.php", "start": 46852074, "end": 46853737, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/DependencyInjection/RoutingResolverPass.php", "start": 46853737, "end": 46855238, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/routing/Annotation/Route.php", "start": 46855238, "end": 46861858, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/README.md", "start": 46861858, "end": 46862390, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/PropertyWriteInfoExtractorInterface.php", "start": 46862390, "end": 46863027, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/PropertyListExtractorInterface.php", "start": 46863027, "end": 46863665, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/PropertyInfoCacheExtractor.php", "start": 46863665, "end": 46867204, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/PropertyInitializableExtractorInterface.php", "start": 46867204, "end": 46867894, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/CHANGELOG.md", "start": 46867894, "end": 46868599, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/composer.json", "start": 46868599, "end": 46870229, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/LICENSE", "start": 46870229, "end": 46871294, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/PropertyDescriptionExtractorInterface.php", "start": 46871294, "end": 46872129, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/PropertyReadInfo.php", "start": 46872129, "end": 46873851, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/PropertyTypeExtractorInterface.php", "start": 46873851, "end": 46874430, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/PropertyInfoExtractorInterface.php", "start": 46874430, "end": 46875068, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/PropertyInfoExtractor.php", "start": 46875068, "end": 46878853, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/PropertyWriteInfo.php", "start": 46878853, "end": 46882015, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/Type.php", "start": 46882015, "end": 46885181, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/PropertyAccessExtractorInterface.php", "start": 46885181, "end": 46885956, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/PropertyReadInfoExtractorInterface.php", "start": 46885956, "end": 46886588, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/Extractor/ConstructorExtractor.php", "start": 46886588, "end": 46887857, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/Extractor/ReflectionExtractor.php", "start": 46887857, "end": 46920227, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/Extractor/ConstructorArgumentTypeExtractorInterface.php", "start": 46920227, "end": 46920946, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/Extractor/SerializerExtractor.php", "start": 46920946, "end": 46922849, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/Extractor/PhpDocExtractor.php", "start": 46922849, "end": 46933543, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/Util/PhpDocTypeHelper.php", "start": 46933543, "end": 46938907, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/DependencyInjection/PropertyInfoPass.php", "start": 46938907, "end": 46941909, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/property-info/DependencyInjection/PropertyInfoConstructorPass.php", "start": 46941909, "end": 46943422, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/README.md", "start": 46943422, "end": 46944032, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/CHANGELOG.md", "start": 46944032, "end": 46946083, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/composer.json", "start": 46946083, "end": 46947561, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/LICENSE", "start": 46947561, "end": 46948626, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/VarDumper.php", "start": 46948626, "end": 46952380, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/GmpCaster.php", "start": 46952380, "end": 46953129, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/CutArrayStub.php", "start": 46953129, "end": 46953825, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/StubCaster.php", "start": 46953825, "end": 46955965, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/ImagineCaster.php", "start": 46955965, "end": 46956914, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/DOMCaster.php", "start": 46956914, "end": 46967015, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/UuidCaster.php", "start": 46967015, "end": 46967683, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/DsPairStub.php", "start": 46967683, "end": 46968296, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/TraceStub.php", "start": 46968296, "end": 46969259, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/DateCaster.php", "start": 46969259, "end": 46973976, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/SplCaster.php", "start": 46973976, "end": 46981789, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/IntlCaster.php", "start": 46981789, "end": 46990722, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/LinkStub.php", "start": 46990722, "end": 46994095, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/AmqpCaster.php", "start": 46994095, "end": 47000793, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/ClassStub.php", "start": 47000793, "end": 47004630, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/CutStub.php", "start": 47004630, "end": 47006559, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/EnumStub.php", "start": 47006559, "end": 47007196, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/MemcachedCaster.php", "start": 47007196, "end": 47009538, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/ImgStub.php", "start": 47009538, "end": 47010175, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/DsCaster.php", "start": 47010175, "end": 47011765, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/ExceptionCaster.php", "start": 47011765, "end": 47027886, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/PdoCaster.php", "start": 47027886, "end": 47031445, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/PgSqlCaster.php", "start": 47031445, "end": 47036933, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/FrameStub.php", "start": 47036933, "end": 47037673, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/Caster.php", "start": 47037673, "end": 47043725, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/ConstStub.php", "start": 47043725, "end": 47044473, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/SymfonyCaster.php", "start": 47044473, "end": 47046276, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/XmlReaderCaster.php", "start": 47046276, "end": 47049283, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/ArgsStub.php", "start": 47049283, "end": 47051577, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/RedisCaster.php", "start": 47051577, "end": 47056798, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/RdKafkaCaster.php", "start": 47056798, "end": 47061376, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/ResourceCaster.php", "start": 47061376, "end": 47064639, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/DoctrineCaster.php", "start": 47064639, "end": 47066311, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/ReflectionCaster.php", "start": 47066311, "end": 47080641, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/XmlResourceCaster.php", "start": 47080641, "end": 47083187, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Caster/ProxyManagerCaster.php", "start": 47083187, "end": 47083908, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Server/DumpServer.php", "start": 47083908, "end": 47087139, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Server/Connection.php", "start": 47087139, "end": 47089864, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Resources/bin/var-dump-server", "start": 47089864, "end": 47091902, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Resources/css/htmlDescriptor.css", "start": 47091902, "end": 47094912, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Resources/js/htmlDescriptor.js", "start": 47094912, "end": 47095266, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Resources/functions/dump.php", "start": 47095266, "end": 47096073, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Exception/ThrowingCasterException.php", "start": 47096073, "end": 47096728, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Dumper/ContextualizedDumper.php", "start": 47096728, "end": 47097902, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Dumper/DataDumperInterface.php", "start": 47097902, "end": 47098407, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Dumper/CliDumper.php", "start": 47098407, "end": 47120127, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Dumper/AbstractDumper.php", "start": 47120127, "end": 47126367, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Dumper/HtmlDumper.php", "start": 47126367, "end": 47160604, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Dumper/ServerDumper.php", "start": 47160604, "end": 47162209, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Dumper/ContextProvider/CliContextProvider.php", "start": 47162209, "end": 47163015, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Dumper/ContextProvider/ContextProviderInterface.php", "start": 47163015, "end": 47163648, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Dumper/ContextProvider/RequestContextProvider.php", "start": 47163648, "end": 47165121, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Dumper/ContextProvider/SourceContextProvider.php", "start": 47165121, "end": 47170012, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Cloner/Stub.php", "start": 47170012, "end": 47171505, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Cloner/Data.php", "start": 47171505, "end": 47185176, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Cloner/ClonerInterface.php", "start": 47185176, "end": 47185748, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Cloner/DumperInterface.php", "start": 47185748, "end": 47187600, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Cloner/Cursor.php", "start": 47187600, "end": 47188653, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Cloner/VarCloner.php", "start": 47188653, "end": 47200943, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Cloner/AbstractCloner.php", "start": 47200943, "end": 47221495, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Test/VarDumperTestTrait.php", "start": 47221495, "end": 47224055, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Command/ServerDumpCommand.php", "start": 47224055, "end": 47227428, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Command/Descriptor/CliDescriptor.php", "start": 47227428, "end": 47230462, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Command/Descriptor/DumpDescriptorInterface.php", "start": 47230462, "end": 47231072, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/var-dumper/Command/Descriptor/HtmlDescriptor.php", "start": 47231072, "end": 47234758, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer/README.md", "start": 47234758, "end": 47235192, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer/composer.json", "start": 47235192, "end": 47236283, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer/LICENSE", "start": 47236283, "end": 47237348, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer/bootstrap.php", "start": 47237348, "end": 47237981, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer/Normalizer.php", "start": 47237981, "end": 47247430, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer/Resources/stubs/Normalizer.php", "start": 47247430, "end": 47247767, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer/Resources/unidata/compatibilityDecomposition.php", "start": 47247767, "end": 47314694, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer/Resources/unidata/combiningClass.php", "start": 47314694, "end": 47328330, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer/Resources/unidata/canonicalDecomposition.php", "start": 47328330, "end": 47367365, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-intl-normalizer/Resources/unidata/canonicalComposition.php", "start": 47367365, "end": 47385000, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/deprecation-contracts/README.md", "start": 47385000, "end": 47386204, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/deprecation-contracts/CHANGELOG.md", "start": 47386204, "end": 47386363, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/deprecation-contracts/composer.json", "start": 47386363, "end": 47387206, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/deprecation-contracts/LICENSE", "start": 47387206, "end": 47388266, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/deprecation-contracts/function.php", "start": 47388266, "end": 47389274, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/deprecation-contracts/.gitignore", "start": 47389274, "end": 47389308, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-mbstring/README.md", "start": 47389308, "end": 47389680, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-mbstring/composer.json", "start": 47389680, "end": 47390684, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-mbstring/LICENSE", "start": 47390684, "end": 47391749, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-mbstring/bootstrap.php", "start": 47391749, "end": 47399120, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-mbstring/Mbstring.php", "start": 47399120, "end": 47427168, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-mbstring/Resources/unidata/lowerCase.php", "start": 47427168, "end": 47451705, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-mbstring/Resources/unidata/titleCaseRegexp.php", "start": 47451705, "end": 47457906, "audio": 0}, {"filename": "/src/api-platform-light/vendor/symfony/polyfill-mbstring/Resources/unidata/upperCase.php", "start": 47457906, "end": 47482724, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-common/README.md", "start": 47482724, "end": 47483827, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-common/composer.json", "start": 47483827, "end": 47484527, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-common/LICENSE", "start": 47484527, "end": 47485608, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-common/.github/dependabot.yml", "start": 47485608, "end": 47485738, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-common/.github/workflows/push.yml", "start": 47485738, "end": 47492310, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-common/src/File.php", "start": 47492310, "end": 47492976, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-common/src/Element.php", "start": 47492976, "end": 47493491, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-common/src/Location.php", "start": 47493491, "end": 47494657, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-common/src/ProjectFactory.php", "start": 47494657, "end": 47495257, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-common/src/Fqsen.php", "start": 47495257, "end": 47497278, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-common/src/Project.php", "start": 47497278, "end": 47497784, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/README.md", "start": 47497784, "end": 47500869, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/composer.json", "start": 47500869, "end": 47501953, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/LICENSE", "start": 47501953, "end": 47503033, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/Utils.php", "start": 47503033, "end": 47505387, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlockFactory.php", "start": 47505387, "end": 47514928, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock.php", "start": 47514928, "end": 47520171, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlockFactoryInterface.php", "start": 47520171, "end": 47520802, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/Exception/PcreException.php", "start": 47520802, "end": 47521973, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/DescriptionFactory.php", "start": 47521973, "end": 47528675, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/ExampleFinder.php", "start": 47528675, "end": 47533385, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Serializer.php", "start": 47533385, "end": 47538076, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Description.php", "start": 47538076, "end": 47541612, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tag.php", "start": 47541612, "end": 47542281, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/StandardTagFactory.php", "start": 47542281, "end": 47554908, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/TagFactory.php", "start": 47554908, "end": 47558615, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Return_.php", "start": 47558615, "end": 47560452, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/InvalidTag.php", "start": 47560452, "end": 47564486, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/PropertyWrite.php", "start": 47564486, "end": 47568083, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/TagWithType.php", "start": 47568083, "end": 47569532, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/See.php", "start": 47569532, "end": 47572578, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/PropertyRead.php", "start": 47572578, "end": 47576177, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Deprecated.php", "start": 47576177, "end": 47579046, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Version.php", "start": 47579046, "end": 47581806, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Formatter.php", "start": 47581806, "end": 47582334, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Author.php", "start": 47582334, "end": 47584842, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Covers.php", "start": 47584842, "end": 47587527, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Var_.php", "start": 47587527, "end": 47591085, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Uses.php", "start": 47591085, "end": 47593729, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Link.php", "start": 47593729, "end": 47595656, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Since.php", "start": 47595656, "end": 47598331, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Method.php", "start": 47598331, "end": 47606615, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Throws.php", "start": 47606615, "end": 47608431, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Source.php", "start": 47608431, "end": 47611925, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Generic.php", "start": 47611925, "end": 47614397, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Param.php", "start": 47614397, "end": 47619698, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/BaseTag.php", "start": 47619698, "end": 47620845, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Example.php", "start": 47620845, "end": 47626234, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Property.php", "start": 47626234, "end": 47629819, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Reference/Url.php", "start": 47629819, "end": 47630524, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Reference/Reference.php", "start": 47630524, "end": 47630985, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Reference/Fqsen.php", "start": 47630985, "end": 47631785, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Formatter/PassthroughFormatter.php", "start": 47631785, "end": 47632460, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Formatter/AlignFormatter.php", "start": 47632460, "end": 47633647, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/reflection-docblock/src/DocBlock/Tags/Factory/StaticMethod.php", "start": 47633647, "end": 47634182, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/README.md", "start": 47634182, "end": 47643311, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/composer.lock", "start": 47643311, "end": 47645640, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/phpbench.json", "start": 47645640, "end": 47645841, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/composer.json", "start": 47645841, "end": 47646638, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/LICENSE", "start": 47646638, "end": 47647718, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/FqsenResolver.php", "start": 47647718, "end": 47650015, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/TypeResolver.php", "start": 47650015, "end": 47668502, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/PseudoType.php", "start": 47668502, "end": 47668868, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Type.php", "start": 47668868, "end": 47669337, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/ClassString.php", "start": 47669337, "end": 47670509, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Expression.php", "start": 47670509, "end": 47671578, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Void_.php", "start": 47671578, "end": 47672339, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Parent_.php", "start": 47672339, "end": 47673065, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Nullable.php", "start": 47673065, "end": 47674160, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Float_.php", "start": 47674160, "end": 47674767, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Resource_.php", "start": 47674767, "end": 47675392, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/AggregatedType.php", "start": 47675392, "end": 47678160, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Integer.php", "start": 47678160, "end": 47678770, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Static_.php", "start": 47678770, "end": 47679785, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Callable_.php", "start": 47679785, "end": 47680406, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Compound.php", "start": 47680406, "end": 47681423, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Intersection.php", "start": 47681423, "end": 47682454, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Self_.php", "start": 47682454, "end": 47683156, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/String_.php", "start": 47683156, "end": 47683775, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/AbstractList.php", "start": 47683775, "end": 47685691, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/ContextFactory.php", "start": 47685691, "end": 47700645, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Object_.php", "start": 47700645, "end": 47702440, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Iterable_.php", "start": 47702440, "end": 47703266, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Collection.php", "start": 47703266, "end": 47704946, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/This.php", "start": 47704946, "end": 47705789, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Array_.php", "start": 47705789, "end": 47706513, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Scalar.php", "start": 47706513, "end": 47707191, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Null_.php", "start": 47707191, "end": 47707809, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Boolean.php", "start": 47707809, "end": 47708417, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Mixed_.php", "start": 47708417, "end": 47709043, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/Types/Context.php", "start": 47709043, "end": 47712103, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/PseudoTypes/False_.php", "start": 47712103, "end": 47712986, "audio": 0}, {"filename": "/src/api-platform-light/vendor/phpdocumentor/type-resolver/src/PseudoTypes/True_.php", "start": 47712986, "end": 47713865, "audio": 0}, {"filename": "/src/api-platform-light/vendor/fig/link-util/LICENSE.md", "start": 47713865, "end": 47714994, "audio": 0}, {"filename": "/src/api-platform-light/vendor/fig/link-util/composer.json", "start": 47714994, "end": 47715851, "audio": 0}, {"filename": "/src/api-platform-light/vendor/fig/link-util/src/Relations.php", "start": 47715851, "end": 47748265, "audio": 0}, {"filename": "/src/api-platform-light/vendor/fig/link-util/src/GenericLinkProvider.php", "start": 47748265, "end": 47749071, "audio": 0}, {"filename": "/src/api-platform-light/vendor/fig/link-util/src/LinkTrait.php", "start": 47749071, "end": 47750226, "audio": 0}, {"filename": "/src/api-platform-light/vendor/fig/link-util/src/EvolvableLinkTrait.php", "start": 47750226, "end": 47751859, "audio": 0}, {"filename": "/src/api-platform-light/vendor/fig/link-util/src/TemplatedHrefTrait.php", "start": 47751859, "end": 47752346, "audio": 0}, {"filename": "/src/api-platform-light/vendor/fig/link-util/src/Link.php", "start": 47752346, "end": 47752843, "audio": 0}, {"filename": "/src/api-platform-light/vendor/fig/link-util/src/LinkProviderTrait.php", "start": 47752843, "end": 47753675, "audio": 0}, {"filename": "/src/api-platform-light/vendor/fig/link-util/src/EvolvableLinkProviderTrait.php", "start": 47753675, "end": 47754472, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/cache/README.md", "start": 47754472, "end": 47754749, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/cache/CHANGELOG.md", "start": 47754749, "end": 47755495, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/cache/composer.json", "start": 47755495, "end": 47756008, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/cache/LICENSE.txt", "start": 47756008, "end": 47757088, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/cache/src/InvalidArgumentException.php", "start": 47757088, "end": 47757387, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/cache/src/CacheItemInterface.php", "start": 47757387, "end": 47761159, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/cache/src/CacheException.php", "start": 47761159, "end": 47761302, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/cache/src/CacheItemPoolInterface.php", "start": 47761302, "end": 47765691, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/link/README.md", "start": 47765691, "end": 47766023, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/link/.editorconfig", "start": 47766023, "end": 47766294, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/link/LICENSE.md", "start": 47766294, "end": 47767431, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/link/composer.json", "start": 47767431, "end": 47767965, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/link/src/LinkProviderInterface.php", "start": 47767965, "end": 47768751, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/link/src/EvolvableLinkProviderInterface.php", "start": 47768751, "end": 47769800, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/link/src/EvolvableLinkInterface.php", "start": 47769800, "end": 47772125, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/link/src/LinkInterface.php", "start": 47772125, "end": 47773500, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/container/README.md", "start": 47773500, "end": 47773778, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/container/composer.json", "start": 47773778, "end": 47774432, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/container/LICENSE", "start": 47774432, "end": 47775577, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/container/.gitignore", "start": 47775577, "end": 47775614, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/container/src/ContainerExceptionInterface.php", "start": 47775614, "end": 47775862, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/container/src/NotFoundExceptionInterface.php", "start": 47775862, "end": 47776118, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/container/src/ContainerInterface.php", "start": 47776118, "end": 47777216, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/README.md", "start": 47777216, "end": 47778562, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/composer.json", "start": 47778562, "end": 47779123, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/LICENSE", "start": 47779123, "end": 47780208, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/Psr/Log/LoggerTrait.php", "start": 47780208, "end": 47783623, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/Psr/Log/LoggerInterface.php", "start": 47783623, "end": 47786737, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/Psr/Log/LoggerAwareInterface.php", "start": 47786737, "end": 47787034, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/Psr/Log/LogLevel.php", "start": 47787034, "end": 47787370, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/Psr/Log/InvalidArgumentException.php", "start": 47787370, "end": 47787466, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/Psr/Log/LoggerAwareTrait.php", "start": 47787466, "end": 47787863, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/Psr/Log/NullLogger.php", "start": 47787863, "end": 47788570, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/Psr/Log/AbstractLogger.php", "start": 47788570, "end": 47791658, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/Psr/Log/Test/DummyTest.php", "start": 47791658, "end": 47791909, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/Psr/Log/Test/LoggerInterfaceTest.php", "start": 47791909, "end": 47796558, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/log/Psr/Log/Test/TestLogger.php", "start": 47796558, "end": 47801085, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/event-dispatcher/README.md", "start": 47801085, "end": 47801410, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/event-dispatcher/.editorconfig", "start": 47801410, "end": 47801712, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/event-dispatcher/composer.json", "start": 47801712, "end": 47802272, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/event-dispatcher/LICENSE", "start": 47802272, "end": 47803336, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/event-dispatcher/.gitignore", "start": 47803336, "end": 47803359, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/event-dispatcher/src/EventDispatcherInterface.php", "start": 47803359, "end": 47803790, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/event-dispatcher/src/ListenerProviderInterface.php", "start": 47803790, "end": 47804314, "audio": 0}, {"filename": "/src/api-platform-light/vendor/psr/event-dispatcher/src/StoppableEventInterface.php", "start": 47804314, "end": 47805099, "audio": 0}, {"filename": "/src/api-platform-light/src/Entity/Book.php", "start": 47805099, "end": 47805230, "audio": 0}], "remote_package_size": 47805230, "package_uuid": "a99b6280-f0a1-46a2-a4aa-bf734c8d30a3"});
  
  })();
  
// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = true;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;




// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;


// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }


  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {




  read_ = function shell_read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };




  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}


// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message





// {{PREAMBLE_ADDITIONS}}

var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}




// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  var table = wasmTable;

  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < table.length; i++) {
      var item = table.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.


  var ret;
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    ret = freeTableIndexes.pop();
  } else {
    ret = table.length;
    // Grow the table
    try {
      table.grow(1);
    } catch (err) {
      if (!(err instanceof RangeError)) {
        throw err;
      }
      throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
    }
  }

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    table.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    table.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunctionWasm(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {

  return addFunctionWasm(func, sig);
}

function removeFunction(index) {
  removeFunctionWasm(index);
}









function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};





// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html


var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];


if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}




// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}






// Wasm globals

var wasmMemory;
var wasmTable;


//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}


var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}




// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}





// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}



// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var STACK_BASE = 7797008,
    STACKTOP = STACK_BASE,
    STACK_MAX = 2554128;




var TOTAL_STACK = 5242880;

var INITIAL_INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 1073741824;



// In non-standalone/normal mode, we create the memory here.



// Create the main memory. (Note: this isn't used in STANDALONE_WASM mode since the wasm
// memory is created in the wasm, not in JS.)

  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else
  {
    wasmMemory = new WebAssembly.Memory({
      'initial': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
      ,
      'maximum': 2147483648 / WASM_PAGE_SIZE
    });
  }


if (wasmMemory) {
  buffer = wasmMemory.buffer;
}

// If the user provides an incorrect length, just use that length instead rather than providing the user to
// specifically provide the memory length with Module['INITIAL_MEMORY'].
INITIAL_INITIAL_MEMORY = buffer.byteLength;
updateGlobalBufferAndViews(buffer);


















var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
TTY.init();
PIPEFS.root = FS.mount(PIPEFS, {}, null);
SOCKFS.root = FS.mount(SOCKFS, {}, null);
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  FS.ignorePermissions = false;
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc




// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

var memoryInitializer = null;











function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}





var wasmBinaryFile = 'php-web.wasm';
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary() {
  try {
    if (wasmBinary) {
      return new Uint8Array(wasmBinary);
    }

    if (readBinary) {
      return readBinary(wasmBinaryFile);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary();
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(getBinary);
}



// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;




    Module['asm'] = exports;

    wasmTable = Module['asm']['__indirect_function_table'];


    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');


  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }


  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);


      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.
  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiatedSource, function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiatedSource);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiatedSource);
    }
  }
  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  instantiateAsync();
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  1160280: function($0, $1) {const funcName = UTF8ToString($0); const argJson = UTF8ToString($1); const func = window[funcName]; const args = JSON.parse(argJson || '[]') || []; const jsRet = String(func(...args)); const len = lengthBytesUTF8(jsRet) + 1; const strLoc = _malloc(len); stringToUTF8(jsRet, strLoc, len); return strLoc;},  
 1160587: function($0, $1) {const timeout = Number(UTF8ToString($0)); const funcPtr = $1; setTimeout(()=>{ Module.ccall( 'exec_callback' , 'number' , ["number"] , [funcPtr] ); Module.ccall( 'del_callback' , 'number' , ["number"] , [funcPtr] ); }, timeout);},  
 1160820: function($0, $1) {const target = Module.targets.get($0) || window; const property = UTF8ToString($1); const result = target[property]; console.log('target/prop:', $0, target, property, typeof result, result); if(!result || !['function','object'].includes(typeof result)) { const jsRet = 'OK' + String(result); const len = lengthBytesUTF8(jsRet) + 1; const strLoc = _malloc(len); stringToUTF8(jsRet, strLoc, len); return strLoc; } const jsRet = 'XX'; const len = lengthBytesUTF8(jsRet) + 1; const strLoc = _malloc(len); stringToUTF8(jsRet, strLoc, len); return strLoc;},  
 1161374: function($0, $1) {const target = Module.targets.get($0) || window; const property = UTF8ToString($1); const result = target[property]; console.log('target/prop:', $0, target, property, typeof result, result); if(['function','object'].includes(typeof result)) { let index = Module.targets.has(result); if(!index) { index = Module.targets.add(result); } console.log(index); return index; } console.log(0); return 0;},  
 1162096: function($0, $1, $2) {const target = Module.targets.get($0) || window; const eventName = UTF8ToString($1); const funcPtr = $2; const options = {}; const callback = () => { Module.ccall( 'exec_callback' , 'number' , ["number"] , [funcPtr] ); }; target.addEventListener(eventName, callback, options); const remover = () => { target.removeEventListener(eventName, callback, options); return $2; }; return Module.callbacks.add(remover);},  
 1162538: function($0) {const remover = Module.callbacks.get($0); return remover();},  
 1162613: function($0, $1) {const target = Module.targets.get($0) || document; const querySelector = UTF8ToString($1); const result = target.querySelector(querySelector); if(!result) { return 0; } let index = Module.targets.has(result) || 0; if(!index) { index = Module.targets.add(result); } return index;}
};





// {{PRE_LIBRARY}}


  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function dynCallLegacy(sig, ptr, args) {
      if (args && args.length) {
        return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
      }
      return Module['dynCall_' + sig].call(null, ptr);
    }
  function dynCall(sig, ptr, args) {
      // Without WASM_BIGINT support we cannot directly call function with i64 as
      // part of thier signature, so we rely the dynCall functions generated by
      // wasm-emscripten-finalize
      if (sig.indexOf('j') != -1) {
        return dynCallLegacy(sig, ptr, args);
      }
  
      return wasmTable.get(ptr).apply(null, args)
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  var _emscripten_get_now;_emscripten_get_now = function() { return performance.now(); }
  ;
  
  var _emscripten_get_now_is_monotonic=true;;
  
  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)]=value;
      return value;
    }
  function _clock_gettime(clk_id, tp) {
      // int clock_gettime(clockid_t clk_id, struct timespec *tp);
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now();
      } else {
        setErrNo(28);
        return -1;
      }
      HEAP32[((tp)>>2)]=(now/1000)|0; // seconds
      HEAP32[(((tp)+(4))>>2)]=((now % 1000)*1000*1000)|0; // nanoseconds
      return 0;
    }
  function ___clock_gettime(a0,a1
  ) {
  return _clock_gettime(a0,a1);
  }

  function _tzset() {
      // TODO: Use (malleable) environment variables instead of system settings.
      if (_tzset.called) return;
      _tzset.called = true;
  
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by getTimezoneOffset().
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAP32[((__get_timezone())>>2)]=(new Date()).getTimezoneOffset() * 60;
  
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      HEAP32[((__get_daylight())>>2)]=Number(winter.getTimezoneOffset() != summer.getTimezoneOffset());
  
      function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT";
      };
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = allocateUTF8(winterName);
      var summerNamePtr = allocateUTF8(summerName);
      if (summer.getTimezoneOffset() < winter.getTimezoneOffset()) {
        // Northern hemisphere
        HEAP32[((__get_tzname())>>2)]=winterNamePtr;
        HEAP32[(((__get_tzname())+(4))>>2)]=summerNamePtr;
      } else {
        HEAP32[((__get_tzname())>>2)]=summerNamePtr;
        HEAP32[(((__get_tzname())+(4))>>2)]=winterNamePtr;
      }
    }
  function _localtime_r(time, tmPtr) {
      _tzset();
      var date = new Date(HEAP32[((time)>>2)]*1000);
      HEAP32[((tmPtr)>>2)]=date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)]=date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)]=date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)]=date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)]=date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)]=date.getFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)]=date.getDay();
  
      var start = new Date(date.getFullYear(), 0, 1);
      var yday = ((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)]=yday;
      HEAP32[(((tmPtr)+(36))>>2)]=-(date.getTimezoneOffset() * 60);
  
      // Attention: DST is in December in South, and some regions don't have DST at all.
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;
      HEAP32[(((tmPtr)+(32))>>2)]=dst;
  
      var zonePtr = HEAP32[(((__get_tzname())+(dst ? 4 : 0))>>2)];
      HEAP32[(((tmPtr)+(40))>>2)]=zonePtr;
  
      return tmPtr;
    }
  function ___localtime_r(a0,a1
  ) {
  return _localtime_r(a0,a1);
  }

  var PATH={splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  
  function getRandomDevice() {
      if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
        // for modern web browsers
        var randomBuffer = new Uint8Array(1);
        return function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
      } else
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      return function() { abort("randomDevice"); };
    }
  
  var PATH_FS={resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function(stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  function mmapAlloc(size) {
      var alignedSize = alignMemory(size, 16384);
      var ptr = _malloc(alignedSize);
      while (size < alignedSize) HEAP8[ptr + size++] = 0;
      return ptr;
    }
  var MEMFS={ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },getFileDataAsRegularArray:function(node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
          return arr; // Returns a copy of the original data.
        }
        return node.contents; // No-op, the file contents are already in a JS array. Return as-is.
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
        return;
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) { // Resize a typed array if that is being used as the backing store.
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
          return;
        }
        // Backing with a JS array.
        if (!node.contents) node.contents = [];
        if (node.contents.length > newSize) node.contents.length = newSize;
        else while (node.contents.length < newSize) node.contents.push(0);
        node.usedBytes = newSize;
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, address, length, position, prot, flags) {
          // We don't currently support location hints for the address of the mapping
          assert(address === 0);
  
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return setErrNo(e.errno);
      },lookupPath:function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function(parentid, name) {
        var hash = 0;
  
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function(node) {
        FS.hashRemoveNode(node);
      },isRoot:function(node) {
        return node === node.parent;
      },isMountpoint:function(node) {
        return !!node.mounted;
      },isFile:function(mode) {
        return (mode & 61440) === 32768;
      },isDir:function(mode) {
        return (mode & 61440) === 16384;
      },isLink:function(mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function(mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function(mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function(mode) {
        return (mode & 61440) === 4096;
      },isSocket:function(mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return 2;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return 2;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:function(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:function(fd) {
        return FS.streams[fd];
      },createStream:function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function(){};
          FS.FSStream.prototype = {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          };
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function(fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function() {
          throw new FS.ErrnoError(70);
        }},major:function(dev) {
        return ((dev) >> 8);
      },minor:function(dev) {
        return ((dev) & 0xff);
      },makedev:function(ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function(dev) {
        return FS.devices[dev];
      },getMounts:function(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function(populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function(type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1);
      },lookup:function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:function(path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch(e) {
          err("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
      },rmdir:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readlink:function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:function(path) {
        return FS.stat(path, true);
      },chmod:function(path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function(path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch(e) {
          err("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: " + e.message);
        }
        return stream;
      },close:function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:function(stream) {
        return stream.fd === null;
      },llseek:function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch(e) {
          err("FS.trackingDelegate['onWriteToFile']('"+stream.path+"') threw an exception: " + e.message);
        }
        return bytesWritten;
      },allocate:function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function(stream, address, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
      },msync:function(stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function(stream) {
        return 0;
      },ioctl:function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function() {
        return FS.currentPath;
      },chdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device = getRandomDevice();
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode('/proc/self', 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        var stdout = FS.open('/dev/stdout', 'w');
        var stderr = FS.open('/dev/stderr', 'w');
      },ensureErrnoError:function() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
          };
          this.setErrno(errno);
          this.message = 'FS error';
  
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },init:function(input, output, error) {
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function(canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },findObject:function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          setErrNo(ret.error);
          return null;
        }
      },analyzePath:function(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createPath:function(parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },forceLoadFile:function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) setErrNo(29);
        return success;
      },createLazyFile:function(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(29);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(29);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function() {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};
  var SYSCALLS={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dirfd, path) {
        if (path[0] !== '/') {
          // relative path
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(8);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)]=stat.dev;
        HEAP32[(((buf)+(4))>>2)]=0;
        HEAP32[(((buf)+(8))>>2)]=stat.ino;
        HEAP32[(((buf)+(12))>>2)]=stat.mode;
        HEAP32[(((buf)+(16))>>2)]=stat.nlink;
        HEAP32[(((buf)+(20))>>2)]=stat.uid;
        HEAP32[(((buf)+(24))>>2)]=stat.gid;
        HEAP32[(((buf)+(28))>>2)]=stat.rdev;
        HEAP32[(((buf)+(32))>>2)]=0;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)]=tempI64[0],HEAP32[(((buf)+(44))>>2)]=tempI64[1]);
        HEAP32[(((buf)+(48))>>2)]=4096;
        HEAP32[(((buf)+(52))>>2)]=stat.blocks;
        HEAP32[(((buf)+(56))>>2)]=(stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)]=0;
        HEAP32[(((buf)+(64))>>2)]=(stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)]=0;
        HEAP32[(((buf)+(72))>>2)]=(stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(76))>>2)]=0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(80))>>2)]=tempI64[0],HEAP32[(((buf)+(84))>>2)]=tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },doMkdir:function(path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function(path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function(path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function(path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },doDup:function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },get64:function(low, high) {
        return low;
      }};
  function ___sys__newselect(nfds, readfds, writefds, exceptfds, timeout) {try {
  
      // readfds are supported,
      // writefds checks socket open status
      // exceptfds not supported
      // timeout is always 0 - fully async
  
      var total = 0;
      
      var srcReadLow = (readfds ? HEAP32[((readfds)>>2)] : 0),
          srcReadHigh = (readfds ? HEAP32[(((readfds)+(4))>>2)] : 0);
      var srcWriteLow = (writefds ? HEAP32[((writefds)>>2)] : 0),
          srcWriteHigh = (writefds ? HEAP32[(((writefds)+(4))>>2)] : 0);
      var srcExceptLow = (exceptfds ? HEAP32[((exceptfds)>>2)] : 0),
          srcExceptHigh = (exceptfds ? HEAP32[(((exceptfds)+(4))>>2)] : 0);
  
      var dstReadLow = 0,
          dstReadHigh = 0;
      var dstWriteLow = 0,
          dstWriteHigh = 0;
      var dstExceptLow = 0,
          dstExceptHigh = 0;
  
      var allLow = (readfds ? HEAP32[((readfds)>>2)] : 0) |
                   (writefds ? HEAP32[((writefds)>>2)] : 0) |
                   (exceptfds ? HEAP32[((exceptfds)>>2)] : 0);
      var allHigh = (readfds ? HEAP32[(((readfds)+(4))>>2)] : 0) |
                    (writefds ? HEAP32[(((writefds)+(4))>>2)] : 0) |
                    (exceptfds ? HEAP32[(((exceptfds)+(4))>>2)] : 0);
  
      var check = function(fd, low, high, val) {
        return (fd < 32 ? (low & val) : (high & val));
      };
  
      for (var fd = 0; fd < nfds; fd++) {
        var mask = 1 << (fd % 32);
        if (!(check(fd, allLow, allHigh, mask))) {
          continue;  // index isn't in the set
        }
  
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
  
        var flags = SYSCALLS.DEFAULT_POLLMASK;
  
        if (stream.stream_ops.poll) {
          flags = stream.stream_ops.poll(stream);
        }
  
        if ((flags & 1) && check(fd, srcReadLow, srcReadHigh, mask)) {
          fd < 32 ? (dstReadLow = dstReadLow | mask) : (dstReadHigh = dstReadHigh | mask);
          total++;
        }
        if ((flags & 4) && check(fd, srcWriteLow, srcWriteHigh, mask)) {
          fd < 32 ? (dstWriteLow = dstWriteLow | mask) : (dstWriteHigh = dstWriteHigh | mask);
          total++;
        }
        if ((flags & 2) && check(fd, srcExceptLow, srcExceptHigh, mask)) {
          fd < 32 ? (dstExceptLow = dstExceptLow | mask) : (dstExceptHigh = dstExceptHigh | mask);
          total++;
        }
      }
  
      if (readfds) {
        HEAP32[((readfds)>>2)]=dstReadLow;
        HEAP32[(((readfds)+(4))>>2)]=dstReadHigh;
      }
      if (writefds) {
        HEAP32[((writefds)>>2)]=dstWriteLow;
        HEAP32[(((writefds)+(4))>>2)]=dstWriteHigh;
      }
      if (exceptfds) {
        HEAP32[((exceptfds)>>2)]=dstExceptLow;
        HEAP32[(((exceptfds)+(4))>>2)]=dstExceptHigh;
      }
      
      return total;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_access(path, amode) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doAccess(path, amode);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_chdir(path) {try {
  
      path = SYSCALLS.getStr(path);
      FS.chdir(path);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_chmod(path, mode) {try {
  
      path = SYSCALLS.getStr(path);
      FS.chmod(path, mode);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_chown32(path, owner, group) {try {
  
      path = SYSCALLS.getStr(path);
      FS.chown(path, owner, group);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_dup(fd) {try {
  
      var old = SYSCALLS.getStreamFromFD(fd);
      return FS.open(old.path, old.flags, 0).fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_dup2(oldfd, suggestFD) {try {
  
      var old = SYSCALLS.getStreamFromFD(oldfd);
      if (old.fd === suggestFD) return suggestFD;
      return SYSCALLS.doDup(old.path, old.flags, suggestFD);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_fchmod(fd, mode) {try {
  
      FS.fchmod(fd, mode);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_fchown32(fd, owner, group) {try {
  
      FS.fchown(fd, owner, group);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_fcntl64(fd, cmd, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.open(stream.path, stream.flags, 0, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 12:
        /* case 12: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)]=2;
          return 0;
        }
        case 13:
        case 14:
        /* case 13: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 14: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_fstat64(fd, buf) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return SYSCALLS.doStat(FS.stat, stream.path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_ftruncate64(fd, zero, low, high) {try {
  
      var length = SYSCALLS.get64(low, high);
      FS.ftruncate(fd, length);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_getcwd(buf, size) {try {
  
      if (size === 0) return -28;
      var cwd = FS.cwd();
      var cwdLengthInBytes = lengthBytesUTF8(cwd);
      if (size < cwdLengthInBytes + 1) return -68;
      stringToUTF8(cwd, buf, size);
      return buf;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_getdents64(fd, dirp, count) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd)
      if (!stream.getdents) {
        stream.getdents = FS.readdir(stream.path);
      }
  
      var struct_size = 280;
      var pos = 0;
      var off = FS.llseek(stream, 0, 1);
  
      var idx = Math.floor(off / struct_size);
  
      while (idx < stream.getdents.length && pos + struct_size <= count) {
        var id;
        var type;
        var name = stream.getdents[idx];
        if (name[0] === '.') {
          id = 1;
          type = 4; // DT_DIR
        } else {
          var child = FS.lookupNode(stream.node, name);
          id = child.id;
          type = FS.isChrdev(child.mode) ? 2 :  // DT_CHR, character device.
                 FS.isDir(child.mode) ? 4 :     // DT_DIR, directory.
                 FS.isLink(child.mode) ? 10 :   // DT_LNK, symbolic link.
                 8;                             // DT_REG, regular file.
        }
        (tempI64 = [id>>>0,(tempDouble=id,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((dirp + pos)>>2)]=tempI64[0],HEAP32[(((dirp + pos)+(4))>>2)]=tempI64[1]);
        (tempI64 = [(idx + 1) * struct_size>>>0,(tempDouble=(idx + 1) * struct_size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((dirp + pos)+(8))>>2)]=tempI64[0],HEAP32[(((dirp + pos)+(12))>>2)]=tempI64[1]);
        HEAP16[(((dirp + pos)+(16))>>1)]=280;
        HEAP8[(((dirp + pos)+(18))>>0)]=type;
        stringToUTF8(name, dirp + pos + 19, 256);
        pos += struct_size;
        idx += 1;
      }
      FS.llseek(stream, idx * struct_size, 0);
      return pos;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_getegid32() {
      return 0;
    }
  function ___sys_geteuid32(
  ) {
  return ___sys_getegid32();
  }

  function ___sys_getgid32(
  ) {
  return ___sys_getegid32();
  }

  function ___sys_getgroups32(size, list) {
      if (size < 1) return -28;
      HEAP32[((list)>>2)]=0;
      return 1;
    }

  function ___sys_getpid() {
      return 42;
    }

  function ___sys_getrusage(who, usage) {try {
  
      _memset(usage, 0, 136);
      HEAP32[((usage)>>2)]=1; // fake some values
      HEAP32[(((usage)+(4))>>2)]=2;
      HEAP32[(((usage)+(8))>>2)]=3;
      HEAP32[(((usage)+(12))>>2)]=4;
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_getuid32(
  ) {
  return ___sys_getegid32();
  }

  function ___sys_ioctl(fd, op, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)]=0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_lchown32(path, owner, group) {try {
  
      path = SYSCALLS.getStr(path);
      FS.chown(path, owner, group); // XXX we ignore the 'l' aspect, and do the same as chown
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_link(oldpath, newpath) {
      return -34; // no hardlinks for us
    }

  function ___sys_lstat64(path, buf) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.lstat, path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_madvise1(addr, length, advice) {
      return 0; // advice is welcome, but ignored
    }

  function ___sys_mkdir(path, mode) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doMkdir(path, mode);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function syscallMmap2(addr, len, prot, flags, fd, off) {
      off <<= 12; // undo pgoffset
      var ptr;
      var allocated = false;
  
      // addr argument must be page aligned if MAP_FIXED flag is set.
      if ((flags & 16) !== 0 && (addr % 16384) !== 0) {
        return -28;
      }
  
      // MAP_ANONYMOUS (aka MAP_ANON) isn't actually defined by POSIX spec,
      // but it is widely used way to allocate memory pages on Linux, BSD and Mac.
      // In this case fd argument is ignored.
      if ((flags & 32) !== 0) {
        ptr = _memalign(16384, len);
        if (!ptr) return -48;
        _memset(ptr, 0, len);
        allocated = true;
      } else {
        var info = FS.getStream(fd);
        if (!info) return -8;
        var res = FS.mmap(info, addr, len, off, prot, flags);
        ptr = res.ptr;
        allocated = res.allocated;
      }
      SYSCALLS.mappings[ptr] = { malloc: ptr, len: len, allocated: allocated, fd: fd, prot: prot, flags: flags, offset: off };
      return ptr;
    }
  function ___sys_mmap2(addr, len, prot, flags, fd, off) {try {
  
      return syscallMmap2(addr, len, prot, flags, fd, off);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function syscallMunmap(addr, len) {
      if ((addr | 0) === -1 || len === 0) {
        return -28;
      }
      // TODO: support unmmap'ing parts of allocations
      var info = SYSCALLS.mappings[addr];
      if (!info) return 0;
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        if (info.prot & 2) {
          SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
        }
        FS.munmap(stream);
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    }
  function ___sys_munmap(addr, len) {try {
  
      return syscallMunmap(addr, len);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_nice(inc) {
      return -63; // no meaning to nice for our single-process environment
    }

  function ___sys_open(path, flags, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var pathname = SYSCALLS.getStr(path);
      var mode = SYSCALLS.get();
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  var ERRNO_CODES={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135};
  var PIPEFS={BUCKET_BUFFER_SIZE:8192,mount:function (mount) {
        // Do not pollute the real root directory or its child nodes with pipes
        // Looks like it is OK to create another pseudo-root node not linked to the FS.root hierarchy this way
        return FS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createPipe:function () {
        var pipe = {
          buckets: []
        };
  
        pipe.buckets.push({
          buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
          offset: 0,
          roffset: 0
        });
  
        var rName = PIPEFS.nextname();
        var wName = PIPEFS.nextname();
        var rNode = FS.createNode(PIPEFS.root, rName, 4096, 0);
        var wNode = FS.createNode(PIPEFS.root, wName, 4096, 0);
  
        rNode.pipe = pipe;
        wNode.pipe = pipe;
  
        var readableStream = FS.createStream({
          path: rName,
          node: rNode,
          flags: FS.modeStringToFlags('r'),
          seekable: false,
          stream_ops: PIPEFS.stream_ops
        });
        rNode.stream = readableStream;
  
        var writableStream = FS.createStream({
          path: wName,
          node: wNode,
          flags: FS.modeStringToFlags('w'),
          seekable: false,
          stream_ops: PIPEFS.stream_ops
        });
        wNode.stream = writableStream;
  
        return {
          readable_fd: readableStream.fd,
          writable_fd: writableStream.fd
        };
      },stream_ops:{poll:function (stream) {
          var pipe = stream.node.pipe;
  
          if ((stream.flags & 2097155) === 1) {
            return (256 | 4);
          } else {
            if (pipe.buckets.length > 0) {
              for (var i = 0; i < pipe.buckets.length; i++) {
                var bucket = pipe.buckets[i];
                if (bucket.offset - bucket.roffset > 0) {
                  return (64 | 1);
                }
              }
            }
          }
  
          return 0;
        },ioctl:function (stream, request, varargs) {
          return ERRNO_CODES.EINVAL;
        },fsync:function (stream) {
          return ERRNO_CODES.EINVAL;
        },read:function (stream, buffer, offset, length, position /* ignored */) {
          var pipe = stream.node.pipe;
          var currentLength = 0;
  
          for (var i = 0; i < pipe.buckets.length; i++) {
            var bucket = pipe.buckets[i];
            currentLength += bucket.offset - bucket.roffset;
          }
  
          assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
          var data = buffer.subarray(offset, offset + length);
  
          if (length <= 0) {
            return 0;
          }
          if (currentLength == 0) {
            // Behave as if the read end is always non-blocking
            throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
          }
          var toRead = Math.min(currentLength, length);
  
          var totalRead = toRead;
          var toRemove = 0;
  
          for (var i = 0; i < pipe.buckets.length; i++) {
            var currBucket = pipe.buckets[i];
            var bucketSize = currBucket.offset - currBucket.roffset;
  
            if (toRead <= bucketSize) {
              var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
              if (toRead < bucketSize) {
                tmpSlice = tmpSlice.subarray(0, toRead);
                currBucket.roffset += toRead;
              } else {
                toRemove++;
              }
              data.set(tmpSlice);
              break;
            } else {
              var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
              data.set(tmpSlice);
              data = data.subarray(tmpSlice.byteLength);
              toRead -= tmpSlice.byteLength;
              toRemove++;
            }
          }
  
          if (toRemove && toRemove == pipe.buckets.length) {
            // Do not generate excessive garbage in use cases such as
            // write several bytes, read everything, write several bytes, read everything...
            toRemove--;
            pipe.buckets[toRemove].offset = 0;
            pipe.buckets[toRemove].roffset = 0;
          }
  
          pipe.buckets.splice(0, toRemove);
  
          return totalRead;
        },write:function (stream, buffer, offset, length, position /* ignored */) {
          var pipe = stream.node.pipe;
  
          assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
          var data = buffer.subarray(offset, offset + length);
  
          var dataLen = data.byteLength;
          if (dataLen <= 0) {
            return 0;
          }
  
          var currBucket = null;
  
          if (pipe.buckets.length == 0) {
            currBucket = {
              buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
              offset: 0,
              roffset: 0
            };
            pipe.buckets.push(currBucket);
          } else {
            currBucket = pipe.buckets[pipe.buckets.length - 1];
          }
  
          assert(currBucket.offset <= PIPEFS.BUCKET_BUFFER_SIZE);
  
          var freeBytesInCurrBuffer = PIPEFS.BUCKET_BUFFER_SIZE - currBucket.offset;
          if (freeBytesInCurrBuffer >= dataLen) {
            currBucket.buffer.set(data, currBucket.offset);
            currBucket.offset += dataLen;
            return dataLen;
          } else if (freeBytesInCurrBuffer > 0) {
            currBucket.buffer.set(data.subarray(0, freeBytesInCurrBuffer), currBucket.offset);
            currBucket.offset += freeBytesInCurrBuffer;
            data = data.subarray(freeBytesInCurrBuffer, data.byteLength);
          }
  
          var numBuckets = (data.byteLength / PIPEFS.BUCKET_BUFFER_SIZE) | 0;
          var remElements = data.byteLength % PIPEFS.BUCKET_BUFFER_SIZE;
  
          for (var i = 0; i < numBuckets; i++) {
            var newBucket = {
              buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
              offset: PIPEFS.BUCKET_BUFFER_SIZE,
              roffset: 0
            };
            pipe.buckets.push(newBucket);
            newBucket.buffer.set(data.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE));
            data = data.subarray(PIPEFS.BUCKET_BUFFER_SIZE, data.byteLength);
          }
  
          if (remElements > 0) {
            var newBucket = {
              buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
              offset: data.byteLength,
              roffset: 0
            };
            pipe.buckets.push(newBucket);
            newBucket.buffer.set(data);
          }
  
          return dataLen;
        },close:function (stream) {
          var pipe = stream.node.pipe;
          pipe.buckets = null;
        }},nextname:function () {
        if (!PIPEFS.nextname.current) {
          PIPEFS.nextname.current = 0;
        }
        return 'pipe[' + (PIPEFS.nextname.current++) + ']';
      }};
  function ___sys_pipe(fdPtr) {try {
  
      if (fdPtr == 0) {
        throw new FS.ErrnoError(21);
      }
  
      var res = PIPEFS.createPipe();
  
      HEAP32[((fdPtr)>>2)]=res.readable_fd;
      HEAP32[(((fdPtr)+(4))>>2)]=res.writable_fd;
  
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_poll(fds, nfds, timeout) {try {
  
      var nonzero = 0;
      for (var i = 0; i < nfds; i++) {
        var pollfd = fds + 8 * i;
        var fd = HEAP32[((pollfd)>>2)];
        var events = HEAP16[(((pollfd)+(4))>>1)];
        var mask = 32;
        var stream = FS.getStream(fd);
        if (stream) {
          mask = SYSCALLS.DEFAULT_POLLMASK;
          if (stream.stream_ops.poll) {
            mask = stream.stream_ops.poll(stream);
          }
        }
        mask &= events | 8 | 16;
        if (mask) nonzero++;
        HEAP16[(((pollfd)+(6))>>1)]=mask;
      }
      return nonzero;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_read(fd, buf, count) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return FS.read(stream, HEAP8,buf, count);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_readlink(path, buf, bufsize) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doReadlink(path, buf, bufsize);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_rename(old_path, new_path) {try {
  
      old_path = SYSCALLS.getStr(old_path);
      new_path = SYSCALLS.getStr(new_path);
      FS.rename(old_path, new_path);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_rmdir(path) {try {
  
      path = SYSCALLS.getStr(path);
      FS.rmdir(path);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  var SOCKFS={mount:function(mount) {
        // If Module['websocket'] has already been defined (e.g. for configuring
        // the subprotocol/url) use that, if not initialise it to a new object.
        Module['websocket'] = (Module['websocket'] && 
                               ('object' === typeof Module['websocket'])) ? Module['websocket'] : {};
  
        // Add the Event registration mechanism to the exported websocket configuration
        // object so we can register network callbacks from native JavaScript too.
        // For more documentation see system/include/emscripten/emscripten.h
        Module['websocket']._callbacks = {};
        Module['websocket']['on'] = /** @this{Object} */ function(event, callback) {
  	    if ('function' === typeof callback) {
  		  this._callbacks[event] = callback;
          }
  	    return this;
        };
  
        Module['websocket'].emit = /** @this{Object} */ function(event, param) {
  	    if ('function' === typeof this._callbacks[event]) {
  		  this._callbacks[event].call(this, param);
          }
        };
  
        // If debug is enabled register simple default logging callbacks for each Event.
  
        return FS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createSocket:function(family, type, protocol) {
        type &= ~526336; // Some applications may pass it; it makes no sense for a single process.
        var streaming = type == 1;
        if (protocol) {
          assert(streaming == (protocol == 6)); // if SOCK_STREAM, must be tcp
        }
  
        // create our internal socket structure
        var sock = {
          family: family,
          type: type,
          protocol: protocol,
          server: null,
          error: null, // Used in getsockopt for SOL_SOCKET/SO_ERROR test
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
  
        // create the filesystem node to store the socket structure
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
  
        // and the wrapping stream that enables library functions such
        // as read and write to indirectly interact with the socket
        var stream = FS.createStream({
          path: name,
          node: node,
          flags: FS.modeStringToFlags('r+'),
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
  
        // map the new stream to the socket structure (sockets have a 1:1
        // relationship with a stream)
        sock.stream = stream;
  
        return sock;
      },getSocket:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },stream_ops:{poll:function(stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },ioctl:function(stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },read:function(stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            // socket is closed
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        },write:function(stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },close:function(stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }},nextname:function() {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
      },websocket_sock_ops:{createPeer:function(sock, addr, port) {
          var ws;
  
          if (typeof addr === 'object') {
            ws = addr;
            addr = null;
            port = null;
          }
  
          if (ws) {
            // for sockets that've already connected (e.g. we're the server)
            // we can inspect the _socket property for the address
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            }
            // if we're just now initializing a connection to the remote,
            // inspect the url property
            else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error('WebSocket URL must be in the format ws(s)://address:port');
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            // create the actual websocket object and connect
            try {
              // runtimeConfig gets set to true if WebSocket runtime configuration is available.
              var runtimeConfig = (Module['websocket'] && ('object' === typeof Module['websocket']));
  
              // The default value is 'ws://' the replace is needed because the compiler replaces '//' comments with '#'
              // comments without checking context, so we'd end up with ws:#, the replace swaps the '#' for '//' again.
              var url = 'ws:#'.replace('#', '//');
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['url']) {
                  url = Module['websocket']['url']; // Fetch runtime WebSocket URL config.
                }
              }
  
              if (url === 'ws://' || url === 'wss://') { // Is the supplied URL config just a prefix, if so complete it.
                var parts = addr.split('/');
                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join('/');
              }
  
              // Make the WebSocket subprotocol (Sec-WebSocket-Protocol) default to binary if no configuration is set.
              var subProtocols = 'binary'; // The default value is 'binary'
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['subprotocol']) {
                  subProtocols = Module['websocket']['subprotocol']; // Fetch runtime WebSocket subprotocol config.
                }
              }
  
              // The default WebSocket options
              var opts = undefined;
  
              if (subProtocols !== 'null') {
                // The regex trims the string (removes spaces at the beginning and end, then splits the string by
                // <any space>,<any space> into an Array. Whitespace removal is important for Websockify and ws.
                subProtocols = subProtocols.replace(/^ +| +$/g,"").split(/ *, */);
  
                // The node ws library API for specifying optional subprotocol is slightly different than the browser's.
                opts = ENVIRONMENT_IS_NODE ? {'protocol': subProtocols.toString()} : subProtocols;
              }
  
              // some webservers (azure) does not support subprotocol header
              if (runtimeConfig && null === Module['websocket']['subprotocol']) {
                subProtocols = 'null';
                opts = undefined;
              }
  
              // If node we use the ws library.
              var WebSocketConstructor;
              {
                WebSocketConstructor = WebSocket;
              }
              ws = new WebSocketConstructor(url, opts);
              ws.binaryType = 'arraybuffer';
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
            }
          }
  
  
          var peer = {
            addr: addr,
            port: port,
            socket: ws,
            dgram_send_queue: []
          };
  
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
  
          // if this is a bound dgram socket, send the port number first to allow
          // us to override the ephemeral port reported to us by remotePort on the
          // remote end.
          if (sock.type === 2 && typeof sock.sport !== 'undefined') {
            peer.dgram_send_queue.push(new Uint8Array([
                255, 255, 255, 255,
                'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
            ]));
          }
  
          return peer;
        },getPeer:function(sock, addr, port) {
          return sock.peers[addr + ':' + port];
        },addPeer:function(sock, peer) {
          sock.peers[peer.addr + ':' + peer.port] = peer;
        },removePeer:function(sock, peer) {
          delete sock.peers[peer.addr + ':' + peer.port];
        },handlePeerEvents:function(sock, peer) {
          var first = true;
  
          var handleOpen = function () {
  
            Module['websocket'].emit('open', sock.stream.fd);
  
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              // not much we can do here in the way of proper error handling as we've already
              // lied and said this data was sent. shut it down.
              peer.socket.close();
            }
          };
  
          function handleMessage(data) {
            if (typeof data === 'string') {
              var encoder = new TextEncoder(); // should be utf-8
              data = encoder.encode(data); // make a typed array from the string
            } else {
              assert(data.byteLength !== undefined); // must receive an ArrayBuffer
              if (data.byteLength == 0) {
                // An empty ArrayBuffer will emit a pseudo disconnect event
                // as recv/recvmsg will return zero which indicates that a socket
                // has performed a shutdown although the connection has not been disconnected yet.
                return;
              } else {
                data = new Uint8Array(data); // make a typed array view on the array buffer
              }
            }
  
  
            // if this is the port message, override the peer's port with it
            var wasfirst = first;
            first = false;
            if (wasfirst &&
                data.length === 10 &&
                data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
              // update the peer's port and it's key in the peer map
              var newport = ((data[8] << 8) | data[9]);
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
  
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
            Module['websocket'].emit('message', sock.stream.fd);
          };
  
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on('open', handleOpen);
            peer.socket.on('message', function(data, flags) {
              if (!flags.binary) {
                return;
              }
              handleMessage((new Uint8Array(data)).buffer);  // copy from node Buffer -> ArrayBuffer
            });
            peer.socket.on('close', function() {
              Module['websocket'].emit('close', sock.stream.fd);
            });
            peer.socket.on('error', function(error) {
              // Although the ws library may pass errors that may be more descriptive than
              // ECONNREFUSED they are not necessarily the expected error code e.g. 
              // ENOTFOUND on getaddrinfo seems to be node.js specific, so using ECONNREFUSED
              // is still probably the most useful thing to do.
              sock.error = ERRNO_CODES.ECONNREFUSED; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
              Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
              // don't throw
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onclose = function() {
              Module['websocket'].emit('close', sock.stream.fd);
            };
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
            peer.socket.onerror = function(error) {
              // The WebSocket spec only allows a 'simple event' to be thrown on error,
              // so we only really know as much as ECONNREFUSED.
              sock.error = ERRNO_CODES.ECONNREFUSED; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
              Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
            };
          }
        },poll:function(sock) {
          if (sock.type === 1 && sock.server) {
            // listen sockets should only say they're available for reading
            // if there are pending clients.
            return sock.pending.length ? (64 | 1) : 0;
          }
  
          var mask = 0;
          var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
            SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
            null;
  
          if (sock.recv_queue.length ||
              !dest ||  // connection-less sockets are always ready to read
              (dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
            mask |= (64 | 1);
          }
  
          if (!dest ||  // connection-less sockets are always ready to write
              (dest && dest.socket.readyState === dest.socket.OPEN)) {
            mask |= 4;
          }
  
          if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {
            mask |= 16;
          }
  
          return mask;
        },ioctl:function(sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[((arg)>>2)]=bytes;
              return 0;
            default:
              return ERRNO_CODES.EINVAL;
          }
        },close:function(sock) {
          // if we've spawned a listen server, close it
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          // close any peer connections
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },bind:function(sock, addr, port) {
          if (typeof sock.saddr !== 'undefined' || typeof sock.sport !== 'undefined') {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already bound
          }
          sock.saddr = addr;
          sock.sport = port;
          // in order to emulate dgram sockets, we need to launch a listen server when
          // binding on a connection-less socket
          // note: this is only required on the server side
          if (sock.type === 2) {
            // close the existing server if it exists
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            // swallow error operation not supported error that occurs when binding in the
            // browser where this isn't supported
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError)) throw e;
              if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
            }
          }
        },connect:function(sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
  
          // TODO autobind
          // if (!sock.addr && sock.type == 2) {
          // }
  
          // early out if we're already connected / in the middle of connecting
          if (typeof sock.daddr !== 'undefined' && typeof sock.dport !== 'undefined') {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
              }
            }
          }
  
          // add the socket to our peer list and set our
          // destination address / port to match
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
  
          // always "fail" in non-blocking mode
          throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },listen:function(sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
        },accept:function(listensock) {
          if (!listensock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },getname:function(sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === undefined || sock.dport === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            // TODO saddr and sport will be set for bind()'d UDP sockets, but what
            // should we be returning for TCP sockets that've been connect()'d?
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr: addr, port: port };
        },sendmsg:function(sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            // connection-less sockets will honor the message address,
            // and otherwise fall back to the bound destination address
            if (addr === undefined || port === undefined) {
              addr = sock.daddr;
              port = sock.dport;
            }
            // if there was no address to fall back to, error out
            if (addr === undefined || port === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
            }
          } else {
            // connection-based sockets will only use the bound
            addr = sock.daddr;
            port = sock.dport;
          }
  
          // find the peer for the destination address
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
  
          // early out if not connected with a connection-based socket
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
  
          // create a copy of the incoming data to send, as the WebSocket API
          // doesn't work entirely with an ArrayBufferView, it'll just send
          // the entire underlying buffer
          if (ArrayBuffer.isView(buffer)) {
            offset += buffer.byteOffset;
            buffer = buffer.buffer;
          }
  
          var data;
            data = buffer.slice(offset, offset + length);
  
          // if we're emulating a connection-less dgram socket and don't have
          // a cached connection, queue the buffer to send upon connect and
          // lie, saying the data was sent now.
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              // if we're not connected, open a new connection
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
  
          try {
            // send the actual data
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
        },recvmsg:function(sock, length) {
          // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
          if (sock.type === 1 && sock.server) {
            // tcp servers should not be recv()'ing on the listen socket
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          }
  
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
  
              if (!dest) {
                // if we have a destination address but are not connected, error out
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              }
              else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                // return null if the socket has closed
                return null;
              }
              else {
                // else, our socket is in a valid state but truly has nothing available
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
            } else {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
  
          // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
          // requeued TCP data it'll be an ArrayBufferView
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
  
  
          // push back any unread data for TCP connections
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
  
          return res;
        }}};
  
  function __inet_pton4_raw(str) {
      var b = str.split('.');
      for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp)) return null;
        b[i] = tmp;
      }
      return (b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)) >>> 0;
    }
  
  /** @suppress {checkTypes} */
  function jstoi_q(str) {
      return parseInt(str);
    }
  function __inet_pton6_raw(str) {
      var words;
      var w, offset, z, i;
      /* http://home.deds.nl/~aeron/regex/ */
      var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i
      var parts = [];
      if (!valid6regx.test(str)) {
        return null;
      }
      if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      // Z placeholder to keep track of zeros when splitting the string on ":"
      if (str.indexOf("::") === 0) {
        str = str.replace("::", "Z:"); // leading zeros case
      } else {
        str = str.replace("::", ":Z:");
      }
  
      if (str.indexOf(".") > 0) {
        // parse IPv4 embedded stress
        str = str.replace(new RegExp('[.]', 'g'), ":");
        words = str.split(":");
        words[words.length-4] = jstoi_q(words[words.length-4]) + jstoi_q(words[words.length-3])*256;
        words[words.length-3] = jstoi_q(words[words.length-2]) + jstoi_q(words[words.length-1])*256;
        words = words.slice(0, words.length-2);
      } else {
        words = str.split(":");
      }
  
      offset = 0; z = 0;
      for (w=0; w < words.length; w++) {
        if (typeof words[w] === 'string') {
          if (words[w] === 'Z') {
            // compressed zeros - write appropriate number of zero words
            for (z = 0; z < (8 - words.length+1); z++) {
              parts[w+z] = 0;
            }
            offset = z-1;
          } else {
            // parse hex to field to 16-bit value and write it in network byte-order
            parts[w+offset] = _htons(parseInt(words[w],16));
          }
        } else {
          // parsed IPv4 words
          parts[w+offset] = words[w];
        }
      }
      return [
        (parts[1] << 16) | parts[0],
        (parts[3] << 16) | parts[2],
        (parts[5] << 16) | parts[4],
        (parts[7] << 16) | parts[6]
      ];
    }
  var DNS={address_map:{id:1,addrs:{},names:{}},lookup_name:function (name) {
        // If the name is already a valid ipv4 / ipv6 address, don't generate a fake one.
        var res = __inet_pton4_raw(name);
        if (res !== null) {
          return name;
        }
        res = __inet_pton6_raw(name);
        if (res !== null) {
          return name;
        }
  
        // See if this name is already mapped.
        var addr;
  
        if (DNS.address_map.addrs[name]) {
          addr = DNS.address_map.addrs[name];
        } else {
          var id = DNS.address_map.id++;
          assert(id < 65535, 'exceeded max address mappings of 65535');
  
          addr = '172.29.' + (id & 0xff) + '.' + (id & 0xff00);
  
          DNS.address_map.names[addr] = name;
          DNS.address_map.addrs[name] = addr;
        }
  
        return addr;
      },lookup_addr:function (addr) {
        if (DNS.address_map.names[addr]) {
          return DNS.address_map.names[addr];
        }
  
        return null;
      }};
  
  var Sockets={BUFFER_SIZE:10240,MAX_BUFFER_SIZE:10485760,nextFd:1,fds:{},nextport:1,maxport:65535,peer:null,connections:{},portmap:{},localAddr:4261412874,addrPool:[33554442,50331658,67108874,83886090,100663306,117440522,134217738,150994954,167772170,184549386,201326602,218103818,234881034]};
  
  function __inet_ntop4_raw(addr) {
      return (addr & 0xff) + '.' + ((addr >> 8) & 0xff) + '.' + ((addr >> 16) & 0xff) + '.' + ((addr >> 24) & 0xff)
    }
  
  function __inet_ntop6_raw(ints) {
      //  ref:  http://www.ietf.org/rfc/rfc2373.txt - section 2.5.4
      //  Format for IPv4 compatible and mapped  128-bit IPv6 Addresses
      //  128-bits are split into eight 16-bit words
      //  stored in network byte order (big-endian)
      //  |                80 bits               | 16 |      32 bits        |
      //  +-----------------------------------------------------------------+
      //  |               10 bytes               |  2 |      4 bytes        |
      //  +--------------------------------------+--------------------------+
      //  +               5 words                |  1 |      2 words        |
      //  +--------------------------------------+--------------------------+
      //  |0000..............................0000|0000|    IPv4 ADDRESS     | (compatible)
      //  +--------------------------------------+----+---------------------+
      //  |0000..............................0000|FFFF|    IPv4 ADDRESS     | (mapped)
      //  +--------------------------------------+----+---------------------+
      var str = "";
      var word = 0;
      var longest = 0;
      var lastzero = 0;
      var zstart = 0;
      var len = 0;
      var i = 0;
      var parts = [
        ints[0] & 0xffff,
        (ints[0] >> 16),
        ints[1] & 0xffff,
        (ints[1] >> 16),
        ints[2] & 0xffff,
        (ints[2] >> 16),
        ints[3] & 0xffff,
        (ints[3] >> 16)
      ];
  
      // Handle IPv4-compatible, IPv4-mapped, loopback and any/unspecified addresses
  
      var hasipv4 = true;
      var v4part = "";
      // check if the 10 high-order bytes are all zeros (first 5 words)
      for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) { hasipv4 = false; break; }
      }
  
      if (hasipv4) {
        // low-order 32-bits store an IPv4 address (bytes 13 to 16) (last 2 words)
        v4part = __inet_ntop4_raw(parts[6] | (parts[7] << 16));
        // IPv4-mapped IPv6 address if 16-bit value (bytes 11 and 12) == 0xFFFF (6th word)
        if (parts[5] === -1) {
          str = "::ffff:";
          str += v4part;
          return str;
        }
        // IPv4-compatible IPv6 address if 16-bit value (bytes 11 and 12) == 0x0000 (6th word)
        if (parts[5] === 0) {
          str = "::";
          //special case IPv6 addresses
          if(v4part === "0.0.0.0") v4part = ""; // any/unspecified address
          if(v4part === "0.0.0.1") v4part = "1";// loopback address
          str += v4part;
          return str;
        }
      }
  
      // Handle all other IPv6 addresses
  
      // first run to find the longest contiguous zero words
      for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
          if (word - lastzero > 1) {
            len = 0;
          }
          lastzero = word;
          len++;
        }
        if (len > longest) {
          longest = len;
          zstart = word - longest + 1;
        }
      }
  
      for (word = 0; word < 8; word++) {
        if (longest > 1) {
          // compress contiguous zeros - to produce "::"
          if (parts[word] === 0 && word >= zstart && word < (zstart + longest) ) {
            if (word === zstart) {
              str += ":";
              if (zstart === 0) str += ":"; //leading zeros case
            }
            continue;
          }
        }
        // converts 16-bit words from big-endian to little-endian before converting to hex string
        str += Number(_ntohs(parts[word] & 0xffff)).toString(16);
        str += word < 7 ? ":" : "";
      }
      return str;
    }
  function __read_sockaddr(sa, salen) {
      // family / port offsets are common to both sockaddr_in and sockaddr_in6
      var family = HEAP16[((sa)>>1)];
      var port = _ntohs(HEAPU16[(((sa)+(2))>>1)]);
      var addr;
  
      switch (family) {
        case 2:
          if (salen !== 16) {
            return { errno: 28 };
          }
          addr = HEAP32[(((sa)+(4))>>2)];
          addr = __inet_ntop4_raw(addr);
          break;
        case 10:
          if (salen !== 28) {
            return { errno: 28 };
          }
          addr = [
            HEAP32[(((sa)+(8))>>2)],
            HEAP32[(((sa)+(12))>>2)],
            HEAP32[(((sa)+(16))>>2)],
            HEAP32[(((sa)+(20))>>2)]
          ];
          addr = __inet_ntop6_raw(addr);
          break;
        default:
          return { errno: 5 };
      }
  
      return { family: family, addr: addr, port: port };
    }
  
  function __write_sockaddr(sa, family, addr, port) {
      switch (family) {
        case 2:
          addr = __inet_pton4_raw(addr);
          HEAP16[((sa)>>1)]=family;
          HEAP32[(((sa)+(4))>>2)]=addr;
          HEAP16[(((sa)+(2))>>1)]=_htons(port);
          break;
        case 10:
          addr = __inet_pton6_raw(addr);
          HEAP32[((sa)>>2)]=family;
          HEAP32[(((sa)+(8))>>2)]=addr[0];
          HEAP32[(((sa)+(12))>>2)]=addr[1];
          HEAP32[(((sa)+(16))>>2)]=addr[2];
          HEAP32[(((sa)+(20))>>2)]=addr[3];
          HEAP16[(((sa)+(2))>>1)]=_htons(port);
          HEAP32[(((sa)+(4))>>2)]=0;
          HEAP32[(((sa)+(24))>>2)]=0;
          break;
        default:
          return { errno: 5 };
      }
      // kind of lame, but let's match _read_sockaddr's interface
      return {};
    }
  function ___sys_socketcall(call, socketvararg) {try {
  
      // socketcalls pass the rest of the arguments in a struct
      SYSCALLS.varargs = socketvararg;
  
      var getSocketFromFD = function() {
        var socket = SOCKFS.getSocket(SYSCALLS.get());
        if (!socket) throw new FS.ErrnoError(8);
        return socket;
      };
      /** @param {boolean=} allowNull */
      var getSocketAddress = function(allowNull) {
        var addrp = SYSCALLS.get(), addrlen = SYSCALLS.get();
        if (allowNull && addrp === 0) return null;
        var info = __read_sockaddr(addrp, addrlen);
        if (info.errno) throw new FS.ErrnoError(info.errno);
        info.addr = DNS.lookup_addr(info.addr) || info.addr;
        return info;
      };
  
      switch (call) {
        case 1: { // socket
          var domain = SYSCALLS.get(), type = SYSCALLS.get(), protocol = SYSCALLS.get();
          var sock = SOCKFS.createSocket(domain, type, protocol);
          return sock.stream.fd;
        }
        case 2: { // bind
          var sock = getSocketFromFD(), info = getSocketAddress();
          sock.sock_ops.bind(sock, info.addr, info.port);
          return 0;
        }
        case 3: { // connect
          var sock = getSocketFromFD(), info = getSocketAddress();
          sock.sock_ops.connect(sock, info.addr, info.port);
          return 0;
        }
        case 4: { // listen
          var sock = getSocketFromFD(), backlog = SYSCALLS.get();
          sock.sock_ops.listen(sock, backlog);
          return 0;
        }
        case 5: { // accept
          var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
          var newsock = sock.sock_ops.accept(sock);
          if (addr) {
            var res = __write_sockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport);
          }
          return newsock.stream.fd;
        }
        case 6: { // getsockname
          var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
          // TODO: sock.saddr should never be undefined, see TODO in websocket_sock_ops.getname
          var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || '0.0.0.0'), sock.sport);
          return 0;
        }
        case 7: { // getpeername
          var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
          if (!sock.daddr) {
            return -53; // The socket is not connected.
          }
          var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport);
          return 0;
        }
        case 11: { // sendto
          var sock = getSocketFromFD(), message = SYSCALLS.get(), length = SYSCALLS.get(), flags = SYSCALLS.get(), dest = getSocketAddress(true);
          if (!dest) {
            // send, no address provided
            return FS.write(sock.stream, HEAP8,message, length);
          } else {
            // sendto an address
            return sock.sock_ops.sendmsg(sock, HEAP8,message, length, dest.addr, dest.port);
          }
        }
        case 12: { // recvfrom
          var sock = getSocketFromFD(), buf = SYSCALLS.get(), len = SYSCALLS.get(), flags = SYSCALLS.get(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
          var msg = sock.sock_ops.recvmsg(sock, len);
          if (!msg) return 0; // socket is closed
          if (addr) {
            var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port);
          }
          HEAPU8.set(msg.buffer, buf);
          return msg.buffer.byteLength;
        }
        case 14: { // setsockopt
          return -50; // The option is unknown at the level indicated.
        }
        case 15: { // getsockopt
          var sock = getSocketFromFD(), level = SYSCALLS.get(), optname = SYSCALLS.get(), optval = SYSCALLS.get(), optlen = SYSCALLS.get();
          // Minimal getsockopt aimed at resolving https://github.com/emscripten-core/emscripten/issues/2211
          // so only supports SOL_SOCKET with SO_ERROR.
          if (level === 1) {
            if (optname === 4) {
              HEAP32[((optval)>>2)]=sock.error;
              HEAP32[((optlen)>>2)]=4;
              sock.error = null; // Clear the error (The SO_ERROR option obtains and then clears this field).
              return 0;
            }
          }
          return -50; // The option is unknown at the level indicated.
        }
        case 16: { // sendmsg
          var sock = getSocketFromFD(), message = SYSCALLS.get(), flags = SYSCALLS.get();
          var iov = HEAP32[(((message)+(8))>>2)];
          var num = HEAP32[(((message)+(12))>>2)];
          // read the address and port to send to
          var addr, port;
          var name = HEAP32[((message)>>2)];
          var namelen = HEAP32[(((message)+(4))>>2)];
          if (name) {
            var info = __read_sockaddr(name, namelen);
            if (info.errno) return -info.errno;
            port = info.port;
            addr = DNS.lookup_addr(info.addr) || info.addr;
          }
          // concatenate scatter-gather arrays into one message buffer
          var total = 0;
          for (var i = 0; i < num; i++) {
            total += HEAP32[(((iov)+((8 * i) + 4))>>2)];
          }
          var view = new Uint8Array(total);
          var offset = 0;
          for (var i = 0; i < num; i++) {
            var iovbase = HEAP32[(((iov)+((8 * i) + 0))>>2)];
            var iovlen = HEAP32[(((iov)+((8 * i) + 4))>>2)];
            for (var j = 0; j < iovlen; j++) {  
              view[offset++] = HEAP8[(((iovbase)+(j))>>0)];
            }
          }
          // write the buffer
          return sock.sock_ops.sendmsg(sock, view, 0, total, addr, port);
        }
        case 17: { // recvmsg
          var sock = getSocketFromFD(), message = SYSCALLS.get(), flags = SYSCALLS.get();
          var iov = HEAP32[(((message)+(8))>>2)];
          var num = HEAP32[(((message)+(12))>>2)];
          // get the total amount of data we can read across all arrays
          var total = 0;
          for (var i = 0; i < num; i++) {
            total += HEAP32[(((iov)+((8 * i) + 4))>>2)];
          }
          // try to read total data
          var msg = sock.sock_ops.recvmsg(sock, total);
          if (!msg) return 0; // socket is closed
  
          // TODO honor flags:
          // MSG_OOB
          // Requests out-of-band data. The significance and semantics of out-of-band data are protocol-specific.
          // MSG_PEEK
          // Peeks at the incoming message.
          // MSG_WAITALL
          // Requests that the function block until the full amount of data requested can be returned. The function may return a smaller amount of data if a signal is caught, if the connection is terminated, if MSG_PEEK was specified, or if an error is pending for the socket.
  
          // write the source address out
          var name = HEAP32[((message)>>2)];
          if (name) {
            var res = __write_sockaddr(name, sock.family, DNS.lookup_name(msg.addr), msg.port);
          }
          // write the buffer out to the scatter-gather arrays
          var bytesRead = 0;
          var bytesRemaining = msg.buffer.byteLength;
          for (var i = 0; bytesRemaining > 0 && i < num; i++) {
            var iovbase = HEAP32[(((iov)+((8 * i) + 0))>>2)];
            var iovlen = HEAP32[(((iov)+((8 * i) + 4))>>2)];
            if (!iovlen) {
              continue;
            }
            var length = Math.min(iovlen, bytesRemaining);
            var buf = msg.buffer.subarray(bytesRead, bytesRead + length);
            HEAPU8.set(buf, iovbase + bytesRead);
            bytesRead += length;
            bytesRemaining -= length;
          }
  
          // TODO set msghdr.msg_flags
          // MSG_EOR
          // End of record was received (if supported by the protocol).
          // MSG_OOB
          // Out-of-band data was received.
          // MSG_TRUNC
          // Normal data was truncated.
          // MSG_CTRUNC
  
          return bytesRead;
        }
        default: {
          return -52; // unsupported feature
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_stat64(path, buf) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.stat, path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_statfs64(path, size, buf) {try {
  
      path = SYSCALLS.getStr(path);
      // NOTE: None of the constants here are true. We're just returning safe and
      //       sane values.
      HEAP32[(((buf)+(4))>>2)]=4096;
      HEAP32[(((buf)+(40))>>2)]=4096;
      HEAP32[(((buf)+(8))>>2)]=1000000;
      HEAP32[(((buf)+(12))>>2)]=500000;
      HEAP32[(((buf)+(16))>>2)]=500000;
      HEAP32[(((buf)+(20))>>2)]=FS.nextInode;
      HEAP32[(((buf)+(24))>>2)]=1000000;
      HEAP32[(((buf)+(28))>>2)]=42;
      HEAP32[(((buf)+(44))>>2)]=2;  // ST_NOSUID
      HEAP32[(((buf)+(36))>>2)]=255;
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_symlink(target, linkpath) {try {
  
      target = SYSCALLS.getStr(target);
      linkpath = SYSCALLS.getStr(linkpath);
      FS.symlink(target, linkpath);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_umask(mask) {try {
  
      var old = SYSCALLS.umask;
      SYSCALLS.umask = mask;
      return old;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_uname(buf) {try {
  
      if (!buf) return -21
      var layout = {"__size__":390,"sysname":0,"nodename":65,"release":130,"version":195,"machine":260,"domainname":325};
      var copyString = function(element, value) {
        var offset = layout[element];
        writeAsciiToMemory(value, buf + offset);
      };
      copyString('sysname', 'Emscripten');
      copyString('nodename', 'emscripten');
      copyString('release', '1.0');
      copyString('version', '#1');
      copyString('machine', 'x86-JS');
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_unlink(path) {try {
  
      path = SYSCALLS.getStr(path);
      FS.unlink(path);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_wait4(pid, wstart, options, rusage) {try {
  
      abort('cannot wait on child processes');
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function _exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      exit(status);
    }
  function __exit(a0
  ) {
  return _exit(a0);
  }

  function _abort() {
      abort();
    }

  function _mktime(tmPtr) {
      _tzset();
      var date = new Date(HEAP32[(((tmPtr)+(20))>>2)] + 1900,
                          HEAP32[(((tmPtr)+(16))>>2)],
                          HEAP32[(((tmPtr)+(12))>>2)],
                          HEAP32[(((tmPtr)+(8))>>2)],
                          HEAP32[(((tmPtr)+(4))>>2)],
                          HEAP32[((tmPtr)>>2)],
                          0);
  
      // There's an ambiguous hour when the time goes back; the tm_isdst field is
      // used to disambiguate it.  Date() basically guesses, so we fix it up if it
      // guessed wrong, or fill in tm_isdst with the guess if it's -1.
      var dst = HEAP32[(((tmPtr)+(32))>>2)];
      var guessedOffset = date.getTimezoneOffset();
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dstOffset = Math.min(winterOffset, summerOffset); // DST is in December in South
      if (dst < 0) {
        // Attention: some regions don't have DST at all.
        HEAP32[(((tmPtr)+(32))>>2)]=Number(summerOffset != winterOffset && dstOffset == guessedOffset);
      } else if ((dst > 0) != (dstOffset == guessedOffset)) {
        var nonDstOffset = Math.max(winterOffset, summerOffset);
        var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
        // Don't try setMinutes(date.getMinutes() + ...) -- it's messed up.
        date.setTime(date.getTime() + (trueOffset - guessedOffset)*60000);
      }
  
      HEAP32[(((tmPtr)+(24))>>2)]=date.getDay();
      var yday = ((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)]=yday;
  
      return (date.getTime() / 1000)|0;
    }
  function _asctime_r(tmPtr, buf) {
      var date = {
        tm_sec: HEAP32[((tmPtr)>>2)],
        tm_min: HEAP32[(((tmPtr)+(4))>>2)],
        tm_hour: HEAP32[(((tmPtr)+(8))>>2)],
        tm_mday: HEAP32[(((tmPtr)+(12))>>2)],
        tm_mon: HEAP32[(((tmPtr)+(16))>>2)],
        tm_year: HEAP32[(((tmPtr)+(20))>>2)],
        tm_wday: HEAP32[(((tmPtr)+(24))>>2)]
      };
      var days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
      var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
      var s = days[date.tm_wday] + ' ' + months[date.tm_mon] +
          (date.tm_mday < 10 ? '  ' : ' ') + date.tm_mday +
          (date.tm_hour < 10 ? ' 0' : ' ') + date.tm_hour +
          (date.tm_min < 10 ? ':0' : ':') + date.tm_min +
          (date.tm_sec < 10 ? ':0' : ':') + date.tm_sec +
          ' ' + (1900 + date.tm_year) + "\n";
  
      // asctime_r is specced to behave in an undefined manner if the algorithm would attempt
      // to write out more than 26 bytes (including the null terminator).
      // See http://pubs.opengroup.org/onlinepubs/9699919799/functions/asctime.html
      // Our undefined behavior is to truncate the write to at most 26 bytes, including null terminator.
      stringToUTF8(s, buf, 26);
      return buf;
    }

  function _chroot(path) {
      // int chroot(const char *path);
      // http://pubs.opengroup.org/onlinepubs/7908799/xsh/chroot.html
      setErrNo(2);
      return -1;
    }


  function _difftime(time1, time0) {
      return time1 - time0;
    }

  function _dlclose(handle) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }

  function _dlerror() {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }

  function _dlopen(filename, flag) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }

  function _dlsym(handle, symbol) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }

  function _emscripten_asm_const_int(code, sigPtr, argbuf) {
      var args = readAsmConstArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    }

  function _longjmp(env, value) {
      _setThrew(env, value || 1);
      throw 'longjmp';
    }
  function _emscripten_longjmp(a0,a1
  ) {
  return _longjmp(a0,a1);
  }

  function _emscripten_longjmp_jmpbuf(a0,a1
  ) {
  return _longjmp(a0,a1);
  }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      var oldSize = _emscripten_get_heap_size();
      // With pthreads, races can happen (another thread might increase the size in between), so return a failure, and let the caller retry.
  
  
      // Memory resize rules:
      // 1. When resizing, always produce a resized heap that is at least 16MB (to avoid tiny heap sizes receiving lots of repeated resizes at startup)
      // 2. Always increase heap size to at least the requested size, rounded up to next page multiple.
      // 3a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap geometrically: increase the heap size according to 
      //                                         MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%),
      //                                         At most overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 3b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap linearly: increase the heap size by at least MEMORY_GROWTH_LINEAR_STEP bytes.
      // 4. Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 5. If we were unable to allocate as much memory, it may be due to over-eager decision to excessively reserve due to (3) above.
      //    Hence if an allocation fails, cut down on the amount of excess growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit was set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        return false;
      }
  
      var minHeapSize = 16777216;
  
      // Loop through potential heap size increases. If we attempt a too eager reservation that fails, cut down on the
      // attempted size and reserve a smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for(var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      return false;
    }

  var ENV={};
  
  function getExecutableName() {
      return thisProgram || './this.program';
    }
  function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator === 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
  function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[(((__environ)+(i * 4))>>2)]=ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

  function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[((penviron_count)>>2)]=strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[((penviron_buf_size)>>2)]=bufSize;
      return 0;
    }

  function _execve(path, argv, envp) {
      // int execve(const char *pathname, char *const argv[],
      //            char *const envp[]);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/exec.html
      // We don't support executing external code.
      setErrNo(45);
      return -1;
    }


  function _fd_close(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_fdstat_get(fd, pbuf) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      // All character devices are terminals (other things a Linux system would
      // assume is a character device, like the mouse, we have special APIs for).
      var type = stream.tty ? 2 :
                 FS.isDir(stream.mode) ? 3 :
                 FS.isLink(stream.mode) ? 7 :
                 4;
      HEAP8[((pbuf)>>0)]=type;
      // TODO HEAP16[(((pbuf)+(2))>>1)]=?;
      // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(8))>>2)]=tempI64[0],HEAP32[(((pbuf)+(12))>>2)]=tempI64[1]);
      // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(16))>>2)]=tempI64[0],HEAP32[(((pbuf)+(20))>>2)]=tempI64[1]);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_read(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 0x100000000; // 2^32
      // use an unsigned operator on low and shift high by 32-bits
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  
      var DOUBLE_LIMIT = 0x20000000000000; // 2^53
      // we also check for equality since DOUBLE_LIMIT + 1 == DOUBLE_LIMIT
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
  
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)]=tempI64[0],HEAP32[(((newOffset)+(4))>>2)]=tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_sync(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      if (stream.stream_ops && stream.stream_ops.fsync) {
        return -stream.stream_ops.fsync(stream);
      }
      return 0; // we can't do anything synchronously; the in-memory FS is already synced to
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_write(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _flock(fd, operation) {
      // int flock(int fd, int operation);
      // Pretend to succeed
      return 0;
    }

  function _fork() {
      // pid_t fork(void);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fork.html
      // We don't support multiple processes.
      setErrNo(6);
      return -1;
    }

  var GAI_ERRNO_MESSAGES={};
  function _gai_strerror(val) {
      var buflen = 256;
  
      // On first call to gai_strerror we initialise the buffer and populate the error messages.
      if (!_gai_strerror.buffer) {
          _gai_strerror.buffer = _malloc(buflen);
  
          GAI_ERRNO_MESSAGES['0'] = 'Success';
          GAI_ERRNO_MESSAGES['' + -1] = 'Invalid value for \'ai_flags\' field';
          GAI_ERRNO_MESSAGES['' + -2] = 'NAME or SERVICE is unknown';
          GAI_ERRNO_MESSAGES['' + -3] = 'Temporary failure in name resolution';
          GAI_ERRNO_MESSAGES['' + -4] = 'Non-recoverable failure in name res';
          GAI_ERRNO_MESSAGES['' + -6] = '\'ai_family\' not supported';
          GAI_ERRNO_MESSAGES['' + -7] = '\'ai_socktype\' not supported';
          GAI_ERRNO_MESSAGES['' + -8] = 'SERVICE not supported for \'ai_socktype\'';
          GAI_ERRNO_MESSAGES['' + -10] = 'Memory allocation failure';
          GAI_ERRNO_MESSAGES['' + -11] = 'System error returned in \'errno\'';
          GAI_ERRNO_MESSAGES['' + -12] = 'Argument buffer overflow';
      }
  
      var msg = 'Unknown error';
  
      if (val in GAI_ERRNO_MESSAGES) {
        if (GAI_ERRNO_MESSAGES[val].length > buflen - 1) {
          msg = 'Message too long'; // EMSGSIZE message. This should never occur given the GAI_ERRNO_MESSAGES above.
        } else {
          msg = GAI_ERRNO_MESSAGES[val];
        }
      }
  
      writeAsciiToMemory(msg, _gai_strerror.buffer);
      return _gai_strerror.buffer;
    }

  function _getTempRet0() {
      return (getTempRet0() | 0);
    }

  function _getaddrinfo(node, service, hint, out) {
      // Note getaddrinfo currently only returns a single addrinfo with ai_next defaulting to NULL. When NULL
      // hints are specified or ai_family set to AF_UNSPEC or ai_socktype or ai_protocol set to 0 then we
      // really should provide a linked list of suitable addrinfo values.
      var addrs = [];
      var canon = null;
      var addr = 0;
      var port = 0;
      var flags = 0;
      var family = 0;
      var type = 0;
      var proto = 0;
      var ai, last;
  
      function allocaddrinfo(family, type, proto, canon, addr, port) {
        var sa, salen, ai;
        var res;
  
        salen = family === 10 ?
          28 :
          16;
        addr = family === 10 ?
          __inet_ntop6_raw(addr) :
          __inet_ntop4_raw(addr);
        sa = _malloc(salen);
        res = __write_sockaddr(sa, family, addr, port);
        assert(!res.errno);
  
        ai = _malloc(32);
        HEAP32[(((ai)+(4))>>2)]=family;
        HEAP32[(((ai)+(8))>>2)]=type;
        HEAP32[(((ai)+(12))>>2)]=proto;
        HEAP32[(((ai)+(24))>>2)]=canon;
        HEAP32[(((ai)+(20))>>2)]=sa;
        if (family === 10) {
          HEAP32[(((ai)+(16))>>2)]=28;
        } else {
          HEAP32[(((ai)+(16))>>2)]=16;
        }
        HEAP32[(((ai)+(28))>>2)]=0;
  
        return ai;
      }
  
      if (hint) {
        flags = HEAP32[((hint)>>2)];
        family = HEAP32[(((hint)+(4))>>2)];
        type = HEAP32[(((hint)+(8))>>2)];
        proto = HEAP32[(((hint)+(12))>>2)];
      }
      if (type && !proto) {
        proto = type === 2 ? 17 : 6;
      }
      if (!type && proto) {
        type = proto === 17 ? 2 : 1;
      }
  
      // If type or proto are set to zero in hints we should really be returning multiple addrinfo values, but for
      // now default to a TCP STREAM socket so we can at least return a sensible addrinfo given NULL hints.
      if (proto === 0) {
        proto = 6;
      }
      if (type === 0) {
        type = 1;
      }
  
      if (!node && !service) {
        return -2;
      }
      if (flags & ~(1|2|4|
          1024|8|16|32)) {
        return -1;
      }
      if (hint !== 0 && (HEAP32[((hint)>>2)] & 2) && !node) {
        return -1;
      }
      if (flags & 32) {
        // TODO
        return -2;
      }
      if (type !== 0 && type !== 1 && type !== 2) {
        return -7;
      }
      if (family !== 0 && family !== 2 && family !== 10) {
        return -6;
      }
  
      if (service) {
        service = UTF8ToString(service);
        port = parseInt(service, 10);
  
        if (isNaN(port)) {
          if (flags & 1024) {
            return -2;
          }
          // TODO support resolving well-known service names from:
          // http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.txt
          return -8;
        }
      }
  
      if (!node) {
        if (family === 0) {
          family = 2;
        }
        if ((flags & 1) === 0) {
          if (family === 2) {
            addr = _htonl(2130706433);
          } else {
            addr = [0, 0, 0, 1];
          }
        }
        ai = allocaddrinfo(family, type, proto, null, addr, port);
        HEAP32[((out)>>2)]=ai;
        return 0;
      }
  
      //
      // try as a numeric address
      //
      node = UTF8ToString(node);
      addr = __inet_pton4_raw(node);
      if (addr !== null) {
        // incoming node is a valid ipv4 address
        if (family === 0 || family === 2) {
          family = 2;
        }
        else if (family === 10 && (flags & 8)) {
          addr = [0, 0, _htonl(0xffff), addr];
          family = 10;
        } else {
          return -2;
        }
      } else {
        addr = __inet_pton6_raw(node);
        if (addr !== null) {
          // incoming node is a valid ipv6 address
          if (family === 0 || family === 10) {
            family = 10;
          } else {
            return -2;
          }
        }
      }
      if (addr != null) {
        ai = allocaddrinfo(family, type, proto, node, addr, port);
        HEAP32[((out)>>2)]=ai;
        return 0;
      }
      if (flags & 4) {
        return -2;
      }
  
      //
      // try as a hostname
      //
      // resolve the hostname to a temporary fake address
      node = DNS.lookup_name(node);
      addr = __inet_pton4_raw(node);
      if (family === 0) {
        family = 2;
      } else if (family === 10) {
        addr = [0, 0, _htonl(0xffff), addr];
      }
      ai = allocaddrinfo(family, type, proto, null, addr, port);
      HEAP32[((out)>>2)]=ai;
      return 0;
    }

  /** @type {function(...*):?} */
  function _getdtablesize(
  ) {
  err('missing function: getdtablesize'); abort(-1);
  }

  function _getgrnam() { throw 'getgrnam: TODO' }

  function getHostByName(name) {
      // generate hostent
      var ret = _malloc(20); // XXX possibly leaked, as are others here
      var nameBuf = _malloc(name.length+1);
      stringToUTF8(name, nameBuf, name.length+1);
      HEAP32[((ret)>>2)]=nameBuf;
      var aliasesBuf = _malloc(4);
      HEAP32[((aliasesBuf)>>2)]=0;
      HEAP32[(((ret)+(4))>>2)]=aliasesBuf;
      var afinet = 2;
      HEAP32[(((ret)+(8))>>2)]=afinet;
      HEAP32[(((ret)+(12))>>2)]=4;
      var addrListBuf = _malloc(12);
      HEAP32[((addrListBuf)>>2)]=addrListBuf+8;
      HEAP32[(((addrListBuf)+(4))>>2)]=0;
      HEAP32[(((addrListBuf)+(8))>>2)]=__inet_pton4_raw(DNS.lookup_name(name));
      HEAP32[(((ret)+(16))>>2)]=addrListBuf;
      return ret;
    }
  function _gethostbyaddr(addr, addrlen, type) {
      if (type !== 2) {
        setErrNo(5);
        // TODO: set h_errno
        return null;
      }
      addr = HEAP32[((addr)>>2)]; // addr is in_addr
      var host = __inet_ntop4_raw(addr);
      var lookup = DNS.lookup_addr(host);
      if (lookup) {
        host = lookup;
      }
      return getHostByName(host);
    }

  function _gethostbyname(name) {
      return getHostByName(UTF8ToString(name));
    }

  function _gethostbyname_r(name, ret, buf, buflen, out, err) {
      var data = _gethostbyname(name);
      _memcpy(ret, data, 20);
      _free(data);
      HEAP32[((err)>>2)]=0;
      HEAP32[((out)>>2)]=ret;
      return 0;
    }

  function _getloadavg(loadavg, nelem) {
      // int getloadavg(double loadavg[], int nelem);
      // http://linux.die.net/man/3/getloadavg
      var limit = Math.min(nelem, 3);
      var doubleSize = 8;
      for (var i = 0; i < limit; i++) {
        HEAPF64[(((loadavg)+(i * doubleSize))>>3)]=0.1;
      }
      return limit;
    }

  function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
      var info = __read_sockaddr(sa, salen);
      if (info.errno) {
        return -6;
      }
      var port = info.port;
      var addr = info.addr;
  
      var overflowed = false;
  
      if (node && nodelen) {
        var lookup;
        if ((flags & 1) || !(lookup = DNS.lookup_addr(addr))) {
          if (flags & 8) {
            return -2;
          }
        } else {
          addr = lookup;
        }
        var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
  
        if (numBytesWrittenExclNull+1 >= nodelen) {
          overflowed = true;
        }
      }
  
      if (serv && servlen) {
        port = '' + port;
        var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
  
        if (numBytesWrittenExclNull+1 >= servlen) {
          overflowed = true;
        }
      }
  
      if (overflowed) {
        // Note: even when we overflow, getnameinfo() is specced to write out the truncated results.
        return -12;
      }
  
      return 0;
    }

  var Protocols={list:[],map:{}};
  function _setprotoent(stayopen) {
      // void setprotoent(int stayopen);
  
      // Allocate and populate a protoent structure given a name, protocol number and array of aliases
      function allocprotoent(name, proto, aliases) {
        // write name into buffer
        var nameBuf = _malloc(name.length + 1);
        writeAsciiToMemory(name, nameBuf);
  
        // write aliases into buffer
        var j = 0;
        var length = aliases.length;
        var aliasListBuf = _malloc((length + 1) * 4); // Use length + 1 so we have space for the terminating NULL ptr.
  
        for (var i = 0; i < length; i++, j += 4) {
          var alias = aliases[i];
          var aliasBuf = _malloc(alias.length + 1);
          writeAsciiToMemory(alias, aliasBuf);
          HEAP32[(((aliasListBuf)+(j))>>2)]=aliasBuf;
        }
        HEAP32[(((aliasListBuf)+(j))>>2)]=0; // Terminating NULL pointer.
  
        // generate protoent
        var pe = _malloc(12);
        HEAP32[((pe)>>2)]=nameBuf;
        HEAP32[(((pe)+(4))>>2)]=aliasListBuf;
        HEAP32[(((pe)+(8))>>2)]=proto;
        return pe;
      };
  
      // Populate the protocol 'database'. The entries are limited to tcp and udp, though it is fairly trivial
      // to add extra entries from /etc/protocols if desired - though not sure if that'd actually be useful.
      var list = Protocols.list;
      var map  = Protocols.map;
      if (list.length === 0) {
          var entry = allocprotoent('tcp', 6, ['TCP']);
          list.push(entry);
          map['tcp'] = map['6'] = entry;
          entry = allocprotoent('udp', 17, ['UDP']);
          list.push(entry);
          map['udp'] = map['17'] = entry;
      }
  
      _setprotoent.index = 0;
    }
  function _getprotobyname(name) {
      // struct protoent *getprotobyname(const char *);
      name = UTF8ToString(name);
      _setprotoent(true);
      var result = Protocols.map[name];
      return result;
    }

  function _getprotobynumber(number) {
      // struct protoent *getprotobynumber(int proto);
      _setprotoent(true);
      var result = Protocols.map[number];
      return result;
    }

  function _getpwnam() { throw 'getpwnam: TODO' }

  function _getpwuid() { throw 'getpwuid: TODO' }

  function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[((ptr)>>2)]=(now/1000)|0; // seconds
      HEAP32[(((ptr)+(4))>>2)]=((now % 1000)*1000)|0; // microseconds
      return 0;
    }

  function _gmtime_r(time, tmPtr) {
      var date = new Date(HEAP32[((time)>>2)]*1000);
      HEAP32[((tmPtr)>>2)]=date.getUTCSeconds();
      HEAP32[(((tmPtr)+(4))>>2)]=date.getUTCMinutes();
      HEAP32[(((tmPtr)+(8))>>2)]=date.getUTCHours();
      HEAP32[(((tmPtr)+(12))>>2)]=date.getUTCDate();
      HEAP32[(((tmPtr)+(16))>>2)]=date.getUTCMonth();
      HEAP32[(((tmPtr)+(20))>>2)]=date.getUTCFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)]=date.getUTCDay();
      HEAP32[(((tmPtr)+(36))>>2)]=0;
      HEAP32[(((tmPtr)+(32))>>2)]=0;
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = ((date.getTime() - start) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)]=yday;
      // Allocate a string "GMT" for us to point to.
      if (!_gmtime_r.GMTString) _gmtime_r.GMTString = allocateUTF8("GMT");
      HEAP32[(((tmPtr)+(40))>>2)]=_gmtime_r.GMTString;
      return tmPtr;
    }

  function _kill(pid, sig) {
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/kill.html
      // Makes no sense in a single-process environment.
  	  // Should kill itself somtimes depending on `pid`
      setErrNo(ERRNO_CODES.EPERM);
      return -1;
    }



  function _usleep(useconds) {
      // int usleep(useconds_t useconds);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/usleep.html
      // We're single-threaded, so use a busy loop. Super-ugly.
      var start = _emscripten_get_now();
      while (_emscripten_get_now() - start < useconds / 1000) {
        // Do nothing.
      }
    }
  Module["_usleep"] = _usleep;
  function _nanosleep(rqtp, rmtp) {
      // int nanosleep(const struct timespec  *rqtp, struct timespec *rmtp);
      if (rqtp === 0) {
        setErrNo(28);
        return -1;
      }
      var seconds = HEAP32[((rqtp)>>2)];
      var nanoseconds = HEAP32[(((rqtp)+(4))>>2)];
      if (nanoseconds < 0 || nanoseconds > 999999999 || seconds < 0) {
        setErrNo(28);
        return -1;
      }
      if (rmtp !== 0) {
        HEAP32[((rmtp)>>2)]=0;
        HEAP32[(((rmtp)+(4))>>2)]=0;
      }
      return _usleep((seconds * 1e6) + (nanoseconds / 1000));
    }

  /** @type {function(...*):?} */
  function _popen(
  ) {
  err('missing function: popen'); abort(-1);
  }

  function _pthread_create() {
      return 6;
    }

  function _pthread_join() {}

  function _pthread_mutexattr_destroy() {}

  function _pthread_mutexattr_init() {}

  function _pthread_mutexattr_settype() {}

  function _pthread_setcancelstate() { return 0; }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }

  function _setitimer() {
      throw 'setitimer() is not implemented yet';
    }

  function _sigaction(signum, act, oldact) {
      //int sigaction(int signum, const struct sigaction *act, struct sigaction *oldact);
      return 0;
    }

  function _sigaddset(set, signum) {
      HEAP32[((set)>>2)]=HEAP32[((set)>>2)]| (1 << (signum-1));
      return 0;
    }

  function _sigdelset(set, signum) {
      HEAP32[((set)>>2)]=HEAP32[((set)>>2)]& (~(1 << (signum-1)));
      return 0;
    }

  function _sigemptyset(set) {
      HEAP32[((set)>>2)]=0;
      return 0;
    }

  function _sigfillset(set) {
      HEAP32[((set)>>2)]=-1>>>0;
      return 0;
    }

  var __sigalrm_handler=0;
  function _signal(sig, func) {
      if (sig == 14) {
        __sigalrm_handler = func;
      } else {
      }
      return 0;
    }

  function _sigprocmask() {
      return 0;
    }

  function __isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  var __MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];
  
  var __MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];
  function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while(days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }
  function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value === 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            } else {
              return thisDate.getFullYear();
            }
          } else {
            return thisDate.getFullYear()-1;
          }
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          } else {
            return 'PM';
          }
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Sunday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year+1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7-janFirst.getDay());
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Sunday?
          if (compareByDay(firstSunday, endDate) < 0) {
            // calculate difference in days between first Sunday and endDate
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstSundayUntilEndJanuary = 31-firstSunday.getDate();
            var days = firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
  
          return compareByDay(firstSunday, janFirst) === 0 ? '01': '00';
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var janFourthThisYear = new Date(date.tm_year+1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year+1901, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          var endDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            // if given date is before this years first week, then it belongs to the 53rd week of last year
            return '53';
          }
  
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            // if given date is after next years first week, then it belongs to the 01th week of next year
            return '01';
          }
  
          // given date is in between CW 01..53 of this calendar year
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year+1900) {
            // first CW of this year starts last year
            daysDifference = date.tm_yday+32-firstWeekStartThisYear.getDate()
          } else {
            // first CW of this year starts this year
            daysDifference = date.tm_yday+1-firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference/7), 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Monday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7-janFirst.getDay()+1);
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Monday?
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstMondayUntilEndJanuary = 31-firstMonday.getDate();
            var days = firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? '01': '00';
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }

  function _strptime(buf, format, tm) {
      // char *strptime(const char *restrict buf, const char *restrict format, struct tm *restrict tm);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strptime.html
      var pattern = UTF8ToString(format);
  
      // escape special characters
      // TODO: not sure we really need to escape all of these in JS regexps
      var SPECIAL_CHARS = '\\!@#$^&*()+=-[]/{}|:<>?,.';
      for (var i=0, ii=SPECIAL_CHARS.length; i<ii; ++i) {
        pattern = pattern.replace(new RegExp('\\'+SPECIAL_CHARS[i], 'g'), '\\'+SPECIAL_CHARS[i]);
      }
  
      // reduce number of matchers
      var EQUIVALENT_MATCHERS = {
        '%A':  '%a',
        '%B':  '%b',
        '%c':  '%a %b %d %H:%M:%S %Y',
        '%D':  '%m\\/%d\\/%y',
        '%e':  '%d',
        '%F':  '%Y-%m-%d',
        '%h':  '%b',
        '%R':  '%H\\:%M',
        '%r':  '%I\\:%M\\:%S\\s%p',
        '%T':  '%H\\:%M\\:%S',
        '%x':  '%m\\/%d\\/(?:%y|%Y)',
        '%X':  '%H\\:%M\\:%S'
      };
      for (var matcher in EQUIVALENT_MATCHERS) {
        pattern = pattern.replace(matcher, EQUIVALENT_MATCHERS[matcher]);
      }
  
      // TODO: take care of locale
  
      var DATE_PATTERNS = {
        /* weeday name */     '%a': '(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)',
        /* month name */      '%b': '(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)',
        /* century */         '%C': '\\d\\d',
        /* day of month */    '%d': '0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31',
        /* hour (24hr) */     '%H': '\\d(?!\\d)|[0,1]\\d|20|21|22|23',
        /* hour (12hr) */     '%I': '\\d(?!\\d)|0\\d|10|11|12',
        /* day of year */     '%j': '00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d',
        /* month */           '%m': '0[1-9]|[1-9](?!\\d)|10|11|12',
        /* minutes */         '%M': '0\\d|\\d(?!\\d)|[1-5]\\d',
        /* whitespace */      '%n': '\\s',
        /* AM/PM */           '%p': 'AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.',
        /* seconds */         '%S': '0\\d|\\d(?!\\d)|[1-5]\\d|60',
        /* week number */     '%U': '0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53',
        /* week number */     '%W': '0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53',
        /* weekday number */  '%w': '[0-6]',
        /* 2-digit year */    '%y': '\\d\\d',
        /* 4-digit year */    '%Y': '\\d\\d\\d\\d',
        /* % */               '%%': '%',
        /* whitespace */      '%t': '\\s',
      };
  
      var MONTH_NUMBERS = {JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11};
      var DAY_NUMBERS_SUN_FIRST = {SUN: 0, MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6};
      var DAY_NUMBERS_MON_FIRST = {MON: 0, TUE: 1, WED: 2, THU: 3, FRI: 4, SAT: 5, SUN: 6};
  
      for (var datePattern in DATE_PATTERNS) {
        pattern = pattern.replace(datePattern, '('+datePattern+DATE_PATTERNS[datePattern]+')');
      }
  
      // take care of capturing groups
      var capture = [];
      for (var i=pattern.indexOf('%'); i>=0; i=pattern.indexOf('%')) {
        capture.push(pattern[i+1]);
        pattern = pattern.replace(new RegExp('\\%'+pattern[i+1], 'g'), '');
      }
  
      var matches = new RegExp('^'+pattern, "i").exec(UTF8ToString(buf))
      // out(UTF8ToString(buf)+ ' is matched by '+((new RegExp('^'+pattern)).source)+' into: '+JSON.stringify(matches));
  
      function initDate() {
        function fixup(value, min, max) {
          return (typeof value !== 'number' || isNaN(value)) ? min : (value>=min ? (value<=max ? value: max): min);
        };
        return {
          year: fixup(HEAP32[(((tm)+(20))>>2)] + 1900 , 1970, 9999),
          month: fixup(HEAP32[(((tm)+(16))>>2)], 0, 11),
          day: fixup(HEAP32[(((tm)+(12))>>2)], 1, 31),
          hour: fixup(HEAP32[(((tm)+(8))>>2)], 0, 23),
          min: fixup(HEAP32[(((tm)+(4))>>2)], 0, 59),
          sec: fixup(HEAP32[((tm)>>2)], 0, 59)
        };
      };
  
      if (matches) {
        var date = initDate();
        var value;
  
        var getMatch = function(symbol) {
          var pos = capture.indexOf(symbol);
          // check if symbol appears in regexp
          if (pos >= 0) {
            // return matched value or null (falsy!) for non-matches
            return matches[pos+1];
          }
          return;
        };
  
        // seconds
        if ((value=getMatch('S'))) {
          date.sec = jstoi_q(value);
        }
  
        // minutes
        if ((value=getMatch('M'))) {
          date.min = jstoi_q(value);
        }
  
        // hours
        if ((value=getMatch('H'))) {
          // 24h clock
          date.hour = jstoi_q(value);
        } else if ((value = getMatch('I'))) {
          // AM/PM clock
          var hour = jstoi_q(value);
          if ((value=getMatch('p'))) {
            hour += value.toUpperCase()[0] === 'P' ? 12 : 0;
          }
          date.hour = hour;
        }
  
        // year
        if ((value=getMatch('Y'))) {
          // parse from four-digit year
          date.year = jstoi_q(value);
        } else if ((value=getMatch('y'))) {
          // parse from two-digit year...
          var year = jstoi_q(value);
          if ((value=getMatch('C'))) {
            // ...and century
            year += jstoi_q(value)*100;
          } else {
            // ...and rule-of-thumb
            year += year<69 ? 2000 : 1900;
          }
          date.year = year;
        }
  
        // month
        if ((value=getMatch('m'))) {
          // parse from month number
          date.month = jstoi_q(value)-1;
        } else if ((value=getMatch('b'))) {
          // parse from month name
          date.month = MONTH_NUMBERS[value.substring(0,3).toUpperCase()] || 0;
          // TODO: derive month from day in year+year, week number+day of week+year
        }
  
        // day
        if ((value=getMatch('d'))) {
          // get day of month directly
          date.day = jstoi_q(value);
        } else if ((value=getMatch('j'))) {
          // get day of month from day of year ...
          var day = jstoi_q(value);
          var leapYear = __isLeapYear(date.year);
          for (var month=0; month<12; ++month) {
            var daysUntilMonth = __arraySum(leapYear ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, month-1);
            if (day<=daysUntilMonth+(leapYear ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[month]) {
              date.day = day-daysUntilMonth;
            }
          }
        } else if ((value=getMatch('a'))) {
          // get day of month from weekday ...
          var weekDay = value.substring(0,3).toUpperCase();
          if ((value=getMatch('U'))) {
            // ... and week number (Sunday being first day of week)
            // Week number of the year (Sunday as the first day of the week) as a decimal number [00,53].
            // All days in a new year preceding the first Sunday are considered to be in week 0.
            var weekDayNumber = DAY_NUMBERS_SUN_FIRST[weekDay];
            var weekNumber = jstoi_q(value);
  
            // January 1st
            var janFirst = new Date(date.year, 0, 1);
            var endDate;
            if (janFirst.getDay() === 0) {
              // Jan 1st is a Sunday, and, hence in the 1st CW
              endDate = __addDays(janFirst, weekDayNumber+7*(weekNumber-1));
            } else {
              // Jan 1st is not a Sunday, and, hence still in the 0th CW
              endDate = __addDays(janFirst, 7-janFirst.getDay()+weekDayNumber+7*(weekNumber-1));
            }
            date.day = endDate.getDate();
            date.month = endDate.getMonth();
          } else if ((value=getMatch('W'))) {
            // ... and week number (Monday being first day of week)
            // Week number of the year (Monday as the first day of the week) as a decimal number [00,53].
            // All days in a new year preceding the first Monday are considered to be in week 0.
            var weekDayNumber = DAY_NUMBERS_MON_FIRST[weekDay];
            var weekNumber = jstoi_q(value);
  
            // January 1st
            var janFirst = new Date(date.year, 0, 1);
            var endDate;
            if (janFirst.getDay()===1) {
              // Jan 1st is a Monday, and, hence in the 1st CW
               endDate = __addDays(janFirst, weekDayNumber+7*(weekNumber-1));
            } else {
              // Jan 1st is not a Monday, and, hence still in the 0th CW
              endDate = __addDays(janFirst, 7-janFirst.getDay()+1+weekDayNumber+7*(weekNumber-1));
            }
  
            date.day = endDate.getDate();
            date.month = endDate.getMonth();
          }
        }
  
        /*
        tm_sec  int seconds after the minute  0-61*
        tm_min  int minutes after the hour  0-59
        tm_hour int hours since midnight  0-23
        tm_mday int day of the month  1-31
        tm_mon  int months since January  0-11
        tm_year int years since 1900
        tm_wday int days since Sunday 0-6
        tm_yday int days since January 1  0-365
        tm_isdst  int Daylight Saving Time flag
        */
  
        var fullDate = new Date(date.year, date.month, date.day, date.hour, date.min, date.sec, 0);
        HEAP32[((tm)>>2)]=fullDate.getSeconds();
        HEAP32[(((tm)+(4))>>2)]=fullDate.getMinutes();
        HEAP32[(((tm)+(8))>>2)]=fullDate.getHours();
        HEAP32[(((tm)+(12))>>2)]=fullDate.getDate();
        HEAP32[(((tm)+(16))>>2)]=fullDate.getMonth();
        HEAP32[(((tm)+(20))>>2)]=fullDate.getFullYear()-1900;
        HEAP32[(((tm)+(24))>>2)]=fullDate.getDay();
        HEAP32[(((tm)+(28))>>2)]=__arraySum(__isLeapYear(fullDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, fullDate.getMonth()-1)+fullDate.getDate()-1;
        HEAP32[(((tm)+(32))>>2)]=0;
  
        // we need to convert the matched sequence into an integer array to take care of UTF-8 characters > 0x7F
        // TODO: not sure that intArrayFromString handles all unicode characters correctly
        return buf+intArrayFromString(matches[0]).length-1;
      }
  
      return 0;
    }

  function _sysconf(name) {
      // long sysconf(int name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
      switch(name) {
        case 30: return 16384;
        case 85:
          var maxHeapSize = 2147483648;
          return maxHeapSize / 16384;
        case 132:
        case 133:
        case 12:
        case 137:
        case 138:
        case 15:
        case 235:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 149:
        case 13:
        case 10:
        case 236:
        case 153:
        case 9:
        case 21:
        case 22:
        case 159:
        case 154:
        case 14:
        case 77:
        case 78:
        case 139:
        case 80:
        case 81:
        case 82:
        case 68:
        case 67:
        case 164:
        case 11:
        case 29:
        case 47:
        case 48:
        case 95:
        case 52:
        case 51:
        case 46:
        case 79:
          return 200809;
        case 27:
        case 246:
        case 127:
        case 128:
        case 23:
        case 24:
        case 160:
        case 161:
        case 181:
        case 182:
        case 242:
        case 183:
        case 184:
        case 243:
        case 244:
        case 245:
        case 165:
        case 178:
        case 179:
        case 49:
        case 50:
        case 168:
        case 169:
        case 175:
        case 170:
        case 171:
        case 172:
        case 97:
        case 76:
        case 32:
        case 173:
        case 35:
          return -1;
        case 176:
        case 177:
        case 7:
        case 155:
        case 8:
        case 157:
        case 125:
        case 126:
        case 92:
        case 93:
        case 129:
        case 130:
        case 131:
        case 94:
        case 91:
          return 1;
        case 74:
        case 60:
        case 69:
        case 70:
        case 4:
          return 1024;
        case 31:
        case 42:
        case 72:
          return 32;
        case 87:
        case 26:
        case 33:
          return 2147483647;
        case 34:
        case 1:
          return 47839;
        case 38:
        case 36:
          return 99;
        case 43:
        case 37:
          return 2048;
        case 0: return 2097152;
        case 3: return 65536;
        case 28: return 32768;
        case 44: return 32767;
        case 75: return 16384;
        case 39: return 1000;
        case 89: return 700;
        case 71: return 256;
        case 40: return 255;
        case 2: return 100;
        case 180: return 64;
        case 25: return 20;
        case 5: return 16;
        case 6: return 6;
        case 73: return 4;
        case 84: {
          if (typeof navigator === 'object') return navigator['hardwareConcurrency'] || 1;
          return 1;
        }
      }
      setErrNo(28);
      return -1;
    }

  function _time(ptr) {
      var ret = (Date.now()/1000)|0;
      if (ptr) {
        HEAP32[((ptr)>>2)]=ret;
      }
      return ret;
    }



  function _utime(path, times) {
      // int utime(const char *path, const struct utimbuf *times);
      // http://pubs.opengroup.org/onlinepubs/009695399/basedefs/utime.h.html
      var time;
      if (times) {
        // NOTE: We don't keep track of access timestamps.
        var offset = 4;
        time = HEAP32[(((times)+(offset))>>2)];
        time *= 1000;
      } else {
        time = Date.now();
      }
      path = UTF8ToString(path);
      try {
        FS.utime(path, time, time);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }

  function _utimes(path, times) {
      var time;
      if (times) {
        var offset = 8 + 0;
        time = HEAP32[(((times)+(offset))>>2)] * 1000;
        offset = 8 + 4;
        time += HEAP32[(((times)+(offset))>>2)] / 1000;
      } else {
        time = Date.now();
      }
      path = UTF8ToString(path);
      try {
        FS.utime(path, time, time);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }

  var readAsmConstArgsArray=[];
  function readAsmConstArgs(sigPtr, buf) {
      readAsmConstArgsArray.length = 0;
      var ch;
      // Most arguments are i32s, so shift the buffer pointer so it is a plain
      // index into HEAP32.
      buf >>= 2;
      while (ch = HEAPU8[sigPtr++]) {
        // A double takes two 32-bit slots, and must also be aligned - the backend
        // will emit padding to avoid that.
        var double = ch < 105;
        if (double && (buf & 1)) buf++;
        readAsmConstArgsArray.push(double ? HEAPF64[buf++ >> 1] : HEAP32[buf]);
        ++buf;
      }
      return readAsmConstArgsArray;
    }

var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createDevice"] = FS.createDevice;Module["FS_unlink"] = FS.unlink;;
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}



__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });
var asmLibraryArg = { "__assert_fail": ___assert_fail, "__clock_gettime": ___clock_gettime, "__localtime_r": ___localtime_r, "__sys__newselect": ___sys__newselect, "__sys_access": ___sys_access, "__sys_chdir": ___sys_chdir, "__sys_chmod": ___sys_chmod, "__sys_chown32": ___sys_chown32, "__sys_dup": ___sys_dup, "__sys_dup2": ___sys_dup2, "__sys_fchmod": ___sys_fchmod, "__sys_fchown32": ___sys_fchown32, "__sys_fcntl64": ___sys_fcntl64, "__sys_fstat64": ___sys_fstat64, "__sys_ftruncate64": ___sys_ftruncate64, "__sys_getcwd": ___sys_getcwd, "__sys_getdents64": ___sys_getdents64, "__sys_geteuid32": ___sys_geteuid32, "__sys_getgid32": ___sys_getgid32, "__sys_getgroups32": ___sys_getgroups32, "__sys_getpid": ___sys_getpid, "__sys_getrusage": ___sys_getrusage, "__sys_getuid32": ___sys_getuid32, "__sys_ioctl": ___sys_ioctl, "__sys_lchown32": ___sys_lchown32, "__sys_link": ___sys_link, "__sys_lstat64": ___sys_lstat64, "__sys_madvise1": ___sys_madvise1, "__sys_mkdir": ___sys_mkdir, "__sys_mmap2": ___sys_mmap2, "__sys_munmap": ___sys_munmap, "__sys_nice": ___sys_nice, "__sys_open": ___sys_open, "__sys_pipe": ___sys_pipe, "__sys_poll": ___sys_poll, "__sys_read": ___sys_read, "__sys_readlink": ___sys_readlink, "__sys_rename": ___sys_rename, "__sys_rmdir": ___sys_rmdir, "__sys_socketcall": ___sys_socketcall, "__sys_stat64": ___sys_stat64, "__sys_statfs64": ___sys_statfs64, "__sys_symlink": ___sys_symlink, "__sys_umask": ___sys_umask, "__sys_uname": ___sys_uname, "__sys_unlink": ___sys_unlink, "__sys_wait4": ___sys_wait4, "_exit": __exit, "abort": _abort, "asctime_r": _asctime_r, "chroot": _chroot, "clock_gettime": _clock_gettime, "difftime": _difftime, "dlclose": _dlclose, "dlerror": _dlerror, "dlopen": _dlopen, "dlsym": _dlsym, "emscripten_asm_const_int": _emscripten_asm_const_int, "emscripten_longjmp": _emscripten_longjmp, "emscripten_longjmp_jmpbuf": _emscripten_longjmp_jmpbuf, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_resize_heap": _emscripten_resize_heap, "environ_get": _environ_get, "environ_sizes_get": _environ_sizes_get, "execve": _execve, "exit": _exit, "fd_close": _fd_close, "fd_fdstat_get": _fd_fdstat_get, "fd_read": _fd_read, "fd_seek": _fd_seek, "fd_sync": _fd_sync, "fd_write": _fd_write, "flock": _flock, "fork": _fork, "gai_strerror": _gai_strerror, "getTempRet0": _getTempRet0, "getaddrinfo": _getaddrinfo, "getdtablesize": _getdtablesize, "getgrnam": _getgrnam, "gethostbyaddr": _gethostbyaddr, "gethostbyname": _gethostbyname, "gethostbyname_r": _gethostbyname_r, "getloadavg": _getloadavg, "getnameinfo": _getnameinfo, "getprotobyname": _getprotobyname, "getprotobynumber": _getprotobynumber, "getpwnam": _getpwnam, "getpwuid": _getpwuid, "gettimeofday": _gettimeofday, "gmtime_r": _gmtime_r, "invoke_i": invoke_i, "invoke_ii": invoke_ii, "invoke_iii": invoke_iii, "invoke_iiii": invoke_iiii, "invoke_iiiii": invoke_iiiii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_v": invoke_v, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viidii": invoke_viidii, "invoke_viii": invoke_viii, "invoke_viiii": invoke_viiii, "invoke_viiiii": invoke_viiiii, "invoke_viiiiii": invoke_viiiiii, "kill": _kill, "localtime_r": _localtime_r, "memory": wasmMemory, "mktime": _mktime, "nanosleep": _nanosleep, "popen": _popen, "pthread_create": _pthread_create, "pthread_join": _pthread_join, "pthread_mutexattr_destroy": _pthread_mutexattr_destroy, "pthread_mutexattr_init": _pthread_mutexattr_init, "pthread_mutexattr_settype": _pthread_mutexattr_settype, "pthread_setcancelstate": _pthread_setcancelstate, "setTempRet0": _setTempRet0, "setitimer": _setitimer, "sigaction": _sigaction, "sigaddset": _sigaddset, "sigdelset": _sigdelset, "sigemptyset": _sigemptyset, "sigfillset": _sigfillset, "signal": _signal, "sigprocmask": _sigprocmask, "strftime": _strftime, "strptime": _strptime, "sysconf": _sysconf, "time": _time, "tzset": _tzset, "usleep": _usleep, "utime": _utime, "utimes": _utimes };
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
  return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _pib_init = Module["_pib_init"] = function() {
  return (_pib_init = Module["_pib_init"] = Module["asm"]["pib_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _php_embed_init = Module["_php_embed_init"] = function() {
  return (_php_embed_init = Module["_php_embed_init"] = Module["asm"]["php_embed_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _pib_exec = Module["_pib_exec"] = function() {
  return (_pib_exec = Module["_pib_exec"] = Module["asm"]["pib_exec"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = function() {
  return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _saveSetjmp = Module["_saveSetjmp"] = function() {
  return (_saveSetjmp = Module["_saveSetjmp"] = Module["asm"]["saveSetjmp"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _zend_eval_string = Module["_zend_eval_string"] = function() {
  return (_zend_eval_string = Module["_zend_eval_string"] = Module["asm"]["zend_eval_string"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _testSetjmp = Module["_testSetjmp"] = function() {
  return (_testSetjmp = Module["_testSetjmp"] = Module["asm"]["testSetjmp"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _free = Module["_free"] = function() {
  return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _pib_run = Module["_pib_run"] = function() {
  return (_pib_run = Module["_pib_run"] = Module["asm"]["pib_run"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _pib_destroy = Module["_pib_destroy"] = function() {
  return (_pib_destroy = Module["_pib_destroy"] = Module["asm"]["pib_destroy"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _php_embed_shutdown = Module["_php_embed_shutdown"] = function() {
  return (_php_embed_shutdown = Module["_php_embed_shutdown"] = Module["asm"]["php_embed_shutdown"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _pib_refresh = Module["_pib_refresh"] = function() {
  return (_pib_refresh = Module["_pib_refresh"] = Module["asm"]["pib_refresh"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _exec_callback = Module["_exec_callback"] = function() {
  return (_exec_callback = Module["_exec_callback"] = Module["asm"]["exec_callback"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _del_callback = Module["_del_callback"] = function() {
  return (_del_callback = Module["_del_callback"] = Module["asm"]["del_callback"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _main = Module["_main"] = function() {
  return (_main = Module["_main"] = Module["asm"]["main"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _memcpy = Module["_memcpy"] = function() {
  return (_memcpy = Module["_memcpy"] = Module["asm"]["memcpy"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _memset = Module["_memset"] = function() {
  return (_memset = Module["_memset"] = Module["asm"]["memset"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = function() {
  return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htonl = Module["_htonl"] = function() {
  return (_htonl = Module["_htonl"] = Module["asm"]["htonl"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ntohs = Module["_ntohs"] = function() {
  return (_ntohs = Module["_ntohs"] = Module["asm"]["ntohs"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htons = Module["_htons"] = function() {
  return (_htons = Module["_htons"] = Module["asm"]["htons"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _realloc = Module["_realloc"] = function() {
  return (_realloc = Module["_realloc"] = Module["asm"]["realloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __get_tzname = Module["__get_tzname"] = function() {
  return (__get_tzname = Module["__get_tzname"] = Module["asm"]["_get_tzname"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __get_daylight = Module["__get_daylight"] = function() {
  return (__get_daylight = Module["__get_daylight"] = Module["asm"]["_get_daylight"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __get_timezone = Module["__get_timezone"] = function() {
  return (__get_timezone = Module["__get_timezone"] = Module["asm"]["_get_timezone"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = function() {
  return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = function() {
  return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = function() {
  return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = function() {
  return (_setThrew = Module["_setThrew"] = Module["asm"]["setThrew"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _memalign = Module["_memalign"] = function() {
  return (_memalign = Module["_memalign"] = Module["asm"]["memalign"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = function() {
  return (_emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = Module["asm"]["emscripten_main_thread_process_queued_calls"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiij = Module["dynCall_iiiij"] = function() {
  return (dynCall_iiiij = Module["dynCall_iiiij"] = Module["asm"]["dynCall_iiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iij = Module["dynCall_iij"] = function() {
  return (dynCall_iij = Module["dynCall_iij"] = Module["asm"]["dynCall_iij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iijii = Module["dynCall_iijii"] = function() {
  return (dynCall_iijii = Module["dynCall_iijii"] = Module["asm"]["dynCall_iijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiji = Module["dynCall_iiji"] = function() {
  return (dynCall_iiji = Module["dynCall_iiji"] = Module["asm"]["dynCall_iiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiij = Module["dynCall_iiiiiij"] = function() {
  return (dynCall_iiiiiij = Module["dynCall_iiiiiij"] = Module["asm"]["dynCall_iiiiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiij = Module["dynCall_iiij"] = function() {
  return (dynCall_iiij = Module["dynCall_iiij"] = Module["asm"]["dynCall_iiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jii = Module["dynCall_jii"] = function() {
  return (dynCall_jii = Module["dynCall_jii"] = Module["asm"]["dynCall_jii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ji = Module["dynCall_ji"] = function() {
  return (dynCall_ji = Module["dynCall_ji"] = Module["asm"]["dynCall_ji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vij = Module["dynCall_vij"] = function() {
  return (dynCall_vij = Module["dynCall_vij"] = Module["asm"]["dynCall_vij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiijii = Module["dynCall_iiiiijii"] = function() {
  return (dynCall_iiiiijii = Module["dynCall_iiiiijii"] = Module["asm"]["dynCall_iiiiijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_j = Module["dynCall_j"] = function() {
  return (dynCall_j = Module["dynCall_j"] = Module["asm"]["dynCall_j"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jj = Module["dynCall_jj"] = function() {
  return (dynCall_jj = Module["dynCall_jj"] = Module["asm"]["dynCall_jj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiij = Module["dynCall_jiij"] = function() {
  return (dynCall_jiij = Module["dynCall_jiij"] = Module["asm"]["dynCall_jiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiji = Module["dynCall_iiiiji"] = function() {
  return (dynCall_iiiiji = Module["dynCall_iiiiji"] = Module["asm"]["dynCall_iiiiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiijii = Module["dynCall_iiiijii"] = function() {
  return (dynCall_iiiijii = Module["dynCall_iiiijii"] = Module["asm"]["dynCall_iiiijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ij = Module["dynCall_ij"] = function() {
  return (dynCall_ij = Module["dynCall_ij"] = Module["asm"]["dynCall_ij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiji = Module["dynCall_viiji"] = function() {
  return (dynCall_viiji = Module["dynCall_viiji"] = Module["asm"]["dynCall_viiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viijii = Module["dynCall_viijii"] = function() {
  return (dynCall_viijii = Module["dynCall_viijii"] = Module["asm"]["dynCall_viijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = function() {
  return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
};


function invoke_iiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_v(index) {
  var sp = stackSave();
  try {
    wasmTable.get(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_i(index) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viidii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}




// === Auto-generated postamble setup entry stuff ===



Module["ccall"] = ccall;





Module["UTF8ToString"] = UTF8ToString;


Module["lengthBytesUTF8"] = lengthBytesUTF8;









Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;

Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;

Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;





































































































































var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;


dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function callMain(args) {

  var entryFunction = Module['_main'];


  var argc = 0;
  var argv = 0;

  try {


    var ret = entryFunction(argc, argv);


    // In PROXY_TO_PTHREAD builds, we should never exit the runtime below, as execution is asynchronously handed
    // off to a pthread.
    // if we're not running an evented main loop, it's time to exit
      exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'unwind') {
      // running an evented main loop, don't immediately exit
      noExitRuntime = true;
      return;
    } else {
      var toLog = e;
      if (e && typeof e === 'object' && e.stack) {
        toLog = [e, e.stack];
      }
      err('exception thrown: ' + toLog);
      quit_(1, e);
    }
  } finally {
    calledMain = true;

  }
}




/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }


  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (shouldRunNow) callMain(args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;


/** @param {boolean|number=} implicit */
function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = false;

if (Module['noInitialRun']) shouldRunNow = false;


  noExitRuntime = true;

run();






// {{MODULE_ADDITIONS}}





  return PHP.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = PHP;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return PHP; });
    else if (typeof exports === 'object')
      exports["PHP"] = PHP;
    
