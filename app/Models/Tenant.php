<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    protected $table = 'tenants';

    protected $fillable = [
        'first_name',
        'last_name',
        'room_id',
        'contact',
        'move_in_date',
    ];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }
}
