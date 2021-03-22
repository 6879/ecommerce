<template>
  <div>
<div class="container-fluid">
<div class="col-12 col-md-12 mt-4 col-xs-12">
<center>
    <button class="btn btn-success"><i class="fas fa-check"></i>&nbsp;Success Order</button>
    <button class="btn btn-danger"><i class="fas fa-trash-restore-alt"></i>&nbsp;Cancel Order</button>
</center>
</div>
<div class="col-12 col-md-8 mt-4 p-2 offset-md-2 col-xs-12 profilebox">
    <center>
        <h5 class="obor">26 March 2021</h5>       
       <p class="mtop"> 9:00AM - 10:00AM</p>
       <p class="mtop"> Order #610936467308552</p>
       <p class="mtop">Order Status&nbsp;<span class="badge badge-success ">Shipped</span></p>
    </center>
    <table class="table d-none d-sm-block">
 
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td> <img :src="'frontend/image/cart1.png'" class="cartImg" /></td>
      <td style="width: 193px;">Dragon Fruit Thai (Net Weight ± 100 gm)</td>
      <td>500gm</td>
      <td>qty.1</td>     
      <td>Dis.500TK</td>
      <td>CashBack.50TK</td>
       <td>500.TK</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td> <img :src="'frontend/image/cart1.png'" class="cartImg" /></td>
      <td style="width: 193px;">Dragon Fruit Thai (Net Weight ± 100 gm)</td>
      <td>500gm</td>
      <td>qty.1</td>     
      <td>Dis.500TK</td>
      <td>CashBack.50TK</td>
       <td>500.TK</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td> <img :src="'frontend/image/cart1.png'" class="cartImg" /></td>
      <td style="width: 193px;">Dragon Fruit Thai (Net Weight ± 100 gm)</td>
      <td>500gm</td>
      <td>qty.1</td>     
      <td>Dis.500TK</td>
      <td>CashBack.50TK</td>
       <td>500.TK</td>
    </tr>
  
   
  </tbody>
</table>
    <div class=" d-md-none">
 
 
   
   
      <div class="col-12 col-xs-12" > 
        <img :src="'frontend/image/cart1.png'" class="cartImg" />
     <small> Dragon Fruit  (Net Weight ± 100 gm)</small>
 
        <small>500gm&nbsp;qty.1&nbsp;Dis.50TK&nbsp;CashBack.50TK&nbsp;500.TK</small>
      </div>
      <hr>
      <div class="col-12 col-xs-12" > 
        <img :src="'frontend/image/cart1.png'" class="cartImg" />
     <small> Dragon Fruit  (Net Weight ± 100 gm)</small>
 
        <small>500gm&nbsp;qty.1&nbsp;Dis.50TK&nbsp;CashBack.50TK&nbsp;500.TK</small>
      </div>
    
</div>
<hr>
<div class="col-12 col-md-4 mb-2 col-xs-12 offset-md-8" style="background:rgba(225, 238, 234, 0.64) none repeat scroll 0% 0%;
color: white;">
<table class="table">
      <tbody>
    <tr>
     
      <td style="
    padding: 5px;">Total</td>
    <td style="
    padding: 5px;">300 TK</td>
      </tr>
      <tr>
      <td style="
    padding: 5px;">Discount</td>
      <td style="
    padding: 5px;">300 TK</td>
      </tr>
      <tr>
      <td style=" 
    padding: 5px;">Cash Back</td>
      <td style="
    padding: 5px;">300 TK</td>
    </tr>
      <tr>
      <td style=" 
    padding: 5px;">Due</td>
      <td style="
    padding: 5px;">100 TK</td>
    </tr>
  </tbody>
   
    </table>
</div>

</div>
</div>

  </div>

</template>

<script>
export default {

}
</script>

