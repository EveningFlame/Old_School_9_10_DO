
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
    
    
    //Boss of the level
    // game.addEntity(boss);
    // game.bigBoss = boss;

if (game.level == 2) {
    level2();
} else if (game.level == 3) {
    level3();
} else {
    level1();
}

function level1() {
    var boss = new Boss(game, bowserSprite, 55.968, 55.968, 0, 55.968,
    4, 6, 1100, 595, true, 0.16, 500);

    var bg = new Platform(game, world1, 800, game.defaultGround, 0, 0, true, true);
    for (var i = 0; i < 25; i++) {
        var gr = new Platform(game, ground1, 2650, 95, 800 * i, game.defaultGround, false);
        console.log("adding ground");
        game.addEntity(gr);
        game.platforms.push(gr);
    }
    game.addEntity(bg);
    //PLATFORMS
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
    //PLATFORMS//
    //WALLS//
    addPlatform(game, platWall, 30, 150, 4250, 554, false, 5);
    addPlatform(game, platWall, 30, 150, 4550, 554, false, 5);
    addPlatform(game, platWall, 30, 150, 4750, 554, false, 5);
    addPlatform(game, platWall, 30, 150, 4950, 554, false, 5);
    addPlatform(game, platWall, 30, 150, 5150, 554, false, 5);
    //WALLS//
    addPlatform(game, platform, 100, 30, 5480, 556, false);
    addPlatform(game, platform, 100, 30, 5580, 556, false);
    addPlatform(game, platform, 100, 30, 5680, 556, false);
    addPlatform(game, platform, 100, 30, 5780, 556, false);
    //WALLS//
    addPlatform(game, platWall, 30, 150, 6300, 554, false, 5);
    addPlatform(game, platWall, 30, 150, 6400, 504, false, 5);
    addPlatform(game, platWall, 30, 150, 6500, 454, false, 5);
    addPlatform(game, platWall, 30, 150, 6600, 404, false, 5);
    addPlatform(game, platWall, 30, 150, 6700, 354, false, 5);
    addPlatform(game, platWall, 30, 150, 6800, 304, false, 5);
    addPlatform(game, platWall, 30, 150, 6900, 254, false, 5);
    //WALLS//
    addPlatform(game, platform, 190, 10, 7500, 250, false);
    addPlatform(game, platform, 190, 10, 7690, 250, false);
    addPlatform(game, platform, 190, 10, 7880, 250, false);
    addPlatform(game, platform, 130, 10, 8070, 250, false);
    addPlatform(game, platWall, 30, 150, 8570, 554, false, 5);
    addPlatform(game, platform, 100, 30, 8600, 555, false);
    addPlatform(game, platWall, 30, 150, 8700, 434, false, 5);
    var m16 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 8800, 565, true, .15, 0, 0);
    addPlatform(game, platform, 130, 30, 8730, 435, false);
    addPlatform(game, platform, 130, 30, 8860, 435, false);
    addPlatform(game, platWall, 30, 150, 9020, 555, false, 5);
    var m12 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 9100, 565, true, .15, 0, 0);
    addPlatform(game, platform, 130, 30, 9120, 435, false);
    addPlatform(game, platWall, 30, 150, 9300, 555, false, 5);
    var m13 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 9400, 565, true, .15, 0, 0);
    addPlatform(game, platform, 130, 30, 9380, 435, false);
    addPlatform(game, platWall, 30, 150, 9550, 555, false, 5);
    var m14 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 9700, 565, true, .15, 0, 0);
    addPlatform(game, platform, 130, 30, 9640, 435, false);
    addPlatform(game, platWall, 30, 150, 9820, 555, false, 5);
    var m15 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 9850, 565, true, .15, 0, 0);
    addPlatform(game, platform, 130, 30, 9900, 435, false);
    addPlatform(game, platWall, 30, 150, 10060, 555, false, 5);
    var m17 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 10200, 565, true, .15, 0, 0);   
    addPlatform(game, platform, 130, 30, 10160, 435, false);
    addPlatform(game, platWall9, 30, 270, 10290, 434, false, 5);
    addPlatform(game, platform, 90, 30, 10700, 520, false);
    addPlatform(game, platform, 130, 30, 8600, 675, false);
    addPlatform(game, platform, 130, 30, 8730, 675, false);
    addPlatform(game, platform, 130, 30, 8860, 675, false);
    addPlatform(game, platform, 130, 30, 8990, 675, false);
    addPlatform(game, platform, 130, 30, 9120, 675, false);
    addPlatform(game, platform, 130, 30, 9250, 675, false);
    addPlatform(game, platform, 130, 30, 9380, 675, false);
    addPlatform(game, platform, 130, 30, 9510, 675, false);
    addPlatform(game, platform, 130, 30, 9640, 675, false);
    addPlatform(game, platform, 130, 30, 9670, 675, false);
    addPlatform(game, platform, 130, 30, 9800, 675, false);
    addPlatform(game, platform, 130, 30, 9930, 675, false);
    addPlatform(game, platform, 130, 30, 10060, 675, false);
    addPlatform(game, platform, 130, 30, 10190, 675, false);
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
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 1760, 480, true, 0.09, false, 3, 6);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 300, 480, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 400, 650, true, 0.09, false, 3, 6);
    addCoinArcDown(game, coinSprite, 32, 32, 0, 0, 20, 2070, 480, true, 0.09, false, 3, 4);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 5700, 650, true, 0.09, false, 3, 7);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 4380, 650, true, 0.09, false, 3, 2);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 4610, 650, true, 0.09, false, 3, 2);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 4810, 650, true, 0.09, false, 3, 2);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6294, 470, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6394, 420, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6494, 370, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6594, 320, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6694, 270, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6794, 220, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6894, 170, true, 0.09, false, 3, 1);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6994, 120, true, 0.09, false, 3, 1);
    addCoinArcDown(game, coinSprite, 32, 32, 0, 0, 20, 10350, 460, true, 0.09, false, 3, 4);
