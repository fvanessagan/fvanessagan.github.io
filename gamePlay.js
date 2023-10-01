class gamePlay extends Phaser.Scene {

    constructor() {
        super("gamePlay");
    }

    preload() {
      this.random = Phaser.Math.Between(0,2);
      console.log(this.random);
    }

    create() {      
        this.note_interval = this.time.addEvent({ delay: 2000, callback: addNote, callbackScope: this, loop: true });
        this.mountain_interval = this.time.addEvent({delay: 2000, callback: addMountain, callbackScope: this, loop: true});
        this.bird_interval = this.time.addEvent({delay: 3200, callback: addBird, callbackScope: this, loop: true});
    
        this.sky1 = this.add.tileSprite(0, 0, 1000, 600, "sky1");
        this.sky1.setOrigin(0,0);
        this.sky1.setScale(1.3);

        this.sky2 = this.add.tileSprite(0, 30, 1000, 600, "sky2");
        this.sky2.setOrigin(0,0);
        this.sky2.setScale(1.1);

        this.landmarks = this.add.tileSprite(0, -10, 1000, 600, "landmarks");
        this.landmarks.setOrigin(0,0);

        this.ground = this.add.tileSprite(0, 0, 1000, 600, "ground");
        this.ground.setOrigin(0,0);
        
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xcfb17a, 1);
        this.graphics.fillRoundedRect(10, 25, 187, 55, 32);

        this.scoreNotes = this.add.image(50, 49, "scoreNotes");
        this.scoreNotes.setScale(1.8);
        this.scoreText = this.add.text(80, 32, ':0/8', { fontSize: '32px', fill: '#000', fontFamily: 'monospace', strokeThickness: '3'});

        this.boy = this.physics.add.sprite(200, 400, "boy");
        this.boy.setBounce(0.2);
        this.boy.setScale(2);
        this.boy.body.setVelocityX(0);
        this.boy.play("boy-running");

        this.jumpsound = this.sound.add("jumpsound", { loop: false });
        this.mountsound = this.sound.add("mountsound", { loop: false });

        //this.gl_note = this.sound.add("gl_note", { loop: false });
        //this.al_note = this.sound.add("al_note", { loop: false });
        this.c_note = this.sound.add("c_note", { loop: false });
        this.d_note = this.sound.add("d_note", { loop: false });
        this.e_note = this.sound.add("e_note", { loop: false });
        this.f_note = this.sound.add("f_note", { loop: false });
        this.g_note = this.sound.add("g_note", { loop: false });
        this.a_note = this.sound.add("a_note", { loop: false });
        this.b_note = this.sound.add("b_note", { loop: false });
        this.ch_note = this.sound.add("ch_note", { loop: false });

        //Objects
        this.anims.create({
          key: "boy-running", 
          frames: this.anims.generateFrameNumbers("boy"),
          frameRate: 20, 
          repeat: -1
        });

        this.anims.create({
          key: "boy_jump",
          frames: this.anims.generateFrameNumbers("boy_jump"),
          frameRate: 10,
          repeat: 0,
          hideOnComplete: true
        });

        this.anims.create({
            key: "0",
            frames: this.anims.generateFrameNumbers("note", {
              start: 0,
              end: 0
            }),
            frameRate: 10,
            repeat: -1
          });
          this.anims.create({
            key: "1",
            frames: this.anims.generateFrameNumbers("note", {
              start: 1,
              end: 1
            }),
            frameRate: 10,
            repeat: -1
          });
          this.anims.create({
            key: "2",
            frames: this.anims.generateFrameNumbers("note", {
              start: 2,
              end: 2
            }),
            frameRate: 10,
            repeat: -1
          });
          this.anims.create({
            key: "3",
            frames: this.anims.generateFrameNumbers("note", {
              start: 3,
              end: 3
            }),
            frameRate: 10,
            repeat: -1
          });
          this.anims.create({
            key: "4",
            frames: this.anims.generateFrameNumbers("note", {
              start: 4,
              end: 4
            }),
            frameRate: 10,
            repeat: -1
          });
          this.anims.create({
            key: "5",
            frames: this.anims.generateFrameNumbers("note", {
              start: 5,
              end: 5
            }),
            frameRate: 10,
            repeat: -1
          });
          this.anims.create({
            key: "6",
            frames: this.anims.generateFrameNumbers("note", {
              start: 6,
              end: 6
            }),
            frameRate: 10,
            repeat: -1
          });
          this.anims.create({
            key: "7",
            frames: this.anims.generateFrameNumbers("note", {
              start: 7,
              end: 7
            }),
            frameRate: 10,
            repeat: -1
          });
          this.anims.create({
            key: "8",
            frames: this.anims.generateFrameNumbers("note", {
              start: 8,
              end: 8
            }),
            frameRate: 10,
            repeat: -1
          });
          this.anims.create({
            key: "9",
            frames: this.anims.generateFrameNumbers("note", {
              start: 9,
              end: 9
            }),
            frameRate: 10,
            repeat: -1
          });
          this.anims.create({
            key: "10",
            frames: this.anims.generateFrameNumbers("note", {
              start: 10,
              end: 10
            }),
            frameRate: 10,
            repeat: -1
          });

          this.anims.create({
            key: "hearts_full",
            frames: this.anims.generateFrameNumbers("hearts", {
              start: 1,
              end: 1
            }),
            frameRate: 10,
            repeat: -1
          });
          this.anims.create({
            key: "hearts_broken",
            frames: this.anims.generateFrameNumbers("hearts", {
              start: 0,
              end: 0
            }),
            frameRate: 10,
            repeat: -1
          });
        
        this.note = this.physics.add.group();
        this.mountain = this.physics.add.group();
        this.hearts = this.physics.add.group();
        this.bird = this.physics.add.group();

        for (var i = 0; i < 3; i++)
        {
          var hearts = this.physics.add.sprite(32, 32, "hearts");
          this.hearts.add(hearts);

          hearts.play("hearts_full");
          hearts.setScale(3.25);

          var xpos = 820 + 60*i;
          hearts.setPosition(xpos, 35);
        }

        function addNote() {
            var note = this.physics.add.sprite(32, 32, "note");
            this.note.add(note);

            var randint = parseInt(Math.random() * 10);

            switch (randint) {
                case 0: 
                    note.play("0");
                    break;
                case 1: 
                    note.play("1");
                    break;
                case 2: 
                    note.play("2");
                    break;
                case 3: 
                    note.play("3");
                    break;
                case 4: 
                    note.play("4");
                    break;
                case 5: 
                    note.play("5");
                    break;
                case 6: 
                    note.play("6");
                    break;
                case 7: 
                    note.play("7");
                    break;
                case 8: 
                    note.play("8");
                    break;
                case 9: 
                    note.play("9");
                    break;
                case 10: 
                    note.play("10");
                    break;
            };

            note.setScale(1.8);
            note.setRandomPosition(this.game.config.width, 300, 1000, 50);
            note.setVelocity(-400,0);
        }

        function addMountain() {
          var mountain = this.physics.add.sprite(64, 64, "mountain");
          this.mountain.add(mountain);

          mountain.setScale(1);
          mountain.setRandomPosition(this.game.config.width, 400, 1000, 0);
          mountain.setVelocity(-400,0);
      }

      function addBird() {
        var bird = this.physics.add.sprite(32, 32, "bird");
        this.bird.add(bird);

        bird.setScale(2);
        bird.setRandomPosition(this.game.config.width, 150, 1000, 75);
        bird.setVelocity(-400,0);
    }

      this.spacekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      
      let health = 3;
      let note_gain = 0;

      const judul_tradsong = ["Sinanggar Tulo", "Soleram", "Suwe Ora Jamu"];
      const arti_tradsong = ["Sinanggar Tulo", "Soleram", "Suwe Ora Jamu"];
      const not_tradsong = [];
      /*Sinanggar Tulo*/ not_tradsong[0] = [3, 3, 4, 5, 5, 5, 5, 4, 3, 5, 4, 3, 3, 3, 4, 5, 5, 5, 5, 4, 3, 5, 4, 3, 3, 2, 3, 4, 4, 4, 4, 3, 2, 4, 3, 2];
      /*Soleram       */ not_tradsong[1] = [1, 2, 3, 3, 4, 5, 4, 3, 2, 4, 3, 5, 5, 6, 5, 4, 6, 5, 5, 6, 7, 11, 7, 6, 5, 4, 5, 3, 2, 1, 5, 5, 5, 6, 4, 2];
      /*Kicir-Kicir   */ not_tradsong[2] = [3, 4, 5, 5, 3, 4, 5, 3, 4, 4, 5, 3, 4, 5, 7, 7, 7, 11, 11, 7, 7, 6, 6, 4, 4, 3, 3, 11, 3, 4, 5, 5, 3, 4, 5, 3, 4, 4, 5, 3, 4];

      this.physics.add.collider(this.boy, this.mountain, function (boy, mountain) {
        health -= 1;
        console.log("health: " + health);
        playMountsound();
        breakHearts();
        mountain.destroy();

        if (health == 0)
        {
          console.log("haha u ded weee");
          youLose();
        }
      });

      this.physics.add.collider(this.boy, this.bird, function (boy, bird) {
        health -= 1;
        console.log("health: " + health);
        playMountsound();
        breakHearts();
        bird.destroy();

        if (health == 0)
        {
          console.log("haha u ded weee");
          youLose();
        }
      });

      this.physics.add.collider(this.boy, this.note, function (boy, note) {
        playNotesound();

        note_gain += 1;
        reviewScore();
        console.log("note gain: " + note_gain);
        note.destroy();

        if (note_gain == 8)
        {
          console.log("u won");
          youWin();
        }
      });

      const breakHearts = () => {
        console.log(health);
        var hearts_now = this.hearts.getChildren();

            for (var j = 0; j < (3 - health); j++)
            {
              hearts_now[j].play("hearts_broken");
            }
      }

      const youLose = () => {
            this.scene.start('ifLose'); 
      }

      const youWin = () => {
        this.scene.start('ifWin', {id: this.random}); 
      }

      const playMountsound = () => {
        this.mountsound.play(); 
      }

      const playNotesound = () => {
        var c = note_gain;
        console.log("c is " + c);
        
        switch (not_tradsong[this.random][note_gain]) {
          /*
          case 50: 
              this.gl_note.play({volume: 0.5});
              break;   
          case 60: 
              this.al_note.play({volume: 0.5});
              break;   
          */
          case 1: 
              this.c_note.play({volume: 0.5});
              break;
          case 2: 
              this.d_note.play({volume: 0.5});
              break;
          case 3: 
              this.e_note.play({volume: 0.5});
              break;
          case 4: 
              this.f_note.play({volume: 0.5});
              break;
          case 5: 
              this.g_note.play({volume: 0.5});
              break;
          case 6: 
              this.a_note.play({volume: 0.5});
              break;
          case 7: 
              this.b_note.play({volume: 0.5});
              break;     
          case 11: 
              this.ch_note.play({volume: 0.5});
              break;           
      }}

      const reviewScore = () => {
        this.scoreText.setText(':' + note_gain + '/8');
      }
    }

    update() {
      this.sky1.tilePositionX += 0;
      this.sky2.tilePositionX += 1.5;
      this.landmarks.tilePositionX += 1;
      this.ground.tilePositionX += 2;

        if (this.boy.x != 200) { this.boy.x = 200;}

        if (this.spacekey.isDown && this.boy.y == 400)
        {
            this.jump();
            
        }

        if (this.spacekey.isDown && this.boy.y > 250 && this.boy.y != 400)
        {
          this.jump();
        }

        if (this.boy.y >= 400 && this.spacekey.isUp)
        {
            this.boy.body.stop();
            this.boy.y = 400;
            this.boy.body.allowGravity = false;
        }
    }

    //Functions to Use

    jump() {

        this.boy.body.allowGravity = true;

        this.jumpsound.play();
      /*  this.boy.play("boy_jump");
        this.boy.on('animationcomplete', function(){
          this.boy.setTexture("boy");
          this.boy.play("boy-running");
        }, this);
      */
        this.boy.setVelocityY(-300);
        this.boy.setVelocityX(0);
        this.boy.setGravityY(600); 
    }
}

