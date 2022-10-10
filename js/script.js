// DEBUG
console.log("Hello");

//Scrivi un programma che stampi in console i numeri da 1 a 100
//multipli 3 stampi “Fizz” - 5 stampi “Buzz” -multipli di 3 che di 5 stampi “FizzBuzz” --> %

//creare una LET contentDiv ="";
let contentDiv = "";
//CREARE INTERAZIONE i tra 1 e 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
  //creare all'interno del loop una CONDIZIONE if %2===0 divisibile per 2 etc. contentDiv = fizz
  if (i % 3 === 0 && i % 5 !== 0) {
    contentDiv = "Fizz";
  } else if (i % 5 === 0 && i % 3 !== 0) {
    contentDiv = "Buzz";
  } else if (i % 3 === 0 && i % 5 === 0) {
    contentDiv = "FizzBuzz";
  } else {
    contentDiv = i;
  }
  console.log(contentDiv);
}

// dare al divisibile per pari il nome fizz- per 5 Buzz per entrambi FIZZBUZZ --> else con numero=i?
//con createElement creare all'interno della row > <div class="col"> ${contentDiv} </div>   -->
//creare una seconda CONDIZIONE in base al ${contentDiv} adding class: bg-numb bg-fzz bg-bzz bg-fzzbzz
