/**
* Paddle represents the paddle on the board.
*/
class Paddle extends Sprite {

    /**
    * Simple constructor of Paddle
    * 
    * @param left : space between left side of the paddle to the left side of the board.
    * @param id : used to identify the sprite in the page. Its span will have this id
    */
    constructor(id, left) {
        super(id, 'Paddle', new Position(left, sceneHeight - paddleHeight), new Dimension(paddleWidth, paddleHeight));
    }

    /**
    * Simple getter of left.
    */
    get left() {
        return this._topLeft.x;
    }

    /**
    * Simply moves the ball's position based on its movement.
    */
    moveTo(val) {
        if (val <= 0) {
            this._topLeft.x = 0;
        }
        else if (val >= sceneWidth - this.dimension.width) {
            this._topLeft.x = sceneWidth - this.dimension.width;
        }
        else {
            this._topLeft.x = val;
        }
    }

}