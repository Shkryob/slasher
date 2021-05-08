export default class Person {
  constructor(scene, x, y) {
    this.sprite = scene.physics.add.sprite(x, y, 'dude');
    this.sprite.setBounce(0.2);
    this.sprite.setCollideWorldBounds(true);

    this.scene = scene;
    this.createAnimations()

    this.health = 100;
    this.damage = 10;
    this.meleeDamageDistance = 50;
    this.soules = 0;
    this.coins = 0;
  }

  createAnimations() {
    this.scene.anims.create({
      key: 'left',
      frames: this.scene.anims.generateFrameNumbers('dude', {'start': 0, 'end': 3}),
      frameRate: 10,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 20,
    });

    this.scene.anims.create({
      key: 'right',
      frames: this.scene.anims.generateFrameNumbers('dude', {'start': 5, 'end': 8}),
      frameRate: 10,
      repeat: -1
    });

    this.sprite.anims.play('turn');
  }

  update() {
    console.log('update');
    const cursors = this.scene.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
      this.sprite.setVelocityX(-160);
      this.sprite.anims.play('left', true);
    } else if (cursors.right.isDown) {
      this.sprite.setVelocityX(160);
      this.sprite.anims.play('right', true);
    } else {
      this.sprite.setVelocityX(0);
      this.sprite.anims.play('turn');
    }

    if (cursors.up.isDown && this.sprite.body.touching.down) {
      this.sprite.setVelocityY(-330);
    }
  }

  getSprite() {
    return this.sprite;
  }
}
