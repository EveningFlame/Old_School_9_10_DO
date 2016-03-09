function level3(game, bowserSprite, metabg, metagr, coinSprite, starSprite, Koopa) {
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