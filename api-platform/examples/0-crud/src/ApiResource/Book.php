<?php

namespace App\ApiResource;

use ApiPlatform\Metadata\ApiResource;
use App\State\BookProvider;

/**
 * Welcome to API Platform. Your public API is represented through 
 * this PHP class. 
 *
 * The #[ApiResource] attribute declared on top registers this class 
 * as an HTTP resource in API Platform.
 *
 * By default, we have routes matching for creating, updating, deleting 
 * or reading books (CRUD). The current available routes are:
 *
 *   - GET /books to get a collection
 *   - GET /books/1 to get the Book who's identified by the number 1
 *   - POST /books to create a Book
 *   - PATCH /books/1 to update a Book 
 *   - DELETE /books/1 to delete a Book
 * 
 * You can try to run the routes by using the "Send" button.
 *
 * Select the next example to see how to hook a persistence layer.
 */
#[ApiResource]
class Book
{
    public string $id;
}
