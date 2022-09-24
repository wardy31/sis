<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        $course = Course::with('program')->get();

        return response()->json($course);
    }

    public function show($id)
    {
        $course = Course::with('program')->where('program_id', $id)->get();

        return response()->json($course);
    }
}
