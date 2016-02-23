var sb1 = 0;
var sb2 = 0;
var totalDistance = 0;
var maxX = 0;
var coinMove = 0;

var defaultGround = 705;
var defaultScroll = 250;
var defaultJumpHeight = 200;

var unlocked;
var bgmove;

var standLeft;


// Animation for both the coin and the powerup 

function Coin(game, pos_on_mapx, pos_on_mapy, coinSheet, frameWidth, frameHeight, frames, ispowerup) {
    this.ispowerup = ispowerup;
    this.width = frameWidth;
    this.height = frameHeight;
    this.animation = new AnimationSprite(coinSheet, 0, 0, frameWidth, frameHeight, 0.1, frames, true, false);
    Entity.call(this, game, pos_on_mapx, pos_on_mapy);
}

Coin.prototype = new Entity();
Coin.prototype.constructor = Coin;

Coin.prototype.draw = function (ctx) {

    this.animation.drawFrame(this.game.clockTick, ctx, this.x - coinMove, this.y);
    Entity.prototype.draw.call(this);
}

Coin.prototype.collide = function (other) {

    //JASON SAYS HE WILL DO IT 

}

Coin.prototype.update = function () {
    var ent = this.game.entities[0];
    for (var i = 0; i < this.game.entities.length; i++) {
        if (this.game.entities[i] instanceof Hero) {
            var ent = this.game.entities[i];
        }
    }
    
    if(this.collide(ent)) { //ent !== this &&
        if (this.ispowerup) {
            //do someting to mario // may need to use a global variable
        }
        this.removeFromWorld = true;      
    }
    Entity.prototype.update.call(this);
}

function addCoins(coinAmount, coins_posx, coins_posy, gameEngine, coinSprite) {
        for (var i = 0; i < coinAmount; i++) {
        var coin1 = new Coin(gameEngine, coins_posx + (i * 40), coins_posy, coinSprite, 32, 32, 20, false);
        gameEngine.addEntity(coin1);
    }
}



// platforms animation
function AnimationPlatform(image, frameWidth, frameHeight, imageX, imageY, imageScrolling) {
    this.image = image;
    this.width = frameWidth;
    this.height = frameHeight;
    this.imageX = imageX;
    this.imageY = imageY;
    this.scroll = imageScrolling;
    this.elapsedTime = 0;
};

AnimationPlatform.prototype.drawFrame = function (tick, ctx, x, y, scaleBy) {
    var scaleBy = scaleBy || 1;
    this.elapsedTime += tick;

    if (this.scroll) {
        ctx.drawImage(this.image,
                  sb2, 0,  // source from sheet
                  this.width, this.height,
                  this.imageX, this.imageY,
                  this.width, this.height
                  );

        ctx.drawImage(this.image,
                  sb1, 0,  // source from sheet
                  this.width, this.height,
                  this.imageX, this.imageY,
                  this.width, this.height
                  );
    } else if (maxX >= 250){
        ctx.drawImage(this.image,
            0, 0, this.width, this.height,
            this.imageX - maxX, this.imageY,
            this.width, this.height);
    } else {
        ctx.drawImage(this.image,
            0, 0, this.width, this.height,
            this.imageX, this.imageY,
            this.width, this.height);
    }
};
AnimationPlatform.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
};

AnimationPlatform.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
};

// sprites animation
function AnimationSprite(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) {
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
};

AnimationSprite.prototype.drawFrame = function (tick, ctx, x, y, scaleBy) {
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
    if(scaleBy === 3){
        console.log("HERE");
        scaleBy = 1;
    }
    ctx.drawImage(this.spriteSheet,
            index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
            this.frameWidth, this.frameHeight,
            locX, locY,
            this.frameWidth * scaleBy,
            this.frameHeight * scaleBy);
};

AnimationSprite.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
};

AnimationSprite.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
};

function Platform(game, platformSprite, width, height, startX, startY, scroll) {
    this.animation = new AnimationPlatform(platformSprite, width, height, startX, startY, scroll);
    this.startX = startX;
    this.startY = startY;
    this.width = width;
    this.height = height;
    Entity.call(this, game, startX, startY);
    this.radius = height / 2;
};

