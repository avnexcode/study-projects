<?php
require("../module/init.php");

// $uncharted = new Game("Uncharted", 125000, 12, 90);
// Action::setData($uncharted->getInfoProduct());
// echo Action::consoleData();

use app\service\Cetak;

new Cetak();

new app\product\Cetak();
