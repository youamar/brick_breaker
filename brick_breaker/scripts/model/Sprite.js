/**
* Sprite is a class that captures common elements to all elements of the game. A sprite has a position (the one of its upper left corner) and a size.
*/
class Sprite {

    /**
    * Simple constructor of a Sprite
    * 
    * @param topLeft : position (leftSurfaceSprite,topSurfaceSprite) which represent the topLeft position for an object
    * @param dimension : width and height of an object
    * @param id : used to identify the sprite in the page. Its span will have this id
    * @param type : allows to designate the category of the sprite (ball, paddle or brick). Its span will belong to that class
    */
    constructor(id, type, topLeft, dimension) {
        this._topLeft = topLeft;
        this._dimension = dimension;
        this._id = id;
        this._type = type;
    }

    /**
    * Simple getter of topLeft.
    */
    get topLeft() {
        return this._topLeft;
    }

    /**
    * Simple getter of dimension.
    */
    get dimension() {
        return this._dimension;
    }

    /**
    * Simple getter of id.
    */
    get id() {
        return this._id;
    }

    /**
    * Simple getter of type.
    */
    get type() {
        return this._type;
    }

    /**
    * This method gives the right side of the paddle.
    */
    findRightSidePos() {
        return this._topLeft.x + this.dimension.width;
    }

    /**
    * Gives the bottom right side of the ball.
    */
    bottomRight() {
        let pos = new Position(this._topLeft.x + this.dimension.width, this._topLeft.y + this.dimension.height);
        return pos;
    }

    /**
    * Gives the bottom left side of the ball.
    */
    bottomLeft() {
        let pos = new Position(this._topLeft.x, this._topLeft.y + this.dimension.height);
        return pos;
    }

    /**
     * This method checks if a sprite has a collision with an other sprite. 
     * 
     * @param {Sprite} sprite represents a sprite on the scene
     */
    hasCollision(sprite) {
        let bottomRightCorner = sprite.bottomRight()
        let rightSurfaceSprite = this.bottomRight().x
        let bottomSurfaceSprite = this.bottomRight().y
        let leftSurfaceSprite = this._topLeft.x
        let topSurfaceSprite = this._topLeft.y
        let rightSurfaceSprite2 = bottomRightCorner.x
        let bottomSurfaceSprite2 = bottomRightCorner.y
        let leftSurfaceSprite2 = sprite.topLeft.x
        let topSurfaceSprite2 = sprite.topLeft.y

        if ((leftSurfaceSprite <= rightSurfaceSprite2 && rightSurfaceSprite >= leftSurfaceSprite2) &&
            (topSurfaceSprite <= bottomSurfaceSprite2 && bottomSurfaceSprite >= topSurfaceSprite2)) {
            return true;
        }

        return false;
    }

    /**
     * Checks if a collision is horizontal or not.
     * 
     * @param {*Sprite} sprite represents a sprite on the scene
     */
    isCollisionHorizontal(sprite) {
        let bottomRightCorner = sprite.bottomRight()
        let rightSurfaceSprite = this.bottomRight().x
        let bottomSurfaceSprite = this.bottomRight().y
        let leftSurfaceSprite = this._topLeft.x
        let topSurfaceSprite = this._topLeft.y
        let rightSurfaceSprite2 = bottomRightCorner.x
        let bottomSurfaceSprite2 = bottomRightCorner.y
        let leftSurfaceSprite2 = sprite.topLeft.x
        let topSurfaceSprite2 = sprite.topLeft.y

        if ((leftSurfaceSprite <= rightSurfaceSprite2 && rightSurfaceSprite >= leftSurfaceSprite2) &&
            (topSurfaceSprite == bottomSurfaceSprite2 || bottomSurfaceSprite == topSurfaceSprite2)) {
            return true;
        }
        return false;
    }

}