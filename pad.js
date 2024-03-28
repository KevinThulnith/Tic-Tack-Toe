let pad = document.querySelector(".pad");

for (let n = 1; n < 10; n++) {
  pad.innerHTML += '<div class="tile" id="' + n + '"></div>';
}
