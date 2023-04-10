<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(mt_rand(5, 10)),
            'category_id' => mt_rand(1, 4),
            'user_id' => mt_rand(1, 5),
            'slug' => $this->faker->sentence(mt_rand(1, 5)),
            'excerpt' => $this->faker->paragraph(mt_rand(1, 3)),
            'body' => collect($this->faker->paragraphs(mt_rand(30, 50)))
                ->map(fn ($paraf) => "<p>$paraf $paraf $paraf $paraf</p><br>")
                ->implode('')

        ];
    }
}
