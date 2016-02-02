var sb1 = 0;
var sb2 = 0;

var unlocked;
var bgmove;

var standLeft;

function Animation(spriteSheet, skybg, groundbg, platforms, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) {
    this.platforms = platforms; 
    this.skybg = skybg;
    this.groundbg = groundbg;
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y, scaleBy) {
    var scaleBy = scaleBy || 1;
    this.elapsedTime += tick;
    if (this.loop) {
        if (this.isDone()) {
            this.elapsedTime = 0;
        }
    } else if (this.isDone()) {
        return;
    }
    var index = this.reverse ? this.frames - this.currentFrame() - 1 : this.currentFrame();
    var vindex = 0;
    if ((index + 1) * this.frameWidth + this.startX > this.spriteSheet.width) {
        index -= Math.floor((this.spriteSheet.width - this.startX) / this.frameWidth);
        vindex++;
    }
    while ((index + 1) * this.frameWidth > this.spriteSheet.width) {
        index -= Math.floor(this.spriteSheet.width / this.frameWidth);
        vindex++;
    }

    var locX = x;
    var locY = y;
    var offset = vindex === 0 ? this.startX : 0;
    ctx.drawImage(this.skybg,
                  0 , 0,  // source from sheet
                  1200, 800,
                  -sb2 + 1200 , 0,
                  1200, 800);

    ctx.drawImage(this.skybg,
                  0 , 0,  // source from sheet
                  1200, 800,
                  -sb1 ,0,
                  1200, 800);

    // ctx.drawImage(this.groundbg,
    //               0, -500,  // source from sheet
    //               1000, 800,
    //               -sb2 + 1000, 0,
    //               1000,
    //               800);

    // ctx.drawImage(this.groundbg,
    //               0, -500,  // source from sheet
    //               1000, 800,
    //               -sb1 ,0,
    //               //-sb, 0,
    //               1000,
    //               800);

    var randplatx = -400;
    var randplaty = -450;

    // ctx.drawImage(this.platforms,
    //               randplatx, randplaty,  // source from sheet
    //               191 - randplatx, 31 - randplaty,
    //               -sb1 ,0,
    //               //-sb, 0,
    //               191 - randplatx,
    //               31 - randplaty);


    ctx.drawImage(this.spriteSheet,
                index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
                this.frameWidth, this.frameHeight,
                locX, locY,
                this.frameWidth * scaleBy,
                this.frameHeight * scaleBy);


}

