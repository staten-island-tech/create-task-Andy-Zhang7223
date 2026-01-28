import "./style.css";

function Randomnumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

let Dealershand = [];
let Playershand = [];

function gamestart() {
  while (Dealershand.length < 2) {
    Dealershand.push(Randomnumber(1, 11));
  }
  while (Playershand.length < 2) {
    Playershand.push(Randomnumber(1, 11));
  }
}

gamestart();

function Playershandtotal(playerhand) {
  const Playershandtotalp = document.querySelector(".Playershandtotal");
  const playerhanddiv = document.querySelector(".Player");
  if (Playershandtotalp) {
    Playershandtotalp.remove();
  }
  let playertotal = 0;
  playerhand.forEach((card) => {
    playerhanddiv.insertAdjacentHTML(
      "afterbegin",
      `<p class="Playershandtotal">${card}</p>`,
    );
    playertotal = card + playertotal;
  });
  playerhanddiv.insertAdjacentHTML(
    "afterbegin",
    `<p class="Playershandtotal">Your Total:${playertotal}</p>`,
  );
}

Playershandtotal(Playershand);

function Dealershandtotal(dealerhand) {
  const Dealershandtotalp = document.querySelector(".Dealershandtotal");
  const dealerhanddiv = document.querySelector(".Dealer");
  if (Dealershandtotalp) {
    Dealershandtotalp.remove();
  }
  let dealertotal = 0;
  dealerhand.forEach((card) => {
    dealerhanddiv.insertAdjacentHTML(
      "afterbegin",
      `<p class="Dealershandtotal">${card}</p>`,
    );
    dealertotal = card + dealertotal;
  });
  dealerhanddiv.insertAdjacentHTML(
    "afterbegin",
    `<p class="Dealershandtotal">Dealer's Total:${dealertotal}</p>`,
  );
}

Dealershandtotal(Dealershand);

function winning() {
  if (Playershand === 21 || (Playershand > Dealershand && Playershand <= 21)) {
    const playerhanddiv = document.querySelector(".Player");
    playerhanddiv.insertAdjacentHTML(
      "afterbegin",
      `<p class="winner">You Win! Reload The Page to Play Again!</p>`,
    );
  }
  else if (Playershand > 21 || Dealershand > Playershand && Dealershand <= 21) {
    const dealerhanddiv = document.querySelector(".Dealer");
    dealerhanddiv.insertAdjacentHTML(
      "afterbegin",
      `<p class="loser">You Lose! Reload The Page to Play Again!</p>`,
    );
  }
  else {
    const playerhanddiv = document.querySelector(".Player");
    playerhanddiv.insertAdjacentHTML(
      "afterbegin",
      `<p class="winner">Tie! Reload The Page to Play Again!</p>`,
    );
  }
}

function actions() {
  const Hit = document.querySelector(".Hit");
  Hit.addEventListener("click", function () {
    Playershand.push(Randomnumber(1, 11));
    Playershandtotal(Playershand);
  });
  const Stand = document.querySelector(".Stand");
  Stand.addEventListener("click", function)
}
