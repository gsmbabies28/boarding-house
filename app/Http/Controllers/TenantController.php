<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\Tenant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TenantController extends Controller
{
    public function index()
    {
        $rooms = Room::all();
        $tenants = Tenant::with('room')->get()->map(function ($tenant) {
            return [
                'id' => $tenant->id,
                'first_name' => $tenant->first_name,
                'last_name' => $tenant->last_name,
                'room_number' => $tenant->room->room_number,
                'contact' => $tenant->contact,
                'move_in_date' => $tenant->move_in_date,
                'status' => $tenant->status,
            ];
        });
        return Inertia::render('Tenants', [
            'rooms' => $rooms,
            'tenants' => $tenants,
        ]);
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
