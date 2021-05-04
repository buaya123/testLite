<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGradeSheetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grade_sheets', function (Blueprint $table) {
            $table->id('gradeSheet_id');
            $table->unsignedBigInteger('gradingSystem_id');

            $table->index('gradingSystem_id');

            $table->foreign('gradingSystem_id')->references('gradingSystem_id')->on('grading_systems');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grade_sheets');
    }
}
