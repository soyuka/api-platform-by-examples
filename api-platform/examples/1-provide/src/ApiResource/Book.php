<?php

namespace App\ApiResource;

use ApiPlatform\Metadata\ApiResource;
use App\State\BookProvider;

#[ApiResource(provider: BookProvider::class)]
class Book
{
    public string $id;
}
