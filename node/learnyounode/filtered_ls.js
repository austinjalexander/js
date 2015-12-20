var fs = require('fs');
var path = require('path');

var args = process.argv
//console.log(args);

var pathname = args[2];
//console.log(pathname);

var extension = args[3];
//console.log(extension);

fs.readdir(pathname, function callback(error, list) {

  var filtered_list = [];

  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) == "." + extension) {
      filtered_list.push(list[i]);
    }
  }

  for (var i = 0; i < filtered_list.length; i++) {
    console.log(filtered_list[i]);
  }

});

/* official:
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
/*


