<?php

class Home extends Controller
{
    public function index($name = "...")
    {
        $data["header"] = "Home";
        $data["name"] = $this->model("User_model")->getUser();
        $this->view("template/header", $data);
        $this->view("home/index", $data);
        $this->view("template/footer");
    }
}
