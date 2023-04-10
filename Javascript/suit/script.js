// ToDo -- Input Documents

const boxPlayer = document.getElementsByClassName('player-selection-box')[0];
const boxComputer = document.querySelector('.computer-selection-box');
const pPlayer1 = boxPlayer.querySelector('.gajah');
const pPlayer2 = boxPlayer.querySelector('.orang');
const pPlayer3 = boxPlayer.querySelector('.semut');
const columnResult = document.getElementById('columnResult');
const imgComputer = boxComputer.querySelector('.img-computer');
const bgResult = document.querySelector('.result-game');

// ToDo -- Make Function Computer Choice

function  getComputerChoice() {
    const comp = Math.round(Math.random() * 10 +1);
    if (comp == 1) return 'gajah';
    if (comp == 2) return 'orang';
    if (comp == 3) return 'semut';
    if (comp == 4) return 'gajah';
    if (comp == 5) return 'orang';
    if (comp == 6) return 'semut';
    if (comp == 7) return 'gajah';
    if (comp == 8) return 'orang';
    if (comp == 9) return 'semut';
    return 'gajah';
}
console.log(getComputerChoice())

// ToDo -- Function Player Choice

// function getPlayerChoice(player) {
//     const playerChoice = boxPlayer.getElementsByTagName('img');
//     if (player == playerChoice[0]) return 'gajah';
//     if (player == playerChoice[1]) return 'orang';
//     if (player == playerChoice[2]) return 'semut';
// }
 

// ToDo -- Function Rules

function getResult(player,comp) {
    if (player == comp) {
        return 'Draw';
    } else if (player == 'gajah') {
        if (comp == 'orang') {
            return 'Win';
        } else {
            return 'Lose';
        }
    } else if (player == 'orang') {
        if (comp == 'gajah') {
            return 'Lose';
        } else {
            return "Win";
        }
    } else if (player == 'semut') {
        if (comp == 'orang') {
            return 'Lose';
        } else {
            return 'Win';
        }
    }
}
console.log(getResult())

// ToDo -- Change Bg Event

// ToDo -- Create Style 

// ToDO -- Events Game

// -Pilihan Satu
pPlayer1.addEventListener('click', function() {
    const pComputer = getComputerChoice();
    const pPlayer = pPlayer1.className;
    const result = getResult(pPlayer,pComputer);
    imgComputer.setAttribute('src', 'assets/img/' + pComputer + '.png');
    columnResult.innerHTML = result;


    // ? -- show in console
    console.log('Computer : ' + pComputer);
    console.log('Player : ' + pPlayer);
    console.log('Hasil : ' + result);
})

// --Pilihan Dua
pPlayer2.addEventListener('click', function() {
    const pComputer = getComputerChoice();
    const pPlayer = pPlayer2.className;
    const result = getResult(pPlayer,pComputer);
    imgComputer.setAttribute('src', 'assets/img/' + pComputer + '.png');
    columnResult.innerHTML = result;

    // ? -- Show in console
    console.log('Computer : ' + pComputer);
    console.log('Player : ' + pPlayer);
    console.log('Hasil : ' + result);
})

// --Pilihan Tiga
pPlayer3.addEventListener('click', function() {
    const pComputer = getComputerChoice();
    const pPlayer = pPlayer3.className;
    const result = getResult(pPlayer,pComputer);
    imgComputer.setAttribute('src', 'assets/img/' + pComputer + '.png');
    columnResult.innerHTML = result;

    // ? -- Show in console
    console.log('Computer : ' + pComputer);
    console.log('Player : ' + pPlayer);
    console.log('Hasil : ' + result);
})




// ? -- Trashed

// ToDo -- Function Rules
// function getResult(player,comp) {
//     if (player == comp) return 'Draw';
//     if (player == 'gajah') return (comp == 'orang' ? 'Win' : 'Lose');
//     if (player == 'orang') return (comp == 'semut' ? 'Win' : 'Lose');
//     if (player == 'semut') return (comp == 'gajah' ? 'Win' : 'Lose');
// } 