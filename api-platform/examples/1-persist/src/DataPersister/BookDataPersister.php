<?php

namespace App\DataPersister;

use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use App\Model\Book;
use App\Persistence\BookMemory;

final class BookDataPersister implements DataPersisterInterface {
    private BookMemory $memory;
    public function __construct(BookMemory $memory) {
        $this->memory = $memory;
    }

    public function persist($data) {
        $this->memory->update($data->id, $data);
        return $data;
    }

    public function remove($data) {
        $this->memory->remove($data->id);
    }

    public function supports($data): bool
    {
        return $data instanceof Book;
    }
}

