<?php
// require_once("App/InfoProduct.php");
// require_once("App/Product.php");
// require_once("App/Game.php");
// require_once("App/Action.php");
// require_once("App/Product/Cetak.php");
// require_once("App/Service/Cetak.php");

// spl_autoload_register(function ($any) {
//     require_once("App/" . $any . ".php");
// });

// spl_autoload_register(function ($any) {
//     require_once(__DIR__ . "/App/" . $any . ".php");
// });

// spl_autoload_register(function ($any) {
//     require_once("App/$any.php");
//     require_once("App/Product/$any.php");
//     require_once("App/Service/$any.php");
// });

spl_autoload_register(function ($any) {
    $any = explode("\\", $any);
    $any = end($any);
    require_once __DIR__ . "/App/Product/" . $any . ".php";
    // require_once __DIR__ . "/App/Service/" . $any . ".php";
});

spl_autoload_register(function ($any) {
    $any = explode("\\", $any);
    $any = end($any);
    require_once __DIR__ . "/App/Service/" . $any . ".php";
});
