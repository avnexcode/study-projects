<?php
session_start();
require("../../module/function.php");

if (isset($_POST["signup"])) {
    if (signUp() > 0) {
        alertMessage("Success Registration");
        redirect("login.php");
    } else {
        alertMessage("Gagal mendaftar");
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
            <form action="" method="post">
                <ul>
                    <li>
                        <label for="email">Email :</label>
                        <input type="email" name="email" id="email" autofocus>
                    </li>
                    <li>
                        <label for="password">Password :</label>
                        <input type="password" name="password" id="password">
                    </li>
                    <li>
                        <label for="confirmPassword">Confirm Password :</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" autofocus>
                    </li>
                    <li>
                        <button type="submit" name="signup">Sign Up</button>
                    </li>
                </ul>
            </form>
        </div>
        <ul>
            <li>
                <a href="login.php">Login</a>
            </li>
        </ul>
    </section>
</body>

</html>