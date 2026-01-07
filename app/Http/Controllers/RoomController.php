<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rules\In;
use Inertia\Inertia;

class RoomController extends Controller
{
    public function index()
    {
        return Inertia::render('Rooms');
    }

    public function create()
    {
        // Logic to show room creation form
    }

    public function store(Request $request)
    {
        // Logic to store a new room
    }
}