//COINS
//STARS   
    var star = new Coin(game, starSprite, 40, 40, 0, 0, 7, 3290, 350, true, 0.1, true, 3);
    game.addEntity(star);
    var star2 = new Coin(game, starSprite, 40, 40, 0, 0, 7, 7550, 200, true, 0.1, true, 3);
    game.addEntity(star2);
    var star3 = new Coin(game, starSprite, 40, 40, 0, 0, 7, 7650, 200, true, 0.1, true, 3);
    game.addEntity(star3);
    var star4 = new Coin(game, starSprite, 40, 40, 0, 0, 7, 7750, 200, true, 0.1, true, 3);
    game.addEntity(star4);
    var star5 = new Coin(game, starSprite, 40, 40, 0, 0, 7, 7850, 200, true, 0.1, true, 3);
    game.addEntity(star5);
    var star6 = new Coin(game, starSprite, 40, 40, 0, 0, 7, 7950, 200, true, 0.1, true, 3);
    game.addEntity(star6);
    var star7 = new Coin(game, starSprite, 40, 40, 0, 0, 7, 8050, 200, true, 0.1, true, 3);
    game.addEntity(star7);
//STARS
//MINIONS
    var m1 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 1300, 592, true, .2, 0, 0);
    var m2 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 3250, 287, true, .2, 3180, 3331);
    var m3 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 4400, 592, true, .2, 0, 0);
    var m4 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 4650, 592, true, .2, 0, 0);
    var m5 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 4850, 592, true, .2, 0, 0);
    var m6 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 5050, 592, true, .2, 0, 0);
    var m7 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 6600, 592, true, .2, 0, 0);
    var m8 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 6900, 592, true, .2, 0, 0);
    var m9 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 7600, 442, true, .15, 7500, 8125);
    var m10 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 7850, 442, true, .15, 7500, 8125);
    var m11 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 0, 8, 8100, 442, true, .15, 7500, 8125);
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
    game.addEntity(m12);
    game.addEntity(m13);
    game.addEntity(m14);
    game.addEntity(m15);
    game.addEntity(m16);
    game.addEntity(m17);
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
    game.baddies.push(m12);
    game.baddies.push(m13);
    game.baddies.push(m14);
    game.baddies.push(m15);
    game.baddies.push(m16);
    game.baddies.push(m17);

    game.addEntity(boss);
    game.bigBoss = boss;
