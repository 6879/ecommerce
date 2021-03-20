<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Customer extends Authenticatable
{
    use Notifiable;

    protected $guard = 'customer';

    protected $fillable = [
        'name', 'email', 'password',
        'fname','fullname','mname',
        'dob','nid','phone','image',
        'sponsorId','permanentAddress','presentAddress','terms',
        'divisionId','districtId','thanaId','unionId','wardId'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];
}
