<?php
class user
{
    public
        $username,
        $email,
        $address;

    public function __construct($username, $email, $address)
    {
        $this->username = $username;
        $this->email = $email;
        $this->address = $address;
    }


    public function showUser()
    {
        return "
        username = $this->username,<br>
        email = $this->email,<br>
        address = $this->address.
        ";
    }
}

class Method
{
    public function showData(user $user)
    {
        $data = "$user->username, <br> $user->email, <br> $user->address";
        return $data;
    }
}


$aziz = new User("Muhammad Fauzi Nur Aziz", "axnvee18@gmail.com", "Kedungbunder, Sutojayan, Blitar");

$showAziz = new Method();
echo $showAziz->showData($aziz);
