'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var helper = require('../helper');

module.exports = yeoman.Base.extend({
  initializing: function() {
    this.folder = '.';
    this.argName = helper.argConcat(arguments);
    if (this.argName) {
      this.folder += '/' + this.argName;
    }
  },
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('eye-php') + ' generator!'
    ));
  },

  writing: function () {
    this.log(
      'Clone ' + chalk.red('eye-solution/slim-pug-eloquent') + ' repo from github'
    );
    var folder = this.folder;
    var db = this.argName ? this.argName : 'test';

    this.remote('eye-solution', 'slim-pug-eloquent', function(err, remote) {
      console.log('err');
      console.log(err);
      console.log('remote');
      console.log(remote);
      remote.bulkDirectory('.', folder);
    });
    this.template('config.php','config.php', {db: db})
  },

  end: function() {
    var folder = arguments[0];
    this.log(' ---------------- Next ---------------- ');
    var lines = [];
    var index = 0;
    if (folder) {
      lines.push(++index + '. Type ' + chalk.red('cd ' + folder) + ' to enter application folder')
    }
    lines.push(++index + '. Type ' + chalk.red('composer install') + ' or ' + chalk.red('php composer.phar install') + ' to install dependencies');
    lines.push(++index + '. Type ' + chalk.red('yo eye-php:module <name>') + ' to generate new module');
    this.log(lines.join('\n'));
  }
});
