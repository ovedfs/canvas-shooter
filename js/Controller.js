export default class Controller {
  constructor(game) {
    this.game = game;

    document.addEventListener('keydown', e => {
      if((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !this.game.keys.includes(e.key)) {
        this.game.keys.push(e.key);
      } else if(e.key === ' ') {
        this.game.player.shoot();
      }
    })

    document.addEventListener('keyup', e => {
      if(this.game.keys.includes(e.key)) {
        this.game.keys = this.game.keys.filter(key => key !== e.key);
      }
    })
  }
}