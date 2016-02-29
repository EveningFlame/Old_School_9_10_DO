// Boss
/* function Hero(game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset,
    heroHeight, standAnimation, walkAnimation, jumpAnimation, movementSpeed, scrollSpeed) { */
function Boss(game, bossSprite, frameHeight, frameWidth, startX, startY, standingFrames,
    walkingFrames, placeX, placeY, loop, speed, farLeft) {

    this.animation = new AnimationSprite(bossSprite, startX, (startY * 0),
        frameWidth, frameHeight, speed, standingFrames, true, false);

    this.walkAnimation = new AnimationSprite(bossSprite, startX, (startY * 2),
        frameWidth, frameHeight, speed, walkingFrames, true, false);


    /* this.animation = new AnimationSprite(heroSprite, startX, (startY * 0) + charYOffset,
        frameWidth, frameHeight - charYOffset, movementSpeed, standAnimation, true, false);	 */


    this.radius = frameHeight / 2;
    this.y = placeY;
    this.x = placeX;
    this.game = game;
    this.frameWidth = frameWidth
    this.frameHeight = frameHeight;
    //this.heroHeight = heroHeight;
    //this.ground = defaultGround - heroHeight;
    //this.scrollSpeed = scrollSpeed;
    this.speed = speed;
    this.jumpHeight = game.defaultJumpHeight;
    this.entryCount = 0;
    this.moveRight = false;
    //this.offScreen = farRight;
    this.farLeft = farLeft;
    this.boxes = false;

    this.boundingbox = new BoundingBox(this.x + 14, this.y, this.frameWidth, this.frameHeight);

    Entity.call(this, game, placeX, placeY);


};

Boss.prototype = new Entity();
Boss.prototype.constructor = Boss;

Boss.prototype.update = function () {
    if (this.game.totalDistance >= 10300 && this.entryCount === 0) {
        this.x -= 2;
        this.moveRight = true;
        console.log("this.x: " + this.x + "     this.FarLeft: " + this.farLeft);
        if (this.x === this.farLeft) {
            this.entryCount = 1;
            this.moveRight = false;
        }
    }

    this.boundingbox = new BoundingBox(this.x + 14, this.y + 20, this.frameWidth + 30, this.frameHeight + 35);

    Entity.prototype.update.call(this);
};

Boss.prototype.draw = function (ctx) {
    //(tick, ctx, x, y, scaleBy)	
    //this.walkAnimation.drawFrame(this.game.clockTick, ctx, this.x - maxX, this.y, 2);

    if (this.boxes) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.boundingbox.x, this.boundingbox.y, this.boundingbox.width, this.boundingbox.height);
    }
    if (this.moveRight) {
        this.walkAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    } else {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    }

    Entity.prototype.draw.call(this);
};
