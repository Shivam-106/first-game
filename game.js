// Create our only scene called mainScene
class mainScene {

    preload() {
      // This method is called once at the beginning
      // It will load all the assets, like sprites and sounds
      // Step 1, load the sprite
      // Parameters: name of the sprite, path of the image
      this.load.image('player', 'assets/player.png');
      // load the image of the coin
      this.load.image('coin', 'assets/coin.png');
    }
    create() {
      // This method is called once, just after preload()
      // It will initialize our scene, like the positions of the sprites
      // Step 2, display the sprite on the screen
      // Parameters: x position, y position, name of the sprite
      this.player = this.physics.add.sprite(100, 100, 'player');
      // display the coin on the screen
      this.coin = this.physics.add.sprite(300, 300, 'coin');
    }
    update() {
      // This method is called 60 times per second after create() 
      // It will handle all the game's logic, like movements
    }
  }
  new Phaser.Game({
    width: 700, // Width of the game in pixels
    height: 400, // Height of the game in pixels
    backgroundColor: '#3498db', // The background color (blue)
    scene: mainScene, // The name of the scene we created
    physics: { default: 'arcade' }, // The physics engine to use
    parent: 'game', // Create the game inside the <div id="game"> 
  });