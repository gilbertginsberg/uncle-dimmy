//globals
var dimunutive = document.getElementById("dimunutive");
var newWord = "";
var specialIco = document.getElementById("specialIco");


function initialize() {
  let btn = document.getElementById("btn");
  btn.onclick = handleClick;
}

function handleClick(event) {
  event.preventDefault();
 
  var masculineBtn = document.getElementById("masculine");
  var feminineBtn = document.getElementById("feminine");
  var adverbBtn = document.getElementById("adverb");
  
  var text = document.getElementById("word"); 
  var inputWord = text.value;
  console.log("submitted word is " + inputWord);
  
  var lastChar = inputWord.charAt(inputWord.length - 1);
  console.log("lastChar is " + lastChar);
  
  var secondToLastChar = inputWord.charAt(inputWord.length - 2);
  
  specialIco.innerHTML = "";
  
  if (typeof inputWord !== "string") {
    console.log("Alert user to input a string");
  } else {
    if (masculineBtn.checked) {
      masculineForms(lastChar, inputWord, secondToLastChar);
    } else if (feminineBtn.checked) {
      feminineForms(lastChar, inputWord, secondToLastChar);
    } else if (adverbBtn.checked) {
      adverbForms(lastChar, inputWord, secondToLastChar);
    } else {
      alert("Please select a butt, sir or madam.");
    }
  }
}

//rules for converting masculine nouns and adjectives into diminutives
function masculineForms(lastChar, inputWord, secondToLastChar) {
 
  if (secondToLastChar === "c") {
    newWord = inputWord.slice(0, -2) + "quito";  
    dimunutive.innerHTML = newWord;
  } else if (lastChar === "k") {
    newWord = inputWord.slice(0, -1) + "quito";  
    dimunutive.innerHTML = newWord;
  } else if (secondToLastChar === "g") {
    newWord = inputWord.slice(0, -1) + "uito";  
    dimunutive.innerHTML = newWord;
  } else if (lastChar === "z") {
    newWord = inputWord.slice(0, -1) + "cecito";  
    dimunutive.innerHTML = newWord;
  } else if (secondToLastChar === "u") {
    newWord = inputWord.slice(0, -2) + "üito";  
    dimunutive.innerHTML = newWord;
  } else if (secondToLastChar === "t") {
    newWord = "1: " + inputWord.slice(0, -1) + "ito";  
    dimunutive.innerHTML = newWord;
    
    newWord = "2: " + inputWord.slice(0, -1) + "ico";  
    specialIco.innerHTML = newWord;
  } else if (lastChar === "o") {
    newWord = inputWord.slice(0, -1) + "ito";  
    dimunutive.innerHTML = newWord;
  } else if (lastChar === "l" || lastChar === "s" && secondToLastChar === "e") {
    newWord = inputWord + "ito";
    dimunutive.innerHTML = newWord;
  } else if (lastChar === "r" || lastChar === "n" || lastChar === "e") {
    newWord = inputWord + "cito";
    dimunutive.innerHTML = newWord;
  } else if (lastChar === "s") {
    newWord = inputWord.slice(0, -2) + "itos";  
    dimunutive.innerHTML = newWord;
  } else {
     newWord = inputWord + "ito";
     dimunutive.innerHTML = newWord;
  }
 }

//rules for converting feminine nouns and adjectives into diminutives
function feminineForms(lastChar, inputWord, secondToLastChar) {
  
   if (secondToLastChar === "c") {
    newWord = inputWord.slice(0, -2) + "quita";  
    dimunutive.innerHTML = newWord;
  } else if (lastChar === "k") {
    newWord = inputWord.slice(0, -1) + "quita";  
    dimunutive.innerHTML = newWord;
  } else if (secondToLastChar === "g") {
    newWord = inputWord.slice(0, -1) + "uita";  
    dimunutive.innerHTML = newWord;
  } else if (lastChar === "z") {
    newWord = inputWord.slice(0, -1) + "cecita";  
    dimunutive.innerHTML = newWord;
  } else if (secondToLastChar === "u") {
    newWord = inputWord.slice(0, -2) + "üita";  
    dimunutive.innerHTML = newWord;
  } else if (secondToLastChar === "t") {
    newWord = "1: " + inputWord.slice(0, -1) + "ita";  
    dimunutive.innerHTML = newWord;
    
    newWord = "2: " + inputWord.slice(0, -1) + "ica";  
    specialIco.innerHTML = newWord;
  } else if (lastChar === "a") {
    newWord = inputWord.slice(0, -1) + "ita";  
    dimunutive.innerHTML = newWord;
  } else if (lastChar === "l" || lastChar === "s" && secondToLastChar === "e") {
    newWord = inputWord + "ita";
    dimunutive.innerHTML = newWord;
  } else if (lastChar === "r" || lastChar === "n" || lastChar === "e") {
    newWord = inputWord + "cita";
    dimunutive.innerHTML = newWord;
  } else if (lastChar === "s") {
    newWord = inputWord.slice(0, -2) + "itas";  
    dimunutive.innerHTML = newWord;
  } else {
     newWord = inputWord + "ita";
     dimunutive.innerHTML = newWord;
  }
 }
 
 function adverbForms (lastChar, inputWord, secondToLastChar) {
   if (lastChar === "a") {
     newWord = inputWord.slice(0, -1) + "ita";
     dimunutive.innerHTML = newWord;
   } else {
     masculineForms(lastChar, inputWord, secondToLastChar);
   }
 }

window.onload = initialize;