//DOM Elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const CapLettersEl = document.getElementById('CapLetters');
const LowLettersEl = document.getElementById('LowLetters');
const NumbersEl = document.getElementById('Numbers');
const SpecialCharEl = document.getElementById('SpecialChar');
const GeneratesEl = document.getElementById('Generates');
var generateBtn = document.querySelector("#generate");

const randomFunc = {
  capital: getRandomcapital,
  lower: getRandomlower,
  number: getRandomnumber,
  special: getRandomspecials
}

//generate active listener
generateBtn.addEventListener('click', function (writePassword) {
  const length = +lengthEl.value;
  const hasCapital = CapLettersEl.checked;
  const hasLower = LowLettersEl.checked;
  const hasNumber = NumbersEl.checked;
  const hasSpecial = SpecialCharEl.checked;

  passwordEl.innerText = generatePassword(hasCapital, hasLower, hasNumber, hasSpecial, length
    );
  
});

//generates password
function generatePassword(capital, lower, number, special, length) {
  let generatedPassword = '';
      const typesCount = capital + lower + number + special;
// console.log('typesCount: '), typesCount;


      const typesArr = [{capital}, {lower}, {number}, {special}].filter(item => Object.values(item)[0]
      );
// console.log('typesArr: ', typesArr);

      if(typesCount === 0) {
        return'';
      }


      for(let i = 0; i < length; i += typesCount) {
          typesArr.forEach(type => {
              const funcName = Object.keys(type)[0];
// console.log('funcName: ', funcName);
              generatedPassword += randomFunc[funcName]();
             
           });
      }

  }

// Write password to the #password input
function writePassword() {
  var password = generatedPassword.slice(0, length);
  return password;

}







// generator functions
function getRandomcapital() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }

function getRandomlower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomnumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomspecials() {
  const specials = "!@#$%^&*()+-[]<>";
  return specials[Math.floor(Math.random() * specials.length)];
}


