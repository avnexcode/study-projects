<?php
class Product
{
    public
        $type = null,
        $title = null,
        $release = 0,
        $stock = 0,
        $halaman = 0,
        $size = 0;


    public function __construct($type, $title, $release, $stock, $halaman, $size)
    {
        $this->title = $title;
        $this->release = $release;
        $this->stock = $stock;
        $this->type = $type;
        $this->halaman = $halaman;
        $this->size = $size;
    }

    public function getData()
    {
        return "
        Judul : {$this->title},<br>
        Tahun rilis : {$this->release},<br>
        Stock : {$this->stock},<br>";
    }
}

class Comic extends Product
{
    public $comicStock = false;

    public function getTopDetail()
    {
        return "
        Jenis : $this->type,<br>";
    }

    public function getBottomDetail()
    {
        $this->comicStock = true;
        return "
        Halaman : $this->halaman halaman,<br>Comic Stock : {$this->comicStock},<br>";
    }
}

class Game extends Product
{
    public $gameStock = false;

    public function getTopDetail()
    {
        return "Jenis : $this->type<br>";
    }

    public function getBottomDetail()
    {
        return "
        Ukuran : $this->size gb,<br>Game Stock : $this->gameStock";
    }
}

class Action
{
    public function showDataComic(Comic $data)
    {
        return "{$data->getTopDetail()}{$data->getData()}{$data->getBottomDetail()}<hr><hr>";
    }

    public function showDataGame(Game $data)
    {
        return "{$data->getTopDetail()}{$data->getData()}{$data->getBottomDetail()}<hr><hr>";
    }
}



$naruto = new Comic("Comic", "Naruto", 2022, 15, 234, 0);
$showNaruto = new Action();
echo $showNaruto->showDataComic($naruto);

$uncharted = new Game("Game", "Uncharted", 2018, 0, 0, 200);
$showUncharted = new Action();
echo $showUncharted->showDataGame($uncharted);
