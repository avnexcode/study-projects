@extends('pages.dashboard.layouts.dashboard')
@section('main-container')

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 pb-1 mb-3 border-bottom">
    <h1 class="h3">Detail</h1>
</div>
<div class="container">
    <div class="card mb-3">
        <div style="max-height: 400px;" class="overflow-hidden">
            <img src="{{ asset("storage/$article->image") }}" class="overflow-hidden card-img-top"  alt="..." style="object-fit: cover;">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ $article->title }}</h5>
            <p class="card-text"><small class="text-muted">{{ $article->created_at->diffForHumans() }}</small></p>
            <div>
                <small class="text-muted"><a href="/dashboard/article" class="btn btn-sm btn-primary">Back</a></small>
            </div>
            <p class="card-text">{!! $article->body !!}</p>
        </div>
    </div>
</div>

@endsection
