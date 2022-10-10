//Scrivi un programma che stampi in console i numeri da 1 a 100
//multipli 3 stampi “Fizz” - 5 stampi “Buzz” -multipli di 3 che di 5 stampi “FizzBuzz” --> %


const row = document.querySelector(".row");
console.log(row);
//VARIABILI per DIV
let contentDiv = "";
let backgroundDiv = "";
let textDiv = "";


//CREARE INTERAZIONE i tra 1 e 100
for (let i = 1; i <= 100; i++) {
  //creare all'interno del loop una CONDIZIONE if %2===0 divisibile per 2 etc. contentDiv = fizz
  //creare una seconda CONDIZIONE in base al ${contentDiv} adding class: bg-numb bg-fzz bg-bzz bg-fzzbzz
  if (i % 3 === 0 && i % 5 !== 0) {
    contentDiv = "Fizz";
    backgroundDiv = "bg-fzz";
  } else if (i % 5 === 0 && i % 3 !== 0) {
    contentDiv = "Buzz";
    backgroundDiv = "bg-bzz";
  } else if (i % 3 === 0 && i % 5 === 0) {
    contentDiv = "FizzBuzz";
    backgroundDiv = "bg-fzzbzz";
  } else {
    contentDiv = i;
    backgroundDiv = "bg-numb";
  }
  console.log(contentDiv, backgroundDiv);

  //con createElement creare all'interno della row > <div class="col"> ${contentDiv} </div>   -->
  textDiv = `<div class= "col ${backgroundDiv}"> ${contentDiv}  </div>`;
  console.log(textDiv);

  //OUTPUT innerHTML mode
  row.innerHTML += textDiv;
}
