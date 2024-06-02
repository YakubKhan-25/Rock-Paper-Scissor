

    


let userscore=0;
let computerscore=0;

const container = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userscoring = document.querySelector(".user-score");
const computerscoring = document.querySelector(".computer-score");

const generatecomputerchoice = ()=>{
    const options = ["rock","paper","scissor"];
    let rand = Math.floor(Math.random()*3);
    let computerchoice = options[rand];
    return computerchoice;
}
const drawgame=()=>{
    console.log("Draw Match");
    message.innerText="Draw. Play Again";
    message.style.color="aqua";
}
const winner=(userwin, userchoice, comchoice)=>{
    if(userwin){
        userscore++;
        userscoring.innerText = userscore;
        console.log("you win");
        message.innerText = `You Win! Your ${userchoice} hits Computer ${comchoice}`
        message.style.color="yellowgreen";
    }
    else{
        computerscore++;
        computerscoring.innerText = computerscore;
        console.log("you lose");
        message.innerText = `You Lose! Computer ${comchoice} hits Your ${userchoice}`
        message.style.color="red";
    }
}
const playgame=(userchoice)=>{
    console.log("userchoice " , userchoice);
    let comchoice = generatecomputerchoice();
    console.log("computerchoice " , comchoice);
    if(userchoice === comchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = comchoice === "paper"? false : true;
        }
        else if(userchoice === "paper"){
            userwin = comchoice === "scissor"? false : true;
        }
        else{
            userwin = comchoice === "rock"? false : true;
        }
        winner(userwin, userchoice , comchoice);
    }
   
};
container.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});

// document.getElementById("myaudio").autoplay;