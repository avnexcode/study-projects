@extends('pages.dashboard.layouts.dashboard')
@section('main-container')

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h3">Dashboard</h1>
</div>
@if(session('success'))
<div class="fs-5 alert alert-success alert-dismissible fade show w-75" role="alert">
    {{ session('success') }}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
@endif
<div class="table-responsive">
    <table class="table table-striped table-sm">
        <thead>
            <tr>
                <th class="text-center" scope="col">Index</th>
                <th class="text-center" scope="col">Title</th>
                <th class="text-center" scope="col">Category</th>
                <th class="text-center" scope="col">Create at</th>
                <th class="text-center" scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($article as $index => $value)
            <tr>
                <td>{{ $index + 1 }}</td>
                <td>{{ $value->title }}</td>
                <td>{{ $value->category->name }}</td>
                <td>{{ $value->created_at->diffForHumans() }}</td>
                <td>
                    <a href="/dashboard/article/{{ $value->slug }}" class="badge bg-primary text-decoration-none">Detail</a>
                    <a href="/dashboard/article/{{ $value->slug }}/edit" class="badge bg-warning text-decoration-none">Edit</a>
                    <form action="/dashboard/article/{{ $value->slug }}" method="post" class="d-inline">
                        @method('delete')
                        @csrf
                        <button type="submit" class="badge bg-danger border-0" onclick="confirm('are you sure?')">delete</button>
                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection
