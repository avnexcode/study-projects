<?php
class Statis
{
    public static $number = 1;

    public static function getNumber()
    {
        return self::$number++ . "<br><hr>";
    }
}

class Action
{
    public function showData(Statis $data)
    {
        return "{$data::getNumber()}";
    }
}

echo Statis::getNumber();
echo Statis::getNumber();
echo Statis::getNumber();

$act1 = new Statis();
$act2 = new Statis();

$action1 = new Action();
$action2 = new Action();

echo $action1->showData($act1);
echo $action1->showData($act1);
echo $action1->showData($act1);

echo $action2->showData($act2);
echo $action2->showData($act2);
echo $action2->showData($act2);
