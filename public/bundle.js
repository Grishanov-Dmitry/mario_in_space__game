/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Dima on 29.11.2017.
 */

//Buttons and fields
var gameWin = exports.gameWin = document.getElementById('game_win');
var buttonStart = exports.buttonStart = document.getElementById('button-start');
var footer = exports.footer = document.getElementById('footer');
var buttonStartAgain = exports.buttonStartAgain = document.getElementById('button__start_again');
var buttonFullScreen = exports.buttonFullScreen = document.getElementById('button-full-screen');
var wrapper = exports.wrapper = document.getElementById('wrapper');
var controlsManual = exports.controlsManual = document.getElementById('controls-manual');
var gameOver = exports.gameOver = document.getElementById('game_over');
var screenshots = exports.screenshots = document.getElementById('screenshots');
var otherInfo = exports.otherInfo = document.getElementById('other-info');
var bg = exports.bg = document.getElementById('bg');
var pageUp = exports.pageUp = document.getElementById('page-up');
var starsCounter = exports.starsCounter = document.getElementById('starsCounter');
var coinCounter = exports.coinCounter = document.getElementById('coinCounter');
var counter1 = exports.counter1 = document.getElementById('counter1');
var counter2 = exports.counter2 = document.getElementById('counter2');
var loadingWindiw = exports.loadingWindiw = document.getElementById('loading');

//Audio
var audioJump = exports.audioJump = document.getElementById('audio_jump');
var audioCoin = exports.audioCoin = document.getElementById('audio_coin');
var audioCrash = exports.audioCrash = document.getElementById('audio_crash');
var audioWin = exports.audioWin = document.getElementById('audio_win');
var audioMenu = exports.audioMenu = document.getElementById('audio_menu');

//Canvas
var canvas = exports.canvas = document.getElementById('canvas');
canvas.width = window.innerWidth + 1000;
canvas.height = window.innerHeight + 400;
var context = exports.context = canvas.getContext('2d');
var canvasWidth = exports.canvasWidth = canvas.width;
var canvasHeight = exports.canvasHeight = canvas.height;

