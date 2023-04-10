@extends('pages.dashboard.layouts.dashboard')
@section('main-container')

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 pb-1 mb-3 border-bottom">
    <h1 class="h3">Create</h1>
</div>

<div class="container w-75">
    <form action="/dashboard/article" method="post" enctype="multipart/form-data">
        @csrf
        <div class="mb-3">
            <label for="title" class="form-label @error('title')
                is-invalid
            @enderror">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Title..." autofocus name="title"
                value="{{ old('title') }}">
            @error('title')
            <div id="validationServer03Feedback" class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="mb-3">
            <label for="slug" class="form-label @error('slug')
                is-invalid
            @enderror">Slug</label>
            <input type="text" class="form-control" id="slug" placeholder="Slug..." name="slug" value="{{ old('slug') }}">
            @error('slug')
            <div id="validationServer03Feedback" class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="mb-3">
            <label for="category_id" class="form-label @error('category_id')
                is-invalid
            @enderror">Category</label>
            <select class="form-select" aria-label="Default select example" name="category_id" id="category_id">
                @foreach ($category as $index => $value)
                <option selected value="{{ $value->id }}">{{ $value->name }}</option>
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
            <img id="imageArticle" class="mb-2 img-fluid col-sm-4" alt="">
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
            <input id="body" type="hidden" name="body" value="{{ old('body') }}">
            <trix-editor input="body"></trix-editor>
            @error('body')
            <div id="validationServer03Feedback" class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="mb-3 d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">Create</button>
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

    const previewImage = () => {
        const image = document.getElementById('image');
        const imgPrev = document.getElementById('imageArticle');


        imgPrev.style.display = '';

        const oFReader = new FileReader();
        oFReader.readAsDataURL(image.files[0]);

        oFReader.onload = (even) => {
            imgPrev.src = even.target.result;
        }
    }

    document.addEventListener("trix-file-accept", (e) => {
        e.preventDefault();
    })

</script>

@endsection
