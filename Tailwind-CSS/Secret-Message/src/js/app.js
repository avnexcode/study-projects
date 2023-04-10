// alert("rekomendasi untuk windows");
// todo - form login
const btnFormLogin = document.getElementById("button-form");
const secBtnLogin = document.getElementById("section-button-login");
const secFormLogin = document.getElementById("section-form-login");

btnFormLogin.addEventListener("click", getFormLogin);

function getFormLogin() {
  btnFormLogin.classList.remove("animate-bounce");
  btnFormLogin.classList.add("animate-spin-one");
  setTimeout(() => {
    btnFormLogin.classList.add("animate-ping");
    btnFormLogin.classList.remove("animate-spin-one");
    btnFormLogin.classList.add("animate-bounce");
    btnFormLogin.innerHTML = '<i class="fa-solid fa-envelope-open-text"></i>';
  }, 1000);
  setTimeout(() => {
    btnFormLogin.innerHTML = '<i class="fa-solid fa-envelope"></i>';
  }, 1500);
  setTimeout(() => {
    secBtnLogin.style.display = "none";
    secFormLogin.style.display = "flex";
  }, 2000);
}

// todo - login success
const btnLogin = document.getElementById("button-login");
const inputName = document.getElementById("input-name");
const inputDate = document.getElementById("input-date");
const secModalSuccess = document.getElementById("section-modal-success");
const spanName = document.getElementById("input-name-failure-login");
const secModalFail = document.getElementById("section-modal-failure");
const nameGreeting = document.getElementById("name-greeting");

btnLogin.addEventListener("click", getLogin);

function SendMail() {
  let params = {
    from_name: inputName.value,
    message: inputDate.value,
  };
  emailjs
    .send("service_q1k4b8q", "template_oldfj5h", params)
    .then(function (res) {
      console.error("Err");
    });
}

function getLogin(e) {
  e.preventDefault();
  let getUserInputName = SendMail();
  if (
    inputName.value == "Muhammad Fauzi Nur Aziz" &&
    inputDate.value == "2003-08-18"
    // inputName.value == "" &&
    // inputDate.value == ""
  ) {
    secModalSuccess.style.display = "flex";
    secFormLogin.style.display = "none";
    nameGreeting.innerText = `-${inputName.value}-`;
    inputName.value = "";
    inputDate.value = "";
  }
  // todo - login failure
  else {
    spanName.innerText = inputName.value;
    secFormLogin.style.display = "none";
    secModalFail.style.display = "flex";
    btnFormLogin.classList.remove("animate-ping");
    getUserInputName;
    inputName.value = "";
    inputDate.value = "";
  }
}

// todo - cancel login
const btnCancelLogin = document.getElementById("button-cancel-login");

btnCancelLogin.addEventListener("click", getCancelLogin);

function getCancelLogin(e) {
  secFormLogin.style.display = "none";
  secBtnLogin.style.display = "flex";
  btnFormLogin.classList.remove("animate-spin-one");
  btnFormLogin.classList.remove("animate-ping");

  e.preventDefault();
}

// todo - close failure
const btnCloseFailure = document.getElementById("button-close-failure");

btnCloseFailure.addEventListener("click", getCloseFailure);

function getCloseFailure(e) {
  secModalFail.style.display = "none";
  secBtnLogin.style.display = "flex";
  e.preventDefault();
}

// todo - function random transform translate

function getPX() {
  let random = Math.round(Math.random() * 100);
  if (random > 35) {
    return random;
  }
  if (random < 35) {
    return (random += 30);
  }
}

function getPlsMns() {
  let random = Math.round(Math.random() * 100);
  return random < 50 ? "" : "-";
}

function getXY() {
  let random = Math.round(Math.random() * 100);
  return random < 50 ? "X" : "Y";
}

// todo - random pass

function randomPass() {
  let pass = Math.round(Math.random() * 10);
  return pass == 10 ? pass - 1 : pass + 0;
}
let confirmCode = [];

// todo - yes answer
const btnYesAnswer = document.getElementById("button-yes-answer");
const secConfirmBox = document.getElementById("section-modal-confirm");
const lockIcon = document.getElementById("lock-unlock");

