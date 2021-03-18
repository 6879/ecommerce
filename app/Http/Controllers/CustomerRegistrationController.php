<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use App\Models\CustomerRegistration;
use Illuminate\Http\Request;
use App\Models\User;
use Image;
class CustomerRegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    public function search(Request $request)
    {
       $search=$request->get('q');
       return User::where('name',$search)->where('roll',50)->get();

    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            
            'terms' => 'required',
            ]);       
           $userId= User::insertGetId([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => $request['password'],              
                'password' => Hash::make($request['password']),
            ]);      
           
            $strpos=strpos($request->image,';' );
            $sub=substr($request->image,0,$strpos);
            $ex=explode('/',$sub)[1];
            $name=time().".".$ex;
            $img=Image::make($request->image)->resize(200,200);
            $upload_path=public_path()."/adminProfileImage/";
            $img->save($upload_path.$name ,'jpg','png');
            $form= new CustomerRegistration();     
            $form->image=$name;      
                
            $form->permanentAddress=$request->permanentAddress;      
            $form->phone=$request->phone;      
            $form->name=$request->name;      
            $form->presentAddress=$request->presentAddress;      
            $form->terms=$request->terms;      
            $form->email=$request->email;      
                 
            $form->sponsorId=$request->sponsorId;      
            $form->save();  
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
