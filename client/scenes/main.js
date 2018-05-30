export class Main extends Phaser.Scene {
  preload() {
    this.load.image('contra', 'assets/contra.png');
  }

  create() {
    this.add.text(340, 100, 'Hello world!', { fill: '#0f0' });
    this.add.image(200, 200, 'contra');
  }
}
