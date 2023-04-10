@extends('layouts.main')
@section('main-container')

<section class="mt-20 px-5 pb-2">
    @if (count($article))


    <div class="flex justify-center pb-4">
        @if (request('user'))
        <h1 class="text-xl md:text-3xl">Article by {{ request('user') }}</h1>
        @elseif (request('category'))
        <h1 class="text-xl md:text-3xl">Article in {{ request('category') }}</h1>
        @elseif(request('category') && request('user'))
        <h1 class="text-xl md:text-3xl">Article by {{ request('user') }} in {{ request('category') }}</h1>
        @else
        <h1 class="text-xl md:text-3xl">All Article You Have To Know</h1>
        @endif
    </div>
    <div class="border-2 border-primary">
        <div class="hero min-h-[400px]"
            @if ($article[0]->image)
            style="background-image: url('{{ asset("storage/" . $article[0]->image)}}');"
            @else
            style="background-image: url('https://source.unsplash.com/1200x250?{{ $article[0]->category->slug }}');"
            @endif
            >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-3xl">
                    <h1 class="mb-5 text-4xl font-bold">{{ $article[0]->title }}</h1>
                    <p class="text-xl">Create by <a href="#"
                            class="link link-secondary no-underline">{{ $article[0]->user->name }}</a> in
                        <a href="/article?category={{ $article[0]->category->slug }}" class="link link-info no-underline">{{ $article[0]->category->name }}</a></p>
                    <p class="mb-5 text-lg">{{ $article[0]->excerpt }}</p>
                    <a href="/article/show/{{ $article[0]->slug }}" class="btn btn-sm btn-info">Detail</a>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap gap-10 justify-center mt-5">
        @foreach ($article->skip(1) as $index => $value)
        <div class="card w-96 bg-base-100 shadow-xl border-2 border-primary p-2 max-h-[400px]">
            <div class="card w-full bg-base-100 shadow-sm image-full">
                @if ($value->image)
                <figure>
                    <img src="{{ asset("storage/$value->image") }}" alt="{{ $value->title }}" />
                </figure>
                @else
                <figure>
                    <img src="https://source.unsplash.com/1200x250?{{ $value->category->slug }}" alt="{{ $value->title }}" />
                </figure>
                @endif
                <a href="/article?category={{ $value->category->slug }}" class="card-body p-16">
                    <h2 class="card-title">{{ $value->category->name }}</h2>
                </a>
            </div>
            <div class="card-body overflow-auto no-scrollbar">
                <div class="card-title">
                    {{ $value->title }}
                </div>
                <div class="flex items-center gap-5">
                    <div class="avatar">
                        <div class="w-8 rounded-full">
                            <img src="https://source.unsplash.com/1200x250?human" />
                        </div>
                    </div>
                    <a href="/article?user={{ $value->user->name }}">
                        {{ $value->user->name }}
                    </a>
                </div>
                <div class="flex justify-end">
                    <div class="badge badge-neutral">
                        create at {{ $value->created_at->diffForHumans() }}
                    </div>
                </div>
                <p class="">{{ $value->excerpt }}</p>
                <div class="card-actions justify-end">
                    <div class="btn btn-sm btn-info"><a href="/article/show/{{ $value->slug }}">Detail</a></div>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    <div class="flex justify-center pt-2">
        {{ $article->links() }}
    </div>
    @else
    <div class="alert alert-warning shadow-lg w-1/2 mx-auto mt-60">
        <div class="flex justify-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Article Not Found</span>
        </div>
    </div>
    @endif
</section>

@endsection
