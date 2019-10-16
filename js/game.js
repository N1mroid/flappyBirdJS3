//view of our game
let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");


let bird = new Image();
let bg = new Image(); // Создание объекта
let fg = new Image(); // Создание объекта
let pipeUp = new Image(); // Создание объекта
let pipeBottom = new Image(); // Создание объекта

bird.src = "img/bird.png"; // Указание нужного изображения
bg.src = "img/background.png"; // Аналогично
fg.src = "img/foreground.png"; // Аналогично
pipeUp.src = "img/pipeup.png"; // Аналогично
pipeBottom.src = "img/pipebottom.png"; // Аналогично

function drawCanvas() {
  ctx.drawImage(bg, 0, 0);
}

