@extends('layouts.main')
@section('main-container')

<section class="mt-20 px-5 pb-2">
    <div class="hero bg-base-100">
        <div class="hero-content flex-col lg:flex-row">
            @if ($article->image)
            <img src="{{ asset('storage/' . $article->image) }}"
            class="max-w-lg rounded-lg shadow-2xl" />
            @else
            <img src="https://source.unsplash.com/800x400?{{ $article->category->slug }}"
            class="max-w-lg rounded-lg shadow-2xl" />
            @endif
            <div>
                <h1 class="text-4xl font-bold">{{ $article->title }}</h1>
                <p class="py-6 text-xl">Create by <a href="#" class="link link-secondary no-underline">{{ $article->user->name }}</a> in
                    <a href="#" class="link link-info no-underline">{{ $article->category->name }}</a></p>
                <a href="/article" class="badge bg-primary">Back To Article</a>
            </div>
        </div>
    </div>
    <div class="px-20">
        {!! $article->body !!}
    </div>
</section>

@endsection
