// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

function initialize() {
  let btn = document.getElementById("btn");
  btn.onclick = handleClick;
}

function handleClick(event) {
  event.preventDefault();
  let text = document.getElementById("word"); 
  let inputWord = text.value;
  console.log(inputWord);
  let lastVowel = inputWord.charAt(inputWord.length - 1);
  console.log(lastVowel);
  let dimunutive = document.getElementById("dimunutive");
  let newWord = "";
  
  if (typeof inputWord !== "string") {
    console.log("Alert user to input a string");
  } else {
    //final phone is 'o'
    if (lastVowel === "o") {
      newWord = inputWord.slice(0, -1) + "ito";  
      dimunutive.innerHTML = newWord;
      
      //final phone is 'a'
    } else if (lastVowel === "a") {
      newWord = inputWord.slice(0, -1) + "ita";
      dimunutive.innerHTML = newWord;
    } 
  }
}

window.onload = initialize;