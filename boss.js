// Boss
/* function Hero(game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset,
    heroHeight, standAnimation, walkAnimation, jumpAnimation, movementSpeed, scrollSpeed) { */
function Boss(game, bossSprite, frameHeight, frameWidth, startX, startY, standingFrames,
    walkingFrames, placeX, placeY, loop, speed, farLeft) {

    this.animationFaceRight = new AnimationSprite(bossSprite, startX, (startY * 0),
        frameWidth, frameHeight, speed, standingFrames, true, false);

    this.animationFaceLeft = new AnimationSprite(bossSprite, startX, (startY * 1),
        frameWidth, frameHeight, speed, standingFrames, true, false);


    this.walkAnimationLeft = new AnimationSprite(bossSprite, startX, (startY * 17),
        frameWidth, frameHeight, speed, walkingFrames, true, true);

    this.walkAnimationRight = new AnimationSprite(bossSprite, startX, (startY * 16),
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
    this.moveLeft = false;
    this.faceLeft = false;
    this.faceRight = false;
    //this.offScreen = farRight;
    this.farLeft = farLeft;
    this.boxes = false;

    this.boundingbox = new BoundingBox(this.x + 14, this.y, this.frameWidth, this.frameHeight);

    Entity.call(this, game, placeX, placeY);


};

Boss.prototype = new Entity();
Boss.prototype.constructor = Boss;

Boss.prototype.update = function () {
    //console.log(this.moveLeft);
    //console.log("this.x: " + this.x + "     Mario: " +  this.game.entities[17].x);
    if (this.game.totalDistance >= 10300 && this.entryCount === 0) {
        this.moveLeft = true;
        if (this.x  === this.game.entities[17].x) {
            //this.x -= 2;
            //this.entryCount = 1;
            this.moveLeft = false;
            this.moveRight = false;
            //this.moveLeft = false;
        } else if (this.x  > this.game.entities[17].x) {
            this.moveLeft = true;
            this.moveRight = false;
            this.faceLeft = true;
            this.faceRight = false;
            this.x -= 2;
        } else if (this.x  < this.game.entities[17].x) {
            this.moveRight = true;
            this.moveLeft = false;
            this.faceLeft = false;
            this.faceRight = true;
            this.x += 2;
        }
    }

    this.boundingbox = new BoundingBox(this.x + 14, this.y + 20, this.frameWidth + 30, this.frameHeight + 35);

    Entity.prototype.update.call(this);
};

Boss.prototype.draw = function (ctx) {

    if (this.boxes) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.boundingbox.x, this.boundingbox.y, this.boundingbox.width, this.boundingbox.height);
    }
    
    if (this.moveLeft) {
        this.walkAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    } else if (this.moveRight) {
        this.walkAnimationRight.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    } else if (this.faceLeft){
        this.animationFaceLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    } else if (this.faceRight) {
        this.animationFaceRight.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    }

    Entity.prototype.draw.call(this);
};
