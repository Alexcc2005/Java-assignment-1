// QUESTION 1 
let number1 = Number(prompt("Enter a number"));

number1 %= 2;

if(number1==0){
console.log("You entered an even number")
}

else {
console.log("You entered an odd number")
}

// QUESTION 2

let number2 = Number(prompt("Enter a number"));

let number3 = Number(prompt("Enter another number"));

if(number2>number3){
console.log(number2 ,"Is larger than", number3);
}

else if(number2<number3){
console.log(number3 ,"Is larger than", number2); 
}

else{
console.log(number2 ,"Is equal to", number3); 
}

// QuESTION 3

let number4 = Number(prompt("Enter a number"));

let number5 = Number(prompt("Enter another number"));

let number6 = Number(prompt("Enter another number"));

if(number4>number5,number4>number6){
console.log(number4,"Is the largest number")
}

else if(number5>number4,number5>number6){
console.log(number5,"Is the largest number")
}

else{
console.log(number6,"Is the largest number")
}

// QUESTION 4

let number7 = Number(prompt("Enter the length of a side"));

let number8 = Number(prompt("Enter the length of another side"));

let number9 = Number(prompt("Enter the length of you last side"));

if(number7==number8,number7==number9){
console.log("Your triangle is Equalateral")
}

else if(number8>number6,number7==number6){
console.log("Your triangle is Scalene")
}

else if(number7>number6,number8==number6){
    console.log("Your triangle is Scalene")
    }

    else if(number6>number7,number8==number7){
        console.log("Your triangle is Scalene")
        }
        
        
else{
console.log("Your triangle is Isosceles")
}