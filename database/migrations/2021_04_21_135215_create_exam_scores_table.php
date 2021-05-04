<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamScoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exam_scores', function (Blueprint $table) {
            $table->id('examScore_id');
            $table->UnsignedBigInteger('student_id');
            $table->UnsignedBigInteger('exam_id');
            $table->Integer('score');

            $table->index('student_id');
            $table->index('exam_id');

            $table->foreign('student_id')->references('student_id')->on('students');
            $table->foreign('exam_id')->references('exam_id')->on('exams');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exam_scores');
    }
}
