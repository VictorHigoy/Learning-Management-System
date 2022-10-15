<?php

namespace Database\Seeders;

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
        User::factory()->create([
            'name' => 'student user',
            'email' => 'student@example.com',
            'password' => bcrypt('test'),
            'type' => 'student'
        ]);

        User::factory()->create([
            'name' => 'teacher user',
            'email' => 'teacher@example.com',
            'password' => bcrypt('test'),
            'type' => 'teacher'
        ]);

        User::factory()->create([
            'name' => 'dev user',
            'email' => 'dev@example.com',
            'password' => bcrypt('test'),
            'type' => 'dev'
        ]);

        User::factory()->create([
            'name' => 'admin user',
            'email' => 'admin@example.com',
            'password' => bcrypt('test'),
            'type' => 'admin'
        ]);
    }
}
