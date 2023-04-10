<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(10)->create();

        User::create([
            'name' => 'Muhammad Fauzi Nur Aziz',
            'username' => 'Aziz',
            'email' => 'axnvee18@gmail.com',
            'password' => bcrypt('password')
        ]);
        User::create([
            'name' => 'Reno Nuru Sofa',
            'username' => 'Reno',
            'email' => 'renobugil69@gmail.com',
            'password' => bcrypt('password')
        ]);
    }
}
