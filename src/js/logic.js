/**
 * Created by Dima on 30.11.2017.
 */

import {wrapper, canvas, context, buttonFullScreen, pattern, bgInGame, canvasWidth, canvasHeight, starsCounter, coinCounter, controlsManual, screenshots, otherInfo, bg, footer} from './consts';
import {counter} from './index';



export const cleanWindow = function () {
    wrapper.classList.add('displayNone');
    controlsManual.classList.add('displayNone');
    screenshots.classList.add('displayNone');
    footer.classList.add('displayNone');
    otherInfo.classList.add('displayNone');
    coinCounter.classList.add('displayBlock');
    bg.classList.add('displayBlock');
    starsCounter.classList.add('displayBlock');

};

export const showCanvas = function () {
    canvas.classList.add('displayBlock');

};

export const clearCanvas = function () {
    context.clearRect(1, 1, canvas.width, canvas.height);
    debugger;
};

export const launchFullScreen = function () {
    if(canvas.requestFullScreen) {
        canvas.requestFullScreen();
    } else if(canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen();
    } else if(canvas.webkitRequestFullScreen) {
        canvas.webkitRequestFullScreen();
    }
};

export const showLoading = function () {
    loadingWindiw.classList.add('displayBlock');
};

export const hideLoading = function () {
    loadingWindiw.classList.toggle('displayBlock');
};

