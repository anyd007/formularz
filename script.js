const formMain = document.querySelector('form');
const h1 = document.querySelector('h1');
const inputName = document.querySelector(".name-input");
const inputEmail = document.querySelector(".email-input");
const inputs = document.querySelectorAll("input");
const textera = document.querySelector(".text-feld");
const sendBtn = document.querySelector(".send-btn");
const warining = document.querySelector(".warning");
const warinig2 = document.querySelector(".warning2");
const darkmodeMain = document.querySelector('.dark-ver');
const darkmodeBtn = document.querySelector('.fa-check-square');
const darkmodeInfo = document.querySelector('.dark-info');
let nameLetters = /^[a-zA-Z\s]*$/; ///[^a-zA-Z\s]*$/ - oznacza wykluczenie wszystkich znaków, /^[a-zA-Z\s]*$/ - zawiera wszystkie znaki
let nameEmail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

const popupMain = document.createElement('div');
const h2Popup = document.createElement('h3');
const paraPopup = document.createElement('p');
const popupBtn = document.createElement('button');

popupMain.classList.add('popup')
document.body.append(popupMain);
popupMain.append(h2Popup, paraPopup, popupBtn);

h2Popup.textContent = 'udało się!'
popupBtn.textContent = 'zamknij'


h2Popup.style.fontSize = '50px'
paraPopup.setAttribute('style', 'white-space: pre;')
paraPopup.classList.add('popup-para')
popupBtn.classList.add('popup-btn')
h2Popup.classList.add('popup-h3')


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
   else if(inputName.value !== '' && inputEmail.value.match(nameEmail)){
       popupMain.style.display = 'flex'
       formMain.classList.add('blur');
       h1.classList.add('blur');
       darkmodeMain.classList.add('blur')
       if(textera.value !== ''){
       paraPopup.textContent = `dane które przekazałeś to:\r\n twoje imię: ${inputName.value}. twój adres e-mail to: ${inputEmail.value}.\r\n a twoja wiadomość ma treść: ${textera.value}`
       } else{
        paraPopup.textContent = `dane które przekazałeś to:\r\n twoje imię: ${inputName.value}. twój adres e-mail to: ${inputEmail.value}.\r\n niestety nic do mnie nie napisałeś`

       }
   }
  });
  
};

sendBtn.addEventListener("click", sendListener);

popupBtn.addEventListener('click', ()=>{
    popupMain.style.display = 'none'
    formMain.classList.remove('blur');
       h1.classList.remove('blur');
       darkmodeMain.classList.remove('blur');
       inputName.value = '';
       inputEmail.value = '';
})
darkmodeBtn.addEventListener('click', ()=>{
    
    document.body.classList.toggle('dark-mode');
    popupMain.classList.toggle('dark-mode');
    if(darkmodeInfo.textContent === 'ciemny motyw'){
        darkmodeInfo.textContent = 'jasny motyw'
    }else{
        darkmodeInfo.textContent = 'ciemny motyw'
    }
})
