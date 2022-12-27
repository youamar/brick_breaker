/**
* GameCtrl serves as an entry point for all classes of the controller.
*/
class GameCtrl {

    /**
    * Simple constructor of a GameCtrl
    * 
    * @param game : the game
    * 
    * @param view : the view
    */
    constructor(game, view) {
        this._game = game;
        this._view = view;
        this._view.add(this._game.ball);
        this._view.add(this._game.paddle);
        this._view.addAll(this._game.wall);
        this._view.displayLives();
        this._view.displayLevelNb(this._game.level);
        this._paddleCtrl = new PaddleCtrl(game, view);
        this._ballCtrl = new BallCtrl(game, view, this);
    }

    /**
     * This method stops the game.
     */
    stop() {
        this._ballCtrl.stop();
    }

    /**
     * This method starts the game.
     */
    play() {
        this.ballStartWait();
    }

    /**
     * This method waits for the user to click on the scene to start the game.
     */
    ballStartWait() {
        this._view.showMessage(1, 'Click to start');
        $('#gameholder').mouseup(() => this.ballStart());
    }

    /**
     * This method starts the movement of the ball.
     */
    ballStart() {
        $('#gameholder').off("mouseup");
        this._view.hideMessage(1);
        this._ballCtrl.start();
    }

}