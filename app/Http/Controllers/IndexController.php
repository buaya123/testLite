<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Super_admin;

class IndexController extends Controller
{
    public function index(){
        return view('welcome');
    }

    public function login(){

        $_POST = json_decode(file_get_contents('php://input'),true);

        $retVal = [
            'status' => 1,
            'msg' => 'Success'
        ];

        if($_POST['id_num'] == NULL || $_POST['pass'] == NULL){
            $retVal = [
                'status' => 0,
                'msg' => 'Please Input a valid id number and password'
            ];
            return $retVal;
        } 
        
        $ret = Super_admin::where([
            'idNumber' => $_POST['id_num'], 
            'password' => $_POST['pass']
            ])->get();

        if($ret->count() < 1){
            $retVal = [
                'status' => 0,
                'msg' => "Invalid Credentials"
            ];
        } 
        
        return $retVal;
    }
}
