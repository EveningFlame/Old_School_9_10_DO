//This file contains: Creature, Icon, and Buttons for all screens (aka: title, menu, gameOver, etc)
function Creature(game, critterSheet, frameHeight, frameWidth, startX, startY, fire, placeX, placeY, loop, name, speed) {

    this.action = new AnimationSprite(critterSheet, startX, (startY * 0), frameWidth, frameHeight, speed, fire, loop, false);
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.y = placeY;
    this.x = placeX;
    this.name = name;
    this.group = "title";
    this.radius = 30;
    if(this.name === "select"){
        this.paint = false;
    } else {
        this.paint = true;
    }
    
    this.velocity = { x: Math.random() * 112, y: Math.random() * 112 };	
    Entity.call(this, game, placeX, placeY);
};

Creature.prototype = new Entity();

Creature.prototype.constructor = Creature;

Creature.prototype.update = function () {
    if(this.name === "fairy"){
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
    
    if(this.paint){
        this.action.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    }
    
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
function Button(game, sprite, frameHeight, frameWidth, startX, startY, image, placeX, placeY, loop, name) {
    
    this.animation = new AnimationSprite(sprite, startX, (startY * 0), frameWidth, frameHeight, .7, image, loop, false);  
    this.gameE = game;
    this.width = frameWidth;
    this.height = frameHeight;
    this.y = placeY;
    this.x = placeX;
    this.group = "title";
    this.name = name;
    Entity.call(this, game, placeX, placeY);

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

Button.prototype.checkMouse = function(){
    var passed =  this.game.mouseX >= this.beginingX() && this.game.mouseX <= this.endingX()&&this.game.mouseY >= this.top() && this.game.mouseY <= this.bottom();
    this.game.mouseX = null;
    this.game.mouseY = null;
    return passed;
};

Button.prototype.update = function () {

    if (this.name === "play" && this.checkMouse()){ 
        this.game.introMusic.play();
//       gameOver(this.gameE);
        startMenu(this.gameE);//console.log("StartGame");//startGame();
    } else if(this.name === "start" && this.checkMouse()){
        startGame(this.gameE);
        this.game.introMusic.stop();
    } else if(this.name === "retry" && this.checkMouse()){
        this.game.introMusic.play();
        startMenu(this.gameE);
    }
    
    Entity.prototype.update.call(this);
};
Button.prototype.draw = function (ctx) {

    //.ctx.globalAlpha = 1;
    if(this.name === "start" && this.game.chosenCharacter !== null){
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    } else if(this.name !== "start") {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    }
    
    Entity.prototype.draw.call(this);
};

function Icon(game, minionSprite, frameHeight, frameWidth, startX, startY, placeX, placeY, loop, name, scale) {
    this.gameE = game;
    this.name = name;
    this.scale = 1;
    this.time = 0;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.y = placeY;
    this.x = placeX;
    this.group = "title";
    this.selected = false;
    this.minionSprite = minionSprite;
    
    if (name === "heart") {
        this.scale = scale;
        this.icon = new AnimationSprite(minionSprite, startX, startY, frameWidth, frameHeight, .5, 1, loop, false);
    } else {
        this.icon = new AnimationSprite(minionSprite, startX, (startY * 0), frameWidth, frameHeight, .5, 1, loop, false);
    }    
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

Icon.prototype.checkMouse = function(){
    return this.game.mouseX >= this.beginingX() && this.game.mouseX <= this.endingX()&&this.game.mouseY >= this.top() && this.game.mouseY <= this.bottom();
};

Icon.prototype.update = function () {
    // selectCharacter(x, y);
    if(this.name === "Mario" && this.checkMouse()){
        selectCharacter(this.game, this.name, 118, 35);
    } else if(this.name === "Link" && this.checkMouse()){
        selectCharacter(this.game, this.name, 0, 255);
    } else if(this.name === "Samus" && this.checkMouse()){
        selectCharacter(this.game, this.name, 252, 255);
    } else if(this.name === "Pikachu" && this.checkMouse()){
        selectCharacter(this.game, this.name, 118, 472);
    }

    //Prints out the right heart icon based on the game.heroLife
    if (!(this.game.heartIcon === null)) {
        switch (this.gameE.heroLife) {
            case 4:
                this.gameE.heartIcon.removeFromWorld = true;
                this.gameE.heartIcon = new Icon(this.gameE, this.gameE.hearts, 32, 32, 0, 32, 740, 0, true, "heart", 2);
                this.gameE.addEntity(this.gameE.heartIcon);
                break;
            case 3:
                this.gameE.heartIcon.removeFromWorld = true;
                this.gameE.heartIcon = new Icon(this.gameE, this.gameE.hearts, 32, 32, 0, 64, 740, 0, true, "heart", 2);
                this.gameE.addEntity(this.gameE.heartIcon);
                break;
            case 2:
                this.gameE.heartIcon.removeFromWorld = true;
                this.gameE.heartIcon = new Icon(this.gameE, this.gameE.hearts, 32, 32, 0, 96, 740, 0, true, "heart", 2);
                this.gameE.addEntity(this.gameE.heartIcon);
                break;
            case 1:
                this.gameE.heartIcon.removeFromWorld = true;
                this.gameE.heartIcon = new Icon(this.gameE, this.gameE.hearts, 32, 32, 0, 128, 740, 0, true, "heart", 2);
                this.gameE.addEntity(this.gameE.heartIcon);
                break;
            case 0:
                this.gameE.heartIcon.removeFromWorld = true;
                this.gameE.heartIcon = new Icon(this.gameE, this.gameE.hearts, 32, 32, 0, 160, 740, 0, true, "heart", 2);
                this.gameE.addEntity(this.gameE.heartIcon);
                break;
            default:
                this.gameE.heartIcon.removeFromWorld = true;
                this.gameE.heartIcon = null;
        }
    }

    if (this === this.gameE.gameOverScreen) {
        this.time += this.gameE.clockTick;
        //console.log(this.time);
        if (this.time > 4) {
            clearEngine(this.gameE);
            mainScreen(this.gameE);
        }
    }
    Entity.prototype.update.call(this);
};

Icon.prototype.draw = function (ctx) {

    this.icon.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
    
    
    Entity.prototype.draw.call(this);
};
