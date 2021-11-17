<?php

namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\DenormalizedIdentifiersAwareItemDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;
use App\Model\Book;

final class BookDataProvider implements DenormalizedIdentifiersAwareItemDataProviderInterface, RestrictedDataProviderInterface, ContextAwareCollectionDataProviderInterface

{
    public function getCollection(string $resourceClass, string $operationName = null, array $context = [])
    {
        $book = new Book();
        $book->id = '1';
        // Add a second book!
        return [$book];
    }

    public function getItem(string $resourceClass, $identifiers, string $operationName = null, array $context = []) {
        $book = new Book();
        $book->id = $identifiers['id'];
        return $book;
    }

    public function supports(string $resourceClass, string $operationName = null, array $context = []): bool {
        return $resourceClass === Book::class;
    }
}

