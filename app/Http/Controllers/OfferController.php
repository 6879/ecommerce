<?php

namespace App\Http\Controllers;
use Image;
use Illuminate\Http\Request;
use App\Models\Offer;
class OfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $offer=Offer::get();
        return ['offer'=>$offer];
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
        $form = new Offer();
        $strpos=strpos($request->image,';' );
        $sub=substr($request->image,0,$strpos);
        $ex=explode('/',$sub)[1];
        $name=time().".".$ex;
        $img=Image::make($request->image)->resize(395,296);
        $upload_path=public_path()."/offerImage/";
        $img->save($upload_path.$name);        
        $form->image=$name;  
        $form->pname = $request->pname;
        $form->startDate = $request->startDate;
        $form->endDate = $request->endDate;
        $form->offerPrice = $request->offerPrice;
        $form->ammountType = $request->ammountType;
        if( $request->totalPriceByPercentage){
            $form->totalPrice = $request->totalPriceByPercentage; 
        }
        else{
            $form->totalPrice = $request->totalPriceByTaka;  
        }
        $form->details = $request->details;
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
