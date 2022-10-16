<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Admin;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\Request;
use App\Models\CourseDeveloper;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login(Request $request){

        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
            'type' => 'required'
        ]);

        if($request->type == 'Student'){

            $user = Student::where('email', $request->email)->first();

            if(!Auth::attempt(['email' => $request->email, 'password' => $request->password])){
                return response(['Bad Credentials'], 401);
            }

            $token = $user->createToken('LMS',['Student'])->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token
            ];
                    
            return response($response, 201);

        } elseif($request->type == 'Teacher') {

            $user = Teacher::where('email', $request->email)->first();

            if(!Auth::guard('Teacher')->attempt(['email' => $request->email, 'password' => $request->password])){
                return response(['Bad Credentials'], 401);
            }

            $token = $user->createToken('LMS',['Teacher'])->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token
            ];
                    
            return response($response, 201);

        } elseif($request->type == 'CourseDeveloper') {

            $user = CourseDeveloper::where('email', $request->email)->first();

            if(!Auth::guard('CourseDeveloper')->attempt(['email' => $request->email, 'password' => $request->password])){
                return response(['Bad Credentials'], 401);
            }

            $token = $user->createToken('LMS',['CourseDeveloper'])->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token
            ];
                    
            return response($response, 201);

        } elseif($request->type == 'Admin') {

            $user = Admin::where('email', $request->email)->first();

            if(!Auth::guard('Admin')->attempt(['email' => $request->email, 'password' => $request->password])){
                return response(['Bad Credentials'], 401);
            }

            $token = $user->createToken('LMS',['Admin'])->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token
            ];
                    
            return response($response, 201);

        } else {
            return response(['Unknown Request'], 400);
        }
    }
}
