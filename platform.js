function Platform(game, platformSprite, width, height, startX, startY, scroll) {
    this.animation = new AnimationPlatform(platformSprite, width, height, startX, startY, scroll, game);

    this.startX = startX;
    this.startY = startY;
    this.width = width;
    this.height = height;
    this.game = game;
    this.radius = height / 2;

    Entity.call(this, game, startX, startY);
};

Platform.prototype = new Entity();

Platform.prototype.constructor = Platform;

Platform.prototype.beginingX = function () {
    return this.startX - this.game.maxX;
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
    Entity.prototype.update.call(this);
};

Platform.prototype.draw = function (ctx) {
    this.animation.drawFrame(this.game.clockTick, ctx, 0, 0, 0);
    Entity.prototype.draw.call(this);
};