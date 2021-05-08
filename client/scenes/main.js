import Person from '../models/person';
import Enemy from '../models/enemy';


export class Main extends Phaser.Scene {
  preload() {
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', {
      'frameWidth': 32,
      'frameHeight': 48
    });
    this.load.image('ground', 'assets/platform.png');
    this.load.image('sky', 'assets/sky.png');
    this.load.image('star', 'assets/star.png');
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.add.image(400, 300, 'star');
    this.add.text(16, 16, 'Score: ', { fill: '#000' });

    this.createGround();

    this.player = new Person(this, 100, 450);

    this.physics.add.collider(this.player.getSprite(), this.platforms);

    this.enemies = [new Enemy(this, 300, 450), new Enemy(this, 500, 450)];

    for (const enemy of this.enemies) {
      this.physics.add.collider(enemy.getSprite(), this.platforms);
    }
  }

  createGround() {
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');
  }

  update(time, delta) {
    super.update(time, delta);

    this.player.update();

    for (const enemy of this.enemies) {
      enemy.update();
    }
  }
}
