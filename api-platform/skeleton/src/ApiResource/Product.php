<?php
//declare(strict_types=1);
//
//namespace App\ApiResource;
//
//use ApiPlatform\Metadata\ApiResource;
//// A custom constraint.
//use App\Validator\Constraints\MinimalProperties;
//use Doctrine\ORM\Mapping as ORM;
//// Symfony's built-in constraints
//use Symfony\Component\Validator\Constraints as Assert;
//
///**
// * A product.
// */
//#[ORM\Entity]
//#[ApiResource]
//class Product
//{
//    #[ORM\Id, ORM\Column, ORM\GeneratedValue]
//    private ?int $id = null;
//
//    #[ORM\Column]
//    #[Assert\NotBlank]
//    public string $name;
//
//    /**
//     * @var string[] Describe the product
//     */
//    #[MinimalProperties]
//    #[ORM\Column(type: 'json')]
//    public $properties;
//}
//