function randoPlatform(ctx) {
    var randplatx = -20;
    var randplaty = -20;

    ctx.drawImage(this.platforms,
                  randplatx, randplaty,  // source from sheet
                  191 - randplatx, 31 - randplaty,
                  -sb1 ,0,
                  //-sb, 0,
                  191 - randplatx,
                  31 - randplaty);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

function Background(game) {
    Entity.call(this, game, 0, 400);
    this.radius = 200;
}

Background.prototype = new Entity();
Background.prototype.constructor = Background;

Background.prototype.update = function () {
}

Background.prototype.draw = function (ctx) {
    Entity.prototype.draw.call(this);
}

function Hero(game, heroSprite, backImage, groundImage) {
    this.animation = new Animation(heroSprite, backImage, groundImage, ASSET_MANAGER.getAsset("./img/platform.png"), 0, 0.096, 48, 47.004, 0.15 , 12, true, false);
    this.jumpAnimation = new Animation(heroSprite, ASSET_MANAGER.getAsset("./img/skybg.png"), ASSET_MANAGER.getAsset("./img/groundbg.png"), ASSET_MANAGER.getAsset("./img/platform.png"), 0, 96.096, 48, 47.004, 0.1, 6, false, false);
    this.rightWalkAnimation = new Animation(heroSprite, ASSET_MANAGER.getAsset("./img/skybg.png"), ASSET_MANAGER.getAsset("./img/groundbg.png"), ASSET_MANAGER.getAsset("./img/platform.png"), 0, 288.096, 48, 47.004, 0.1, 8, true, false);
    this.animationStandLeft = new Animation(heroSprite, ASSET_MANAGER.getAsset("./img/skybg.png"), ASSET_MANAGER.getAsset("./img/groundbg.png"), ASSET_MANAGER.getAsset("./img/platform.png"), 0, 48.096, 48, 47.004, 0.15, 12, true, true);
    this.jumpAnimationLeft = new Animation(heroSprite, ASSET_MANAGER.getAsset("./img/skybg.png"), ASSET_MANAGER.getAsset("./img/groundbg.png"), ASSET_MANAGER.getAsset("./img/platform.png"), 0, 144.096, 48, 47.004, 0.1, 6, false, true);
    this.leftWalkAnimation = new Animation(heroSprite, ASSET_MANAGER.getAsset("./img/skybg.png"), ASSET_MANAGER.getAsset("./img/groundbg.png"), ASSET_MANAGER.getAsset("./img/platform.png"), 0, 336.096, 48, 47.004, 0.1, 8, true, true);   
    this.radius = 100; 
    this.ground = 630;
    Entity.call(this, game, 0, 400);
}

Hero.prototype = new Entity();
Hero.prototype.constructor = Hero;

Hero.prototype.update = function () {
    if (this.game.space) this.jumping = true;
    if (this.jumping) {
        if (this.jumpAnimation.isDone()) {
            this.jumpAnimation.elapsedTime = 0;
            this.jumping = false;
        }
        var jumpDistance = this.jumpAnimation.elapsedTime / this.jumpAnimation.totalTime;
        var totalHeight = 100;

        if (jumpDistance > 0.5)
            jumpDistance = 1 - jumpDistance;

        //var height = jumpDistance * 2 * totalHeight;
        var height = totalHeight*(-4 * (jumpDistance * jumpDistance - jumpDistance));
        this.y = this.ground - height;
    }

    if (this.jumping && standLeft) {
        if (this.jumpAnimationLeft.isDone()) {
            this.jumpAnimationLeft.elapsedTime = 0;
            this.jumping = false;
        }
        var jumpDistance = this.jumpAnimationLeft.elapsedTime / this.jumpAnimationLeft.totalTime;
        var totalHeight = 100;

        if (jumpDistance > 0.5)
            jumpDistance = 1 - jumpDistance;

        //var height = jumpDistance * 2 * totalHeight;
        var height = totalHeight*(-4 * (jumpDistance * jumpDistance - jumpDistance));
        this.y = this.ground - height;
    }
    

    if (bgmove && this.game.walkRight) { 
        sb1 += 2;           // background movement lock
        sb2 += 2;
    }

    if (unlocked && this.game.walkRight) {
        this.x += 2;
    }

    if (unlocked && this.game.walkLeft) {
        this.x -= 2;
    }

    console.log("sb1: " + sb1 + " sb2: " + sb2 + " x: " + this.x);

    Entity.prototype.update.call(this);
}

Hero.prototype.draw = function (ctx) {
    if (sb1 > 1200) {
        sb1 = 0;
    }
    if (sb2 > 1200) {
        sb2 = 0;
    }
    if (this.x >= 500) {
        unlocked = false;
        bgmove = true;
    }
    if (this.x < 500) {
        unlocked = true;
        bgmove = false;
    }
    if (this.game.walkLeft && this.x > 5) {
        unlocked = true;
    }
    if (this.game.walkLeft && this.x < 5) {
        unlocked = false;
    }

    // if (standLeft) {
    //     unlocked = true;
    // } 
    // if (this.x < 5 && this.game.walkRight) {
    //     unlocked = false;
    // }

    if (this.jumping) {
        if (standLeft) {
            this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1.6);
        } else {
            this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1.6);
        }
    }    
    else if (this.game.walkRight) {
        standLeft = false;
        this.rightWalkAnimation.drawFrame(this.game.clockTick, ctx, this.x, 630, 1.6);

    } else if (this.game.walkLeft) {
        standLeft = true;
        this.leftWalkAnimation.drawFrame(this.game.clockTick, ctx, this.x, 630, 1.6);
    }
    else {
        if (standLeft) {
            this.animationStandLeft.drawFrame(this.game.clockTick, ctx, this.x, 630, 1.6);
        } else {
            this.animation.drawFrame(this.game.clockTick, ctx, this.x, 630, 1.6);
        }
    }

    Entity.prototype.draw.call(this);
}

// the "main" code begins here

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/RobotUnicorn.png");
ASSET_MANAGER.queueDownload("./img/mariosprite.png");
ASSET_MANAGER.queueDownload("./img/mariosprite2.png");
ASSET_MANAGER.queueDownload("./img/mariospriteleft.png");
ASSET_MANAGER.queueDownload("./img/skybg.png");
ASSET_MANAGER.queueDownload("./img/groundbg.png");
ASSET_MANAGER.queueDownload("./img/platform.png");


ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var mario = ASSET_MANAGER.getAsset("./img/mariosprite2.png");
    var world1 = ASSET_MANAGER.getAsset("./img/skybg.png");
    var ground1 = ASSET_MANAGER.getAsset("./img/groundbg.png");

    var gameEngine = new GameEngine();
    var bg = new Background(gameEngine);
    var unicorn = new Hero(gameEngine, mario, world1, ground1);

    gameEngine.addEntity(bg);
    gameEngine.addEntity(unicorn);
 
    gameEngine.init(ctx);
    gameEngine.start();
});