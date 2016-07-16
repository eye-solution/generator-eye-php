'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var name = "index";
    if (arguments.length) {
      name = arguments[0];
      for (var i = 1; i < arguments.length; i++) {
        name += ' ' + arguments[i];  
      }
    }

    name = pascal(name);
    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Please enter module name:',
      default: name
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.template('controller.php','controllers/' + this.props.name + 'Controller.php', this.props)
    this.template('model.php','models/' + this.props.name + '.php', this.props)
    this.template('router.php','routers/' + this.props.name + 'Router.php', this.props)
  }

  
});


function pascal(str) {
  function up(str) {
    var first = str[0].toUpperCase();
    return first + str.substr(1);
  }
  var arr = str.split(/[\s\-\_]/g);
  arr = arr.map(up);
  return arr.join('');
}