const keys = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "!@#$%*&(){}[]=<>/,."
};

const length = document.getElementById('lengthID');



//generator functions
const getKey = [
    function uppercase() {
        return keys.uppercase[Math.floor(Math.random() * keys.uppercase.length)];
    },
    function lowercase() {
        return keys.lowercase[Math.floor(Math.random() * keys.lowercase.length)];
    },
    function number() {
        return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
        return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
];

//Gerate password on click
generate.addEventListener('click', generatePassword); 


function generatePassword() {
    const upper = document.getElementById('uppercase').checked;
    const lower = document.getElementById('lowercase').checked;
    const number = document.getElementById('number').checked;
    const symbol = document.getElementById('symbol').checked;
    
    const checkedCount = lower + upper + number + symbol;
    if (checkedCount === 0) {
        return '';
    }
    const passwordEl = document.getElementById('password');
    let password = ""
    while (length.value > password.length) {
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        let isChecked = document.getElementById(keyToAdd.name).checked;

        if (isChecked) {
            password += keyToAdd();
        }
    }
 
    passwordEl.value = password 

}

//copy password
copy.addEventListener('click', copyPassword)

function copyPassword() {
    
    var textarea = document.getElementById("password");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    alert("Password copied to clipboard")
  }
