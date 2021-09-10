(function () {
  "use strict";
  const hiraChar = ["あ", "い", "う", "え", "お"];

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  document
    .getElementsByTagName("button")[0]
    .addEventListener("click", getString());

  function getString() {
    // event.preventDefault();
    alert("test");
    let numChar = getRndInteger(0, 4);
    let textRandom;
    for (let i = 0; i < numChar; i++) {
      textRandom += hiraChar[getRndInteger(0, hiraChar.length - 1)];
    }
    document.getElementById("displayHira").innerHTML = textRandom;
  }

  
})();
