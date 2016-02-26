
function addMinion(game, minionSprite, frameHeight, frameWidth, startX, startY, walking1, walking2, placeX, placeY, loop, speed, leftX, rightX) {
    var minion = new Minion(game, minionSprite, frameHeight, frameWidth, startX, startY, walking1, walking2, placeX, placeY, loop, speed, leftX, rightX);
    game.addEntity(minion);
    game.baddies.push(minion);
}

function addPlatformWall(game, platformSprite, platformWidth, platformHeight, platformX, platformY, scroll, wallHeight) {
    for (var i = 0; i < wallHeight; i++) {
        var plat = new Platform(game, platformSprite, platformWidth, platformHeight, platformX, platformY - (i * platformHeight), scroll);
        game.addEntity(plat);
        game.platforms.push(plat);
    }
}

function addPlatform(game, platformSprite, platformWidth, platformHeight, platformX, platformY, scroll) {
    var plat = new Platform(game, platformSprite, platformWidth, platformHeight, platformX, platformY, scroll);
    game.addEntity(plat);
    game.platforms.push(plat);
}

function addCoinStraightLine(game, coinSprite,  frameWidth, frameHeight, startX, startY, frames, placeX, placeY, loop, speed, isPowerup, scale, coinAmount) {
    for (var i = 0; i < coinAmount; i++) {
        var coin = new Coin(game, coinSprite, frameWidth, frameHeight, startX, startY, frames, placeX + (i * 50), placeY, loop, speed, isPowerup, scale);   
        game.addEntity(coin);
        game.coins.push(coin);
    }
}

function addCoinArcDown(game, coinSprite,  frameWidth, frameHeight, startX, startY, frames, placeX, placeY, loop, speed, isPowerup, scale, coinAmount) {
    for (var i = 0; i < coinAmount; i++) {
        var coin = new Coin(game, coinSprite, frameWidth, frameHeight, startX, startY, frames, placeX + (i * 50), placeY + (i * 50), loop, speed, isPowerup, scale);   
        game.addEntity(coin);
        game.coins.push(coin);
    }
}

function addCoinArcUp(game, coinSprite,  frameWidth, frameHeight, startX, startY, frames, placeX, placeY, loop, speed, isPowerup, scale, coinAmount) {
    for (var i = 0; i < coinAmount; i++) {
        var coin = new Coin(game, coinSprite, frameWidth, frameHeight, startX, startY, frames, placeX + (i * 50), placeY -(i * 50), loop, speed, isPowerup, scale);   
        game.addEntity(coin);
        game.coins.push(coin);
    }
}

startGame = function(game){
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
    
    var hearts = ASSET_MANAGER.getAsset("./img/hearts.png");

    
    var bg = new Platform(game, world1, 800, game.defaultGround, 0, 0, true);
    var gr = new Platform(game, ground1, 800, 95, 0, game.defaultGround, true);
    //var bg1 = new Platform(game, world1, 800, game.defaultGround, 4600, 0, true);
    var gr1 = new Platform(game, ground1, 800, 95, 4600, game.defaultGround, true);
    
/* 	function Hero(game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset,
    heroHeight, standAnimation, walkAnimation, jumpAnimation, movementSpeed, scrollSpeed) { */
    var hero = new Hero(game, marioSprite, 48, 48, 0, 48, 0.192, 95, 12, 8, 6, .1, 20);//2.5);
	 
/* 	function Boss(game, sprite, frameHeight, frameWidth, startX, startY, 
    stand, walking1, placeX, placeY, loop, speed, farLeft)  */
    var boss = new Boss(game, bowserSprite, 55.968, 55.968, 0, 55.968,
    4, 6, 1100, 595, true, 0.16, 500);




/* 	function Minion(game, minionSprite, frameHeight, frameWidth, startX, startY,
    walking1, walking2, placeX, placeY, loop, speed, leftX, rightX) { */

    var m1 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 1300, 595, true, .2, 1265, 2190);
    var m2 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 3250, 290, true, .2, 3180, 3331);
    var m3 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 4400, 595, true, .2, 4265, 4490);
    var m4 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 4650, 595, true, .2, 4570, 4680);
    var m5 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 4850, 595, true, .2, 4770, 4880);
    var m6 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 5050, 595, true, .2, 4970, 5080);
    var m7 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 6600, 595, true, .2, 6400, 6700);
    var m8 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 6900, 595, true, .2, 6800, 7000);
    var m9 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 7600, 445, true, .15, 7500, 7700);
    var m10 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 7850, 445, true, .15, 7750, 7950);
    var m11 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 8100, 445, true, .15, 8000, 8125);


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



