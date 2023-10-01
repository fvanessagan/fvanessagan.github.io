class ifLose extends Phaser.Scene {
    constructor() {
        super("ifLose");
    }

    preload() {
        
        
    }

    create() {
        this.sky1 = this.add.tileSprite(0, 0, 1000, 600, "sky1");
        this.sky1.setOrigin(0,0);
        this.sky1.setScale(1.3);

        this.sky2 = this.add.tileSprite(0, 30, 1000, 600, "sky2");
        this.sky2.setOrigin(0,0);
        this.sky2.setScale(1.1);

        //this.landmarks = this.add.tileSprite(0, -10, 1000, 600, "landmarks");
        //this.landmarks.setOrigin(0,0);

        this.ground = this.add.tileSprite(0, 0, 1000, 600, "ground");
        this.ground.setOrigin(0,0);

        this.endlose = this.add.tileSprite(20, 25, 1920, 1080, "endlose");
        this.endlose.setScale(0.5);
        this.endlose.setOrigin(0,0);

        this.byrindang = this.add.tileSprite(205, 315, 1000, 1000, "by_rindang");
        this.byrindang.setScale(0.3);
        this.byrindang.setOrigin(0,0);

        this.cry = this.add.tileSprite(190, 100, 1000, 1000, "cry");
        this.cry.setScale(0.4);
        this.cry.setOrigin(0,0);

        this.textlose = this.add.tileSprite(400, 0, 1000, 1000, "textlose");
        this.textlose.setScale(0.4);
        this.textlose.setOrigin(0,0);

        this.again = this.physics.add.sprite(570, 280, "again").setInteractive();
        this.again.setScale(0.28);
        this.again.setOrigin(0,0);

        this.again.on('pointerdown', function (pointer)
        {
            console.log("click detected");
            restart();

        });

        const restart = () => {
            this.scene.start("Start"); 
          }
    }

    update() {


    }

    //Functions to Use
}

