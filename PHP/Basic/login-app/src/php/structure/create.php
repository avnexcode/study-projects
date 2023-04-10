<?php
session_start();
if (!$_SESSION["login"]) {
    header("Location: ../login/login.php");
    exit;
}
require("../../../module/module.php");
if (isset($_POST["submit"])) {
    if (addData() > 0) {
        header("Location: ../../../index.php");
    } else {
        echo "
        <script>
        alert('data gagal ditambahkan');
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
    <title>Document</title>
</head>

<body>
    <section>
        <div>
            <form action="" method="post" enctype="multipart/form-data">
                <ul>
                    <li>
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" autofocus required>
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required>
                    </li>
                    <li>
                        <label for="nohp">No. HP</label>
                        <input type="text" name="nohp" id="nohp" required>
                    </li>
                    <li>
                        <label for="image">Profile</label>
                        <input type="file" name="image" id="image">
                    </li>
                    <li>
                        <button type="submit" name="submit">Add</button>
                    </li>
                </ul>
            </form>
        </div>
        <div>
            <a href="../../../index.php">Back to list data</a>
        </div>
    </section>
</body>

</html>