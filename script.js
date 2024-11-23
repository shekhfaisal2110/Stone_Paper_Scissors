let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePare=document.querySelector("#user-score");
const compScorePare=document.querySelector("#comp-score");

// generate comp choice 
const  genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

//draw game
const drawGame=()=>{
    msg.innerText="Game was draw.Play again";
    msg.style.backgroundColor="#081b31";
}

//show winner 
const showWinner=(userWin , userChoice , compChoice)=>{
    if(userWin){
        userScore++;
        userScorePare.innerText=userScore;
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePare.innerText=compScore;
        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

// play game 
const playGame=(userChoice)=>{
    //console.log("user choice = ",userChoice);
    const compChoice=genCompChoice();
    //console.log("comp choice =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin = compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin = compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

// user choices 
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})