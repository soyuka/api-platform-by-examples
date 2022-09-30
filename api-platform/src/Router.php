<?php

namespace ApiPlatform\Standalone;

use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\Matcher\UrlMatcherInterface;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\RouterInterface;

class Router implements RouterInterface 
{
    private $routes;
    private $context;
    private $matcher;
    private $generator;

    public function __construct(RouteCollection $routes, UrlMatcherInterface $matcher, UrlGeneratorInterface $generator, RequestContext $requestContext) 
    {
        $this->routes = $routes;
        $this->matcher = $matcher;
        $this->generator = $generator;
        $this->context = $requestContext;
    }

    public function getRouteCollection() {
        return $this->routes;
    }

    public function match(string $pathinfo): array {
        return $this->matcher->match($pathinfo);
    }

    public function setContext(RequestContext $context) {
        $this->context = $context;
    }

    public function getContext(): RequestContext {
        return $this->context;
    }

    public function generate(string $name, array $parameters = [], int $referenceType = self::ABSOLUTE_PATH): string {
        return $this->generator->generate($name, $parameters, $referenceType);
    }
}

