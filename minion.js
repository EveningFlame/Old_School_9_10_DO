/*
 * Minions
 */
function Minion(game, minionSprite, frameHeight, frameWidth, startX, startY,
    walking1, walking2, placeX, placeY, loop, speed, leftX, rightX) {
    this.isShot = false;

    if (frameHeight === 55.968) {

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

  
    } else if (frameHeight === 96) {
        use1 = true;
        this.animationWalkingLeft1 = new AnimationSprite(minionSprite, startX, (startY * 1),
                frameWidth, frameHeight, speed, walking1, loop, true);
        this.animationWalkingRight1 = new AnimationSprite(minionSprite, startX, (startY * 2),
                frameWidth, frameHeight, speed, walking1, loop, false);

    } else if (frameHeight == 97) {
        this.isShot = true;
        this.shot = new AnimationSprite(minionSprite, startX, (startY * 3),
                frameWidth, frameHeight, speed, 2, loop, false);
    }

    this.game = game;
    this.radius = frameHeight / 2;
    this.y = placeY;
    this.x = placeX;
    this.speed = speed;
    this.moveRight = false;
    this.farLeft = leftX;
    this.farRight = rightX;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.use1 = (walking1 > 0);
    this.boxes = false;
    this.name = "Baddies";

    this.boundingbox = new BoundingBox(this.x + 18 - this.game.maxX, this.y + 45, this.frameWidth + 4, this.frameHeight + 12);
    Entity.call(this, game, placeX, placeY);
};

Minion.prototype = new Entity();

Minion.prototype.constructor = Minion;

Minion.prototype.update = function () {

    if (this.frameHeight === 96 || this.frameHeight === 55.968) {

        if (checkMinion(this, this.game) === 1) {
            this.moveRight = !this.moveRight;
        }

        if (this.farLeft === 0 && this.farRight === 0) {
            if (checkPlatform(this, this.game)) this.moveRight = !this.moveRight;
        }

        if (this.moveRight) {
            if (this.frameHeight === 96) {
                this.x += 3;
            } else {
                this.x += 1;
            }
            if (this.x >= this.farRight && this.farRight > 0){
                this.moveRight = false;
            }
        } else {
            if (this.frameHeight === 96) {
                this.x -= 3;
            } else {
                this.x -= 1;
            }
            if (this.x <= this.farLeft && this.farLeft > 0){
                this.moveRight = true;
            }
        }
    } else if (this.frameHeight === 97) {
        this.x -= 3;
    }
//    this.boundingbox = this.additionalWidthForBoundBox();
    if (this.frameHeight === 55.968 || this.frameHeight === 96) {
        this.boundingbox = new BoundingBox(this.x + 18 - this.game.maxX, this.y + 46, this.frameWidth + 4, this.frameHeight + 10);
    } else if (this.frameHeight === 97) {
        this.boundingbox = new BoundingBox(this.x + 3 - this.game.maxX, this.y + 44, this.frameWidth - 20, this.frameHeight - 50);
    }
    

    for (var i = 0; i < this.game.baddies.length; i++) {
        if (this.game.baddies[i].boundingbox.right < 0) {
            this.game.baddies[i].removeFromWorld = true;
//            this.game.baddies.splice(i, 1);
        }
    }
    
    Entity.prototype.update.call(this);
};

Minion.prototype.draw = function (ctx) {

    if (this.boxes) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.boundingbox.x, this.boundingbox.y, this.boundingbox.width, this.boundingbox.height);
    }
    if (this.frameHeight === 96 || this.frameHeight === 55.968) {
        if (this.moveRight) {
            if (this.use1) {
                this.animationWalkingRight1.drawFrame(this.game.clockTick, ctx, this.x - this.game.maxX, this.y, 2);
            } else {
                this.animationWalkingRight2.drawFrame(this.game.clockTick, ctx, this.x - this.game.maxX, this.y, 2);
            }
        } else {
            if (this.use1) {
                this.animationWalkingLeft1.drawFrame(this.game.clockTick, ctx, this.x - this.game.maxX, this.y, 2);
            } else {
                this.animationWalkingLeft2.drawFrame(this.game.clockTick, ctx, this.x - this.game.maxX, this.y, 2);
            }
        }
    } else if (this.frameHeight === 97) {
        this.shot.drawFrame(this.game.clockTick, ctx, this.x - this.game.maxX, this.y, 1.2);
    }
    Entity.prototype.draw.call(this);
};

Minion.prototype.additionalWidthForBoundBox = function(){
    var newBox = null;
    //this.x + 18 - this.game.maxX, this.y + 46, this.frameWidth + 4, this.frameHeight + 10
    if(this.moveRight){
        
        newBox = new BoundingBox(this.x + 18 - this.game.maxX, this.y + 46, this.frameWidth + 8, this.frameHeight + 10);
    } else {
       newBox = new BoundingBox(this.x + 18 - this.game.maxX, this.y + 46, this.frameWidth + 4, this.frameHeight + 10);
    }        

        
    
    return newBox;
};
