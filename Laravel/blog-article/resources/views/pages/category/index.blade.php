@extends('layouts.main')
@section('main-container')

<section class="mt-20 px-5 pb-2">

    <div class="flex justify-center pb-4">
        <h1 class="text-xl md:text-3xl">All Category You Have To Know</h1>
    </div>
    <div class="flex flex-wrap gap-10 justify-center">
        @foreach ($category as $index => $value)
        <div class="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://source.unsplash.com/1200x250?{{ $value->name }}" alt="Shoes" /></figure>
            <a href="/article?category={{ $value->slug }}" class="card-body">
                <h2 class="card-title">{{ $value->name }}</h2>
            </a>
        </div>
        @endforeach
    </div>

</section>

@endsection
