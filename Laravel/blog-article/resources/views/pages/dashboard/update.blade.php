@extends('pages.dashboard.layouts.dashboard')
@section('main-container')

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 pb-1 mb-3 border-bottom">
    <h1 class="h3">Update</h1>
</div>

<div class="container w-75">
    <form action="/dashboard/article/{{ $article->slug }}" method="post" enctype="multipart/form-data">
        @method('put')
        @csrf
        <input type="hidden" name="oldImage" value="{{ $article->image }}">
        <div class="mb-3">
            <label for="title" class="@error('title')
                is-invalid
            @enderror form-label">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Title..." autofocus name="title"
                value="{{ old('title', $article->title) }}">
            @error('title')
                <div id="validationServer03Feedback" class="invalid-feedback">
                    {{ $message }}
                </div>
            @enderror
        </div>
        <div class="mb-3">
            <label for="slug" class="@error('slug')
                is-invalid            @enderror form-label">Slug</label>
            <input type="text" class="form-control" id="slug" placeholder="Slug..." name="slug"
                value="{{ old('slug', $article->slug) }}">
            @error('slug')
                <div id="validationServer03Feedback" class="invalid-feedback">
                    {{ $message }}
                </div>
            @enderror
        </div>
        <div class="mb-3">
            <label for="category_id" class="form-label">Category</label>
            <select class="@error('category_id')
                is-invalid
            @enderror form-select" aria-label="Default select example" name="category_id" id="category_id">
                @foreach ($category as $index => $value)
                <option @if ($value->id == $article->category->id)
                    selected
                    @endif value="{{ $value->id }}">{{ $value->name }}</option>
                @endforeach
            </select>
            @error('category_id')
                <div id="validationServer03Feedback" class="invalid-feedback">
                    {{ $message }}
                </div>
            @enderror
        </div>
         <div class="mb-3">
            <label for="image" class="form-label col-sm-12">Image Article</label>
            @if ($article->image)
            <img src="{{ asset('storage/' . $article->image) }}" id="prevImage" class="img-fluid mb-1 col-sm-4" alt="">
            @else
            <img src="" id="prevImage" class="img-fluid mb-1 col-sm-4" alt="">
            @endif
            <input class="form-control @error('image')
                is-invalid
            @enderror" type="file" id="image" name="image" onchange="previewImage()">
            @error('image')
            <div id="validationServer03Feedback" class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="mb-3">
            <label for="body">Write Content Here</label>
            <input id="body" class="@error('title')
                is-invalid
            @enderror" type="hidden" name="body" value="{{ old('body', $article->body) }}">
            <trix-editor input="body"></trix-editor>
            @error('body')
                <div id="validationServer03Feedback" class="invalid-feedback">
                    {{ $message }}
                </div>
            @enderror
        </div>
        <div class="mb-3 d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">Update</button>
        </div>
    </form>
</div>


<script>
    const title = document.getElementById('title')
    const slug = document.getElementById('slug')

    title.addEventListener('keyup', () => {
        fetch(`/dashboard/article/checkSlug?title=${title.value}`).then(response => {
            console.log(response)
            return response.json()
        }).then(data => {
            console.log(data)
            return slug.value = data.slug
        })
    })

    const previewImage = (e) => {
        const imagePreview = document.getElementById('prevImage');
        const image = document.getElementById('image');

        const reader = new FileReader();

        reader.readAsDataURL(image.files[0]);

        reader.onload = (even) => {
            imagePreview.src = even.target.result
        }

    }
    // document.addEventListener("trix-file-accept", (e) => {
    //     e.preventDefault();
    // })

</script>

@endsection
