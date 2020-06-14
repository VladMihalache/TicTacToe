// DOM Elements
const p1=document.querySelector(".p1");
const p2=document.querySelector(".p2");
const boxes=document.querySelectorAll(".box");
const dis=document.querySelectorAll(".dis");
const did=document.querySelectorAll(".did");
const ors=document.querySelectorAll(".ors");
const orc=document.querySelectorAll(".orc");
const orj=document.querySelectorAll(".orj");
const ves=document.querySelectorAll(".ves");
const vec=document.querySelectorAll(".vec");
const ved=document.querySelectorAll(".ved");
const p1Message = document.querySelector(".p1Message");
const p2Message = document.querySelector(".p2Message");
const drawMessage = document.querySelector(".drawMessage");
const refreshButton = document.querySelector(".refresh");
const historyButton = document.querySelector(".history");
const historyList = document.querySelector(".historyList");
const theList = document.querySelector(".theList");

// Points
// Trebuie implementat local storage !!!
const LOCAL_STORAGE_ONE_KEY = 'one.points'
let p1Points = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ONE_KEY)) || 0;
const LOCAL_STORAGE_TWO_KEY = 'two.points'
let p2Points = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TWO_KEY)) || 0;
// The state that dictates which player has the turn.
let state = 1;
// The array that holds the list of played matches.
const LOCAL_STORAGE_LIST_KEY = 'history.matches'
let history = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

//  Trebuie facut cu while: cat timp nu exista castigator, pot sa checkuiesck
for(i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click", function(event) { 
        //This listeners check if the box is marked, and if it's not, depending on the state, marks targeted box with X or O
        if(!event.target.classList.contains("markedX") && !event.target.classList.contains("markedO") && !event.target.classList.contains("markedEnd")){
            if(state === 1){
                event.target.classList.toggle("markedX");
                event.target.children[0].setAttribute("src", "./assets/Line 3.png")
                state=2;
            } else if(state === 2){
                event.target.classList.toggle("markedO");
                event.target.children[0].setAttribute("src", "./assets/Line 4.png")
                state=1;
            }
            winDrawHandler();
        }
    })
}

// This functions check each possible winning combination, returning the number of the winner.
function disWinCheck() {
    let checker = 0;
    let disSum = 0;
    for(j=0;j<dis.length;j++){
        if(dis[j].classList.contains("markedX")){
            disSum=disSum+1;
        } else if(dis[j].classList.contains("markedO")) {
            disSum=disSum+10;
        }
    }
    if(disSum === 3){
        checker=checker+1;
    } else if (disSum === 30){
        checker=checker+2;
    }
    if(checker===1){
        return 1;
    } else if(checker===2){
        return 2;
    }
}

function didWinCheck() {
    let checker = 0;
    let didSum = 0;
    for(j=0;j<did.length;j++){
        if(did[j].classList.contains("markedX")){
            didSum=didSum+1;
        } else if(did[j].classList.contains("markedO")) {
            didSum=didSum+10;
        }
    }
    if(didSum === 3){
        checker=checker+1;
    } else if (didSum === 30){
        checker=checker+2;
    }
    if(checker===1){
        return 1;
    } else if(checker===2){
        return 2;
    }
}

function orsWinCheck() {
    let checker = 0;
    let orsSum = 0;
    for(j=0;j<ors.length;j++){
        if(ors[j].classList.contains("markedX")){
            orsSum=orsSum+1;
        } else if(ors[j].classList.contains("markedO")) {
            orsSum=orsSum+10;
        }
    }
    if(orsSum === 3){
        checker=checker+1;
    } else if (orsSum === 30){
        checker=checker+2;
    }
    if(checker===1){
        return 1;
    } else if(checker===2){
        return 2;
    }
}

function orcWinCheck() {
    let checker = 0;
    let orcSum = 0;
    for(j=0;j<orc.length;j++){
        if(orc[j].classList.contains("markedX")){
            orcSum=orcSum+1;
        } else if(orc[j].classList.contains("markedO")) {
            orcSum=orcSum+10;
        }
    }
    if(orcSum === 3){
        checker=checker+1;
    } else if (orcSum === 30){
        checker=checker+2;
    }
    if(checker===1){
        return 1;
    } else if(checker===2){
        return 2;
    }
}

