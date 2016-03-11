// Boss
/* function Hero(game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset,
    heroHeight, standAnimation, walkAnimation, jumpAnimation, movementSpeed, scrollSpeed) { */
function linkBoss(game, bossSprite, frameHeight, frameWidth, startX, startY, standingFrames, placeX, placeY, loop, speed, farLeft) {

    this.energyBall = new AnimationSprite(bossSprite, startX, (startY * 0),
        frameWidth, frameHeight, speed, standingFrames, true, false);

    this.shooting = new AnimationSprite(bossSprite, startX, (startY * 1),
        frameWidth, frameHeight, speed, 6, true, false);

    this.animationFaceLeft = new AnimationSprite(bossSprite, startX, (startY * 0),
        frameWidth, frameHeight, speed, standingFrames, true, false);


    /* this.animation = new AnimationSprite(heroSprite, startX, (startY * 0) + charYOffset,
        frameWidth, frameHeight - charYOffset, movementSpeed, standAnimation, true, false);	 */
 

    this.radius = frameHeight / 2;
    this.y = placeY;
    this.x = placeX;
    this.game = game;
    this.frameWidth = frameWidth
    this.frameHeight = frameHeight;
    this.speed = speed;
    this.bossBlink = false;
    this.blinkDone = 0;
    this.boxes = false;
    this.appear = false;
    this.fire = false;
    this.finishFiring = 4;;

    this.boundingbox = new BoundingBox(this.x, this.y, this.frameWidth, this.frameHeight);

    Entity.call(this, game, placeX, placeY);


};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

linkBoss.prototype = new Entity();
linkBoss.prototype.constructor = Boss;

linkBoss.prototype.update = function () {
//console.log(this.game.totalDistance);
    if (this.game.totalDistance >= 10400) {
        this.appear = true;
        this.x = this.x;
        this.y = this.y;
    }

    if (getRandomInt(0, 100) == 3) {
        this.fire = true;
        this.finishFiring = 4;
    } else if (this.finishFiring < 0) {
        this.fire = false;    
    }

    this.finishFiring -= 0.03;

    this.boundingbox = new BoundingBox(this.x + 60, this.y + 62, this.frameWidth - 25, this.frameHeight + 30);

    Entity.prototype.update.call(this);
    // console.log(this.finishFiring);
    // console.log(this.fire);
};

linkBoss.prototype.draw = function (ctx) {

    if (this.boxes) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.boundingbox.x, this.boundingbox.y, this.boundingbox.width, this.boundingbox.height);
    }

    if (this.bossBlink) {
        if (this.blinkDone % 5 === 0) {
            ctx.globalAlpha = this.blinkDone % 2;
        }
        this.blinkDone++;
        if (this.blinkDone >= 200) {
            this.bossBlink = false;
            this.blinkDone = 0;
        }
    }

    if (this.appear  && this.fire) {
        this.shooting.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    } else if (this.appear && !this.fire) {
        this.animationFaceLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    }

    ctx.globalAlpha = 1;
    Entity.prototype.draw.call(this);
};