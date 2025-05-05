const recipes = {
  "steintreppe": {
    name: "Steintreppe",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5c/Stone_Stairs_JE2_BE2.png",
    info: "6x Stein ➜ 4x Steintreppe"
  },
  "holzstufe": {
    name: "Holzstufe",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Oak_Slab_JE3_BE3.png",
    info: "3x Holzplanken ➜ 6x Stufe"
  }
};

const input = document.getElementById("search");
const result = document.getElementById("result");

input.addEventListener("input", () => {
  const val = input.value.toLowerCase();
  const recipe = recipes[val];
  if (recipe) {
    result.innerHTML = \`
      <h2>\${recipe.name}</h2>
      <p>\${recipe.info}</p>
      <img src="\${recipe.img}" alt="\${recipe.name}" />
    \`;
  } else {
    result.innerHTML = "<p>Kein Rezept gefunden 😕</p>";
  }
});