function orjWinCheck() {
    let checker = 0;
    let orjSum = 0;
    for(j=0;j<orj.length;j++){
        if(orj[j].classList.contains("markedX")){
            orjSum=orjSum+1;
        } else if(orj[j].classList.contains("markedO")) {
            orjSum=orjSum+10;
        }
    }
    if(orjSum === 3){
        checker=checker+1;
    } else if (orjSum === 30){
        checker=checker+2;
    }
    if(checker===1){
        return 1;
    } else if(checker===2){
        return 2;
    }
}

function vesWinCheck() {
    let checker = 0;
    let vesSum = 0;
    for(j=0;j<ves.length;j++){
        if(ves[j].classList.contains("markedX")){
            vesSum=vesSum+1;
        } else if(ves[j].classList.contains("markedO")) {
            vesSum=vesSum+10;
        }
    }
    if(vesSum === 3){
        checker=checker+1;
    } else if (vesSum === 30){
        checker=checker+2;
    }
    if(checker===1){
        return 1;
    } else if(checker===2){
        return 2;
    }
}

function vecWinCheck() {
    let checker = 0;
    let vecSum = 0;
    for(j=0;j<vec.length;j++){
        if(vec[j].classList.contains("markedX")){
            vecSum=vecSum+1;
        } else if(vec[j].classList.contains("markedO")) {
            vecSum=vecSum+10;
        }
    }
    if(vecSum === 3){
        checker=checker+1;
    } else if (vecSum === 30){
        checker=checker+2;
    }
    if(checker===1){
        return 1;
    } else if(checker===2){
        return 2;
    }
}

function vedWinCheck() {
    let checker = 0;
    let vedSum = 0;
    for(j=0;j<ved.length;j++){
        if(ved[j].classList.contains("markedX")){
            vedSum=vedSum+1;
        } else if(ved[j].classList.contains("markedO")) {
            vedSum=vedSum+10;
        }
    }
    if(vedSum === 3){
        checker=checker+1;
    } else if (vedSum === 30){
        checker=checker+2;
    }
    if(checker===1){
        return 1;
    } else if(checker===2){
        return 2;
    }
}

// This function checks if all the boxes are marked when there is no winner, returning a boolean to be handled by the winDrawHandler() function.
function drawCheck() {
    let fullyMarked=0;
    for(j=0;j<boxes.length;j++){
        if(boxes[j].classList.contains("markedX")){
            fullyMarked= fullyMarked + 1;
        } else if(boxes[j].classList.contains("markedO")){
            fullyMarked= fullyMarked + 1;
        }
    }
    if(fullyMarked === 9){
        return true;
    } else {
        return false;
    }
}

// This function checks if a winner had been found, and adds 100 points to his/her total.If it's a draw, adds 50 points to each player.
function winDrawHandler() {
    if(disWinCheck() === 1 || disWinCheck() === 2) {
        if(disWinCheck() === 1){
            pOneWins();
        } else if(disWinCheck() === 2){
            pTwoWins();
        }
    } else if(didWinCheck() === 1 || didWinCheck() === 2) {
        if(didWinCheck() === 1){
            pOneWins();
        } else if(didWinCheck() === 2){
            pTwoWins();
        }
    } else if(orsWinCheck() === 1 || orsWinCheck() === 2) {
        if(orsWinCheck() === 1){
            pOneWins();
        } else if(orsWinCheck() === 2){
            pTwoWins();
        }
    } else if(orcWinCheck() === 1 || orcWinCheck() === 2) {
        if(orcWinCheck() === 1){
            pOneWins();
        } else if(orcWinCheck() === 2){
            pTwoWins();
        }
    } else if(orjWinCheck() === 1 || orjWinCheck() === 2) {
        if(orjWinCheck() === 1){
            pOneWins();
        } else if(orjWinCheck() === 2){
            pTwoWins();
        }
    } else if(vesWinCheck() === 1 || vesWinCheck() === 2) {
        if(vesWinCheck() === 1){
            pOneWins();
        } else if(vesWinCheck() === 2){
            pTwoWins();
        }
    } else if(vecWinCheck() === 1 || vecWinCheck() === 2) {
        if(vecWinCheck() === 1){
            pOneWins();
        } else if(vecWinCheck() === 2){
            pTwoWins();
        }
    } else if(vedWinCheck() === 1 || vedWinCheck() === 2) {
        if(vedWinCheck() === 1){
            pOneWins();
        } else if(vedWinCheck() === 2){
            pTwoWins();
        }
    } else if(drawCheck()){
        draw();
    }
}

