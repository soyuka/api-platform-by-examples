<?php

require './vendor/autoload.php';

use ApiPlatform\Action\EntrypointAction;
use ApiPlatform\Action\ExceptionAction;
use ApiPlatform\Action\PlaceholderAction;
use ApiPlatform\Api\IdentifiersExtractor;
use ApiPlatform\Api\IdentifiersExtractorInterface;
use ApiPlatform\Api\OperationType;
use ApiPlatform\Api\ResourceClassResolver;
use ApiPlatform\Api\UrlGeneratorInterface as ApiUrlGeneratorInterface;
use ApiPlatform\Bridge\Symfony\Routing\RouteNameGenerator;
use ApiPlatform\Documentation\DocumentationInterface;
use ApiPlatform\Standalone\DocumentationAction;
use ApiPlatform\State\CallableProcessor;
use ApiPlatform\State\CallableProvider;
use ApiPlatform\State\Pagination\PaginationOptions;
use ApiPlatform\State\ProcessorInterface;
use ApiPlatform\Symfony\EventListener\AddFormatListener;
use ApiPlatform\Symfony\EventListener\DeserializeListener;
use ApiPlatform\Symfony\EventListener\ExceptionListener;
use ApiPlatform\Symfony\EventListener\ReadListener;
use ApiPlatform\Symfony\EventListener\WriteListener;
use ApiPlatform\Symfony\EventListener\RespondListener;
use ApiPlatform\Symfony\EventListener\SerializeListener;
use ApiPlatform\Hal\Serializer\CollectionNormalizer as HalCollectionNormalizer;
use ApiPlatform\Hal\Serializer\EntrypointNormalizer as HalEntrypointNormalizer;
use ApiPlatform\Hal\Serializer\ItemNormalizer as HalItemNormalizer;
use ApiPlatform\Hal\Serializer\ObjectNormalizer as HalObjectNormalizer;
use ApiPlatform\Hydra\EventListener\AddLinkHeaderListener;
use ApiPlatform\Hydra\Serializer\CollectionFiltersNormalizer;
use ApiPlatform\Hydra\Serializer\CollectionNormalizer as HydraCollectionNormalizer;
use ApiPlatform\Hydra\Serializer\ConstraintViolationListNormalizer as HydraConstraintViolationListNormalizer;
use ApiPlatform\Hydra\Serializer\DocumentationNormalizer as HydraDocumentationNormalizer;
use ApiPlatform\Hydra\Serializer\EntrypointNormalizer as HydraEntrypointNormalizer;
use ApiPlatform\Hydra\Serializer\ErrorNormalizer as HydraErrorNormalizer;
use ApiPlatform\Hydra\Serializer\PartialCollectionViewNormalizer;
use ApiPlatform\Identifier\IdentifierConverter;
use ApiPlatform\Identifier\Normalizer\IntegerDenormalizer;
use ApiPlatform\JsonLd\Action\ContextAction;
use ApiPlatform\JsonLd\Serializer\ItemNormalizer as JsonLdItemNormalizer;
use ApiPlatform\JsonLd\Serializer\ObjectNormalizer as JsonLdObjectNormalizer;
use ApiPlatform\JsonLd\ContextBuilder as JsonLdContextBuilder;
use ApiPlatform\JsonSchema\SchemaFactory;
use ApiPlatform\JsonSchema\TypeFactory;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\Property\Factory\AnnotationPropertyMetadataFactory;
use ApiPlatform\Metadata\Property\Factory\AttributePropertyMetadataFactory;
use ApiPlatform\Metadata\Property\Factory\InheritedPropertyMetadataFactory;
use ApiPlatform\Metadata\Property\Factory\InheritedPropertyNameCollectionFactory;
use ApiPlatform\Metadata\Property\Factory\PropertyInfoPropertyMetadataFactory;
use ApiPlatform\Metadata\Property\Factory\PropertyInfoPropertyNameCollectionFactory;
use ApiPlatform\Metadata\Property\Factory\SerializerPropertyMetadataFactory;
use ApiPlatform\Metadata\Resource\Factory\AnnotationResourceFilterMetadataFactory;
use ApiPlatform\Metadata\Resource\Factory\AnnotationResourceMetadataFactory;
use ApiPlatform\Metadata\Resource\Factory\AnnotationResourceNameCollectionFactory;
use ApiPlatform\Metadata\Resource\Factory\AttributesResourceMetadataCollectionFactory;
use ApiPlatform\Metadata\Resource\Factory\AttributesResourceNameCollectionFactory;
use ApiPlatform\Metadata\Resource\Factory\FormatsResourceMetadataCollectionFactory;
use ApiPlatform\Metadata\Resource\Factory\FormatsResourceMetadataFactory;
use ApiPlatform\Metadata\Resource\Factory\InputOutputResourceMetadataCollectionFactory;
use ApiPlatform\Metadata\Resource\Factory\InputOutputResourceMetadataFactory;
use ApiPlatform\Metadata\Resource\Factory\LinkFactory;
use ApiPlatform\Metadata\Resource\Factory\LinkResourceMetadataCollectionFactory;
use ApiPlatform\Metadata\Resource\Factory\NotExposedOperationResourceMetadataCollectionFactory;
use ApiPlatform\Metadata\Resource\Factory\OperationResourceMetadataFactory;
use ApiPlatform\Metadata\Resource\Factory\ResourceMetadataFactoryInterface;
use ApiPlatform\Metadata\Resource\Factory\ResourceNameCollectionFactoryInterface;
use ApiPlatform\Metadata\Resource\Factory\ShortNameResourceMetadataFactory;
use ApiPlatform\Metadata\Resource\Factory\UriTemplateResourceMetadataCollectionFactory;
use ApiPlatform\Metadata\Resource\ResourceMetadata;
use ApiPlatform\OpenApi\Factory\OpenApiFactory;
use ApiPlatform\OpenApi\Factory\OpenApiFactoryInterface;
use ApiPlatform\OpenApi\Options as OpenApiOptions;
use ApiPlatform\OpenApi\Serializer\OpenApiNormalizer;
use ApiPlatform\Operation\Factory\SubresourceOperationFactory;
use ApiPlatform\Operation\UnderscorePathSegmentNameGenerator;
use ApiPlatform\PathResolver\OperationPathResolver;
use ApiPlatform\PathResolver\OperationPathResolverInterface;
use ApiPlatform\Problem\Serializer\ConstraintViolationListNormalizer as ProblemConstraintViolationListNormalizer;
use ApiPlatform\Problem\Serializer\ErrorNormalizer;
use ApiPlatform\Serializer\ItemNormalizer;
use ApiPlatform\Serializer\JsonEncoder as JsonLdEncoder;
use ApiPlatform\Serializer\SerializerContextBuilder;
use ApiPlatform\Standalone\ApiLoader;
use ApiPlatform\Standalone\FilterLocator;
use ApiPlatform\Standalone\Router;
use ApiPlatform\Standalone\UrlGenerator as ApiUrlGenerator;
use ApiPlatform\Standalone\Validator;
use ApiPlatform\State\ProviderInterface;
use ApiPlatform\Symfony\EventListener\ValidateListener;
use ApiPlatform\Symfony\Routing\IriConverter;
use ApiPlatform\Symfony\Validator\EventListener\ValidationExceptionListener;
use Negotiation\Negotiator;
use Psr\Container\ContainerInterface;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Log\Logger;
use Symfony\Component\HttpKernel\Controller\ArgumentResolver;
use Symfony\Component\HttpKernel\Controller\ControllerResolver;
use Symfony\Component\HttpKernel\EventListener\ErrorListener;
use Symfony\Component\HttpKernel\EventListener\RouterListener;
use Symfony\Component\HttpKernel\HttpKernel;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\PropertyInfo\Extractor\PhpDocExtractor;
use Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor;
use Symfony\Component\PropertyInfo\PropertyInfoExtractor;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\Matcher\UrlMatcherInterface;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\NameConverter\MetadataAwareNameConverter;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Constraints\GroupSequence;
use Symfony\Component\Validator\Validation;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ArrayDenormalizer;
use Symfony\Component\Serializer\Normalizer\ConstraintViolationListNormalizer;
use Symfony\Component\Serializer\Normalizer\DataUriNormalizer;
use Symfony\Component\Serializer\Normalizer\DateIntervalNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeZoneNormalizer;
use Symfony\Component\Serializer\Normalizer\JsonSerializableNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\ProblemNormalizer;
use Symfony\Component\Serializer\Normalizer\UnwrappingDenormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Contracts\Service\ServiceLocatorTrait;

