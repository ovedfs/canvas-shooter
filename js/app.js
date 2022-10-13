import Game from "./Game.js";

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const game = new Game(canvas.width, canvas.height);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.update();
  game.draw(ctx);

  requestAnimationFrame(animate);
}

animate();