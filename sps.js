let scoreSelf =0 ;
let scoreComp =0 ;

const selection = document.querySelectorAll(".choice");
const msgBox = document.querySelector("#msgboxx");
const usrScore = document.querySelector("#userScore");
const cmpScore = document.querySelector("#compScore");

const getCompchoice=() => {
    const select = ["rock","paper","scissors"];
    const choiceIdx = Math.floor(Math.random()*3);
    return select[choiceIdx];
}

const drawGame=()=> {
    console.log("Your game is draw");
    msgBox.innerText= "Draw Game" ;
    msgBox.style.backgroundColor = "rgb(58, 58, 18)";
    
}

const showWinner=(userWin,userChoice,compChoice) => {
    if(userWin) {
        scoreSelf++;
        usrScore.innerText= scoreSelf;
        console.log("You Win!!");
        msgBox.innerText = `You Win!!  ${userChoice} beats ${compChoice}` ;
        msgBox.style.backgroundColor = "green";
        // usrScore = usrScore+1;
    }else{
        scoreComp++;
        cmpScore.innerText = scoreComp;
        console.log("You Loose!");
        msgBox.innerText = `You Loose! ${userChoice} loses to ${compChoice}`;
        msgBox.style.backgroundColor = "red";
        
        // cmpScore = cmpScore+1;
    }
}

const playGame =(userChoice) => {
    console.log("user choice:", userChoice);
    const compChoice = getCompchoice();
    console.log("Comp choice: ",compChoice);

    if (userChoice == compChoice){
        drawGame();
    }else {
        let userWin = true;
        if (userChoice== "rock"){
            userWin = compChoice ==="paper" ? false :true;
        }
        else if (userChoice =="paper"){
            userWin = compChoice ==="scissors" ? false:true;
        }
        else {
            userWin = compChoice ==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    }

selection.forEach((choice) => {
    choice.addEventListener ("click", () => {
        const choiceID = choice.getAttribute("id")
        // console.log('Choice is made', choiceID);
        playGame(choiceID);
    }

    )

});