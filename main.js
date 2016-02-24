//// Animation for both the coin and the powerup 

//function Coin(game, pos_on_mapx, pos_on_mapy, coinSheet, frameWidth, frameHeight, frames, ispowerup) {
//    this.ispowerup = ispowerup;
//    this.width = frameWidth;
//    this.height = frameHeight;
//    this.animation = new AnimationSprite(coinSheet, 0, 0, frameWidth, frameHeight, 0.1, frames, true, false);
//    Entity.call(this, game, pos_on_mapx, pos_on_mapy);
//}

//Coin.prototype = new Entity();
//Coin.prototype.constructor = Coin;

//Coin.prototype.draw = function (ctx) {

//    this.animation.drawFrame(this.game.clockTick, ctx, this.x - coinMove, this.y);
//    Entity.prototype.draw.call(this);
//}

//Coin.prototype.collide = function (other) {

//    //JASON SAYS HE WILL DO IT 

//}

//Coin.prototype.update = function () {
//    var ent = this.game.entities[0];
//    for (var i = 0; i < this.game.entities.length; i++) {
//        if (this.game.entities[i] instanceof Hero) {
//            var ent = this.game.entities[i];
//        }
//    }

//    if (this.collide(ent)) { //ent !== this &&
//        if (this.ispowerup) {
//            //do someting to mario // may need to use a global variable
//        }
//        this.removeFromWorld = true;
//    }
//    Entity.prototype.update.call(this);
//}

//function addCoins(coinAmount, coins_posx, coins_posy, gameEngine, coinSprite) {
//    for (var i = 0; i < coinAmount; i++) {
//        var coin1 = new Coin(gameEngine, coins_posx + (i * 40), coins_posy, coinSprite, 32, 32, 20, false);
//        gameEngine.addEntity(coin1);
//    }
//}

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/mariosprite2.png");
ASSET_MANAGER.queueDownload("./img/skybg2.png");
ASSET_MANAGER.queueDownload("./img/groundbg2.png");
ASSET_MANAGER.queueDownload("./img/platform.png");
ASSET_MANAGER.queueDownload("./img/koopa2.png");
ASSET_MANAGER.queueDownload("./img/Pipe.png");
ASSET_MANAGER.queueDownload("./img/bowser2.png");
ASSET_MANAGER.queueDownload("./img/pickup_coin.png");
ASSET_MANAGER.queueDownload("./music/mario_overworld_theme.mp3");


ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var marioSprite = ASSET_MANAGER.getAsset("./img/mariosprite2.png");
    var world1 = ASSET_MANAGER.getAsset("./img/skybg2.png");
    var ground1 = ASSET_MANAGER.getAsset("./img/groundbg2.png");
    var platform = ASSET_MANAGER.getAsset("./img/platform.png");
    var Koopa = ASSET_MANAGER.getAsset("./img/koopa2.png");
    var pipe = ASSET_MANAGER.getAsset("./img/Pipe.png");
    var bowserSprite = ASSET_MANAGER.getAsset("./img/bowser2.png");
    var coinSprite = ASSET_MANAGER.getAsset("./img/pickup_coin.png");
    
    var marioMusic = ASSET_MANAGER.getAsset("./music/mario_overworld_theme.mp3");

    var gameEngine = new GameEngine();
    var bg = new Platform(gameEngine, world1, 800, gameEngine.defaultGround, 0, 0, true);
    var gr = new Platform(gameEngine, ground1, 800, 95, 0, gameEngine.defaultGround, true);
    
/* 	function Hero(game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset,
    heroHeight, standAnimation, walkAnimation, jumpAnimation, movementSpeed, scrollSpeed) { */
    var hero = new Hero(gameEngine, marioSprite, 48, 48, 0, 48, 0.192, 95, 12, 8, 6, .1, 2.5);
	 
    /* 	function Boss(game, sprite, frameHeight, frameWidth, startX, startY, 
        stand, walking1, placeX, placeY, loop, speed, farLeft)  */
    var boss = new Boss(gameEngine, bowserSprite, 55.968, 55.968, 0, 55.968,
    4, 6, 1100, 595, true, 0.16, 500);

    var p1 = new Platform(gameEngine, platform, 190, 31, 1500, 600, false);
    var p2 = new Platform(gameEngine, platform, 190, 31, 1600, 500, false);
    var b1 = new Platform(gameEngine, platform, 31, 31, 1250, 674, false);
    var b2 = new Platform(gameEngine, platform, 160, 31, 2250, 674, false);
    var t1 = new Platform(gameEngine, pipe, 98, 150, 2281, 556, false);
    var b3 = new Platform(gameEngine, platform, 94, 31, 3025, 474, false);
    var t2 = new Platform(gameEngine, pipe, 98, 150, 3022, 325, false);
    var p3 = new Platform(gameEngine, platform, 190, 31, 3200, 400, false);

/* 	function Minion(game, minionSprite, frameHeight, frameWidth, startX, startY,
    walking1, walking2, placeX, placeY, loop, speed, leftX, rightX) { */
	
    var m1 = new Minion(gameEngine, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 1300, 595, true, .2, 1265, 2190);
    var m2 = new Minion(gameEngine, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 3250, 290, true, .2, 3180, 3331);
	

//    function Coin(game, minionSprite, frameHeight, frameWidth, startX, startY,
//    frames, placeX, placeY, loop, speed) {

    var coin = new Coin(gameEngine, coinSprite, 32, 32, 0, 0, 20, 200, 650, true, 0.09);
    

    
	var sound = false;
	
	if(sound){
		var sound = new Howl({
			urls: ["./music/mario_overworld_theme.mp3"]
		}).play();
	}

    gameEngine.addEntity(gr);
    gameEngine.addEntity(bg);
    gameEngine.hero = hero;
    gameEngine.addEntity(hero);
	//Boss of the level
	gameEngine.addEntity(boss);

    gameEngine.addEntity(p1);
    gameEngine.addEntity(p2);
    gameEngine.addEntity(b1);
    gameEngine.addEntity(b2);
    gameEngine.addEntity(t1);
    gameEngine.addEntity(b3);
    gameEngine.addEntity(t2); 
    gameEngine.addEntity(p3);
    gameEngine.platforms.push(p1);
    gameEngine.platforms.push(p2);
    gameEngine.platforms.push(p3);
    gameEngine.platforms.push(b1);
    gameEngine.platforms.push(b2);
    gameEngine.platforms.push(b3);
    gameEngine.platforms.push(t1);
    gameEngine.platforms.push(t2);

    gameEngine.addEntity(m1);
    gameEngine.addEntity(m2);
    gameEngine.baddies.push(m1);
    gameEngine.baddies.push(m2);

    gameEngine.addEntity(coin);
    gameEngine.coins.push(coin);
    
    gameEngine.init(ctx);
    gameEngine.start();
});