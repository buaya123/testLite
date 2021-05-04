<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exams', function (Blueprint $table) {
            $table->id('exam_id');
            $table->integer('highestPossibleScore');
            $table->string('description');
            $table->UnsignedBigInteger('gradeSheet_id');
            
            $table->index('gradeSheet_id');
            
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
        Schema::dropIfExists('exams');
    }
}
