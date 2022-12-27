/**
* View displays the paddle on the board.
*/
class View {

    /**
    * Simple constructor of View
    */
    constructor() {
    }

    /**
    * This method gives the position of the Scene in the window.
    */
    sceneLeft() {
        let leftSpaceInPx = $('#gameholder').offset().left;
        return leftSpaceInPx;
    }

    /**
     * Changes the visual position of the sprite according to its topLeft attribute.
     * 
     * @param {Sprite} sprite : represent a sprite
     */
    add(sprite) {
        $('#gameholder').append('<span id=' + sprite.id + ' class=' + sprite.type + '>' + '</span>');
    }

    /**
     * Dynamically adds a sprite to the scene.
     * 
     * @param {Sprite} sprite : represent a sprite
     */
    update(sprite) {
        document.getElementById(sprite.id).style.marginLeft = sprite.topLeft.x + 'px';
        document.getElementById(sprite.id).style.marginTop = sprite.topLeft.y + 'px';
    }

    /**
     * This method removes the bricks on the screen.
     * 
     * @param {*Sprite} sprite represents a sprite
     */
    deleteBrickOnScreen(sprite) {
        $("#" + sprite.id).remove();
    }

    /**
     * This method adds all the sprites based on the sprites in the array.
     * 
     * @param {*Sprite[]} sprites array of sprites
     */
    addAll(sprites) {
        for (let i = 0; i < sprites.length; i++) {
            this.add(sprites[i]);
            this.update(sprites[i]);
        }
    }

    /**
     * This method updates the score's display.
     * 
     * @param {Integer} score represents the score
     */
    updateScore(score) {
        document.getElementById('score').style.marginLeft = 30.1 - (score.toString().length * 0.60) + 'em';
        document.getElementById('score').innerHTML = score;
    }

    /**
     * This method displays a message on the scene.
     * 
     * @param {*Integer} val value for knowing which message to be shown
     * @param {*String} message message to be shown
     */
    showMessage(val, message) {
        if (val == 1) {
            this.placeText(message, '#message');
        }
        if (val == 2) {
            this.placeText(message, '#othermessage');
        }
        if (val == 3) {
            this.placeText(message, '#gameover');
        }
        if (val == 4) {
            this.placeText(message, '#restartgame');
        }
        if (val == 5) {
            this.placeText(message, '#scoregame');
        }
    }

    /**
     * This method hides the message on the scene.
     * 
     * @param {*Integer} val value for knowing which message to hide
     */
    hideMessage(val) {
        if (val == 1) {
            $('#message').empty();
        }
        if (val == 2) {
            $('#othermessage').empty();
        }
    }

    /**
     * Updates the images of the lives.
     * 
     * @param {*String} text if the text says "remove" it will update by removing a life if it says "add" it will update by adding a life.
     */
    updateLives(text) {
        if (text == 'remove') {
            $(".gameinfos img:last-child").remove()
        }
        if (text == 'add') {
            $('.gameinfos').append('<img class="hearts" src="heart.png" alt="a life">');
        }
    }

    /**
     * This method displays at the starting of the game the available lives.
     */
    displayLives() {
        let i = 0;
        while (i < lives) {
            $('.gameinfos').append('<img class="hearts" src="heart.png" alt="a life">');
            i++;
        }
    }
    /**
     * This method displays the number of the level
     * 
     * @param {*Integer} level represents the current level
     */
    displayLevelNb(level) {
        document.getElementById('levels').innerHTML = 'level ' + level;
    }

    /**
     * This method places texts in the html page.
     * 
     * @param {*String} message message to be displayed
     * @param {*String} id the id where to place the text in
     */
    placeText(message, id) {
        $(id).empty();
        $(id).append(message);
        $(id).show();
    }

}