<?php
session_start();
if (!isset($_SESSION["login"])) {
    header("Location: ../login/login.php");
    exit;
}
require("../../../module/module.php");
$id = $_GET["id"];
$data = fetchingData("SELECT * FROM listdata WHERE id = $id")[0];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    </style>
    <title>Document</title>
</head>

<body>
    <ul>
        <img src="../../../assets/img/<?= $data["image"] ?>" alt="">
        <li><?= $data["username"] ?></li>
        <li><?= $data["email"] ?></li>
        <li><?= $data["nohp"] ?></li>
    </ul>
    <div>
        <a href="../structure/edit.php?id=<?= $data["id"] ?>">Edit</a>
        <a href="../structure/delete.php?id=<?= $data["id"] ?>">Delete</a>
        <a href="../../../index.php">Home</a>
    </div>
</body>

</html>