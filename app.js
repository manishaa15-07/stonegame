let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscorect=document.querySelector("#userscore");
let compscorect=document.querySelector("#compscore");
const gencompchoice=()=>{
        const options=["stone","paper","scissors"];
        const randinx=Math.floor(Math.random()*3);
        return options[randinx];
};
const showwinner=(userwin,userchoice,compchoice)=>{
        if(userwin==true){
                userscore++;
                console.log(userscore);
                console.log(compscore);
                userscorect.innerText=userscore;
                msg.innerText=`YOU WIN!!! ${userchoice} beats ${compchoice}`;
               msg.style.backgroundColor="green";
        }else{
                compscore++;
                console.log(userscore);
                console.log(compscore);
                compscorect.innerText=compscore;
                msg.innerText=`OHHH!! YOU LOST ${compchoice} beats ${userchoice}`;
                msg.style.backgroundColor="red";
        }
};
const draw=()=>{
        msg.innerText="DRAW !!! PLAY AGAIN";
};
const playgame=(userchoice)=>{
        let userwin=true;
        const compchoice=gencompchoice();
       if(compchoice==userchoice){
        draw();
       }else if(userchoice==="stone"){
        if(compchoice==="paper"){
                userwin=false;
        }else{
                userwin=true;
        }
       }else if(userchoice==="paper"){
        if(compchoice==="stone"){
                userwin=true;
        }else{
                userwin=false;
        }
       }
       else{
        if(compchoice==="paper"){
                userwin=true;
        }else{
                userwin=false;
        }
       }
       showwinner(userwin,userchoice,compchoice);
};
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
        // console.log("choice clicked!!!",userchoice);
        // const compchoice=gencompchoice();
        // console.log("comp selected",compchoice);
});
});

