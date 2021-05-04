<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id('student_id');
            $table->string('idNumber')->unique();
            $table->string('fname');
            $table->string('mname');
            $table->string('lname');
            $table->string('schoolEmail')->unique();
            $table->string('passowrd');
            $table->integer('entranceExamScore');
            $table->boolean('isEnrolled');
            $table->integer('age');
            $table->integer('gradeLevel');
            $table->integer('class_id');
            $table->string('contactNumber');
            $table->timestamp('schoolYearEnrolled');
            $table->rememberToken();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
