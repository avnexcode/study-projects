<?php
session_start();
if (!isset($_SESSION["login"])) {
    header("Location: ../login/login.php");
    exit;
}
require("../../../module/module.php");
$id = $_GET["id"];
if (deleteData($id) > 0) {
    header("Location: ../../../index.php");
} else {
    echo "
    <script>
    alert('data gagal dihapus');
    </script>
    ";
}
