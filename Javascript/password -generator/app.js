// ! - Selector
let passwordLength = document.querySelector('.input-password');
let password = document.querySelector('.generated-password');
const btnGenerate = document.querySelector('.button-password');
const btnSavePass = document.querySelector('.button-save-password');
const generateResult = document.querySelector('.container span');

// ! - Style
// btnSavePass.style.display = 'none';

// ! - Event Listener
btnGenerate.addEventListener('click', getPassword);

// ! - Function
function generatePassword(e) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "1234567890";
    const symbol = "~!@#$%&*_-";
    
    const data = lowerAlphabet + upperAlphabet + numeric + symbol;
    let generator = '';
    for (let leng = 0; leng < e; leng++) {
        generator += data[~~Math.floor(Math.random() * data.length )];

    };
    passwordLength.value = '';
    return generator;
    
};

function getPassword(e) {
        setTimeout(() => {
            const newPassword = generatePassword(passwordLength.value);
            password.value = newPassword;
            generateResult.innerHTML = 'Successfully';
            setTimeout(() => {
                generateResult.innerHTML = '==';
            },800);
        },1000);
    
    e.preventDefault();
};

function savePassword() {
    document.title = password.value;
}
