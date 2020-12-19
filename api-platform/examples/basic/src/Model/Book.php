<?php

namespace App\Model;

use ApiPlatform\Core\Annotation\ApiResource;

#[ApiResource(description: "Hey PHP 8")]
class Book
{
    public string $id;
}