Platform.prototype = new Entity();

Platform.prototype.constructor = Platform;

Platform.prototype.beginingX = function () {
    return this.startX - maxX;
};

Platform.prototype.endingX = function () {
    return this.startY + this.width - maxX;
};

Platform.prototype.top = function () {
    return this.startY;
};

Platform.prototype.bottom = function () {
    return this.startY + this.height;
};

Platform.prototype.update = function () {
    Entity.prototype.update.call(this);
};

Platform.prototype.draw = function (ctx) {
    this.animation.drawFrame(this.game.clockTick, ctx, 0, 0, 0);
    Entity.prototype.draw.call(this);
};
/*
* Hero
* Game: the gameEngine that it will use
* heroSprite: The sprite sheet for the hero you want to use.
* standAnimation: the amount of animations in the hero's standing movement
* walkAnimation: the amount of animations in the hero's walking movement
* jumpAnimation: the amount of animations in the hero's jumping movement
*/
function Hero(game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset,
    heroHeight, standAnimation, walkAnimation, jumpAnimation, movementSpeed, scrollSpeed) {
    this.animation = new AnimationSprite(heroSprite, startX, (startY * 0) + charYOffset,
        frameWidth, frameHeight - charYOffset, movementSpeed, standAnimation, true, false);
    this.jumpAnimation = new AnimationSprite(heroSprite, startX, (startY * 2) + charYOffset,
        frameWidth, frameHeight - charYOffset, movementSpeed, jumpAnimation, false, false);
    this.rightWalkAnimation = new AnimationSprite(heroSprite, startX, (startY * 6) + charYOffset,
        frameWidth, frameHeight - charYOffset, movementSpeed, walkAnimation, true, false);
    this.animationStandLeft = new AnimationSprite(heroSprite, startX, startY + charYOffset,
        frameWidth, frameHeight - charYOffset, movementSpeed, standAnimation, true, true);
    this.jumpAnimationLeft = new AnimationSprite(heroSprite, startX, (startY * 3) + charYOffset,
        frameWidth, frameHeight - charYOffset, movementSpeed, jumpAnimation, false, true);
    this.leftWalkAnimation = new AnimationSprite(heroSprite, startX, (startY * 7) + charYOffset,
        frameWidth, frameHeight - charYOffset, movementSpeed, walkAnimation, true, true);
    this.radius = 100;
    this.heroHeight = heroHeight;
    this.ground = defaultGround - heroHeight;
    this.scrollSpeed = scrollSpeed;
    this.speed = movementSpeed;
    this.jumpHeight = defaultJumpHeight;
    Entity.call(this, game, 0, 400);
};

Hero.prototype = new Entity();
Hero.prototype.constructor = Hero;

Hero.prototype.update = function () {
    if (this.jumpHeight < 0) {
        this.jumpHeight = defaultJumpHeight;
    }

    if (this.game.space) this.jumping = true;
    if (this.jumping) {
        if (this.jumpAnimation.isDone()) {
            this.jumpAnimation.elapsedTime = 0;
            this.jumping = false;
        }
        var jumpDistance = this.jumpAnimation.elapsedTime / this.jumpAnimation.totalTime;
        var totalHeight = this.jumpHeight;

        if (jumpDistance > 0.5)
            jumpDistance = 1 - jumpDistance;

        var height = totalHeight * (-4 * (jumpDistance * jumpDistance - jumpDistance));
        this.y = this.ground - height;
    }

    if (this.jumping && standLeft) {
        if (this.jumpAnimationLeft.isDone()) {
            this.jumpAnimationLeft.elapsedTime = 0;
            this.jumping = false;
        }
        var jumpDistance = this.jumpAnimationLeft.elapsedTime / this.jumpAnimationLeft.totalTime;
        var totalHeight = this.jumpHeight;

        if (jumpDistance > 0.5)
            jumpDistance = 1 - jumpDistance;

        var height = totalHeight * (-4 * (jumpDistance * jumpDistance - jumpDistance));
        this.y = this.ground - height;
    }

    if (bgmove && this.game.walkRight) {
        sb1 += this.scrollSpeed;           // background movement lock
        sb2 += this.scrollSpeed;
        coinMove += this.scrollSpeed;
    }

    if (unlocked && this.game.walkRight) {
        this.x += this.scrollSpeed;
    }

    if (unlocked && this.game.walkLeft) {
        this.x -= this.scrollSpeed;
    }

    //console.log("sb1: " + sb1 + " sb2: " + sb2 + " x: " + this.x);

    Entity.prototype.update.call(this);
};

