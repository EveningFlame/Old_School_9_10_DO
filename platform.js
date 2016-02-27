function Platform(game, platformSprite, width, height, startX, startY, scroll) {
    this.animation = new AnimationPlatform(platformSprite, width, height, startX, startY, scroll, game);

    this.startX = startX;
    this.startY = startY;
    this.width = width;
    this.height = height;
    this.game = game;
    this.radius = height / 2;
    this.boxes = true;

    this.boundingbox = new BoundingBox(startX - .5, startY, this.width + .5, this.height);
    Entity.call(this, game, startX, startY);
};

Platform.prototype = new Entity();

Platform.prototype.constructor = Platform;

Platform.prototype.beginingX = function () {
    return this.startX - this.game.maxX - .5;
};

Platform.prototype.endingX = function () {
    return this.startX + this.width - this.game.maxX;
};

Platform.prototype.top = function () {
    return this.startY;
};

Platform.prototype.bottom = function () {
    return this.startY + this.height;
};

Platform.prototype.update = function () {
    var i = 1;

    //Check to see if platforms are off the screen
    while (this.game.platforms.length >= 1 && i < this.game.length) {
        if (this.game.platforms[i].endingX() < 0) {
            this.game.platforms[i].removeFromWorld = true;
            this.game.platforms.splice(i, 1);
        } else {
            i++;
        }

    }

    this.boundingbox = new BoundingBox(this.beginingX(), this.top(), this.width + .5, this.height);
    Entity.prototype.update.call(this);
};

Platform.prototype.draw = function (ctx) {
    if (this.boxes) {
        ctx.strokeStyle = "orange";
        ctx.strokeRect(this.boundingbox.x, this.boundingbox.y, this.boundingbox.width, this.boundingbox.height);
    }
    this.animation.drawFrame(this.game.clockTick, ctx, 0, 0, 0);
    Entity.prototype.draw.call(this);
};