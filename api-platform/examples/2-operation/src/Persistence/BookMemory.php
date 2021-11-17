<?php

namespace App\Persistence;

use App\Model\Book;

final class BookMemory {
    private $memory = [];

    public function update($key, $data): Book 
    {
        return $this->memory[$key] = $data;
    }

    public function remove($key): void
    {
        unset($this->memory[$key]);
    }

    public function getAll(): array
    {
        return $this->memory;
    }

    public function get($key): Book
    {
        return $this->memory[$key];
    }
}
