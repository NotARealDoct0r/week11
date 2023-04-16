// variables created to be able to select/target each unique queries
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#statusText');
const restartBtn = document.querySelector('#restartBtn');
// combinations possible to win the game (connect 3 in a row)
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];
// 9 placeholders 
let options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = "X";
//a boolean to keep track if game is running
let running = false;

// to run the game
initializeGame();

function initializeGame(){
    // for each cell, converting it to a 'button' that involves a click
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
    // adding possibility to restart game
    restartBtn.addEventListener('click', restartGame)
    // current status of game
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    // 'this' is referring to the specific cell being selected
    const cellIndex = this.getAttribute("cellIndex");
    // if (out of 9) available cells are not empty or not running, then return/resume
    if(options[cellIndex] != "" || !running){
        return;
    }
    // verifying current 'gameboard' to check if there's a winner
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    // updating the placeholders
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    // changing the player and assigning them an "O" (if currentplayer = X, switch to "O")
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`
}
function checkWinner(){
    let roundWon = false;

    // for looping each possible combinations within 'winConditions'
    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        // cellA,B,C created to represent 3 cells per row
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        
        // if 3 consecutive cells per row have empty spaces / have different letters, continue
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        // if cell A,B,C are all the same, then there's a winner
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    // announcing a winner and stopping the game
    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    // if there are no more cells available, then it is a draw
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
// to be able to restart the game and clear the grid
function restartGame(){
    currentPlayer = "X";
    let options = ['', '', '', '', '', '', '', '', ''];
    statusText.textContent = `${currentPlayer}'s turn`;
    // using a foreach method to replace each cell with an empty space/string
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
