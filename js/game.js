//view of our game
let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

//images creation
let bird = new Image();
let bg = new Image(); // Создание объекта
let fg = new Image(); // Создание объекта
let pipeUp = new Image(); // Создание объекта
let pipeBottom = new Image(); // Создание объекта

//images upload
bird.src = "./img/bird.png"; // Указание нужного изображения
bg.src = "./img/background.png"; // Аналогично
fg.src = "./img/foreground.png"; // Аналогично
pipeUp.src = "./img/pipeup.png"; // Аналогично
pipeBottom.src = "./img/pipebottom.png"; // Аналогично

let gap = 150;

//While pressing any button
document.addEventListener('keydown', moveUp);

function moveUp() {
  yPosition -=20;
}

//blockbuidling
let pipe = [];
pipe[0] = {
  x: cvs.width,
  y: 0
};

let score = 0;
//bird position
let xPosition = 10;
let yPosition = 150;
let gravitation = 1.5;

//draw all images in canvas
function drawCanvas() {
  ctx.drawImage(bg, 0, 0);

  for (let i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

    pipe[i].x--;

    if (pipe[i].x === 125) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
      });
    }


    //if the bird crashes into blocks
    if (xPosition + bird.width >= pipe[i].x
      && xPosition <= pipe[i].x + pipeUp.width
      && (yPosition <= pipe[i].y + pipeUp.height
        || yPosition + bird.height >= pipe[i].y + pipeUp.height + gap)
         || yPosition + bird.height >= cvs.height - fg.height)
    {
      location.reload();
    }

    if(pipe[i].x === 5) {
      score++;
    }
  }
  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(bird, xPosition, yPosition);

  yPosition += gravitation;

  ctx.fillStyle = '#000';
  ctx.font = '24px Verdana';
  ctx.fillText('Счет: ' + score, 10, cvs.height - 20);

  requestAnimationFrame(drawCanvas);
}

  pipeBottom.onload = drawCanvas;

