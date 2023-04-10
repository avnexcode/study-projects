<?php
class ComicProduct
{
    public
        $title = null,
        $page = null,
        $price = null;

    public function showData()
    {
        return "
        title = $this->title,
        page = $this->page,
        price = $this->page,
        ";
    }
}

$naruto = new ComicProduct();
$naruto->title = "Naruto";
$naruto->page = 325;
$naruto->price = 1250000;
// var_dump($naruto);

$onePiece = new ComicProduct();
$onePiece->title = "ONE Piece";
$onePiece->page = 1000;
$onePiece->price = 325000;

// $onePiece->series = 1; //if you create this fucking shit you will create a new class item because in a class ComicProduct have no series item.

// var_dump($onePiece); 

echo $onePiece->showData();
echo $naruto->showData();
