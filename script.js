const craftingData = {
  schwert: {
    name: "Diamond Sword",
    grid: [
      ["", "diamond.png", ""],
      ["", "diamond.png", ""],
      ["", "stick.png", ""],
    ],
    result: "diamond_sword.png",
  },
  stufe: {
    name: "Stone Slab",
    grid: [
      ["", "", ""],
      ["", "", ""],
      ["stone.png", "stone.png", "stone.png"],
    ],
    result: "stone_slab.png",
  },
};

function renderCrafting(item) {
  const gridHTML = item.grid.map(row =>
    row.map(cell =>
      `<div class="cell">${cell ? `<img src="${cell}">` : ""}</div>`
    ).join("")
  ).join("");

  return `
    <h2>${item.name}</h2>
    <div class="crafting-container">
      <div class="grid">${gridHTML}</div>
      <div class="arrow">➜</div>
      <div class="result-box"><img src="${item.result}" /></div>
    </div>
  `;
}

document.getElementById("search").addEventListener("input", function () {
  const input = this.value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (craftingData[input]) {
    resultDiv.innerHTML = renderCrafting(craftingData[input]);
  } else if (input === "") {
    resultDiv.innerHTML = "";
  } else {
    resultDiv.innerHTML = "❌ Kein Rezept gefunden";
  }
});
