let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    resetGame();
})
let turnO=true;
let count=0; //draw
let newbtn=document.querySelector("#new");
newbtn.addEventListener("click",()=>{
    resetGame();
})
let msgcont=document.querySelector(".msg");
let msg=document.querySelector("#m");


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
//reset
const resetGame=()=>{
    turnO=true;
    count=0;
    enable();
    msgcont.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box is clicked");
        if(turnO){
            box.innerText="O";
            box.style.color="red";
            turnO=false;
           
        }
        else{
            box.innerText="X";
            turnO=true;
            box.style.color="black";
            
        }
        box.disabled=true;
        count++;
        let isWin=checkWinner();
        if(count===9 && !isWin){
            draw();
        }
        
        });

});
//draw
const draw=()=>{
    msg.innerText="draw";
    msgcont.classList.remove("hide");
    disable();

};

//disable
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
//enable
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
//msg winner
const showWinner=(winner)=>{
    msg.innerText=`Congratulations , winner is ${winner}`;
    msgcont.classList.remove("hide");
    disable();
};
//check
const checkWinner=()=>{
    for(let pattern  of winPatterns){
    //     console.log(pattern[0],pattern[1],pattern[2]);
    //     console.log(
    //         boxes[pattern[0]].innerText,
    //         boxes[pattern[1]].innerText,
    //         boxes[pattern[2]].innerText);
        
    // };
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;
    if(pos1Val!="" && pos2Val !="" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val===pos3Val){
            // console.log(`${pos1Val} is winner`);
            showWinner(pos1Val);
            return true;
        }
    }
    

}
};
