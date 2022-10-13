export default class Bullet {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 5;
    this.speed = 10;
    this.mark = false;
  }

  update() {
    this.x += this.speed;
    if(this.x >= this.game.width * 0.8) this.mark = true;
  }

  draw(ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}