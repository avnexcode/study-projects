<?php
$connection = mysqli_connect("localhost", "root", "", "axnvee");

function alertMessage($mess)
{
    echo "
    <script>
    alert ('$mess');
    </script>
    ";
}

function redirect($path)
{
    header("Location: $path");
}

function throwAction($condition, $message, $path)
{
    if ($condition > 0) {
        alertMessage($message);
        redirect($path);
    } else {
        alertMessage($message);
    }
}

function fetchData($query)
{
    global $connection;
    $datas = [];
    $rows = mysqli_query($connection, $query);
    while ($data = mysqli_fetch_assoc($rows)) {
        $datas[] = $data;
    }
    return $datas;
}

function searchData($keyword)
{
    $result = fetchData("SELECT * FROM listdata WHERE username LIKE '%$keyword%' OR email LIKE '%$keyword%' OR nohp LIKE '%$keyword%' ORDER BY username ASC");
    return $result;
}



function loginForm($path)
{
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmAcc = fetchData("SELECT * FROM user WHERE email = '$email'");
    if ($confirmAcc) {
        if (password_verify($password, $confirmAcc[0]["password"])) {
            if (isset($_POST["remember"])) {
                setcookie("id", $confirmAcc[0]["id"], time() + 60);
                setcookie("key", hash("xxh3", $email), time() + 60);
            }

            $_SESSION["login"] = true;
            redirect($path);
            exit;
        } else {
            alertMessage('Maaf email atau password yang anda masukkan salah.');
        }
    } else {
        alertMessage('Maaf email atau password yang anda masukkan salah.');
    }
}

function deleteData($id)
{
    global $connection;
    mysqli_query($connection, "DELETE FROM listdata WHERE id = '$id'");
    return mysqli_affected_rows($connection);
}

function addData()
{
    global $connection;


    $username = htmlspecialchars($_POST["username"]);
    $email = htmlspecialchars($_POST["email"]);
    $nohp = htmlspecialchars($_POST["nohp"]);
    $duplicated = fetchData("SELECT * FROM listdata WHERE username = '$username' OR email = '$email' OR nohp = '$nohp'");

    $image = uploadImage();

    if (!$image) {
        return false;
    }
    if ($duplicated) {
        if (strtolower($username) === strtolower($duplicated[0]["username"])) {
            alertMessage("Username sudah tersedia.");
            return false;
        }
        if (strtolower($email) === strtolower($duplicated[0]["email"])) {
            alertMessage("Email sudah tersedia.");
            return false;
        }
        if ($nohp === $duplicated[0]["nohp"]) {
            alertMessage("No hp sudah tersedia.");
            return false;
        }
    }

    $query = "INSERT INTO listdata VALUES ('','$username', '$email','$nohp','$image')";
    mysqli_query($connection, $query);
    return mysqli_affected_rows($connection);
}

function uploadImage()
{
    $fileName = $_FILES["image"]["name"];
    $fileSize = $_FILES["image"]["size"];
    $fileTmp = $_FILES["image"]["tmp_name"];
    $fileError = $_FILES["image"]["error"];

    if ($fileError === 4) {
        alertMessage("Masukkan gambar");
        return false;
    }
    if ($fileSize > 10000000) {
        alertMessage("Ukuran gambar terlalu besar");
        return false;
    }

    $validFormat = ["jpg", "jpeg", "png"];
    $fileFormat = explode(".", $fileName);
    $imageFormat = strtolower(end($fileFormat));

    if (!in_array($imageFormat, $validFormat)) {
        alertMessage("Format file tidak sesuai");
        return false;
    }
    $imageName = uniqid() . "." . $imageFormat;
    move_uploaded_file($fileTmp, "../../../../assets/img/" . $imageName);
    return $imageName;
}

function editData()
{
    global $connection;
    $id = $_POST["id"];

    $oldUsername = $_POST["oldUsername"];
    $oldEmail = $_POST["oldEmail"];
    $oldNohp = $_POST["oldNohp"];
    $oldImage = $_POST["oldImage"];

    $username = $_POST["username"];
    $email = $_POST["email"];
    $nohp = $_POST["nohp"];

    if ($_FILES["image"]["error"] === 4) {
        $image = $oldImage;
    } else {
        $image = uploadImage();
    }

    $duplicated = fetchData("SELECT * FROM listdata WHERE username = '$username' OR email = '$email' OR nohp = '$nohp'");

    if ($duplicated) {
        if (strtolower($username) === strtolower($duplicated[0]["username"]) && $username !== $oldUsername) {
            alertMessage("Username sudah tersedia.");
            return false;
        }
        if (strtolower($email) === strtolower($duplicated[0]["email"]) && $email !== $oldEmail) {
            alertMessage("Email sudah tersedia.");
            return false;
        }
        if ($nohp === $duplicated[0]["nohp"] && $nohp !== $oldNohp) {
            alertMessage("No hp sudah tersedia.");
            return false;
        }
    }

    $query = "UPDATE listdata SET 
                username = '$username',
                email = '$email',
                nohp = '$nohp',
                image = '$image'
            WHERE id = '$id'
    ";
    mysqli_query($connection, $query);
    return mysqli_affected_rows($connection);
}

function signUp()
{
    global $connection;
    $email = stripslashes($_POST["email"]);
    $password = mysqli_real_escape_string($connection, $_POST["password"]);
    $confirmPass = mysqli_real_escape_string($connection, $_POST["confirmPassword"]);
    $duplicated = fetchData("SELECT * FROM user WHERE email = '$email'");

    if ($password !== $confirmPass) {
        alertMessage("Password is not match.");
        return false;
    }

    if ($duplicated) {
        if ($email === $duplicated[0]["email"]) {
            alertMessage("Email already exist");
            return false;
        }
    }
    $password = password_hash($password, PASSWORD_DEFAULT);
    $query = "INSERT INTO user VALUES ('','$email','$password')";
    mysqli_query($connection, $query);
    return mysqli_affected_rows($connection);
}

function sessionChecked($path)
{
    if (!isset($_SESSION["login"])) {
        redirect($path);
        exit;
    }
}

function pagination()
{
}
