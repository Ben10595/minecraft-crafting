const craftingData = {
  schwert: {
    text: "2x Diamant + 1x Stock ➜ Diamantschwert",
    bild: "diamond_sword.png",
  },
  stufe: {
    text: "3x Stein ➜ 6x Steinstufen",
    bild: "stone_slab.png",
  },
};

document.getElementById("search").addEventListener("input", function () {
  const input = this.value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (craftingData[input]) {
    const item = craftingData[input];
    resultDiv.innerHTML = `<p>${item.text}</p><img src="${item.bild}" alt="${input}" />`;
  } else if (input === "") {
    resultDiv.innerHTML = "";
  } else {
    resultDiv.innerHTML = "Kein Rezept gefunden 😢";
  }
});
