let person = [0, []];
let bot = [0, []];
let moves = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let wcomb = null;
let btt1 = document.getElementById("p1");
let btt2 = document.getElementById("p2");
let box = document.querySelector(".box");
let tiles = document.querySelectorAll(".tile");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let wndw = document.getElementById("w3");

function selectPlayer(element, n) {
  element.addEventListener("click", () => {
    if (n) {
      person[0] = '<img src="logo1.png" id="crl" />';
      bot[0] = '<img src="logo3.png" />';
    } else {
      bot[0] = '<img src="logo1.png" id="crl" />';
      person[0] = '<img src="logo3.png" />';
    }
    box.scrollTop = 600;
  });
}

selectPlayer(btt1, 1);
selectPlayer(btt2, 0);

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (
      moves.indexOf(eval(tile.id)) != -1 ||
      moves.indexOf(eval(tile.id)) == 0
    ) {
      tile.innerHTML = person[0];
      person[1].push(eval(tile.id));
      moves.splice(moves.indexOf(eval(tile.id)), 1);
      if (chechWinner(person)) {
        wlt(1);
      } else if (!chechWinner(person) && !chechWinner(bot)) {
        botMove();
        chechWinner(bot, 2);
        if (chechWinner(bot)) {
          wlt(2);
        }
      }
      if (!chechWinner(person) && !chechWinner(bot) && person[1].length > 4) {
        wlt(3);
      }
    }
  });
});

function botMove() {
  let index = moves[Math.floor(Math.random() * moves.length)];
  tiles.forEach((tile) => {
    if (eval(tile.id) == index) {
      tile.innerHTML = bot[0];
    }
  });
  moves.splice(moves.indexOf(index), 1);
  bot[1].push(index);
}

function chechWinner(arr) {
  let combs = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7],
    [1, 5, 9],
    [3, 5, 7],
  ];
  if (arr[1].length > 2) {
    for (let n = 0; n < combs.length; n++) {
      let comb = combs[n];
      let cnt = 0;
      for (let m = 0; m < arr[1].length; m++) {
        let x = arr[1][m];
        if (comb.includes(x)) {
          cnt++;
        }
      }
      if (cnt == 3) {
        wcomb = comb;
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
}

function highlight() {
  tiles.forEach((tile) => {
    if (wcomb.includes(eval(tile.id))) {
      tile.classList.add("highlight");
    }
  });
}

function wlt(q = 0) {
  wndw.classList.remove("pop");
  if (q == 3) {
    h3.classList.remove("hide");
  } else {
    highlight();
    if (q == 2) {
      h2.classList.remove("hide");
    } else if (q == 1) {
      h1.classList.remove("hide");
    }
  }
}

function restart() {
  person[1] = [];
  bot[1] = [];
  moves = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  wcomb = null;
  tiles.forEach((tile) => {
    tile.classList.remove("highlight");
    tile.innerHTML = "";
  });
  wndw.classList.add("pop");
  h1.classList.add("hide");
  h2.classList.add("hide");
  h3.classList.add("hide");
}

function menu() {
  restart();
  person[0] = 0;
  bot[0] = 0;
  box.scrollTop = 0;
}
