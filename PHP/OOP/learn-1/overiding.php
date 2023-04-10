<?php

class Product
{

    public $name,
        $release,
        $stock;

    public function __construct($name, $release, $stock)
    {
        $this->name = $name;
        $this->release = $release;
        $this->stock = $stock;
    }

    public function getData()
    {
        return
            "Name : $this->name,<br>
        Release Date : $this->release,<br>
        Ready Stock : $this->stock,<br>";
    }
}

class Comic extends Product
{
    public $page;

    public function __construct($name, $release, $stock, $page)
    {
        parent::__construct($name, $release, $stock);
        $this->page = $page;
    }

    public function getData()
    {
        return "Type : Comic,<br>" . parent::getData() .  "Total Page : $this->page,<br>" . "<hr><hr>";
    }
}


class Game extends Product
{
    public $size;
    public function __construct($name, $release, $stock, $size)
    {
        parent::__construct($name, $release, $stock);
        $this->size = $size;
    }
    public function getData()
    {
        return "Type : Game,<br>" . parent::getData() . "Size : $this->size GB,<br>" . "<hr><hr>";
    }
}

class Action
{
    public function showDataComic(Comic $product)
    {
        return "{$product->getData()}";
    }
    public function showDataGame(Game $product)
    {
        return "{$product->getData()}";
    }
}


$naruto = new Comic("Naruto", 2022, 14, 215);
$gta5 = new Game("GTA V", 2015, 10, 98);

$showNaruto = new Action();
echo $showNaruto->showDataComic($naruto);
$showGta5 = new Action();
echo $showGta5->showDataGame($gta5);
