let pad = document.querySelector(".pad");

for (let n = 1; n < 10; n++) {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.id = n;
  pad.appendChild(tile);
}
