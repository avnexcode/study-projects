<?php
class Mahasiswa extends Controller
{

    public function index()
    {
        $data["header"] = "List Mahasiswa";
        $data["mhs"] = $this->model("Mahasiswa_model")->getAllData();
        $this->view("template/header", $data);
        $this->view("mahasiswa/index", $data);
        $this->view("template/footer");
    }

    public function detail($id)
    {
        $data["header"] = "Detail";
        $data["user"] = $this->model("Mahasiswa_model")->getDetailData($id);
        $this->view("template/header", $data);
        $this->view("mahasiswa/detail", $data);
        $this->view("template/footer");
    }

    public function insert()
    {
        $data["header"] = "INSERT DATA";
        $this->view("template/header", $data);
        $this->view("mahasiswa/insert");
        $this->view("template/footer");
    }

    public function insertData()
    {
        if ($this->model("Mahasiswa_model")->insertNewData($_POST) > 0) {
            Flasher::setFlash('Berhasil', 'Ditambahkan', 'success');
            header("Location: " . BASEURL . "/mahasiswa");
        } else {
            Flasher::setFlash('Gagal', 'Ditambahkan', 'danger');
            header("Location: " . BASEURL . "/mahasiswa");
        }
    }

    public function delete($id)
    {
        if ($this->model("Mahasiswa_model")->deleteData($id) > 0) {
            Flasher::setFlash("Berhasil", "Menghapus", "success");
            header("Location: " . BASEURL . "/mahasiswa");
        } else {
            Flasher::setFlash("Gagal", "Menghapus", "danger");
            header("Location: " . BASEURL . "/mahasiswa");
        }
    }
}
