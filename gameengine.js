// This game shell was happily copied from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (/* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
})();


function Timer() {
    this.gameTime = 0;
    this.maxStep = 0.05;
    this.wallLastTimestamp = 0;
};

Timer.prototype.tick = function () {
    var wallCurrent = Date.now();
    var wallDelta = (wallCurrent - this.wallLastTimestamp) / 1000;
    this.wallLastTimestamp = wallCurrent;

    var gameDelta = Math.min(wallDelta, this.maxStep);
    this.gameTime += gameDelta;
    return gameDelta;
};

function GameEngine() {
    this.entities = [];
    this.coins = [];
    this.baddies = [];
    this.platforms = [];
    this.showOutlines = false;
    this.ctx = null;
    this.click = null;
    this.mouse = null;
    this.wheel = null;
    this.surfaceWidth = null;
    this.surfaceHeight = null;
    this.defaultScroll = 250;
    this.totalDistance = 0;
    this.defaultGround = 705;
    this.defaultJumpHeight = 200;
    this.unlocked;
    this.bgmove;
    this.maxX = 0;
    this.hearts = ASSET_MANAGER.getAsset("./img/hearts.png");
    this.gameOver = ASSET_MANAGER.getAsset("./img/gameOver.png");
    this.heartIcon = null;
    this.sb1 = 0;
    this.introMusic = new Howl({urls: ["./music/Pokemon Red-Blue-Yellow - Route 1 Acapella.mp3"], buffer: true}); 
    this.themeMusic =  new Howl({urls: ["./music/mario_overworld_theme.mp3"], buffer: true});
    this.powerUpMusic = new Howl({urls: ["./music/Mario_Invincible_Theme.mp3"]});
    this.coinMusic = new Howl({urls: ["./music/coinsound.wav"]});
    this.jumpMusic = new Howl({urls: ["./music/jumpsound.wav"]});
    this.stompMusic = new Howl({urls: ["./music/stomp.wav"]});
    this.bowserMusic = new Howl({urls: ["./music/bowserMusic.mp3"]});
    this.marioDamagedMusic = new Howl({urls: ["./music/marioDamaged.wav"]});
    this.marioDieMusic = new Howl({urls: ["./music/mariodie.wav"]});
    this.gameOverMusic = new Howl({urls: ["./music/gameover.wav"]});
    this.congratulationsMusic = new Howl({urls: ["./music/Congratulations.mp3"]});
    this.linkThemeMusic = new Howl({urls: ["./music/linkGameMusic.mp3"]});
    this.linkBossMusic = new Howl({urls: ["./music/linkBossBattle.mp3"]});
    this.samusBossMusic = new Howl({urls: ["./music/samusBossMusic.mp3"]});
    this.samusThemeMusic = new Howl({urls: ["./music/samusGameMusic.mp3"]});
    this.hero = null;
    this.coinMove = 0;
    this.mjump = 0;
    this.starTime = 14;
    this.keyLeft = true;
    this.keyRight = true;
    this.score = 0;
    this.mouseX = 0;
    this.mouseY = 0;
    this.chosenCharacter = null;
    this.defeatBoss = false;
    this.heroLife = 4;
    this.lives = 3;
    this.level = 1;
    this.bigBoss;
    this.bossLife = 4;
    this.bossMusicNotPlaying = true;
}

GameEngine.prototype.init = function (ctx) {
    this.ctx = ctx;
    this.surfaceWidth = this.ctx.canvas.width;
    this.surfaceHeight = this.ctx.canvas.height;
    this.startInput();
    this.timer = new Timer();
    console.log('game initialized');
};

GameEngine.prototype.start = function () {
    console.log("starting game");
    var that = this;
    (function gameLoop() {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
};

GameEngine.prototype.startInput = function () {
    console.log('Starting input');
    var that = this;
 
    var getY = function (e) {
        return e.clientY - that.ctx.canvas.getBoundingClientRect().top;
    };

    var getX = function (e) {
        return e.clientX - that.ctx.canvas.getBoundingClientRect().left;
    };

    this.ctx.canvas.addEventListener("keydown", function (e) {
        switch (e.which) {
            case 32:
                that.space = true;
                break;
            case 37: 
                that.walkLeft = true; 
                break;
            case 39:
                //if (!that.walkLeft) {
                    that.walkRight = true;
               // }
                break;
        }
        e.preventDefault();
    }, false);

    this.ctx.canvas.addEventListener("keyup", function (e) {
        switch (e.which) {
            case 37:
                that.walkLeft = false;               
                break;
            case 39:
                that.walkRight = false;               
                break;
        }
        e.preventDefault();
    }, false);
    
    this.ctx.canvas.addEventListener("mousedown", function (e) {
        if (e.button === 0) {
            that.mouseX = getX(e);
            that.mouseY = getY(e);
        }
    }, false);
    
    
    console.log('Input started');
};

GameEngine.prototype.addEntity = function (entity) {
    //console.log('added entity');
    this.entities.push(entity);
    if(entity.name === "Coins"){
//        console.log("entered coins");
        this.coins.push(entity);
    } 
    if(entity.name === "Baddies"){
//    console.log("entered baddies");
    this.baddies.push(entity);
    }
    if(entity.name === "Platform" && !entity.isSky){
//        console.log("entered platforms");
        this.platforms.push(entity);
    }
};

GameEngine.prototype.draw = function () {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.save();
    for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].draw(this.ctx);
    }
    this.ctx.restore();
};

GameEngine.prototype.update = function () {
    var entitiesCount = this.entities.length;

    for (var i = 0; i < entitiesCount; i++) {
        var entity = this.entities[i];

        if (!entity.removeFromWorld) {
            entity.update();
        }
    }

    for (var i = this.entities.length - 1; i >= 0; --i) {
        if (this.entities[i].removeFromWorld) {
            this.entities.splice(i, 1);
        }
    }
        for (var i = this.coins.length - 1; i >= 0; --i) {
        if (this.coins[i].removeFromWorld) {
            this.coins.splice(i, 1);
        }
    }
        for (var i = this.baddies.length - 1; i >= 0; --i) {
        if (this.baddies[i].removeFromWorld) {
            this.baddies.splice(i, 1);
        }
    }
        for (var i = this.platforms.length - 1; i >= 0; --i) {
        if (this.platforms[i].removeFromWorld) {
            this.platforms.splice(i, 1);
        }
    }

};

GameEngine.prototype.loop = function () {
    this.clockTick = this.timer.tick();
    this.update();
    this.draw();
    this.space = null;
};

function Entity(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.removeFromWorld = false;
}

Entity.prototype.update = function () {    
};

Entity.prototype.draw = function (ctx) {
    if (this.game.showOutlines && this.radius) {
        this.game.ctx.beginPath();
        this.game.ctx.strokeStyle = "green";
        this.game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.game.ctx.stroke();
        this.game.ctx.closePath();
    }

};

Entity.prototype.rotateAndCache = function (image, angle) {
    var offscreenCanvas = document.createElement('canvas');
    var size = Math.max(image.width, image.height);
    offscreenCanvas.width = size;
    offscreenCanvas.height = size;
    var offscreenCtx = offscreenCanvas.getContext('2d');
    offscreenCtx.save();
    offscreenCtx.translate(size / 2, size / 2);
    offscreenCtx.rotate(angle);
    offscreenCtx.translate(0, 0);
    offscreenCtx.drawImage(image, -(image.width / 2), -(image.height / 2));
    offscreenCtx.restore();
    //offscreenCtx.strokeStyle = "red";
    //offscreenCtx.strokeRect(0,0,size,size);
    return offscreenCanvas;
};
