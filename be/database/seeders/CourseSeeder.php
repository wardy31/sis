<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $courses=[
            ['program_id' => '1', 'course_code' => 'IT_206' ,'course_name' => 'IT Fundamentals'],
            ['program_id' => '1', 'course_code' => 'IT_146' ,'course_name' => 'Database Management System'],
            ['program_id' => '1', 'course_code' => 'IT_484' ,'course_name' => 'Web Development'],
            ['program_id' => '1', 'course_code' => 'IT_187' ,'course_name' => 'Data Structures'],
            ['program_id' => '1', 'course_code' => 'IT_385' ,'course_name' => 'Systems Analysis and Design'],
            ['program_id' => '1', 'course_code' => 'IT_206' ,'course_name' => 'IT Fundamentals'],
            ['program_id' => '2', 'course_code' => 'BSED_160' ,'course_name' => 'Principle of Teaching'],
            ['program_id' => '2', 'course_code' => 'BSED_490' ,'course_name' => 'Facilitating Learning'],
            ['program_id' => '2', 'course_code' => 'BSED_457' ,'course_name' => 'Assessment of Student Learning'],
            ['program_id' => '2', 'course_code' => 'BSED_130' ,'course_name' => 'Social Dimension of Education'],
            ['program_id' => '3', 'course_code' => 'BSTM_453' ,'course_name' => 'Total Quality Management'],
            ['program_id' => '3', 'course_code' => 'BSTM_163' ,'course_name' => 'Food and Beverage Service Procedures'],
            ['program_id' => '3', 'course_code' => 'BSTM_294' ,'course_name' => 'Tourism Planning and Development'],
        ];

        DB::table('courses')->insert($courses);
    }
}