btnYesAnswer.addEventListener("click", getYesAnswer);

function getYesAnswer(e) {
  secModalSuccess.style.display = "none";
  secConfirmBox.style.display = "flex";
  confirmCode.push(
    randomPass(),
    randomPass(),
    randomPass(),
    randomPass(),
    randomPass(),
    randomPass()
  );
  setTimeout(() => {
    lockIcon.style.color = "grey";
    confirmCode.pop();
    confirmCode.pop();
    confirmCode.pop();
    confirmCode.pop();
    confirmCode.pop();
    confirmCode.pop();
  }, 180000);
  // console.log(confirmCode);

  // setTimeout(() => {
  //   console.log(confirmCode);
  // }, 180000);
  e.preventDefault();
}

// todo - no answer
const btnNoAnswer = document.getElementById("button-no-answer");
const headerNameGreeting = document.getElementById("header-name-greeting");
const divModalSuccess = document.querySelector("#section-modal-success div");

btnNoAnswer.addEventListener("click", getNoAnswer);

const paraf = document.getElementById("paraf-modal-success");
let limit = 5;
function getNoAnswer(e) {
  let px = getPX();
  let pm = getPlsMns();
  let xy = getXY();
  if (limit <= 0) {
    nameGreeting.style.display = "block";
    headerNameGreeting.style.display = "block";
    headerNameGreeting.innerText = "Haii kembalii...Hehe.";
    headerNameGreeting.style.fontSize = "1.5rem";
    btnNoAnswer.style.display = "none";
    btnYesAnswer.style.color = "green";
    btnYesAnswer.style.fontSize = "2rem";
    divModalSuccess.style.padding = "1rem";
    paraf.innerText =
      "kenapa tidak jadi? pokoknya aku memaksa kamu untuk membuka pesan dariku.";
  } else {
    limit--;
    nameGreeting.style.display = "none";
    divModalSuccess.style.padding = "4rem";
    headerNameGreeting.style.display = "none";
    paraf.innerText = "eeiittsss....hehe...";
    btnNoAnswer.innerHTML = '<i class="fa-solid fa-naira-sign"></i>';
    btnNoAnswer.style.transform = `translate${xy}(${pm}${px}px)`;
    btnNoAnswer.style.color = "red";
  }

  e.preventDefault();
}

// todo - confirm

const btnConfirm = document.getElementById("button-confirm");
const allInputConfirm = document.querySelectorAll(
  "#section-modal-confirm form input"
);

btnConfirm.addEventListener("click", getConfirm);

function getConfirm(event) {
  for (let i = 0; i < allInputConfirm.length; i++) {
    if (allInputConfirm[i].value == confirmCode[i]) {
      lockIcon.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
      lockIcon.style.color = "green";
      setTimeout(() => {
        lockIcon.innerHTML = '<i class="fa-solid fa-lock"></i>';
        lockIcon.style.color = "black";
        allInputConfirm[i].value = "";
      }, 1000);
    } else {
      lockIcon.classList.add("animate-ping");
      lockIcon.style.color = "red";
      allInputConfirm[i].value = "❌";
      setTimeout(() => {
        lockIcon.classList.remove("animate-ping");
        lockIcon.style.color = "black";
        allInputConfirm[i].value = "";
      }, 1000);
    }
  }
  event.preventDefault();
}

// todo - more password

lockIcon.addEventListener("click", getMorePassword);

function getMorePassword(e) {
  e.preventDefault();
  if (confirmCode.length == 0) {
    lockIcon.style.color = "black";
    confirmCode.push(
      randomPass(),
      randomPass(),
      randomPass(),
      randomPass(),
      randomPass(),
      randomPass()
    );
    setTimeout(() => {
      lockIcon.style.color = "grey";
      confirmCode.pop();
      confirmCode.pop();
      confirmCode.pop();
      confirmCode.pop();
      confirmCode.pop();
      confirmCode.pop();
    }, 180000);
  } else {
    lockIcon.style.color = "grey";
    confirmCode.pop();
    confirmCode.pop();
    confirmCode.pop();
    confirmCode.pop();
    confirmCode.pop();
    confirmCode.pop();
  }

  console.log(confirmCode);
}
