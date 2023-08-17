// Expressions in this provided code. There are four expression in this code
//  1. a is a variable expression.
//  2. 2 is a literal expression(implicit)
//  3. a * 2 is an arithmetic expression
//  4. b = a * 2 is an assignment expression

// Some common operators in Javascript
/*
* = - Assignment Operator.
* e.g a = 2;
* It means that value of 2 is assign to a variable
*  */

/*
* (*) - multiplication, (+) - addition, (-) - subtraction, (/) - division - Math Operator
*  e.g a * 2 or a - 2 or a + 2 or a / 2;
* It means that it multiplies value of 2 to a variable
* */

/*
* +=, *=, -=, /= - Compound assignment Operator
* e.g a += 2 means a = a + 2 or a = a * 2;
* It means that we added value of 2 to  a variable and then store it to another a variable.
* */

/*
* (++, --) - Increment / decrement Operator
* e.g a++ means a = a + 1
* It means that we added / subtract value of 1 to a
* variable and then store it resulting value which is 42 to b variable.
* */

/*
  Equality Operator
* ==(loose equality), ===(strict equality), !=(loose not-equals), !==(strict not-equals)
e.g a == b; loose equality, a === b ; strict equality
* */

/*
* Comparison Operator
* < - less than, > - greater than, <= - less than or loose-equals, >= - greater than or loose-equals
* e.g a <= b;
* It means that a is less than or loose-equals to b
* */

/*
* Logical Operator
* && - and, || - or
* e.g a && b or a || b;
*
* */

// Converting primitives types  is called "Coercion"




a = new Number(21);
console.log("a: ", a)
console.log(Object.fromEntries([["a", 2], ["b", 3], ["c", 5]]))

b = a * 2;

console.log("answer", b)

class Car {
  name;
  doors;
  color;
  seat;

  constructor(name, doors, color, seat) {
    this.name = name;
    this.seat = seat;
    this.doors = doors;
    this.color = color;
  }

  start() {
    console.log("Starting ", this.name, "car!")
  }

  stop() {
    console.log(this.name, " car has stopped!");
  }

  move(from, to) {
    console.log(this.name, " is moved from ", from, " to ", to, "!");
  }

  paint(color) {
    const oldColor = this.color;

    this.color = color;

    console.log(this.name, "car is repainted to ", color, ". The old color was: ", oldColor);
  }
}

let toyotaCorolla = new Car("divne", 2, "white", 4);
console.log(toyotaCorolla)

toyotaCorolla.paint("Green");
console.log(toyotaCorolla);

toyotaCorolla.start();

toyotaCorolla.move("Lagos", "Anambra");

toyotaCorolla.stop();

a = 21;

b = a * 2;

console.log(b)

var a = 20;

a = a + 1;
a = a * 2

num1 = "42";
num2 = Number(42);

console.log("a", num1);
console.log("b", num2);
// alert("Hello world!")
//
// age = prompt("Please tell me your age");
// console.log(age)


console.log("--------------------------------Variables");

//Constant variable does not change and it's capitalize with underscore _

var TAX_SCORE = 0.08;

var amount = 99.99;

// reassign the variable by multiplying it by 2
amount = amount * 2;

var totalAmount = amount + (amount *  TAX_SCORE);

console.log(amount);
console.log(totalAmount);
console.log(totalAmount.toFixed(2));

//ES6 is a newest version of JavaScript


console.log("--------------------------------------Blocks")
//Block is defined by wrapping one or more statement in curly braces
// A block statement does not need a semicolon.

var amountV = 99.00;

{
  amountV = amountV * 2;
  // amountV *= 2;
  console.log("amount", amountV);
}


console.log("----------------------------------Conditionals or Decisions");

const ACCESSORY_PRICE = 9.99; // const is a newest version of Javascript(ES6)

var bank_balance = 302.13;
var amount$ = 99.99;

if(amount$ < bank_balance) {
  console.log("I want to buy this phone");
}


amount = amount * 2;

if (amount < bank_balance) {
  console.log("I'll buy the accessory!");
  amount = amount + ACCESSORY_PRICE
//  amount += ACCESSORY_PRICE
}else {
  console.log("Will not buy again!");
}

console.log("-----------------------------------------Loops");

//Using while loop

var i = 0;

while(true ) {
  if (i <= 5) {
    i = i + 1;
    //   i+=1
    console.log(i);

  } else {
    break;
  }

}



// OR
//
// do {
//   if (i <= 9) {
//     i = i + 1;
//     console.log(i);
//   }else {
//     break;
//   }
// }while(true)

// Using a for loop
// For loop has three clause
// 1. initial clause => var i = 0;
// 2. conditional test clause => i <= 5;
// 3. update clause => i += 1;

