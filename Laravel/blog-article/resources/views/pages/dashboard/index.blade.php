@extends('pages.dashboard.layouts.dashboard')
@section('main-container')

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 pb-1 mb-3 border-bottom">
    <h1 class="h3">Dashboard</h1>
</div>
<div>
    <h1 class="h4">Hello {{ auth()->user()->name }}</h1>
    <p>Do you wanna to create a new article ? Click button here</p>
</div>
<div>
    <a href="/dashboard/article/create" class="btn btn-primary">Create New Article</a>
</div>

@endsection
