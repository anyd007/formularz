const formMain = document.querySelector('form');
const h1 = document.querySelector('h1');
const inputName = document.querySelector(".name-input");
const inputEmail = document.querySelector(".email-input");
const inputs = document.querySelectorAll("input");
const textera = document.querySelector(".text-feld");
const sendBtn = document.querySelector(".send-btn");
const warining = document.querySelector(".warning");
const warinig2 = document.querySelector(".warning2");
let nameLetters = /^[a-zA-Z\s]*$/; ///[^a-zA-Z\s]*$/ - oznacza wykluczenie wszystkich znaków, /^[a-zA-Z\s]*$/ - zawiera wszystkie znaki
let nameEmail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

const popupMain = document.createElement('div');
popupMain.classList.add('popup')
document.body.append(popupMain)

const sendListener = () => {
  warining.textContent = "";
  warinig2.textContent = "";
inputEmail.style.backgroundColor = 'white';
inputName.style.backgroundColor = 'white';
  inputs.forEach((inps) => {
    // inps.style.backgroundColor = "white";
    if (inps.value === "") {
      inps.style.backgroundColor = "red";
      warining.textContent = "pola zaznaczone na czerwono są obowiązkowe";
     warinig2.textContent = ''
    }  
    else if(!inputEmail.value.match(nameEmail)) {
      inputEmail.style.backgroundColor = "orange";
      warinig2.textContent = 'pole "email" zawiera błędy';
    } 
   else{
       popupMain.style.display = 'flex'
       formMain.classList.add('blur');
       h1.classList.add('blur');
   }
  });
  
};

sendBtn.addEventListener("click", sendListener);
