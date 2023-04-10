<?php
session_start();
if (!isset($_SESSION["login"])) {
    header("Location: ../login/login.php");
    exit;
}
require("../../../module/module.php");
$id = $_GET["id"];
$data = fetchingData("SELECT * FROM listdata WHERE id = '$id'")[0];
if (isset($_POST["update"])) {
    if (editData() > 0) {
        header("Location: ../../../index.php");
    } else {
        echo "
        <script>
        alert('data gagal di update');
        </script>
        ";
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
    <section>
        <div>
            <form action="" method="post" enctype="multipart/form-data">
                <input type="hidden" name="id" value="<?= $data["id"] ?>">
                <input type="hidden" name="oldUsername" value="<?= $data["username"] ?>">
                <input type="hidden" name="oldEmail" value="<?= $data["email"] ?>">
                <input type="hidden" name="oldNohp" value="<?= $data["nohp"] ?>">
                <input type="hidden" name="oldImage" value="<?= $data["image"] ?>">
                <ul>
                    <li>
                        <img src="../../../assets/img/<?= $data["image"] ?>" alt="noImage">
                        <label for="image">Profile</label>
                        <input type="file" name="image" id="image">
                    </li>
                    <li>
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" autofocus value="<?= $data["username"] ?>" autofocus>
                    </li>
                    <li>
                        <label for="email">email</label>
                        <input type="email" name="email" id="email" autofocus value="<?= $data["email"] ?>">
                    </li>
                    <li>
                        <label for="nohp">nohp</label>
                        <input type="text" name="nohp" id="nohp" autofocus value="<?= $data["nohp"] ?>">
                    </li>
                    <li>
                        <button type="submit" name="update">Update</button>
                    </li>
                </ul>
            </form>
        </div>
        <div>
            <ul>
                <li>
                    <a href="../detail/detail.php?id=<?= $data["id"] ?>">Back to detail</a>
                </li>
            </ul>
        </div>
    </section>
</body>

</html>