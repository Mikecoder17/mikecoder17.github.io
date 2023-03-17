window.addEventListener('DOMContentLoaded', () => {

const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.querySelector('#reset');
const startButton = document.querySelector('#start');
const announcer = document.querySelector('.announcer');
const computerButton = document.querySelector('#computer');
let computerPlay = false;

let board =['','','','','','','','','','',];
let currentPlayer = 'X';
let isGameActive = true;

const PLAYERX_WON ='PLAYERX_WON'
const PLAYERO_WON = 'PLAYERO_WON';
const TIE = 'TIE';

/*
Tablica planszy do gry
0 1 2
3 4 5
6 7 8
*/

/* zwycięskie kombinacje */
const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

/*Funkcja sprawdzająca czy dane pole jest wolne w momencie kliknięcia*/

const isPossibleMove = (tile) =>{
    if (tile.innerText ==='X' || tile.innerText ==='O' ){
        return false
    }
    return true;
}

/*Aktualizowanie tablicy znakiem gracza*/
const updateBoard = (index) => {
    board[index] = currentPlayer;
}
/*Funkcja zmieniajaca kolejnosc ruchu*/
const changePlayer = () =>{
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);    
}
/*Modul silika ruchu komputera - losowe ruchy z dostepnych pol*/
const computerAction = () => {   
    if (isGameActive) {
        while (true){
            index = Math.floor(Math.random() * 9);
            if (tiles[index].innerText ==='X' || tiles[index].innerText ==='O' ){}
            else{
                tiles[index].innerText = currentPlayer;
                tiles[index].classList.add(`player${currentPlayer}`);
                updateBoard(index);
                handleResultValidation();
                changePlayer()
                break
            }             
        }
}
}
/*Wyswietlanie rezultatu*/
const announce = (type) => {
    switch(type){
       case PLAYERO_WON:
            announcer.innerHTML = 'Gracz <span class="playerO">O</span> Wygrał';
            break;
       case PLAYERX_WON:
            announcer.innerHTML = 'Gracz <span class="playerX">X</span> Wygrał';
            break;
       case TIE:
            announcer.innerText = 'Remis';
        }
    announcer.classList.remove('hide');
};
/*Sprawdzanie wyniku obecnego*/
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
  
    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
      isGameActive = false;
      return;
    }
    if (!board.includes("")) {
        announce(TIE);
        isGameActive = false;
    }
  }

/*Ruch gracza*/
const userAction = (tile, index) => {
    if (isPossibleMove(tile) && isGameActive) {
        tiles[index].innerText = currentPlayer;
        tiles[index].classList.add(`player${currentPlayer}`);
        updateBoard(index);
        handleResultValidation();
        changePlayer();
        if (computerPlay == true){
            computerAction();      
        }
}
};

tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});

/*Reset - kolejna gra gracz vs kopmuter (kopmuter zaczyna rozgrywke)*/
const startBoard = () =>{
    resetBoard()
    computerPlay = true;
    computerAction()
}
/*Reset - kolejna gra gracz vs kopmuter*/
const playVsComputer = () => {
    resetBoard();
    computerPlay = true;
}
/*Reset - kolejna gra gracz vs gracz*/
const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    announcer.classList.add('hide');

    if (currentPlayer === 'O') {
        changePlayer();
    }

    tiles.forEach(tile => {
        tile.innerText = '';
        tile.classList.remove('playerX');
        tile.classList.remove('playerO');
    });
    computerPlay=false;
}

/*Akcje przyciskow*/
startButton.addEventListener('click', startBoard);
resetButton.addEventListener('click', resetBoard);
computerButton.addEventListener('click', playVsComputer);
});