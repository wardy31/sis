<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function login (Request $request){
        
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required']
        ]); 

        if (Auth::check()) {
            return response()->json('ward');
        }

        if(Auth::guard('admin')->attempt($credentials)){

            $user = Auth::user();
            return response()->json(['message' => 'Authenticated', 'user'=> $user]);
        }
        else{
            return response()->json(['message' => 'The provided credentials does not match']);
        }

    }

    public function show(){

        if (Auth::guard('admin')->check()) {
            return response()->json('ward');
        }

        $user = Auth::user();
 

        return response()->json(['user' => $user]);
    }
}
