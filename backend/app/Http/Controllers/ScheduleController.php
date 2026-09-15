<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    // 1. Get filters sent from the frontend and return the filtered schedules
    $routeId = $request->query('route_id'); //eg: 1
    $startPoint = $request->query('start_point'); //eg: "ATC Building"

    // 2. Check current date and time
    $currentDateTime = now()->format('H:i:s');                                 // Get the current time
    $isFriday = now()->isFriday();                                           // Check if today is Friday
    $isSaturday = now()->isSaturday();                                       // Check if today is Saturday
    $isHoliday = $this->checkIfHoliday(now());                              // Check if today is a holiday
    $dayTypes = $isFriday ? 'Friday' : 'Weekday';                            // If it's Friday, include Friday schedules
    $dayTypes = $isSaturday || $isHoliday ? 'Holiday' : 'Weekday';           // If it's Saturday or a holiday, include Holiday schedules

    // 3. Query the schedules based on the filters and current date/time
    $schedules = Schedule::where('route_id', $routeId)
        ->where('start_point', $startPoint)
        ->whereIn('day_type', $dayTypes)
        ->where('departure_time', '>=', $currentDateTime) // Only get schedules that are yet to depart
        ->orderBy('departure_time', 'asc') // Order by departure time
        ->get();

    //4. Return as JSON response
    return response()->json($schedules);
}
