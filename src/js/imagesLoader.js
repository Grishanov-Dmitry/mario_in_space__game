/**
 * Created by Dima on 06.12.2017.
 */

import {allSpritesUrl, loadingWindiw} from  './consts';

//Use this function for load all sprites before the game
export const imagesLoader = (arr) => {
    const promises = arr.map((item) => new Promise(resolve => {
        const image = new Image();
        image.src = item;
        image.addEventListener('load', () => {
            resolve();
        })
    }));
    return Promise.all(promises);
};
