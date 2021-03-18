<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerRegistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('name',100);
            $table->string('fname',100)->nullable();
            $table->string('fullname',100)->nullable();
            $table->string('mname',100)->nullable();
            $table->string('dob',100)->nullable();
            $table->string('nid',100)->nullable();
            $table->string('email',100);
            $table->string('phone',100)->nullable();
            $table->string('image',100)->nullable();
            $table->string('sponsorId',100)->nullable();
            $table->longText('permanentAddress')->nullable();
            $table->integer('terms');
           
            $table->longText('presentAddress')->nullable();
           
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer_registrations');
    }
}
