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

function renderGrid(grid, resultImg) {
  let html = '<div class="crafting">';
  grid.forEach(row => {
    html += '<div class="row">';
    row.forEach(cell => {
      if (cell) {
        html += `<div class="cell"><img src="${cell}" alt=""></div>`;
      } else {
        html += `<div class="cell"></div>`;
      }
    });
    html += '</div>';
  });
  html += '</div><div class="arrow">➜</div>';
  html += `<div class="result"><img src="${resultImg}" alt="Ergebnis" /></div>`;
  return html;
}

document.getElementById("search").addEventListener("input", function () {
  const input = this.value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (craftingData[input]) {
    const item = craftingData[input];
    resultDiv.innerHTML = `
      <h2>${item.name}</h2>
      ${renderGrid(item.grid, item.result)}
    `;
  } else if (input === "") {
    resultDiv.innerHTML = "";
  } else {
    resultDiv.innerHTML = "❌ Kein Rezept gefunden";
  }
});
