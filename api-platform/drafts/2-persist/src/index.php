<?php

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\State\BookProvider;

class BookProcessor implements ProcessorInterface
{
    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = [])
    {
    }
}

return [
    'providers' => [BookProvider::class => new BookProvider()],
    'processors' => [BookProcessor::class => new BookProcessor()],
    'resourcePaths' => [__DIR__ . '/Model']
];
