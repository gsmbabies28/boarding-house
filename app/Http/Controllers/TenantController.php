<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TenantController extends Controller
{
    public function index()
    {
        return Inertia::render('Tenants');
    }

    public function create()
    {
        // Logic to show form for creating a new tenant
    }

    public function store(Request $request)
    {
        // Logic to store a new tenant
    }
}
