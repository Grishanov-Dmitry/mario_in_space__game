import './../sass/styles.scss';
import {buttonStart, buttonFullScreen, context, allSpritesUrl, bgInGame, spriteMarioUrl, canvas, coord, pageCoord, pageUp, buttonStartAgain, gameOver, body} from './consts';
import {cleanWindow, showCanvas, launchFullScreen, createBg, update, clearCanvas} from './logic';
import {loadImage, create} from './loaders';
import {mario, moveMarioRight, drawMario, animation, jumpMario, mariodown, marioHero, marioDownUntilGround, open} from './moveHero';
import {imagesLoader,hideLoading} from './imagesLoader';
import constructorOfEntities from './constructorOfEntities';
import {keys, checkKeys, keysDown, lastPressButton} from './keysEvents';
import {drawMap, moveBrickStar, exampleArr} from './drawMap';
import {moveRec, camera} from './camera';
import {enemies,startMoveEnemies} from './enemies';
import {crashOfEntities, checkTouchGround, crashWithCoin, crashWithStar, checkTouchQueen} from './changeCrash';
import {map1, map2} from './mapLevels';

export let counter = 0;
// alert();
let canvasPosLeft = canvas.style.left;
const requestAnimFrame = (function(){

    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };

})();

//It's a permanent loop
const mainLoop = function () {

    if(!animation.animation) return false;
    counter === 24 ? counter = 1 : counter++;
    startMoveEnemies();
    checkKeys();
    crashOfEntities();
    crashWithCoin();
    crashWithStar();
    open();
    if(marioHero.goUp)  jumpMario();
    if(marioHero.goDown) mariodown();
    if(marioHero.checkQueen) checkTouchQueen();
    checkTouchGround();
    requestAnimFrame(mainLoop);


};

// Game starts after press buttonStart
const startGame = function () {
    cleanWindow();
    animation.animation = true;
    imagesLoader(allSpritesUrl)
        .then(() => showCanvas())
        .then(() => drawMap(map1))
        .then(() => drawMario())
        .then(() => mainLoop())
};

const checkPageCoord = function () {
    if(window.pageYOffset > 700) {
        buttonStart.classList.add('button-start-position-fixed');
        pageUp.classList.add('button-pageUp-position-fixed');
    } else if (window.pageYOffset < 400) {
        buttonStart.classList.remove('button-start-position-fixed');
        pageUp.classList.remove('button-pageUp-position-fixed');
    }

};

export const startGameAgein = function () {
    gameOver.classList.remove('displayBlock');
    camera.x = 0;
    canvas.style.left = 0;

    startGame();
};

buttonStart.addEventListener('click', startGame);
buttonFullScreen.addEventListener('click', launchFullScreen);
buttonStartAgain.addEventListener('click', startGameAgein);


window.addEventListener('scroll', checkPageCoord);