Hero.prototype.draw = function (ctx) {

    var yPlace = this.ground;
    if (sb1 > 2400) {
        sb1 = 0;
    }
    if (sb2 > 2400) {
        sb2 = 0;
    }
    if (this.x >= defaultScroll) {
        unlocked = false;
        bgmove = true;
    }
    if (this.x < defaultScroll || totalDistance > 4600) {
        unlocked = true;
        bgmove = false;
    }
    if (this.game.walkLeft && this.x > 5) {
        unlocked = true;
    }
    if (this.game.walkLeft && this.x < 5) {
        unlocked = false;
    }

    if (this.jumping) {
        if (standLeft) {
            this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
            if (this.game.walkLeft) if (unlocked) totalDistance -= this.scrollSpeed;
        } else {
            this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
            if (this.game.walkRight) {
                totalDistance += this.scrollSpeed;
                if (totalDistance > maxX) maxX += this.scrollSpeed;
            }
        }
    } else if (this.game.walkRight) {
        standLeft = false;
        this.rightWalkAnimation.drawFrame(this.game.clockTick, ctx, this.x, yPlace, 2);
        totalDistance += this.scrollSpeed;
        if (totalDistance > maxX) maxX += this.scrollSpeed;
    } else if (this.game.walkLeft) {
        standLeft = true;
        this.leftWalkAnimation.drawFrame(this.game.clockTick, ctx, this.x, yPlace, 2);
        if (unlocked) totalDistance -= this.scrollSpeed;
    } else {
        if (standLeft) {
            this.animationStandLeft.drawFrame(this.game.clockTick, ctx, this.x, yPlace, 2);
        } else {
            this.animation.drawFrame(this.game.clockTick, ctx, this.x, yPlace, 2);
        }
    }

    Entity.prototype.draw.call(this);
};

// Boss
/* function Hero(game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset,
    heroHeight, standAnimation, walkAnimation, jumpAnimation, movementSpeed, scrollSpeed) { */
function Boss(game, bossSprite, frameHeight, frameWidth, startX, startY, standingFrames,
    walkingFrames, placeX, placeY, loop, speed, farLeft) { 
	
	// sprites animation
/* function AnimationSprite(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) { */
	
	this.animation = new AnimationSprite(bossSprite, startX, (startY * 0),
        frameWidth, frameHeight, speed, standingFrames, true, false);
	
	this.walkAnimation = new AnimationSprite(bossSprite, startX, (startY * 2),
        frameWidth, frameHeight, speed, walkingFrames, true, false);
		
		
	/* this.animation = new AnimationSprite(heroSprite, startX, (startY * 0) + charYOffset,
        frameWidth, frameHeight - charYOffset, movementSpeed, standAnimation, true, false);	 */

		
    this.radius = frameHeight / 2;
    this.y = placeY;
    this.x = placeX;
    //this.heroHeight = heroHeight;
    //this.ground = defaultGround - heroHeight;
    //this.scrollSpeed = scrollSpeed;
    this.speed = speed;
    this.jumpHeight = defaultJumpHeight;
	this.entryCount = 0;
	this.moveRight = false;
	//his.offScreen = farRight;
	this.farLeft = farLeft;
    Entity.call(this, game, placeX, placeY);
	

};

Boss.prototype = new Entity();
Boss.prototype.constructor = Boss;

