<?php

namespace ApiPlatform\Standalone;

use ApiPlatform\Validator\ValidatorInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface as SymfonyValidatorInterface;

/**
 * Basically ApiPlatform\Symfony\Validator\Validator without container
 */
final class Validator implements ValidatorInterface
{
    public function __construct(private readonly SymfonyValidatorInterface $validator)
    {
    }

    public function validate($data, array $context = []): void
    {
        $validationGroups = $context['groups'] ?? null;

        if (\is_callable($validationGroups)) {
            $validationGroups = $validationGroups($data);
        }

        if (!$validationGroups instanceof GroupSequence) {
            $validationGroups = (array) $validationGroups;
        }

        $this->validator->validate($data, null, $validationGroups);
    }
}
