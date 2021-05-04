<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGradingTablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grading_tables', function (Blueprint $table) {
            $table->id('gradingTable_id');
            $table->UnsignedBigInteger('subjectType_id');
            $table->UnsignedBigInteger('component_id');
            $table->UnsignedBigInteger('gradingSystem_id');
            $table->Integer('weight');

            $table->index('subjectType_id');
            $table->index('component_id');
            $table->index('gradingSystem_id');

            $table->foreign('subjectType_id')->references('subjectType_id')->on('subject_types');
            $table->foreign('component_id')->references('component_id')->on('components');
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
        Schema::dropIfExists('grading_tables');
    }
}
