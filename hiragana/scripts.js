(function () {
  const hiraKataString = [
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん",
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",
  ];

  const romanArray = ["a", "i", "", "", ""];

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
          getRndInteger(choice, hiraKataString[choice].length - 1)
        ];
      for (let i = 0; i < numChar - 1; i++) {
        textRandom +=
          hiraKataString[choice][
            getRndInteger(choice, hiraKataString[choice].length - 1)
          ];
      }
    }
    document.getElementById("display").innerHTML = textRandom;
  }

  document.getElementById("gethira").addEventListener("click", function () {
    getString(0);
  });
  document.getElementById("getkata").addEventListener("click", function () {
    getString(1);
  });
  document.getElementById("getroma").addEventListener("click", function () {
    getString(0);
  });
})();
