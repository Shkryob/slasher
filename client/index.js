import 'phaser';

import { Main } from './scenes/main';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: Main,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300
      },
      debug: true
    }
  }
};

new Phaser.Game(config);
