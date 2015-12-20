var http = require('http');

var url = process.argv[2];

function getURL(callback) {
  http.get(url, function finshedGetting(response) {
    callback(response);
  });
}

function writeResponse(response) {
  response.setEncoding('utf8').on("data", function(data) {
    console.log(data);
  });
}

getURL(writeResponse);

/* official

    var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })

*/


/*
// var fs = require('fs');
// var number = undefined;

//callback: logMyNumber
function addOne(callback) {
  fs.readFile('number.txt', function finishedReading(err, data) {
    number = parseInt(data);
    number++;
    callback();
  });
}

// callback for addOne
function logNumber() {
  console.log(number);
}

addOne(logNumber);

*/