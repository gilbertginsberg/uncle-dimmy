// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html
  
  //globals
  var dimunutive = document.getElementById("dimunutive");
  var newWord = "";


function initialize() {
  
  
  let btn = document.getElementById("btn");
  btn.onclick = handleClick;
}


function handleClick(event) {
  event.preventDefault();
 
  var masculineBtn = document.getElementById("masculine");
  var feminineBtn = document.getElementById("feminine");
  
  var text = document.getElementById("word"); 
  var inputWord = text.value;
  console.log("what's up" + inputWord);
  
  var lastVowel = inputWord.charAt(inputWord.length - 1);
  console.log(lastVowel);
  
  if (typeof inputWord !== "string") {
    console.log("Alert user to input a string");
  } else {
    if (masculineBtn.checked) {
      masculineForms(lastVowel, inputWord);
    } else if (feminineBtn.checked) {
      feminineForms();
    } else {
      console.log("Please select a gender, sir or madam.");
    }
  }
}

function masculineForms(lastVowel, inputWord) {
  console.log("test test");
  console.log(lastVowel);
  if (lastVowel === "o") {
    newWord = inputWord.slice(0, -1) + "ito";  
    dimunutive.innerHTML = newWord;
  }
}

function feminineForms() {
  if (lastVowel === "a") {
      newWord = inputWord.slice(0, -1) + "ita";
      dimunutive.innerHTML = newWord;
  }
 }


window.onload = initialize;