//PLATFORMS
    //var p1 = new Platform(game, platform, 190, 3, 1500, 600, false);
    // var p2 = new Platform(game, platform, 190, 3, 1600, 500, false);
    // var b1 = new Platform(game, platform, 31, 31, 1250, 674, false);
    // var b2 = new Platform(game, platform, 160, 31, 2250, 674, false);
    // var t1 = new Platform(game, pipe, 98, 150, 2281, 556, false);
    // var b3 = new Platform(game, platform, 94, 31, 3025, 474, false);
    // var t2 = new Platform(game, pipe, 98, 150, 3022, 325, false);
    // var p3 = new Platform(game, platform, 190, 31, 3200, 400, false);

    addPlatform(game, platform, 190, 30, 1300, 600, false);
    addPlatform(game, platform, 190, 30, 1490, 550, false);
    addPlatform(game, platform, 190, 30, 1680, 520, false);
    addPlatform(game, platform, 190, 30, 1870, 520, false); 


    addPlatform(game, platform, 80, 30, 2660, 610, false);
    addPlatform(game, platform, 80, 30, 2740, 580, false);
    addPlatform(game, platform, 80, 30, 2820, 550, false);    
    addPlatform(game, platform, 80, 30, 2900, 520, false); 
    addPlatform(game, platform, 80, 30, 2980, 490, false); 
    addPlatform(game, platform, 80, 30, 3060, 460, false); 
    addPlatform(game, platform, 80, 30, 3140, 430, false); 
    addPlatform(game, platform, 190, 30, 3210, 400, false);  
    addPlatform(game, platform, 80, 30, 3390, 430, false); 
    addPlatform(game, platform, 80, 30, 3470, 460, false); 
    addPlatform(game, platform, 80, 30, 3550, 490, false); 
    addPlatform(game, platform, 80, 30, 3630, 520, false); 
    addPlatform(game, platform, 80, 30, 3710, 550, false);
    addPlatform(game, platform, 80, 30, 3790, 580, false);
    addPlatform(game, platform, 80, 30, 3870, 610, false);

    addPlatformWall(game, platform, 30, 30, 4250, 675, false, 5);
    addPlatformWall(game, platform, 30, 30, 4550, 675, false, 5);
    addPlatformWall(game, platform, 30, 30, 4750, 675, false, 5);
    addPlatformWall(game, platform, 30, 30, 4950, 675, false, 5);
    addPlatformWall(game, platform, 30, 30, 5150, 675, false, 5);

    addPlatform(game, platform, 100, 30, 5480, 556, false);
    addPlatform(game, platform, 100, 30, 5580, 556, false);
    addPlatform(game, platform, 100, 30, 5680, 556, false);
    addPlatform(game, platform, 100, 30, 5780, 556, false);

    addPlatformWall(game, platform, 30, 30, 6300, 675, false, 5);
    addPlatformWall(game, platform, 30, 30, 6400, 625, false, 5);
    addPlatformWall(game, platform, 30, 30, 6500, 575, false, 5);
    addPlatformWall(game, platform, 30, 30, 6600, 525, false, 5);
    addPlatformWall(game, platform, 30, 30, 6700, 475, false, 5);
    addPlatformWall(game, platform, 30, 30, 6800, 425, false, 5);
    addPlatformWall(game, platform, 30, 30, 6900, 375, false, 5);

    addPlatform(game, platform, 190, 10, 7500, 300, false);
    addPlatform(game, platform, 190, 10, 7690, 300, false);
    addPlatform(game, platform, 190, 10, 7880, 300, false);
    addPlatform(game, platform, 130, 10, 8070, 300, false);



//PLATFORMS

