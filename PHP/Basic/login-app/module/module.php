<?php
$conn = mysqli_connect("localhost", "root", "", "axnvee");

function fetchingData($query)
{
    global $conn;
    $data = [];
    $response = mysqli_query($conn, $query);
    while ($rows = mysqli_fetch_assoc($response)) {
        $data[] = $rows;
    }
    return $data;
}

function signUp()
{
    global $conn;
    $email = stripslashes($_POST["email"]);
    $password = mysqli_real_escape_string($conn, $_POST["password"]);
    $confirmPass = mysqli_real_escape_string($conn, $_POST["confirmPassword"]);
    $readyAcc = fetchingData("SELECT * FROM user WHERE email = '$email'");
    if ($password !== $confirmPass) {
        echo "
        <script>
        alert('password tidak sesuai');
        </script>
        ";
        return false;
    }
    if ($readyAcc) {
        if ($email === $readyAcc[0]["email"]) {
            echo "
            <script>
            alert('Email sudah terdaftar');
            </script>
            ";
            return false;
        }
    }
    $password = password_hash($password, PASSWORD_DEFAULT);
    $query = "INSERT INTO user VALUES ('','$email','$password')";
    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

function addData()
{
    global $conn;
    $username = htmlspecialchars($_POST["username"]);
    $email = htmlspecialchars($_POST["email"]);
    $nohp = htmlspecialchars($_POST["nohp"]);
    $duplicated = fetchingData("SELECT * FROM listdata WHERE username = '$username' OR email = '$email' OR nohp = '$nohp'");
    if ($duplicated) {
        if (strtolower($username) === strtolower($duplicated[0]["username"])) {
            echo "
            <script>
            alert('username sudah terdaftar');
            </script>
            ";
            return false;
        }
        if (strtolower($email) === strtolower($duplicated[0]["email"])) {
            echo "
            <script>
            alert('email sudah terdaftar');
            </script>
            ";
            return false;
        }
        if ($nohp === $duplicated[0]["nohp"]) {
            echo "
            <script>
            alert('no hp sudah terdaftar');
            </script>
            ";
            return false;
        }
    }
    $image = uploadImage();
    if (!$image) {
        return false;
    }
    $query = "INSERT INTO listdata VALUES ('', '$username','$email','$nohp', '$image')";
    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

function uploadImage()
{
    $fileName = $_FILES["image"]["name"];
    $fileTmp = $_FILES["image"]["tmp_name"];
    $fileSize = $_FILES["image"]["size"];
    $error = $_FILES["image"]["error"];

    if ($error === 4) {
        echo "
        <script>
        alert('masukkan gambar');
        </script>
        ";
        return false;
    }

    if ($fileSize > 10000000) {
        echo "
        <script>
        alert('ukuran file terlalu besar');
        </script>
        ";
        return false;
    }

    $formatValid = ["jpg", "jpeg", "png"];
    $formatFile = explode(".", $fileName);
    $imageFormat = strtolower(end($formatFile));
    if (!in_array($imageFormat, $formatValid)) {
        echo "
        <script>
        alert('masukkan file yang sesuai');
        </script>
        ";
    }

    $imageName = uniqid() . "." . $imageFormat;
    move_uploaded_file($fileTmp, "../../../assets/img/" . $imageName);
    return $imageName;
}

function deleteData($id)
{
    global $conn;
    mysqli_query($conn, "DELETE FROM listdata WHERE id = '$id'");
    return mysqli_affected_rows($conn);
}

function editData()
{
    global $conn;
    $id =  htmlspecialchars($_POST["id"]);
    $username =  htmlspecialchars($_POST["username"]);
    $email = htmlspecialchars($_POST["email"]);
    $nohp = htmlspecialchars($_POST["nohp"]);

    $oldUsername = $_POST["oldUsername"];
    $oldEmail = $_POST["oldEmail"];
    $oldNohp = $_POST["oldNohp"];
    $oldImage = $_POST["oldImage"];

    $duplicated = fetchingData("SELECT * FROM listdata WHERE username = '$username' OR email = '$email' OR nohp = '$nohp'");

    if ($duplicated) {
        if ($username !== $oldUsername && strtolower($username) === strtolower($duplicated[0]["username"])) {
            echo "
            <script>
            alert('username sudah terdaftar');
            </script>
            ";
            return false;
        }
        if ($email !== $oldEmail && strtolower($email) === strtolower($duplicated[0]["email"])) {
            echo "
            <script>
            alert('email sudah terdaftar');
            </script>
            ";
            return false;
        }
        if ($nohp !== $oldNohp && $nohp = $duplicated[0]["nohp"]) {
            echo "
            <script>
            alert('no hp sudah terdaftar');
            </script>
            ";
            return false;
        }
    }

    if ($_FILES["image"]["error"] === 4) {
        $image = $oldImage;
    } else {
        $image = uploadImage();
    }
    $query = "UPDATE listdata SET 
        username = '$username',
        email = '$email',
        nohp = '$nohp',
        image = '$image'
    WHERE id = $id
    ";

    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

function searchData($keyword)
{
    $data = fetchingData("SELECT * FROM listdata WHERE 
    username LIKE '%$keyword%' OR 
    email LIKE '%$keyword%' OR 
    nohp LIKE '%$keyword%'
    ");
    return $data;
}
