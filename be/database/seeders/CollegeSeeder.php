<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CollegeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $colleges =[
            ['college_name' => 'College of Arts and Sciences' , 'abbreviation' => 'CAS'],
            ['college_name' => 'College of Education' , 'abbreviation' => 'COFED'],
            ['college_name' => 'College of Management and Entrepreneurship' , 'abbreviation' => 'CME']
        ];
        DB::table('colleges')->insert($colleges);
    }
}
