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
    this.fallingLeft = new AnimationSprite(heroSprite, startX, (startY * 3) + charYOffset,
        frameWidth, frameHeight - charYOffset, movementSpeed, jumpAnimation / 2, false, true);
    this.fallingRight = new AnimationSprite(heroSprite, startX + (frameWidth * 3), (startY * 2) + charYOffset,
        frameWidth, frameHeight - charYOffset, movementSpeed, jumpAnimation / 2, false, false);

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
    this.jumping = false;
    this.falling = false;
    this.jumpHeight = game.defaultJumpHeight;
    this.boxes = true;
    this.heroMove = true;
    this.platform = game.platforms[0];

    this.boundingbox = new BoundingBox(this.x + 15, this.y + 20, this.animation.frameWidth + 4, this.animation.frameHeight + 28);
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
    var found = false;

    if (this.game.sb1 > 2380) {
        this.game.sb1 = 0;
    }

    if (this.game.walkLeft) {
        if (this.x > 5) {
            this.game.unlocked = true;
            this.heroMove = true;
        }
        if (this.x < 5 || checkPlatform(this.game)) {
            this.game.unlocked = false;
            this.heroMove = false;
        }
    } else {
        if (checkPlatform(this.game)) {
            this.game.unlocked = false;
            this.game.bgmove = false;
            this.heroMove = false;
        } else {
            this.heroMove = true;
            if (this.x >= this.game.defaultScroll) {
                this.game.unlocked = false;
                this.game.bgmove = true;
            }
            if (this.x < this.game.defaultScroll || this.game.totalDistance > 4600) {
                this.game.unlocked = true;
                this.game.bgmove = false;
            }
        }
    }

    for (var i = 0; i < this.game.platforms.length && !found; i++) {
        var pf = this.game.platforms[i];
        if (this.boundingbox.left > pf.boundingbox.left && this.boundingbox.right < pf.boundingbox.right &&
            this.boundingbox.top > pf.boundingbox.bottom) {
            this.jumpHeight = this.top() - pf.boundingbox.bottom;
            found = true;
        }

    }

    if (this.jumpHeight < 0) this.jumpHeight = this.game.defaultJumpHeight;
    if (this.jumpHeight > this.game.defaultJumpHeight && !found) this.jumpHeight = this.game.defaultJumpHeight;

    found = false;

    if (this.game.space && !this.jumping && !this.falling) {
        this.jumping = true;
        this.base = this.y;
        console.log(this.y);
    }
    if (this.jumping && !this.standLeft) {
        if (this.jumpAnimation.isDone()) {
            this.jumpAnimation.elapsedTime = 0;
            this.jumping = false;
            this.game.mjump = 0
        }
        var jumpDistance = this.jumpAnimation.elapsedTime / this.jumpAnimation.totalTime;
        var totalHeight = this.jumpHeight;
        this.game.mjump = 1;

        if (jumpDistance > 0.5) {
            jumpDistance = 1 - jumpDistance;
            this.game.mjump = -1;
        }
        var height = totalHeight * (-4 * (jumpDistance * jumpDistance - jumpDistance));
        this.lastBottom = this.boundingbox.bottom;
        this.y = this.base - height;
        this.boundingbox = new BoundingBox(this.x + 15, this.y + 20, this.jumpAnimation.frameWidth + 4, this.jumpAnimation.frameHeight + 28);
        for (var i = 0; i < this.game.platforms.length; i++) {
            var pf = this.game.platforms[i];
            if (this.boundingbox.collide(pf.boundingbox) && this.lastBottom < pf.boundingbox.top) {
                this.jumping = false;
                this.y = pf.boundingbox.top - this.heroHeight - 3;
                this.platform = pf;
                this.jumpAnimation.elapsedTime = 0;
            }
        }
    }

    if (this.jumping && this.standLeft) {
        if (this.jumpAnimationLeft.isDone()) {
            this.jumpAnimationLeft.elapsedTime = 0;
            this.jumping = false;
            this.game.mjump = 0;

        }
        var jumpDistance = this.jumpAnimationLeft.elapsedTime / this.jumpAnimationLeft.totalTime;
        var totalHeight = this.jumpHeight;
        this.game.mjump = 1;


        if (jumpDistance > 0.5) {
            jumpDistance = 1 - jumpDistance;
            this.game.mjump = -1;

        }
        var height = totalHeight * (4 * jumpDistance - 4 * jumpDistance * jumpDistance);
        this.lastBottom = this.boundingbox.bottom;
        this.y = this.base - height;
        this.boundingbox = new BoundingBox(this.x + 15, this.y + 20, this.jumpAnimationLeft.frameWidth + 4, this.jumpAnimationLeft.frameHeight + 28);
        console.log("checking jump bottom")
        for (var i = 0; i < this.game.platforms.length; i++) {
            var pf = this.game.platforms[i];
            if (this.boundingbox.collide(pf.boundingbox) && this.lastBottom < pf.boundingbox.top) {
                this.jumping = false;
                this.y = pf.boundingbox.top - this.heroHeight - 3;
                this.platform = pf;
                this.jumpAnimation.elapsedTime = 0;
            }
        }
    }

    if (this.falling) {
        this.lastBottom = this.boundingbox.bottom;
        this.y += this.game.clockTick / this.jumpAnimation.totalTime * 4 * this.jumpHeight;
        this.boundingbox = new BoundingBox(this.x + 15, this.y + 20, this.jumpAnimation.frameWidth + 4, this.jumpAnimation.frameHeight + 28);
        this.game.mjump = -1;
        for (var i = 0; i < this.game.platforms.length && !found; i++) {
            var pf = this.game.platforms[i];
            console.log(pf.top())
            if (this.boundingbox.collide(pf.boundingbox) && this.lastBottom < pf.boundingbox.top) {
                this.falling = false;
                this.y = pf.boundingbox.top - this.heroHeight - 3;
                this.platform = pf;
                this.fallingRight.elapsedTime = 0;
                this.game.mjump = 0;
                found = true;
            }
        }
    }

    if (!this.jumping && !this.falling) {
        this.boundingbox = new BoundingBox(this.x + 15, this.y + 20, this.animation.frameWidth + 4, this.animation.frameHeight + 28);
        if (this.platform != null) {
            if (this.boundingbox.left > this.platform.boundingbox.right || this.boundingbox.right < this.platform.boundingbox.left) this.falling = true;
        }
    }

    if (this.game.bgmove && this.game.walkRight) {
        this.game.sb1 += this.scrollSpeed;           // background movement lock
        //this.game.sb2 += this.scrollSpeed;
        this.game.coinMove += this.scrollSpeed;
        this.boundingbox = new BoundingBox(this.x + 15, this.y + 20, this.rightWalkAnimation.frameWidth + 4, this.rightWalkAnimation.frameHeight + 28);
    }

    if (this.game.unlocked && this.game.walkRight) {
        this.x += this.scrollSpeed;
        this.boundingbox = new BoundingBox(this.x + 15, this.y + 20, this.rightWalkAnimation.frameWidth + 4, this.rightWalkAnimation.frameHeight + 28);
    }

    if (this.game.unlocked && this.game.walkLeft) {
        this.x -= this.scrollSpeed;
        this.boundingbox = new BoundingBox(this.x + 15, this.y + 20, this.leftWalkAnimation.frameWidth + 4, this.leftWalkAnimation.frameHeight + 28);
    }

    var coinNum = checkCoin(this.game);
    if (coinNum >= 0) {
        if (this.game.coins[coinNum].isPowerup === true) {  
            this.game.poweredUp = true;
            this.game.powerUpMusic.play();
        } else {
            this.game.coinMusic.play();
        }
        this.game.coins[coinNum].removeFromWorld = true
        this.game.score += 1; 
        this.game.coins.splice(coinNum, 1);
    }

    var minionKill = checkMinion(this.game);
    if (minionKill > 0) {
        this.game.baddies[minionKill - 1].removeFromWorld = true;
        this.game.baddies.splice(minionKill - 1, 1);
    } else if (minionKill < 0) {
        console.log("mario dead");
    }

    Entity.prototype.update.call(this);
};

Hero.prototype.draw = function (ctx) {

    var yPlace = this.ground;

    if (this.jumping) {
        if (this.standLeft) {
            this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
            if (this.game.walkLeft) if (this.game.unlocked) this.game.totalDistance -= this.scrollSpeed;
        } else {
            this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
            if (this.game.walkRight) {
                if (this.heroMove) this.game.totalDistance += this.scrollSpeed;
                if (this.game.totalDistance > this.game.maxX) this.game.maxX += this.scrollSpeed;
            }
        }
    } else if (this.game.walkRight) {
        this.standLeft = false;
        this.rightWalkAnimation.drawFrame(this.game.clockTick, ctx, this.x, yPlace, 2);
        if (this.heroMove) this.game.totalDistance += this.scrollSpeed;
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
