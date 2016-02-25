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
//        game.addEntity(coin1);
//    }
//}

startGame = function(game){
	
	console.log("HERE");
	for(var i = 0; i < game.entities.length; i++){
        game.entities[i].removeFromWorld = true;
    }
	
    var marioSprite = ASSET_MANAGER.getAsset("./img/mariosprite2.png");
    var world1 = ASSET_MANAGER.getAsset("./img/skybg2.png");
    var ground1 = ASSET_MANAGER.getAsset("./img/groundbg2.png");
    var platform = ASSET_MANAGER.getAsset("./img/platform.png");
    var Koopa = ASSET_MANAGER.getAsset("./img/koopa2.png");
    var pipe = ASSET_MANAGER.getAsset("./img/Pipe.png");
    var bowserSprite = ASSET_MANAGER.getAsset("./img/bowser2.png");
    var coinSprite = ASSET_MANAGER.getAsset("./img/pickup_coin.png");
    var starSprite = ASSET_MANAGER.getAsset("./img/star.png");
    
    var marioMusic = ASSET_MANAGER.getAsset("./music/mario_overworld_theme.mp3");

    
    var bg = new Platform(game, world1, 800, game.defaultGround, 0, 0, true);
    var gr = new Platform(game, ground1, 800, 95, 0, game.defaultGround, true);
    
/* 	function Hero(game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset,
    heroHeight, standAnimation, walkAnimation, jumpAnimation, movementSpeed, scrollSpeed) { */
    var hero = new Hero(game, marioSprite, 48, 48, 0, 48, 0.192, 95, 12, 8, 6, .1, 2.5);
	 
    /* 	function Boss(game, sprite, frameHeight, frameWidth, startX, startY, 
        stand, walking1, placeX, placeY, loop, speed, farLeft)  */
    var boss = new Boss(game, bowserSprite, 55.968, 55.968, 0, 55.968,
    4, 6, 1100, 595, true, 0.16, 500);

    var p1 = new Platform(game, platform, 190, 31, 1500, 600, false);
    var p2 = new Platform(game, platform, 190, 31, 1600, 500, false);
    var b1 = new Platform(game, platform, 31, 31, 1250, 674, false);
    var b2 = new Platform(game, platform, 160, 31, 2250, 674, false);
    var t1 = new Platform(game, pipe, 98, 150, 2281, 556, false);
    var b3 = new Platform(game, platform, 94, 31, 3025, 474, false);
    var t2 = new Platform(game, pipe, 98, 150, 3022, 325, false);
    var p3 = new Platform(game, platform, 190, 31, 3200, 400, false);

/* 	function Minion(game, minionSprite, frameHeight, frameWidth, startX, startY,
    walking1, walking2, placeX, placeY, loop, speed, leftX, rightX) { */
	
    var m1 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 1300, 595, true, .2, 1265, 2190);
    var m2 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 3250, 290, true, .2, 3180, 3331);
	

//    function Coin(game, minionSprite, frameHeight, frameWidth, startX, startY,
//    frames, placeX, placeY, loop, speed) {

   
    

    
	var sound = false;
	
	if(sound){
		var sound = new Howl({
			urls: ["./music/mario_overworld_theme.mp3"]
		}).play();
	}

    game.addEntity(gr);
    game.addEntity(bg);
    game.hero = hero;
    game.addEntity(hero);
	//Boss of the level
	game.addEntity(boss);

    game.addEntity(p1);
    game.addEntity(p2);
    game.addEntity(b1);
    game.addEntity(b2);
    game.addEntity(t1);
    game.addEntity(b3);
    game.addEntity(t2); 
    game.addEntity(p3);
    game.platforms.push(p1);
    game.platforms.push(p2);
    game.platforms.push(p3);
    game.platforms.push(b1);
    game.platforms.push(b2);
    game.platforms.push(b3);
    game.platforms.push(t1);
    game.platforms.push(t2);

    game.addEntity(m1);
    game.addEntity(m2);
    game.baddies.push(m1);
    game.baddies.push(m2);

    var star = new Coin(game, starSprite, 64, 40, 0, 0, 7, 1420, 460, true, 0.1, true);

    for (var i = 0; i < 5; i++) {
        var coin = new Coin(game, coinSprite, 32, 32, 0, 0, 20, 200 + (i * 50), 650, true, 0.09, false);   
        game.addEntity(coin);
        game.coins.push(coin);
    }

    for (var i = 0; i < 8; i++) {
        var coin = new Coin(game, coinSprite, 32, 32, 0, 0, 20, 1600 + (i * 50), 650, true, 0.09, false);   
        game.addEntity(coin);
        game.coins.push(coin);
    }



   game.addEntity(star);
   game.coins.push(star);

    
    //var coin1 = new Coin(game, coinSprite, 32, 32, 0, 0, 20, 200, 650, true, 0.09);

   
	
}

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/mariosprite2.png");
ASSET_MANAGER.queueDownload("./img/skybg2.png");
ASSET_MANAGER.queueDownload("./img/groundbg2.png");
ASSET_MANAGER.queueDownload("./img/platform.png");
ASSET_MANAGER.queueDownload("./img/koopa2.png");
ASSET_MANAGER.queueDownload("./img/Pipe.png");
ASSET_MANAGER.queueDownload("./img/bowser2.png");
ASSET_MANAGER.queueDownload("./img/pickup_coin.png");
ASSET_MANAGER.queueDownload("./img/star.png");
ASSET_MANAGER.queueDownload("./music/mario_overworld_theme.mp3");

