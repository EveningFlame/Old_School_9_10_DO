// Boss
/* function Hero(game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset,
    heroHeight, standAnimation, walkAnimation, jumpAnimation, movementSpeed, scrollSpeed) { */
function linkBoss(game, bossSprite, frameHeight, frameWidth, startX, startY, standingFrames, placeX, placeY, loop, speed, farLeft) {

    this.shoot = new AnimationSprite(bossSprite, startX, (startY * 0),
        frameWidth, frameHeight, speed, standingFrames, true, false);

    this.animationFaceLeft = new AnimationSprite(bossSprite, startX, (startY),
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

    this.boundingbox = new BoundingBox(this.x, this.y, this.frameWidth, this.frameHeight);

    Entity.call(this, game, placeX, placeY);


};

linkBoss.prototype = new Entity();
linkBoss.prototype.constructor = Boss;

linkBoss.prototype.update = function () {
//console.log(this.game.totalDistance);
    if (this.game.totalDistance >= 10400) {
        this.appear = true;
        this.x = this.x;
        this.y = this.y;
    }

    this.boundingbox = new BoundingBox(this.x + 60, this.y + 62, this.frameWidth - 25, this.frameHeight + 30);

    Entity.prototype.update.call(this);
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

    if (this.appear) {
        this.animationFaceLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    }


    ctx.globalAlpha = 1;
    Entity.prototype.draw.call(this);
};