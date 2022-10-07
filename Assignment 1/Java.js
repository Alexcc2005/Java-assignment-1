console.log("HelloWorld")
// Single line Comment

/*
Multi line comment
 this will cover
  multiple lines

*/

//variables

/*
There are two types of ways to declare variables in JavaScript

var a = 10;

let a = 10;

const x = 10;    This is when you dont want a variable to change

*/

let a =10;
console.log(a);

const x =20; 

console.log(x)

//x=15

//Variables in JavaScript are case sensitive

let bob=20;

let boB=10;

//Datatypes
/*
Numbers
Strings
Booleans
*/

let temp = 10 //Datatype number

let temp1 = "10" //Datatype string

/*
All numbers in Javascript are floating point numbers
*/

/*
All variable names in javascript must begin with a
letter or an undersore. You cannot use a reserved word
as a variable name.
*/

//Arithmetic Operators

//Addition

console.log(5+2);

console.log("abc"+"def");

//Subtraction

console.log(5-2)

//multiplication

console.log(5*2);

//Division

console.log (8/4);

//Exponent

console.log(3**4);

//increment

let h = 11;

console.log(h++);

console.log(h);

let k = 10;

console.log(++k);

//Comparison Oporators

//Equals ==

console.log(5 == 3);

console.log(4 == 4);
//not equals !=

console.log(5!=4);
console.log(4!=4);

//Greater than >

console.log(4>5);
console.log(5>4);

//Less than <

console.log(4<5);
console.log(5<5);

//Greater than or equal to <=

console.log(4<=5);

console.log(5<=4);

//Less than or equal to >=

console.log(5>=4);

console.log(4>=5);

/*
Logical Operators
These test for "true" or "false" conditions
*/

/*
Logical and (&&)
Returns true if both operators are true
*/

a = true;
let b = true;
console.log( a && b );    //Will print true to the console
                          //As both a and b are true
b = false;
console.log(a && b);      //Will print false to the console
                          //As a and b are not BOTH true

let firstNumber = 10;
let secondNumber = 20;

if( (first number > 5) && (secondNumber > 15)){
  console.log("First is greater than 5 and second is greater than 15");
}else{
  console.log("One of the exxpressions failed the test");
}


if(firstNumber > secondNumber){
  console.log("line1: first is lesser")
  console.log("line2: first is lesser")
}
else{
  console.log("One of the expressions failed the test")
}

/*
Logical or (||) - if either a or b is true it is all true
*/

a = true;
b = false;

console.log(a || b);

/*
Logical not (!) - reverses the result if true becomes false
if false becomes
*/
console.log(!(a));


//Switch Statement

switch(myVar){
  case 'A':
    console.log("You got an A");
    break;
  case 'B':
    console.log("You got a B")
    break;
  default:
    console.log("Grade not recognised");

  }