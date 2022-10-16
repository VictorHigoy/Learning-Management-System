<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\CourseDeveloper;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Student::factory()->create([
            'name' => 'student user',
            'email' => 'student@example.com',
            'password' => bcrypt('test'),
            'section' => '1',
            'year_level' => '4',
            'subjects' => 'english, math, science, physical education',
        ]);

        Teacher::factory()->create([
            'name' => 'teacher user',
            'email' => 'teacher@example.com',
            'password' => bcrypt('test'),
            'year_levels' => '1,2,3,4',
            'subjects' => 'english, math, science, physical education',
        ]);

        CourseDeveloper::factory()->create([
            'name' => 'dev user',
            'email' => 'dev@example.com',
            'password' => bcrypt('test'),
            'department' => 'CCS',
        ]);

        Admin::factory()->create([
            'name' => 'admin user',
            'email' => 'admin@example.com',
            'password' => bcrypt('test'),
        ]);
    }
}
