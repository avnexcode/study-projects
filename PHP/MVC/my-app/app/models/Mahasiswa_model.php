<?php
class Mahasiswa_model
{
    private $db;
    public function __construct()
    {
        $this->db = new Databases;
    }

    public function getAllData()
    {
        $this->db->query("SELECT * FROM phpmvc");
        return $this->db->resultSet();
    }

    public function getDetailData($id)
    {
        $this->db->query("SELECT * FROM phpmvc" . " WHERE id=:id");
        $this->db->bind("id", $id);
        return $this->db->single();
    }

    public function insertNewData($data)
    {
        $query = "INSERT INTO phpmvc VALUES ('',:username,:email,:nohp)";
        $this->db->query($query);
        $this->db->bind("username", $data["username"]);
        $this->db->bind("email", $data["email"]);
        $this->db->bind("nohp", $data["nohp"]);

        $this->db->execute();
        return $this->db->rowCount();
    }

    public function deleteData($id)
    {
        $query = "DELETE FROM phpmvc " . "WHERE id = :id";
        $this->db->query($query);
        $this->db->bind("id", $id);
        $this->db->execute();
        return $this->db->rowCount();
    }
}
