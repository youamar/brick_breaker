/**
 * Controller of the ball.
 * Gives methods to start/stop the ball and making it move.
 */
class BallCtrl {

    /**
     * Simple constructor of BallCtrl
     * 
     * @param { Game } game - the game
     ∗ @param { View } view - the view
     * @param {GameCtrl} gameCtrl - the game contoller
     */
    constructor(game, view, gameCtrl) {
        this._game = game;
        this._ball = game.ball;
        this._view = view;
        this._gameCtrl = gameCtrl;
        this._ballSpeed = defaultBallSpeed;
        this._canMove = true;
        view.update(game.ball);
    }

    /**
     * Starts the ball.
     */
    start() {
        this._moveListener = setInterval(() => this.move(), this._ballSpeed);
    }

    /**
     * Moves the ball from one step (defined by its movement) and refreshes the view.
     */
    move() {
        let hasToSpeedUp = false;
        this.updateGame();
        this._game.ballMove().forEach(brick => {
            hasToSpeedUp = true;
            this._view.deleteBrickOnScreen(brick);
            this._view.updateScore(this._game.player.score);
        });
        this.updateSpeed(hasToSpeedUp);
        this.updateLevels();
    }

    /**
     * Stops the ball.
     */
    stop() {
        clearInterval(this._moveListener);
    }

    /**
     * This method displays the score and allows the user to restart the game once this one is over.
     */
    isGameOver() {
        this._view.showMessage(5, ('Your Score : ' + this._game.player.score));
        this._view.showMessage(3, 'GAME OVER');
        this._view.showMessage(4, 'Click here to restart the game');
        $('#gameholder').mouseup(() => location.reload());
    }

    /**
     * This method switches to other levels to keep the levels updated.
     */
    updateLevels() {
        let x = this._game.randomHorizontaleInt();
        let y = sceneHeight - paddleHeight - ballSize;
        this._view.update(this._ball);
        if (this._game.hasWon()) {
            this.stop();
            if (this._game.getNbLine() < maxWallLines) {
                this._view.showMessage(2, 'Great ! Click to start new level');
                $('#gameholder').mouseup(() => this.displayNextLevel(x, y));
            }
            else {
                this.isGameOver();
            }
        }
    }

    /**
     * This method updates the gaming session.
     */
    updateGame() {
        let x = this._game.randomHorizontaleInt();
        let y = sceneHeight - paddleHeight - ballSize;
        if (this._game.player.isStillAlive()) {
            if (this._game.hasLost()) {
                this._ballSpeed = defaultBallSpeed;
                this.stop();
                this._game.player.losesALife();
                this._view.updateLives('remove');
                if (this._game.player.isStillAlive()) {
                    this._game.ball.position = new Position(x, y);
                    this._game.ball.movement = new Movement(this._game.randomVerticaleInt(), startBallSpeed);
                    this._gameCtrl.ballStartWait();
                }
                else {
                    this.isGameOver();
                }
            }
        }
    }

    /**
     * This method updates the speeding of the ball.
     * 
     * @param {*Boolean} speedUp says if the ball has to speed up.
     */
    updateSpeed(speedUp) {
        if (speedUp && this._ballSpeed >= maxBallSpeed) {
            this.stop();
            this._ballSpeed *= ballSpeedUp;
            this.start();
        }
    }

    /**
     * This method displays the next level.
     * 
     * @param {*Integer} x represents the x position of the ball.
     * @param {*Integer} y represents the y position of the ball.
     */
    displayNextLevel(x, y) {
        $('#gameholder').off("mouseup");
        this._view.hideMessage(2);
        this._ballSpeed = defaultBallSpeed;
        this.stop();
        this._game.level = (this._game.level + 1);
        this._game.ball.position = new Position(x, y);
        this._game.ball.movement = new Movement(this._game.randomVerticaleInt(), startBallSpeed);
        this._game.wall = this._game.createWall((wallLines + this._game.level) - 1);
        this._view.addAll(this._game.wall);
        this._view.showMessage(1, 'Click to start');
        if (this._game.player.nbLives < lives) {
            this._game.player.earnsALife();
            this._view.updateLives('add');
        }
        this._view.update(this._ball);
        this._view.displayLevelNb(this._game.level);
        this._view.showMessage(1, 'Click to start');
        this._gameCtrl.ballStartWait();
    }
}
