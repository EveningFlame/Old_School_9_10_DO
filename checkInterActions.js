var checkCoin = function (game) {
    var collide = false;

    for (var i = 0; i < game.coins.length && !collide; i++) {
        if (game.coins[i].beginingX() < 400 &&
            game.hero.boundingbox.collide(game.coins[i].boundingbox)) {
            return i;
            collide = true;
        }
    }
};

var superCollide = function (game) {
    for (var i = 0; i < game.baddies.length; i++) {
        if (game.baddies[i].boundingbox.left < 300) {
            if (game.hero.boundingbox.collide(game.baddies[i].boundingbox)) {
                return i;
            }
        }
    }
};

var checkBoss = function (game) {
    if (game.hero.boundingbox.collide(game.bigBoss.boundingbox)) {

        console.log(game.mjump);
        if (game.mjump === -1) {
            return 1;
        } else {
            return 0;
        }
    }
}

var checkMinion = function (me, game) {
    var crash = 0;
    //console.log(game.baddies.length);
    for (var i = 0; i < game.baddies.length && crash === 0; i++) {
        if (game.baddies[i] !== me) {
            if (me.boundingbox.collide(game.baddies[i].boundingbox)) {
                if (game.mjump === -1) {
                    crash = i + 1;
                } else {
                    crash = -1;
                }
            }
        } 
    }

    return crash;
};

var checkPlatform = function (me, game) {
    var block = false;
    for (var i = 0; i < game.platforms.length && !block; i++) {
        if (me.boundingbox.collide(game.platforms[i].boundingbox)){
            block = true;
        }                
    }
    return block;
};

