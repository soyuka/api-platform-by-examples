<?php 

use Symfony\Component\HttpFoundation\Request;

error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
ini_set('log_errors', 1);
chdir('/src/api-platform');

$autoloader = require './vendor/autoload.php';

class Kernel {
    public static $kernel;
    private $autoloader;
    public function __construct($autoloader)
    {
        $this->autoloader = $autoloader;
    }

    public function load($example)
    {
        if (static::$kernel) {
            return static::$kernel;
        }

        $this->autoloader->setPsr4('App\\', ['/src/api-platform/examples/'.$example.'/src']);
        $_SERVER['EXAMPLES'] = require('/src/api-platform/examples/'.$example.'/src/index.php');
        return [static::$kernel, $routes] = require './index.php';
    }
}

$kernel = new Kernel($autoloader);

$run = function(Request $request, string $example) use ($kernel) {
    [$kernel] = $kernel->load($example);
    $response = $kernel->handle($request);
    $response->send();
    $kernel->terminate($request, $response);
};

$getRoutes = function(string $example) use ($kernel) {
    [, $routes] = $kernel->load($example);

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
