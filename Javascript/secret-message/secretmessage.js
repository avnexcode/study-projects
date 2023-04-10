// todo - selector
const btnMessage = document.getElementById("message-btn");
const boxLoginBtn = document.querySelector(".container-btn-message");
const boxLoginMess = document.querySelector(".container-login-message");
const clLogBtn = document.getElementById("cancel-login-btn");
const logBtn = document.getElementById("login-btn");
const inputName = document.getElementById("name-input");
const inputDate = document.getElementById("birthday-input");
const boxSuccess = document.querySelector(".container-popup-after-login");
const boxFailure = document.querySelector(
  ".container-popup-after-login-failure"
);
const nameForGreeting = document.getElementById("greeting-box");
const clBtnFailure = document.querySelector(
  ".container-popup-after-login-failure .container-popup-failure button"
);
const noBtnAnswer = document.getElementById("answer-no");
const boxPar = document.querySelector(
  ".container-popup-after-login .container-popup-success p"
);
const boxH2sc = document.querySelector(
  ".container-popup-after-login .container-popup-success h2"
);
const yesBtnAnswer = document.getElementById("answer-yes");
const boxConfirm = document.querySelector(".container-last-confirm");
const boxConfirm2 = document.querySelector(
  ".container-last-confirm .confirm-box"
);
console.log(boxConfirm2);
const boxFormConfirm = document.querySelector(".container-last-confirm form");
const btnConfirm = document.getElementById("confirm-last-btn");
const inputConfirm1 = document.querySelector(".confirm-box1");
const inputConfirm2 = document.querySelector(".confirm-box2");
const inputConfirm3 = document.querySelector(".confirm-box3");
const inputConfirm4 = document.querySelector(".confirm-box4");
const inputConfirm5 = document.querySelector(".confirm-box5");
const inputConfirm6 = document.querySelector(".confirm-box6");
const inputConfirmAll = document.querySelectorAll(
  ".container-last-confirm .confirm-box .container-input-confirm-box input"
);
const confirmLabel = document.querySelector(
  ".container-last-confirm .confirm-box label"
);
const boxWrongConfirm = document.querySelector(".container-wrong-pass");
const boxRightConfirm = document.querySelector(".container-right-pass");
const textBoxFailureLogin = document.getElementById("text-failure-login");
const boxBallon = document.querySelector(".container-love-ballon");

// todo - check selector
console.log(btnMessage);
console.log(boxLoginBtn);
console.log(boxLoginMess);
console.log(clLogBtn);
console.log(logBtn);
console.log(inputName);
console.log(inputDate);
console.log(boxSuccess);
console.log(boxFailure);
console.log(clBtnFailure);
console.log(noBtnAnswer);
console.log(yesBtnAnswer);
console.log(boxPar);
console.log(boxConfirm);
console.log(btnConfirm);
console.log(confirmLabel);
console.log(boxFormConfirm);
console.log(boxWrongConfirm);
console.log(textBoxFailureLogin);
console.log(boxH2sc);
console.log(inputConfirm1);
console.log(inputConfirm2);
console.log(inputConfirm3);
console.log(inputConfirm4);
console.log(inputConfirm5);
console.log(inputConfirm6);
console.log(inputConfirmAll);
console.log(boxBallon);

// todo - event listener
btnMessage.addEventListener("click", getMessage);
clLogBtn.addEventListener("click", getCancelLog);
logBtn.addEventListener("click", getLogin);
clBtnFailure.addEventListener("click", getCloseFailure);
noBtnAnswer.addEventListener("click", moveNoBtn);
yesBtnAnswer.addEventListener("click", getYesAnswer);
btnConfirm.addEventListener("click", getLastConfirm);

// todo - math random
function getRandXY() {
  const randomXY = Math.round(Math.random() * 9);
  let resultXY = randomXY;
  if (
    resultXY == 1 ||
    resultXY == 3 ||
    resultXY == 5 ||
    resultXY == 7 ||
    resultXY == 9
  ) {
    return "X";
  } else if (
    resultXY == 2 ||
    resultXY == 4 ||
    resultXY == 6 ||
    resultXY == 8 ||
    resultXY == 10
  ) {
    return "Y";
  }
}
console.log(getRandXY());

function getRandPlusMinus() {
  const randomPM = Math.round(Math.random() * 90);
  if (randomPM < 40) {
    return "";
  } else {
    return "-";
  }
}
console.log(getRandPlusMinus());

function getRandValuePx() {
  const randomPx = Math.round(Math.random() * 105);
  let resultPx = randomPx;
  console.log(resultPx);
  if (randomPx < 65) {
    resultPx += 25;
  } else {
    resultPx;
  }
  return resultPx;
}
console.log(getRandValuePx());

// todo - function
function getMessage() {
  setTimeout(() => {
    btnMessage.innerHTML = '<i class="fa-solid fa-envelope-open"></i>';
  }, 150);
  setTimeout(() => {
    boxLoginBtn.style.display = "none";
    boxLoginMess.style.display = "flex";
  }, 350);
}