Boss.prototype.update = function () {
	//console.log(this.x);
	//console.log(maxX);
	if(totalDistance >= 4300 && this.entryCount === 0){
		this.x -= 2;
		this.moveRight = true;
		console.log("this.x: " + this.x + "     this.FarLeft: " + this.farLeft);
		if(this.x === this.farLeft){
			this.entryCount = 1;
			this.moveRight = false;
		}	
	}
	
    Entity.prototype.update.call(this);
};

Boss.prototype.draw = function (ctx) {
	//(tick, ctx, x, y, scaleBy)	
	//this.walkAnimation.drawFrame(this.game.clockTick, ctx, this.x - maxX, this.y, 2);
	if(this.moveRight){
		this.walkAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
	} else {
		this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
	}

    Entity.prototype.draw.call(this);
};
//function underPlatform(currentX, game) {

//}
/*
 * Minions
 */
function Minion(game, minionSprite, frameHeight, frameWidth, startX, startY,
    walking1, walking2, placeX, placeY, loop, speed, leftX, rightX) {

    if (walking1 > 0) {
        this.animationWalkingLeft1 = new AnimationSprite(minionSprite, startX, (startY * 0),
            frameWidth, frameHeight, speed, walking1, loop, false);
        this.animationWalkingRight1 = new AnimationSprite(minionSprite, startX, (startY * 1),
            frameWidth, frameHeight, speed, walking1, loop, true);
    }

    if (walking2 > 0) {
        this.animationWalkingLeft2 = new AnimationSprite(minionSprite, startX, (startY * 5),
            frameWidth, frameHeight, speed, walking2, loop, false);
        this.animationWalkingRight2 = new AnimationSprite(minionSprite, startX, (startY * 6),
            frameWidth, frameHeight, speed, walking2, loop, true);
    }

    this.radius = frameHeight / 2;
    this.y = placeY;
    this.x = placeX;
    this.speed = speed;
    this.moveRight = false;
    this.farLeft = leftX;
    this.farRight = rightX;
    this.use1 = (walking1 > 0);
    Entity.call(this, game, placeX, placeY);
};

Minion.prototype = new Entity();

Minion.prototype.constructor = Minion;

Minion.prototype.update = function () {

    if (this.moveRight) {
        this.x += 1;
        if (this.x >= this.farRight) this.moveRight = false;
    } else {
        this.x -= 1;
        if (this.x <= this.farLeft) this.moveRight = true;
    }

    //.log(this.x + "m x");
    Entity.prototype.update.call(this);
};

Minion.prototype.draw = function (ctx) {

    if (this.moveRight) {
        if (this.use1) {
            this.animationWalkingRight1.drawFrame(this.game.clockTick, ctx, this.x - maxX, this.y, 2);
        } else {
            this.animationWalkingRight2.drawFrame(this.game.clockTick, ctx, this.x - maxX, this.y, 2);
        }
    } else {
        if (this.use1) {
            this.animationWalkingLeft1.drawFrame(this.game.clockTick, ctx, this.x - maxX, this.y, 2);
        } else {
            this.animationWalkingLeft2.drawFrame(this.game.clockTick, ctx, this.x - maxX, this.y, 2);
        }
    }
    Entity.prototype.draw.call(this);
};


