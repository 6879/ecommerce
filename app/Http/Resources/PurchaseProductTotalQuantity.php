<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseProductTotalQuantity extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,                               
            'supplierId' => $this->supplierId,           
            'totalQuantity' => $this->totalQuantity,        
            'totalPrice' => $this->totalPrice,        
            'createdy' => $this->createBy,        
            'updateBy' => $this->updateBy,        
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
