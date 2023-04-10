<?php

namespace App\Http\Controllers;

use App\Models\User;
// use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class UserController extends Controller
{
    public function index()
    {
        return view('pages.user.index', [
            'title' => 'Writer',
            'users' => User::where('name', '!=', auth()->user()->name)->get()
        ]);
    }
}
