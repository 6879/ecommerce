@extends('admin.layouts.header')
@section('content')
<div class="st-content" id="content">
    <div class="st-content-inner">

        <div class="container-fluid">
            <div class="row" data-toggle="isotope">
                <router-view></router-view>
            </div>

        </div>
    </div>
</div>

@endsection