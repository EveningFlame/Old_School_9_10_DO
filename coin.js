 //coin
function Coin(game, sprite,  frameWidth, frameHeight, startX, startY, frames, placeX, placeY, loop, speed, isPowerup, scale) {

    //this.spin = new AnimationSprite(sprite, startX, (startY * 0), frameWidth, frameHeight, speed, frames, loop, false);
    this.animation = new AnimationSprite(sprite, startX, startY, frameWidth, frameHeight, speed, frames, loop, false);
    this.startX = startX;
    this.radius = frameHeight / 2;
    this.y = placeY;
    this.x = placeX;
    this.isPowerup = isPowerup;
    this.width = frameWidth;
    this.height = frameHeight;
    this.speed = speed;
    this.scale = scale;
    this.game = game;
    Entity.call(this, game, placeX, placeY);
};

Coin.prototype = new Entity();

Coin.prototype.constructor = Coin;

Coin.prototype.beginingX = function () {
    return this.x - this.game.coinMove;
};

Coin.prototype.endingX = function () {
    return this.x + this.width - this.game.coinMove;
};

Coin.prototype.top = function () {
    return this.y;
};

Coin.prototype.bottom = function () {
    return this.y + this.height;
};

Coin.prototype.update = function () {
    Entity.prototype.update.call(this);
};

Coin.prototype.draw = function (ctx) {
    //this.spin.drawFrame(this.game.clockTick, ctx, this.x - this.game.coinMove, this.y, 3);
    this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.coinMove, this.y, this.scale);
    Entity.prototype.draw.call(this);

    // if (this.game.bgmove) {
    //     console.log(this.x);
    //     //console.log(defaultScroll - maxX);
    //     var newX = this.startX - (maxX - defaultScroll);
    //     console.log(newX);
    //     if (this.x <= newX) this.x = newX;
    //     //this.x = defaultScroll - maxX;
    //     this.spin.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
    // } else {
        // this.spin.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
    //}

    Entity.prototype.draw.call(this);
};
