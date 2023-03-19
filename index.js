const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const generateBtn = document.getElementById("generate-btn");
const generatedPassword = document.getElementById("generated-password");
let newRandomPassword;
let startIndex = 0;
let endIndex = 0;

const generateRandomPassword = () => {
    newRandomPassword = "";
    startIndex = Math.floor(Math.random() * characters.length);
    endIndex = Math.floor(Math.random() * characters.length);
    sortIndexes();
    while(endIndex - startIndex !== 7){
        startIndex = Math.floor(Math.random() * characters.length);
        endIndex = Math.floor(Math.random() * characters.length);
    }
    for(let i = startIndex; i <= endIndex; i++){
        newRandomPassword += characters[i];
    }
    getShuffledString();
    console.log(newRandomPassword);
    render();
}

const getShuffledString = () => {
    newRandomPassword = [...newRandomPassword].sort(()=>Math.random()-.8).join('');
}

const sortIndexes = () => {
    let tempValue;
    if(startIndex > endIndex){
        tempValue = startIndex;
        startIndex = endIndex;
        endIndex = tempValue;
    }
}

const render = () => {
    generatedPassword.innerText = newRandomPassword;
}

generateBtn.addEventListener("click", generateRandomPassword);