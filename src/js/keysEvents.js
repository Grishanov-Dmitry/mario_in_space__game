/**
 * Created by Dima on 07.12.2017.
 */

import {} from './moveHero';
import {entities, coordMarioStart, audioJump} from './consts';
import {moveMarioRight, stopMario, moveMarioLeft, jumpMario, marioHero, goToSecondLevel} from './moveHero';

export let lastPressButton = [];

export let keysDown = {
    65: false,
    68: false,
    83: false,
    87: false
};

window.addEventListener('keyup', (event) => {
    keysDown[event.keyCode] = false;

    stopMario();
});

window.addEventListener('keydown', (event) => {
    keysDown[event.keyCode] = true;
});

export const checkKeys = function () {
        for(let key in keysDown) {
            if(keysDown[key]) {
                switch(key) {
                    case '87':
                        if(!marioHero.goDown) marioHero.goUp = true;  //Button W
                        audioJump.play();
                        break;
                    case '83': //Button S
                        goToSecondLevel();
                        break;
                    case '65':
                        lastPressButton.unshift(65);
                        lastPressButton.length = 2;
                        moveMarioLeft(); //Button A
                        break;
                    case '68':
                        lastPressButton.unshift(68);
                        lastPressButton.length = 2;
                        moveMarioRight(); //Button D
                        break;
                    case 32:
                        isPressSpace();
                        break;
                    case 13:
                        isPressInter();
                        break;
                }
            }
        }
};