//MINIONS
}

function level2() {
    var boss = new Boss(game, bowserSprite, 55.968, 55.968, 0, 55.968,
    4, 6, 1100, 595, true, 0.16, 500);
    var platform = ASSET_MANAGER.getAsset("./img/linkplat.png");
    var platWall = ASSET_MANAGER.getAsset("./img/linkplatform5High.png");
    var platWall9 = ASSET_MANAGER.getAsset("./img/linkplatform9High.png");
    var bg = new Platform(game, linkbg, 800, game.defaultGround, 0, 0, true, true);

    game.addEntity(bg);

    addPlatform(game, platform, 190, 30, 1000, 550, false);
    addPlatform(game, platWall, 30, 190, 1000, 550, false);
    addPlatform(game, platform, 190, 30, 1190, 550, false);
    addPlatform(game, platWall, 30, 190, 1190, 550, false);
    addPlatform(game, platform, 190, 30, 1380, 550, false);
    addPlatform(game, platWall, 30, 190, 1380, 550, false);
    addPlatform(game, platform, 190, 30, 1570, 550, false);
    addPlatform(game, platWall, 30, 190, 1570, 550, false);
    addPlatform(game, platform, 190, 30, 1760, 550, false);
    addPlatform(game, platWall, 30, 190, 1760, 550, false);  
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 1600, 520, true, 0.09, false, 3, 6);
    
    addPlatform(game, platWall9, 30, 270, 1950, 440, false);
    addPlatform(game, platform, 190, 30, 1950, 440, false);
    addPlatform(game, platWall9, 30, 270, 2140, 440, false);
    addPlatform(game, platform, 190, 30, 2140, 440, false);
    addPlatform(game, platWall9, 30, 270, 2330, 440, false);
    addPlatform(game, platform, 190, 30, 2330, 440, false);
    addPlatform(game, platWall9, 30, 270, 2520, 440, false);
    addPlatform(game, platform, 190, 30, 2520, 440, false);
    addPlatform(game, platWall9, 30, 270, 2710, 440, false);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 1960, 410, true, 0.09, false, 3, 14);

    for (var i = 0 ; i < 8; i++) {
        var m1 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 2800 + (i * 90), 590, true, .15, 0, 0);
        game.addEntity(m1);
        game.baddies.push(m1);
    }
    // var m1 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 2960, 590, true, .15, 0, 0);
    // game.addEntity(m1);
    // game.baddies.push(m1);
    // var m2 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 3000, 590, true, .15, 0, 0);
    // game.addEntity(m2);
    // game.baddies.push(m2);

    // var m3 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 3060, 590, true, .15, 0, 0);
    // game.addEntity(m3);
    // game.baddies.push(m3);

    // var m4 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 3120, 590, true, .15, 0, 0);
    // game.addEntity(m4);
    // game.baddies.push(m4);

    // var m5 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 2900, 590, true, .15, 0, 0);
    // game.addEntity(m5);
    // game.baddies.push(m5);

    // var m6 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 2840, 590, true, .15, 0, 0);
    // game.addEntity(m6);
    // game.baddies.push(m6);

    // var m7 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 3180, 590, true, .15, 0, 0);
    // game.addEntity(m7);
    // game.baddies.push(m7);

    // var m8 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 3240, 590, true, .15, 0, 0);
    // game.addEntity(m8);
    // game.baddies.push(m8);

    addPlatform(game, platWall, 30, 190, 3500, 550, false);
    addPlatform(game, platform, 190, 30, 3500, 550, false);
    var star = new Coin(game, starSprite, 40, 40, 0, 0, 7, 3590, 630, true, 0.1, true, 3);
    game.addEntity(star);
    addPlatform(game, platWall, 30, 190, 3690, 550, false);

    addPlatform(game, platWall9, 30, 270, 3730, 440, false);

    addPlatform(game, platWall, 30, 190, 3850, 350, false); 

    addPlatform(game, platWall, 30, 190, 4000, 300, false); 

    addPlatform(game, platWall, 30, 190, 4150, 300, false); 

    addPlatform(game, platWall, 30, 190, 4300, 300, false); 

    addPlatform(game, platWall, 30, 190, 4450, 300, false);

    addPlatform(game, platWall, 30, 190, 4600, 300, false); 

    addPlatform(game, platWall, 30, 190, 4750, 300, false); 

    addPlatform(game, platWall, 30, 190, 4900, 300, false);

    addPlatform(game, platWall, 30, 190, 5050, 350, false);

    addPlatform(game, platWall, 30, 190, 5200, 400, false);

    for (var i = 0 ; i <12; i++) {
        var m1 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 3750 + (i * 150), 590, true, .15, 0, 0);
        game.addEntity(m1);
        game.baddies.push(m1);
    }


    addPlatform(game, platWall, 30, 190, 5340, 550, false);
    addPlatform(game, platform, 190, 30, 5340, 550, false);
    var star1 = new Coin(game, starSprite, 40, 40, 0, 0, 7, 5430, 630, true, 0.1, true, 3);
    game.addEntity(star1);
    addPlatform(game, platWall, 30, 190, 5530, 550, false);


    addPlatform(game, platWall, 30, 30, 5700, 520, false);
    addPlatform(game, platform, 190, 30, 5700, 550, false);
    addPlatform(game, platform, 190, 30, 5890, 550, false);
    addPlatform(game, platform, 190, 30, 6080, 550, false);
    addPlatform(game, platform, 190, 30, 6270, 550, false);
    addPlatform(game, platform, 190, 30, 6460, 550, false);
    addPlatform(game, platWall, 30, 30, 6620, 520, false);

    var star2 = new Coin(game, starSprite, 40, 40, 0, 0, 7, 6730, 630, true, 0.1, true, 3);
    game.addEntity(star2);

    addPlatform(game, platWall, 30, 30, 6840, 520, false);
    addPlatform(game, platform, 190, 30, 6840, 550, false);
    addPlatform(game, platform, 190, 30, 7030, 550, false);
    addPlatform(game, platform, 190, 30, 7220, 550, false);
    addPlatform(game, platform, 190, 30, 7410, 550, false);
    addPlatform(game, platform, 190, 30, 7600, 550, false);
    addPlatform(game, platWall, 30, 30, 7760, 520, false);


    addPlatform(game, platform, 190, 30, 8000, 650, false);
    addPlatform(game, platform, 190, 30, 8000, 620, false);
    addPlatform(game, platform, 190, 30, 8000, 590, false);
    addPlatform(game, platform, 190, 30, 8000, 560, false);
    addPlatform(game, platform, 190, 30, 8000, 530, false);

    var m2 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 8300, 590, true, .15, 0, 0);
    game.addEntity(m2);
    game.baddies.push(m2);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 8200, 650, true, 0.09, false, 3, 6);

    addPlatform(game, platform, 190, 30, 8500, 650, false);
    addPlatform(game, platform, 190, 30, 8500, 620, false);
    addPlatform(game, platform, 190, 30, 8500, 590, false);
    addPlatform(game, platform, 190, 30, 8500, 560, false);
    addPlatform(game, platform, 190, 30, 8500, 530, false);

    var m3 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 8800, 590, true, .15, 0, 0);
    game.addEntity(m3);
    game.baddies.push(m3);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 8710, 650, true, 0.09, false, 3, 6);

    addPlatform(game, platform, 190, 30, 9000, 650, false);
    addPlatform(game, platform, 190, 30, 9000, 620, false);
    addPlatform(game, platform, 190, 30, 9000, 590, false);
    addPlatform(game, platform, 190, 30, 9000, 560, false);
    addPlatform(game, platform, 190, 30, 9000, 530, false);

    var m4 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 9300, 590, true, .15, 0, 0);
    game.addEntity(m4);
    game.baddies.push(m4);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 9210, 650, true, 0.09, false, 3, 6);

    addPlatform(game, platform, 190, 30, 9500, 650, false);
    addPlatform(game, platform, 190, 30, 9500, 620, false);
    addPlatform(game, platform, 190, 30, 9500, 590, false);
    addPlatform(game, platform, 190, 30, 9500, 560, false);
    addPlatform(game, platform, 190, 30, 9500, 530, false);

    var m5 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 9800, 590, true, .15, 0, 0);
    game.addEntity(m5);
    game.baddies.push(m5);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 9710, 650, true, 0.09, false, 3, 6);

    addPlatform(game, platform, 190, 30, 10000, 650, false);
    addPlatform(game, platform, 190, 30, 10000, 620, false);
    addPlatform(game, platform, 190, 30, 10000, 590, false);
    addPlatform(game, platform, 190, 30, 10000, 560, false);
    addPlatform(game, platform, 190, 30, 10000, 530, false);

    var m6 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 10300, 590, true, .15, 0, 0);
    game.addEntity(m6);
    game.baddies.push(m6);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 10210, 650, true, 0.09, false, 3, 6);

    addPlatform(game, platform, 190, 30, 10500, 650, false);
    addPlatform(game, platform, 190, 30, 10500, 620, false);
    addPlatform(game, platform, 190, 30, 10500, 590, false);
    addPlatform(game, platform, 190, 30, 10500, 560, false);
    addPlatform(game, platform, 190, 30, 10500, 530, false);

    var m7 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 10800, 590, true, .15, 0, 0);
    game.addEntity(m7);
    game.baddies.push(m7);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 10710, 650, true, 0.09, false, 3, 6);

    addPlatform(game, platform, 190, 30, 11000, 650, false);
    addPlatform(game, platform, 190, 30, 11000, 620, false);
    addPlatform(game, platform, 190, 30, 11000, 590, false);
    addPlatform(game, platform, 190, 30, 11000, 560, false);
    addPlatform(game, platform, 190, 30, 11000, 530, false);

    var m8 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 11300, 590, true, .15, 0, 0);
    game.addEntity(m8);
    game.baddies.push(m8);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 11210, 650, true, 0.09, false, 3, 6);

    addPlatform(game, platform, 190, 30, 11500, 650, false);
    addPlatform(game, platform, 190, 30, 11500, 620, false);
    addPlatform(game, platform, 190, 30, 11500, 590, false);
    addPlatform(game, platform, 190, 30, 11500, 560, false);
    addPlatform(game, platform, 190, 30, 11500, 530, false);


    for (var i = 0; i < 25; i++) {
        var gr = new Platform(game, linkground, 2560, 95, 2557 * i, game.defaultGround, false);
        console.log("adding ground");
        game.addEntity(gr);
        game.platforms.push(gr);
    }

    game.addEntity(boss);
    game.bigBoss = boss;
}

