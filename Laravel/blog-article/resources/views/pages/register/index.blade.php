@extends('layouts.main')
@section('main-container')

<section class="mt-20 px-5 pb-2">
    <!-- component -->
    <div class="bg-grey-lighter flex flex-col pt-16">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full border-2">
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                <form action="/registration" method="post">
                    @csrf
                    <div>
                        <input autocomplete="off" type="text" class="@error('name')
                        is-invalid
                        @enderror bg-white block border border-grey-light w-full p-3 rounded mb-4" name="name"
                            placeholder="Full Name" value="{{ old('name') }}" id="name" autofocus />
                        @error('name')
                        <div class="col-md-6">
                            <div id="validationServer03Feedback" class="invalid-feedback">
                                {{ $message }}
                            </div>
                        </div>
                        @enderror
                    </div>
                    <div>
                        <input type="hidden" autocomplete="off" type="text" class="@error('username')
                        is-invalid
                        @enderror bg-white block border border-grey-light w-full p-3 rounded mb-4" name="username"
                            placeholder="Username" id="username" />
                        @error('username')
                        <div class="col-md-6">
                            <div id="validationServer03Feedback" class="invalid-feedback">
                                {{ $message }}
                            </div>
                        </div>
                        @enderror
                    </div>
                    <div>
                        <input autocomplete="off" type="text" class="@error('email')
                        is-invalid
                        @enderror bg-white block border border-grey-light w-full p-3 rounded mb-4" name="email"
                            placeholder="Email" value="{{ old('email') }}" id="email" />
                        @error('email')
                        <div class="col-md-6">
                            <div id="validationServer03Feedback" class="invalid-feedback">
                                {{ $message }}
                            </div>
                        </div>
                        @enderror
                    </div>
                    <div>
                        <input autocomplete="off" type="password" class="@error('password')
                        is-invalid
                        @enderror bg-white block border border-grey-light w-full p-3 rounded mb-4" name="password"
                            placeholder="Password" value="password" id="password" />
                        @error('password')
                        <div class="col-md-6">
                            <div id="validationServer03Feedback" class="invalid-feedback">
                                {{ $message }}
                            </div>
                        </div>
                        @enderror
                    </div>
                    {{-- <input type="password" class="bg-white block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password" placeholder="Confirm Password" /> --}}

                    <button type="submit"
                        class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1">Create
                        Account</button>
                </form>
            </div>
            <div class="text-grey-dark mt-6">
                Already have an account?
                <a class="no-underline border-b border-blue text-blue" href="/login">
                    Log in
                </a>.
            </div>
        </div>
    </div>
</section>

<script>
    const name = document.getElementById('name')
    const username = document.getElementById('username')

    name.addEventListener('change', (e) => {
        let user = name.value.split(" ")
        user = user[user.length - 1]
        username.value = user.toLowerCase()
        console.log(username.value)
    })

</script>

@endsection
