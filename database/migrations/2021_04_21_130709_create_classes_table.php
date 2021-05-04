<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClassesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('classes', function (Blueprint $table) {
            $table->id('class_id');
            $table->string('schoolYear');
            $table->unsignedBigInteger('section_id');
            $table->unsignedBigInteger('adviserTeacher_id');

            $table->index('section_id');
            $table->index('adviserTeacher_id');

            $table->foreign('section_id')->references('section_id')->on('sections');
            $table->foreign('adviserTeacher_id')->references('teacher_id')->on('teachers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('classes');
    }
}
