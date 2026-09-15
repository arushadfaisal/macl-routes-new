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
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('route_id')->constrained('routes')->onDelete('cascade'); // Foreign key to routes table
            $table->time('departure_time'); // Departure time for the schedule
            $table->string('day_type')->default('Weekday'); // Type of days the schedule is active. weekday, holiday or friday
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedules');
    }
};
