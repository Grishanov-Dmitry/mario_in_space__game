/**
 * Created by Dima on 12.12.2017.
 */

import {obj1} from './enemies';
import {marioHero, fallMario, animation, stopMario, marioDownUntilGround, openDoor} from './moveHero';
import {obj} from './enemies';
import {coordMarioStart, context, counter1, counter2, audioCoin, audioCrash, audioJump, audioMenu, audioWin, gameOver, gameWin} from './consts';
import {enemies, changePosToRight, changePosToLeft} from './enemies';
import {brickqQuestCoord, brickAll, brickCoinArr, brickStarArr} from './drawMap';
import {keysDown, lastPressButton} from './keysEvents';

export let counter1Value = 0;
export let counter2Value = 0;

export const crashOfEntities = function () {

    if(marioHero.coordMario[1] > 1000) {
        if(!animation.animation) return false;
        audioMenu.pause();
        audioCrash.play();
        fallMario();
        gameOver.classList.add('displayBlock');
    }

    enemies.forEach((item) => {
        if(Math.abs(item.posOnMap[0] - 5 - marioHero.coordMario[0] - 5) <= 50
        && Math.abs(item.posOnMap[1] + 5 - marioHero.coordMario[1] + 5) <= 50)
        {
            if(!animation.animation) return false;
            audioMenu.pause();
            audioCrash.play();
            fallMario();
            gameOver.classList.add('displayBlock');
        }
    });

};


let crash = false;

const checkInJumping = function (item) {

    if(marioHero.coordMario[1] + 50 <= item[1]) {
        marioHero.canGoRight = true;
        marioHero.canGoLeft = true;
        marioHero.goDown = false;
    }

};

export const crashMarioWithBrick = function () {
    let arrLength = brickAll.length;

    brickAll.forEach((item, i) => {

        if(Math.abs(item[0] - marioHero.coordMario[0]) <= 50
            && Math.abs(item[1] - marioHero.coordMario[1] + 1) <= 50) {
            crash = true;
        }

        if(marioHero.goUp || marioHero.goDown && crash) {
            checkInJumping(item);
        }

        if(i + 1 === arrLength && crash === true) {
            if(lastPressButton[0] === 65 && lastPressButton[1] === 65) {
                    marioHero.canGoLeft = false;
                    marioHero.canGoRight = true;
                } else if (lastPressButton[0] === 68 && lastPressButton[1] === 65) {
                    marioHero.canGoLeft = true;
                    marioHero.canGoRight = true;
                } else if (lastPressButton[0] === 68 && lastPressButton[1] === 68) {
                marioHero.canGoLeft = true;
                marioHero.canGoRight = false;
            } else if (lastPressButton[0] === 65 && lastPressButton[1] === 68) {
                marioHero.canGoLeft = true;
                marioHero.canGoRight = true;
            }
        }
    });

    crash = false;
};

export const changeCrash = function (enem) {

    brickqQuestCoord.forEach((coord) => {
        if(coord[0] - 50 === enem.posOnMap[0] && coord[1] === enem.posOnMap[1] ||
            coord[0] + 50 === enem.posOnMap[0] && coord[1] === enem.posOnMap[1]
        ) {
            if(enem.moveRight) {
                enem.moveRight = false;
                changePosToLeft(enem);
            } else {
                enem.moveRight = true;
                changePosToRight(enem);
            }
        }
    });

};

export const checkCrashWithLavel = function (item) {

    if(Math.abs(item[0] - marioHero.coordMario[0]) <= 50
        && Math.abs(item[1] - marioHero.coordMario[1]) <= 50
        && marioHero.coordMario[1] - item[1] === 50
    ) {

        marioHero.goUp = false;
        marioHero.goDown = true;

    }
};

export const checkTouchGround = function () {
    let length = brickAll.length;
    let crash = false;

   brickAll.forEach((item, i) => {

         if(Math.abs( - 5 + item[0] - 5 - marioHero.coordMario[0]) <= 50
             && Math.abs(item[1] - marioHero.coordMario[1] - 1) <= 50) {
             marioHero.coordMarioInMamory[1] = item[1];
             marioHero.coordMarioInMamory[0] = item[1] - 120;
                 crash = true;
         }

       if(marioHero.goUp) {
           checkCrashWithLavel(item);
       }

       if(i + 1 === length && !crash && marioHero.goDown != true && marioHero.goUp != true) {
           marioHero.goDown = true;
       } else {
             marioHero.goDown = false;
       }
   });
};


export const crashWithCoin = function () {
    brickCoinArr.forEach((item) => {

        if(Math.abs(item[0] - marioHero.coordMario[0]) <= 50
            && Math.abs(item[1] - marioHero.coordMario[1] - 5) <= 50) {
            audioCoin.play();
            context.clearRect(item[0], item[1], 50, 50);
            brickCoinArr.splice(brickCoinArr.indexOf(item), 1);
            counter2Value++;
            counter2.innerHTML = counter2Value + ' ';
            debugger;
            openDoor();
        }
    });

};

export const crashWithStar = function () {
    brickStarArr.forEach((item) => {

        if(Math.abs(item[0] - marioHero.coordMario[0]) <= 50
            && Math.abs(item[1] - marioHero.coordMario[1] - 5) <= 50) {
            audioCoin.play();
            context.clearRect(item[0], item[1], 50, 50);
            brickStarArr.splice(brickStarArr.indexOf(item), 1);
            counter1Value++;
            counter1.innerHTML = counter1Value + ' ';
        }
    });
};

export const checkTouchQueen = function () {
    if(marioHero.coordMario[0] > 1800 && marioHero.coordMario[0] < 1900) {
        animation.animation = false;
        gameWin.classList.add('displayBlock');
        audioMenu.pause();
        audioWin.play();
    }
};
