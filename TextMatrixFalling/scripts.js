window.addEventListener('load', eventWindowLoaded, false);
window.addEventListener('resize', canvasApp);

function eventWindowLoaded () {
  canvasApp();
}

function canvasSupport (e) {
    return !!e.getContext;
}
function canvasApp () {
  var canvas = document.getElementById('myCanvas');

  if (!canvasSupport(canvas)) {
    return; 
  }
  
  var ctx = canvas.getContext('2d');
  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;

  var yPositions = Array(300).join(0).split('');
  
  function runMatrix() {
    if (typeof Game_Interval != 'undefined') clearInterval(Game_interval);
    Game_Interval = setInterval(drawScreen, 30);
  }

  function drawScreen () {
    ctx.fillStyle = 'rgba(0,0,0,.05)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = '#0f0';
    ctx.font = '17px Arial';
    yPositions.map(function(y, index){
      text = String.fromCharCode(1e2 + Math.random() * 33);
      x = (index * 10) + 10;
      ctx.fillText(text, x, y);
      if (y > 100 + Math.random() * 1e4) {
        yPositions[index] = 0;
      } else {
        yPositions[index] = y + 10;
      }
    })
  }
  
  runMatrix();
}