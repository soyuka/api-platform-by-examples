<?php

namespace ApiPlatform\Standalone;

use ApiPlatform\Api\UrlGeneratorInterface as ApiUrlGeneratorInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class UrlGenerator implements ApiUrlGeneratorInterface
{
    public function __construct(private readonly UrlGeneratorInterface $generator)
    {
    }

    public function generate($name, $parameters = [], $referenceType = self::ABS_PATH): string
    {
        return $this->generator->generate($name, $parameters, $referenceType ?: self::ABS_PATH);
    }
}
