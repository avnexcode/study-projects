<?php
session_start();
require("../../module/function.php");
sessionChecked("../login/login.php");

if (deleteData($_GET["id"]) > 0) {
    alertMessage("Data berhasil dihapus.");
    redirect("../../../../public/index.php");
} else {
    alertMessage("Data gagal dihapus");
}
