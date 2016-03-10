function gameScore(game) {
    this.animation = new gameScore1(game);
    Entity.call(this, game);
};

gameScore.prototype = new Entity();

gameScore.prototype.constructor = gameScore;

gameScore.prototype.update = function () {
    Entity.prototype.update.call(this);
};

gameScore.prototype.draw = function (ctx) {
    this.animation.drawFrame(this.game.clockTick, ctx, 0, 0, 0);
    Entity.prototype.draw.call(this);
};


function gameScore1(gameEngine) {
    this.game = gameEngine;
};

gameScore1.prototype.drawFrame = function (tick, ctx, x, y, scaleBy) {
    var scaleBy = scaleBy || 1;
    this.elapsedTime += tick;
    if (this.game.level == 3) {
        ctx.strokeStyle = 'white';
    }
    ctx.font = "36px serif";
    ctx.strokeText("Score: ", 10, 40);
    ctx.strokeText(this.game.score, 110, 40); 
    if (this.game.poweredUp) {
        this.game.starTime -= this.game.clockTick;
        
        ctx.strokeText("IM SUPER", 300, 200);
        if (this.game.starTime < 0) {
          this.game.poweredUp = false;
          if (this.game.level == 1) {
            this.game.themeMusic.play();
          } else if (this.game.level == 2) {
            this.game.linkThemeMusic.play();
          } else if (this.game.level == 3) {
            this.game.samusThemeMusic.play();
          } else {
            this.game.themeMusic.play();  ///CHANGE TO SAMUS
          }
          this.game.starTime = 14;
        }
    }

};
gameScore1.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
};

gameScore1.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
};