// Match win/draw rewarding function.
function pOneWins(){
    p1Points=p1Points+100;
    setPoints()
    p1Message.style.display="flex";
    history.push({result:"Player 1 won !"})
    saveAndRender();
    for(let l=0;l<boxes.length;l++){
        boxes[l].classList.toggle("markedEnd")
    }
    p1Message.style.display = "flex";
}

function pTwoWins(){
    p2Points=p2Points+100;
    setPoints();
    p2Message.style.display="flex";
    history.push({result:"Player 2 won !"})
    saveAndRender();
    for(let l=0;l<boxes.length;l++){
        boxes[l].classList.toggle("markedEnd")
    }
    p2Message.style.display = "flex";
}

function draw(){
    p1Points=p1Points+50;
    p1.innerHTML = p1Points;
    p2Points=p2Points+50;
    p2.innerHTML = p2Points;
    history.push({result:"The match was a draw!"});
    saveAndRender();
    for(let l=0;l<boxes.length;l++){
        boxes[l].classList.toggle("markedEnd")
    }
    drawMessage.style.display = "flex";

}

// This function restarts the game, unmarking all boxes.
function restart(){
    p1Message.style.display = "none"
    p2Message.style.display = "none"
    drawMessage.style.display = "none"
    for(let k=0;k<boxes.length;k++){
        if(boxes[k].classList.contains("markedEnd")){
            boxes[k].classList.toggle("markedEnd")
        }
        if(boxes[k].classList.contains("markedX")){
            boxes[k].classList.toggle("markedX")
            boxes[k].children[0].setAttribute("src", "")
        } else if(boxes[k].classList.contains("markedO")){
            boxes[k].classList.toggle("markedO")
            boxes[k].children[0].setAttribute("src", "")
        }
    }
};

document.addEventListener("click", function(event){
    if(event.target.classList.contains('restart') || 
    event.target.classList.contains('playAgain1') || 
    event.target.classList.contains('playAgain2') || 
    event.target.classList.contains('playAgainDraw')) {
    restart();
    }
})

// This function refreshes the history,resets the points and restarts the game.
refreshButton.addEventListener("click", function(){
    restart()
    p1Points = 0;
    p1.innerHTML = p1Points;
    p2Points = 0;
    p2.innerHTML = p2Points;
    history=[];
    saveAndRender();
})

// This function displays the history of played matches.
historyButton.addEventListener("click", function(){
     if(historyList.classList.contains("displayNone")) {
         historyList.classList.toggle("displayNone")
        historyList.style.display = "none";
     } else if(!historyList.classList.contains("displayNone")) {
         historyList.classList.toggle("displayNone")
        historyList.style.display = "flex";
     }
    saveAndRender();
})

// This function live updates the history after any change (new match or refresh).
function saveAndRender() {
    save();
    render();
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(history))
    localStorage.setItem(LOCAL_STORAGE_ONE_KEY, JSON.stringify(p1Points))
    localStorage.setItem(LOCAL_STORAGE_TWO_KEY, JSON.stringify(p2Points))
}

// This function live updates the history after any change (new match or refresh).
function render(){
    clearHistory(theList)
    history.forEach(match => {
        const newMatch = document.createElement("li");
        newMatch.classList.add("match")
        newMatch.innerHTML = match.result;
        theList.appendChild(newMatch);
    });
}

function clearHistory(list){
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}

render();

// This function live updates the poitns after any change (new match or refresh) and sets them back if page restarts.
function setPoints() {
    p1.innerHTML = p1Points;
    p2.innerHTML = p2Points;
}

setPoints()