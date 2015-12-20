//1) console.log("HELLO WORLD");

//2) console.log(process.argv);
/*
(function() {
  var result = 0
  for (var i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
  }
  console.log(result)
}());
*/

//3) I/O
/*
var fs = require('fs'); // load filesystem module

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var arr = str.split('\n');

console.log(arr.length-1);

// official solution:
var contents = fs.readFileSync(process.argv[2]);
var contents = fs.readFileSync(process.argv[2], 'utf8');
var lines = contents.toString().split('\n').length - 1;

