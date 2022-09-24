<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        $students = [
            ['student_number' => 2200001,'first_name' =>'Tom', 'last_name' => 'Holland'],
            ['student_number' => 2200003,'first_name' =>'Tobby', 'last_name' => 'Maguire'],
            ['student_number' => 2200002,'first_name' =>'Andrew', 'last_name' => 'Garfield']
        ];
        
        DB::table('students')->insert($students);
    }
}
