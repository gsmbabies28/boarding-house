<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\In;
use Inertia\Inertia;

class RoomController extends Controller
{
    public function index()
    {
        $rooms = Room::with('tenants')->get()->map(function ($room) {
            return [
                'id' => $room->id,
                'room_number' => $room->room_number,
                'capacity' => $room->capacity,
                'occupants' => $room->tenants->count(),
                'price' => $room->price,
            ];
        });
        return Inertia::render('Rooms', [
            'rooms' => $rooms,
        ]);
    }

    public function create()
    {
        // Logic to show room creation form
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'room_number' => 'required|string|max:155',
            'capacity' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
        ]);
        Room::create($validated);
        return redirect()->route('rooms.index');
        
    }
}
