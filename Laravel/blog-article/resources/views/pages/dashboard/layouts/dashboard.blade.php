@include('pages.dashboard.layouts.template.header')
@include('pages.dashboard.partials.navbar')

<div class="container-fluid">
    <div class="row">

        @include('pages.dashboard.partials.sidebar')

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            @yield('main-container')
        </main>
    </div>
</div>


@include('pages.dashboard.layouts.template.footer')
