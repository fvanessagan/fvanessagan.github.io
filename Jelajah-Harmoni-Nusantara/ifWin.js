class ifWin extends Phaser.Scene {
    constructor() {
        super("ifWin");
    }

    init (data)
    {
        console.log('init', data);

        this.tradsong = data.id;
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

        this.ground = this.add.tileSprite(0, 0, 1000, 600, "ground");
        this.ground.setOrigin(0,0);

        this.endwin = this.add.tileSprite(20, 25, 1920, 1080, "endwin");
        this.endwin.setScale(0.5);
        this.endwin.setOrigin(0,0);

        this.textwin = this.add.tileSprite(215, 40, 1000, 1000, "textwin");
        this.textwin.setScale(0.57);
        this.textwin.setOrigin(0,0);

        if (this.tradsong == 0)
        {
            this.key = "sinanggar_tulo";
            this.lagudaerah = this.sound.add("sinanggar_tulo", { loop: true });
            this.judul = "Sinanggar Tulo";
            this.penjelasan = "Lagu yang berasal dari Sumatera Utara ini mempunyai \nmakna dan bercerita tentang orang tua yang sedang \nmenasehati anaknya yang sedang kebingungan \nmencari jodohnya.";
        }
        else if (this.tradsong == 1)
        {
            this.key = "soleram";
            this.lagudaerah = this.sound.add("soleram", { loop: true });
            this.judul = "Soleram";
            this.penjelasan = "Soleram merupakan lagu daerah yang berasal dari Riau \ndan memiliki makna sebuah nasihat terkait \nadat istiadat dan agama agar selalu \ndijaga dengan baik selamanya.";
        }
        else if (this.tradsong == 2)
        {
            this.key = "suwe_ora_jamu";
            this.lagudaerah = this.sound.add("suwe_ora_jamu", { loop: true });
            this.judul = "Suwe Ora Jamu";
            this.penjelasan = "Lagu yang berasal dari Daerah Istimewa Yogyakarta \n(DIY) ini memiliki makna tentang pertemuan yang \nterjadi setelah lama tidak berjumpa namun \nmenggunakan metafora yang apik.";
        }
        else
        {
            this.key = "sinanggar_tulo";
            this.lagudaerah = this.sound.add("sinanggar_tulo", { loop: true });
            this.judul = "Sinanggar Tulo";
            this.penjelasan = "Lagu yang berasal dari Sumatera Utara ini mempunyai \nmakna dan bercerita tentang orang tua yang sedang \nmenasehati anaknya yang sedang kebingungan \nmencari jodohnya.";
        }

        this.lagudaerah.play();
        this.add.text(480, 180, this.judul, {fontFamily: "cursive", fontSize: "40px", fill: "brown"});
        this.add.text(230, 250, this.penjelasan, {fontFamily: "cursive", fontSize: "20px", fill: "black"});

        /*
        this.titlewin = this.add.tileSprite(387, -5, 1000, 1000, "titlewin");
        this.titlewin.setScale(0.45);
        this.titlewin.setOrigin(0,0);
        */

        this.byrindang = this.add.tileSprite(205, 315, 1000, 1000, "by_rindang");
        this.byrindang.setScale(0.3);
        this.byrindang.setOrigin(0,0);

        this.again = this.physics.add.sprite(570, 280, "again").setInteractive();
        this.again.setScale(0.28);
        this.again.setOrigin(0,0);

        this.again.on('pointerdown', function (pointer)
        {
            console.log("click detected");
            restart();

        });

        const restart = () => {
            this.sound.stopByKey(this.key);
            this.scene.start("Start"); 
          }
    }

    update() {

    }

    //Functions to Use
}

