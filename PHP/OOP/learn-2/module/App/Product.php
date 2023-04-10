<?php

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
        return "Name : $this->name.<br>Price : $this->price.<br>Stock : $this->stock.<br>";
    }
}
