//Q6

let q6  = Number(prompt("Q6:Enter a number"));
let count2 = 100
let temp = 0
    while(q6 > 0){
        temp = temp + q6 % 10;
        q6 = Math.floor(q6 / 10);

        }
    console.log(temp)