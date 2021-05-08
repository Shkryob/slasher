import Person from './person';

export default class Enemy extends Person {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.sprite.tint = '0xff00ff';


    this.health = 20;
    this.damage = 10;
  }

  update() {

  }
}