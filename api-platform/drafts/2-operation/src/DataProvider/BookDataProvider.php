<?php

namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\DenormalizedIdentifiersAwareItemDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;
use App\Model\Book;
use App\Persistence\BookMemory;

final class BookDataProvider implements DenormalizedIdentifiersAwareItemDataProviderInterface, RestrictedDataProviderInterface, ContextAwareCollectionDataProviderInterface

{
    private BookMemory $memory;
    public function __construct(BookMemory $memory) {
        $this->memory = $memory;
    }

    public function getCollection(string $resourceClass, string $operationName = null, array $context = [])
    {
        return $this->memory->getAll();
    }

    public function getItem(string $resourceClass, $identifiers, string $operationName = null, array $context = []) {
        return $this->memory->get($identifiers['id']);
    }

    public function supports(string $resourceClass, string $operationName = null, array $context = []): bool {
        return $resourceClass === Book::class;
    }
}

