<?php

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use ApiPlatform\State\ProviderInterface;

final class BookProvider implements ProviderInterface
{
    public function provide(Operation $operation, array $uriVariables = [], array $context = []): iterable|object|null
    {
        return null;
    }
}

final class BookProcessor implements ProcessorInterface
{
    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = [])
    {
    }
}

return [
    'providers' => [BookProvider::class => new BookProvider()],
    'processors' => [BookProcessor::class => new BookProcessor()],
    'resourcePaths' => [__DIR__ . '/ApiResource']
];
