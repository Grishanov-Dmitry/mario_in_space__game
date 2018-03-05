/**
 * Created by Dima on 11.12.2017.
 */
import constructorOfEntities from './constructorOfEntities';
import {sprite3Url, context} from './consts';
import {counter} from './index';
import {bricksCoord, brickqQuestCoord} from './drawMap';
import {changeCrash} from './changeCrash';
import {animation} from './moveHero';

export const enemies = [
    {
        posOnMap: [680, 550],
        posStart: [7, 53],
        moveRight: true,
        posOnsprite: [7, 53, 97],
        size: [45, 45],
        get newImage() {
            let nextEnemy = new constructorOfEntities(sprite3Url, this.posOnsprite[0], this.posOnsprite[1], this.size[0], this.size[1], this.posOnMap, 50, 50);
            nextEnemy.createElem();
        }
    },
    {
        posOnMap: [1100, 550],
        posStart: [158,8],
        moveRight: true,
        posOnsprite: [158, 8, 246],
        size: [44, 44],
        get newImage() {
            let nextEnemy = new constructorOfEntities(sprite3Url, this.posOnsprite[0], this.posOnsprite[1], this.size[0], this.size[1], this.posOnMap, 50, 50);
            nextEnemy.createElem();
        }
    }
];

const nextAnimation = function (item) {

    if( item.posOnsprite[0] === item.posOnsprite[2] ) {
        item.posOnsprite[0] = item.posStart[0];
    } else {
        item.posOnsprite[0] += item.size[0];
    }

};

export const changePosToRight = function (item) {

    context.clearRect(item.posOnMap[0], item.posOnMap[1], 50, 50);
    item.newImage;
    item.posOnMap[0] += 5;
    // Chenge enemy image
    nextAnimation(item);

};

export const changePosToLeft = function (item) {

    context.clearRect(item.posOnMap[0] + 5, item.posOnMap[1], 50, 50);
    item.newImage;
    item.posOnMap[0] -= 5;
    // Chenge enemy image
    nextAnimation(item);

};

export const startMoveEnemies = () => {
    if(!animation) return false;

    enemies.forEach( (enem) => {
        changeCrash(enem);
        if(counter % 8 === 0) {

            if(enem.moveRight) {
                changePosToRight(enem);
            } else {
                changePosToLeft(enem);
            }

        }
    });

};



