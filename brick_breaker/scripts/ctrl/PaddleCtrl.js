/**
* Controller for the paddle movements.
* It makes it follow the mouse.
*/
class PaddleCtrl {

    /**
    * Simple constructor of PaddleCtrl
    * 
    * @param {Game} game : the game
    * @param {View} view : the view
    */
    constructor(game, view) {
        view.update(game.paddle);
        $(document).mousemove((evt) => this.moveMouse(game, view, evt));
    }

    /**
    * Called when the mouse is moved.
    * It moves the paddle (horizontally) where the mouse is.
    * @param {Game} game : the game
    * @param {View} view : the view
    * @param {MouseEvent} evt : the mouse event
    */
    moveMouse(game, view, evt) {
        game.paddleMove((evt.clientX - view.sceneLeft()) - paddleWidth / 2);
        view.update(game.paddle);
    }
}