<div class="col-6 col-md-2 mt-0 d-none d-sm-block"  style="position:fixed">
    <div >
    @php
    $offer=\App\Models\Offer::count();
    @endphp
 
        <ul class="navbar-nav mr-auto sidenav shadow p-3 mb-5  bg-white rounded" id="navAccordion">
        @if($offer!==0)
        <button  ><router-link to='/offerview'><i class="fa fa-gift"></i> OFFER<span class="amount">&nbsp;<b>({{$offer}})</b></span></router-link></button>
        @endif
            <navbar>
            </navbar>
        </ul>
  
    </div>
</div>