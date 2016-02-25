function Creature(game, critterSheet, frameHeight, frameWidth, startX, startY, fire, placeX, placeY, loop, name, speed) {

    this.action = new AnimationSprite(critterSheet, startX, (startY * 0), frameWidth, frameHeight, speed, fire, loop, false);
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.y = placeY;
    this.x = placeX;
    this.identity = name;
    this.group = "title";
    this.radius = 30;
    this.velocity = { x: Math.random() * 112, y: Math.random() * 112 };	
    Entity.call(this, game, placeX, placeY);
};

Creature.prototype = new Entity();

Creature.prototype.constructor = Creature;

Creature.prototype.update = function () {
    if(this.identity === "fairy"){
        this.x += this.velocity.x * this.game.clockTick;//.002;//this.game.clockTick;
        this.y += this.velocity.y * this.game.clockTick;//.002;//this.game.clockTick;
        
        
        
         if (this.collideLeft() || this.collideRight()) {
            this.velocity.x = -this.velocity.x;
            if (this.collideLeft()){
                this.x = -15;
            }
            if (this.collideRight()) {
                this.x = 800 - this.radius;
            }
            this.x += this.velocity.x * this.game.clockTick;
            this.y += this.velocity.y * this.game.clockTick;
        }

        if (this.collideTop() || this.collideBottom()) {
            this.velocity.y = -this.velocity.y;
            if (this.collideTop()) {
                this.y = -15;
            }
            if (this.collideBottom()) {
                this.y = 800 - this.radius;
            }
            this.x += this.velocity.x * this.game.clockTick;
            this.y += this.velocity.y * this.game.clockTick;
        }
    }
    Entity.prototype.update.call(this);
};

Creature.prototype.draw = function (ctx) {
    
    this.action.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
	
    Entity.prototype.draw.call(this);
};

Creature.prototype.collideLeft = function () {
    return (this.x - this.radius) < -45;
};

Creature.prototype.collideRight = function () {
    return (this.x + this.radius) > 800;
};

Creature.prototype.collideTop = function () {
    return (this.y - this.radius) < -45;
};

Creature.prototype.collideBottom = function () {
    return (this.y + this.radius) > 800;
};
/*
 * Basic Button
 */
// Icon(game, minionSprite, frameHeight, frameWidth, startX, startY, image, placeX, placeY, loop) {
function Button(game, minionSprite, frameHeight, frameWidth, startX, startY, image, placeX, placeY, loop) {
    
    this.animation = new AnimationSprite(minionSprite, startX, (startY * 0), frameWidth, frameHeight, .5, image, loop, false);  
    this.gameE = game;
    //this.icon = new AnimationSprite(minionSprite, startX, (startY * 0), frameWidth, frameHeight, .5, 1, loop, false);  
    this.width = frameWidth;
    this.height = frameHeight;
    this.y = placeY;
    this.x = placeX;
    this.group = "title";
    Entity.call(this, game, placeX, placeY);
//
//    this.startX = startX;
//    this.startY = startY;
//    this.width = width;
//    this.height = height;
//    this.x = placeX;
//    this.y = placeY;
//    Entity.call(this, game, placeX, placeY);
//    this.radius = height / 2;
};

Button.prototype = new Entity();

Button.prototype.constructor = Button;

Button.prototype.beginingX = function () {
    return this.x;
};

Button.prototype.endingX = function () {
    return this.x + this.width;
};

Button.prototype.top = function () {
    return this.y;
};

Button.prototype.bottom = function () {
    return this.y + this.height;
};

Button.prototype.update = function () {

    if (this.game.mouseX >= this.beginingX() && this.game.mouseX <= this.endingX()&&this.game.mouseY >= this.top() && this.game.mouseY <= this.bottom()){ 
        startMenu(this.gameE);//console.log("StartGame");
		//startGame(this.gameE);
    }
    Entity.prototype.update.call(this);
};
Button.prototype.draw = function (ctx) {

    //.ctx.globalAlpha = 1;
    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    Entity.prototype.draw.call(this);
};
