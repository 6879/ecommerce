<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryPermission extends Model
{
    use HasFactory;
    protected $fillable=[
       
        'admin','roll',
        'categoryId'
    ];
}
