/**
 * Created by Dima on 04.12.2017.
 */

import {context} from './consts';


//It's creating a new part for  the map

export default class ImagesConstructor {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.part = new Map();
    }

    define(name, x, y) {
        const bufferElem = document.createElement('canvas');
        bufferElem.width = this.width;
        bufferElem.height = this.height;

        bufferElem.getContext('2d').drawImage(
            this.image,
            x*this.width,
            y*this.height,
            this.width,
            this.height,
            0,
            0,
            this.width,
            this.height);
            this.part.set(name, bufferElem);
    }

    draw(name, context, x, y) {
        const bufferElem = this.part.get(name);
        context.drawImage(bufferElem, x, y)
    }
}
