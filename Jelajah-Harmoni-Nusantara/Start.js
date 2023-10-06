class Start extends Phaser.Scene {

    spacekey;

    constructor() {
        super("Start");
    }

    preload() { //Load all of the elements needed!
        
        //Load Backdrop
            this.load.image("sky1", "img/bg/sky1.png");             //Sky
            this.load.image("sky2", "img/bg/sky2.png");             //Sky
            this.load.image("ground", "img/bg/ground.png");         //Ground
            this.load.image("landmarks", "img/bg/landmarks.png");   //Landmarks
            this.load.image("endlose", "img/obj/endlose.png");      //EndLose
            this.load.image("endwin", "img/obj/endwin.png");        //EndWin

            this.load.spritesheet("again", "img/obj/again.png", {frameWidth: 1000, frameHeight: 1000});
            this.load.image("by_rindang", "img/obj/by_rindang.png");

            this.load.image("cry", "img/obj/cry.png");
            this.load.image("textlose", "img/obj/textlose.png");

            this.load.image("textwin", "img/obj/textwin.png");
            this.load.image("titlewin", "img/obj/titlewin.png");

            this.load.image("title", "img/obj/title.png");
            this.load.spritesheet("spasi", "img/obj/spasi.png", {frameWidth: 3402, frameHeight: 3402});

            this.load.spritesheet("mountain", "img/obj/mountain.png", {frameWidth: 64, frameHeight: 64});
            this.load.spritesheet("bird", "img/obj/bird.png", {frameWidth: 32, frameHeight: 32});
            this.load.spritesheet("note", "img/obj/note.png", {frameWidth: 32, frameHeight: 32}); 
            this.load.spritesheet("boy_jump", "img/sprite/boy_jump.png", {frameWidth: 64, frameHeight: 64}); 
            this.load.spritesheet("hearts", "img/obj/hearts.png", {frameWidth: 32, frameHeight: 32});
            this.load.image("scoreNotes", "img/obj/scoreNotes.png"/*, {frameWidth: 32, frameHeight: 32}*/);
        
            this.load.audio("sinanggar_tulo", ["img/sound/tradsong/sinanggar_tulo.mp3"]);
            this.load.audio("soleram", ["img/sound/tradsong/soleram.m4a"]);
            this.load.audio("suwe_ora_jamu", ["img/sound/tradsong/suwe_ora_jamu.m4a"]);

            this.load.audio("jumpsound", ["img/sound/sfx/jump.mp3"]);
            this.load.audio("mountsound", ["img/sound/sfx/mountsound.mp3"]);
            //this.load.audio("gl_note", ["img/sound/sfx/gl_note.wav"]);
            //this.load.audio("al_note", ["img/sound/sfx/al_note.wav"]);
            this.load.audio("c_note", ["img/sound/sfx/c_note.wav"]);
            this.load.audio("d_note", ["img/sound/sfx/d_note.wav"]);
            this.load.audio("e_note", ["img/sound/sfx/e_note.wav"]);
            this.load.audio("f_note", ["img/sound/sfx/f_note.wav"]);
            this.load.audio("g_note", ["img/sound/sfx/g_note.wav"]);
            this.load.audio("a_note", ["img/sound/sfx/a_note.wav"]);
            this.load.audio("b_note", ["img/sound/sfx/b_note.wav"]);
            this.load.audio("ch_note", ["img/sound/sfx/ch_note.wav"]);

            this.load.image("ending", "img/bg/ending.jpg");
        /*
            

        //Load Sprite Boy
            this.load.spritesheet("boy", "img/sprite/boy.png", {frameWidth: 32, frameHeight: 32}); 

        //Load In-Game Objects
            this.load.spritesheet("note", "img/obj/notes", {frameWidth: 16, frameHeight: 16});  //Notes
            this.load.image("mountains", "img/obj/mount.png");                                  //Mountains
            this.load.image("heart", "img/obj/heart.png");                                      //Heart
            //Note-bar
        */

        this.load.spritesheet("boy", "img/sprite/boy.png", {frameWidth: 32, frameHeight: 32}); 
    }

    create() {
        //this.pointer = this.input.activePointer;
        
        this.sky1 = this.add.image(0, 0, "sky1");
        this.sky1.setOrigin(0,0);
        this.sky1.setScale(1.3);

        this.sky2 = this.add.image(0, 30, "sky2");
        this.sky2.setOrigin(0,0);
        this.sky2.setScale(1.1);

        this.landmarks = this.add.image(0, -10, "landmarks");
        this.landmarks.setOrigin(0,0);

        this.ground = this.add.image(0, 0, "ground");
        this.ground.setOrigin(0,0);

        this.title = this.add.image(80, -200, "title");
        this.title.setScale(0.25);
        this.title.setOrigin(0,0);

        this.spasi = this.physics.add.sprite(-15, 50, "spasi").setInteractive();
        this.spasi.setScale(0.3);
        this.spasi.setOrigin(0,0);

        this.boy = this.add.sprite(205, 400, "boy");
        this.boy.setScale(2);
        
        this.anims.create({
            key: "boy-running", 
            frames: this.anims.generateFrameNumbers("boy"),
            frameRate: 20, 
            repeat: -1
        });
 
        this.spacekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        const moveToGameplay = () => {
            this.boy.play("boy-running");
            this.scene.start("gamePlay");
      }

        this.spasi.on('pointerdown', function (pointer)
        {
            moveToGameplay();
        });
        
    }

    update() {
        if (this.spacekey.isDown)
        {
            console.log("space");
            this.boy.play("boy-running");
            this.scene.start("gamePlay");
        }
    }
}

