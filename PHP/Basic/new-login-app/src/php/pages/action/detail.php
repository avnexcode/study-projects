<?php
session_start();
require("../../module/function.php");
sessionChecked("../login/login.php");

$id = $_GET["id"];
$data = fetchData("SELECT * FROM listdata WHERE id = '$id'")[0];

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
            border: 1px solid black;
        }
    </style>
    <title>Document</title>
</head>

<body>
    <ul>
        <img src="../../../../assets/img/<?= $data["image"] ?>" alt="noImage">
        <li>Username = <?= $data["username"] ?></li>
        <li>Email = <?= $data["email"] ?></li>
        <li>No. HP = <?= $data["nohp"] ?></li>
    </ul>
    <ul>
        <li><a href="../../../../public/index.php">Back</a></li>
        <li><a href="edit.php?id=<?= $data["id"] ?>">Edit</a></li>
        <li><a href="delete.php?id=<?= $data["id"] ?>">Delete</a></li>
    </ul>
</body>

</html>