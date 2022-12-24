<?php

use Illuminate\Support\Facades\Route;
use App\Models\CoreFunctions\ToDoList;
use App\Http\Controllers\Users\UserController;
use App\Http\Controllers\CourseManager\CMCourseController;
use App\Http\Controllers\CourseManager\CMModuleController;
use App\Http\Controllers\CoreFunctions\ExamGrantingController;
use App\Http\Controllers\CoreFunctions\SubjectTaggingController;
use App\Http\Controllers\CoreFunctions\AccountCreationController;
use App\Http\Controllers\CoreFunctions\ModuleStatusUpdateController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Login API

Route::post('/login', [UserController::class, 'login']);
Route::post('/logout', [UserController::class, 'logout'])->middleware('auth:sanctum');

//student route
Route::group(['prefix' => 'student', 'middleware' => ['auth:sanctum','abilities:Student']], function(){
    Route::apiResource('courses', CourseController::class);
});

//teachers route
Route::group(['prefix' => 'teacher', 'middleware' => ['auth:sanctum','abilities:Teacher']], function(){
        
});

//course developer route
Route::group(['prefix' => 'coursedeveloper', 'middleware' => ['auth:sanctum','abilities:CourseDeveloper']], function(){
        
});

//course manager route
Route::group(['prefix' => 'coursemanager', 'middleware' => ['auth:sanctum','abilities:CourseManager']], function(){
    Route::apiResource('todolist', ToDoList::class);
    Route::apiResource('course', CMCourseController::class);
    Route::apiResource('module', CMModuleController::class);
});

//admin route
Route::group(['prefix' => 'admin', 'middleware' => ['auth:sanctum','abilities:Admin']], function(){
        
});

//super admin route
Route::group(['prefix' => 'superadmin', 'middleware' => ['auth:sanctum','abilities:SuperAdmin']], function(){
        
});

//SuperAdmin Core
Route::group(['prefix' => 'core', 'middleware' => ['auth:sanctum', 'abilities:SuperAdmin']], function(){
    Route::apiResource('createaccount', AccountCreationController::class);
});

//Admin Core
Route::group(['prefix' => 'core', 'middleware' => ['auth:sanctum', 'abilities:Admin']], function(){
    Route::apiResource('examgrant', ExamGrantingController::class);
    Route::apiResource('modulestatusupdate', ModuleStatusUpdateController::class);
    Route::apiResource('tagsubject', SubjectTaggingController::class);
});