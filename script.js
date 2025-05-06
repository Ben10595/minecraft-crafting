const recipes = {
  "schwert": {
    name: "Diamantschwert",
    img: "diamond_sword.png",
    info: "2x Diamant + 1x Stock ➜ Diamantschwert"
  },
  "stufe": {
    name: "Steinstufe",
    img: "stone_slab.png",
    info: "3x Stein ➜ 6x Steinstufen"
  }
};

const input = document.getElementById("search");
const result = document.getElementById("result");

input.addEventListener("input", () => {
  const val = input.value.toLowerCase();
  const recipe = recipes[val];
  if (recipe) {
    result.innerHTML = `
      <h2>${recipe.name}</h2>
      <p>${recipe.info}</p>
      <img src="${recipe.img}" alt="${recipe.name}" style="width: 150px; margin-top: 10px;" />
    `;
  } else {
    result.innerHTML = "<p>Kein Rezept gefunden 😕</p>";
  }
});
