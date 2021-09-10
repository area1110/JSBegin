const charArray = [
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん",
  "アイウウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",
];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getString(choice) {
  let numChar = getRndInteger(1, 4);
  let textRandom =
    charArray[choice][getRndInteger(choice, charArray[choice].length - 1)];
  for (let i = 0; i < numChar; i++) {
    textRandom +=
      charArray[choice][getRndInteger(choice, charArray[choice].length - 1)];
  }
  document.getElementById("display").innerHTML = textRandom;
  return 1;
}