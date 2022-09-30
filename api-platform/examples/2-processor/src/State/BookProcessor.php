<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\ApiResource\Book;

/**
 * A Processor is a service that is called for write operations.
 * A write operation is usually implemented using the POST, PATCH or PUT method.
 * Here you can persist the data to a database, send an email or trigger
 * an asynchronous job.
 *
 * For now we're just returning the data we received. Try to update the book here
 * and send a POST request.
 */
final class BookProcessor implements ProcessorInterface
{
    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        // Change the property title of the book!
        $data->id = 2;
        return $data;
    }
}

