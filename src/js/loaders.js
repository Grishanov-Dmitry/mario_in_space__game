/**
 * Created by Dima on 02.12.2017.
 */

import {canvas, context, canvasWidth, canvasHeight, spriteMarioUrl, sprite1Url, sprite2Url, coordMarioStart} from './consts';
import ImagesConstructor from './imagesConstructor';

export const create = function () {
    let image = new Image();
    image.src = '../public/images/sprite-1.png';
    const sprite = new ImagesConstructor(image, 30, 30);
    sprite.define('bricks', 9.15, 0);
    sprite.draw('bricks', context, 30, 50);
    console.log();
};
