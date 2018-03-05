/**
 * Created by Dima on 06.12.2017.
 */
import {canvas, context} from './consts';

export default class constructorOfEntities{
    constructor(url, posX, posY, sizeX, sizeY, entitieCoord, width, height, frames) {
        this.url = url;
        this.posX = posX; // Coordinates in the sprite on the X-axis
        this.posY = posY; // Coordinates in the sprite on the Y-axis
        this.sizeX = sizeX; // The size of a entitie on the X-axis in sprite
        this.sizeY = sizeY; // The size of a entitie on the Y-axis in sprite
        this.entitieCoord = entitieCoord;
        this.width = width; // The width of a entitie on the X-axis in game
        this.height = height; // The height of a entitie on the Y-axis in gamee
        // this.speed = typeof speed === 'number' ? speed : 0; // The speed of hero moves
        this.frames = frames;
        this._index = 0;
    }
    define() {
        let image = new Image();
        image.src = this.url;

        context.drawImage(
            image,
            this.posX,
            this.posY,
            this.sizeX,
            this.sizeY,
            this.entitieCoord[0],
            this.entitieCoord[1],
            this.width,
            this.height
        )
    }

    createElem(x = 0, y = 0, q = 0) {
        let image = new Image();
        image.src = this.url;

        context.drawImage(
            image,
            this.posX + q,
            this.posY,
            this.sizeX,
            this.sizeY,
            this.entitieCoord[0] + x,
            this.entitieCoord[1] + y,
            this.width,
            this.height
        )
    }
}