//Images
var spriteMarioUrl = exports.spriteMarioUrl = '../public/images/mario-sprite.png';
var sprite1Url = exports.sprite1Url = '../public/images/sprite-1.png';
var sprite3Url = exports.sprite3Url = '../public/images/sprite-3.png';
var bgInGame = exports.bgInGame = '../public/images/bg-in-game.png';
var spriteMario = exports.spriteMario = new Image().src = spriteMarioUrl;
var sprite1 = exports.sprite1 = new Image().src = sprite1Url;
var sprite3 = exports.sprite3 = new Image().src = sprite3Url;
var allSpritesUrl = exports.allSpritesUrl = ['../public/images/mario-sprite.png', '../public/images/sprite-3.png', '../public/images/bg-in-game.png'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.startGameAgein = exports.counter = undefined;

__webpack_require__(12);

var _consts = __webpack_require__(0);

var _logic = __webpack_require__(20);

var _loaders = __webpack_require__(21);

var _moveHero = __webpack_require__(2);

var _imagesLoader = __webpack_require__(23);

var _constructorOfEntities = __webpack_require__(3);

var _constructorOfEntities2 = _interopRequireDefault(_constructorOfEntities);

var _keysEvents = __webpack_require__(5);

var _drawMap = __webpack_require__(4);

var _camera = __webpack_require__(11);

var _enemies = __webpack_require__(9);

var _changeCrash = __webpack_require__(6);

var _mapLevels = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var counter = exports.counter = 0;
// alert();
var canvasPosLeft = _consts.canvas.style.left;
var requestAnimFrame = function () {

    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();

//It's a permanent loop
var mainLoop = function mainLoop() {

    if (!_moveHero.animation.animation) return false;
    counter === 24 ? exports.counter = counter = 1 : (exports.counter = counter += 1, counter - 1);
    (0, _enemies.startMoveEnemies)();
    (0, _keysEvents.checkKeys)();
    (0, _changeCrash.crashOfEntities)();
    (0, _changeCrash.crashWithCoin)();
    (0, _changeCrash.crashWithStar)();
    (0, _moveHero.open)();
    if (_moveHero.marioHero.goUp) (0, _moveHero.jumpMario)();
    if (_moveHero.marioHero.goDown) (0, _moveHero.mariodown)();
    if (_moveHero.marioHero.checkQueen) (0, _changeCrash.checkTouchQueen)();
    (0, _changeCrash.checkTouchGround)();
    requestAnimFrame(mainLoop);
};

// Game starts after press buttonStart
var startGame = function startGame() {
    (0, _logic.cleanWindow)();
    _moveHero.animation.animation = true;
    (0, _imagesLoader.imagesLoader)(_consts.allSpritesUrl).then(function () {
        return (0, _logic.showCanvas)();
    }).then(function () {
        return (0, _drawMap.drawMap)(_mapLevels.map1);
    }).then(function () {
        return (0, _moveHero.drawMario)();
    }).then(function () {
        return mainLoop();
    });
};

var checkPageCoord = function checkPageCoord() {
    if (window.pageYOffset > 700) {
        _consts.buttonStart.classList.add('button-start-position-fixed');
        _consts.pageUp.classList.add('button-pageUp-position-fixed');
    } else if (window.pageYOffset < 400) {
        _consts.buttonStart.classList.remove('button-start-position-fixed');
        _consts.pageUp.classList.remove('button-pageUp-position-fixed');
    }
};

var startGameAgein = exports.startGameAgein = function startGameAgein() {
    _consts.gameOver.classList.remove('displayBlock');
    _camera.camera.x = 0;
    _consts.canvas.style.left = 0;

    startGame();
};

_consts.buttonStart.addEventListener('click', startGame);
_consts.buttonFullScreen.addEventListener('click', _logic.launchFullScreen);
_consts.buttonStartAgain.addEventListener('click', startGameAgein);

window.addEventListener('scroll', checkPageCoord);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.open = exports.openDoor = exports.goToSecondLevel = exports.fallMario = exports.mariodown = exports.jumpMario = exports.moveMarioLeft = exports.moveMarioRight = exports.stopMario = exports.drawMario = exports.marioHero = exports.animation = undefined;

var _constructorOfEntities = __webpack_require__(3);

var _constructorOfEntities2 = _interopRequireDefault(_constructorOfEntities);

var _consts = __webpack_require__(0);

var _index = __webpack_require__(1);

var _keysEvents = __webpack_require__(5);

var _changeCrash = __webpack_require__(6);

var _camera = __webpack_require__(11);

var _drawMap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = exports.animation = {
    animation: true
}; /**
    * Created by Dima on 06.12.2017.
    */
var marioHero = exports.marioHero = {};

var drawMario = exports.drawMario = function drawMario() {
    marioHero.checkQueen = false;
    marioHero.moveOnlyDown = false;
    marioHero.canOpenDoor = false;
    marioHero.goUp = false;
    marioHero.goDown = false;
    marioHero.canGoRight = true;
    marioHero.canGoLeft = true;
    marioHero.coordMario = [400, 550]; // Mario's coordinates in start game. After - current coordinates.
    marioHero.coordMarioInMamory = []; // Mario's coordinates in jump. 0 - top coord mario jump. 1 - coord when hero most return
    marioHero.coordOnsprite = [102, 4];
    marioHero.mario = new _constructorOfEntities2.default(_consts.spriteMarioUrl, marioHero.coordOnsprite[0], marioHero.coordOnsprite[1], 18, 30, marioHero.coordMario, 45, 50);
    marioHero.mario.define();
};

var stopMario = exports.stopMario = function stopMario() {

    _consts.context.clearRect(marioHero.coordMario[0], marioHero.coordMario[1], 45, 50); // Here maybe a mistake
    marioHero.mario.posX = 102;
    marioHero.mario.define();
    console.log(_drawMap.brickAll);
};

var moveMarioRight = exports.moveMarioRight = function moveMarioRight() {

    if (marioHero.coordMario[0] > 500) {
        (0, _camera.moveRecRight)();
    }

    (0, _changeCrash.crashMarioWithBrick)();

    marioHero.canGoRight ? marioHero.coordMario[0] += 3 : marioHero.coordMario[0] += 0;
    _consts.context.clearRect(marioHero.coordMario[0] - 3, marioHero.coordMario[1], 45, 50);
    marioHero.mario.define();

    if (_index.counter % 3 === 0) {
        marioHero.mario.posX === 156 ? marioHero.mario.posX = 120 : marioHero.mario.posX += 18;
    }
};

var moveMarioLeft = exports.moveMarioLeft = function moveMarioLeft() {

    if (marioHero.coordMario[0] - _camera.camera.x - 300) {
        (0, _camera.moveRecLeft)();
    }

    (0, _changeCrash.crashMarioWithBrick)();

    marioHero.canGoLeft ? marioHero.coordMario[0] -= 3 : marioHero.coordMario[0] += 0;
    _consts.context.clearRect(marioHero.coordMario[0] + 2, marioHero.coordMario[1], 45, 50);
    marioHero.mario.define();

    if (_index.counter % 3 === 0) {
        marioHero.mario.posX === 48 ? marioHero.mario.posX = 84 : marioHero.mario.posX -= 18;
    }
};

var jumpMario = exports.jumpMario = function jumpMario() {

    if (_index.counter % 3 === 0) {
        _consts.context.clearRect(marioHero.coordMario[0], marioHero.coordMario[1], 45, 50);

        if (marioHero.coordMario[1] != marioHero.coordMarioInMamory[0]) {
            marioHero.coordMario[1] -= 10;
        } else {
            marioHero.goDown = true;
            marioHero.goUp = false;
        }

        marioHero.mario.define();
    }
};

var mariodown = exports.mariodown = function mariodown() {

    if (_index.counter % 3 === 0) {
        _consts.context.clearRect(marioHero.coordMario[0], marioHero.coordMario[1] - 5, 45, 50);
        marioHero.coordMario[1] += 10;
        marioHero.mario.define();
    }
};

var fallMario = exports.fallMario = function fallMario() {

    marioHero.coordOnsprite = [6, 113];
    marioHero.mario = new _constructorOfEntities2.default(_consts.spriteMarioUrl, marioHero.coordOnsprite[0], marioHero.coordOnsprite[1], 24, 32, marioHero.coordMario, 50, 50);
    _consts.context.clearRect(marioHero.coordMario[0], marioHero.coordMario[1], 50, 50);
    marioHero.mario.define();
    animation.animation = false;
};

var goToSecondLevel = exports.goToSecondLevel = function goToSecondLevel() {

    if (marioHero.coordMario[0] > 1500 && marioHero.coordMario[0] < 1550 && marioHero.coordMario[1] === 450) {
        _consts.context.clearRect(marioHero.coordMario[0], marioHero.coordMario[1], 50, 50);
        marioHero.coordMario[1] = 680;
        marioHero.mario.define();
    }

    if (marioHero.coordMario[0] > 1500 && marioHero.coordMario[0] < 1600 && marioHero.coordMario[1] === 800) {
        _consts.context.clearRect(marioHero.coordMario[0], marioHero.coordMario[1], 50, 50);
        marioHero.coordMario[1] = 450;
        marioHero.coordMario[0] = 1500;
        marioHero.mario.define();
    }
};

var openDoor = exports.openDoor = function openDoor() {
    if (_changeCrash.counter2Value === 2) {
        marioHero.canOpenDoor = true;
    }
};

var open = exports.open = function open() {

    if (marioHero.canOpenDoor) {
        if (marioHero.coordMario[0] > 1950 && marioHero.coordMario[1] === 550) {
            var image = new Image();
            image.src = _consts.sprite3Url;
            _consts.context.clearRect(1950, 550, 150, 50);
            _consts.context.drawImage(image, 722, 225, 49, 52, 1900, 550, 50, 50);
            marioHero.coordMario[0] = 1850;
            marioHero.mario.define();
            marioHero.checkQueen = true;
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Dima on 06.12.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _consts = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constructorOfEntities = function () {
    function constructorOfEntities(url, posX, posY, sizeX, sizeY, entitieCoord, width, height, frames) {
        _classCallCheck(this, constructorOfEntities);

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

    _createClass(constructorOfEntities, [{
        key: 'define',
        value: function define() {
            var image = new Image();
            image.src = this.url;

            _consts.context.drawImage(image, this.posX, this.posY, this.sizeX, this.sizeY, this.entitieCoord[0], this.entitieCoord[1], this.width, this.height);
        }
    }, {
        key: 'createElem',
        value: function createElem() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var q = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var image = new Image();
            image.src = this.url;

            _consts.context.drawImage(image, this.posX + q, this.posY, this.sizeX, this.sizeY, this.entitieCoord[0] + x, this.entitieCoord[1] + y, this.width, this.height);
        }
    }]);

    return constructorOfEntities;
}();

exports.default = constructorOfEntities;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.drawMap = exports.brickStarArr = exports.brickCoinArr = exports.brickAll = exports.brickqQuestCoord = exports.bricksCoord = undefined;

var _consts = __webpack_require__(0);

var _constructorOfEntities = __webpack_require__(3);

var _constructorOfEntities2 = _interopRequireDefault(_constructorOfEntities);

var _mapLevels = __webpack_require__(10);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Dima on 08.12.2017.
 */

var x = 0; //Coordinates when will draw a new image
var y = 0;
var q = 0;

var arr = [];

//Create a new parts for map
var brick = new _constructorOfEntities2.default(_consts.sprite3Url, 800, 5, 32, 30, [x, y], 50, 50);
var brickQuestionMark = new _constructorOfEntities2.default(_consts.sprite3Url, 876, 5, 29, 29, [x, y], 50, 50);
var brickCoin = new _constructorOfEntities2.default(_consts.sprite3Url, 361, 13, 20, 29, [x, y], 50, 50);
var brickStar = new _constructorOfEntities2.default(_consts.sprite3Url, 436, 6, 35, 35, [x, y], 50, 50);
var brickMushroom = new _constructorOfEntities2.default(_consts.sprite3Url, 9, 53, 45, 45, [x, y], 50, 50);
var brickMushroom2 = new _constructorOfEntities2.default(_consts.sprite3Url, 160, 8, 44, 44, [x, y], 50, 50);
var brickFlower = new _constructorOfEntities2.default(_consts.sprite3Url, 134, 138, 48, 48, [x, y], 50, 50);
var brickTurtle = new _constructorOfEntities2.default(_consts.sprite3Url, 740, 151, 38, 38, [x, y], 50, 50);
var blockEmpty = new _constructorOfEntities2.default(_consts.sprite3Url, 910, 0, 25, 25, [x, y], 50, 50);
var tube_1 = new _constructorOfEntities2.default(_consts.sprite3Url, 728, 6, 31, 31, [x, y], 50, 50);
var tube_2 = new _constructorOfEntities2.default(_consts.sprite3Url, 759, 6, 31, 31, [x, y], 50, 50);
var tube_3 = new _constructorOfEntities2.default(_consts.sprite3Url, 728, 37, 31, 31, [x, y], 50, 50);
var tube_4 = new _constructorOfEntities2.default(_consts.sprite3Url, 759, 37, 31, 31, [x, y], 50, 50);
var queen = new _constructorOfEntities2.default(_consts.sprite3Url, 623, 51, 53, 53, [x, y], 50, 50);
var door = new _constructorOfEntities2.default(_consts.sprite3Url, 651, 226, 55, 51, [x, y], 50, 50);

//Here we keep the parts of the map
var entity = new Map();
var parts = [];

var bricksCoord = exports.bricksCoord = [];
var brickqQuestCoord = exports.brickqQuestCoord = [];
var brickAll = exports.brickAll = [];
var brickCoinArr = exports.brickCoinArr = [];
var brickStarArr = exports.brickStarArr = [];

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

var addHindrance = function addHindrance(item, obj) {
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
var drawMap = exports.drawMap = function drawMap(map) {

    map.forEach(function (item) {
        item.forEach(function (itemInner) {

            var entityInstance = entity.get(itemInner);
            addHindrance(itemInner, entityInstance);
            // debugger;
            var createElem = entityInstance.createElem.bind(entityInstance, x, y, q);
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkKeys = exports.keysDown = exports.lastPressButton = undefined;

var _moveHero = __webpack_require__(2);

var _consts = __webpack_require__(0);

var lastPressButton = exports.lastPressButton = []; /**
                                                     * Created by Dima on 07.12.2017.
                                                     */

var keysDown = exports.keysDown = {
    65: false,
    68: false,
    83: false,
    87: false
};

window.addEventListener('keyup', function (event) {
    keysDown[event.keyCode] = false;

    (0, _moveHero.stopMario)();
});

window.addEventListener('keydown', function (event) {
    keysDown[event.keyCode] = true;
});

var checkKeys = exports.checkKeys = function checkKeys() {
    for (var key in keysDown) {
        if (keysDown[key]) {
            switch (key) {
                case '87':
                    if (!_moveHero.marioHero.goDown) _moveHero.marioHero.goUp = true; //Button W
                    _consts.audioJump.play();
                    break;
                case '83':
                    //Button S
                    (0, _moveHero.goToSecondLevel)();
                    break;
                case '65':
                    lastPressButton.unshift(65);
                    lastPressButton.length = 2;
                    (0, _moveHero.moveMarioLeft)(); //Button A
                    break;
                case '68':
                    lastPressButton.unshift(68);
                    lastPressButton.length = 2;
                    (0, _moveHero.moveMarioRight)(); //Button D
                    break;
                case 32:
                    isPressSpace();
                    break;
                case 13:
                    isPressInter();
                    break;
            }
        }
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkTouchQueen = exports.crashWithStar = exports.crashWithCoin = exports.checkTouchGround = exports.checkCrashWithLavel = exports.changeCrash = exports.crashMarioWithBrick = exports.crashOfEntities = exports.counter2Value = exports.counter1Value = undefined;

var _enemies = __webpack_require__(9);

var _moveHero = __webpack_require__(2);

var _consts = __webpack_require__(0);

var _drawMap = __webpack_require__(4);

var _keysEvents = __webpack_require__(5);

var counter1Value = exports.counter1Value = 0; /**
                                                * Created by Dima on 12.12.2017.
                                                */

var counter2Value = exports.counter2Value = 0;

var crashOfEntities = exports.crashOfEntities = function crashOfEntities() {

    if (_moveHero.marioHero.coordMario[1] > 1000) {
        if (!_moveHero.animation.animation) return false;
        _consts.audioMenu.pause();
        _consts.audioCrash.play();
        (0, _moveHero.fallMario)();
        _consts.gameOver.classList.add('displayBlock');
    }

    _enemies.enemies.forEach(function (item) {
        if (Math.abs(item.posOnMap[0] - 5 - _moveHero.marioHero.coordMario[0] - 5) <= 50 && Math.abs(item.posOnMap[1] + 5 - _moveHero.marioHero.coordMario[1] + 5) <= 50) {
            if (!_moveHero.animation.animation) return false;
            _consts.audioMenu.pause();
            _consts.audioCrash.play();
            (0, _moveHero.fallMario)();
            _consts.gameOver.classList.add('displayBlock');
        }
    });
};

var crash = false;

var checkInJumping = function checkInJumping(item) {

    if (_moveHero.marioHero.coordMario[1] + 50 <= item[1]) {
        _moveHero.marioHero.canGoRight = true;
        _moveHero.marioHero.canGoLeft = true;
        _moveHero.marioHero.goDown = false;
    }
};

var crashMarioWithBrick = exports.crashMarioWithBrick = function crashMarioWithBrick() {
    var arrLength = _drawMap.brickAll.length;

    _drawMap.brickAll.forEach(function (item, i) {

        if (Math.abs(item[0] - _moveHero.marioHero.coordMario[0]) <= 50 && Math.abs(item[1] - _moveHero.marioHero.coordMario[1] + 1) <= 50) {
            crash = true;
        }

        if (_moveHero.marioHero.goUp || _moveHero.marioHero.goDown && crash) {
            checkInJumping(item);
        }

        if (i + 1 === arrLength && crash === true) {
            if (_keysEvents.lastPressButton[0] === 65 && _keysEvents.lastPressButton[1] === 65) {
                _moveHero.marioHero.canGoLeft = false;
                _moveHero.marioHero.canGoRight = true;
            } else if (_keysEvents.lastPressButton[0] === 68 && _keysEvents.lastPressButton[1] === 65) {
                _moveHero.marioHero.canGoLeft = true;
                _moveHero.marioHero.canGoRight = true;
            } else if (_keysEvents.lastPressButton[0] === 68 && _keysEvents.lastPressButton[1] === 68) {
                _moveHero.marioHero.canGoLeft = true;
                _moveHero.marioHero.canGoRight = false;
            } else if (_keysEvents.lastPressButton[0] === 65 && _keysEvents.lastPressButton[1] === 68) {
                _moveHero.marioHero.canGoLeft = true;
                _moveHero.marioHero.canGoRight = true;
            }
        }
    });

    crash = false;
};

var changeCrash = exports.changeCrash = function changeCrash(enem) {

    _drawMap.brickqQuestCoord.forEach(function (coord) {
        if (coord[0] - 50 === enem.posOnMap[0] && coord[1] === enem.posOnMap[1] || coord[0] + 50 === enem.posOnMap[0] && coord[1] === enem.posOnMap[1]) {
            if (enem.moveRight) {
                enem.moveRight = false;
                (0, _enemies.changePosToLeft)(enem);
            } else {
                enem.moveRight = true;
                (0, _enemies.changePosToRight)(enem);
            }
        }
    });
};

var checkCrashWithLavel = exports.checkCrashWithLavel = function checkCrashWithLavel(item) {

    if (Math.abs(item[0] - _moveHero.marioHero.coordMario[0]) <= 50 && Math.abs(item[1] - _moveHero.marioHero.coordMario[1]) <= 50 && _moveHero.marioHero.coordMario[1] - item[1] === 50) {

        _moveHero.marioHero.goUp = false;
        _moveHero.marioHero.goDown = true;
    }
};

var checkTouchGround = exports.checkTouchGround = function checkTouchGround() {
    var length = _drawMap.brickAll.length;
    var crash = false;

    _drawMap.brickAll.forEach(function (item, i) {

        if (Math.abs(-5 + item[0] - 5 - _moveHero.marioHero.coordMario[0]) <= 50 && Math.abs(item[1] - _moveHero.marioHero.coordMario[1] - 1) <= 50) {
            _moveHero.marioHero.coordMarioInMamory[1] = item[1];
            _moveHero.marioHero.coordMarioInMamory[0] = item[1] - 120;
            crash = true;
        }

        if (_moveHero.marioHero.goUp) {
            checkCrashWithLavel(item);
        }

        if (i + 1 === length && !crash && _moveHero.marioHero.goDown != true && _moveHero.marioHero.goUp != true) {
            _moveHero.marioHero.goDown = true;
        } else {
            _moveHero.marioHero.goDown = false;
        }
    });
};

var crashWithCoin = exports.crashWithCoin = function crashWithCoin() {
    _drawMap.brickCoinArr.forEach(function (item) {

        if (Math.abs(item[0] - _moveHero.marioHero.coordMario[0]) <= 50 && Math.abs(item[1] - _moveHero.marioHero.coordMario[1] - 5) <= 50) {
            _consts.audioCoin.play();
            _consts.context.clearRect(item[0], item[1], 50, 50);
            _drawMap.brickCoinArr.splice(_drawMap.brickCoinArr.indexOf(item), 1);
            exports.counter2Value = counter2Value += 1;
            _consts.counter2.innerHTML = counter2Value + ' ';
            debugger;
            (0, _moveHero.openDoor)();
        }
    });
};

var crashWithStar = exports.crashWithStar = function crashWithStar() {
    _drawMap.brickStarArr.forEach(function (item) {

        if (Math.abs(item[0] - _moveHero.marioHero.coordMario[0]) <= 50 && Math.abs(item[1] - _moveHero.marioHero.coordMario[1] - 5) <= 50) {
            _consts.audioCoin.play();
            _consts.context.clearRect(item[0], item[1], 50, 50);
            _drawMap.brickStarArr.splice(_drawMap.brickStarArr.indexOf(item), 1);
            exports.counter1Value = counter1Value += 1;
            _consts.counter1.innerHTML = counter1Value + ' ';
        }
    });
};

var checkTouchQueen = exports.checkTouchQueen = function checkTouchQueen() {
    if (_moveHero.marioHero.coordMario[0] > 1800 && _moveHero.marioHero.coordMario[0] < 1900) {
        _moveHero.animation.animation = false;
        _consts.gameWin.classList.add('displayBlock');
        _consts.audioMenu.pause();
        _consts.audioWin.play();
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bg-in-game.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bg-in-menu-2.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.startMoveEnemies = exports.changePosToLeft = exports.changePosToRight = exports.enemies = undefined;

var _constructorOfEntities = __webpack_require__(3);

var _constructorOfEntities2 = _interopRequireDefault(_constructorOfEntities);

var _consts = __webpack_require__(0);

var _index = __webpack_require__(1);

var _drawMap = __webpack_require__(4);

var _changeCrash = __webpack_require__(6);

var _moveHero = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Dima on 11.12.2017.
 */
var enemies = exports.enemies = [{
    posOnMap: [680, 550],
    posStart: [7, 53],
    moveRight: true,
    posOnsprite: [7, 53, 97],
    size: [45, 45],
    get newImage() {
        var nextEnemy = new _constructorOfEntities2.default(_consts.sprite3Url, this.posOnsprite[0], this.posOnsprite[1], this.size[0], this.size[1], this.posOnMap, 50, 50);
        nextEnemy.createElem();
    }
}, {
    posOnMap: [1100, 550],
    posStart: [158, 8],
    moveRight: true,
    posOnsprite: [158, 8, 246],
    size: [44, 44],
    get newImage() {
        var nextEnemy = new _constructorOfEntities2.default(_consts.sprite3Url, this.posOnsprite[0], this.posOnsprite[1], this.size[0], this.size[1], this.posOnMap, 50, 50);
        nextEnemy.createElem();
    }
}];

var nextAnimation = function nextAnimation(item) {

    if (item.posOnsprite[0] === item.posOnsprite[2]) {
        item.posOnsprite[0] = item.posStart[0];
    } else {
        item.posOnsprite[0] += item.size[0];
    }
};

var changePosToRight = exports.changePosToRight = function changePosToRight(item) {

    _consts.context.clearRect(item.posOnMap[0], item.posOnMap[1], 50, 50);
    item.newImage;
    item.posOnMap[0] += 5;
    // Chenge enemy image
    nextAnimation(item);
};

var changePosToLeft = exports.changePosToLeft = function changePosToLeft(item) {

    _consts.context.clearRect(item.posOnMap[0] + 5, item.posOnMap[1], 50, 50);
    item.newImage;
    item.posOnMap[0] -= 5;
    // Chenge enemy image
    nextAnimation(item);
};

var startMoveEnemies = exports.startMoveEnemies = function startMoveEnemies() {
    if (!_moveHero.animation) return false;

    enemies.forEach(function (enem) {
        (0, _changeCrash.changeCrash)(enem);
        if (_index.counter % 8 === 0) {

            if (enem.moveRight) {
                changePosToRight(enem);
            } else {
                changePosToLeft(enem);
            }
        }
    });
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Dima on 09.12.2017.
 */

var map1 = exports.map1 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 2, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 11, 12, 0, 0, 0, 13, 0, 0, 14, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 9, 10, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0], [0, 8, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 1, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 11, 12, 1, 0, 0, 0, 2, 2, 1, 0, 0, 0, 0, 8], [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.moveRecLeft = exports.moveRecRight = exports.camera = undefined;

var _moveHero = __webpack_require__(2);

var camera = exports.camera = {
    x: 0,
    // y: 0,

    move: function move(x, y) {
        this.x += x;
        // this.y += y;
    }
};

//Move camera to the right
/**
 * Created by Dima on 10.12.2017.
 */

var moveRecRight = exports.moveRecRight = function moveRecRight() {
    camera.move(-3);
    if (_moveHero.marioHero.canGoRight) {
        canvas.style.left = camera.x + 'px';
    }
};

//Move camera to the left
var moveRecLeft = exports.moveRecLeft = function moveRecLeft() {
    camera.move(3);
    if (_moveHero.marioHero.canGoLeft) {
        canvas.style.left = camera.x + 'px';
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(18)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-2!../../node_modules/sass-loader/lib/loader.js!../../node_modules/resolve-url-loader/index.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-2!../../node_modules/sass-loader/lib/loader.js!../../node_modules/resolve-url-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(undefined);
// imports


// module
exports.push([module.i, "* {\n  vertical-align: baseline;\n  font-weight: inherit;\n  font-style: inherit;\n  border: 0 none;\n  outline: 0;\n  padding: 0;\n  margin: 0; }\n\nhtml {\n  font-size: 10px; }\n\nbody {\n  background: url(" + __webpack_require__(7) + ");\n  background-size: 100% 100%;\n  overflow-x: hidden; }\n\na {\n  text-decoration: none; }\n\n.display-flex-center, .wrapper nav .button-start-description div, .wrapper nav .button-start-description button, .wrapper nav .game-name {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.wrapper {\n  background: url(" + __webpack_require__(15) + ");\n  opacity: 0.9;\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100vh;\n  margin-bottom: 5rem; }\n  .wrapper nav {\n    display: flex;\n    justify-content: flex-start;\n    padding-top: 5rem; }\n    .wrapper nav .button-start-description div, .wrapper nav .button-start-description button {\n      width: 20rem;\n      margin-bottom: 2rem;\n      margin-left: 18rem;\n      height: 6rem;\n      color: white;\n      border: 2px solid silver;\n      border-radius: 2rem;\n      font-size: 2rem;\n      background: rgba(0, 180, 254, 0.6); }\n      .wrapper nav .button-start-description div:hover, .wrapper nav .button-start-description button:hover {\n        background: rgba(0, 180, 254, 0.9);\n        cursor: pointer; }\n    .wrapper nav a {\n      color: #ffffff; }\n    .wrapper nav .game-name {\n      color: white;\n      font-size: 10rem;\n      flex-direction: column;\n      margin-left: 5rem;\n      font-family: \"Brush Script MT\"; }\n\n.button-up {\n  display: none;\n  width: 20rem;\n  margin-bottom: 2rem;\n  margin-left: 18rem;\n  height: 6rem;\n  color: white;\n  border: 2px solid silver;\n  border-radius: 2rem;\n  font-size: 2rem;\n  background: rgba(0, 180, 254, 0.6); }\n\n.button-pageUp-position-fixed {\n  display: block;\n  position: fixed;\n  left: -10rem;\n  top: 10rem; }\n\n.button-start-position-fixed {\n  position: fixed;\n  right: 5rem;\n  top: 10rem; }\n\n.loading {\n  display: none;\n  width: 200px;\n  height: 200px;\n  color: red;\n  font-size: 2rem; }\n\n.canvas {\n  display: none;\n  position: absolute;\n  z-index: 1; }\n\n.starsCounter, .coinCounter {\n  width: 20rem;\n  height: 5rem;\n  position: absolute;\n  z-index: 10;\n  left: 30%;\n  display: none;\n  font-size: 3rem;\n  color: #ffffff; }\n\n.coinCounter {\n  left: 60%; }\n\n.game_over {\n  display: none;\n  width: 30rem;\n  height: 20rem;\n  border-radius: 5%;\n  position: absolute;\n  left: 35%;\n  top: 15rem;\n  border: 0.2rem solid white;\n  color: #ffffff;\n  text-align: center;\n  background: #0145F3;\n  opacity: 0.8;\n  z-index: 20;\n  padding: 2rem; }\n  .game_over h3 {\n    font-size: 4rem; }\n  .game_over p {\n    font-size: 3rem; }\n  .game_over button {\n    width: 10rem;\n    height: 5rem;\n    border: 0.2rem solid white;\n    border-radius: 0.5rem;\n    margin-top: 3rem; }\n    .game_over button:hover {\n      background: greenyellow; }\n\n.game_win {\n  display: none;\n  width: 30rem;\n  height: 20rem;\n  border-radius: 5%;\n  position: absolute;\n  left: 35%;\n  top: 15rem;\n  border: 0.2rem solid white;\n  color: #ffffff;\n  text-align: center;\n  background: #0145F3;\n  opacity: 0.8;\n  z-index: 20;\n  padding: 2rem;\n  font-size: 4rem; }\n\n.wrapper_2 {\n  background: url(" + __webpack_require__(7) + ");\n  background-size: 100% 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.controls-manual {\n  width: 80%;\n  height: 100vh;\n  border: 0.2rem solid #ffffff;\n  border-radius: 1rem;\n  background: url(" + __webpack_require__(8) + ");\n  background-size: 100% 100%;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 5rem; }\n  .controls-manual h3 {\n    font-size: 4rem; }\n  .controls-manual .how_play {\n    height: 10%;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.keys-discription {\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n  .keys-discription div {\n    display: flex;\n    justify-content: space-around; }\n  .keys-discription figure {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n    font-size: 2rem;\n    width: 25%; }\n    .keys-discription figure figcaption {\n      text-align: center; }\n\n.screenshots {\n  width: 80%;\n  height: 100vh;\n  border: 0.2rem solid #ffffff;\n  border-radius: 1rem;\n  background: url(" + __webpack_require__(16) + ");\n  background-size: 100% 100%;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-bottom: 5rem; }\n  .screenshots .first {\n    display: flex;\n    justify-content: space-around; }\n  .screenshots .second {\n    display: flex;\n    justify-content: space-around; }\n  .screenshots figure {\n    width: 40%; }\n  .screenshots img {\n    width: 40rem;\n    height: 20rem; }\n  .screenshots figcaption {\n    font-size: 2rem;\n    text-align: center; }\n\n.other-info {\n  width: 80%;\n  height: 100vh;\n  border: 0.2rem solid #ffffff;\n  border-radius: 1rem;\n  background: url(" + __webpack_require__(17) + ");\n  background-size: 100% 100%;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 5rem; }\n  .other-info img {\n    width: 80rem;\n    height: 50rem;\n    margin: auto;\n    border-radius: 1.5rem; }\n  .other-info div {\n    width: 100%;\n    height: 10rem;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .other-info h2 {\n    font-size: 3rem;\n    text-align: center;\n    border: 0.2rem solid #ffffff;\n    border-radius: 1rem;\n    padding: 1rem;\n    background: goldenrod; }\n\n.bg {\n  width: 100%;\n  height: 100vh;\n  background: url(" + __webpack_require__(8) + ");\n  background-size: 100% 100%;\n  display: none; }\n\nfooter {\n  width: 100%;\n  height: 5rem;\n  background: mediumblue; }\n  footer h3 {\n    color: #ffffff;\n    font-size: 3rem;\n    text-align: center; }\n\n.displayNone {\n  display: none; }\n\n.displayBlock {\n  display: block; }\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bg-in-menu.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bg-in-menu-3.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bg-in-menu-4.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(19);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hideLoading = exports.showLoading = exports.launchFullScreen = exports.clearCanvas = exports.showCanvas = exports.cleanWindow = undefined;

var _consts = __webpack_require__(0);

var _index = __webpack_require__(1);

/**
 * Created by Dima on 30.11.2017.
 */

var cleanWindow = exports.cleanWindow = function cleanWindow() {
    _consts.wrapper.classList.add('displayNone');
    _consts.controlsManual.classList.add('displayNone');
    _consts.screenshots.classList.add('displayNone');
    _consts.footer.classList.add('displayNone');
    _consts.otherInfo.classList.add('displayNone');
    _consts.coinCounter.classList.add('displayBlock');
    _consts.bg.classList.add('displayBlock');
    _consts.starsCounter.classList.add('displayBlock');
};

var showCanvas = exports.showCanvas = function showCanvas() {
    _consts.canvas.classList.add('displayBlock');
};

var clearCanvas = exports.clearCanvas = function clearCanvas() {
    _consts.context.clearRect(1, 1, _consts.canvas.width, _consts.canvas.height);
    debugger;
};

var launchFullScreen = exports.launchFullScreen = function launchFullScreen() {
    if (_consts.canvas.requestFullScreen) {
        _consts.canvas.requestFullScreen();
    } else if (_consts.canvas.mozRequestFullScreen) {
        _consts.canvas.mozRequestFullScreen();
    } else if (_consts.canvas.webkitRequestFullScreen) {
        _consts.canvas.webkitRequestFullScreen();
    }
};

var showLoading = exports.showLoading = function showLoading() {
    loadingWindiw.classList.add('displayBlock');
};

var hideLoading = exports.hideLoading = function hideLoading() {
    loadingWindiw.classList.toggle('displayBlock');
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = undefined;

var _consts = __webpack_require__(0);

var _imagesConstructor = __webpack_require__(22);

var _imagesConstructor2 = _interopRequireDefault(_imagesConstructor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Dima on 02.12.2017.
 */

var create = exports.create = function create() {
    var image = new Image();
    image.src = '../public/images/sprite-1.png';
    var sprite = new _imagesConstructor2.default(image, 30, 30);
    sprite.define('bricks', 9.15, 0);
    sprite.draw('bricks', _consts.context, 30, 50);
    console.log();
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Dima on 04.12.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _consts = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//It's creating a new part for  the map

var ImagesConstructor = function () {
    function ImagesConstructor(image, width, height) {
        _classCallCheck(this, ImagesConstructor);

        this.image = image;
        this.width = width;
        this.height = height;
        this.part = new Map();
    }

    _createClass(ImagesConstructor, [{
        key: 'define',
        value: function define(name, x, y) {
            var bufferElem = document.createElement('canvas');
            bufferElem.width = this.width;
            bufferElem.height = this.height;

            bufferElem.getContext('2d').drawImage(this.image, x * this.width, y * this.height, this.width, this.height, 0, 0, this.width, this.height);
            this.part.set(name, bufferElem);
        }
    }, {
        key: 'draw',
        value: function draw(name, context, x, y) {
            var bufferElem = this.part.get(name);
            context.drawImage(bufferElem, x, y);
        }
    }]);

    return ImagesConstructor;
}();

exports.default = ImagesConstructor;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.imagesLoader = undefined;

var _consts = __webpack_require__(0);

//Use this function for load all sprites before the game
var imagesLoader = exports.imagesLoader = function imagesLoader(arr) {
    var promises = arr.map(function (item) {
        return new Promise(function (resolve) {
            var image = new Image();
            image.src = item;
            image.addEventListener('load', function () {
                resolve();
            });
        });
    });
    return Promise.all(promises);
}; /**
    * Created by Dima on 06.12.2017.
    */

/***/ })
/******/ ]);