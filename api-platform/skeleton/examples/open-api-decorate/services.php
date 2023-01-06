<?php
// config/services.php
namespace Symfony\Component\DependencyInjection\Loader\Configurator;

use App\OpenApi\OpenApiFactory;

return function(ContainerConfigurator $configurator) {
$services = $configurator->services();

    $services->set(\ApiPlatform\OpenApi\Factory\OpenApiFactory::class);
    $services->alias('api_platform.openapi.factory', \ApiPlatform\OpenApi\Factory\OpenApiFactory::class);

$services->set(OpenApiFactory::class)
    ->decorate(\ApiPlatform\OpenApi\Factory\OpenApiFactory::class)
    ->args([service('api_platform.openapi.factory')])
    ->autoconfigure(false)
;
    $services->alias('app.open_api.decorator', OpenApiFactory::class);

};