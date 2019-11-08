let player = "X"
let startButton = document.getElementById('start');
let status = document.getElementById('status');


let row1 = document.getElementById('row1');
let cell1 = document.getElementById('cell1');
let cell2 = document.getElementById('cell2');
let cell3 = document.getElementById('cell3');

let row2 = document.getElementById('row2');
let cell4 = document.getElementById('cell4');
let cell5 = document.getElementById('cell5');
let cell6 = document.getElementById('cell6');

let row3 = document.getElementById('row3');
let cell7 = document.getElementById('cell7');
let cell8 = document.getElementById('cell8');
let cell9 = document.getElementById('cell9');
winConditions()
function winConditions() {
    // Check if X wins
    if (cell1 === 'X' && cell2 === 'X' && cell3 === 'X') Winner = 'X';
    if (cell4 === 'X' && cell5 === 'X' && cell6 === 'X') Winner = 'X';
    if (cell7 === 'X' && cell8 === 'X' && cell9 === 'X') Winner = 'X';
    if (cell1 === 'X' && cell4 === 'X' && cell7 === 'X') Winner = 'X';
    if (cell2 === 'X' && cell5 === 'X' && cell8 === 'X') Winner = 'X';
    if (cell3 === 'X' && cell6 === 'X' && cell9 === 'X') Winner = 'X';
    if (cell1 === 'X' && cell5 === 'X' && cell9 === 'X') Winner = 'X';
    if (cell3 === 'X' && cell5 === 'X' && cell7 === 'X') Winner = 'X';
    if (Winner === 'X') {
        console.log("Player X wins the game.");

        // Check if O wins
        if (cell1 === 'O' && cell2 === 'O' && cell3 === 'O') Winner = 'O';
        if (cell4 === 'O' && cell5 === 'O' && cell6 === 'O') Winner = 'O';
        if (cell7 === 'O' && cell8 === 'O' && cell9 === 'O') Winner = 'O';
        if (cell1 === 'O' && cell4 === 'O' && cell7 === 'O') Winner = 'O';
        if (cell2 === 'O' && cell5 === 'O' && cell8 === 'O') Winner = 'O';
        if (cell3 === 'O' && cell6 === 'O' && cell9 === 'O') Winner = 'O';
        if (cell1 === 'O' && cell5 === 'O' && cell9 === 'O') Winner = 'O';
        if (cell3 === 'O' && cell5 === 'O' && cell7 === 'O') Winner = 'O';
        if (Winner === 'O') {
            console.log("Player2 wins the game.");

        }
    }
}





