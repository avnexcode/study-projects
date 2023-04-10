<?php
abstract class Product
{
    private $name, $price, $stock;

    protected function __construct($name, $price, $stock)
    {
        $this->name = $name;
        $this->price = $price;
        $this->stock = $stock;
    }

    abstract public function getInfoProduct();

    public function getInfo()
    {
        return "Name : $this->name.<br>Price : $this->price.<br>Stock : $this->stock.<br>";
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

    public function getInfoProduct()
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
Action::getData($naruto->getInfoProduct());
Action::getData($onePiece->getInfoProduct());
echo Action::getDetail();
