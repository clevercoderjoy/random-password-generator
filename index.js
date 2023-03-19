const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const generateBtn = document.getElementById("generate-btn");
const generatedPassword = document.getElementById("generated-password");
let newRandomPassword;
let startIndex = 0;
let endIndex = 0;

const generateRandomPassword = () => {
    newRandomPassword = "";
    for (let i = 0; i < 8; i++)
    {
        newRandomPassword += characters[Math.floor(Math.random() * characters.length)];
    }
    render();
}

const render = () => {
    generatedPassword.innerText = newRandomPassword;
}

generateBtn.addEventListener("click", generateRandomPassword);