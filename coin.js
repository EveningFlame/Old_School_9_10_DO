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
    this.boxes = true;
	this.name = "Coins";

    this.boundingbox = new BoundingBox(this.x, this.y, this.animation.frameWidth, this.animation.frameHeight);
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
    var i = 0;

    //Check to see if coins are off the screen
    while (this.game.coins.length >= 0 && i < this.game.length) {
        if (this.game.coins[i].endingX() < 0) {
            this.game.coins[i].removeFromWorld = true;
            this.game.coins.splice(i, 1);
        } else {
            i++;
        }

    }

    this.boundingbox = new BoundingBox(this.beginingX(), this.top(), this.animation.frameWidth, this.animation.frameHeight);

    Entity.prototype.update.call(this);
};

Coin.prototype.draw = function (ctx) {
    if (this.boxes) {
        ctx.strokeStyle = "blue";
        ctx.strokeRect(this.boundingbox.x, this.boundingbox.y, this.boundingbox.width, this.boundingbox.height);
    }
    this.animation.drawFrame(this.game.clockTick, ctx, this.beginingX(), this.y, this.scale);
    Entity.prototype.draw.call(this);
};
