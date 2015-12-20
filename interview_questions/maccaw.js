// OBJECT PROTOTYPES
var spacify = function spacifyF(str) {
  return str.split('').join(' ');
};

//console.log(spacify('hello world'));

String.prototype.spacify = function() {
  return this.split('').join(' ');
};

//console.log('hello world'.spacify());

// ARGUMENTS
//log('hello world');

function log(msg) {
  console.log(msg);
}

//log('hello', 'world');

function log() {
  console.log.apply(console, arguments);
}

//log('hello', 'world');

function log() {
  var args = Array.prototype.slice.call(arguments);
  args.unshift('(app)');
  console.log.apply(console, args);
}

// CONTEXT

var User = {
  count: 1,

  getCount: function() {
    return this.count;
  }
};

//console.log(User.getCount());

var func = User.getCount;
//console.log(func());

var func = User.getCount.bind(User);
console.log(func());

