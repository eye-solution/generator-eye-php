<?php

require('../vendor/autoload.php');
require('../framework/config.php');

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Schema\Blueprint;


$capsule = new Capsule;
$capsule->addConnection($config['db']);
$capsule->setAsGlobal();
$capsule->bootEloquent();

date_default_timezone_set('GMT+7');

$Schema = $capsule->schema();

$Schema->create('<%= name.toLowerCase() %>', function (Blueprint $table) {
    $table->increments('id');
    $table->string('name');
    //TODO: modify this file
});
