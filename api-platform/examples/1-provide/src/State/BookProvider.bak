<?php

namespace App\State;

use ApiPlatform\Metadata\CollectionOperationInterface;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\ApiResource\Book;

/**
 * The BookProvider is where we retrieve the data in our persistence layer. 
 * For now it resides in memory.
 *
 * We configured API Platform to look here using the "provider" option of the 
 * ApiResource attribute:
 *
 *   #[ApiResource(provider: BookProvider::class)]
 *
 * Add a second book and send a request to the `GET /books` operation.
 */
final class BookProvider implements ProviderInterface
{
    public function provide(Operation $operation, array $uriVariables = [], array $context = []): iterable|object|null
    {
        if ($operation instanceof CollectionOperationInterface) {
            $book = new Book();
            $book->id = '1';
            // Add a second book!
            return [$book];
        }

        $book = new Book();
        $book->id = $uriVariables['id'];
        return $book;
    }
}
