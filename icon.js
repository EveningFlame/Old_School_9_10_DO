function Icon(game, minionSprite, frameHeight, frameWidth, startX, startY, placeX, placeY, loop, name) {
    this.gameE = game;
    
    this.icon = new AnimationSprite(minionSprite, startX, (startY * 0), frameWidth, frameHeight, .5, 1, loop, false);  
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.y = placeY;
    this.x = placeX;
    this.group = "title";
    this.name = name;
    Entity.call(this, game, placeX, placeY);
};

Icon.prototype = new Entity();
Icon.prototype.constructor = Icon;

Icon.prototype.beginingX = function () {
    return this.x;
};

Icon.prototype.endingX = function () {
    return this.x + this.frameWidth;
};

Icon.prototype.top = function () {
    return this.y;
};

Icon.prototype.bottom = function () {
    return this.y + this.frameHeight;
};

Icon.prototype.update = function () {
    
    if(this.name === "Mario"){
		
        if (this.gameE.mouseX >= this.beginingX() && this.gameE.mouseX <= this.endingX()&&this.gameE.mouseY >= this.top() && this.gameE.mouseY <= this.bottom()){ 
            //console.log(this.name);
			startGame(this.gameE);//console.log("StartGame");//startGame();
        }
    }       
    
    Entity.prototype.update.call(this);
};

Icon.prototype.draw = function (ctx) {    
    this.icon.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);	
    Entity.prototype.draw.call(this);
};

/* function marioButton(game, minionSprite, frameHeight, frameWidth, startX, startY, placeX, placeY, loop) {
    this.gameE = game;
    
    this.mBut = new AnimationSprite(minionSprite, startX, (startY * 0), frameWidth, frameHeight, .5, 1, loop, false);  
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.y = placeY;
    this.x = placeX;
    this.group = "title";
    this.name = name;
    Entity.call(this, game, placeX, placeY);
};

marioButton.prototype = new Entity();

marioButton.prototype.constructor = Button;

marioButton.prototype.beginingX = function () {
    return this.x;
};

marioButton.prototype.endingX = function () {
    return this.x + this.width;
};

marioButton.prototype.top = function () {
    return this.y;
};

marioButton.prototype.bottom = function () {
    return this.y + this.height;
};

marioButton.prototype.update = function () {

    if (this.game.mouseX >= this.beginingX() && this.game.mouseX <= this.endingX()&&this.game.mouseY >= this.top() && this.game.mouseY <= this.bottom()){ 
        
		//startGame(this.gameE);//console.log("StartGame");//startGame();
    }
    Entity.prototype.update.call(this);
};
marioButton.prototype.draw = function (ctx) {

    //.ctx.globalAlpha = 1;
    this.mBut.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    Entity.prototype.draw.call(this);
}; */