// the "main" code begins here

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/mariosprite2.png");
ASSET_MANAGER.queueDownload("./img/skybg2.png");
ASSET_MANAGER.queueDownload("./img/groundbg2.png");
ASSET_MANAGER.queueDownload("./img/platform.png");
ASSET_MANAGER.queueDownload("./img/koopa2.png");
ASSET_MANAGER.queueDownload("./img/Pipe.png");
ASSET_MANAGER.queueDownload("./img/bowser2.png");
ASSET_MANAGER.queueDownload("./img/pickup_coin.png");
ASSET_MANAGER.queueDownload("./img/star.png");
ASSET_MANAGER.queueDownload("./music/mario_overworld_theme.mp3");


ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var marioSprite = ASSET_MANAGER.getAsset("./img/mariosprite2.png");
    var world1 = ASSET_MANAGER.getAsset("./img/skybg2.png");
    var ground1 = ASSET_MANAGER.getAsset("./img/groundbg2.png");
    var platform = ASSET_MANAGER.getAsset("./img/platform.png");
    var Koopa = ASSET_MANAGER.getAsset("./img/koopa2.png");
    var pipe = ASSET_MANAGER.getAsset("./img/Pipe.png");
    var bowserSprite = ASSET_MANAGER.getAsset("./img/bowser2.png");
    var coinSprite = ASSET_MANAGER.getAsset("./img/pickup_coin.png");
    var starSprite = ASSET_MANAGER.getAsset("./img/star.png");
    
    var marioMusic = ASSET_MANAGER.getAsset("./music/mario_overworld_theme.mp3");

    var gameEngine = new GameEngine();
    var bg = new Platform(gameEngine, world1, 800, defaultGround, 0, 0, true);
    var gr = new Platform(gameEngine, ground1, 800, 95, 0, defaultGround, true);
    
/* 	function Hero(game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset,
    heroHeight, standAnimation, walkAnimation, jumpAnimation, movementSpeed, scrollSpeed) { */
    var hero = new Hero(gameEngine, marioSprite, 48, 48, 0, 48, 0.192, 95, 12, 8, 6, .1, 2.5);
	 
    /* 	function Boss(game, sprite, frameHeight, frameWidth, startX, startY, 
        stand, walking1, placeX, placeY, loop, speed, farLeft)  */
    var boss = new Boss(gameEngine, bowserSprite, 55.968, 55.968, 0, 55.968,
    4, 6, 1100, 595, true, 0.16, 500);

    var p1 = new Platform(gameEngine, platform, 190, 31, 1500, 600, false);
    var p2 = new Platform(gameEngine, platform, 190, 31, 1600, 500, false);
    var b1 = new Platform(gameEngine, platform, 31, 31, 1250, 674, false);
    var b2 = new Platform(gameEngine, platform, 160, 31, 2250, 674, false);
    var t1 = new Platform(gameEngine, pipe, 98, 150, 2281, 556, false);
    var b3 = new Platform(gameEngine, platform, 94, 31, 3025, 474, false);
    var t2 = new Platform(gameEngine, pipe, 98, 150, 3022, 325, false);
    var p3 = new Platform(gameEngine, platform, 190, 31, 3200, 400, false);

/* 	function Minion(game, minionSprite, frameHeight, frameWidth, startX, startY,
    walking1, walking2, placeX, placeY, loop, speed, leftX, rightX) { */
	
    var m1 = new Minion(gameEngine, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 1300, 595, true, .2, 1265, 2190);
    var m2 = new Minion(gameEngine, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 3250, 290, true, .2, 3180, 3331);
	

//    function Coin(game, minionSprite, frameHeight, frameWidth, startX, startY,
//    frames, placeX, placeY, loop, speed) {

    
    var powerup1 = new Coin(gameEngine, 1420, 460, starSprite, 64, 40, 7, true);

    
	var sound = false;
	
	if(sound){
		var sound = new Howl({
			urls: ["./music/mario_overworld_theme.mp3"]
		}).play();
	}

    gameEngine.addEntity(gr);
    gameEngine.addEntity(bg);
    gameEngine.addEntity(hero);
	//Boss of the level
	gameEngine.addEntity(boss);

    gameEngine.addEntity(p1);
    gameEngine.addEntity(p2);
    gameEngine.addEntity(b1);
    gameEngine.addEntity(b2);
    gameEngine.addEntity(t1);
    gameEngine.addEntity(b3);
    gameEngine.addEntity(t2); 
    gameEngine.addEntity(p3);

    gameEngine.addEntity(m1);
    gameEngine.addEntity(m2);

    gameEngine.addEntity(powerup1);

    addCoins(8, 100, 650, gameEngine, coinSprite);
    addCoins(5, 2500, 650, gameEngine, coinSprite);


   
    //gameEngine.addEntity(powerup1);
    
    gameEngine.init(ctx);
    gameEngine.start();
});