console.log("--------------------------Using a for loop");
for(var i = 0; i <= 5; i += 1) {
  console.log(i);
}

console.log("--------------------------------Practice");
/*
* Explain code/program.
* Variables declared
* 1. I declared a variable called SPENDING_THRESHOLD and assigned a value of 200 to it with a const.
* 2. I declared a variable called TAX_RAT and assigned a value of 0.08 to it with a const.
* 3. I assigned the value of 99.99 to PHONE_PRICE variable with a const.
* 4. I assigned the value of 9.99 to ACCESSORY_PRICE with a const.
* 5. I redeclared bank_balanced and assigned it a value of 303.91.
* 6. I redeclared amount and assigned it a value of 0
*
* Functions created
* 7. I created a function called calculateTax. It has a parameter/argument/input called amount
* and multiply the parameter/argument/input amount with a TAX_RATE variable
* 8. I created another function called formatAmount. It has a parameter/argument/input called amount.
* It has a number-method that used to get the fraction digits 2 of an argument called amount added to string $.
* 9. I have a while loop for amount variable 0 is not up to bank_balance variable 303.91 (amount < bank_balance).
* I redeclared/reassigned amount variable and assigned it a value of PHONE_PRICE variable added to amount variable.
* 10. I declared an if statement that amount variable 99.99 is not up to SPENDING_THRESHOLD variable 200.
* We reassign the amount variable that has a value of ACCESSORY_PRICE_KEY added to new amount that I got from
* the local variable I reassigned.
* 11. After the if statement, I logged the new amount I reassigned to console/terminal.
* 12. I reassigned amount variable that has the value of calculateTax function that has the argument of new amount
* we reassigned added to new amount we reassigned again.
* 13. I logged the new amount I got from the function I called added to new amount variable to the console/terminal.
* 14. I also logged the function formatAmount that has the latest amount from calculateTax that added to new amount
*  variable to the console/terminal.
*
* How I get the value of 334.76 from the code
* 1. I reassigned amount variable and added PHONE_PRICE variable to amount that a total new value called 99.99
* and it has not reached up to 303.91
* 2. I have an if statement that amount variable is not up to SPENDING_THRESHOLD 200. So I reassigned amount inside
* if statement that a value of ACCESSORY_PRICE_KEY added to new amount variable I get from the local variable I
*  reassigned and get the total variable (99.99 + 9.99 = 109.98) but 109.98 is not up to SPENDING_THRESHOLD 200.
* So I added another amount variable to the total number of variable and get the value of (109.98 + 99.99 = 209.97) now
* I have get the number of SPENDING_THRESHOLD but the number is greater the number of SPENDING_THRESHOLD.
* 3. I have not got the loop value of while loop. So I have calculated the number I got from if statement and
* added it to new local amount variable that I reassigned and I got a value of (209.97 + 99.99 = 309.96).
* So the total number of while loop is 309.96
* 4. I reassigned an amount that called the calculateTax function appended the total while loop amount to it added to
* total while loop amount and got the value of ((309.96 * 0.08) + 309.96) = 334.7568)
* 5. I logged the formatAmount function to the console/terminal and appended the latest amount I got from
*  calculateTax function that I calculated. So I have the total value of formatAmount function that has a
* function-digit 2 (334.7568 -> 334.76)
*
* Note:
*  If your loop your looping is not up to 200, you have to get the that is 200 or have a number
* that pass 200 a bit. e.g 209.3434, 2874.3434 and so on. Sometime it will be in decimal number or
* normal number.
*
*  */
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE_KEY = 9.99;
bank_balance = 303.91;
amount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}
function formatAmount(amount) {
  return "$" + amount.toFixed( 2 );
}
// keep buying phones while you still have money
while (amount < bank_balance) {
  // console.log("hi: ", amount);
  // buy a new phone!
  amount = amount + PHONE_PRICE;
  // console.log("firstAmount: ", amount);
  // can we afford the accessory?
  if (amount < SPENDING_THRESHOLD) {
    // console.log("hello:", amount);

    amount = amount + ACCESSORY_PRICE_KEY;
    // amount = amount + ACCESSORY_PRICE_KEY = 109.98
    // amount = amonut + ACCESSORY_PRICE_KEY + amount = 209.97
    // console.log("hello:", amount);
  }

  console.log("amount: ", amount);
}

// console.log("hello: ", amount);

// don't forget to pay the government, too
amount = amount + calculateTax( amount );
console.log("newAmount: ", amount);
console.log(
  "Your purchase: " + formatAmount( amount )
);
// Your purchase: $334.76

