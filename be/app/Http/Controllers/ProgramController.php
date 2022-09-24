<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;

class ProgramController extends Controller
{
    public function index()
    {
        $program = Program::all();

        return response()->json($program);
    }

    public function show($id)
    {
        $program = Program::where('college_id', $id)->get();

        return response()->json($program);
    }
}
