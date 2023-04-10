<?php
class Product
{
    private $name, $price, $stock;
    protected function __construct($name, $price, $stock)
    {
        $this->name = $name;
        $this->price = $price;
        $this->stock = $stock;
    }
    public function getInfo()
    {
        return "Name : $this->name.<br>Price : $this->price.<br>Stock : $this->stock.<br>";
    }
    // getter function
    public function  getName()
    {
        return "$this->name";
    }
    public function getPrice()
    {
        return "$this->price";
    }
    public function getStock()
    {
        return "$this->stock";
    }
    //setter function
    public function setName($name)
    {
        $this->name = $name;
    }
    public function setPrice($price)
    {
        $this->price = $price;
    }
    public function setStock($stock)
    {
        $this->stock = $stock;
    }
}

class Comic extends Product
{
    private $page;
    public function __construct($name, $price, $stock, $page)
    {
        parent::__construct($name, $price, $stock);
        $this->page = $page;
    }
    public function getInfo()
    {
        return "Type : Comic.<br>" . parent::getInfo() . "Page : $this->page.<br>";
    }
}

class Action
{
    private static $datas = [];
    public static function getData($rows)
    {
        self::$datas[] = $rows;
    }
    public static function getDetail()
    {
        foreach (self::$datas as $data) {
            echo "$data<hr><hr><hr>";
        }
    }
}

$naruto = new Comic("Naruto", 235000, 112, 225);
$onePiece = new Comic("One Piece", 12500, 12, 1225);
$naruto->setName("Naruto 2022");
Action::getData($naruto->getInfo());
Action::getData($onePiece->getInfo());
echo Action::getDetail();
echo $naruto->getName();
