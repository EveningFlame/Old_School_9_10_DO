//This class contains all the methods for the menus: startMenu, selectCharacter, gameOver, clearEngine
//clearEngine clears all the entities for a fresh start to the game.

startMenu = function(game){
    clearEngine(game);
  
    var menuB = ASSET_MANAGER.getAsset("./img/menu.png");
    var marioIcon = ASSET_MANAGER.getAsset("./img/1marioIcon.png");
    var linkIcon = ASSET_MANAGER.getAsset("./img/3linkIcon.png");
//    var pikachuIcon = ASSET_MANAGER.getAsset("./img/2pikachuIcon.png");
//    var samusIcon = ASSET_MANAGER.getAsset("./img/4samusIcon.png");
    var naviCircle = ASSET_MANAGER.getAsset("./img/naviCircle.png");
    var start = ASSET_MANAGER.getAsset("./img/start.png");
    var selectCharacter = ASSET_MANAGER.getAsset("./img/selectYourCharacter.png");
    
    
  
    var background = new Icon(game, menuB, 800, 800, 0, 800, 0, 0, true, "bg");
    var mario = new Icon(game, marioIcon, 200, 200, 0, 200, 170, 80, true, "Mario");
    var link = new Icon(game, linkIcon, 200, 200, 0, 200, 50, 300, true, "Link");
//    var samus = new Icon(game, samusIcon, 200, 200, 0, 200, 300, 300, true, "Samus");
//    var pikachu = new Icon(game, pikachuIcon, 200, 200, 0, 200, 170, 520, true, "Pikachu");
    var nc = new Creature(game, naviCircle, 300, 300, 0, 300, 2, 118, 35, true, "select", .05);  
    var startButton = new Button(game, start, 60, 360, 0, 60, 2, 420, 650, true, "start");
    var selectChar = new Icon(game, selectCharacter, 161, 296, 0, 161, 470, 110, true, "selectChar");

    game.addEntity(background);
    game.addEntity(mario);
    game.addEntity(link);
//    game.addEntity(pikachu);
//    game.addEntity(samus);
    game.addEntity(nc);
    game.addEntity(startButton);
    game.addEntity(selectChar);
    // Mario = 118, 35    // Link = 0, 255    // Samus = 252, 255    // Pikachu = 118, 472

  
};

selectCharacter = function(game, character, xPlace, yPlace){
    var naviSelect = null;
//    console.log(game.entities.length);
    for(var i = 0; i < game.entities.length; i++){
        if(game.entities[i].name === "select"){
            naviSelect = game.entities[i];
            naviSelect.x = xPlace;
            naviSelect.y = yPlace;   
            naviSelect.paint = true;
        };
    }
   
   game.chosenCharacter = character;
   console.log(game.chosenCharacter);
    
};

gameOver = function(game){
    clearEngine(game);
  
    var gameOver = ASSET_MANAGER.getAsset("./img/gameOver.png");
    var retry = ASSET_MANAGER.getAsset("./img/retry.png");
   
    var background = new Icon(game, gameOver, 800, 800, 0, 800, 0, 0, true, "bg");
    var retryButton = new Button(game, retry, 60, 360, 0, 60, 2, 215, 550, true, "retry");

    game.addEntity(background);
    game.addEntity(retryButton);
};


clearEngine = function(game){
    for(var i = 0; i < game.entities.length; i++){
        game.entities[i].removeFromWorld = true;
    }
};

