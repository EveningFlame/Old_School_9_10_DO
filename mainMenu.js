startMenu = function(game){
    //if(game.entities.length > 0){
        for(var i = 0; i < game.entities.length; i++){
            game.entities[i].removeFromWorld = true;
        }
    //}
    
//  ASSET_MANAGER.queueDownload("./img/1marioIcon.png");
//  ASSET_MANAGER.queueDownload("./img/2pikachuIcon.png");
//  ASSET_MANAGER.queueDownload("./img/3linkIcon.png");
//  ASSET_MANAGER.queueDownload("./img/4samusIcon.png");
  
    var menuB = ASSET_MANAGER.getAsset("./img/menu.png");
    var marioIcon = ASSET_MANAGER.getAsset("./img/1marioIcon.png");
//    var linkIcon = ASSET_MANAGER.getAsset("./img/3linkIcon.png");
//    var pikachuIcon = ASSET_MANAGER.getAsset("./img/2pikachuIcon.png");
//    var samusIcon = ASSET_MANAGER.getAsset("./img/4samusIcon.png");
    
  
    var background = new Icon(game, menuB, 800, 800, 0, 800, 0, 0, true);
    var mario = new Icon(game, marioIcon, 200, 200, 0, 200, 60, 100, true, "Mario");
//    var link = new Icon(game, linkIcon, 800, 800, 0, 800, 0, 400, true);
//    var pikachu = new Icon(game, pikachuIcon, 800, 800, 0, 800, 0, 0, true);
//    var samus = new Icon(game, samusIcon, 800, 800, 0, 800, 0, 0, true);
  
    game.addEntity(background);
    game.addEntity(mario);
  
};