<?php
class Product
{
    private $name, $release, $price, $stock;

    public function __construct($name = null, $release = 0, $price = 0, $stock = 0)
    {
        $this->name = $name;
        $this->release = $release;
        $this->price = $price;
        $this->stock = $stock;
    }

    public function getInfo()
    {
        return "Name : $this->name.<br>Release : $this->release.<br>Price : $this->price.<br>Ready Stock : $this->stock.<br>";
    }
}

class Game extends Product
{
    private $size;

    public function __construct($name, $release, $price, $stock, $size)
    {
        parent::__construct($name, $release, $price, $stock);
        $this->size = $size;
    }

    public function getInfo()
    {
        return "Type : Game.<br>" . parent::getInfo() . "Size : $this->size GB.<br>";
    }
}

class Action
{
    public function showDataGame($game)
    {
        return "{$game->getInfo()}";
    }
}
$product1 = new Game("Naruto", 2022, 125000, 15, 98);
$showProduct1 = new Action();
echo $showProduct1->showDataGame($product1);
