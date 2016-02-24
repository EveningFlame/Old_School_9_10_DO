var checkCoin = function (game) {
    for (var i = 0; i < game.coins.length; i++) {
        if (game.coins[i].beginingX() <= game.hero.endingX() && game.coins[i].endingX() >= game.hero.beginingX()) {
            if (game.coins[i].top() <= game.hero.bottom() && game.coins[i].bottom() >= game.hero.top()) {
                return i;
            }
        }
    }
}
