
var filterModule = require('./filter_module');

filterModule(process.argv[2], process.argv[3], function callback(err, data) {

  if (err) {
    console.log("There was an error.")
  }
  else {
    data.forEach(function(pathname) {
      console.log(pathname);
    });
  } 

});

/* official:

    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)
    
      list.forEach(function (file) {
        console.log(file)
      })
    })

/*