<?php
session_start();
require("./module/module.php");
if (!isset($_SESSION["login"])) {
    header("Location: ./src/php/login/login.php ");
    exit;
}


$jumlahDataPerHalaman = 3;
$jumlahData = count(fetchingData("SELECT * FROM listdata"));
$jumlahHalaman = ceil($jumlahData / $jumlahDataPerHalaman);
if (isset($_GET["page"])) {
    $halamanAktif =  $_GET["page"];
} else {
    $halamanAktif = 1;
}
$indexDataAwal = ($jumlahDataPerHalaman * $halamanAktif) - $jumlahDataPerHalaman;
$datas = fetchingData("SELECT * FROM listData ORDER BY username ASC LIMIT 
$indexDataAwal,$jumlahDataPerHalaman");


if (isset($_POST["searchData"])) {
    $datas = searchData($_POST["keyword"]);
    $keyValue = $_POST["keyword"];
} else {
    $keyValue = "";
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/css/index.css">
    <style>
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    </style>
    <script src="./src/js/main.js" defer></script>
    <title>List Data</title>
</head>

<body>
    <h1>Hello World</h1>

    <div>
        <?php if ($halamanAktif > 1) : ?>
            <a href="?page=<?= $halamanAktif - 1 ?>">kiri</a>
        <?php endif; ?>

        <?php for ($i = 1; $i <= $jumlahHalaman; $i++) : ?>
            <?php if ($halamanAktif == $i) : ?>
                <a href="?page=<?= $i ?>" style="color:red;"><?= $i ?></a>
            <?php else : ?>
                <a href="?page=<?= $i ?>"><?= $i ?></a>
            <?php endif; ?>
        <?php endfor; ?>

        <?php if ($halamanAktif < $jumlahHalaman) : ?>
            <a href="?page=<?= $halamanAktif + 1 ?>">kanan</a>
        <?php endif; ?>
    </div>

    <form action="" method="post">
        <ul>
            <li>
                <input type="text" name="keyword" id="keyword" autofocus value="<?= $keyValue ?>">
                <button type="submit" name="searchData" id="searchButton">Search</button>
                <button type="submit" name="allData">All</button>
            </li>
        </ul>
    </form>
    <?php foreach ($datas as $data) : ?>
        <ul>
            <img src="./assets/img/<?= $data["image"] ?>" alt="noImage">
            <li><?= $data["username"] ?></li>
            <li><a href="./src/php/detail/detail.php?id=<?= $data["id"] ?>">Detail</a></li>
        </ul>
    <?php endforeach; ?>
    <div>
        <a href="./src/php/structure/create.php">Add Data</a>
    </div>
    <div>
        <a href="./src/php/login/logout.php">Logout</a>
    </div>
</body>

</html>