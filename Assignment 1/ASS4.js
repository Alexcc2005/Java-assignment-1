let compChoice = Math.floor(Math.random() *3)+1;
console.log (compChoice);
userChoice = (prompt("1 for Rock, 2 for Paper or 3 for Scissors?"))
switch(compChoice){

    case 1:

        //Case 1 is if compchoice = rock
        if(userChoice == compChoice){
          console.log("Draw: I also chose Rock!");
        }
        else if(userChoice == 2){
          console.log("Win: I chose Rock!");
        }
        else if(userChoice == 3){
          console.log("Loss: I chose Rock!");
        }
        break;

    case 2:

        
        if(userChoice == compChoice){
          console.log("Draw: I also chose Paper!");
        }
        else if(userChoice == 1){
          console.log("Loss: I chose Paper!");
        }
        else if(userChoice == 3){
          console.log("Win: I chose Paper!");
        }       
        break;

    case 3:

        
        if(userChoice == compChoice){
          console.log("Draw: I also chose Scissors!");
        }
        else if(userChoice == 1){
          console.log("Win: I chose Scissors!");
        }
        else if(userChoice == 2){
          console.log("Loss: I chose Scissors!");
        }
        break;
    }
    
     
    
