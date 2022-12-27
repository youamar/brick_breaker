/**
* The movement of the ball, uses a deltaX and a deltaY which will be added to the position to make it move. 
* So, we have both a direction and an amplitude (which will change its speed).
*/
class Movement {

    /**
    * Simple constructor of a Movement
    * 
    * @param deltaX : value to add to x to change its direction and make the move.
    * 
    * @param deltaY : value to add to y to change its direction and make the move.
    */
    constructor(deltaX, deltaY) {
        this._deltaX = deltaX;
        this._deltaY = deltaY;
    }

    /**
    * Simple getter of deltaX.
    */
    get deltaX() {
        return this._deltaX;
    }

    /**
    * Simple getter of deltaY.
    */
    get deltaY() {
        return this._deltaY;
    }

    /**
    * Simple setter of deltaX.
    */
    set deltaX(valDeltaX) {
        this._deltaX = valDeltaX;
    }

    /**
    * Simple setter of deltaY.
    */
    set deltaY(valDeltaY) {
        this._deltaY = valDeltaY;
    }

    /**
     * Reverses the movement in horizontal direction.
     */
    reverseX() {
        this._deltaX = -this._deltaX;
    }

    /**
     * Reverses the movement in vertical direction.
     */
    reverseY() {
        this._deltaY = -this._deltaY;
    }

}