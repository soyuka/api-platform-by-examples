<?php 

use Symfony\Component\HttpFoundation\Request;

error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
ini_set('log_errors', 1);
chdir('/src/api-platform');

$autoloader = require './vendor/autoload.php';

class Kernel {
    public static $autoloader;
    public static $apiPlatform;
    private static $cache = [];

    public function __construct($autoloader) {
        self::$autoloader = $autoloader;

        if (!isset(self::$apiPlatform)) {
            self::$apiPlatform = require './index.php';
        }
    }

    public static function load($example)
    {
        if (isset(self::$cache[$example])) {
            return call_user_func_array(self::$apiPlatform, self::$cache[$example]);
        }

        self::$autoloader->setPsr4('App\\', [$example.'/src']);
        self::$cache[$example] = require($example.'/src/index.php');
        return call_user_func_array(self::$apiPlatform, self::$cache[$example]);
    }
}

$kernel = new Kernel($autoloader);

$run = function(Request $request, string $example) use ($kernel) {
    [$symfonyKernel] = $kernel::load($example);
    $response = $symfonyKernel->handle($request);
    $response->send();
    $symfonyKernel->terminate($request, $response);
};

$getRoutes = function(string $example) use ($kernel) {
    [, $routes] = $kernel::load($example);

    $paths = [];
    foreach($routes as $route) {
        if (0 === strpos($route->getPath(), '/{index}')) continue;
        if (0 === strpos($route->getPath(), '/contexts')) continue;
        $paths[] = [
            'path' => str_replace('.{_format}', '', $route->getPath()),
            'method' => $route->getMethods()[0] ?? 'GET'
        ];
    }

    return json_encode($paths);
};
