<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ArticleDashboardController;


Route::get('/', [HomeController::class, 'index']);

Route::get('/article', [ArticleController::class, 'index']);

Route::get('/article/show/{article:slug}', [ArticleController::class, 'show']);

Route::get('/category', [CategoryController::class, 'index']);

Route::get('/user', [UserController::class, 'index'])->middleware('auth');

Route::get('/registration', [RegisterController::class, 'index'])->middleware('guest');

Route::post('/registration', [RegisterController::class, 'store'])->middleware('guest');

Route::get('/login', [LoginController::class, 'index'])->middleware('guest');

Route::post('/login', [LoginController::class, 'authenticate'])->middleware('guest');

Route::get('/profile', [ProfileController::class, 'index'])->middleware('auth');

Route::get('/logout', [LogoutController::class, 'index'])->middleware('auth');

Route::get('/dashboard', [DashboardController::class, 'index']);

Route::get('/dashboard/article/checkSlug', [ArticleDashboardController::class, 'checkSlug'])->middleware('auth');

Route::resource('/dashboard/article', ArticleDashboardController::class)->middleware('auth');
