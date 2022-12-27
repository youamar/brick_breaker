/**
* Player holds player's score.
*/
class Player {

    /**
    * Simple constructor of Player
    */
    constructor() {
        this._nbLives = lives;
        this._score = 0;
    }

    /**
    * Simple getter of score.
    */
    get score() {
        return this._score;
    }

    /**
    * Simple getter of the number of lives.
    */
    get nbLives() {
        return this._nbLives;
    }

    /**
     * This method adds points to the score.
     * 
     * @param {*Integer} points represents the points
     */
    addToScore(points) {
        this._score += points;
    }

    /**
     * This method lowers the number of lives.
     */
    losesALife() {
        this._nbLives = this._nbLives - 1;
    }

    /**
    * This method highers the number of lives.
    */
    earnsALife() {
        this._nbLives = this._nbLives + 1;
    }

    /**
     * This method checks if the player is still alive.
     */
    isStillAlive() {
        if (this.nbLives < 1) {
            return false;
        }
        return true;
    }

}