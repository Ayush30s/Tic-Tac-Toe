let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbutton");
let msgContainer = document.querySelector("#msg");
let xres = document.querySelector(".Xresult");
let ores = document.querySelector(".Oresult");
let newgbtn = document.querySelector("#newgame");


let Owin = 0;
let Xwin = 0;

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerHTML = " ";
    }
}

const showWinner = (Winner,Owin,Xwin) => {
    msgContainer.innerHTML = `Congratulations, Winner is : ${Winner}`;
    xres.innerHTML = `X win: ${Xwin}`;
    ores.innerHTML = `O win: ${Owin}`;    
}


const newgame = () => {
    enableBoxes();
    Xwin = 0;
    Owin = 0;
    showWinner("?" , Xwin , Owin);
    boxes.innerHTML = " ";
    msgContainer.innerHTML = "Game is on!";
}

const resetgame = () => {
    enableBoxes();
    boxes.innerHTML = " ";
    msgContainer.innerHTML = "Game is on!";
}

//starting of JS
let turnO = true; 
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnO) {
            box.innerHTML = "X";
            turnO = false;
        } else {
            box.innerHTML = "O";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for(let pattern of winningPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                if(pos1 === 'O') {
                    Owin++;
                }else {
                    Xwin++;
                }
                disableBoxes();
                showWinner(pos1,Owin,Xwin);
            }
        }
    }
}

resetbtn.addEventListener("click" , () => {
    resetgame();
});


newgbtn.addEventListener("click" , () => {
    newgame();
});