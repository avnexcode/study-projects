<?php
require_once "../app/config/config.php";

spl_autoload_register(function ($any) {
    require __DIR__ . "/core/" . $any . ".php";
});
