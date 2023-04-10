<?php
session_start();
require("../../module/function.php");
sessionChecked("../login/login.php");

$id = $_GET["id"];
$data = fetchData("SELECT * FROM listdata WHERE id = '$id'")[0];

if (isset($_POST["update"])) {
    if (editData() > 0) {
        alertMessage("Data berhasil di ubah.");
        redirect("../../../../public/index.php");
    } else {
        alertMessage("Data gagal diubah.");
    }
}

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
        }
    </style>
    <title>Document</title>
</head>

<body>
    <form action="" method="post" enctype="multipart/form-data">

        <input type="hidden" name="id" value="<?= $data["id"] ?>">
        <input type="hidden" name="oldUsername" value="<?= $data["username"] ?>">
        <input type="hidden" name="oldEmail" value="<?= $data["email"] ?>">
        <input type="hidden" name="oldNohp" value="<?= $data["nohp"] ?>">
        <input type="hidden" name="oldImage" value="<?= $data["image"] ?>">

        <ul>
            <li>
                <label for="username">Username :</label>
                <input type="text" name="username" id="username" autofocus value="<?= $data["username"] ?>">
            </li>
            <li>
                <label for="email">Email :</label>
                <input type="email" name="email" id="email" autofocus value="<?= $data["email"] ?>">
            </li>
            <li>
                <label for="nohp">No. HP :</label>
                <input type="text" name="nohp" id="nohp" autofocus value="<?= $data["nohp"] ?>">
            </li>
            <li>
                <label for="image">Profile</label>
                <img src="../../../../assets/img/<?= $data["image"] ?>" alt="noImage">
                <input type="file" name="image" id="image">
            </li>
            <li>
                <button type="submit" name="update">Update</button>
            </li>
        </ul>
    </form>

    <ul>
        <li><a href="detail.php?id=<?= $data["id"] ?>">Back</a></li>
    </ul>
</body>

</html>