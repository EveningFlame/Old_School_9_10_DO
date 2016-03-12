// JavaScript source code
function BoundingBox(x, y, width, height) {    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.left = x;
    this.top = y;
    this.right = this.left + width;
    this.bottom = this.top + height;
}

BoundingBox.prototype.setChangingBox = function(game, x, y, width, height){
    var addX = 0;
    var addY = 0;
    var addHeight = 0;
    var addWidth = 0;
    if(game.chosenCharacter === "Mario"){
        addX = 15;
        addY = 25;    
        addHeight = 22;
    } else if(game.chosenCharacter === "Link") {
        addX = 38;
        addY = 35;    
        addHeight = 15;
        addWidth = -43;
    } else if(game.chosenCharacter === "Pikachu") {
        addX = 30;
        addY = 30;    
        addHeight = -16;
        addWidth = -28;
    } else if(game.chosenCharacter === "Samus") {
        addX = 40;
        addY = 36;    
        addHeight = 2;
        addWidth = -30;
    }
        
    this.x = x + addX;
    this.y = y + addY;    
    this.width = width + addWidth;
    this.height = height + addHeight;
    
    this.left = this.x;
    this.top = this.y;
    this.right = this.left + this.width;
    this.bottom = this.top + this.height;
        
};
//Within the parameters
BoundingBox.prototype.collide = function (oth) {
    if(oth !== null) {
        if (this.right > oth.left && this.left < oth.right 
                && this.top < oth.bottom && this.bottom > oth.top){
            return true;
        }
    }
    return false;
};