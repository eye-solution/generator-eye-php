<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require("../models/<%= name %>.php");

class <%= name %>Controller extends Controller {
  public function index(Request $request, Response $response) {
  	$this->view->render('index.jade', array(
  		'title' => '<%= name %>',
  		'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
   	));
    return $response;
  }
}

?>