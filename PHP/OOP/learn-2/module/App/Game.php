<?php
class Game extends Product implements InfoProduct
{
    private $size;

    public function __construct($name, $price, $stock, $size)
    {
        parent::__construct($name, $price, $stock);
        $this->size = $size;
    }

    public function getInfo()
    {
        return $this->size;
    }

    public function getInfoProduct()
    {
        return "Type : Game.<br>{$this->getData()}Size : {$this->getInfo()}.<br>";
    }
}
