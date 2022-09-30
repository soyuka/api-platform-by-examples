<?php

use App\State\BookProvider;
use App\State\BookProcessor;

return [
    'providers' => [BookProvider::class => new BookProvider()],
    'processors' => [BookProcessor::class => new BookProcessor()],
    'resourcePaths' => [__DIR__ . '/ApiResource']
];
