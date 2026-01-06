<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $component = '';
    Auth::user()->is_admin === 1 ? $component='AdminDashboard'   : $component ='Dashboard';
    return Inertia::render($component);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/tenants', [\App\Http\Controllers\TenantController::class, 'index'])->name('tenants.index');
    Route::get('/tenants/create', [\App\Http\Controllers\TenantController::class, 'create'])->name('tenants.create');
    Route::post('/tenants', [\App\Http\Controllers\TenantController::class, 'store'])->name('tenants.store');
});

require __DIR__.'/auth.php';
