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
    Dealershand.push(Randomnumber(1, 12));
  }
  const Dealerhanddiv = document.querySelector(".Dealer");
  Dealerhanddiv.insertAdjacentHTML(
    "afterbegin",
    `<p class="Dealerscard">${Dealershand[0]}</p>
      <p class="Dealerscard">(Unknown Card >:D)</p>`,
  );
  while (Playershand.length < 2) {
    Playershand.push(Randomnumber(1, 12));
  }
  const Playerhanddiv = document.querySelector(".Player");
  Playerhanddiv.insertAdjacentHTML(
    "afterbegin",
    `<p class="Playerscard">${Playershand[0]}</p>
    <p class="Playerscard">${Playershand[1]}</p>`,
  );
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
  if (Dealershandtotalp) {
    Dealershandtotalp.remove();
  }
  let dealertotal = 0;
  dealerhand.forEach((card) => {
    dealertotal = card + dealertotal;
  });
}

Dealershandtotal(Dealershand);

function winning() {
  let Playershandtotal = 0;
  Playershand.forEach((card) => (Playershandtotal = Playershandtotal + card));
  let Dealershandtotal = 0;
  Dealershand.forEach((card) => (Dealershandtotal = Dealershandtotal + card));
  if (
    (Playershandtotal > Dealershandtotal && Playershandtotal <= 21) ||
    Dealershandtotal > 21
  ) {
    const playerhanddiv = document.querySelector(".Player");
    playerhanddiv.insertAdjacentHTML(
      "afterbegin",
      `<p class="winner">You Win! Reload The Page to Play Again!</p>`,
    );
  } else if (
    Playershandtotal > 21 ||
    (Dealershandtotal > Playershandtotal && Dealershandtotal <= 21)
  ) {
    const dealerhanddiv = document.querySelector(".Dealer");
    dealerhanddiv.insertAdjacentHTML(
      "afterbegin",
      `<p class="loser">You Lose! Reload The Page to Play Again!</p>`,
    );
  } else {
    const playerhanddiv = document.querySelector(".Player");
    playerhanddiv.insertAdjacentHTML(
      "afterbegin",
      `<p class="winner">Tie! Reload The Page to Play Again!</p>`,
    );
  }
}

function actions() {
  const Hit = document.querySelector(".Hit");
  let dealertotal = 0;
  Dealershand.forEach((card) => (dealertotal = dealertotal + card));
  console.log(dealertotal);
  Hit.addEventListener("click", function () {
    Playershand.push(Randomnumber(1, 12));
    Playershandtotal(Playershand);
    const oldPlayercards = document.querySelectorAll(".Playerscard");
    oldPlayercards.forEach((oldcard) => oldcard.remove());
    const playerhanddiv = document.querySelector(".Player");
    Playershand.forEach((card) => {
      playerhanddiv.insertAdjacentHTML(
        "afterbegin",
        `<p class="Playerscard">${card}</p>`,
      );
    });
  });
  const Stand = document.querySelector(".Stand");
  Stand.addEventListener("click", function () {
    let playertotal = 0;
    Playershand.forEach((card) => (playertotal = playertotal + card));
    if (playertotal <= 21) {
      while (dealertotal < 17) {
        Dealershand.push(Randomnumber(1, 12));
        Dealershandtotal(Dealershand);
        dealertotal = 0;
        Dealershand.forEach((card) => (dealertotal = dealertotal + card));
      }
    }
    const oldDealerscards = document.querySelectorAll(".Dealerscard");
    oldDealerscards.forEach((oldcard) => oldcard.remove());
    const dealerhanddiv = document.querySelector(".Dealer");
    Dealershand.forEach((card) => {
      dealerhanddiv.insertAdjacentHTML(
        "afterbegin",
        `<p class="Dealerscard">${card}</p>`,
      );
    });
    console.log(dealertotal);
    dealerhanddiv.insertAdjacentHTML(
      "afterbegin",
      `<p class="Dealerstotal">Total:${dealertotal}</p>`,
    );
    winning();
  });
}

actions();
