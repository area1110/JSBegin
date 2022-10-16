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
  const display = document.getElementById("content");
  let max, numChar, textRandom;

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getString(choice) {
    min = document.getElementById("min").value;
    max = document.getElementById("max").value;
    max = Number(max);
    min = Number(min);
    if (!min) {
      textRandom = "Vui lòng nhập số vào ô dưới";
    } else if (!max) {
      textRandom = "Vui lòng nhập số vào ô dưới";
    } else {
      numChar = getRndInteger(min, max);
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
    min = document.getElementById("min").value;
    max = document.getElementById("max").value;
    max = Number(max);
    min = Number(min);
    if (!min) {
      textRandom = "Vui lòng nhập số vào ô dưới";
    } else if (!max) {
      textRandom = "Vui lòng nhập số vào ô dưới";
    } else {
      textRandom = romanArray[getRndInteger(0, romanArray.length - 1)];
      numChar = getRndInteger(min, max);
      for (let i = 0; i < numChar - 1; i++) {
        textRandom += " " + romanArray[getRndInteger(0, romanArray.length - 1)];
      }
    }
    // display.style.textTransform = "uppercase";
    display.innerHTML = textRandom;
  }

  var btnCopy = document.getElementById("copy");

  // Auto copy result after generate text successful
  document.getElementById("gethira").addEventListener("click", function () {
    getString(0);
    copyTextToClipboard(textRandom);
  });
  document.getElementById("getkata").addEventListener("click", function () {
    getString(1);
    copyTextToClipboard(textRandom);
  });
  document.getElementById("getroma").addEventListener("click", function () {
    getRoman();
    copyTextToClipboard(textRandom);
  });

  btnCopy.addEventListener("click", function () {
    copyTextToClipboard(textRandom);
  });
})();

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}
