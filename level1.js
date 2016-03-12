function level1(game, bowserSprite, world1, ground1, platform, platWall, Koopa, platWall9, pipe, coinSprite, starSprite, spearowSprite) {
	var boss = new Boss(game, bowserSprite, 55.968, 55.968, 0, 55.968,
    4, 6, 1100, 595, true, 0.16, 500);


    var bg = new Platform(game, world1, 800, game.defaultGround, 0, 0, true, true);
//    function Platform(game, platformSprite, width, height, startX, startY, scroll, isSky) {
    for (var i = 0; i < 25; i++) {
        var gr = new Platform(game, ground1, 800, 95, 800 * i, game.defaultGround, false);
//        console.log("adding ground");
        if(i === 1){
//            gr = new Platform(game, ground1, 800, 95, 850, game.defaultGround, false);
            game.addEntity(gr);
            game.platforms.push(gr);
        } else {
            game.addEntity(gr);
            game.platforms.push(gr);
        }
        
    }
    game.hero.platform = game.platforms[1];
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
    
      //117.166667 width
      //101.8 height
      //SPEAROW TESTING
    addPlatform(game, platWall, 30, 30, 200, 550, false, 5);
    var m1 = new Minion(game, spearowSprite, 96 , 96, 0, 101.8, 6, 8, 600, 450, true, .1, 0, 0, "Spearow");
    addPlatform(game, platWall, 30, 30, 800, 550, false, 5);
//SPEAROW TESTING
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