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
    
    
    // ctx.font = "36px serif";
    // ctx.strokeText("Score: ", 10, 40);
    // ctx.strokeText(this.game.score, 110, 40);
    
    // if (this.game.poweredUp) {
    //   //console.log(this.game.starTime);
    //     this.game.starTime -= this.game.clockTick;

    //     ctx.strokeText("IM SUPER", 300, 200);
    //     if (this.game.starTime < 0) {
    //       this.game.poweredUp = false;
    //       this.game.starTime = 50;
    //     }
    // }

    if (this.scroll) {
        // ctx.drawImage(this.image,
        //           this.game.sb2, 0,  // source from sheet
        //           this.width, this.height,
        //           this.imageX, this.imageY,
        //           this.width, this.height
        //           );

        ctx.drawImage(this.image,
                  this.game.sb1, 0,  // source from sheet
                  this.width, this.height,
                  this.imageX, this.imageY,
                  this.width, this.height
                  );
    } else if (this.game.maxX >= 250) {
        ctx.drawImage(this.image,
            0, 0, this.width, this.height,
            this.imageX - this.game.maxX, this.imageY,
            this.width, this.height);
    } else {
        ctx.drawImage(this.image,
            0, 0, this.width, this.height,
            this.imageX, this.imageY,
            this.width, this.height);
    }
};
AnimationPlatform.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
};

AnimationPlatform.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
};
