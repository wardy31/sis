<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //$programs=[
          //  ['college_id' => 1, 'program_name' => 'Bachelor of Science in Information Technology' , 'abbreviation' => 'BSIT'],
          //  ['college_id' => 1, 'program_name' => 'Bachelor of Science in Social Work' , 'abbreviation' => 'BSSW'],
          //  ['college_id' => 1, 'program_name' => 'Bachelor of Arts in Communication' , 'abbreviation' => 'ABCOM'],
           // ['college_id' => 1, 'program_name' => 'Bachelor of Arts in Polical Science' , 'abbreviation' => 'AB POSCI'],
           // ['college_id' => 2, 'program_name' => 'Bachelor of Science in Elementary Education' , 'abbreviation' => 'BEED'],
          //  ['college_id' => 2, 'program_name' => 'Bachelor of Science in Secondary Education' , 'abbreviation' => 'BSED'],
          //  ['college_id' => 2, 'program_name' => 'Bachelor of Science in Special Education' , 'abbreviation' => 'BSPED'],
          //  ['college_id' => 3, 'program_name' => 'Bachelor of Science in Tourism Management' , 'abbreviation' => 'BSTM'],
          //  ['college_id' => 3, 'program_name' => 'Bachelor of Science in Hospitality Management' , 'abbreviation' => 'BSHM'],
          //  ['college_id' => 3, 'program_name' => 'Bachelor of Science in Entrepreneurship' , 'abbreviation' => 'BSEntrep'],
        //];

        $programs=[
            ['college_id' => 1, 'program_name' => 'Bachelor of Science in Information Technology' , 'abbreviation' => 'BSIT'],
            ['college_id' => 2, 'program_name' => 'Bachelor of Science in Secondary Education' , 'abbreviation' => 'BSED'],
            ['college_id' => 3, 'program_name' => 'Bachelor of Science in Tourism Management' , 'abbreviation' => 'BSTM'],
        ];

        DB::table('programs')->insert($programs);
    }
}
