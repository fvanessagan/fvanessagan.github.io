window.onload = function() {
    var config = {
        width: 1000,
        height: 600,
        backgroundColor: 0x000000,
        scene: [Start, gamePlay, ifWin, ifLose],
        pixelArt: true,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        physics: {
            default: "arcade", 
            arcade:{
                debug: false
            }
        }
    }

    var game = new Phaser.Game(config);
}