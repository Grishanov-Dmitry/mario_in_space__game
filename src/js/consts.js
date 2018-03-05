/**
 * Created by Dima on 29.11.2017.
 */

//Buttons and fields
export const gameWin = document.getElementById('game_win');
export const buttonStart = document.getElementById('button-start');
export const footer = document.getElementById('footer');
export const buttonStartAgain = document.getElementById('button__start_again');
export const buttonFullScreen = document.getElementById('button-full-screen');
export const wrapper = document.getElementById('wrapper');
export const controlsManual = document.getElementById('controls-manual');
export const gameOver = document.getElementById('game_over');
export const screenshots = document.getElementById('screenshots');
export const otherInfo = document.getElementById('other-info');
export const bg = document.getElementById('bg');
export const pageUp = document.getElementById('page-up');
export const starsCounter = document.getElementById('starsCounter');
export const coinCounter = document.getElementById('coinCounter');
export const counter1 = document.getElementById('counter1');
export const counter2 = document.getElementById('counter2');
export const loadingWindiw = document.getElementById('loading');


//Audio
export const audioJump = document.getElementById('audio_jump');
export const audioCoin = document.getElementById('audio_coin');
export const audioCrash = document.getElementById('audio_crash');
export const audioWin = document.getElementById('audio_win');
export const audioMenu = document.getElementById('audio_menu');

//Canvas
export const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth + 1000;
canvas.height = window.innerHeight + 400;
export const context = canvas.getContext('2d');
export const canvasWidth = canvas.width;
export const canvasHeight = canvas.height;

//Images
export const spriteMarioUrl = '../public/images/mario-sprite.png';
export const sprite1Url = '../public/images/sprite-1.png';
export const sprite3Url = '../public/images/sprite-3.png';
export const bgInGame = '../public/images/bg-in-game.png';
export const spriteMario = new Image().src = spriteMarioUrl;
export const sprite1 = new Image().src = sprite1Url;
export const sprite3 = new Image().src = sprite3Url;
export const allSpritesUrl = [
    '../public/images/mario-sprite.png',
    '../public/images/sprite-3.png',
    '../public/images/bg-in-game.png',
];