//Title Screen
ASSET_MANAGER.queueDownload("./img/titleBackground.png");
ASSET_MANAGER.queueDownload("./img/pickachuCake.png");
ASSET_MANAGER.queueDownload("./img/title1.png");
ASSET_MANAGER.queueDownload("./img/title2.png");
ASSET_MANAGER.queueDownload("./img/title4.png");
ASSET_MANAGER.queueDownload("./img/linkFlute.png");
ASSET_MANAGER.queueDownload("./img/navi.png");
ASSET_MANAGER.queueDownload("./img/play.png");
ASSET_MANAGER.queueDownload("./img/marioFlagPole.png");
ASSET_MANAGER.queueDownload("./img/chibiSamus.png");
ASSET_MANAGER.queueDownload("./img/titleLogo.png");
ASSET_MANAGER.queueDownload("./img/pokeball.png");
ASSET_MANAGER.queueDownload("./img/metroid_prime.png");
ASSET_MANAGER.queueDownload("./img/mushroom.png");

//Main Menu
ASSET_MANAGER.queueDownload("./img/menu.png");
ASSET_MANAGER.queueDownload("./img/1marioIcon.png");
ASSET_MANAGER.queueDownload("./img/2pikachuIcon.png");
ASSET_MANAGER.queueDownload("./img/3linkIcon.png");
ASSET_MANAGER.queueDownload("./img/4samusIcon.png");


ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');
	var gameEngine = new GameEngine();
    
    var titleB = ASSET_MANAGER.getAsset("./img/titleBackground.png");
    var title = ASSET_MANAGER.getAsset("./img/title1.png");
    var title2 = ASSET_MANAGER.getAsset("./img/title2.png");
    var title3 = ASSET_MANAGER.getAsset("./img/title4.png");
    var titleLogo = ASSET_MANAGER.getAsset("./img/titleLogo.png");
    var play = ASSET_MANAGER.getAsset("./img/play.png");
    var linkF = ASSET_MANAGER.getAsset("./img/linkFlute.png");
    var fairy = ASSET_MANAGER.getAsset("./img/navi.png");
    var pikapika = ASSET_MANAGER.getAsset("./img/pickachuCake.png");
    var mario = ASSET_MANAGER.getAsset("./img/marioFlagPole.png");
    var samus = ASSET_MANAGER.getAsset("./img/chibiSamus.png");
    var poke = ASSET_MANAGER.getAsset("./img/pokeball.png");
    var metroid = ASSET_MANAGER.getAsset("./img/metroid_prime.png");
    var shroom = ASSET_MANAGER.getAsset("./img/mushroom.png");
    
    var tb = new Icon(gameEngine, titleB, 800, 800, 0, 800, 0, 0, true);
    var titleNinTen = new Icon(gameEngine, titleLogo, 42, 200, 0, 42, 5, 10, true);
    var titleLogo1 = new Icon(gameEngine, title, 96, 275, 0, 96, 250, 50, true);
    var titleLogo2 = new Icon(gameEngine, title2, 96, 600, 0, 96, 100, 150, true);
    var titleLogo3 = new Icon(gameEngine, title3, 97, 640, 0, 97, 75, 250, true);    
    var linkFlute = new Icon(gameEngine, linkF, 243, 200, 0, 243, 20, 350, true);
    var marioPole = new Icon(gameEngine, mario, 800, 258, 0, 800, 548, 0, true);
    var chibiSamus = new Icon(gameEngine, samus, 280, 195, 0, 280, 400, 480, true);
    var pokeball = new Icon(gameEngine, poke, 80, 80, 0, 80, 280, 520, true)
    
    var playButton = new Button(gameEngine, play, 60, 312, 0, 60, 2, 230, 400, true);
    
    var pikachu = new Creature(gameEngine, pikapika, 140, 345, 0, 140, 12, -20, 630, true, "pika", .5);
    var prime = new Creature(gameEngine, metroid, 85, 85, 0, 85, 2, 550, 30, true, "prime", .9);
    var shrooms = new Creature(gameEngine, shroom, 51, 150, 0, 51, 3, 27, 70, true, "shrooms", 1.5);
    
    gameEngine.addEntity(tb);
    gameEngine.addEntity(linkFlute);
    gameEngine.addEntity(marioPole);
    gameEngine.addEntity(chibiSamus);
    gameEngine.addEntity(pokeball);
    gameEngine.addEntity(prime);
    
    for(var i = 0; i < 8; i++){
        var navi = new Creature(gameEngine, fairy, 48, 48, 0, 48, 2, Math.random() * 500, Math.random() * 500, true, "fairy", .05);
        gameEngine.addEntity(navi);
    }
    
    gameEngine.addEntity(pikachu);
   
        
    gameEngine.addEntity(playButton);
    gameEngine.addEntity(titleNinTen);
    gameEngine.addEntity(shrooms);
    gameEngine.addEntity(titleLogo1);
    gameEngine.addEntity(titleLogo2);
    gameEngine.addEntity(titleLogo3);
 

    
    gameEngine.init(ctx);
    gameEngine.start();
});