<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return view('pages.login.index', [
            'title' => 'Login',
        ]);
    }

    public function authenticate(Request $req)
    {
        $credentials = $req->validate([
            'email' => ['required', 'email:dns'],
            'password' => ['required']
        ]);

        if (Auth::attempt($credentials)) {
            $req->session()->regenerate();

            return redirect()->intended('/article');
        }

        return back()->with('loginErr', 'Login Failed');
    }
}