start()
function start() {
    for (let i = 1; i < 10; i++) {
        let startSquare = document.getElementById(`cell-${i}`)
        startSquare.addEventListener('click', play);
    }
}
function clearBoard(){
    console.log('');
    console.log('----- New Game -----');
    winner = null;
    lineDiv.innerHTML = '';
    player = letterX
    playerXMoves = [];
    playerOMoves = [];
    currentArray = playerXMoves;
    playerTurn.innerHTML = "It is player X's turn";
    turnCount = 0;
    for (let i = 1; i < 10; i++) {
        let clearSquare = document.getElementById(`cell-${i}`);
        clearSquare.innerHTML + '';
    }
}
function stop() {
    for (let i = 1; i < 10; i++) {
      let stopSquare = document.getElementById(`cell-${i}`);
      stopSquare.removeEventListener('click', play);
    }
  
function play(){
    event.target.textContent = player
    winConditions()

if (player ==="X"){
    player = "O"

}else{player = 'X'}
}








































/*
startButton.addEventListener('click', () => {
    event.target.disabled = true;
    status.textContent = 'Player X, your turn!';
})

window.onload = function () {
    cell1.addEventListener('click', () => {
        if (cell1.textContent === 'X' || cell1.textContent === '0') {
            alert('You cant go there! Select an empty space!')
            return;
        }
        if (status.textContent === 'Player X, your turn!') {
            cell1.textContent = 'X';
            status.textContent = 'Player O, your turn!';
        } else if (status.textContent === 'Player O, your turn!') {
            cell1.textContent = 'O';
            status.texctContent = 'Player X, your turn!'
        }
    })
}
window.onload = function () {
    cell2.addEventListener('click', () => {
        if (cell2.textContent === 'X' || cell2.textContent === '0') {
            alert('You cant go there! Select an empty space!')
            return;
        }
        if (status.textContent === 'Player X, your turn!') {
            cell2.textContent = 'X';
            status.textContent = 'Player O, your turn!';
        } else if (status.textContent === 'Player O, your turn!') {
            cell2.textContent = 'O';
            status.texctContent = 'Player X, your turn!'
        }
    })
}
window.onload = function () {
    cell3.addEventListener('click', () => {
        if (cell3.textContent === 'X' || cell3.textContent === '0') {
            alert('You cant go there! Select an empty space!')
            return;
        }
        if (status.textContent === 'Player X, your turn!') {
            cell3.textContent = 'X';
            status.textContent = 'Player O, your turn!';
        } else if (status.textContent === 'Player O, your turn!') {
            cell3.textContent = 'O';
            status.texctContent = 'Player X, your turn!'
        }
    })
}
window.onload = function () {
    cell4.addEventListener('click', () => {
        if (cell4.textContent === 'X' || cell4.textContent === '0') {
            alert('You cant go there! Select an empty space!')
            return;
        }
        if (status.textContent === 'Player X, your turn!') {
            cell4.textContent = 'X';
            status.textContent = 'Player O, your turn!';
        } else if (status.textContent === 'Player O, your turn!') {
            cell4.textContent = 'O';
            status.texctContent = 'Player X, your turn!'
        }
    })
}
window.onload = function () {
    cell5.addEventListener('click', () => {
        if (cell5.textContent === 'X' || cell5.textContent === '0') {
            alert('You cant go there! Select an empty space!')
            return;
        }
        if (status.textContent === 'Player X, your turn!') {
            cell5.textContent = 'X';
            status.textContent = 'Player O, your turn!';
        } else if (status.textContent === 'Player O, your turn!') {
            cell5.textContent = 'O';
            status.texctContent = 'Player X, your turn!'
        }
    })
}
window.onload = function () {
    cell6.addEventListener('click', () => {
        if (cell6.textContent === 'X' || cell6.textContent === '0') {
            alert('You cant go there! Select an empty space!')
            return;
        }
        if (status.textContent === 'Player X, your turn!') {
            cell6.textContent = 'X';
            status.textContent = 'Player O, your turn!';
        } else if (status.textContent === 'Player O, your turn!') {
            cell6.textContent = 'O';
            status.texctContent = 'Player X, your turn!'
        }
    })
}
window.onload = function () {
    cell7.addEventListener('click', () => {
        if (cell7.textContent === 'X' || cell7.textContent === '0') {
            alert('You cant go there! Select an empty space!')
            return;
        }
        if (status.textContent === 'Player X, your turn!') {
            cell7.textContent = 'X';
            status.textContent = 'Player O, your turn!';
        } else if (status.textContent === 'Player O, your turn!') {
            cell7.textContent = 'O';
            status.texctContent = 'Player X, your turn!'
        }
    })
}
window.onload = function () {
    cell8.addEventListener('click', () => {
        if (cell8.textContent === 'X' || cell8.textContent === '0') {
            alert('You cant go there! Select an empty space!')
            return;
        }
        if (status.textContent === 'Player X, your turn!') {
            cell8.textContent = 'X';
            status.textContent = 'Player O, your turn!';
        } else if (status.textContent === 'Player O, your turn!') {
            cell8.textContent = 'O';
            status.texctContent = 'Player X, your turn!'
        }
    })
}
window.onload = function () {
    cell9.addEventListener('click', () => {
        if (cell9.textContent === 'X' || cell9.textContent === '0') {
            alert('You cant go there! Select an empty space!')
            return;
        }
        if (status.textContent === 'Player X, your turn!') {
            cell9.textContent = 'X';
            status.textContent = 'Player O, your turn!';
        } else if (status.textContent === 'Player O, your turn!') {
            cell9.textContent = 'O';
            status.texctContent = 'Player X, your turn!'
        }
    })
}

checkForWin()
function checkForWin() {

    let Winner = null
    // Check if X wins
    if (cell1 === 'X' && cell2 === 'X' && cell3 === 'X') Winner = 'X';
    if (cell4 === 'X' && cell5 === 'X' && cell6 === 'X') Winner = 'X';
    if (cell7 === 'X' && cell8 === 'X' && cell9 === 'X') Winner = 'X';
    if (cell1 === 'X' && cell4 === 'X' && cell7 === 'X') Winner = 'X';
    if (cell2 === 'X' && cell5 === 'X' && cell8 === 'X') Winner = 'X';
    if (cell3 === 'X' && cell6 === 'X' && cell9 === 'X') Winner = 'X';
    if (cell1 === 'X' && cell5 === 'X' && cell9 === 'X') Winner = 'X';
    if (cell3 === 'X' && cell5 === 'X' && cell7 === 'X') Winner = 'X';
    if (Winner === 'X') {
        console.log("Player X wins the game.");

        // Check if O wins
        if (cell1 === 'O' && cell2 === 'O' && cell3 === 'O') Winner = 'O';
        if (cell4 === 'O' && cell5 === 'O' && cell6 === 'O') Winner = 'O';
        if (cell7 === 'O' && cell8 === 'O' && cell9 === 'O') Winner = 'O';
        if (cell1 === 'O' && cell4 === 'O' && cell7 === 'O') Winner = 'O';
        if (cell2 === 'O' && cell5 === 'O' && cell8 === 'O') Winner = 'O';
        if (cell3 === 'O' && cell6 === 'O' && cell9 === 'O') Winner = 'O';
        if (cell1 === 'O' && cell5 === 'O' && cell9 === 'O') Winner = 'O';
        if (cell3 === 'O' && cell5 === 'O' && cell7 === 'O') Winner = 'O';
        if (Winner === 'O') {
            console.log("Player2 wins the game.");

        }
    }
}

}
}
*/