console.log("-----------------------------------Values and Types");

// ES6(6th edition of ECMAScript) is a newer version of Javascript

// We have types values not types variable. These are the built-in-types in javascript
console.log("Built-in-types in javascript");
console.log(

  "1.", "string",
  "2.", "number",
  "3.", "boolean",
  "4.", "null,  undefined",
  "5.", "object",
  "6.", "symbol(new to ES6)",
);

// Javascript provides a typeof you can use to examine the variable to the type
 a  = "";
console.log("a: ", typeof(a));
a = 7;
console.log("b: ", typeof(a));
a = true;
console.log("c: ", typeof(a));
a = {a: 1, h: 6};
console.log("d: ", typeof(a));
a = [2, 56,3];
console.log("e: ", typeof(a));
a = null;
console.log("f: ", typeof a);
a;
console.log("g: ", typeof(b));

//  the type of "abc" returns "string" not string.

// An object is a compound values where you can set properties that each hold their own values of any type.
const obj = {
  a: "Divine",
  b: "Shedrack",
  c: "Success"
}

// OR use reference
var get = "c";

console.log("divine: ", obj.a);
// OR
console.log("divine2: ", obj[get]);

// An array is an object that holds arrays

console.log("----------------------------Functions");

// Functions in Javascript are objects.
// It also referred to as "Function Object" or "Callable Object".

function foo() {
  return 42;
}

foo.bar = "Hello world!";
foo.num = 45;

console.log(typeof foo);
console.log(typeof foo());
console.log(typeof foo.bar);


console.log("-------------------------Comparing Values");
// Coercion is the process of converting a value from one type to another.
// Two types of coercion
/* 1. Explicit coercion in javascript is the process of intentionally converting a value
 from one data type to another using built-in functions or methods.
 These functions or methods could be primitive constructors like Number(), String(), or Boolean()
 */
/* 2. Implicit coercion is the process of using operators to coverts a
     value to another or
     is when Javascript automatically converts one value/data to another
 */
//OR
/* Implicit coercion in JavaScript is the process where
 JavaScript automatically converts a value from
 one data type to another, often during the evaluation
 of an expression using operators.
 This does not require explicit request from the
 programmer and is handled "under the hood" by the
 JavaScript engine.*/

//e.g of explicit coercion
a = "Divine";
// It's immediately coerced to boolean => Explicitly
console.log(Boolean(a));

a = "56";
// It's immediately coerced to number => Implicitly
console.log(a + 1);

/*
* List of falsy
* 1. nul, undefined
* 2. 0, -0, NaN
* 3. ""
* 4. false
* */

/*
* List of truthy
* 1. "0"
* 2. 3
* 3. true
* 4. {}
* 5. [], [1234
* 6. -1
* 7. 1
* infinity
* -infinity
* Bigint values other than 0n
* function foo() {...}
*
* */

console.log("--------------------------------Equality");

/*
* There are four equality operations
* 1. ==
* 2. === (strict equality)
* 3. !=
* 4. !==
*
* == -> Only checks for value equality, and it's also allowed coercion.
* ===(strict equality) -> Checks both value and type equality. It doesn't allowed coercion.
*  */

// arrays by default coerced to string by simply joining commas in between (,)

a = "42";
b = 42;

doubleEquality = a == b;
strictEquality = a === b;

console.log("== equality: ", doubleEquality);
console.log("=== equality: ", strictEquality);