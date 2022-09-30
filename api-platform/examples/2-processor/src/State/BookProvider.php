<?php

namespace App\State;

use ApiPlatform\Metadata\CollectionOperationInterface;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\ApiResource\Book;

final class BookProvider implements ProviderInterface
{
    public function provide(Operation $operation, array $uriVariables = [], array $context = []): iterable|object|null
    {
        if ($operation instanceof CollectionOperationInterface) {
            $book = new Book();
            $book->id = '1';
            $book2 = new Book();
            $book2->id = '2';
            return [$book, $book2];
        }

        $book = new Book();
        $book->id = $uriVariables['id'];
        return $book;
    }
}
