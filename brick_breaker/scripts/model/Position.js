/**
* Position represents a position (x,y) on the scene.
*/
class Position {

    /**
    * Simple constructor of a Position
    * 
    * @param x :  position on the horizontal axis. It's the distance from the left edge of the scene. 
    * 0 is on the very left and the value increases by going on the right.
    * 
    * @param y : position on the vertical axis. It's the distance from the top edge of the scene. 
    * 0 is at the top and the value increases by going down.
    */
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    /**
    * Simple getter of x.
    */
    get x() {
        return this._x;
    }

    /**
    * Simple getter of y.
    */
    get y() {
        return this._y;
    }

    /**
    * Simple setter of x.
    */
    set x(valX) {
        this._x = valX;
    }

    /**
    * Simple setter of y.
    */
    set y(valY) {
        this._y = valY;
    }

}