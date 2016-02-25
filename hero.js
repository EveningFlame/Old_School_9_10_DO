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

    this.standLeft;
    this.height = frameHeight;
    this.width = frameWidth;
    this.radius = 100;
    this.heroHeight = heroHeight;
    this.ground = game.defaultGround - heroHeight;
    this.x = startX;
    this.y = this.ground;
    this.game = game;
    this.scrollSpeed = scrollSpeed;
    this.speed = movementSpeed;
    this.jumpHeight = game.defaultJumpHeight;
    Entity.call(this, game, this.x, this.y);

};

Hero.prototype = new Entity();

Hero.prototype.constructor = Hero;

Hero.prototype.beginingX = function () {
    return this.x + 19.5;
};

Hero.prototype.endingX = function () {
    return this.x + this.width + 10.5;
};

Hero.prototype.top = function () {
    return this.y;
};

Hero.prototype.bottom = function () {
    return this.y + this.height;
};

Hero.prototype.update = function () {
    if (this.jumpHeight < 0) this.jumpHeight = this.game.defaultJumpHeight;

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

    if (this.jumping && this.standLeft) {
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

    if (this.game.bgmove && this.game.walkRight) {
        this.game.sb1 += this.scrollSpeed;           // background movement lock
        this.game.sb2 += this.scrollSpeed;
        this.game.coinMove += this.scrollSpeed;
    }

    if (this.game.unlocked && this.game.walkRight) {
        this.x += this.scrollSpeed;
    }

    if (this.game.unlocked && this.game.walkLeft) {
        this.x -= this.scrollSpeed;
    }

    var coinNum = checkCoin(this.game);
    if (coinNum >= 0) {
        if (this.game.coins[coinNum].isPowerup === true) {  
            this.game.poweredUp = true;
            console.log("STAR");
        }
        this.game.coins[coinNum].removeFromWorld = true
        this.game.score += 1; 
        this.game.coins.splice(coinNum, 1);
    }

    Entity.prototype.update.call(this);
};

Hero.prototype.draw = function (ctx) {

    var yPlace = this.ground;
    if (this.game.sb1 > 2400) {
        this.game.sb1 = 0;
    }
    if (this.game.sb2 > 2400) {
        this.game.sb2 = 0;
    }
    if (this.x >= this.game.defaultScroll) {
        this.game.unlocked = false;
        this.game.bgmove = true;
    }
    if (this.x < this.game.defaultScroll || this.game.totalDistance > 4600) {
        this.game.unlocked = true;
        this.game.bgmove = false;
    }
    if (this.game.walkLeft && this.x > 5) {
        this.game.unlocked = true;
    }
    if (this.game.walkLeft && this.x < 5) {
        this.game.unlocked = false;
    }

    if (this.jumping) {
        if (this.standLeft) {
            this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
            if (this.game.walkLeft) if (this.game.unlocked) this.game.totalDistance -= this.scrollSpeed;
        } else {
            this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
            if (this.game.walkRight) {
                this.game.totalDistance += this.scrollSpeed;
                if (this.game.totalDistance > this.game.maxX) this.game.maxX += this.scrollSpeed;
            }
        }
    } else if (this.game.walkRight) {
        this.standLeft = false;
        this.rightWalkAnimation.drawFrame(this.game.clockTick, ctx, this.x, yPlace, 2);
        this.game.totalDistance += this.scrollSpeed;
        if (this.game.totalDistance > this.game.maxX) this.game.maxX += this.scrollSpeed;
    } else if (this.game.walkLeft) {
        this.standLeft = true;
        this.leftWalkAnimation.drawFrame(this.game.clockTick, ctx, this.x, yPlace, 2);
        if (this.game.unlocked) this.game.totalDistance -= this.scrollSpeed;
    } else {
        if (this.standLeft) {
            this.animationStandLeft.drawFrame(this.game.clockTick, ctx, this.x, yPlace, 2);
        } else {
            this.animation.drawFrame(this.game.clockTick, ctx, this.x, yPlace, 2);
        }
    }

    Entity.prototype.draw.call(this);
};
