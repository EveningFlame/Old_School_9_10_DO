
function addMinion(game, minionSprite, frameHeight, frameWidth, startX, startY, walking1, walking2, placeX, placeY, loop, speed, leftX, rightX) {
    var minion = new Minion(game, minionSprite, frameHeight, frameWidth, startX, startY, walking1, walking2, placeX, placeY, loop, speed, leftX, rightX);
    game.addEntity(minion);
//    game.baddies.push(minion);
}

function addPlatformWall(game, platformSprite, platformWidth, platformHeight, platformX, platformY, scroll, wallHeight) {
    for (var i = 0; i < wallHeight; i++) {
        var plat = new Platform(game, platformSprite, platformWidth, platformHeight, platformX, platformY - (i * platformHeight), scroll);
        game.addEntity(plat);
//        game.platforms.push(plat);
    }
}

function addPlatform(game, platformSprite, platformWidth, platformHeight, platformX, platformY, scroll) {
    var plat = new Platform(game, platformSprite, platformWidth, platformHeight, platformX, platformY, scroll);
    game.addEntity(plat);
//    game.platforms.push(plat);
}

function addCoinStraightLine(game, coinSprite,  frameWidth, frameHeight, startX, startY, frames, placeX, placeY, loop, speed, isPowerup, scale, coinAmount) {
    for (var i = 0; i < coinAmount; i++) {
        var coin = new Coin(game, coinSprite, frameWidth, frameHeight, startX, startY, frames, placeX + (i * 50), placeY, loop, speed, isPowerup, scale);   
        game.addEntity(coin);
//        game.coins.push(coin);
    }
}

function addCoinArcDown(game, coinSprite,  frameWidth, frameHeight, startX, startY, frames, placeX, placeY, loop, speed, isPowerup, scale, coinAmount) {
    for (var i = 0; i < coinAmount; i++) {
        var coin = new Coin(game, coinSprite, frameWidth, frameHeight, startX, startY, frames, placeX + (i * 50), placeY + (i * 50), loop, speed, isPowerup, scale);   
        game.addEntity(coin);
//        game.coins.push(coin);
    }
}

function addCoinArcUp(game, coinSprite,  frameWidth, frameHeight, startX, startY, frames, placeX, placeY, loop, speed, isPowerup, scale, coinAmount) {
    for (var i = 0; i < coinAmount; i++) {
        var coin = new Coin(game, coinSprite, frameWidth, frameHeight, startX, startY, frames, placeX + (i * 50), placeY -(i * 50), loop, speed, isPowerup, scale);   
        game.addEntity(coin);
//        game.coins.push(coin);
    }
}


var ASSET_MANAGER = new AssetManager();

//Characters
ASSET_MANAGER.queueDownload("./img/mariosprite2.png");
ASSET_MANAGER.queueDownload("./img/linkSprite.png");

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
ASSET_MANAGER.queueDownload("./img/start.png");
ASSET_MANAGER.queueDownload("./img/naviCircle.png");
ASSET_MANAGER.queueDownload("./img/selectYourCharacter.png");

//Game Over
ASSET_MANAGER.queueDownload("./img/gameOver.png");
ASSET_MANAGER.queueDownload("./img/retry.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');
    var gameEngine = new GameEngine();

    mainScreen(gameEngine);

    gameEngine.init(ctx);
    gameEngine.start();
});

mainScreen = function (gameEngine) {
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
    var pokeball = new Icon(gameEngine, poke, 80, 80, 0, 80, 280, 520, true);
    var playButton = new Button(gameEngine, play, 60, 312, 0, 60, 2, 230, 400, true, "play");
    var pikachu = new Creature(gameEngine, pikapika, 140, 345, 0, 140, 12, -20, 630, true, "pika", .5);
    var prime = new Creature(gameEngine, metroid, 85, 85, 0, 85, 2, 550, 30, true, "prime", .9);
    var shrooms = new Creature(gameEngine, shroom, 51, 150, 0, 51, 3, 27, 70, true, "shrooms", 1.5);

    gameEngine.addEntity(tb);
    gameEngine.addEntity(linkFlute);
    gameEngine.addEntity(marioPole);
    gameEngine.addEntity(chibiSamus);
    gameEngine.addEntity(pokeball);
    gameEngine.addEntity(prime);

    for (var i = 0; i < 8; i++) {
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
}