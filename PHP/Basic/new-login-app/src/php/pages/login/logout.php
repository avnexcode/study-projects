<?php
session_start();
session_unset();
$_SESSION = [];
setcookie("id", "");
setcookie("key", "");
session_destroy();
header("Location: login.php");