return function (array $providers, array $processors, $resourcePaths) {
    // TODO add some kind of ChainDataProvider in index.php and establish a link between api-platform.php ie how to do examples
    // [$dataProvider, $dataPersister, $modelPath] = $_SERVER['EXAMPLES'] ?? [[], [], []];
    // [$dataProvider, $dataPersister] = require_once './examples/basic/src/index.php';
    // ['providers' => $providers, 'processors' => $processors, 'resourcePaths' => $resourcePaths] = $_SERVER['EXAMPLES'];
    // ['providers' => $providers, 'processors' => $processors, 'resourcePaths' => $resourcePaths] = require_once './examples/0-dataprovider/src/index.php';

    $providerLocator = new class($providers) implements ContainerInterface {
        public function __construct(private readonly array $providers) {}
        public function get(string $id) { return $this->providers[$id]; }
        public function has(string $id): bool { return isset($this->providers[$id]); }
    };

    $processorLocator = new class($processors) implements ContainerInterface {
        public function __construct(private readonly array $processors) {}
        public function get(string $id) { return $this->processors[$id]; }
        public function has(string $id): bool { return isset($this->processors[$id]); }
    };

    $provider = \count($providers) === 1 ? current($providers) : new CallableProvider($providerLocator);
    $processor = \count($processors) === 1 ? current($processors) : new CallableProcessor($processorLocator);

    $debug = true;
    $defaultContext = [];
    $patchFormats = ['json' => ['application/merge-patch+json'], 'jsonapi' => ['application/vnd.api+json']];
    $formats = ['jsonld' => ['application/ld+json'], 'json' => ['application/json'], 'jsonapi' => ['application/vnd.api+json']];
    $errorFormats = [
        'jsonproblem' => ['application/problem+json'],
        'jsonld' => ['application/ld+json'],
        'jsonapi' => ['application/vnd.api+json']
    ];

    $configuration = [
        'collection' => [
            'pagination' => [
                'page_parameter_name' => 'page',
                'enabled_parameter_name' => 'pagination'
            ]
        ]
    ];

    $exceptionToStatus = [
        # The 4 following handlers are registered by default, keep those lines to prevent unexpected side effects
        \Symfony\Component\Serializer\Exception\ExceptionInterface::class => 400,
        \ApiPlatform\Exception\InvalidArgumentException::class => 400,
        \ApiPlatform\Exception\FilterValidationException::class => 400,
        \Doctrine\ORM\OptimisticLockException::class => 409,
    ];

    $logger = new Logger();
    $phpDocExtractor = new PhpDocExtractor();
    $reflectionExtractor = new ReflectionExtractor();

    $propertyInfo = new PropertyInfoExtractor(
        [$reflectionExtractor],
        [$phpDocExtractor, $reflectionExtractor],
        [$phpDocExtractor],
        [$reflectionExtractor],
        [$reflectionExtractor]
    );

    $pathSegmentNameGenerator = new UnderscorePathSegmentNameGenerator();
    $annotationLoader = new AnnotationLoader();
    $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(null));

    $filterLocator = new FilterLocator();

    $resourceNameCollectionFactory = new AttributesResourceNameCollectionFactory($resourcePaths);
    $resourceClassResolver = new ResourceClassResolver($resourceNameCollectionFactory);
    $propertyNameCollectionFactory = new PropertyInfoPropertyNameCollectionFactory($propertyInfo);

    $propertyMetadataFactory = new SerializerPropertyMetadataFactory($classMetadataFactory, new PropertyInfoPropertyMetadataFactory($propertyInfo, new AttributePropertyMetadataFactory()), $resourceClassResolver);


    $linkFactory = new LinkFactory($propertyNameCollectionFactory, $propertyMetadataFactory, $resourceClassResolver);

    $resourceMetadataCollectionFactory = new FormatsResourceMetadataCollectionFactory(new NotExposedOperationResourceMetadataCollectionFactory($linkFactory, new InputOutputResourceMetadataCollectionFactory(new LinkResourceMetadataCollectionFactory($linkFactory, new UriTemplateResourceMetadataCollectionFactory($linkFactory, $pathSegmentNameGenerator, new AttributesResourceMetadataCollectionFactory(null))))), $formats, $patchFormats);

    $validator = new Validator(Validation::createValidator());
    $validateListener = new ValidateListener($validator, $resourceMetadataCollectionFactory);

    $propertyAccessor = PropertyAccess::createPropertyAccessor();
    $identifiersExtractor = new IdentifiersExtractor($resourceMetadataCollectionFactory, $resourceClassResolver, $propertyNameCollectionFactory, $propertyMetadataFactory, $propertyAccessor);

    $apiLoader = new ApiLoader($resourceNameCollectionFactory, $resourceMetadataCollectionFactory, $formats);
    $routes = $apiLoader->load();

    $requestContext = new RequestContext();
    $matcher = new UrlMatcher($routes, $requestContext);
    $generator = new UrlGenerator($routes, $requestContext);

    $apiUrlGenerator = new ApiUrlGenerator($generator);

    $router = new Router($routes, $matcher, $generator, $requestContext);

    // $routeNameResolver = new RouteNameResolver($router);
    //
    // $identifierDenormalizers = [new IntegerDenormalizer()];
    // $identifierConverter = new IdentifierConverter($identifiersExtractor, $propertyMetadataFactory, $identifierDenormalizers, $resourceMetadataFactory);

    $iriConverter = new IriConverter($provider, $router, $identifiersExtractor, $resourceClassResolver, $resourceMetadataCollectionFactory/** , $uriVariablesConverter, $decorated */);

    $writeListener = new WriteListener($processor, $iriConverter, $resourceClassResolver, $resourceMetadataCollectionFactory, /** $uriVariablesConverter */);

    $serializerContextBuilder = new SerializerContextBuilder($resourceMetadataCollectionFactory);

    $objectNormalizer = new ObjectNormalizer();

    $nameConverter = new MetadataAwareNameConverter($classMetadataFactory);
    $jsonLdContextBuilder = new JsonLdContextBuilder($resourceNameCollectionFactory, $resourceMetadataCollectionFactory, $propertyNameCollectionFactory, $propertyMetadataFactory, $apiUrlGenerator);
    $jsonLdItemNormalizer = new JsonLdItemNormalizer($resourceMetadataCollectionFactory, $propertyNameCollectionFactory, $propertyMetadataFactory, $iriConverter, $resourceClassResolver, $jsonLdContextBuilder, $propertyAccessor, $nameConverter, $classMetadataFactory, $defaultContext, /** resource access checker **/ null);
    $jsonLdObjectNormalizer = new JsonLdObjectNormalizer($objectNormalizer, $iriConverter, $jsonLdContextBuilder);
    $jsonLdEncoder = new JsonLdEncoder('jsonld', new JsonEncoder());

    $problemConstraintViolationListNormalizer = new ProblemConstraintViolationListNormalizer([], $nameConverter, $defaultContext);

    $hydraCollectionNormalizer = new HydraCollectionNormalizer($jsonLdContextBuilder, $resourceClassResolver, $iriConverter, $resourceMetadataCollectionFactory, $defaultContext);
    $hydraPartialCollectionNormalizer = new PartialCollectionViewNormalizer($hydraCollectionNormalizer, $configuration['collection']['pagination']['page_parameter_name'], $configuration['collection']['pagination']['enabled_parameter_name'], $resourceMetadataCollectionFactory, $propertyAccessor);
    $hydraCollectionFiltersNormalizer = new CollectionFiltersNormalizer($hydraPartialCollectionNormalizer, $resourceMetadataCollectionFactory, $resourceClassResolver, $filterLocator);
    $hydraErrorNormalizer = new HydraErrorNormalizer($apiUrlGenerator, $debug, $defaultContext);
    $hydraEntrypointNormalizer = new HydraEntrypointNormalizer($resourceMetadataCollectionFactory, $iriConverter, $apiUrlGenerator);
    $hydraDocumentationNormalizer = new HydraDocumentationNormalizer($resourceMetadataCollectionFactory, $propertyNameCollectionFactory, $propertyMetadataFactory, $resourceClassResolver, $apiUrlGenerator, $nameConverter);
    $hydraConstraintViolationNormalizer = new HydraConstraintViolationListNormalizer($apiUrlGenerator, [], $nameConverter);

    $problemErrorNormalizer = new ErrorNormalizer($debug, $defaultContext);

    $itemNormalizer = new ItemNormalizer($propertyNameCollectionFactory, $propertyMetadataFactory, $iriConverter, $resourceClassResolver, $propertyAccessor, $nameConverter, $classMetadataFactory, $logger, $resourceMetadataCollectionFactory, /** resourceAccessChecker **/ null);

    $arrayDenormalizer = new ArrayDenormalizer();
    $problemNormalizer = new ProblemNormalizer($debug, $defaultContext);
    $jsonserializableNormalizer = new JsonSerializableNormalizer($classMetadataFactory, $nameConverter, $defaultContext);
    $dateTimeNormalizer = new DateTimeNormalizer($defaultContext);
    $dataUriNormalizer = new DataUriNormalizer();
    $dateIntervalNormalizer = new DateIntervalNormalizer($defaultContext);
    $dateTimeZoneNormalizer = new DateTimeZoneNormalizer();
    $constraintViolationListNormalizer = new ConstraintViolationListNormalizer($defaultContext, $nameConverter);
    $unwrappingDenormalizer = new UnwrappingDenormalizer($propertyAccessor);

    $halItemNormalizer = new HalItemNormalizer($propertyNameCollectionFactory, $propertyMetadataFactory, $iriConverter, $resourceClassResolver, $propertyAccessor, $nameConverter, $classMetadataFactory, $defaultContext, $resourceMetadataCollectionFactory, /** resourceAccessChecker **/ null);

    $halEntrypointNormalizer = new HalEntrypointNormalizer($resourceMetadataCollectionFactory, $iriConverter, $apiUrlGenerator);
    $halCollectionNormalizer = new HalCollectionNormalizer($resourceClassResolver, $configuration['collection']['pagination']['page_parameter_name'], $resourceMetadataCollectionFactory);
    $halObjectNormalizer = new HalObjectNormalizer($objectNormalizer, $iriConverter);

    $openApiNormalizer = new OpenApiNormalizer($objectNormalizer);

    $list = new \SplPriorityQueue();
    $list->insert($unwrappingDenormalizer, 1000);
    $list->insert($halItemNormalizer, -890);
    $list->insert($hydraConstraintViolationNormalizer, -780);
    $list->insert($hydraEntrypointNormalizer, -800);
    $list->insert($hydraErrorNormalizer, -800);
    $list->insert($hydraCollectionFiltersNormalizer, -800);
    $list->insert($halEntrypointNormalizer, -800);
    $list->insert($halCollectionNormalizer, -985);
    $list->insert($halObjectNormalizer, -995);
    $list->insert($jsonLdItemNormalizer, -890);
    $list->insert($problemConstraintViolationListNormalizer, -780);
    $list->insert($problemErrorNormalizer, -810);
    $list->insert($jsonLdObjectNormalizer, -995);
    $list->insert($constraintViolationListNormalizer, -915);
    $list->insert($arrayDenormalizer, -990);
    $list->insert($dateTimeZoneNormalizer, -915);
    $list->insert($dateIntervalNormalizer, -915);
    $list->insert($dataUriNormalizer, -920);
    $list->insert($dateTimeNormalizer, -910);
    $list->insert($jsonserializableNormalizer, -900);
    $list->insert($problemNormalizer, -890);
    $list->insert($objectNormalizer, -1000);
    $list->insert($itemNormalizer, -895);
    // $list->insert($uuidDenormalizer, -895); //todo ramsey uuid support ?
    $list->insert($openApiNormalizer, -780);

    /*
    * api_platform.jsonapi.normalizer.error                       -790       ApiPlatform\Core\JsonApi\Serializer\ErrorNormalizer
    * api_platform.jsonapi.normalizer.constraint_violation_list   -780       ApiPlatform\Core\JsonApi\Serializer\ConstraintViolationListNormalizer
    * api_platform.openapi.normalizer.api_gateway                 -780       ApiPlatform\Core\Swagger\Serializer\ApiGatewayNormalizer
    * api_platform.jsonapi.normalizer.entrypoint                  -800       ApiPlatform\Core\JsonApi\Serializer\EntrypointNormalizer
    * api_platform.jsonapi.normalizer.collection                  -985       ApiPlatform\Core\JsonApi\Serializer\CollectionNormalizer
    * api_platform.jsonapi.normalizer.item                        -890       ApiPlatform\Core\JsonApi\Serializer\ItemNormalizer
    * api_platform.jsonapi.normalizer.object                      -995       ApiPlatform\Core\JsonApi\Serializer\ObjectNormalizer
    */

    $encoders = [new JsonEncoder(), $jsonLdEncoder];
    $serializer = new Serializer(iterator_to_array($list), $encoders);

    $serializeListener = new SerializeListener($serializer, $serializerContextBuilder, $resourceMetadataCollectionFactory);
    $respondListener = new RespondListener($resourceMetadataCollectionFactory);
    $formatListener = new AddFormatListener(new Negotiator(), $resourceMetadataCollectionFactory, $formats);
    $readListener = new ReadListener($provider, $resourceMetadataCollectionFactory, $serializerContextBuilder, /**$uriVariablesConverter*/);
    $deserializeListener = new DeserializeListener($serializer, $serializerContextBuilder, $resourceMetadataCollectionFactory);
    $addLinkHeaderListener = new AddLinkHeaderListener($apiUrlGenerator);
    $validationExceptionListener = new ValidationExceptionListener($serializer, $errorFormats, $exceptionToStatus);

    $exceptionController = new ExceptionAction($serializer, $errorFormats, $exceptionToStatus);
    $exceptionListener = new ExceptionListener($exceptionController, $logger, $debug);

    $dispatcher = new EventDispatcher();
    $dispatcher->addSubscriber(new ErrorListener($exceptionController, $logger, $debug));
    $dispatcher->addSubscriber(new RouterListener($matcher, new RequestStack()));
    $dispatcher->addListener('kernel.view', [$validateListener, 'onKernelView'], 64);
    $dispatcher->addListener('kernel.view', [$writeListener, 'onKernelView'], 32);
    $dispatcher->addListener('kernel.view', [$serializeListener, 'onKernelView'], 16);
    // TODO: ApiPlatform\Core\EventListener\QueryParameterValidateListener, prio 16
    $dispatcher->addListener('kernel.view', [$respondListener, 'onKernelView'], 8);
    $dispatcher->addListener('kernel.request', [$formatListener, 'onKernelRequest'], 7);
    $dispatcher->addListener('kernel.request', [$readListener, 'onKernelRequest'], 4);
    $dispatcher->addListener('kernel.request', [$deserializeListener, 'onKernelRequest'], 2);
    $dispatcher->addListener('kernel.exception', [$validationExceptionListener, 'onKernelException'], 2);
    $dispatcher->addListener('kernel.exception', [$exceptionListener, 'onKernelException'], -96);
    $dispatcher->addListener('kernel.response', [$addLinkHeaderListener, 'onKernelResponse'], 2);

    /*
    * TODO:
    * api_platform.security.listener.request.deny_access     kernel.request      onSecurity                  3          ApiPlatform\Core\Security\EventListener\DenyAccessListener
    *   "                                                    kernel.request      onSecurityPostDenormalize   1
    * api_platform.swagger.listener.ui                       kernel.request      onKernelRequest                        ApiPlatform\Core\Bridge\Symfony\Bundle\EventListener\SwaggerUiListener
    * api_platform.http_cache.listener.response.configure    kernel.response     onKernelResponse            -1         ApiPlatform\Core\HttpCache\EventListener\AddHeadersListener
    */

    $paginationOptions = new PaginationOptions();
    $openApiOptions = new OpenApiOptions('API Platform');
    $jsonSchemaTypeFactory = new TypeFactory($resourceClassResolver);
    $jsonSchemaFactory = new SchemaFactory($jsonSchemaTypeFactory, $resourceMetadataCollectionFactory, $propertyNameCollectionFactory, $propertyMetadataFactory, $nameConverter, $resourceClassResolver);

    $openApiFactory = new OpenApiFactory($resourceNameCollectionFactory, $resourceMetadataCollectionFactory, $propertyNameCollectionFactory, $propertyMetadataFactory, $jsonSchemaFactory, $jsonSchemaTypeFactory, $filterLocator, $formats, $openApiOptions, $paginationOptions);
    $documentationAction = new DocumentationAction($openApiFactory);
    $routes->add('api_doc', new Route('/docs.{_format}', ['_controller' => $documentationAction, '_format' => 'json', '_api_respond' => true]));

    $entryPointAction = new EntrypointAction($resourceNameCollectionFactory);
    $routes->add('api_entrypoint', new Route('/{index}.{_format}', ['_controller' => $entryPointAction, '_format' => null, '_api_respond' => true, 'index' => 'index'], ['index' => 'index']));

    $contextAction = new ContextAction($jsonLdContextBuilder, $resourceNameCollectionFactory, $resourceMetadataCollectionFactory);
    $routes->add('api_jsonld_context', new Route('/contexts/{shortName}.{_format}', ['_controller' => $contextAction, '_format' => 'jsonld', '_api_respond' => true], ['shortName' => '.+']));

    $controllerResolver = new ControllerResolver();
    $argumentResolver = new ArgumentResolver();

    $kernel = new HttpKernel($dispatcher, $controllerResolver, new RequestStack(), $argumentResolver);

    // $request = Request::createFromGlobals();
    // $response = $kernel->handle($request);
    // $response->send();
    // $kernel->terminate($request, $response);
    return [$kernel, $routes];
};
