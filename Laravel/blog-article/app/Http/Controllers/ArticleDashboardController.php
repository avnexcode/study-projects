<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use Cviebrock\EloquentSluggable\Services\SlugService;

class ArticleDashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('pages.dashboard.article', [
            'title' => 'Dashboard Article',
            'article' => Article::where('user_id', auth()->user()->id)->latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.dashboard.create', [
            'title' => 'Create',
            'category' => Category::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $userId = auth()->user()->id;

        $validatedData = $request->validate([
            'title' => ['required'],
            'category_id' => ['required'],
            'slug' => ['required', 'unique:articles'],
            'image' => ['image', 'file', 'max:10000'],
            'body' => ['required']
        ]);

        if ($request->file('image')) {
            $validatedData['image'] = $request->file('image')->store('article-image');
        }

        $validatedData['user_id'] = $userId;
        $validatedData['excerpt'] = Str::limit(strip_tags($request->body), 100);

        Article::create($validatedData);

        return redirect('/dashboard/article')->with('success', 'Article baru berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        return view('pages.dashboard.show', [
            'title' => 'Detail',
            'article' => $article
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        return view('pages.dashboard.update', [
            'title' => 'Update',
            'category' => Category::all(),
            'article' => $article,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        $rules = [
            'title' => ['required'],
            'category_id' => ['required'],
            'image' => ['image', 'file', 'max:10000'],
            'body' => ['required']
        ];

        if ($request->slug != $article->slug) {
            $rules['slug'] = ['required', 'unique:articles'];
        }

        $validatedData = $request->validate($rules);

        if ($request->file('image')) {
            if ($request->oldImage) {

                Storage::delete($request->oldImage);
            }
            $validatedData['image'] = $request->file('image')->store('article-image');
        }

        Article::where('id', $article->id)->update($validatedData);
        return redirect('/dashboard/article')->with('success', 'Article has been updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {

        if ($article->image) {
            Storage::delete($article->image);
        }
        Article::destroy($article->id);
        return redirect('/dashboard/article')->with('success', 'article has been deleted');
    }

    public function checkSlug(Request $request)
    {
        $slug = SlugService::createSlug(Article::class, 'slug', $request->title);
        return response()->json(['slug' => $slug]);
    }
}
