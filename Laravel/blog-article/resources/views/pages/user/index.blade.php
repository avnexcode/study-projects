@extends('layouts.main')
@section('main-container')

<section class="mt-20 px-5 pb-2">
    <div class="flex justify-center pb-4">
        <h1 class="text-xl md:text-3xl">Others Writer</h1>
    </div>
    <div class="flex flex-wrap gap-5 justify-center">
        @foreach ($users as $index => $value)
        <div class="w-full max-w-[330px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2">
            <div class="flex flex-col items-center pb-10">
                <img class="w-36 aspect-square mb-3 rounded-full shadow-lg object-cover"
                    src="https://source.unsplash.com/1200x250?profile" alt="{{ $value->name }}" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">{{ $value->name }}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ $value->email }}</span>
                <div class="flex mt-4 space-x-3 md:mt-6">
                    <a href="/article?user={{ $value->name }}"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Article</a>
                    <a href="#"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</section>

@endsection
