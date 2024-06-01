let cor;

let circuloX; // horizontal
let circuloY; // vertical

let x2;
let y2;

//x = posição horizontal
//y = posição vertical

function setup() {
  createCanvas(windowWidth - 1, windowHeight - 1); // width x height
  background("yellow");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  circuloX = [0, 0, 0, 0, 0];
  circuloY = [random(height), random(height), random(height), random(height), random(height)];

  // Chama a função para alterar a cor a cada 0,5 segundos
  setInterval(mudarCor, 500);
}

function mudarCor() {
  cor = color(random(0, 255), random(0, 255), random(0, 255));
}

function draw() {
  fill(cor);
  for (let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);
    circuloX[contador] += random(0, 3);
    circuloY[contador] += random(-3, 3);

    if (circuloX[contador] >= width) {
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }
  }
}
