<?php
session_start();
require("../../module/function.php");
sessionChecked("../login/login.php");

if (isset($_POST["submit"])) {
    if (addData() > 0) {
        alertMessage("Berhasil menambahkan data");
        redirect("../../../../public/index.php");
    } else {
        alertMessage("Gagal menambahkan data");
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Tambah Data</h1>
    <form action="" method="post" enctype="multipart/form-data">
        <ul>
            <li>
                <label for="username">Username :</label>
                <input type="text" name="username" id="username" autofocus required>
            </li>
            <li>
                <label for="email">Email :</label>
                <input type="email" name="email" id="email" required>
            </li>
            <li>
                <label for="nohp">No. HP :</label>
                <input type="text" name="nohp" id="nohp" required>
            </li>
            <li>
                <label for="image">Profile :</label>
                <input type="file" name="image" id="image" required>
            </li>
            <li>
                <button type="submit" name="submit">Add</button>
            </li>
        </ul>
    </form>
    <ul>
        <li><a href="../../../../public/index.php">Home</a></li>
    </ul>
</body>

</html>