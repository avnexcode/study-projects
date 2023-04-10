<?php
session_start();
require("../src/php/module/function.php");

sessionChecked("../src/php/pages/login/login.php");
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../src/css/index.css">
    <style>
        .linkAktif {
            color: red;
        }
    </style>
    <title>List Data</title>
</head>

<body>
    <section id="list-data">

        <div class="container first-container">
            <form action="" method="post">
                <ul>
                    <li>
                        <input type="text" name="keyword">
                        <button type="submit" name="search">Search</button>
                        <button type="submit" name="allData">All</button>
                    </li>
                </ul>
            </form>
        </div>

        <?php
        $jumlahDataPerHalaman = 3;
        $jumlahData = count(fetchData("SELECT * FROM listdata"));
        $jumlahHalaman = ceil($jumlahData / $jumlahDataPerHalaman);
        if (isset($_GET["page"])) {
            $halamanAktif = $_GET["page"];
        } else {
            $halamanAktif = 1;
        }
        $indexAwalData = ($jumlahDataPerHalaman * $halamanAktif) - $jumlahDataPerHalaman;

        $datas = fetchData("SELECT * FROM listdata ORDER BY username ASC LIMIT $indexAwalData,$jumlahDataPerHalaman");

        if (isset($_POST["search"])) {
            $datas = searchData($_POST["keyword"]);
        } ?>

        <div>
            <?php if ($halamanAktif > 1) : ?>
                <a href="index.php?page=<?= $halamanAktif - 1 ?>">kiri</a>
            <?php endif; ?>

            <?php for ($i = 1; $i <= $jumlahHalaman; $i++) : ?>
                <?php if ($halamanAktif == $i) : ?>
                    <a href="index.php?page=<?= $i ?>" class="linkAktif"><?= $i ?></a>
                <?php else : ?>
                    <a href="index.php?page=<?= $i ?>"><?= $i ?></a>
                <?php endif; ?>
            <?php endfor; ?>

            <?php if ($halamanAktif <  $jumlahHalaman) : ?>
                <a href="index.php?page=<?= $halamanAktif + 1 ?>">kanan</a>
            <?php endif; ?>
        </div>

        <div class="container second-container">
            <?php foreach ($datas as $index => $data) : ?>
                <ul>
                    <li><?= $index + 1 ?></li>
                    <li><?= $data["username"] ?></li>
                    <li><a href="../src/php/pages/action/detail.php?id=<?= $data["id"] ?>">Detail</a></li>
                </ul>
            <?php endforeach; ?>
        </div>

        <div class="container third-container">
            <ul>
                <li><a href="../src/php/pages/create/create.php">Add Data</a></li>
                <li><a href="../src/php/pages/login/logout.php">Logout</a></li>
            </ul>
        </div>
    </section>
</body>

</html>