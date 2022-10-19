let number = 36120505

for(let i=1; i<5; i++){
    let random = Number(prompt("Guess the eight digit number."))
    if (random == number){
        console.log("Your guess is correct! ;)")
        i = i+95
    
    }
    else{
        console.log("Your guess was incorrect... :(")
    }
    

}