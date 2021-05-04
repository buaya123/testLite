<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id('schedule_id');
            $table->UnsignedBigInteger('class_id');
            $table->UnsignedBigInteger('teacher_id');
            $table->UnsignedBigInteger('subject_id');
            $table->UnsignedBigInteger('gradeSheet_id');
            $table->dateTime('time_start');
            $table->dateTime('time_end');

            $table->index('class_id');
            $table->index('teacher_id');
            $table->index('subject_id');
            $table->index('gradeSheet_id');

            $table->foreign('class_id')->references('class_id')->on('classes');
            $table->foreign('teacher_id')->references('teacher_id')->on('teachers');
            $table->foreign('subject_id')->references('subject_id')->on('subjects');
            $table->foreign('gradeSheet_id')->references('gradeSheet_id')->on('grade_sheets');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
