<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('routes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');             // Name of the route
            $table->string('description');      // Description of the route
            $table->string('start_location');   // Starting point of the route
            $table->string('end_location');     // Ending point of the route
            $table->json('stops');          // JSON array of stops along the route 
            $table->time('start_time');      // Start time of the route
            $table->weekday('days_of_week');    // Days of the week the route operates
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('routes');
    }
};
