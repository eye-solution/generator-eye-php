<?php

    $config = [
        'determineRouteBeforeAppMiddleware' => false,
        'displayErrorDetails' => true,
        'db' => [
            'driver' => 'mysql',
            'host' => 'localhost',
            'port' => 3306,
            'database' => '<%= db %>',
            'username' => 'root',
            'password' => 'root',
            'prefix'    => '',
            'charset' => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'unix_socket' => '/Applications/MAMP/tmp/mysql/mysql.sock',
        ]
    ];