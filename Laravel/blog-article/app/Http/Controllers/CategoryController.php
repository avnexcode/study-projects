<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    public function index()
    {
        return view('pages.category.index', [
            'title' => 'Category',
            'category' => Category::all()
        ]);
    }
}
