'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var helper = require('../helper');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var name = "index";
    var argName = helper.argConcat(arguments);
    name = argName ? argName : name;
    name = helper.pascal(name);
    
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
    this.template('router.php','routes/' + this.props.name + 'Router.php', this.props)
    this.template('create-table.php','db/' + this.props.name + '_create_table.php', this.props)
  }

  
});
