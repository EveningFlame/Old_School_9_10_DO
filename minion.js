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

    if (checkMinion(this, this.game) === 1) {
        this.moveRight = !this.moveRight;
    }

    if (this.farLeft === 0 && this.farRight === 0) {
        if (checkPlatform(this, this.game)) this.moveRight = !this.moveRight;
    }

    if (this.moveRight) {
        this.x += 1;
        if (this.x >= this.farRight && this.farRight > 0){
            this.moveRight = false;
        }
    } else {
        this.x -= 1;
        if (this.x <= this.farLeft && this.farLeft > 0){
            this.moveRight = true;
        }
    }
//    this.boundingbox = this.additionalWidthForBoundBox();
    this.boundingbox = new BoundingBox(this.x + 18 - this.game.maxX, this.y + 46, this.frameWidth + 4, this.frameHeight + 10);

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
