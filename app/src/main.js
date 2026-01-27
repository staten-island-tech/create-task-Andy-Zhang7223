import "./style.css";

let nextcard = Math.floor(Math.random() * (10 - 1));

let Dealershand = [5, 10];
let Playershand = [10, 11];

const playerhanddiv = document.querySelector(".Player");
playerhanddiv.insertAdjacentHTML(
  "afterbegin",
  `<p class="Playershandtotal">55</p>`
);

function Playershandtotal(playerhand) {
  const Playershandtotal = document.querySelector(".Playershandtotal");
  if (Playershandtotal) {
    Playershandtotal.remove();
  } else {
    return;
  }
  let total = 0;
  playerhand.forEach((card) => {
    total = card + total;
  });
  const playerhanddiv = document.querySelector(".Player");
  playerhanddiv.insertAdjacentHTML(
    "afterbegin",
    `<p class="Playershandtotal">${total}</p>`
  );
}

Playershandtotal(Playershand);

function Dealershandtotal(dealerhand) {
  const Dealershandtotal = document.querySelector(".Dealershandtotal");
  if (Dealershandtotal) {
    Dealershandtotal.remove();
  } else {
    return;
  }
  let total = 0;
  dealerhand.forEach((card) => {
    total = card + total;
  });
  const dealerhanddiv = document.querySelector(".Dealer");
  dealerhanddiv.insertAdjacentHTML(
    "afterbegin",
    `<p class="Dealershandtotal">${total}</p>`
  );
}

Dealershandtotal(Dealershand);
