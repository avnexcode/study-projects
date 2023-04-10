<?php
interface InfoProduct
{
    public function getInfo();
}

abstract class Product
{
    private $name, $price, $stock;

    public function __construct($name, $price, $stock)
    {
        $this->name = $name;
        $this->price = $price;
        $this->stock = $stock;
    }
    abstract function getInfoProduct();
    public function getData()
    {
    }
}

class Comic extends Product implements InfoProduct
{
    public function getInfo()
    {
    }
    public function getInfoProduct()
    {
    }
}

$naruto = new Comic("Naruto", 2325000, 123);
