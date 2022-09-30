<?php

namespace App\ApiResource;

use ApiPlatform\Metadata\ApiResource;
use App\State\BookProvider;
use App\State\BookProcessor;

#[ApiResource(provider: BookProvider::class, processor: BookProcessor::class)]
class Book
{
    public string $id;
}
