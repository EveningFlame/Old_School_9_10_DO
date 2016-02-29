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

BoundingBox.prototype.collide = function (oth) {
    if(oth !== null) {
        if (this.right > oth.left && this.left < oth.right 
                && this.top < oth.bottom && this.bottom > oth.top) return true;
    }
    return false;
};


//for those characters who are differenct sizes in their sprite sheets


//BoundingBox.prototype.collide = function (oth) {
//    if (this.right > oth.left && this.left < oth.right 
//            && this.top < oth.bottom && this.bottom > oth.top) return true;
//    return false;
//};
//
//
////Create the box for collisions
//function BoundingBox(x, y, width, height) {
//    this.x = x;
//    this.y = y;
//    this.width = width;
//    this.height = height;
//};
////Set change in bounding box for continual moving pieces
////Size 1 only needed if the same adjustment for the box. Size 2 in case they are different numbers.

//BoundingBox.prototype.collide = function(entity, other){
//    return (entity.boundingbox.x < other.boundingbox.x + other.boundingbox.width &&
//	entity.boundingbox.x + entity.boundingbox.width > other.boundingbox.x &&
//	entity.boundingbox.y < other.boundingbox.y + other.boundingbox.height &&
//	entity.boundingbox.height + entity.boundingbox.y > other.boundingbox.y);
//};