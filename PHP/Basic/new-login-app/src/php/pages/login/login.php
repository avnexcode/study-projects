<?php
session_start();
require("../../module/function.php");

if (isset($_COOKIE["id"]) && isset($_COOKIE["key"])) {
    $id = $_COOKIE["id"];
    $key = $_COOKIE["key"];
    if ($key === hash("xxh3", fetchData("SELECT * FROM user WHERE id = '$id'")[0]["email"])) {
        $_SESSION["login"] = "true";
    }
}
if (isset($_SESSION["login"])) {
    if ($_SESSION["login"] === "true") {
        redirect('../../../../public/index.php');
        exit;
    }
}
if (isset($_POST["login"])) {
    loginForm("../../../../public/index.php");
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
            <form action="" method="post">
                <li>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" autofocus>
                </li>
                <li>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password">
                </li>
                <li>
                    <input type="checkbox" name="remember" id="remember">
                    <label for="remember">Remember Me</label>
                </li>
                <li>
                    <button type="submit" name="login">Login</button>
                </li>
            </form>
            <ul>
                <li>
                    <a href="signup.php">Sign Up</a>
                </li>
            </ul>
        </div>
    </section>
</body>

</html>