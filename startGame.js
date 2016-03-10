
startGame = function(game){
	clearEngine(game);
    var metabg = ASSET_MANAGER.getAsset("./img/metabg.png"); 
    var metagr = ASSET_MANAGER.getAsset("./img/metagr.png"); 
    var linkground = ASSET_MANAGER.getAsset("./img/Level2ground.png");    
    var linkbg = ASSET_MANAGER.getAsset("./img/level2BG.png");
    var linkplat = ASSET_MANAGER.getAsset("./img/linkplat.png");
    var world1 = ASSET_MANAGER.getAsset("./img/skybg2.png");
    var ground1 = ASSET_MANAGER.getAsset("./img/groundbg2.png");
    var platform = ASSET_MANAGER.getAsset("./img/platform.png");
    var Koopa = ASSET_MANAGER.getAsset("./img/koopa2.png");
    var pipe = ASSET_MANAGER.getAsset("./img/Pipe.png");
    var bowserSprite = ASSET_MANAGER.getAsset("./img/bowser2.png");
    var coinSprite = ASSET_MANAGER.getAsset("./img/pickup_coin.png");
    var starSprite = ASSET_MANAGER.getAsset("./img/star.png");
    var platWall = ASSET_MANAGER.getAsset("./img/platform5High.png");
    var platWall9 = ASSET_MANAGER.getAsset("./img/platform9High.png");
    var marioMusic = ASSET_MANAGER.getAsset("./music/mario_overworld_theme.mp3");
    var spearowSprite = ASSET_MANAGER.getAsset("./img/Spearow.png");
//game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset, heroHeight, standAni, walkAni, jumpAni, movementSpeed, scrollSpeed, scale) { */
    if(game.chosenCharacter === "Mario"){
        var marioSprite = ASSET_MANAGER.getAsset("./img/mariosprite2.png");
        /* 	function Hero(game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset,
    heroHeight, standAnimation, walkAnimation, jumpAnimation, movementSpeed, scrollSpeed, scale) { */

        //SCROLL SPEED WARNING: the music is affected by scroll speed
        var hero = new Hero(game, marioSprite, 48, 48, 0, 48, 0.192, 95, 12, 8, 6, .1, 4, 2);//2.5);
        
    } else if(game.chosenCharacter === "Link"){
        var linkSprite = ASSET_MANAGER.getAsset("./img/linkSprite.png");
        /* 	function Hero(game, heroSprite, frameWidth, frameHeight, startX, startY, charYOffset,
        heroHeight, standAnimation, walkAnimation, jumpAnimation, movementSpeed, scrollSpeed, scale) { */
        var hero = new Hero(game, linkSprite, 96, 64, 0, 64, 0, 115, 13, 10, 5, .15, 4, 2);//2.5);
    } else if(game.chosenCharacter === "Pikachu"){
        var pikaSprite = ASSET_MANAGER.getAsset("./img/pikachuSprite.png");
        var hero = new Hero(game, pikaSprite, 64, 64, 0, 64, 0, 80, 7, 4, 5, .15, 4, 1.5);//2.5);
    } else if (game.chosenCharacter === "Samus"){
        var samusSprite = ASSET_MANAGER.getAsset("./img/samusSprite.png");
        var hero = new Hero(game, samusSprite, 64, 64, 0, 64, 0, 105, 3, 10, 8, .1, 4, 1.7);//2.5);
    }
    
game.hero = hero;

if (game.level == 2) {
    level2(game, bowserSprite, Koopa, coinSprite, starSprite, linkbg, linkground);
} else if (game.level == 3) {
    level3(game, bowserSprite, metabg, metagr, coinSprite, starSprite, Koopa, spearowSprite);
} else {
    level1(game, bowserSprite, world1, ground1, platform, platWall, Koopa, platWall9, pipe, coinSprite, starSprite, spearowSprite);
}


game.addEntity(hero);

//HEALTH  
   var heart = new Icon(game, game.hearts, 32, 32, 0, 32, 740, 0, true, "heart", 2); 
   game.addEntity(heart);
   game.heartIcon = heart;
//HEALTH

//SCORE / POWERUP CONTROL
   var score = new gameScore(game);
   game.addEntity(score);
//SCORE / POWERUP CONTROL
	
};
