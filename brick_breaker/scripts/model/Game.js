/**
* Game serves as an entry point for all classes of the model.
*/
class Game {

    /**
    * Simple constructor of a Game
    */
    constructor() {
        this._paddle = new Paddle('racket', sceneWidth / 2);
        this._ball = new Ball('ball', new Position(this.randomHorizontaleInt(), sceneHeight - paddleHeight - ballSize), new Movement(this.randomVerticaleInt(), startBallSpeed));
        this._wall = this.createWall(wallLines);
        this._player = new Player();
        this._level = 1;
    }

    /**
    * Simple getter of the paddle.
    */
    get paddle() {
        return this._paddle;
    }

    /**
    * Simple getter of the ball.
    */
    get ball() {
        return this._ball;
    }

    /**
    * Simple getter of the wall.
    */
    get wall() {
        return this._wall;
    }

    /**
    * Simple getter of player.
    */
    get player() {
        return this._player;
    }

    /**
    * Simple getter of level.
    */
    get level() {
        return this._level;
    }

    /**
    * Simple setter of level.
    */
    set level(val) {
        return this._level = val;
    }

    /**
    * Simple setter of wall.
    */
    set wall(val) {
        return this._wall = val;
    }

    /**
    * Moves the paddle to the given value in pixels
    * 
    * @param centerX : value that represents pixels between left side of the paddle to the left side of the board.
     */
    paddleMove(centerX) {
        this._paddle.moveTo(centerX);
    }

    /**
     * Simply moves the ball's position based on its movement.
     */
    ballMove() {
        let posBall = this.giveBottomOfBall();
        if (posBall.y >= sceneHeight - paddleHeight) {
            if (this._paddle.hasCollision(this._ball)) {
                let rightSidePaddle = this._paddle.findRightSidePos();
                let leftSideBall = posBall.x;
                let percentage = (leftSideBall - this._paddle.left) / (rightSidePaddle - this._paddle.left);
                this._ball._movement = new Movement((-1 + (percentage) * 2), - Math.abs(this._ball._movement.deltaY));
            }
        }
        let nbDestroyedBricks = this.collisionBallBricks(this._ball);
        this._ball.move();
        return nbDestroyedBricks;
    }

    /**
    * Generates random horizontale integer.
    */
    randomHorizontaleInt() {
        return Math.floor(Math.random() * ((sceneWidth - ballSize) + 1));
    }

    /**
    * Generates random verticale integer.
    */
    randomVerticaleInt() {
        return Math.floor(Math.random() * (3)) - 1;
    }

    /**
     * Gives the bottom right side of the ball.
     */
    giveBottomOfBall() {
        let pos = this._ball.bottomRight();
        return pos;
    }

    /**
     * This method creates a wall of bricks.
     * 
     * @param {Integer} nbLines : number of lines of the wall from 1 to 8.
     */
    createWall(nbLines) {

        if (nbLines >= 1 && nbLines <= maxWallLines) {
            let wall = new Array(15 * nbLines);
            let y = 110;
            for (let j = 0; j < nbLines; j++) {
                let x = 0;
                for (let k = 0; k < 15; k++) {
                    wall[(j * 15) + k] = new Brick(((j * 15) + k) + 1, new Position(x, y));
                    x += brickWidth;
                }
                y += brickHeight;
            }
            return wall;
        }
    }

    /**
     * This method gives the number of wall lines of the current level
     */
    getNbLine() {
        return this._wall.length / 15;
    }

    /**
     * This method checks if there is a collision between the ball and the bricks.
     */
    collisionBallBricks() {
        let hasReversed = false;
        let nbDestroyedBricks = new Array();

        for (let j = 0; j < this._wall.length; j++) {

            if (this._wall[j] != null && this._ball.hasCollision(this._wall[j])) {
                this._player.addToScore(pointsByBrick);
                if (hasReversed == false) {
                    if (this._ball.isCollisionHorizontal(this._wall[j])) {
                        this._ball._movement.reverseY();
                    }
                    else {
                        this._ball._movement.reverseX();
                    }
                    hasReversed = true;
                }
                nbDestroyedBricks.push(new Brick(this._wall[j].id, this._wall[j].topLeft));
                this._wall[j] = null;
            }
        }
        return nbDestroyedBricks;
    }

    /**
     * This method checks if the ball has hit the ground.
     */
    hasLost() {
        if (this.giveBottomOfBall().y >= sceneHeight) {
            return true;
        }
        return false;
    }

    /**
     * This method checks if there is no more bricks on the scene.
     */
    hasWon() {
        let nbDestroyedBricks = 0;
        for (let i = 0; i < this._wall.length; i++) {
            if (this._wall[i] == null) {
                nbDestroyedBricks++;
            }
        }
        if (nbDestroyedBricks == this._wall.length) {
            return true;
        }
        return false;
    }

}