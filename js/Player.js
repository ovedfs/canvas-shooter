import Bullet from "./Bullet.js";

export default class Player {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.maxSpeed = 5;
    this.width = 100;
    this.height = 150;
    this.bullets = [];
  }

  update() {
    if(this.game.keys.includes('ArrowUp')) this.speed = -this.maxSpeed;
    else if(this.game.keys.includes('ArrowDown')) this.speed = this.maxSpeed;
    else this.speed = 0;

    this.y += this.speed;

    // Bullets
    this.bullets.forEach(bullet => bullet.update());
    this.bullets = this.bullets.filter(bullet => !bullet.mark)
  }

  draw(ctx) {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.x, this.y, this.width, this.height);

    this.bullets.forEach(bullet => bullet.draw(ctx));
  }

  shoot() {
    if(this.game.ammo > 0) {
      this.bullets.push(new Bullet(this.game, this.x + 50, this.y + 50))
      this.game.ammo--;
    };
  }
}
