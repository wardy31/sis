<?php

use App\Http\Controllers\CollegeController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\EnrolleeController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::resources([
    'students'  => StudentController::class,
    'enrollees' => EnrolleeController::class
]);

Route::get('colleges', [CollegeController::class, 'index']);

Route::get('programs', [ProgramController::class,'index']);
Route::get('programs/{id}', [ProgramController::class,'show']);

Route::get('courses', [CourseController::class, 'index']);
Route::get('courses/{id}', [CourseController::class, 'show']);

Route::post('login', [AdminController::class,'login']);

Route::get('auths', [AdminController::class, 'show']);

