var fs = require('fs'); // load filesystem module

fs.readFile(process.argv[2], function finishedReading(error, data) {
  if (error) return console.error(error);

  var str = data.toString();

  var arr = str.split('\n');

  console.log(arr.length-1);

});

/* official:
    var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/