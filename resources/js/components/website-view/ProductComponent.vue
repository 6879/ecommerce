 <template>
  <div>
        <router-view></router-view>
    <div v-if="!$route.meta.hideDashboard">
      <div class="container-fluid" v-if="slider == true">
        <div class="col-12 col-md-12 col-xs-12 mainBox">
          <div class="row">
            <div
              class="col-12 col-md-3 col-xs-12 d-none d-sm-block paddingImage hover01"
              v-for="slider in sliders"
              :key="slider.id"
              v-if="slider.left == 1"
            >
              <router-link :to="slider.url">
                <figure>
                  <img
                    class="img-fluid box1Image"
                    :src="'images/' + slider.image"
                  /></figure
              ></router-link>
            </div>

            <div class="col-12 col-md-9 col-xs-12 paddingImage">
              <div
                class="col-12 col-md-12 col-xs-12 d-none d-sm-block paddingImage hover01"
                v-for="slider in sliders"
                :key="slider.id"
                v-if="slider.up == 1"
              >
                <figure>
                  <img
                    class="img-fluid box2Image"
                    :src="'images/' + slider.image"
                  />
                </figure>
              </div>
              <div class="col-12 col-md-12 col-xs-12">
                <div class="row">
                  <div
                    class="col-6 col-md-3 col-xs-4 paddingImage hover01"
                    v-for="slider in sliders"
                    :key="slider.id"
                    v-if="slider.right == 1"
                  >
                    <figure>
                      <img
                        class="img-fluid box3Image"
                        :src="'images/' + slider.image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
<div >
     <div class="container-fluid mt-1" :style="resultDiv">
       

        <div class="col-12 col-md-12 col-xs-12"  >
          <div class="row" >
        
            <div
              class="col-6 col-md-2 col-xs-4 col-sm-12 hovereffect paddingImage2"
              v-for="res in result"
             
            >
              <div
                class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
                 v-for="item in searchProduct"         
              v-bind:key="item.id"
             v-if="item.pname==res.pname"
             
              >
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'images/' + item.image"
                  />
                </figure>

                <div class="overlay">
                  
                 
                     <div style="text-align:center">
                  <a class="info" @click="addCart(item)"
                    >Add To Shopping Cart</a
                  >
                  </div>
                   <div class="hovercart" v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==item.id">
                   <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-info"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-info">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-info" @click="decrement(cart)">-</button>
                       </div>
                  </div>
                  <div class="detail">
                 <a v-b-modal="'modal' + item.productNameId" class="btn btn-success">Details</a>
                  </div>
                </div>
                      <!-- Modal -->
                <b-modal   v-bind:id="'modal' + item.productNameId" size="xl" header-bg-variant="info" title="">
                     
                      
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div  class="zoomImg">
                                <zoom-on-hover
                                  :img-normal="'images/' + item.image"
                                  :img-zoom="'images/' + item.image"
                                  :scale="2"
                                ></zoom-on-hover>
                              </div>                             
                              <br />
                            </div>
                            <div class="col-md-6 col-xs-12 product_content ml-0">
                              <h4>{{ item.pname }}</h4>
                               <div class="ml-0">
                              <span  v-for="purchaseProduct in purchaseproducts" >
                              <span v-if="purchaseProduct.pname==item.productNameId" >
                                <span v-for="unit in units" :key="unit.id"   v-if="purchaseProduct.unit==unit.id" >{{unit.unit}}<span></span></span>
                                &nbsp;&nbsp;Brand:&nbsp;<span v-for="brand in brands" :key="brand.id" v-if="purchaseProduct.brand==brand.id">{{brand.brand}}</span>
                                &nbsp;&nbsp;Color:&nbsp;<span v-for="color in colors" :key="color.id" v-if="purchaseProduct.color==color.id">{{color.color}} </span>                            
                              </span>
                               </span>                             
                                </div>
                                <p>
                                <span class="cost"><span>৳</span> {{item.salesPrice}}</span
                                >&nbsp;&nbsp;
                                <span class="tk">৳</span
                                >&nbsp;<del>12400</del>&nbsp;&nbsp;
                                <span style="color: red">2%&nbsp;Off</span>
                              </p>
                              <div class="btn-ground">                              
                                  <div class="row">
                                    <div class="col-12 col-md-6 col-xs-12">
                                      <div class="input-group mb-3"   >                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                           
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        0 in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(item)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      <div class="input-group mb-3 incre" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==item.id" >
                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                            @click="decrement(cart)"
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        {{cart.qun}} in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(item)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      
                                    </div>
                                    
                                    <div class="col-xs-12" >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                         @click="addCart(item)"
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + item.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-xs-12 buynowclose" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==item.id"  >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                      
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + item.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-sm-4"></div>
                                  </div>
                                  
                             
                              </div>
                              <h5 class="pdetails">
                                Product Detais
                              </h5>
                         
                                <div v-html="item.details"></div>
                             

                              <h5 class="pdetails">
                                Speciality
                              </h5>
                                <div v-html="item.speciality"></div>
                            </div>
                          </div>
                        </div>
                   
                      <div class="d-none d-sm-block">
                        <div class="col-md-12 toph">
                          <div class="container">
                            <ul class="nav nav-tabs" role="tablist">
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link active"
                                  data-toggle="tab"
                                  href="#home"
                                  >Order Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu1"
                                  >Delivary Charge</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Delivery Area</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Product Return Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Free Family Bazar</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Referrence
                                </a>
                              </li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                              <div id="home" class="container tab-pane">
                                <br />
                                <h3>HOME</h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                              <div id="menu1" class="container tab-pane fade">
                                <br />
                                <h3>Menu 1</h3>
                                <p>
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                              <div id="menu2" class="container tab-pane fade">
                                <br />
                                <h3>Menu 2</h3>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam.
                                </p>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                  
