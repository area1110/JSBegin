(function () {
  const hiraKataString = [
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん",
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",
  ];

  const romanArray = [
    "a",
    "i",
    "u",
    "e",
    "o",
    "ka",
    "ki",
    "ku",
    "ke",
    "ko",
    "sa",
    "shi",
    "su",
    "se",
    "so",
    "ta",
    "chi",
    "tsu",
    "te",
    "to",
    "na",
    "ni",
    "nu",
    "ne",
    "no",
    "ha",
    "hi",
    "hu",
    "he",
    "ho",
    "ma",
    "mi",
    "mu",
    "me",
    "mo",
    "ya",
    "yu",
    "yo",
    "ra",
    "ri",
    "ru",
    "re",
    "ro",
    "wa",
    "wo",
    "n",
  ];
  const display = document.getElementById("display");
  let max, numChar, textRandom;

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getString(choice) {
    max = document.getElementById("max").value;
    max = Number(max);
    if (!max) {
      textRandom = "Vui lòng nhập số vào ô dưới";
    } else {
      numChar = getRndInteger(1, max);
      textRandom =
        hiraKataString[choice][
          getRndInteger(0, hiraKataString[choice].length - 1)
        ];
      for (let i = 0; i < numChar - 1; i++) {
        textRandom +=
          hiraKataString[choice][
            getRndInteger(0, hiraKataString[choice].length - 1)
          ];
      }
    }
    display.innerHTML = textRandom;
  }

  function getRoman() {
    max = document.getElementById("max").value;
    max = Number(max);
    if (!max) {
      textRandom = "Vui lòng nhập số vào ô dưới";
    } else {
      textRandom = romanArray[getRndInteger(0, romanArray.length - 1)];
      numChar = getRndInteger(1, max);
      for (let i = 0; i < numChar - 1; i++) {
        textRandom += " " + romanArray[getRndInteger(0, romanArray.length - 1)];
      }
    }
    display.style.textTransform = "uppercase";
    display.innerHTML = textRandom;
  }

  document.getElementById("gethira").addEventListener("click", function () {
    getString(0);
  });
  document.getElementById("getkata").addEventListener("click", function () {
    getString(1);
  });
  document.getElementById("getroma").addEventListener("click", function () {
    getRoman();
  });
})();
