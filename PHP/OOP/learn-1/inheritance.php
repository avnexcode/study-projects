<?php
class Human
{
    public
        $username = null,
        $useremail = null,
        $useraddress = null,
        $userjobdesk = null,
        $usergamefav = null;

    public function __construct($username, $useremail, $useraddress, $userjobdesk, $usergamefav)
    {
        $this->username = $username;
        $this->useremail = $useremail;
        $this->useraddress = $useraddress;
        $this->userjobdesk = $userjobdesk;
        $this->usergamefav = $usergamefav;
    }

    public function getData()
    {
        return "Name : {$this->username},<br>Email : {$this->useremail},<br>Address : {$this->useraddress}.<br>";
    }
    function getDetail()
    {
        if ($this->userjobdesk !== null) {
            $str = "JobDesk : {$this->userjobdesk}.<br>";
        } else {
            $str = "Game Fav : {$this->usergamefav}.<br>";
        }
        return $str;
    }
}

class ShowData
{
    public function print(Human $human)
    {
        $str = "{$human->getData()}";
        $str .= "{$human->getDetail()}";
        return $str;
    }
}


$aziz = new Human("Muhammad Fauzi Nur Aziz", "axnvee18@gmail.com", "Desa Kedungbunder, Kecamatan Sutojayan, Kabupaten Blitar", "Web Dev", null);
$reno = new Human("Reno Nuru Soda", "renobugil69@gmail.com", "Desa Centong, Kecamatan Kanigoro, Kabupaten Blitar", null, "FAP Ninja");


$cetakReno = new ShowData();
echo $cetakReno->print($reno);
$cetakAziz = new ShowData();
echo $cetakAziz->print($aziz);
