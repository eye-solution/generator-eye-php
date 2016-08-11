function pascal(str) {
  function up(str) {
    var first = str[0].toUpperCase();
    return first + str.substr(1);
  }
  var arr = str.split(/[\s\-\_]/g);
  arr = arr.map(up);
  return arr.join('');
}

function argConcat(arguments) {
	var name = '';
	if (arguments.length) {
      name = arguments[0];
      for (var i = 1; i < arguments.length; i++) {
        name += ' ' + arguments[i];  
      }
    }
    return name;
}

module.exports = {
	pascal: pascal,
	argConcat: argConcat
}
