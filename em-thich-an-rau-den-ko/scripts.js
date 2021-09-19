function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

(function () {
  "use strict";
  const WIDTH = 100;
  const HEIGHT = 50;

  function main() {
    const FILE_PATH = "100x50-loan.txt";
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
    let arrayCharImg = Array.from(
      stringImg.replaceAll("\r", "").replaceAll("\n", "")
    );
    let arrayBoolean = Array(arrayCharImg.length).fill(false, 0); //initial the boolean array for showing the visible of each char on canvas
    //the x position of one char

    function runMatrix() {
      if (typeof Game_Interval != "undefined") clearInterval(Game_interval);
      Game_Interval = setInterval(drawTheScreen, 10);
    }

    let random1, random2, random3, col, x;

    function drawTheScreen() {
      ctx.fillStyle = "black";
      ctx.font = "10px monospace";
      arrayCharImg.map(function (y, index) {
        random1 = getRandomInt(arrayCharImg.length);
        random2 = getRandomInt(arrayCharImg.length);
        random3 = getRandomInt(arrayCharImg.length);
        if (
          !arrayBoolean[index] &&
          (index === random1 || index === random2 || index === random3)
        ) {
          col = Math.ceil((index + 1) / WIDTH) - 1; //caculate which column of this index
          x = (index - WIDTH * col) * 6 + window.innerWidth * 0.1;
          y = col * 13 + 20;
          ctx.fillText(arrayCharImg[index], x, y);
          arrayBoolean[index] = true;
        }
      });
    }

    runMatrix();
  }

  main();
  // window.addEventListener("resize", main);
})();
