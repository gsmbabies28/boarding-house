<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $table = 'room';

    protected $fillable = [
        'room_number',
        'capacity',
        'price',
    ];

    public function tenants()
    {
        return $this->hasMany(Tenant::class);
    }

}
