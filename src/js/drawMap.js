/**
 * Created by Dima on 08.12.2017.
 */

import {canvas, context, sprite3Url} from './consts';
import constructorOfEntities from  './constructorOfEntities';
import {map1} from './mapLevels';
import {counter} from './index';

let x = 0; //Coordinates when will draw a new image
let y = 0;
let q = 0;

let arr = [ ];

//Create a new parts for map
const brick = new constructorOfEntities(sprite3Url, 800, 5, 32, 30, [x, y], 50, 50);
const brickQuestionMark = new constructorOfEntities(sprite3Url, 876, 5, 29, 29, [x, y], 50, 50);
const brickCoin = new constructorOfEntities(sprite3Url, 361, 13, 20, 29, [x, y], 50, 50);
const brickStar = new constructorOfEntities(sprite3Url, 436, 6, 35, 35, [x, y], 50, 50);
const brickMushroom = new constructorOfEntities(sprite3Url, 9, 53, 45, 45, [x, y], 50, 50);
const brickMushroom2 = new constructorOfEntities(sprite3Url, 160, 8, 44, 44, [x, y], 50, 50);
const brickFlower = new constructorOfEntities(sprite3Url, 134, 138, 48, 48, [x, y], 50, 50);
const brickTurtle = new constructorOfEntities(sprite3Url, 740, 151, 38, 38, [x, y], 50, 50);
const blockEmpty = new constructorOfEntities(sprite3Url, 910, 0, 25, 25, [x, y], 50, 50);
const tube_1 = new constructorOfEntities(sprite3Url, 728, 6, 31, 31, [x, y], 50, 50);
const tube_2 = new constructorOfEntities(sprite3Url, 759, 6, 31, 31, [x, y], 50, 50);
const tube_3 = new constructorOfEntities(sprite3Url, 728, 37, 31, 31, [x, y], 50, 50);
const tube_4 = new constructorOfEntities(sprite3Url, 759, 37, 31, 31, [x, y], 50, 50);
const queen = new constructorOfEntities(sprite3Url, 623, 51, 53, 53, [x, y], 50, 50);
const door = new constructorOfEntities(sprite3Url, 651, 226, 55, 51, [x, y], 50, 50);



//Here we keep the parts of the map
const entity = new Map();
const parts = [];

export const bricksCoord = [];
export const brickqQuestCoord = [];
export const brickAll = [];
export const brickCoinArr = [];
export const brickStarArr = [];


//Add a new parts in the entity
entity.set(0, blockEmpty);
entity.set(1, brick);
entity.set(2, brickCoin);
entity.set(3, brickQuestionMark);
entity.set(4, brickMushroom);
entity.set(5, brickMushroom2);
entity.set(6, brickFlower);
entity.set(7, brickTurtle);
entity.set(8, brickStar);
entity.set(9, tube_1);
entity.set(10, tube_2);
entity.set(11, tube_3);
entity.set(12, tube_4);
entity.set(13, queen);
entity.set(14, door);


const addHindrance = function (item, obj) {
  switch (item) {
      case 1:
          brickAll.push([x, y]);
          bricksCoord.push([obj.posX + x, obj.posY + y]);
          break;

      case 3:
          brickAll.push([x, y]);
          brickqQuestCoord.push([x, y]);
          break;

      case 9:
      case 10:
      case 11:
      case 12:
          brickAll.push([x, y]);
          break;

      case 2:
          brickCoinArr.push([x, y]);
          break;

      case 8:
          brickStarArr.push([x, y]);
          break;
  }
};


//Draws map
export const drawMap = function (map) {

    map.forEach((item) => {
        item.forEach((itemInner) => {

            let entityInstance = entity.get(itemInner);
            addHindrance(itemInner, entityInstance);
            // debugger;
            let createElem = entityInstance.createElem.bind(entityInstance, x, y, q);
            createElem();

            x += 50;
        });

        x = 0;
        y += 50;

    });

};


















// export const moveBrickStar = function () {
//     parts.forEach((item) => {
//         if(counter % 10 === 0) {
//             if(item.posX === 510) {
//                 item.posX = 434;
//             } else {
//                 // console.log(item.posY);
//                 // item.define();
//                 item.posX += 38;
//             }
//         }
//     });
//
// };
