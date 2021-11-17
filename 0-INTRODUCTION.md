# Introduction

API Platform is a REST (Representational state transfer) Framework. It is based on concepts written in [Roy Fiedling's thesis](https://www.ics.uci.edu/%7Efielding/pubs/dissertation/top.htm) and the [HTTP specification](https://httpwg.org/specs/rfc7231.html).

Through this guide we will dig deeper into understanding the REST architecture in correlation with API Platform. This guide requires basic knowledge in programming and uses the PHP programmation language.

## Terminology

### Resource

A Resource is the conceptual representation of a hypertext link. In the HTTP specification it is defined as:

> The target of an HTTP request is called a "resource". HTTP does not limit the nature of a resource; it merely defines an interface that might be used to interact with resources. Each resource is identified by a Uniform Resource Identifier (URI), as described in Section 2.7 of [RFC7230].

In API Platform usually we will declare a resource on a POPO (Plain Old PHP Object). We use the PHP 8 `#[ApiResource]` attribute on top of a PHP class, for example:

```
<?php

use ApiPlatform\Metadata\ApiResource;

#[ApiResource]
class Book {}
```

The `Book` class is declared as a resource. The `#[ApiResource]` attribute is a tool allowing to set the resource **metadata**. On top of PHP, it is also possible to define metadata using configuration formats like `xml` or `yaml`.
A resource, unless configured otherwise, associates HTTP operations that point to their representation.

### URI (Uniform Resource Identifier)

An [URI][uri-rfc] is a way to reach a resource. We usually use HTTP URLs (Uniform Resource Locator) in API Platform such as `https://localhost/books/1`. We also have paths such as `/books/1`. The URI is defined via an [URI template](uri-template), for example:

```
<?php

use ApiPlatform\Metadata\ApiResource;

#[ApiResource(uriTemplate: '/books/{id}')]
class Book {}
```

### Operation

An Operation is defined by an HTTP Verb (GET, POST, PUT, PATCH etc.). By default API Platform declares 6 operations:

- GET /books - the list of books
- POST /books - create a book
- GET /books/{id} - a single book
- DELETE /books/{id} - delete a book
- PUT /books/{id} - updates a book
- PATCH /books/{id} - partially updates a book

You can configure operations metadata using method attributes:

```
<?php

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;

#[ApiResource(operations: [
  new Get(uriTemplate: '/books')
])]
class Book {}
```

[definition-popo](./0-DEFINITIONS#definition-popo)
[uri-rfc](https://datatracker.ietf.org/doc/html/rfc3986)
[uri-template](https://datatracker.ietf.org/doc/html/rfc6570)