</b-modal>
                <!--./ Modal -->
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  style="height: 85px"
                  v
                >
                  <p style="text-align: left">{{ getProductName(item) }}</p>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <div class="row">
                    <div class="col-6 col-md-5 col-xs-4 amountBox paddingImage">
                      <center>
                        <p class="amount">
                          <span class="tk">৳</span>&nbsp;{{
                            item.salesPrice
                          }}
                        </p>
                      </center>
                    </div>
                    <div
                      class="col-6 col-md-7 col-xs-4 discountBox paddingImage"
                    >
                      <center>
                        <p class="amountDiscount">
                          <span class="tk">৳</span>&nbsp;<del>12400</del>
                        </p>
                      </center>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <center>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                  </center>
                </div>
                 <div class="col-12 col-md-12 col-xs-12 paddingImage3" >
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(item)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage3 adcart"  v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==item.id" >
                  
                  <center>
                    <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-danger"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-danger">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-danger" @click="decrement(cart)">-</button>
                       </div>
                  </center>
                </div>
              
                
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    <!-- sidenav and searchbar  -->
    <div>
      <div class="col-12 col-md-12 col-sm-12 col-xs-12 headerdesign">
        <div class="row">
          <div
            class="col-2 col-md-2 col-sm-2 col-xs-1"
            style="margin-top: 0.4rem !important"
          >
            <div v-for="logo in logos" :key="logo.id">
              <a class="navbar-brand d-none d-sm-block" href="#">
                <img width="100%" height="50" :src="'images/' + logo.image" />
              </a>
            </div>
            <div class="mt-0 d-md-none">
              <a
                style="margin-top: 11px"
                v-b-toggle.sidebar-backdrop
                type="button"
                ><i
                  class="fa fa-bars"
                  style="color: black; line-height: 50px"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
          <div class="col-8 col-md-6 col-sm-6 col-xs-12">
            <div class="form-inline" style="margin-top: 1.1rem !important">
              <input
                class="form-control"
                type="text"
                v-model="searchItem"
                placeholder="Search"
                aria-label="Search"
                autofocus
              />
              <button class="btn my-2 my-sm-0 btnSearch" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div
            class="dropdown col-2 col-sm-2 pt-4 col-md-2 col-xs-12 d-none d-sm-block headerhover hdbox"
          >
            <p class="d-md-none d-lg-block" style="font-weight: bold">
              <img src="/mapImage/map.png" style="height: 34px" />Delivery
              Location
            </p>
             <div class="dropdown-content locationDrop" >  
               <div v-for="divi in divisions" :key="divi.id" class="locationborder">  
                 <router-link :to="{ name: 'districtlocation', params: { id: divi.divisionId } }"><p class="dlist"><img src="mapImage/bdflag.webp" width="15%" height="5%"/>{{divi.division.name}}</p></router-link>
              </div>
          </div>
          </div>
          <div
            class="col-2 col-md-1 pt-4 pl-3 pr-1 lang col-sm-1 col-xs-12 d-none d-sm-block headerhover hdbox"
            style="padding-left: 1.5rem !important"
          >
            <p><span style="color: red">EN </span>| বাং</p>
          </div>
          <div
            class="col-2 col-md-1 pt-4 col-sm-1 col-xs-4 d-none d-sm-block headerhover hdbox"
          >
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </div>
          <div class="col-2 mt-2 col-xs-4" style="top: 11px">
            <i
              class="fa fa-ellipsis-v d-md-none mt-2 menuHeight"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>

      <div class="d-md-none">
        <div>
          <b-sidebar
            id="sidebar-backdrop"
            :backdrop-variant="variant"
            backdrop
            shadow
          >
            <div v-for="logo in logos" :key="logo.id">
              <figure>
                <img class="img-fluid logoImg" :src="'images/' + logo.image" />
              </figure>
            </div>
            <div class="px-3 py-2 mt-0">
              <center class="mtside">
                <button class="btn">
                  <i class="fa fa-gift"></i> OFFER<span class="amount"
                    >&nbsp;<b>(45)</b></span
                  >
                </button>
              </center>
              <navbar> </navbar>
            </div>
          </b-sidebar>
        </div>
      </div>
    </div>
    <!-- ./sidenav and searchbar  -->

    <!-- content category -->
    <div v-if="!$route.meta.hideDashboard">
      <div class="container-fluid" v-if="category == true">
        <div class="row">
          <div
            class="col-6 col-md-3 col-xs-4 hover01"
            v-for="menucat in menucats"
            :key="menucat.id"
          >
            <div class="col-12 col-md-12 col-xs-12">
              <router-link :to="{ name: 'view', params: { id: menucat.id } }">
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'images/' + menucat.catImage"
                  />
                </figure>
              </router-link>
              <center>
                <router-link :to="{ name: 'view', params: { id: menucat.id } }">
                  {{ menucat.catName }}</router-link
                >
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!$route.meta.hideDashboard">
      <div class="container-fluid" v-if="category == true">
        <div class="row"></div>
      </div>
    </div>
    <!-- ./content category -->

    <div v-if="!$route.meta.hideDashboard">
      <div
        class="container-fluid"
        v-for="menu in menus"
        :key="menu.id"
        v-if="category == true"
      >
        <div class="section-divider">
          <span>
            <router-link :to="{ name: 'view', params: { id: menu.id } }">
              <h4>{{ menu.catName }}</h4></router-link
            >
          </span>
        </div>

        <div class="col-12 col-md-12 col-xs-12">
          <div class="row">
            <div
              class="col-6 col-md-2 col-xs-4 col-sm-4 hovereffect paddingImage2"
              v-for="product in prices"
              v-bind:key="product.id"
              v-if="product.categoryId == menu.id"
            >
              <div
                class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
              >
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'images/' + product.image"
                  />
                </figure>

                <div class="overlay">
                  <div style="text-align: center">
                    <a class="info" @click="addCart(product)"
                      >Add To Shopping Cart</a
                    >
                  </div>
                  <div
                    class="hovercart"
                    v-for="cart in carts"
                    v-bind:key="cart.id"
                    v-if="cart.id == product.id"
                  >
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        class="btn btn-info"
                        @click="increment(cart)"
                      >
                        +
                      </button>
                      <button type="button" class="btn btn-info">
                        {{ cart.qun }} in Cart
                      </button>
                      <button
                        type="button"
                        class="btn btn-info"
                        @click="decrement(cart)"
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div class="detail">
                    <a
                      v-b-modal="'modal' + product.productNameId"
                      class="btn btn-success"
                      >Details</a
                    >
                  </div>
                </div>
                <!-- Modal -->
                <b-modal
                  v-bind:id="'modal' + product.productNameId"
                  size="xl"
                  header-bg-variant="info"
                  title=""
                >
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="zoomImg">
                          <zoom-on-hover
                            :img-normal="'images/' + product.image"
                            :img-zoom="'images/' + product.image"
                            :scale="2"
                          ></zoom-on-hover>
                        </div>
                        <br />
                      </div>
                      <div class="col-md-6 col-xs-12 product_content ml-0">
                        <h4>{{ product.pname }}</h4>
                        <div class="ml-0">
                          <span v-for="purchaseProduct in purchaseproducts">
                            <span
                              v-if="
                                purchaseProduct.pname == product.productNameId
                              "
                            >
                              <span
                                v-for="unit in units"
                                :key="unit.id"
                                v-if="purchaseProduct.unit == unit.id"
                                >{{ unit.unit }}<span></span
                              ></span>
                              &nbsp;&nbsp;Brand:&nbsp;<span
                                v-for="brand in brands"
                                :key="brand.id"
                                v-if="purchaseProduct.brand == brand.id"
                                >{{ brand.brand }}</span
                              >
                              &nbsp;&nbsp;Color:&nbsp;<span
                                v-for="color in colors"
                                :key="color.id"
                                v-if="purchaseProduct.color == color.id"
                                >{{ color.color }}
                              </span>
                            </span>
                          </span>
                        </div>
                        <p>
                          <span class="cost"
                            ><span>৳</span> {{ product.salesPrice }}</span
                          >&nbsp;&nbsp;
                          <span class="tk">৳</span
                          >&nbsp;<del>12400</del>&nbsp;&nbsp;
                          <span style="color: red">2%&nbsp;Off</span>
                        </p>
                        <div class="btn-ground">
                          <div class="row">
                            <div class="col-12 col-md-6 col-xs-12">
                              <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                  <button
                                    class="btn btn-dark btn-sm minusbtn"
                                    id="minus-btn"
                                  >
                                    <i class="fa fa-minus"></i>
                                  </button>
                                </div>
                                <button
                                  type="number"
                                  id="qty_input"
                                  class="form-control form-control-sm buttonInput"
                                  value="1"
                                  min="1"
                                >
                                  0 in Cart
                                </button>
                                <div class="input-group-prepend">
                                  <button
                                    class="btn btn-dark btn-sm plusbtn"
                                    id="plus-btn"
                                    @click="addCart(product)"
                                  >
                                    <i class="fa fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                              <div
                                class="input-group mb-3 incre"
                                v-for="cart in carts"
                                v-bind:key="cart.id"
                                v-if="cart.id == product.id"
                              >
                                <div class="input-group-prepend">
                                  <button
                                    class="btn btn-dark btn-sm minusbtn"
                                    id="minus-btn"
                                    @click="decrement(cart)"
                                  >
                                    <i class="fa fa-minus"></i>
                                  </button>
                                </div>
                                <button
                                  type="number"
                                  id="qty_input"
                                  class="form-control form-control-sm buttonInput"
                                  value="1"
                                  min="1"
                                >
                                  {{ cart.qun }} in Cart
                                </button>
                                <div class="input-group-prepend">
                                  <button
                                    class="btn btn-dark btn-sm plusbtn"
                                    id="plus-btn"
                                    @click="addCart(product)"
                                  >
                                    <i class="fa fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div class="col-xs-12">
                              <button
                                type="button"
                                class="btn btn-primary buynow"
                                @click="addCart(product)"
                                onclick="openNav()"
                                v-on:click="
                                  $bvModal.hide('modal' + product.productNameId)
                                "
                              >
                                <span
                                  class="glyphicon glyphicon-shopping-cart"
                                ></span>
                                Buy Now
                              </button>
                            </div>
                            <div
                              class="col-xs-12 buynowclose"
                              v-for="cart in carts"
                              v-bind:key="cart.id"
                              v-if="cart.id == product.id"
                            >
                              <button
                                type="button"
                                class="btn btn-primary buynow"
                                onclick="openNav()"
                                v-on:click="
                                  $bvModal.hide('modal' + product.productNameId)
                                "
                              >
                                <span
                                  class="glyphicon glyphicon-shopping-cart"
                                ></span>
                                Buy Now
                              </button>
                            </div>
                            <div class="col-sm-4"></div>
                          </div>
                        </div>
                        <h5 class="pdetails">Product Detais</h5>

                        <div v-html="product.details"></div>

                        <h5 class="pdetails">Speciality</h5>
                        <div v-html="product.speciality"></div>
                      </div>
                    </div>
                  </div>

                  <div class="d-none d-sm-block">
                    <div class="col-md-12 toph">
                      <div class="container">
                        <ul class="nav nav-tabs" role="tablist">
                          <li class="nav-item" style="background: #c2d5e1">
                            <a
                              class="nav-link active"
                              data-toggle="tab"
                              href="#home"
                              >Order Policy</a
                            >
                          </li>
                          <li class="nav-item" style="background: #c2d5e1">
                            <a class="nav-link" data-toggle="tab" href="#menu1"
                              >Delivary Charge</a
                            >
                          </li>
                          <li class="nav-item" style="background: #c2d5e1">
                            <a class="nav-link" data-toggle="tab" href="#menu2"
                              >Delivery Area</a
                            >
                          </li>
                          <li class="nav-item" style="background: #c2d5e1">
                            <a class="nav-link" data-toggle="tab" href="#menu2"
                              >Product Return Policy</a
                            >
                          </li>
                          <li class="nav-item" style="background: #c2d5e1">
                            <a class="nav-link" data-toggle="tab" href="#menu2"
                              >Free Family Bazar</a
                            >
                          </li>
                          <li class="nav-item" style="background: #c2d5e1">
                            <a class="nav-link" data-toggle="tab" href="#menu2"
                              >Referrence
                            </a>
                          </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                          <div id="home" class="container tab-pane">
                            <br />
                            <h3>HOME</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                          </div>
                          <div id="menu1" class="container tab-pane fade">
                            <br />
                            <h3>Menu 1</h3>
                            <p>
                              Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo
                              consequat.
                            </p>
                          </div>
                          <div id="menu2" class="container tab-pane fade">
                            <br />
                            <h3>Menu 2</h3>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-modal>
                <!--./ Modal -->
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  style="height: 85px"
                  v
                >
                  <p style="text-align: left">{{ getProductName(product) }}</p>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <div class="row">
                    <div class="col-6 col-md-5 col-xs-4 amountBox paddingImage">
                      <center>
                        <p class="amount">
                          <span class="tk">৳</span>&nbsp;{{
                            product.salesPrice
                          }}
                        </p>
                      </center>
                    </div>
                    <div
                      class="col-6 col-md-7 col-xs-4 discountBox paddingImage"
                    >
                      <center>
                        <p class="amountDiscount">
                          <span class="tk">৳</span>&nbsp;<del>12400</del>
                        </p>
                      </center>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <center>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                  </center>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage3">
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(product)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage3 adcart"
                  v-for="cart in carts"
                  v-bind:key="cart.id"
                  v-if="cart.id == product.id"
                >
                  <center>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="increment(cart)"
                      >
                        +
                      </button>
                      <button type="button" class="btn btn-danger">
                        {{ cart.qun }} in Cart
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="decrement(cart)"
                      >
                        -
                      </button>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- cartbox -->
    <div v-if="!$route.meta.hideDashboard">
      <div class="container-fluid d-none d-sm-block" onclick="openNav()">
        <div
          :class="{ 'bounce animated': animated }"
          @animationend="animated = false"
          class="col-2 col-md-2 cart1 shadow-lg carthover rounded"
        >
          <i class="fa fa-shopping-bag shoppingBag" aria-hidden="true"></i>
          <p class="cartItem">Item:{{ badge }}</p>
        </div>
        <div class="col-2 col-md-2 cart2 shadow-lg rounded">
          <p class="cartItem2">
            <span class="tk">৳</span>&nbsp;<animated-number
              :value="totalprice"
            />
          </p>
        </div>
      </div>
    </div>
    <!-- ./cartbox -->
    <!-- ./sidebarcartbox -->
    <div>
      <div
        id="mySidebar"
        class="sidebar1 shadow-lg bg-white rounded overflow-auto"
      >
        <div class="col-12 col-xs-1" style="background-color: green">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
            ><i class="fa fa-chevron-right close" aria-hidden="true"></i>
          </a>
        </div>
        <div class="col-12 col-md-12 mt-0" style="background-color: #dcd8d8">
          <p>
            <img :src="'frontend/image/cart1.png'" class="cartImg" /> Item
            {{ badge }}&nbsp;<b class="tk">৳&nbsp;</b
            >{{ totalprice }}&nbsp;Discount:<span class="tk">৳&nbsp;</span>4000
          </p>
        </div>
        <div class="col-12 col-md-12 cartml overflow-auto">
          <table class="table table-hover">
            <tbody>
              <tr v-for="(cart, index) in carts" v-bind:key="cart.id">
                <td scope="row">
                  <div class="btn-group-vertical" style="left: 19px">
                    <button
                      type="button"
                      class="btn btn-secondary in1"
                      @click="increment(cart)"
                    >
                      <p class="ini">+</p>
                    </button>
                    <p class="pqun">{{ cart.qun }}</p>
                    <button
                      type="button"
                      class="btn btn-secondary dec"
                      @click="decrement(cart)"
                    >
                      <p class="dei">-</p>
                    </button>
                  </div>
                </td>
                <td>
                  <figure>
                    <img
                      :src="'images/' + cart.image"
                      class="cartImg mt-7"
                      style="margin-left: -9px; margin-top: -2px"
                    />
                  </figure>
                </td>
                <td class="p-0">
                  <p class="cartpname">{{ cart.pname }}</p>
                </td>
                <td class="p-0">
                  <p class="cartprice">
                    <span class="tk">৳</span>{{ cart.price }}
                  </p>
                </td>
                <td class="p-0">
                  <a
                    @click="removeCart(index)"
                    style="margin-left: -29px; font-size: 15px"
                    ><i class="fa fa-times" aria-hidden="true"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <td>
                <button type="button" class="btn btn-success">
                  Plase Order
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-danger">
                  <i class="fa fa-gift" aria-hidden="true"></i
                  >&nbsp;Offer&nbsp;(37)
                </button>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- ./sidebarcartbox -->
    <!-- .Footer -->
    <div v-if="!$route.meta.hideDashboard">
      <footer class="footer d-md-none shadowfooter bg-white rounded">
        <div class="container-fluid">
          <div class="row p-2 mb-0">
            <div class="col-3 col-xs-3">
              <i class="fa fa-home ml-2" aria-hidden="true"></i>
              <p>Home</p>
            </div>

            <div class="col-3 col-xs-3">
              <i class="fa fa-gift ml-2" aria-hidden="true"></i>
              <p>Offer</p>
            </div>

            <div class="col-3 col-xs-3" onclick="openNav()">
              <i class="fa fa-shopping-cart ml-2" aria-hidden="true"></i>
              <span
                :class="{ 'bounce animated': animated }"
                @animationend="animated = false"
                class="badge badge-warning"
                id="lblCartCount"
              >
                {{ badge }}
              </span>
              <p>Cart</p>
            </div>

            <div class="col-3 col-xs-3">
              <i class="fa fa-user ml-2" aria-hidden="true"></i>
              <p>Login</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- ./Footer -->
  </div>