//PIPES
    addPlatform(game, pipe, 98, 150, 3250, 556, false);
    
    addPlatform(game, pipe, 98, 150, 5180, 556, false);

    addPlatform(game, pipe, 98, 150, 5380, 556, false);
    addPlatform(game, pipe, 98, 150, 5478, 406, false);
    addPlatform(game, pipe, 98, 150, 5576, 406, false);
    addPlatform(game, pipe, 98, 150, 5674, 406, false);
    addPlatform(game, pipe, 98, 150, 5772, 406, false);

    addPlatform(game, pipe, 98, 150, 7500, 556, false);
    addPlatform(game, pipe, 98, 150, 7598, 556, false);
    addPlatform(game, pipe, 98, 150, 7696, 556, false);
    addPlatform(game, pipe, 98, 150, 7794, 556, false);
    addPlatform(game, pipe, 98, 150, 7892, 556, false);
    addPlatform(game, pipe, 98, 150, 7990, 556, false);
    addPlatform(game, pipe, 98, 150, 8086, 556, false);





//PIPES
 

//COINS
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 1490, 480, true, 0.09, false, 3, 6);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 300, 480, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 400, 650, true, 0.09, false, 3, 6);
    addCoinArcDown(game, coinSprite, 32, 32, 0, 0, 20, 1785, 480, true, 0.09, false, 3, 4);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 5500, 650, true, 0.09, false, 3, 7);
    //addCoinArcUp(game, coinSprite, 32, 32, 0, 0, 20, 5900, 650, true, 0.09, false, 3, 10);

    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 4360, 650, true, 0.09, false, 3, 2);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 4560, 650, true, 0.09, false, 3, 2);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 4760, 650, true, 0.09, false, 3, 2);
    
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6039, 470, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6139, 420, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6239, 370, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6339, 320, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6439, 270, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6539, 220, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6639, 170, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6739, 120, true, 0.09, false, 3, 1);
//COINS

//STARS   
    var star = new Coin(game, starSprite, 64, 40, 0, 0, 7, 3020, 350, true, 0.1, true, 3);
    game.addEntity(star);
    game.coins.push(star);

    var star1 = new Coin(game, starSprite, 64, 40, 0, 0, 7, 6800, 200, true, 0.1, true, 3);
    game.addEntity(star1);
    game.coins.push(star1);

    var star2 = new Coin(game, starSprite, 64, 40, 0, 0, 7, 7300, 250, true, 0.1, true, 3);
    game.addEntity(star2);
    game.coins.push(star2);

    var star3 = new Coin(game, starSprite, 64, 40, 0, 0, 7, 7400, 250, true, 0.1, true, 3);
    game.addEntity(star3);
    game.coins.push(star3);

    var star4 = new Coin(game, starSprite, 64, 40, 0, 0, 7, 7500, 250, true, 0.1, true, 3);
    game.addEntity(star4);
    game.coins.push(star4);

    var star5 = new Coin(game, starSprite, 64, 40, 0, 0, 7, 7600, 250, true, 0.1, true, 3);
    game.addEntity(star5);
    game.coins.push(star5);

    var star6 = new Coin(game, starSprite, 64, 40, 0, 0, 7, 7700, 250, true, 0.1, true, 3);
    game.addEntity(star6);
    game.coins.push(star6);

    var star7 = new Coin(game, starSprite, 64, 40, 0, 0, 7, 7800, 250, true, 0.1, true, 3);
    game.addEntity(star7);
    game.coins.push(star7);
//STARS

//MINIONS
    game.addEntity(m1);
    game.addEntity(m2);
    game.addEntity(m3);
    game.addEntity(m4);
    game.addEntity(m5);
    game.addEntity(m6);
    game.addEntity(m7);
    game.addEntity(m8);
    game.addEntity(m9);
    game.addEntity(m10);
    game.addEntity(m11);
    game.baddies.push(m1);
    game.baddies.push(m2);
    game.baddies.push(m3);
    game.baddies.push(m4);
    game.baddies.push(m5);
    game.baddies.push(m6);
    game.baddies.push(m7);
    game.baddies.push(m8);
    game.baddies.push(m9);
    game.baddies.push(m10);
    game.baddies.push(m11);
//MINIONS

//HEALTH  
   var heart = new Icon(game, hearts, 32, 32, 0, 32, 740, 0, true, "heart", 2);  
   game.addEntity(heart);
//HEALTH

//SCORE / POWERUP CONTROL
   var score = new gameScore(game);
   game.addEntity(score);
//SCORE / POWERUP CONTROL
	
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
ASSET_MANAGER.queueDownload("./img/hearts.png");
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
