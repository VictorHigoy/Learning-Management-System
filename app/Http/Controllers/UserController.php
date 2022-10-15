<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    function register(Request $req)
    {
        $user= new User;
        $user->name= $req->input('name');
        $user->email= $req->input('email');
        $user->type= $req->input('type');
        $user->password= Hash::make($req->input('password'));
        $user->save();
        return $user;
    }

    function login(Request $req) 
    {
        $user= User::where('email', $req->email)->first();
        if(!$user || !Hash::check($req->password, $user->password)) 
        {
            return ["error" => "Email or Password is not matched"];
        }

        $token = $user->createToken('my-app-token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];
        
        return response($response, 201);
    }
}
