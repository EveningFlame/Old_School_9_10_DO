
function samusBoss(game, bossSprite, frameHeight, frameWidth, startX, startY, standingFrames, placeX, placeY, loop, speed, farLeft) {


    this.shooting = new AnimationSprite(bossSprite, startX, (startY * 3),
        frameWidth, frameHeight, speed, 6, true, false);

    this.animationFaceLeft = new AnimationSprite(bossSprite, startX, (startY * 1),
        frameWidth, frameHeight, speed, standingFrames, true, false);


    this.bossSprite = bossSprite;
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
    this.finishFiring = 4;
    this.up = true;

    this.boundingbox = new BoundingBox(this.x, this.y, this.frameWidth, this.frameHeight);

    Entity.call(this, game, placeX, placeY);


};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

samusBoss.prototype = new Entity();
samusBoss.prototype.constructor = Boss;

samusBoss.prototype.update = function () {
    if (this.game.totalDistance >= 10450) {
        this.appear = true;
    }

    this.x = this.x;
    if (this.up) {
        this.y -= 2; 
    } else if (!this.up) {
        this.y += 2;
    }

    if (this.y < 61) {
        this.up = false
    } else if (this.y > 515) {
        this.up = true;
    }
    if (getRandomInt(0, 30) === 3) {
        this.fire = true;
    } else {
        this.fire = false;
    }

    this.boundingbox = new BoundingBox(this.x + 30, this.y + 60, this.frameWidth + 75, this.frameHeight + 20);


    Entity.prototype.update.call(this);

};

samusBoss.prototype.draw = function (ctx) {

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
        if (this.fire) {
             var f1 = new Minion(this.game, this.bossSprite, 64, 96, 0, 105, 6, 8, 10880, this.y + 35, true, .15, 0, 0)
             this.game.addEntity(f1);
             this.game.baddies.push(f1);
        }
    } 

    ctx.globalAlpha = 1;
    Entity.prototype.draw.call(this);
};