const inputName = document.querySelector(".name-input");
const inputEmail = document.querySelector(".email-input");
const inputs = document.querySelectorAll("form input");
const textera = document.querySelector(".text-feld");
const sendBtn = document.querySelector(".send-btn");
const warining = document.querySelector(".warning");
let nameLetters = /^[a-zA-Z\s]*$/;

const sendListener = () => {
  if (inputName.value.match(nameLetters)) {
    inputs.forEach((input) => {
      if (input.value === "") {
        input.style.backgroundColor = "red";
        warining.textContent = 'pola "imię" oraz "e-mail" są obowiązkowe';
      } else {
        input.style.backgroundColor = "white";
        warining.textContent = "";
      }
    });
  } else {
    inputName.style.backgroundColor = "red";
    warining.textContent = 'pole "imię" zawira niedozwolone znaki';
  }
};

sendBtn.addEventListener("click", sendListener);
