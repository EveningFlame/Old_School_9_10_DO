function level2(game, Koopa, coinSprite, starSprite, linkbg, linkground, linkBossSprite) {
    var platform = ASSET_MANAGER.getAsset("./img/linkplat.png");
    var platWall = ASSET_MANAGER.getAsset("./img/linkplatform5High.png");
    var platWall9 = ASSET_MANAGER.getAsset("./img/linkplatform9High.png");
    var bg = new Platform(game, linkbg, 800, game.defaultGround, 0, 0, true, true);
    var boss = new linkBoss(game, linkBossSprite, 96, 96, 0, 96, 2, 660, 515, true, 0.16, 500);
    game.addEntity(bg);

    // var f1 = new Minion(game, linkBossSprite, 97, 97, 0, 96, 6, 8, 400, 500, true, .15, 0, 0)
    // game.addEntity(f1);
    // game.baddies.push(f1);

    // addPlatform(game, platform, 190, 30, 200, 540, false);



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
    
    addPlatform(game, platform, 60, 30, 10450, 430, false);
    addPlatform(game, platform, 60, 30, 10600, 590, false);
    addPlatform(game, platform, 60, 30, 10700, 530, false);


    for (var i = 0; i < 1; i++) {
        var gr = new Platform(game, linkground, 2560, 95, 2557 * i, game.defaultGround, false);
        console.log("adding ground");
        game.addEntity(gr);
        game.platforms.push(gr);
    }

    game.addEntity(boss);
    game.bigBoss = boss;
}