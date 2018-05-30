import 'phaser';

import { Main } from './scenes/main';

const config = {
  width: 680,
  height: 400,
  scene: Main
};

new Phaser.Game(config);
