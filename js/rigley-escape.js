const gameState = {
  active: true
};
//Hoisted Variables
var Skin;
var UI;
var Player2;
var shadow;
var rainbow;
var custom;
var Info;
var i = 0;
var title;
var click;
var ladyBug;
var ladyBug2;
var emitter;
var platforms;
var codey;
var codey2;
var left;
var right;
var codeyZ;
var sound;
var infoExit;
var graphics;
var playerX = 500;
var muted = 0;
var start;
var gameOptions = {
  // local storage object name
  localStorageName: "bestFlappyScore",
  Skin: "0",
  UI: 5
};

//Starting Window
class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

  preload() {
    this.load.spritesheet("matrix", "https://i.imgur.com/Pp4QtuU.png?1", {
      frameWidth: 30,
      frameHeight: 62
    });
    this.load.image("coder", "https://i.imgur.com/7Io6Fyk.png?1");
    this.load.image("left", "https://i.imgur.com/utiFXDB.png?1");
    this.load.image("right", "https://i.imgur.com/pB7uJeo.png?1");

    this.load.audio(
      "castle",
      "https://dl.dropboxusercontent.com/s/8wqiwvfrkag5mym/Castlevania%20Symphony%20of%20the%20Night%20OST%20Dracula%27s%20Castle.mp3?dl=0"
    );

    this.load.image("soundButton", "https://i.imgur.com/XAMl8p5.png?1");

    this.load.audio(
      "click",
      "https://dl.dropboxusercontent.com/s/v4pf0m4zpaeh5vh/completetask_0.mp3?dl=0"
    );

    this.load.spritesheet("rigleyUI", "https://i.imgur.com/RKr1adC.png?1", {
      frameWidth: 200,
      frameHeight: 200
    });
    this.load.spritesheet("rigley", "https://i.imgur.com/enFv9zJ.png?1", {
      frameWidth: 40,
      frameHeight: 24
    });

    this.load.spritesheet("rigleyBlue", "https://i.imgur.com/i17PzW5.png?1", {
      frameWidth: 40,
      frameHeight: 24
    });

    this.load.spritesheet("rigleyBlue2", "https://i.imgur.com/hJUQFjj.png?1", {
      frameWidth: 40,
      frameHeight: 24
    });

    this.load.spritesheet("rigleyGreen", "https://i.imgur.com/f6HsJJ9.png?1", {
      frameWidth: 40,
      frameHeight: 24
    });

    this.load.spritesheet("rigleyWhite", "https://i.imgur.com/W27LwSD.png?1", {
      frameWidth: 40,
      frameHeight: 24
    });

    this.load.spritesheet("rigleyBlack", "https://i.imgur.com/qp5ehgP.png?1", {
      frameWidth: 40,
      frameHeight: 24
    });

    this.load.spritesheet("rigleyPurple", "https://i.imgur.com/LreChU3.png?1", {
      frameWidth: 40,
      frameHeight: 24
    });

    this.load.spritesheet("rigleyPink", "https://i.imgur.com/gURgDaj.png?1", {
      frameWidth: 40,
      frameHeight: 24
    });

    this.load.spritesheet("rigleyOrange", "https://i.imgur.com/dfr22Rs.png?1", {
      frameWidth: 40,
      frameHeight: 24
    });

    this.load.spritesheet("rigleyYellow", "https://i.imgur.com/1fJjbIe.png?1", {
      frameWidth: 40,
      frameHeight: 24
    });

    this.load.image("buttom", "https://i.imgur.com/ttQGxtj.png?1");
  }

  create() {
    //Activates keyboard inputs
    gameState.cursors = this.input.keyboard.createCursorKeys();
    //Primes the rainbow effect
    rainbow = Phaser.Display.Color.HSVColorWheel();
    //Adds The Center Rigley
    gameState.player = this.add
      .sprite(500, 220, "rigley")
      .setDepth(3)
      .setScale(2)
      .setOrigin(0.5);

    //Rigleys rainbow shadow
    shadow = this.add
      .sprite(502, 223, "rigley")
      .setDepth(2)
      .setScale(2)
      .setOrigin(0.5);

    //Changes Rigleys Direction every 4 seconds
    let flipRigley = () => {
      shadow.toggleFlipX();
      gameState.player.toggleFlipX();
    };

    setInterval(() => {
      flipRigley();
    }, 4000);

    //Loads PLayer Skin
    Skin =
      JSON.parse(sessionStorage.getItem(gameOptions.Skin)) == null
        ? 0
        : JSON.parse(sessionStorage.getItem(gameOptions.Skin));

    // Loads UI colors
    UI =
      JSON.parse(sessionStorage.getItem(gameOptions.UI)) == null
        ? 0
        : JSON.parse(sessionStorage.getItem(gameOptions.UI));

    //Sets Rigley Skins
    switch (Skin) {
      case 1:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyOrange", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        shadow.setTexture("rigleyOrange");
        gameState.player.setTexture("rigleyOrange");
        break;
      case 2:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyYellow", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        shadow.setTexture("rigleyYellow");
        gameState.player.setTexture("rigleyYellow");
        break;
      case 3:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyGreen", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        shadow.setTexture("rigleyGreen");
        gameState.player.setTexture("rigleyGreen");
        break;
      case 4:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyBlue2", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        shadow.setTexture("rigleyBlue2");
        gameState.player.setTexture("rigleyBlue2");
        break;
      case 5:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyBlue", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        shadow.setTexture("rigleyBlue");
        gameState.player.setTexture("rigleyBlue");
        break;
      case 6:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyPurple", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        shadow.setTexture("rigleyPurple");
        gameState.player.setTexture("rigleyPurple");
        break;
      case 7:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyPink", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });

        shadow.setTexture("rigleyPink");
        gameState.player.setTexture("rigleyPink");
      case 8:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyWhite", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        shadow.setTexture("rigleyWhite");
        gameState.player.setTexture("rigleyWhite");
        break;
      case 9:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyBlack", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        shadow.setTexture("rigleyBlack");
        gameState.player.setTexture("rigleyBlack");
        break;
      case 10:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyWhite", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        shadow.setTexture("rigleyWhite");
        gameState.player.setAlpha(0);
        break;
      default:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigley", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
    }

    //Makes Rigley run
    shadow.anims.play("run", true);
    gameState.player.anims.play("run", true);

    //Adds Coders on each Side
    codey = this.add
      .image(605, 223, "coder")
      .setDepth(2)
      .setScale(0.3)
      .setOrigin(0.5);

    codey2 = this.add
      .image(395, 223, "coder")
      .setDepth(2)
      .setScale(0.3)
      .setOrigin(0.5);

    //Customization Button
    this.add
      .sprite(425, 400, "rigleyUI")
      .setFrame(6)
      .setScale(0.25)
      .setTint(0x000000);
    custom = this.add
      .sprite(425, 400, "rigleyUI")
      .setFrame(6)
      .setDepth(1)
      .setScale(0.25)
      .setInteractive()
      .on("pointerdown", () => {
        var coin = this.sound.add("click");
        if (muted === 1) {
          coin.setMute(true);
        }
        coin.play();
        //Explosion Effect and Objects Disappearing
        sound.destroy();
        sound2.destroy();
        custom.destroy();
        Info.destroy();
        title.destroy();
        start.destroy();
        click.destroy();
        codey.destroy();
        codey2.destroy();
        ladyBug.setAlpha(0);
        ladyBug2.setAlpha(0);
        gameState.particles1 = this.add.particles("matrix").setDepth(5);
        //Making the Explosions
        gameState.emitter1 = gameState.particles1.createEmitter({
          frame: [0, 1, 2, 3, 4, 5, 6, 7],
          x: { min: -200, max: 200 },
          y: { min: -200, max: 200 },
          lifespan: 1000,
          speedX: { min: -800, max: 800 },
          speedY: { min: -800, max: 800 },
          scale: { start: 2, end: 0 },
          quantity: 20,
          blendMode: "ADD",
          fill: 0xff0000
        });
        //Placing the Explosions
        gameState.emitter1.explode(70, 500, 400);
        gameState.emitter1.explode(70, 300, 250);
        gameState.emitter1.explode(70, 700, 250);
        gameState.emitter1.explode(70, 500, 100);
        //Placing Custom Menu
        var Menu = this.add
          .image(500, 250, "buttom")
          .setOrigin(0.5)
          .setTint(0x05a1b5)
          .setScale(2.25, 2.4);

        //Color of UI Menu
        switch (UI) {
          case 0:
            Menu.setTint(0xff0000);
            break;
          case 1:
            Menu.setTint(0xfc6f03);
            break;
          case 2:
            Menu.setTint(0xfcf803);
            break;
          case 3:
            Menu.setTint(0x00ff00);
            break;
          case 4:
            Menu.setTint(0x03fcf4);
            break;
          case 5:
            Menu.setTint(0x0000ff);
            break;
          case 6:
            Menu.setTint(0x9900ff);
            break;
          case 7:
            Menu.setTint(0xff00dd);
            break;
          case 8:
            Menu.setTint(0xffffff);
        }

        //Placing Rigley Customize Text
        title = this.add
          .text(220, 100, `Customize Rigley`, {
            fontSize: "30px",
            fill: "#000000"
          })
          .setDepth(3)
          .setStroke("#fff", 4)
          .setShadow(1, 1, "#333333", 1, true, true)
          .setOrigin(0.5);

        //Placing Customize UI Text
        click = this.add
          .text(780, 100, `Customize UI`, {
            fontSize: "30px",
            fill: "#000000"
          })
          .setDepth(3)
          .setStroke("#fff", 4)
          .setShadow(1, 1, "#333333", 1, true, true)
          .setOrigin(0.5);

        //Rigley Boxes Functionality
        var toggleBoxes = () => {
          [B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, custom].forEach((x) =>
            x.setFrame(0)
          );
        };

        //UI Boxes Functionality
        var toggleUBoxes = () => {
          [U1, U2, U3, U4, U5, U6, U7, U8, U9].forEach((x) => x.setFrame(0));
        };

        //Customize Rigley Color Boxes
        var B1 = this.add
          .sprite(175, 150, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0xff0000)
          .setInteractive()
          .on("pointerdown", () => {
            toggleBoxes();
            B1.setFrame(1);
            gameState.player.setAlpha(1);
            gameState.player.anims.stop();
            shadow.anims.stop();
            gameState.player.setTexture("rigley");

            //Saves Skin

            sessionStorage.setItem(gameOptions.Skin, JSON.stringify(0));
          });
        var B2 = this.add
          .sprite(225, 150, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0xfc6f03)
          .setInteractive()
          .on("pointerdown", () => {
            toggleBoxes();
            B2.setFrame(1);
            gameState.player.setAlpha(1);
            gameState.player.anims.stop();
            shadow.anims.stop();
            gameState.player.setTexture("rigleyOrange");

            //Saves Skin
            sessionStorage.setItem(gameOptions.Skin, JSON.stringify(1));
          });
        var B3 = this.add
          .sprite(275, 150, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0xfcf803)
          .setInteractive()
          .on("pointerdown", () => {
            toggleBoxes();
            B3.setFrame(1);
            gameState.player.setAlpha(1);
            gameState.player.anims.stop();
            shadow.anims.stop();
            gameState.player.setTexture("rigleyYellow");

            //Saves Skin
            sessionStorage.setItem(gameOptions.Skin, JSON.stringify(2));
          });
        var B4 = this.add
          .sprite(175, 200, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0x00ff00)
          .setInteractive()
          .on("pointerdown", () => {
            toggleBoxes();
            B4.setFrame(1);
            gameState.player.setAlpha(1);
            shadow.anims.stop();
            gameState.player.anims.stop();

            //Saves Skin
            sessionStorage.setItem(gameOptions.Skin, JSON.stringify(3));
            gameState.player.setTexture("rigleyGreen");
          });
        var B5 = this.add
          .sprite(225, 200, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0x03fcf4)
          .setInteractive()
          .on("pointerdown", () => {
            toggleBoxes();
            B5.setFrame(1);
            gameState.player.setAlpha(1);
            shadow.anims.stop();
            gameState.player.anims.stop();
            gameState.player.setTexture("rigleyBlue2");

            //Saves Skin
            sessionStorage.setItem(gameOptions.Skin, JSON.stringify(4));
          });
        var B6 = this.add
          .sprite(275, 200, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0x0000ff)
          .setInteractive()
          .on("pointerdown", () => {
            toggleBoxes();
            B6.setFrame(1);
            gameState.player.setAlpha(1);
            gameState.player.setTexture("rigleyBlue");
            shadow.anims.stop();
            gameState.player.anims.stop();

            //Saves Skin
            sessionStorage.setItem(gameOptions.Skin, JSON.stringify(5));
          });
        var B7 = this.add
          .sprite(175, 250, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0x9900ff)
          .setInteractive()
          .on("pointerdown", () => {
            toggleBoxes();
            B7.setFrame(1);
            gameState.player.setAlpha(1);
            gameState.player.setTexture("rigleyPurple");
            shadow.anims.stop();
            gameState.player.anims.stop();

            //Saves Skin
            sessionStorage.setItem(gameOptions.Skin, JSON.stringify(6));
          });
        var B8 = this.add
          .sprite(225, 250, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0xff00dd)
          .setInteractive()
          .on("pointerdown", () => {
            toggleBoxes();
            B8.setFrame(1);
            gameState.player.setAlpha(1);
            gameState.player.setTexture("rigleyPink");
            shadow.anims.stop();
            gameState.player.anims.stop();

            //Saves Skin
            sessionStorage.setItem(gameOptions.Skin, JSON.stringify(7));
          });
        var B9 = this.add
          .sprite(275, 250, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0xffffff)
          .setInteractive()
          .on("pointerdown", () => {
            toggleBoxes();
            B9.setFrame(1);
            gameState.player.setAlpha(1);
            gameState.player.anims.stop();
            gameState.player.setTexture("rigleyWhite");
            shadow.anims.stop();
            gameState.player.anims.stop();

            //Saves Skin
            sessionStorage.setItem(gameOptions.Skin, JSON.stringify(8));
          });
        var B10 = this.add
          .sprite(200, 300, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0x6e6e6e)
          .setInteractive()
          .on("pointerdown", () => {
            toggleBoxes();
            B10.setFrame(1);
            gameState.player.setAlpha(1);
            shadow.anims.stop();
            gameState.player.anims.stop();
            gameState.player.setTexture("rigleyBlack");

            //Saves Skin
            sessionStorage.setItem(gameOptions.Skin, JSON.stringify(9));
          });
        custom = this.add
          .sprite(250, 300, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0xffffff)
          .setInteractive()
          .on("pointerdown", () => {
            toggleBoxes();
            custom.setFrame(1);
            gameState.player.setAlpha(0);
            shadow.setTexture("rigleyWhite");
            shadow.anims.stop();

            //Saves Skin
            sessionStorage.setItem(gameOptions.Skin, JSON.stringify(10));
          });

        //Customize UI Buttons

        var U1 = this.add
          .sprite(725, 150, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0xff0000)
          .setInteractive()
          .on("pointerdown", () => {
            toggleUBoxes();
            U1.setFrame(1);
            Menu.setTint(0xff0000);
            //Saves UI color
            sessionStorage.setItem(gameOptions.UI, JSON.stringify(0));
          });
        var U2 = this.add
          .sprite(775, 150, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0xfc6f03)
          .setInteractive()
          .on("pointerdown", () => {
            toggleUBoxes();
            U2.setFrame(1);
            Menu.setTint(0xfc6f03);
            //Saves UI color
            sessionStorage.setItem(gameOptions.UI, JSON.stringify(1));
          });
        var U3 = this.add
          .sprite(825, 150, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0xfcf803)
          .setInteractive()
          .on("pointerdown", () => {
            toggleUBoxes();
            U3.setFrame(1);
            Menu.setTint(0xfcf803);
            //Saves UI color
            sessionStorage.setItem(gameOptions.UI, JSON.stringify(2));
          });
        var U4 = this.add
          .sprite(725, 200, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0x00ff00)
          .setInteractive()
          .on("pointerdown", () => {
            toggleUBoxes();
            U4.setFrame(1);
            Menu.setTint(0x00ff00);
            //Saves UI color
            sessionStorage.setItem(gameOptions.UI, JSON.stringify(3));
          });
        var U5 = this.add
          .sprite(775, 200, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0x03fcf4)
          .setInteractive()
          .on("pointerdown", () => {
            toggleUBoxes();
            U5.setFrame(1);
            Menu.setTint(0x03fcf4);
            //Saves UI color
            sessionStorage.setItem(gameOptions.UI, JSON.stringify(4));
          });
        var U6 = this.add
          .sprite(825, 200, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0x0000ff)
          .setInteractive()
          .on("pointerdown", () => {
            toggleUBoxes();
            U6.setFrame(1);
            Menu.setTint(0x0000ff);
            //Saves UI color
            sessionStorage.setItem(gameOptions.UI, JSON.stringify(5));
          });
        var U7 = this.add
          .sprite(725, 250, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0x9900ff)
          .setInteractive()
          .on("pointerdown", () => {
            toggleUBoxes();
            U7.setFrame(1);
            Menu.setTint(0x9900ff);
            //Saves UI color
            sessionStorage.setItem(gameOptions.UI, JSON.stringify(6));
          });
        var U8 = this.add
          .sprite(775, 250, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0xff00dd)
          .setInteractive()
          .on("pointerdown", () => {
            toggleUBoxes();
            U8.setFrame(1);
            Menu.setTint(0xff00dd);
            //Saves UI color
            sessionStorage.setItem(gameOptions.UI, JSON.stringify(7));
          });
        var U9 = this.add
          .sprite(825, 250, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setTint(0xffffff)
          .setInteractive()
          .on("pointerdown", () => {
            toggleUBoxes();
            U9.setFrame(1);
            Menu.setTint(0xffffff);
            //Saves UI color
            sessionStorage.setItem(gameOptions.UI, JSON.stringify(8));
          });

        //Customize Submit Button
        this.add
          .sprite(500, 300, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setFrame(11)
          .setInteractive()
          .on("pointerup", () => {
            //Fadeout Effect
            this.disableInteractive;
            this.cameras.main.fadeOut(1000);
            setTimeout(() => {
              window.location.reload(true);
            }, 1500);
          });
      });

    //Info Button non-Transparent Background
    this.add
      .sprite(575, 400, "rigleyUI")
      .setFrame(3)
      .setScale(0.25)
      .setTint(0x000000);
    //Info Button
    Info = this.add
      .sprite(575, 400, "rigleyUI")
      .setFrame(3)
      .setScale(0.25)
      .setDepth(1)
      .setInteractive()
      .on("pointerdown", () => {
        //Placing Info Menu
        var infoMenu = this.add
          .image(500, 250, "buttom")
          .setOrigin(0.5)
          .setTint(0x05a1b5)
          .setScale(2.25, 2.4)
          .setDepth(5);

        //Color of UI Menu
        switch (UI) {
          case 0:
            infoMenu.setTint(0xff0000);
            break;
          case 1:
            infoMenu.setTint(0xfc6f03);
            break;
          case 2:
            infoMenu.setTint(0xfcf803);
            break;
          case 3:
            infoMenu.setTint(0x00ff00);
            break;
          case 4:
            infoMenu.setTint(0x03fcf4);
            break;
          case 5:
            infoMenu.setTint(0x0000ff);
            break;
          case 6:
            infoMenu.setTint(0x9900ff);
            break;
          case 7:
            infoMenu.setTint(0xff00dd);
            break;
          case 8:
            infoMenu.setTint(0xffffff);
        }
        //Credits Text
        this.add
          .text(250, 110, "Code By:", { fontSize: "35px" })
          .setDepth(6)
          .setOrigin(0.5);
        //Credits Name
        this.add
          .text(250, 165, "@ShawnBasquiat", { fontSize: "40px" })
          .setDepth(6)
          .setOrigin(0.5);
        //twitter Page button
        this.add
          .sprite(250, 280, "rigleyUI")
          .setDepth(1)
          .setScale(0.5)
          .setFrame(10)
          .setDepth(6)
          .setInteractive()
          .on("pointerup", () => {
            window.open("https://twitter.com/ShawnBasquiat");
          });
        //Music Credits Text
        this.add
          .text(750, 110, "Music:", { fontSize: "35px" })
          .setDepth(6)
          .setOrigin(0.5);
        //SOTN Credits Text
        this.add
          .text(750, 165, "Castlevania SOTN -", { fontSize: "35px" })
          .setDepth(6)
          .setOrigin(0.5);
        //Credits Name
        this.add
          .text(750, 200, "Dracula's Castle", { fontSize: "40px" })
          .setDepth(6)
          .setOrigin(0.5);
        //Music Page button
        this.add
          .sprite(750, 280, "rigleyUI")
          .setDepth(1)
          .setScale(0.5)
          .setFrame(10)
          .setDepth(6)
          .setInteractive()
          .on("pointerup", () => {
            window.open(
              "https://www.youtube.com/watch?v=E3aNm-K82UM&list=PL9C2427AFB919D8C2&index=18"
            );
          });

        //Info Exit Button
        var infoExit = this.add
          .sprite(500, 380, "rigleyUI")
          .setDepth(1)
          .setScale(0.25)
          .setFrame(11)
          .setDepth(6)
          .setInteractive()
          .on("pointerup", () => {
            //Fadeout Effect
            this.cameras.main.fadeOut(1000);
            infoExit.disableInteractive;
            setTimeout(() => {
              this.scene.restart();
            }, 1200);
          });
      });

    //Adds sound buttons that are clickable and change tint
    var sound2 = this.add
      .image(500, 400, "soundButton")
      .setDepth(1)
      .setScale(0.25)
      .setOrigin(0.5);
    sound = this.add
      .image(500, 400, "soundButton")
      .setDepth(2)
      .setScale(0.25)
      .setOrigin(0.5);
    //mute Function but also chooses whether sound button will begin tinted or not
    if (muted === 1) {
      sound2
        .setDepth(3)
        .setInteractive()
        .on("pointerup", () => {
          sound2.disableInteractive();
          muted = 0;
          var coin = this.sound.add("click");
          coin.play();
          sound.setInteractive();
          sound2.setDepth(1);
        });
      sound.on("pointerup", () => {
        sound.disableInteractive();
        muted = 1;
        sound2.setDepth(3).setInteractive();
      });
    } else {
      sound.setInteractive().on("pointerup", () => {
        sound.disableInteractive();
        muted = 1;
        sound2
          .setDepth(3)
          .setInteractive()
          .on("pointerup", () => {
            muted = 0;
            sound2.disableInteractive();
            var coin = this.sound.add("click");
            coin.play();
            sound.setInteractive();
            sound2.setDepth(1);
          });
      });
    }

    //  Rainbow Title Text
    title = this.add.text(500, 120, "Rigley Escape", {
      font: "78px Roboto Condensed",
      fill: "#fff"
    });
    title.setStroke("#000000", 8);
    title.setShadow(2, 2, "#00ff00", 2, true, true).setDepth(3).setOrigin(0.5);
    //Ladybugs on both sides
    ladyBug = this.add.text(500, 220, "🐞                   🐞", {
      font: "70px Roboto Condensed",
      fill: "#fff"
    });
    ladyBug.setDepth(3).setOrigin(0.5);
    //Lady bugs shadow
    ladyBug2 = this.add.text(502, 223, "🐞                   🐞", {
      font: "70px Roboto Condensed",
      fill: "#000000"
    });
    ladyBug2
      .setDepth(2)
      .setOrigin(0.5)
      .setFill(0xffffff)
      .setStroke(0xffffff, 8);
    //Click to Start Text
    click = this.add
      .text(500, 320, `Click to Start!`, {
        fontSize: "35px",
        fill: "#000000"
      })
      .setDepth(3)
      .setStroke("#fff", 4)
      .setShadow(1, 1, "#333333", 1, true, true)
      .setOrigin(0.5);

    //These are variable hoists so that they can be destroyed and still be able to use the rainbow effect for the tutorial menu
    left = this.add.text(0, 0, ``, {
      fontSize: "1px",
      fill: "#ffffff"
    });

    right = this.add.text(0, 0, ``, {
      fontSize: "1px",
      fill: "#ffffff"
    });

    codeyZ = this.add.text(0, 0, ``, {
      fontSize: "1px",
      fill: "#ffffff"
    });

    //Creates Background Code
    gameState.particles = this.add.particles("matrix").setDepth(0);
    gameState.emitter = gameState.particles.createEmitter({
      frame: [0, 1, 2, 3, 4, 5, 6, 7],
      x: { min: -200, max: config.width * 2 },
      y: 550,
      lifespan: 5000,
      speedX: { min: 5, max: 200 },
      speedY: { min: -50, max: -200 },
      scale: { start: 0, end: 1 },
      quantity: 20,
      blendMode: "ADD",
      fill: 0x000000
    });
    //The Actual Button for the start menu
    start = this.add
      .image(498, 320, "buttom")
      // .setAlpha(0.8)
      // .setTint(0x000000)
      .setScale(0.85, 0.3)
      .setInteractive()
      .on("pointerup", () => {
        var coin = this.sound.add("click");
        if (muted === 1) {
          coin.setMute(true);
        }
        coin.play();
        //Explosion Effect and Objects Disappearing
        sound.destroy();
        sound2.destroy();
        custom.destroy();
        Info.destroy();
        title.destroy();
        start.destroy();
        click.destroy();
        codey.destroy();
        codey2.destroy();
        ladyBug.setAlpha(0);
        ladyBug2.setAlpha(0);
        gameState.particles1 = this.add.particles("matrix").setDepth(5);
        //Making the Explosions
        gameState.emitter1 = gameState.particles1.createEmitter({
          frame: [0, 1, 2, 3, 4, 5, 6, 7],
          x: { min: -200, max: 200 },
          y: { min: -200, max: 200 },
          lifespan: 1000,
          speedX: { min: -800, max: 800 },
          speedY: { min: -800, max: 800 },
          scale: { start: 2, end: 0 },
          quantity: 20,
          blendMode: "ADD",
          fill: 0xff0000
        });

        gameState.emitter1.explode(70, 500, 400);
        gameState.emitter1.explode(70, 300, 250);
        gameState.emitter1.explode(70, 700, 250);
        gameState.emitter1.explode(70, 500, 100);

        //Start Text on the tutorial menu
        click = this.add
          .text(500, 375, `Click to Start!`, {
            fontSize: "35px",
            fill: "#000000"
          })
          .setDepth(3)
          .setStroke("#fff", 4)
          .setShadow(1, 1, "#333333", 1, true, true)
          .setOrigin(0.5);

        //Rigley's backstory
        title = this.add
          .text(500, 80, `Coders are trying to Delete Rigley!`, {
            fontSize: "30px",
            fill: "#000000"
          })
          .setDepth(3)
          .setStroke("#fff", 4)
          .setShadow(1, 1, "#333333", 1, true, true)
          .setOrigin(0.5);

        var story2 = this.add
          .text(500, 150, `Help Rigley Become a Zero Day Bug`, {
            fontSize: "30px",
            fill: "#000000"
          })
          .setDepth(3)
          .setStroke("#fff", 4)
          .setShadow(1, 1, "#333333", 1, true, true)
          .setOrigin(0.5);

        //Tutorial Directions
        var controls = this.add
          .text(500, 220, `Use Arrows                to run`, {
            fontSize: "30px",
            fill: "#000000"
          })
          .setDepth(3)
          .setStroke("#fff", 4)
          .setShadow(1, 1, "#333333", 1, true, true)
          .setOrigin(0.55);

        var avoid = this.add
          .text(500, 300, `Avoid Coders                to win!`, {
            fontSize: "30px",
            fill: "#000000"
          })
          .setDepth(3)
          .setStroke("#fff", 4)
          .setShadow(1, 1, "#333333", 1, true, true)
          .setOrigin(0.55);

        codeyZ = this.add
          .image(500, 300, "coder")
          .setDepth(2)
          .setScale(0.3)
          .setOrigin(0.5);

        var codey3 = this.add
          .image(570, 300, "coder")
          .setDepth(2)
          .setScale(0.3)
          .setOrigin(0.5);

        var codey4 = this.add
          .image(430, 300, "coder")
          .setDepth(2)
          .setScale(0.3)
          .setOrigin(0.5);

        right = this.add
          .image(585, 225, "right")
          .setDepth(2)
          .setScale(0.27)
          .setOrigin(0.5);

        left = this.add
          .image(415, 225, "left")
          .setDepth(2)
          .setScale(0.27)
          .setOrigin(0.5);

        this.input.once("pointerup", () => {
          //Disappearing objects and explosion effect
          coin.play();
          gameState.player.destroy();
          shadow.destroy();
          left.destroy();
          right.destroy();
          click.destroy();
          title.destroy();
          codey4.destroy();
          codey3.destroy();
          codeyZ.destroy();
          avoid.destroy();
          controls.destroy();
          story2.destroy();
          graphics.destroy();
          //Making the explosions
          gameState.emitter1.explode(70, 500, 400);
          gameState.emitter1.explode(70, 300, 250);
          gameState.emitter1.explode(70, 700, 250);
          gameState.emitter1.explode(70, 500, 100);
          //Fadeout Effect
          this.cameras.main.fadeOut(1000);
          setTimeout(() => {
            // this.scene.restart()
            this.scene.stop("StartScene");
            this.scene.start("GameScene");
          }, 1500);
        });
        //Tutorial Background. Using graphics is broken so don't use them in the future. Make your own backgrounds
        graphics = this.add.graphics();
        graphics
          .fillStyle(0x000000, 0.75)
          .lineStyle(2, 0xffffff, 1)
          .strokeRoundedRect(140, 100, 700, 300, 32)
          .fillRoundedRect(140, 100, 700, 300, 32)
          .setOrigin(0.5);
      });
  }
  update() {
    codey2.rotation += 0.02;
    codey.rotation -= 0.02;
    codeyZ.rotation -= 0.02;
    // codey4.rotation += 0.02;
    //Makes the Randow Effect
    var top = rainbow[i].color;
    var bottom = rainbow[359 - i].color;
    title.setTint(bottom, top, top, bottom);
    click.setTint(top, bottom, top, bottom);
    start.setTint(top, bottom, top, bottom);
    codey.setTint(bottom);
    left.setTint(top, bottom, top, bottom);
    right.setTint(bottom, top, bottom, top);
    codey2.setTint(top);
    codeyZ.setTint(bottom, bottom, top, top);
    ladyBug2
      .setTint(top, bottom, top, bottom)
      .setStroke(0xffffff, 8)
      .setShadow(1, 1, "#ffffff", 1, true, true);
    ladyBug.setShadow(1, 1, top, 1);
    shadow.setTint(top, bottom, top, bottom);
    sound.setTint(top, bottom, top, bottom);
    custom.setTint(top);
    Info.setTint(bottom);
    //Makes the rainbow transition
    i++;
    if (i === 360) {
      i = 0;
    }
  }
}

//Game Scene

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    this.load.audio(
      "plush",
      "https://dl.dropboxusercontent.com/s/ir9bcknzlpjrmor/Dog-Toy-Sounds-That-Makes-Dog-Tilt-Head-Left-Right-Prank-Your-Dog-dog-tv-stimulation_jJCA-DqNUlk%20%281%29%20%28mp3cut.net%29.mp3?dl=0"
    );
    this.load.spritesheet("rmatrix", "https://i.imgur.com/Pp4QtuU.png?1", {
      frameWidth: 30,
      frameHeight: 62
    });
    this.load.image("platform", "https://i.imgur.com/ttQGxtj.png?2");

    this.load.image("home", "https://i.imgur.com/6Z90G29.png?1");
  }

  create(Skin) {
    //Stored Best Score
    this.topScore =
      JSON.parse(sessionStorage.getItem(gameOptions.localStorageName)) == null
        ? 0
        : JSON.parse(sessionStorage.getItem(gameOptions.localStorageName));

    //Starts the background music
    var music = this.sound.add("castle");
    if (muted === 1) {
      music.setMute(true);
    }
    music.play({ volume: 0.1 });
    music.setLoop(true);

    //Creates Rigley our Hero
    gameState.player = this.physics.add
      .sprite(playerX, 450, `rigley`, 0)
      .setDepth(3);

    //Sets Rigley Skins
    switch (Skin) {
      case 0:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigley", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        break;
      case 1:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyOrange", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        gameState.player.setTexture("rigleyOrange");
        break;
      case 2:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyYellow", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        gameState.player.setTexture("rigleyYellow");
        break;
      case 3:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyGreen", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        gameState.player.setTexture("rigleyGreen");
        break;
      case 4:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyBlue2", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        gameState.player.setTexture("rigleyBlue2");
        break;
      case 5:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyBlue", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        gameState.player.setTexture("rigleyBlue");
        break;
      case 6:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyPurple", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        gameState.player.setTexture("rigleyPurple");
        break;
      case 7:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyPink", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        gameState.player.setTexture("rigleyPink");
        break;
      case 8:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyWhite", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        gameState.player.setTexture("rigleyWhite");
        break;
      case 9:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyBlack", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        gameState.player.setTexture("rigleyBlack");
        break;
      case 10:
        this.anims.create({
          key: "run",
          frames: this.anims.generateFrameNumbers("rigleyWhite", {
            start: 0,
            end: 2
          }),
          frameRate: 13,
          repeat: -1
        });
        gameState.player.setTexture("rigleyWhite");
    }

    //Creates left arrow
    left = this.add
      .image(this.cameras.main.x + 40, 250, "left")
      .setScale(0.25)
      .setDepth(3)
      .setScrollFactor(0)
      .setTint(0x028ec9);

    //Creates right arrow
    let right = this.add
      .image(this.cameras.main.x + 960, 250, "right")
      .setScale(0.25)
      .setDepth(3)
      .setScrollFactor(0)
      .setTint(0x028ec9);

    //Sets the Score
    gameState.score = gameState.player.x - 500;

    //Creates Camera and Window bounds
    this.cameras.main.setBounds(0, 0, gameState.width, gameState.height);
    this.physics.world.setBounds(0, 0, gameState.width, gameState.height / 2);
    this.cameras.main.startFollow(gameState.player, true, 0.02, 0.02, 0, 500);
    gameState.player.setCollideWorldBounds(true);

    //Creates the Ground
    var platforms = this.physics.add.staticGroup();
    platforms
      .create(225, 480, "platform")
      .setScale(200, 0.11)
      .refreshBody()
      .setDepth(2)
      .setTint(0x028ec9);

    //Places Initial Score
    gameState.scoreText = this.add
      .text(this.cameras.main.x + 500, 469, `Score: 0`, {
        fontSize: "15px",
        fill: "#ffffff"
      })
      .setDepth(3)
      .setOrigin(0)
      .setScrollFactor(0);
    this.physics.add.overlap(gameState.scoreText, platforms);

    //Places Best score
    gameState.Best = this.add
      .text(this.cameras.main.x + 490, 485, `Best: ` + this.topScore, {
        fontSize: "15px",
        fill: "#ffffff"
      })
      .setDepth(3)
      .setOrigin(1)
      .setScrollFactor(0);
    this.physics.add.overlap(gameState.Best, platforms);

    //Places Trophy text
    gameState.trophyText = this.add
      .text(this.cameras.main.x + 10, 469, "Newbie Bug", {
        fontSize: "15px",
        fill: "#ffffff"
      })
      .setDepth(3)
      .setScrollFactor(0);
    this.physics.add.overlap(gameState.trophyText, platforms);

    //Places Next Level text
    gameState.nextText = this.add
      .text(this.cameras.main.x + 990, 485, "Next Level: Newbie Bug", {
        fontSize: "15px",
        fill: "#ffffff"
      })
      .setDepth(3)
      .setScrollFactor(0)
      .setOrigin(1);
    this.physics.add.overlap(gameState.nextText, platforms);

    //Color UI
    switch (UI) {
      case 0:
        platforms.setTint(0xff0000);
        left.setTint(0xff0000);
        right.setTint(0xff0000);
        break;
      case 1:
        platforms.setTint(0xfc6f03);
        left.setTint(0xfc6f03);
        right.setTint(0xfc6f03);
        break;
      case 2:
        platforms.setTint(0xfcf803);
        left.setTint(0xfcf803);
        right.setTint(0xfcf803);
        break;
      case 3:
        platforms.setTint(0x00ff00);
        left.setTint(0x00ff00);
        right.setTint(0x00ff00);
        break;
      case 4:
        platforms.setTint(0x03fcf4);
        left.setTint(0x03fcf4);
        right.setTint(0x03fcf4);
        break;
      case 5:
        platforms.setTint(0x0000ff);
        left.setTint(0x0000ff);
        right.setTint(0x0000ff);
        break;
      case 6:
        platforms.setTint(0x9900ff);
        left.setTint(0x9900ff);
        right.setTint(0x9900ff);
        break;
      case 7:
        platforms.setTint(0xff00dd);
        left.setTint(0xff00dd);
        right.setTint(0xff00dd);
        break;
      case 8:
        platforms.setTint(0xffffff);
        left.setTint(0xffffff);
        right.setTint(0xffffff);
        gameState.scoreText.setTint(0x000000);
        gameState.Best.setTint(0x000000);
        gameState.trophyText.setTint(0x000000);
        gameState.nextText.setTint(0x000000);
    }

    //Allows player to walk on ground
    this.physics.add.collider(gameState.player, platforms);

    //Turns on key inputs
    gameState.cursors = this.input.keyboard.createCursorKeys();

    //Creates Background Code
    gameState.particles = this.add.particles(`rmatrix`);
    gameState.emitter = gameState.particles.createEmitter({
      frame: 2,
      x: { min: 0, max: config.width * 2 },
      y: -5,
      lifespan: 5000,
      speedX: { min: -5, max: -200 },
      speedY: { min: 50, max: 200 },
      scale: { start: 1, end: 0 },
      quantity: 10,
      blendMode: "ADD"
    });
    gameState.emitter.setScrollFactor(0);
    //Primes Rainbow
    var top = rainbow[i].color;
    var bottom = rainbow[359 - i].color;
    i++;
    if (i === 360) {
      i = 0;
    }
    //Creates falling enemies
    const coders = this.physics.add.group();
    function coderGen() {
      const xCoord = Math.random() * 1000;
      coders
        .create(-500 + xCoord + gameState.player.x, 10, "coder")
        .setDepth(1)
        .setScale(0.3);
      gameState.player.x < 2500
        ? coders.setTint(0xffffff)
        : gameState.player.x < 4500
        ? coders.setTint(0xff00ff)
        : gameState.player.x < 6500
        ? coders.setTint(0xf0ff00)
        : gameState.player.x < 8000
        ? coders.setTint(0x00ff00)
        : gameState.player.x < 9000
        ? coders.setTint(0x000000)
        : gameState.player.x < 10500
        ? coders.setTint(0xff0000)
        : coders.setTint(top);
    }
    const coderGenLoop = this.time.addEvent({
      delay: 125,
      callback: coderGen,
      callbackScope: this,
      loop: true
    });

    //Enemies Disappear when they hit the ground
    this.physics.add.collider(coders, platforms, function (coder) {
      coder.destroy();
    });

    //Stops Game if enemies hit you
    var death = this.physics.add.collider(gameState.player, coders, () => {
      //Saves Best Score
      sessionStorage.setItem(
        gameOptions.localStorageName,
        JSON.stringify(
          Math.max(
            -500 + Math.floor(gameState.player.x / 10) * 10,
            this.topScore
          )
        )
      );

      //Shakes Camera
      this.cameras.main.shake(100);
      gameState.player.setAlpha(0);
      gameState.nextText.setAlpha(0);
      gameState.trophyText.setAlpha(0);
      gameState.scoreText.setAlpha(0);
      gameState.Best.setAlpha(0);
      //Makes explosions
      gameState.particles1 = this.add.particles("matrix").setDepth(5);
      gameState.emitter1 = gameState.particles1.createEmitter({
        frame: [0, 1, 2, 3, 4, 5, 6, 7],
        x: { min: -200, max: 200 },
        y: { min: -200, max: 200 },
        lifespan: 1000,
        speedX: { min: -800, max: 800 },
        speedY: { min: -800, max: 800 },
        scale: { start: 1.5, end: 0 },
        quantity: 20,
        blendMode: "ADD",
        fill: 0xff0000
      });
      gameState.emitter1.explode(70, gameState.player.x, 420);
      //Makes objects disappear
      left.setAlpha(0);
      right.setAlpha(0);
      coders.setAlpha(0);
      //Stops enemy creation
      coderGenLoop.destroy();
      //Turns off background code
      gameState.emitter.on = false;
      //Makes gameover sound
      var deathSound = this.sound.add("plush");
      if (muted === 1) {
        deathSound.setMute(true);
      }
      deathSound.play({ volume: 0.1 });
      //Stops game movement
      this.physics.pause();
      //Turns off background music
      music.destroy();
      //Did you win? or GameOver
      var rePlay;
      gameState.player.x < 10500
        ? (rePlay = "Click to Restart")
        : (rePlay = "Click to Replay");
      var gOver;
      gameState.player.x < 10500 ? (gOver = "Game Over") : (gOver = "You Win!");
      //Tells you what trophy you earned
      var trophy;
      gameState.player.x <= 500
        ? (trophy = "Newbie Bug")
        : gameState.player.x < 1000
        ? (trophy = "Missing Comma")
        : gameState.player.x < 1500
        ? (trophy = `Tag Typo`)
        : gameState.player.x < 2000
        ? (trophy = `Syntax Error`)
        : gameState.player.x < 2500
        ? (trophy = "Undeclared Variable")
        : gameState.player.x < 3000
        ? (trophy = "Intern Bug")
        : gameState.player.x < 3500
        ? (trophy = "Data Type Error")
        : gameState.player.x < 4000
        ? (trophy = "Improper Initialization")
        : gameState.player.x < 4500
        ? (trophy = "Incorrect Math")
        : gameState.player.x < 5000
        ? (trophy = "Jr. Dev Bug")
        : gameState.player.x < 5500
        ? (trophy = "Infinite Loop")
        : gameState.player.x < 6000
        ? (trophy = "Closure!")
        : gameState.player.x < 6500
        ? (trophy = "Broken Feature")
        : gameState.player.x < 7000
        ? (trophy = "Minor Security Breach")
        : gameState.player.x < 7500
        ? (trophy = "Debug Mode Left On")
        : gameState.player.x < 8000
        ? (trophy = "Hard-Coded Password")
        : gameState.player.x < 8500
        ? (trophy = "Sr. Dev Bug")
        : gameState.player.x < 9000
        ? (trophy = "Untrusted Search Path")
        : gameState.player.x < 9500
        ? (trophy = "Major Security Threat")
        : gameState.player.x < 10000
        ? (trophy = "No Integrity Checks")
        : gameState.player.x < 10500
        ? (trophy = "Cross Site Scripting")
        : (trophy = "Zero Day Bug!");
      //Places Trophy Text
      gameState.Honor = this.add
        .text(Math.max(500, gameState.player.x), 300, trophy, {
          fontSize: "50px",
          fill: "#D4AF37",
          fontWeight: "bold"
        })
        .setDepth(3)
        .setStroke("#000000", 2)
        .setOrigin(0.5);

      //Game Over Screen
      gameState.gameOver = this.add
        .text(Math.max(500, gameState.player.x), 90, gOver, {
          fontSize: "50px",
          fill: "#ffffff"
        })
        .setDepth(3)
        .setStroke("#000000", 2)
        .setOrigin(0.5);

      //End Score
      gameState.EndScore = this.add
        .text(
          Math.max(500, gameState.player.x),
          250,
          `Score: ${-500 + Math.floor(gameState.player.x / 10) * 10}`,
          {
            fontSize: "50px",
            fill: "#ffffff",
            fontWeight: "bold"
          }
        )
        .setDepth(3)
        .setStroke("#000000", 2)
        .setOrigin(0.5);
      //Places Restart Text
      gameState.reStart = this.add
        .text(Math.max(500, gameState.player.x), 150, rePlay, {
          fontSize: "50px",
          fill: "#ff0000",
          fontWeight: "bold"
        })
        .setDepth(3)
        .setStroke("#ffffff", 2)
        .setOrigin(0.5);
      //Places Ending Ladybugs
      this.add.text(Math.max(310, gameState.player.x - 190), 70, "🐞", {
        fontSize: "40px"
      });
      this.add.text(Math.max(635, gameState.player.x + 140), 70, "🐞", {
        fontSize: "40px"
      });
      //Places Restart Button
      var endButton = this.add
        .image(Math.max(500, gameState.player.x), 152, "buttom")
        .setScale(1.25, 0.35)
        .setDepth(2)
        .setInteractive()
        .setTint(0x05a1b5);
      //Places checkpoint text
      gameState.checkpoint = this.add
        .text(Math.max(500, gameState.player.x), 370, "Start from Checkpoint", {
          fontSize: "50px",
          fill: "#D4AF37",
          fontWeight: "bold"
        })
        .setDepth(3)
        .setStroke("#ffffff", 2)
        .setOrigin(0.5);
      //Places Checkpoint button
      var checkButton = this.add
        .image(Math.max(500, gameState.player.x), 372, "buttom")
        .setScale(1.65, 0.35)
        .setDepth(2)
        .setInteractive()
        .setTint(0x05a1b5);
      //Places Home Button
      var home = this.add
        .image(Math.max(50, gameState.player.x - 450), 30, "home")
        .setDepth(1)
        .setScale(0.25)
        .setOrigin(0.5)
        .setTint(0x05a1b5)
        .setInteractive()
        .on("pointerup", () => {
          var coin = this.sound.add("click");
          if (muted === 1) {
            coin.setMute(true);
          }
          coin.play();
          this.cameras.main.fadeOut(1000);
          setTimeout(() => {
            this.scene.stop("GameScene");
            this.scene.start("StartScene");
          }, 1500);
        });
      //Places Sound Button
      var sound2 = this.add
        .image(Math.max(950, gameState.player.x + 450), 30, "soundButton")
        .setDepth(1)
        .setScale(0.25)
        .setOrigin(0.5);
      var sound = this.add
        .image(Math.max(950, gameState.player.x + 450), 30, "soundButton")
        .setDepth(2)
        .setScale(0.25)
        .setTint(0x05a1b5)
        .setOrigin(0.5);

      //Mute Functionality, changes tint, and decides if it starts tinted
      if (muted === 1) {
        sound2
          .setDepth(3)
          .setInteractive()
          .on("pointerup", () => {
            sound2.disableInteractive();
            muted = 0;
            var coin = this.sound.add("click");
            coin.play();
            sound.setInteractive();
            sound2.setDepth(1);
          });
        sound.on("pointerup", () => {
          sound.disableInteractive();
          muted = 1;
          sound2.setDepth(3).setInteractive();
        });
      } else {
        sound.setInteractive().on("pointerup", () => {
          sound.disableInteractive();
          muted = 1;
          sound2
            .setDepth(3)
            .setInteractive()
            .on("pointerup", () => {
              muted = 0;
              sound2.disableInteractive();
              var coin = this.sound.add("click");
              coin.play();
              sound.setInteractive();
              sound2.setDepth(1);
            });
        });
      }

      //Color of UI Menu
      switch (UI) {
        case 0:
          sound.setTint(0xff0000);
          home.setTint(0xff0000);
          checkButton.setTint(0xff0000);
          endButton.setTint(0xff0000);
          break;
        case 1:
          sound.setTint(0xfc6f03);
          home.setTint(0xfc6f03);
          checkButton.setTint(0xfc6f03);
          endButton.setTint(0xfc6f03);
          break;
        case 2:
          sound.setTint(0xfcf803);
          home.setTint(0xfcf803);
          checkButton.setTint(0xfcf803);
          endButton.setTint(0xfcf803);
          break;
        case 3:
          sound.setTint(0x00ff00);
          home.setTint(0x00ff00);
          checkButton.setTint(0x00ff00);
          endButton.setTint(0x00ff00);
          break;
        case 4:
          sound.setTint(0x03fcf4);
          home.setTint(0x03fcf4);
          checkButton.setTint(0x03fcf4);
          endButton.setTint(0x03fcf4);
          break;
        case 5:
          sound.setTint(0x0000ff);
          home.setTint(0x0000ff);
          checkButton.setTint(0x0000ff);
          endButton.setTint(0x0000ff);
          break;
        case 6:
          sound.setTint(0x9900ff);
          home.setTint(0x9900ff);
          checkButton.setTint(0x9900ff);
          endButton.setTint(0x9900ff);
          break;
        case 7:
          sound.setTint(0xff00dd);
          home.setTint(0xff00dd);
          checkButton.setTint(0xff00dd);
          endButton.setTint(0xff00dd);
          break;
        case 8:
          sound.setTint(0xffffff);
          home.setTint(0xffffff);
          checkButton.setTint(0xffffff);
          endButton.setTint(0xffffff);
      }

      //End Button Functionality
      endButton.on("pointerup", () => {
        var coin = this.sound.add("click");
        if (muted === 1) {
          coin.setMute(true);
        }
        coin.play();
        //Explosions and delete objects
        gameState.emitter1.explode(70, gameState.player.x, 400);
        gameState.emitter1.explode(70, gameState.player.x - 200, 250);
        gameState.emitter1.explode(70, gameState.player.x + 200, 250);
        gameState.emitter1.explode(70, gameState.player.x, 100);
        gameState.gameOver.destroy();
        checkButton.destroy();
        endButton.destroy();
        home.destroy();
        sound2.destroy();
        sound.destroy();
        gameState.checkpoint.destroy();
        gameState.reStart.destroy();
        gameState.Honor.destroy();
        gameState.EndScore.destroy();
        //Fadeout effect
        this.cameras.main.fadeOut(1000);
        //Where the player will restart
        playerX = 500;
        setTimeout(() => {
          this.scene.start("GameScene");
        }, 1500);
      });

      checkButton.on("pointerup", () => {
        var coin = this.sound.add("click");
        if (muted === 1) {
          coin.setMute(true);
        }
        coin.play();
        //Explosion effect
        gameState.emitter1.explode(70, gameState.player.x, 400);
        gameState.emitter1.explode(70, gameState.player.x - 200, 250);
        gameState.emitter1.explode(70, gameState.player.x + 200, 250);
        gameState.emitter1.explode(70, gameState.player.x, 100);
        gameState.gameOver.destroy();
        endButton.destroy();
        checkButton.destroy();
        home.destroy();
        sound2.destroy();
        sound.destroy();
        gameState.checkpoint.destroy();
        gameState.reStart.destroy();
        gameState.Honor.destroy();
        gameState.EndScore.destroy();
        //Fadeout Effect
        this.cameras.main.fadeOut(1000);
        //Changes where the player begins
        playerX = Math.max(500, gameState.player.x / 2);
        setTimeout(() => {
          this.scene.start("GameScene");
        }, 1500);
      });
    });
  }

  update() {
    var top = rainbow[i].color;
    var bottom = rainbow[359 - i].color;
    i++;
    if (i === 360) {
      i = 0;
    }

    //Changes Emitter colors
    if (Skin == 10) {
      gameState.player.setTint(top);
      // gameState.emitter.setFrame([0, 1, 2, 3, 4, 5, 6, 7]);
    } else if (gameState.player.x < 2500) {
      gameState.emitter.setFrame(2);
    } else if (gameState.player.x < 4500) {
      gameState.emitter.setFrame(5);
    } else if (gameState.player.x < 6500) {
      gameState.emitter.setFrame([1, 4]);
    } else if (gameState.player.x < 8000) {
      //Changes background back to transparent
      this.cameras.main.setBackgroundColor();
      gameState.emitter.setFrame(4);
    } else if (gameState.player.x < 9000) {
      //Changes background to white
      this.cameras.main.setBackgroundColor(0x363636);
      gameState.emitter.setFrame(3);
    } else if (gameState.player.x < 10500) {
      //Changes background back to transparent
      this.cameras.main.setBackgroundColor();
      gameState.emitter.setFrame([0, 7]);
    } else {
      gameState.emitter.setFrame([0, 1, 2, 3, 4, 5, 6, 7]);
    }
    //Sets what trophy you got
    var trophy;
    gameState.player.x <= 500
      ? (trophy = "Newbie Bug")
      : gameState.player.x < 1000
      ? (trophy = "Missing Comma")
      : gameState.player.x < 1500
      ? (trophy = "Tag Typo")
      : gameState.player.x < 2000
      ? (trophy = `Syntax Error`)
      : gameState.player.x < 2500
      ? (trophy = "Undeclared Variable")
      : gameState.player.x < 3000
      ? (trophy = "Intern Bug")
      : gameState.player.x < 3500
      ? (trophy = "Data Type Error")
      : gameState.player.x < 4000
      ? (trophy = "Improper Initialization")
      : gameState.player.x < 4500
      ? (trophy = "Incorrect Math")
      : gameState.player.x < 5000
      ? (trophy = `Jr Dev Bug`)
      : gameState.player.x < 5500
      ? (trophy = "Infinite Loop")
      : gameState.player.x < 6000
      ? (trophy = "Closure!")
      : gameState.player.x < 6500
      ? (trophy = "Broken Feature")
      : gameState.player.x < 7000
      ? (trophy = "Minor Security Breach")
      : gameState.player.x < 7500
      ? (trophy = "Debug Mode Left On")
      : gameState.player.x < 8000
      ? (trophy = "Hard-Coded Password")
      : gameState.player.x < 8500
      ? (trophy = "Sr Dev Bug")
      : gameState.player.x < 9000
      ? (trophy = "Untrusted Search Path")
      : gameState.player.x < 9500
      ? (trophy = "Major Security Threat")
      : gameState.player.x < 10000
      ? (trophy = "No Integrity Checks")
      : gameState.player.x < 10500
      ? (trophy = "Cross Site Scripting")
      : (trophy = "Zero Day");
    //Updates current level
    gameState.trophyText.setText(`Level: ${trophy}`);
    //Updates current score
    gameState.scoreText.setText(
      `Score: ${-500 + Math.floor(gameState.player.x / 10) * 10}`
    );
    //Updates Next lvl text
    var next;
    gameState.player.x < 500
      ? (next = "Missing Comma")
      : gameState.player.x < 1000
      ? (next = "Tag Typo")
      : gameState.player.x < 1500
      ? (next = `Syntax Error`)
      : gameState.player.x < 2000
      ? (next = "Undeclared Variable")
      : gameState.player.x < 2500
      ? (next = "Intern Bug")
      : gameState.player.x < 3000
      ? (next = "Data Type Error")
      : gameState.player.x < 3500
      ? (next = "Improper Initialization")
      : gameState.player.x < 4000
      ? (next = "Incorrect Math")
      : gameState.player.x < 4500
      ? (next = `Jr Dev Bug`)
      : gameState.player.x < 5000
      ? (next = "Infinite Loop")
      : gameState.player.x < 5500
      ? (next = "Closure!")
      : gameState.player.x < 6000
      ? (next = "Broken Feature")
      : gameState.player.x < 6500
      ? (next = "Minor Security Breach")
      : gameState.player.x < 7000
      ? (next = "Debug Mode Left On")
      : gameState.player.x < 7500
      ? (next = "Hard-Coded Password")
      : gameState.player.x < 8000
      ? (next = "Sr Dev Bug")
      : gameState.player.x < 8500
      ? (next = "Untrusted Search Path")
      : gameState.player.x < 9000
      ? (next = "Major Security Threat")
      : gameState.player.x < 9500
      ? (next = "No Integrity Checks")
      : gameState.player.x < 10000
      ? (next = "Cross Site Scripting")
      : (next = "Zero Day");
    //Sets next level text
    gameState.nextText.setText(`Next Level: ` + next);

    //Sets movement for mouse
    var pointer = this.input.activePointer;
    if (pointer.isDown) {
      var touchX = pointer.x;
    }
    //Initializes movement for keyboard and mouse
    if (gameState.cursors.left.isDown || touchX < 500) {
      gameState.player.setVelocityX(-160);
      gameState.player.anims.play("run", true);
      gameState.player.flipX = true;
    } else if (gameState.cursors.right.isDown || touchX >= 500) {
      gameState.player.setVelocityX(160);
      gameState.player.anims.play("run", true);
      gameState.player.flipX = false;
    } else {
      gameState.player.setVelocityX(0);
      gameState.player.anims.play("run", false);
    }
    //EndGame if you fall off the board
    if (gameState.player.y > 600) {
      this.cameras.main.shake(240, 0.01, false, function (camera, progress) {
        if (progress > 0.9) {
          gameState.player.x = 48140;
          gameState.player.y = 400;
        }
      });
    }
  }
}

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 500,
  scale: {
    mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
  },
  transparent: true,
  roundPixels: false,
  audio: { noAudio: false },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      enableBody: true
    }
  },
  scene: [StartScene, GameScene]
};

const game = new Phaser.Game(config);
