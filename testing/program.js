// RED GREEN TESTING

function add(x, y) {
  return x + y;
}

add(2, 3);

// expect 2 + 3 == 5  // green
// expect error if string // red
// expect 0.1 + 0.2 == 0.3 // red

function add(x, y) {
  if ( (typeof x && typeof y) !== 'number' ) {
    throw new Error('Params must be a number.');
  }
  return x + y;
}

add(2, 3);

// expect 2 + 3 == 5  // green
// expect error if string // green
// expect 0.1 + 0.2 == 0.3 // red

function add(x, y) {
  var result;
  if ( (typeof x && typeof y) !== 'number' ) {
    throw new Error('Params must be a number.');
  }

  result = x + y;
  if (parseInt(result) !== result) {
    result = parseFloat(result.toFixed(1));
  }
  return x + y;
}

add(2, 3);

// expect 2 + 3 == 5  // green
// expect error if string // green
// expect 0.1 + 0.2 == 0.3 // green

expect(add(2,3)).toBe(5);
expect(add(2,'test')).toThrow();
expect(add(0.1,0.2)).toBe(0.3);