function getCancelLog() {
  boxLoginMess.style.display = "none";
  boxLoginBtn.style.display = "flex";
  setTimeout(() => {
    btnMessage.innerHTML = '<i class="fa-solid fa-envelope"></i>';
  }, 150);
}

function getLogin() {
  if (
    (inputName.value == "Muhammad Fauzi Nur Aziz" &&
      inputDate.value == "2005-08-18") ||
    (inputName.value == "muhammad fauzi nur aziz" &&
      inputDate.value == "2005-08-18") ||
    (inputName.value == "MUHAMMAD FAUZI NUR AZIZ" &&
      inputDate.value == "2005-08-18")
    // inputName.value == "" &&
    // inputDate.value == ""
  ) {
    console.log("sudah berhasil");
    boxLoginMess.style.display = "none";
    boxSuccess.style.display = "flex";
    let textNameGreeting = inputName.value;
    nameForGreeting.innerHTML = `<i class="fa-solid fa-heart"></i> ${textNameGreeting} <i class="fa-solid fa-heart"></i>`;
    nameForGreeting.style.marginTop = "1rem";
    // ! - Animation
    boxBallon.style.display = "flex";
  } else {
    const textNameFailure = inputName.value;
    console.error("Gagal");
    textBoxFailureLogin.innerText = `Maaf banget ya "${textNameFailure}". Tapi pesan rahasia ini bukan buat kamu.`;
    boxLoginMess.style.display = "none";
    boxFailure.style.display = "flex";
    inputName.value = "";
    inputDate.value = "";
  }
}

function getCloseFailure() {
  boxFailure.style.display = "none";
  boxLoginBtn.style.display = "flex";
  setTimeout(() => {
    btnMessage.innerHTML = '<i class="fa-solid fa-envelope"></i>';
  }, 150);
}

let moveLimit = 5;
let moveCounter = 0;
function moveNoBtn() {
  if (moveCounter == moveLimit - 1) {
    console.log("Limit reached");
    boxPar.innerText =
      "Karena sudah sampai sini kamu aku paksa milih tombol yang tersisa.";
    noBtnAnswer.style.display = "none";
    yesBtnAnswer.style.fontSize = "1.8rem";
  } else {
    moveCounter += 1;
    let randomXY = getRandXY();
    let randomPM = getRandPlusMinus();
    let randomPx = getRandValuePx();
    let randomTranslate = `translate${randomXY}(${randomPM}${randomPx}px)`;
    noBtnAnswer.style.transform = randomTranslate;
    boxPar.innerText = "eeiitssss.....";
    boxPar.style.textAlign = "center";
    console.log(randomTranslate);
  }
}

function getYesAnswer() {
  let count = 5;
  let limitCount = 0;
  setInterval(() => {
    if (count >= limitCount) {
      boxH2sc.style.display = "none";
      yesBtnAnswer.style.display = "none";
      boxPar.innerText = "tungguin yaa ...  " + count--;
      boxPar.style.textAlign = "center";
      boxPar.style.fontSize = "2rem";
      boxPar.style.marginTop = "7.2rem";
      noBtnAnswer.style.display = "none";
    }
    if (count == limitCount) {
      setTimeout(() => {
        boxConfirm.style.display = "flex";
        boxSuccess.style.display = "none";
      }, 2000);
    }
  }, 1000);
}

function getLastConfirm() {
  if (
    inputConfirm1.value == "8" &&
    inputConfirm2.value == "8" &&
    inputConfirm3.value == "8" &&
    inputConfirm4.value == "8" &&
    inputConfirm5.value == "8" &&
    inputConfirm6.value == "8"
  ) {
    console.log("Hellow success");
    boxConfirm2.style.backgroundImage =
      "url(assets/img/loveballon/love-signal.png)";
    boxFormConfirm.style.display = "none";
    btnConfirm.style.display = "none";
    boxRightConfirm.style.display = "flex";
    setInterval(() => {
      location.href = "secretmessage2.html";
    }, 1500);
  } else {
    console.error("Hellow Failure");
    boxConfirm2.style.backgroundImage =
      "url(assets/img/loveballon/broken-love-white.png)";
    boxFormConfirm.style.display = "none";
    btnConfirm.style.display = "none";
    boxWrongConfirm.style.display = "flex";
    setTimeout(() => {
      boxFormConfirm.style.display = "flex";
      btnConfirm.style.display = "flex";
      boxConfirm2.style.backgroundImage =
        "url(assets/img/loveballon/love-hand.png)";
      boxWrongConfirm.style.display = "none";
    }, 1500);
  }
}
console.log(boxRightConfirm);
// todo - trash
//   switch (randomXY) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 9:
//       return "X";
//     case 2:
//     case 4:
//     case 6:
//     case 8:
//     case 10:
//       return "Y";
//   }
