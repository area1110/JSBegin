///<reference path="https://code.jquery.com/jquery-3.6.0.min.js"/>

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

(function () {
  // "use strict";

  const WIDTH = 100;
  const HEIGHT = 50;

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
      Game_Interval = setInterval(drawTheScreen, 30);
    }
    let arrayCharImg = Array.from(
      stringImg.replaceAll("\r", "").replaceAll("\n", "")
    );

    // function to2Dimension(array1Dim, elementsPerSubArray) {
    //   var matrix = [],
    //     i,
    //     k;

    //   for (i = 0, k = -1; i < array1Dim.length; i++) {
    //     if (i % elementsPerSubArray === 0) {
    //       k++;
    //       matrix[k] = [];
    //     }

    //     matrix[k].push(array1Dim[i]);
    //   }

    //   return matrix;
    // }

    arrayCharImg = to2Dimension(arrayCharImg, WIDTH);
    console.log(arrayCharImg);

    var yPositions = Array(WIDTH).join(0).split("");

    let arrayBoolean = Array(arrayCharImg.length).fill(false, 0); //initial the boolean array for showing the visible of each char on canvas
    //the x position of one char
    function drawTheScreen() {
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
      ctx.fillStyle = "#0f0";
      ctx.font = "10px Arial";

      yPositions.map(function (yFalling, index) {
        text = String.fromCharCode(1e2 + Math.random() * 33);
        var xFalling = index * 6;
        ctx.fillText(text, xFalling, yFalling);
        if (yFalling > 100 + Math.random() * 1e4) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = yFalling + 10;
        }

        col = Math.ceil((index + 1) / WIDTH) - 1;
        x = (index - WIDTH * col) * 6;
        y = col * 13;
        if (xFalling === x && yFalling === y) {
          ctx.fillText(arrayCharImg[index], x, y);
          arrayBoolean[index] = true;
        }
        if (arrayBoolean[index]) {
          ctx.fillText(arrayCharImg[index][yFalling], x, y);
        }
      });
    }
    runMatrix();
  }

  main();
})();
