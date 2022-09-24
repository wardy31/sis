<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Enrollee;
use App\Models\Program;
use Illuminate\Http\Request;

class EnrolleeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $enrollee = Enrollee::with(['student','college','program','course'])->get();

        return response()->json($enrollee);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $programData = $request->input('program_id');
        $collegeData = $request->input('college_id');
        $courseData = $request->input('course_id');

        $checkingProgram =Program::find($programData);
        $checkingCourse = Course::find($courseData);

        if($checkingProgram->college_id == $collegeData){
            if($checkingCourse->program_id == $programData){
                
                $enrollee = new Enrollee;

                $enrollee->student_id = $request->input('student_id');
                $enrollee->college_id = $request->input('college_id');
                $enrollee->program_id = $request->input('program_id');
                $enrollee->course_id  = $request->input('course_id');
        
                $enrollee->save();
        
                return response()->json(['message' => 'Added Successfully','data' => $enrollee]);
            }
            else{
                return response()->json("Wrong Program Picked");
            }
        }
        else{
            return response()->json("Wrong College Picked");
        }
        $enrollee = new Enrollee;

        $enrollee->student_id = $request->input('student_id');
        $enrollee->college_id = $request->input('college_id');
        $enrollee->program_id = $request->input('program_id');
        $enrollee->course_id  = $request->input('course_id');

        $enrollee->save();

        return response()->json(['message' => 'Added Successfully','data' => $enrollee]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $enrollee = Enrollee::with(['student','college','program','course'])->where('student_id',$id)->get();

        return response()->json($enrollee);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       $enrollee = Enrollee::find($id);
        
       $enrollee->student_id = $request->input('student_id');
       $enrollee->college_id = $request->input('college_id');
       $enrollee->program_id = $request->input('program_id');
       $enrollee->course_id  = $request->input('course_id');

       $enrollee->save();

       return response()->json(['message' => 'Updated Successfully','data' => $enrollee]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $enrollee = Enrollee::find($id);

        $enrollee->delete();

        return response()->json(['message' => 'Deleted Successfully','data' => $enrollee]);
    }
}
