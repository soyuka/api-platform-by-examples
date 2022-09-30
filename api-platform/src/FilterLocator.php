<?php

namespace ApiPlatform\Standalone;

use Psr\Container\ContainerInterface;

final class FilterLocator implements ContainerInterface 
{
    private $filters = [];

    public function get($id) {
        return $this->filters[$id] ?? null;
    }

    public function has($id): bool {
        return isset($this->filter[$id]); 
    }
}

