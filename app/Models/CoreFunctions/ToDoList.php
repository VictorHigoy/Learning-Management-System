<?php

namespace App\Models\CoreFunctions;

use App\Models\Users\CourseDeveloper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ToDoList extends Model
{
    use HasFactory;

    public function coursedeveloper(){
        return $this->belongsTo(CourseDeveloper::class);
    }
}
