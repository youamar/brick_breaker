/**
* Dimension is a class that allows to include a width and a height.
*/
class Dimension {

    /**
    * Simple constructor of a Dimension
    * 
    * @param width : width of the dimension to be created
    * 
    * @param height : height of the dimension to be created
    */
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    /**
    * Simple getter of width.
    */
    get width() {
        return this._width;
    }

    /**
    * Simple getter of height.
    */
    get height() {
        return this._height;
    }

}