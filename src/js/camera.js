/**
 * Created by Dima on 10.12.2017.
 */

import {marioHero} from './moveHero';

export const camera = {
    x: 0,
    // y: 0,

    move: function(x, y) {
        this.x += x;
        // this.y += y;
    }
};

//Move camera to the right
export const moveRecRight = function () {
    camera.move(-3);
   if(marioHero.canGoRight) {
       canvas.style.left = camera.x + 'px';
   }
};

//Move camera to the left
export const moveRecLeft = function () {
    camera.move(3);
    if(marioHero.canGoLeft) {
        canvas.style.left = camera.x + 'px';
    }

};


