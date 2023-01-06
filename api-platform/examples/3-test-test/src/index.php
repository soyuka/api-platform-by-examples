<?php

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use ApiPlatform\State\ProviderInterface;

final class Provider implements ProviderInterface
{
    public function provide(Operation $operation, array $uriVariables = [], array $context = []): iterable|object|null
    {
        return null;
    }
}

final class Processor implements ProcessorInterface {

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        if ($data instanceof \App\Entity\Product) {
            $data->name = "processed";
        }
        return $data;
    }
}

return [
    'providers' => [Provider::class => new Provider()],
    'processors' => [Processor::class => new Processor()],
    'resourcePaths' => [__DIR__ . '/Entity', __DIR__ . '/Validator']
];
