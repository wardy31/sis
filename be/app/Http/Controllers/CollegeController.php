<?php

namespace App\Http\Controllers;

use App\Models\College;
use Illuminate\Http\Request;

class CollegeController extends Controller
{
    public function index ()
    {
        $college = College::all();

        return response()->json($college);
    }
}