function level3() {
    var boss = new Boss(game, bowserSprite, 55.968, 55.968, 0, 55.968,
    4, 6, 1100, 595, true, 0.16, 500);
    var bg = new Platform(game, metabg, 800, game.defaultGround, 0, 0, true, true);
    game.addEntity(bg);
    var platform = ASSET_MANAGER.getAsset("./img/metaplatform.png");
    var platWall = ASSET_MANAGER.getAsset("./img/metaplatform5High.png");
    var platWall9 = ASSET_MANAGER.getAsset("./img/metaplatform9High.png");


    addCoinArcUp(game, coinSprite, 32, 32, 0, 0, 20, 805, 615, true, 0.09, false, 3, 10);
    addPlatform(game, platform, 190, 30, 800, 650, false);
    addPlatform(game, platform, 190, 30, 880, 620, false);
    addPlatform(game, platform, 190, 30, 960, 590, false);
    addPlatform(game, platform, 190, 30, 1040, 560, false);
    addPlatform(game, platform, 190, 30, 1120, 530, false);
    addPlatform(game, platform, 190, 30, 1200, 500, false);
    addPlatform(game, platform, 190, 30, 1280, 470, false);
    addPlatform(game, platform, 190, 30, 1360, 440, false);
    var star1 = new Coin(game, starSprite, 40, 40, 0, 0, 7, 1625, 450, true, 0.1, true, 3);
    game.addEntity(star1);
    addPlatform(game, platform, 190, 30, 1550, 500, false);
    addPlatform(game, platform, 190, 30, 1740, 440, false);
    addPlatform(game, platform, 190, 30, 1820, 470, false);
    addCoinArcDown(game, coinSprite, 32, 32, 0, 0, 20, 2010, 200, true, 0.09, false, 3, 10);
    addPlatform(game, platform, 190, 30, 1900, 500, false);
    addPlatform(game, platform, 190, 30, 1980, 530, false);
    addPlatform(game, platform, 190, 30, 2060, 560, false);
    addPlatform(game, platform, 190, 30, 2140, 590, false);
    addPlatform(game, platform, 190, 30, 2220, 620, false);
    addPlatform(game, platform, 190, 30, 2300, 650, false);

    addPlatform(game, platWall, 30, 30, 3000, 670, false);
    var m1 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 3100, 590, true, .15, 0, 0);
    game.addEntity(m1);
    game.baddies.push(m1);

    addPlatform(game, platWall, 30, 30, 3200, 670, false);
    var m2 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 3300, 590, true, .15, 0, 0);
    game.addEntity(m2);
    game.baddies.push(m2);

    addPlatform(game, platWall, 30, 30, 3400, 670, false);
    var m3 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 3500, 590, true, .15, 0, 0);
    game.addEntity(m3);
    game.baddies.push(m3);

    addPlatform(game, platWall, 30, 30, 3600, 670, false);
    var m4 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 3700, 590, true, .15, 0, 0);
    game.addEntity(m4);
    game.baddies.push(m4);

    addPlatform(game, platWall, 30, 30, 3800, 670, false);
    var m5 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 3900, 590, true, .15, 0, 0);
    game.addEntity(m5);
    game.baddies.push(m5);

    addPlatform(game, platWall, 30, 30, 4000, 670, false);
    var m6 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 4100, 590, true, .15, 0, 0);
    game.addEntity(m6);
    game.baddies.push(m6);

    addPlatform(game, platWall, 30, 30, 4200, 670, false);
    var m7 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 4300, 590, true, .15, 0, 0);
    game.addEntity(m7);
    game.baddies.push(m7);

    addPlatform(game, platWall, 30, 30, 4400, 670, false);

    addPlatform(game, platWall, 30, 190, 4600, 550, false);
    addPlatform(game, platWall, 30, 190, 4630, 500, false);
    addPlatform(game, platWall, 30, 190, 4660, 450, false);
    addPlatform(game, platWall, 30, 190, 4690, 400, false);
    addPlatform(game, platWall, 30, 190, 4720, 350, false);
    addPlatform(game, platWall, 30, 190, 4750, 300, false);

    addCoinArcUp(game, coinSprite, 32, 32, 0, 0, 20, 4700, 650, true, 0.09, false, 3, 5);





    for (var i = 0; i < 25; i++) {
        var gr = new Platform(game, metagr, 2560, 95, 800 * i, game.defaultGround, false);
        console.log("adding ground");
        game.addEntity(gr);
        game.platforms.push(gr);
    }

    game.addEntity(boss);
    game.bigBoss = boss;

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
