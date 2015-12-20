module.exports = function filterModuleF(pathname, extension, callback) {

  var fs = require('fs');
  var path = require('path');

  fs.readdir(pathname, function (err, data) {

    var filtered_data = new Array;

    if (err) {
      return callback(err);
    }

    data.forEach(function (pathname) {
      if (path.extname(pathname) === '.' + extension)
        filtered_data.push(pathname);
    });

    callback(null, filtered_data);

  });
};


/* official:

    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }

/*


