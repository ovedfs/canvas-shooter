import Controller from "./Controller.js";
import Player from "./Player.js";

export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.player = new Player(this, 50, 100);
    this.controller = new Controller(this);
    this.keys = [];
    this.ammo = 10;
  }

  update() {
    this.player.update();
  }

  draw(ctx) {
    this.player.draw(ctx);
  }
}