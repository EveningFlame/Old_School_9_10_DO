function level3(game, bowserSprite, metabg, metagr, coinSprite, starSprite, Koopa, spearowSprite) {
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

    var s3 = new Minion(game, spearowSprite, 96 , 96, 0, 96, 6, 8, 4900, 350, true, .1, 0, 0);
    game.addEntity(s3);
    game.baddies.push(s3);

    var m19 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 4900, 590, true, .15, 0, 0);
    game.addEntity(m19);
    game.baddies.push(m19);

    addPlatform(game, platWall, 1, 1, 5020, 450, false);

    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 4670, 670, true, 0.09, false, 3, 6);

    addPlatform(game, platWall, 30, 190, 5000, 550, false);
    addPlatform(game, platWall, 30, 190, 5030, 500, false);
    addPlatform(game, platWall, 30, 190, 5060, 450, false);
    addPlatform(game, platWall, 30, 190, 5090, 400, false);
    addPlatform(game, platWall, 30, 190, 5120, 350, false);
    addPlatform(game, platWall, 30, 190, 5150, 300, false);

    var s4 = new Minion(game, spearowSprite, 96 , 96, 0, 96, 6, 8, 5250, 350, true, .1, 0, 0);
    game.addEntity(s4);
    game.baddies.push(s4);

    var m20 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 5250, 590, true, .15, 0, 0);
    game.addEntity(m20);
    game.baddies.push(m20);

    addPlatform(game, platWall, 1, 1, 5420, 450, false);

    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 5070, 670, true, 0.09, false, 3, 6);

    addPlatform(game, platWall, 30, 190, 5400, 550, false);
    addPlatform(game, platWall, 30, 190, 5430, 500, false);
    addPlatform(game, platWall, 30, 190, 5460, 450, false);
    addPlatform(game, platWall, 30, 190, 5490, 400, false);
    addPlatform(game, platWall, 30, 190, 5520, 350, false);
    addPlatform(game, platWall, 30, 190, 5550, 300, false);

    var s5 = new Minion(game, spearowSprite, 96 , 96, 0, 96, 6, 8, 5700, 350, true, .1, 0, 0);
    game.addEntity(s5);
    game.baddies.push(s5);

    var m21 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 5700, 590, true, .15, 0, 0);
    game.addEntity(m21);
    game.baddies.push(m21);

    addPlatform(game, platWall, 1, 1, 5820, 450, false);

    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 5470, 670, true, 0.09, false, 3, 6);

    addPlatform(game, platWall, 30, 190, 5800, 550, false);
    addPlatform(game, platWall, 30, 190, 5830, 500, false);
    addPlatform(game, platWall, 30, 190, 5860, 450, false);
    addPlatform(game, platWall, 30, 190, 5890, 400, false);
    addPlatform(game, platWall, 30, 190, 5920, 350, false);
    addPlatform(game, platWall, 30, 190, 5950, 300, false);

    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 5870, 670, true, 0.09, false, 3, 6);

    addPlatform(game, platWall, 30, 30, 6100, 650, false);
    
    addPlatform(game, platform, 190, 30, 6100, 300, false);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6100, 270, true, 0.09, false, 3, 4);
    
    var m9 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 6300, 590, true, .15, 0, 0);
    game.addEntity(m9);
    game.baddies.push(m9);
    
    addPlatform(game, platform, 190, 30, 6370, 300, false);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6370, 270, true, 0.09, false, 3, 4);

    var m10 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 6400, 590, true, .15, 0, 0);
    game.addEntity(m10);
    game.baddies.push(m10);
    
    addPlatform(game, platform, 190, 30, 6640, 300, false);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6640, 270, true, 0.09, false, 3, 4);

    
    var m11 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 6500, 590, true, .15, 0, 0);
    game.addEntity(m11);
    game.baddies.push(m11);
    
    addPlatform(game, platform, 190, 30, 6910, 300, false);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 6910, 270, true, 0.09, false, 3, 4);
    
    var m12 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 6600, 590, true, .15, 0, 0);
    game.addEntity(m12);
    game.baddies.push(m12);
    
    addPlatform(game, platform, 190, 30, 7180, 300, false);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 7180, 270, true, 0.09, false, 3, 4);
    
    var m13 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 6700, 590, true, .15, 0, 0);
    game.addEntity(m13);
    game.baddies.push(m13);
    
    addPlatform(game, platform, 190, 30, 7450, 300, false);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 7450, 270, true, 0.09, false, 3, 4);
    
    var m14 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 6800, 590, true, .15, 0, 0);
    game.addEntity(m14);
    game.baddies.push(m14);
    
    addPlatform(game, platform, 190, 30, 7720, 300, false);
    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 7720, 270, true, 0.09, false, 3, 4);
    
    var m15 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 6900, 590, true, .15, 0, 0);
    game.addEntity(m15);
    game.baddies.push(m15);
    
    addPlatform(game, platWall, 30, 30, 7880, 650, false);

    addCoinArcUp(game, coinSprite, 32, 32, 0, 0, 20, 8400, 670, true, 0.09, false, 3, 6);
    addCoinArcDown(game, coinSprite, 32, 32, 0, 0, 20, 8700, 470, true, 0.09, false, 3, 5);
    addCoinArcUp(game, coinSprite, 32, 32, 0, 0, 20, 9000, 670, true, 0.09, false, 3, 6);
    addCoinArcDown(game, coinSprite, 32, 32, 0, 0, 20, 9300, 470, true, 0.09, false, 3, 5);

    addPlatform(game, platWall9, 30, 240, 9600, 250, false);
    addPlatform(game, platWall9, 30, 250, 9600, 0, false);

    addPlatform(game, platWall, 30, 30, 9600, 620, false);
    addPlatform(game, platform, 190, 30, 9600, 650, false);
    addPlatform(game, platform, 190, 30, 9790, 650, false);
    addPlatform(game, platform, 190, 30, 9980, 650, false);
    addPlatform(game, platform, 190, 30, 10170, 650, false);
    addPlatform(game, platform, 190, 30, 10360, 650, false);
    addPlatform(game, platform, 190, 30, 10550, 650, false);
    addPlatform(game, platform, 190, 30, 10740, 650, false);
    addPlatform(game, platform, 190, 30, 10930, 650, false);
    addPlatform(game, platform, 190, 30, 11120, 650, false);
    addPlatform(game, platform, 190, 30, 11310, 650, false);

    addPlatform(game, platform, 190, 30, 9600, 0, false);
    addPlatform(game, platform, 190, 30, 9790, 0, false);
    addPlatform(game, platform, 190, 30, 9980, 0, false);
    addPlatform(game, platform, 190, 30, 10170, 0, false);
    addPlatform(game, platform, 190, 30, 10360, 0, false);
    addPlatform(game, platform, 190, 30, 10550, 0, false);
    addPlatform(game, platform, 190, 30, 10740, 0, false);
    addPlatform(game, platform, 190, 30, 10930, 0, false);
    addPlatform(game, platform, 190, 30, 11120, 0, false);
    addPlatform(game, platform, 190, 30, 11310, 0, false);

    addCoinStraightLine(game, coinSprite, 32, 32, 0, 0, 20, 9800, 100, true, 0.09, false, 3, 35);

    var s1 = new Minion(game, spearowSprite, 96 , 96, 0, 96, 6, 8, 10200, 110, true, .1, 0, 0);
    game.addEntity(s1);
    game.baddies.push(s1);
    var s2 = new Minion(game, spearowSprite, 96 , 96, 0, 96, 6, 8, 10800, 0, true, .1, 0, 0);
    game.addEntity(s2);
    game.baddies.push(s2);

    addPlatform(game, platform, 100, 30, 9750, 500, false);
    addPlatform(game, platform, 100, 30, 9800, 400, false);
    addPlatform(game, platform, 190, 30, 9900, 350, false);
    addPlatform(game, platform, 190, 30, 10090, 350, false);
    addPlatform(game, platform, 190, 30, 10280, 350, false);
    addPlatform(game, platform, 190, 30, 10470, 350, false);
    addPlatform(game, platform, 190, 30, 10660, 350, false);
    addPlatform(game, platform, 190, 30, 10850, 350, false);
    addPlatform(game, platform, 190, 30, 11040, 350, false);
    addPlatform(game, platform, 100, 30, 11230, 350, false);

    addPlatform(game, platform, 80, 30, 11400, 500, false);


    addPlatform(game, platWall, 30, 190, 11500, 0, false);

    addPlatform(game, platWall9, 30, 280, 11500, 410, false);

    var m16 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 10000, 540, true, .15, 0, 0);
    game.addEntity(m16);
    game.baddies.push(m16);

    var m17 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 10300, 540, true, .15, 0, 0);
    game.addEntity(m17);
    game.baddies.push(m17);

    var m18 = new Minion(game, Koopa, 55.968, 40.032, 0, 55.968, 6, 8, 10600, 540, true, .15, 0, 0);
    game.addEntity(m18);
    game.baddies.push(m18);




    for (var i = 0; i < 25; i++) {
        var gr = new Platform(game, metagr, 2560, 95, 800 * i, game.defaultGround, false);
        console.log("adding ground");
        game.addEntity(gr);
        game.platforms.push(gr);
    }

    game.addEntity(boss);
    game.bigBoss = boss;

}