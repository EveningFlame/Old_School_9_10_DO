// platforms animation
function AnimationPlatform(image, frameWidth, frameHeight, imageX, imageY, imageScrolling, gameEngine) {
    this.image = image;
    this.width = frameWidth;
    this.height = frameHeight;
    this.imageX = imageX;
    this.imageY = imageY;
    this.scroll = imageScrolling;
    this.game = gameEngine;
    this.elapsedTime = 0;
};

AnimationPlatform.prototype.drawFrame = function (tick, ctx, x, y, scaleBy) {
    var scaleBy = scaleBy || 1;
    this.elapsedTime += tick;

    if (this.scroll) {
        ctx.drawImage(this.image,
                  this.game.sb1, 0,  // source from sheet
                  this.width, this.height,
                  this.imageX, this.imageY,
                  this.width, this.height
                  );
    } else {
        ctx.drawImage(this.image,
            0, 0, this.width, this.height,
            x, y,
            this.width, this.height);
    }
};
AnimationPlatform.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
};

AnimationPlatform.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
};
