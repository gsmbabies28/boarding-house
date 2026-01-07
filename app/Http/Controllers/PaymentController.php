<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index()
    {
        return Inertia::render('Payment');
    }

    public function create()
    {
        // Logic to show payment creation form
    }

    public function store(Request $request)
    {
        // Logic to store a new payment
    }
}
