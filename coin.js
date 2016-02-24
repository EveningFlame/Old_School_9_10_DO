 //coin
function Coin(game, sprite, frameHeight, frameWidth, startX, startY, frames, placeX, placeY, loop, speed) {

    this.spin = new AnimationSprite(sprite, startX, (startY * 0), frameWidth, frameHeight, speed, frames, loop, false);

    this.startX = startX;
    this.radius = frameHeight / 2;
    this.y = placeY;
    this.x = placeX;
    this.width = frameWidth;
    this.height = frameHeight;
    this.speed = speed;
    this.game = game;
    Entity.call(this, game, placeX, placeY);
};

Coin.prototype = new Entity();

Coin.prototype.constructor = Coin;

Coin.prototype.beginingX = function () {
    return this.x;
};

Coin.prototype.endingX = function () {
    return this.x + this.width;
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

    if (this.game.bgmove) {
        console.log(this.x);
        //console.log(defaultScroll - maxX);
        var newX = this.startX - (maxX - defaultScroll);
        console.log(newX);
        if (this.x <= newX) this.x = newX;
        //this.x = defaultScroll - maxX;
        this.spin.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
    } else {
        this.spin.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
    }

    Entity.prototype.draw.call(this);
};