</template>



<script>
import AnimatedNumber from "animated-number-vue";

export default {
  name: "Quantity",
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      searchItem: "",
      products: [],
      informations: [],
       toggled: [],
      carts: [],
      cartadd: {
        id: "",
        name: "",
        image: "",
        price: "",
        salesPrice: "",
        stock: "",
        pname: "",
      },
      prices: [],
      pnames: [],
      menucats: [],
      menus: [],
      pcats: [],
      result: [],
      sliders: [],
      purchaseproducts: [],
      logos: [],
      searchProduct: [],
      units: [],
      colors: [],
      brands: [],
      divisions: [],
      badge: "0",
      qun: 1,
      pid: "",
      totalprice: "0",
      animated: false,
      myModl: false,
      slider: true,
      category: true,
      categoryItem: true,
      quantity: 1,
      resultDiv: {
        display: "none",
      },
    };
  },
  mounted() {
    
    this.viewMenuCat();
    this.viewPrice();
    this.viewCart();
    this.viewMenu();
    this.viewProductCat();
    this.viewProductName();
    this.viewSearchProduct();
    this.viewSlider();
    this.viewLogo();
    this.viewPurchaseProduct();
    this.viewColor();
    this.viewUnit();
    this.viewBrand();
    this.viewDivision();
  },

  methods: {
    viewDivision(){
      axios.get('deliveryLocationWeb').then((res)=>{
       this.divisions=res.data.division;
      })
    },
    viewCart() {
      if (localStorage.getItem("carts")) {
        this.carts = JSON.parse(localStorage.getItem("carts"));
        this.badge = this.carts.length;

        this.totalprice = this.carts.reduce((total, item) => {
          return total + this.qun * item.price;
        }, 0);
      }
    },
    viewPurchaseProduct() {
      axios
        .get("purchaseProductGet")

        .then((res) => {
          this.purchaseproducts = res.data.productgt;
        })
        .catch((err) => console.log(err));
    },
    openModel() {
      this.myModl = true;
    },
    addCart(pro) {
      var findProduct = this.carts.find((o) => o.id === pro.id);
      if (findProduct) {
        findProduct.qun++;
        findProduct.price = findProduct.qun * findProduct.salesPrice;
        this.storeCart();
        this.animated = true;
      } else {
        this.cartadd.id = pro.id;
        this.cartadd.name = pro.name;
        this.cartadd.price = pro.salesPrice;
        this.cartadd.salesPrice = pro.salesPrice;
        this.cartadd.qun = 1;
        this.cartadd.image = pro.image;
        this.cartadd.pname = pro.pname;
        this.carts.push(this.cartadd);
        this.cartadd = {};
        this.storeCart();
        this.animated = true;
      }
    },
    increment(pro) {
      var findProduct = this.carts.find((o) => o.id === pro.id);
      findProduct.qun++;
      findProduct.price = findProduct.qun * findProduct.salesPrice;
      this.storeCart();
      this.animated = true;
    },
    decrement(pro) {
      var findProduct = this.carts.find((o) => o.id === pro.id);
      if (findProduct.qun === 1) {
        alert("Negative quantity not allowed");
      } else {
        findProduct.qun--;
        findProduct.price = findProduct.qun * findProduct.salesPrice;
        this.storeCart();
        this.animated = true;
      }
    },
    removeCart(index) {
      this.carts.splice(index, 1);
      this.storeCart();
    },
    viewBrand() {
      fetch("api/brands")
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewUnit() {
      fetch("api/units")
        .then((res) => res.json())
        .then((res) => {
          this.units = res.data;
        })
        .catch((err) => console.log(err));
    },

    viewColor() {
      fetch("api/colors")
        .then((res) => res.json())
        .then((res) => {
          this.colors = res.data;
        })
        .catch((err) => console.log(err));
    },
    storeCart(pro) {
      let parsed = JSON.stringify(this.carts);
      localStorage.setItem("carts", parsed);
      this.viewCart();
    },
    viewMenuCat() {
      axios
        .get("viewMenuCat")
        .then((res) => {
          this.menucats = res.data.menucatlist;
        })
        .catch((err) => console.log(err));
    },
    viewPrice() {
      axios
        .get("productView")
        .then((res) => {
          this.prices = res.data.priceget;
        })
        .catch((err) => console.log(err));
    },
    viewSearchProduct() {
      axios
        .get("searchProductView")
        .then((res) => {
          this.searchProduct = res.data.productget;
        })
        .catch((err) => console.log(err));
    },

    viewLogo() {
      fetch("api/sliderhome/create")
        .then((res) => res.json())
        .then((res) => {
          this.logos = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.pnames = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewMenu() {
      axios
        .get("productView/create")
        .then((res) => {
          this.menus = res.data.menulist;
        })
        .catch((err) => console.log(err));
    },
    detailsInfo(id) {
      axios
        .get(`productView/${id}`)
        .then((res) => {
          this.informations = res.data;
        })
        .catch((err) => console.log(err));
    },

    viewProductCat() {
      fetch("api/productcat")
        .then((res) => res.json())
        .then((res) => {
          this.pcats = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewSlider() {
      fetch("api/sliderhome")
        .then((res) => res.json())
        .then((res) => {
          this.sliders = res.data;
        })
        .catch((err) => console.log(err));
    },
    getProductName(product) {
      let pname = this.stripTags(product.pname);

      return pname.length > 35 ? pname.substring(0, 35) + "..." : pname;
    },
    isActive(item) {
      return this.toggled.indexOf(item) >= 0;
    },
    toggleItem(item) {
      const index = this.toggled.indexOf(item);

      if (index >= 0) {
        this.toggled.splice(index, 1);
        return;
      }

      this.toggled.push(item);
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    stripTags(text) {
      return text.replace(/(<([^>]+)>)/gi, "");
    },
    search(val) {
      var app = this;
      axios.get("searchProduct/" + val).then(function (response) {
        app.result = response.data;
      });
    },
  },
  watch: {
    searchItem: function (val) {
      this.$router.push({ name: "searchproduct" });
      this.search(val);
      if (!this.searchItem) {
        this.resultDiv.display = "none";
        this.slider = true;
        this.category = true;
        this.categoryItem = true;
      } else {
        this.resultDiv.display = "block";
        this.slider = false;
        this.category = false;
        this.categoryItem = false;
      }
    },
  },
};
</script>
