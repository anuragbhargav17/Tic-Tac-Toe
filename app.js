let boxes=document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-button");
let newGameBtn= document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
// let arr=["apple","ball","cat"];
// let arr2=[["apple","ball"],["cat","doll"],["elephant","giraffe"]];
const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]
];

const resetGame=()=>{
    turn0=true;
    enableButton();
    msgContainer.classList.add("hide")
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turn0){
            box.style.cssText="background-color:green ;color:rgb(85, 225, 117)";
            box.innerText="O";   
            turn0=false;
        }
        else{
            box.style.cssText="background-color:rgb(85, 225, 117);color:green";
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableButton=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableButton=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.cssText="background-color:white";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msg.style.cssText="background-color:sage; font-size:2rem;";
    msgContainer.classList.remove("hide");
    disableButton();
};
const checkWinner=()=>{
    for(let patterns of winPatterns){
        console.log([patterns[0]],[patterns[1]],[patterns[2]]);
        console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);

    let pos1Val= boxes[patterns[0]].innerText;
    let pos2Val= boxes[patterns[1]].innerText;
    let pos3Val= boxes[patterns[2]].innerText;

    if(pos1Val != "" && pos2Val !="" && pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            // console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
    }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);