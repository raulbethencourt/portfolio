//tetrominoes colors
const blue = 'url(' + require(`@/assets/images/tetrisBlocks/blue_block.png`) + ')';
const purple = 'url(' + require(`@/assets/images/tetrisBlocks/purple_block.png`) + ')';
const peach = 'url(' + require(`@/assets/images/tetrisBlocks/peach_block.png`) + ')';
const green = 'url(' + require(`@/assets/images/tetrisBlocks/green_block.png`) + ')';
const yellow = 'url(' + require(`@/assets/images/tetrisBlocks/yellow_block.png`) + ')';
const colors = [blue, purple, peach, green, yellow];

//constants
const width = 10;
const displayWidth = 4;
const displayIndex = 0;

//The Tetrominoes
const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
];

const zTetromino = [
    [width * 2, width + 1, width * 2 + 1, width + 2],
    [0, width, width + 1, width * 2 + 1],
    [width * 2, width + 1, width * 2 + 1, width + 2],
    [0, width, width + 1, width * 2 + 1]
];

const tTetromino = [
    [width, 1, width + 1, width + 2],
    [1, width + 1, width * 2 + 1, width + 2],
    [width, width + 1, width * 2 + 1, width + 2],
    [width, 1, width + 1, width * 2 + 1]
];

const oTetromino = [
    [0, width, 1, width + 1],
    [0, width, 1, width + 1],
    [0, width, 1, width + 1],
    [0, width, 1, width + 1]
];

const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
];

const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

//the Tetrominos without rotations
const upNextTetrominoes = [
    [1, displayWidth + 1, displayWidth * 2 + 1, 2], //lTetromino
    [displayWidth * 2, displayWidth + 1, displayWidth * 2 + 1, displayWidth + 2], //zTetromino
    [displayWidth, 1, displayWidth + 1, displayWidth + 2], //tTetromino
    [0, displayWidth, 1, displayWidth + 1], //oTetromino
    [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] //iTetromino
];

export {
    blue,
    purple,
    peach,
    green,
    yellow,
    width,
    colors,
    lTetromino,
    zTetromino,
    tTetromino,
    oTetromino,
    theTetrominoes,
    displayWidth,
    displayIndex,
    upNextTetrominoes,
};
