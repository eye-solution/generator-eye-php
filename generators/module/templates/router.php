<?php
use Slim\Container as ContainerInterface;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require('../controllers/<%= name %>Controller.php');
$app->get('/', '\<%= name %>Controller:index');
