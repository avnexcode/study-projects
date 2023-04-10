<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    public function index()
    {
        return view('pages.article.index', [
            'title' => 'Article',
            'article' => Article::latest()
                ->filter(request(['search', 'category', 'user']))
                ->simplePaginate(7)
                ->withQueryString()
        ]);
    }

    public function show(Article $article)
    {
        return view('pages.article.show', [
            'title' => 'Detail',
            'article' => $article,
            'refresh' => "/article/show/$article->slug"
        ]);
    }
}
