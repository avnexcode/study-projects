<div class="navbar bg-info text-primary-content fixed top-0 z-50">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black dark:text-white rounded-box w-52">
                <li>
                    <a href="/" class="{{ Request::is('/') ? 'active' : '' }}">Homepage</a>
                </li>
                <li>
                    <a href="/article" class="{{ Request::is('article') ? 'active' : '' }}">Article</a>
                </li>
                <li>
                    <a href="/category" class="{{ Request::is('category') ? 'active' : '' }}">Category</a>
                </li>
                @auth
                <li>
                    <a href="/user" class="{{ Request::is('user') ? 'active' : '' }}">User</a>
                </li>
                @endauth
            </ul>
        </div>
    </div>
    <div class="navbar-center">
        <a href="{{ url()->full() }}" class="btn btn-ghost normal-case text-4xl">Blog <div class="badge bg-primary text-lg border-white border-2 text-primary-content ml-1 px-5 py-4">{{ $title }}
            </div></a>
    </div>
    <div class="navbar-end">
        {{-- search form --}}
        @if (Request::is('article'))
        <div class="form-control hidden md:block">
            <form action="" method="get">
                <div class="input-group">
                    @if (request('category'))
                        <input type="hidden" name="category" value="{{ request('category') }}">
                    @endif
                    <input type="text" placeholder="Search…"
                        class="input input-bordered text-black dark:text-white focus:outline-none input-sm w-[300px]"
                        name="search" value="{{ request('search') }}" />
                    <button class="btn btn-sm btn-square focus:outline-none" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </form>
        </div>
        @endif
        {{-- Dropdown profile --}}
        <div>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://source.unsplash.com/1200x250?profile" class="border-2 border-white rounded-full"/>
                    </div>
                </label>
                <ul tabindex="0"
                    class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-black dark:text-white ">
                    @auth
                    <li><a href="/profile" class="{{ Request::is('profile') ? 'active' : '' }}">Profile <span class="badge bg-info text-black">{{ auth()->user()->username }}</span></a></li>
                    <li><a href="/dashboard" class="{{ Request::is('dashboard') ? 'active' : '' }}">Dashboard</a></li>
                    <li><a href="/logout" class="{{ Request::is('login') ? 'active' : '' }}">Logout</a></li>
                    @else
                    <li><a href="/login" class="{{ Request::is('login') ? 'active' : '' }}">Login</a></li>
                    @endauth
                </ul>
            </div>
        </div>
    </div>
</div>
