'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('eye-php') + ' generator!'
    ));
    this.log(
      'We are currently developing this generator, many features is missing now'
    );
  },

  writing: function () {
     this.log(
      'Type ' + chalk.red('yo eye-php:module') + ' in application folder to generate new module'
    );
  }
});
