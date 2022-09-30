<?php

namespace ApiPlatform\Standalone;

use ApiPlatform\Documentation\DocumentationInterface;
use ApiPlatform\OpenApi\Factory\OpenApiFactoryInterface;
use Symfony\Component\HttpFoundation\Request;

final class DocumentationAction
{
    private $openApiFactory;
    public function __construct(OpenApiFactoryInterface $openApiFactory)
    {
        $this->openApiFactory = $openApiFactory;
    }

    public function __invoke(Request $request): DocumentationInterface
    {
        $context = ['base_url' => $request->getBaseUrl(), 'spec_version' => 3];
        if ($request->query->getBoolean('api_gateway')) {
            $context['api_gateway'] = true;
        }

        return $this->openApiFactory->__invoke($context);
    }
}

