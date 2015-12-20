// WHITESPACE
// use these for comments
/* avoid these because of regex possible use */

// NAMES
// should-have-been reserved: undefined, NaN, Infinity

// NUMBERS
// only a single number type, 64-bit floating point; 1 and 1.0 are same value, avoiding many different numeric type errors
//console.log(1 === 1.0); //true
//console.log(1e2);
//console.log(isNaN(NaN));
//console.log(NaN == NaN); //false
//console.log(Infinity); //represents all values > 1.79...e+308
//console.log(Math.floor(2.5));

// STRINGS
// all characters are 16 bits wide; no character type; strings are immutable
// "A" === "\u0041"  //true
// "seven".length == 5
// 'c' + 'a' + 't' === 'cat' //true
// 'cat'.toUpperCase() == 'CAT'

// STATEMENTS
// compilation units (e.g., within script tags); no linker, so all are in global namespace
// var inside a function is for private variables
// switch, while, for, do have optional label prefix
// blocks {} do not create a new scope, so variables should be defined at top, not in blocks
// falsy values: false, null, undefined, '', 0, NaN
// truthy values: all others
// for (name in expression) {} : enumerates property names/keys of an object
/*
for (myvar in obj) {
  // test to determine property name is truly a member of object instead of prototype chain
  if (obj.hasOwnProperty(myvar)) {
  }
} 
*/
// try {} catch (name) {}
// throw (expression)
// break can optionally take a label
// delete expression refinement

// EXPRESSIONS
// literal (string, number), variable, built-in value (true, false, null, undefined, NaN, Infinity), invocation (preceded by new), refinement (preceded by delete), parenthetical, prefixed, expression followed by an infix and another expression, the ternary operator (and the rest of such a conditional expression), an invocation, or a refinement
// precedence: 
// refinement and invocation: . [] ()
// unary operators: delete new typeof + - !

