///<reference path="https://code.jquery.com/jquery-3.6.0.min.js"/>

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

(function () {
  // "use strict";

  const WIDTH = 100;
  const HEIGHT = 36;

  function main() {
    const FILE_PATH = "100x50-phong.txt";
    readingFile(FILE_PATH).then(function (imgString) {
      canvasApp(imgString);
    });
  }

  async function readingFile(filePath) {
    const r = await fetch(filePath);
    const t = await r.text();
    return Promise.resolve(t);
  }

  function canvasSupport(e) {
    return !!e.getContext;
  }

  function canvasApp(stringImg) {
    let myCanvas = document.getElementById("myCanvas");

    if (!canvasSupport(myCanvas)) {
      return;
    }

    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;

    let ctx = myCanvas.getContext("2d");

    function runMatrix() {
      if (typeof Game_Interval != "undefined") clearInterval(Game_interval);
      Game_Interval = setInterval(drawTheScreen, 1);
    }
    let arrayCharImg = Array.from(stringImg.replaceAll("\r", "").replaceAll("\n", ""));
    console.log(arrayCharImg);
    let arrayBoolean = Array(arrayCharImg.length).fill(false, 0); //initial the boolean array for showing the visible of each char on canvas
   //the x position of one char
    function drawTheScreen() {
      ctx.fillStyle = "#000";
      ctx.font = "10px Arial";
  
      arrayCharImg.map(function (y, index) {
        random = getRandomInt(arrayCharImg.length);
        if (!arrayBoolean[index] && index===random) {
          col = (Math.ceil((index + 1) / WIDTH) - 1);
          x = (index - WIDTH * col) * 6 + 0.1;
          y = col * 13 + 20;
         ctx.fillText(arrayCharImg[index], x, y);
         arrayBoolean[index] = true;
       }
      });
    }
    runMatrix();  
  }

  
  main();
  
})();
