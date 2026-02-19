
function toUpperCase() {
let text = document.getElementById("textInput")
.value;

let final = text.toUpperCase();

document.getElementById("outputText")
.textContent = final;
}


function toLowerCase() {
let text = document.getElementById("textInput")
.value;

let final = text.toLowerCase();
document.getElementById("outputText")
.textContent = final;
}


function capitalizeWords() {
let text = document.getElementById("textInput")
.value;
let words = text.split(" ");

for (let i = 0; i < words.length; i++) {
words[i] = words[i][0].toUpperCase() 
+ words[i].slice(1).toLowerCase();
}

let final = words.join(" ");
document.getElementById("outputText")
.textContent = final;
}


function removeExtraSpaces() {
let text = document.getElementById("textInput")
.value;
let words = text.split(" ");
let final = "";

for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
final = final + words[i] + " ";
}
}

document.getElementById("outputText")
.textContent = final.trim();
}


function replaceWord() {
let text = document.getElementById("textInput")
.value;
let oldWord = prompt("Word to replace:");
let newWord = prompt("Replace with:");
let final = text.split(oldWord).join(newWord);
document.getElementById("outputText")
.textContent = final;
}


function countCharacters() {
let output = document.getElementById("outputText")
.textContent;
let input = document.getElementById("textInput")
.value;

if (output.length > 0) {
alert("Character count: " + output.length);
} 
else {
alert("Character count: " + input.length);
}
}
