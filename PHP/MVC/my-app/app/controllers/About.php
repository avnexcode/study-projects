<?php
class About extends Controller
{

    public function index()
    {
        $data["header"] = "About";
        $this->view("template/header", $data);
        $this->view("about/index");
        $this->view("template/footer");
    }

    public function page($name = "...", $hobby = "...", $old = "...")
    {
        $data["header"] = "About";
        $data["name"] = $name;
        $data["hobby"] = $hobby;
        $data["old"] = $old;
        $this->view("template/header", $data);
        $this->view("about/page", $data);
        $this->view("template/footer");
    }
}
