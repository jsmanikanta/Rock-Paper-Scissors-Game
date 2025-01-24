let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let reset=document.querySelector("#reset");
let totaluserscore=document.getElementById("user-score");
let totalcompscore=document.getElementById("comp-score");
const gencompscore=()=>{
    let options=["rock","paper","scissors"];
    const randopt= Math.floor(Math.random()*3);
    return options[randopt];
}
const playgame=(userchoice)=>{
    console.log("user choice is ",userchoice);
    const compchoice=gencompscore();
    console.log("Computer Choice is ",compchoice);
    if(userchoice==compchoice){
        console.log("Match is draw");
        userscore++;
        compscore++;
        msg.innerText="Draw";
    }
    if(userchoice=="rock"&& compchoice=="paper"){
        console.log("Computer won");
        compscore++;
        msg.innerText="You lost";
    }
    if(userchoice=="rock"&& compchoice=="scissors"){
        console.log("You won");
        userscore++;
        msg.innerText="You Won";
    }
    if(userchoice=="paper"&&compchoice=="rock"){
        console.log("you won");
        userscore++;
        msg.innerText="You Won";
    }
    if(userchoice=="paper"&&compchoice=="scissors"){
        console.log("computer won");
        compscore++;
        msg.innerText="You lost"
    }
    if(userchoice=="scissors"&&compchoice=="rock"){
        console.log("computer won");
        compscore++;
        msg.innerText="You lost";
    }
    if(userchoice=="scissors"&&compchoice=="paper"){
        console.log("You won");
        userscore++;
        msg.innerText="You Won";
    }
    totalcompscore.innerText=compscore;
    totaluserscore.innerText=userscore;
    if(userscore==10){
        msg.innerText="You won this Match";
    }
    if(compscore==10){
        msg.innerText="You lost this Match";
    }
    if(compscore>10||userscore>10){
        console.log(("Reseted"));
        userscore=0;
        compscore=0;
        totalcompscore.innerText=compscore;
        totaluserscore.innerText=userscore;
        msg.innerText="Play your move";
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice)
    })
})
reset.addEventListener("click",()=>{
    console.log(("Reseted"));
    
    userscore=0;
    compscore=0;
    totalcompscore.innerText=compscore;
    totaluserscore.innerText=userscore;
    msg.innerText="Play your move"
})
