/**
* Brick represents a brick on the scene.
*/
class Brick extends Sprite {

    /**
    * Simple constructor of a Brick
    * 
    * @param position : position of the brick
    * @param id : used to identify the sprite in the page. Its span will have this id
    */
    constructor(id, position) {
        super(id, 'Brick', position, new Dimension(brickWidth, brickHeight));
    }

}