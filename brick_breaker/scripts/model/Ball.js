/**
* Ball represents a ball on the scene.
*/
class Ball extends Sprite {

    /**
    * Simple constructor of a Ball.
    * 
    * @param position : position of the ball
    * @param movement : movement of the ball
    * @param id : used to identify the sprite in the page. Its span will have this id
    */
    constructor(id, position, movement) {
        super(id, 'Ball', position, new Dimension(ballSize, ballSize));
        this._movement = movement;
    }

    /**
    * Simple getter of position.
    */
    get position() {
        return this._topLeft;
    }

    /**
    * Simple getter of movement.
    */
    get movement() {
        return this._movement;
    }

    /**
    * Simple setter of position.
    */
    set position(val) {
        return this._topLeft = val;
    }

    /**
    * Simple setter of movement.
    */
    set movement(val) {
        return this._movement = val;
    }

    /**
    * Simply moves the ball's position based on its movement.
    */
    move() {
        if (this.bottomRight().x + this._movement.deltaX >= sceneWidth || this._topLeft.x + this._movement.deltaX < 0) {
            this._movement.reverseX();
        }

        if (this.bottomRight().y >= sceneHeight || this._topLeft.y + this._movement.deltaY < 0) {
            this._movement.reverseY();
        }

        this._topLeft.x = this._topLeft.x + this._movement.deltaX;
        this._topLeft.y = this._topLeft.y + this._movement.deltaY;
    }

}