// Launch app
document.addEventListener('readystatechange', (evt) => {
    if (evt.target.readyState === 'complete') {
        initApp();
    }
});

const initApp = () => {
    const grid = document.getElementById('grid');
    let squares = Array.from(document.querySelectorAll('#grid .square'));
    const ScoreDisplay = document.getElementById('score');
    const StartBtn = document.getElementById('startBtn');
    const width = 10;

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

    const theTetrominoes = [
        lTetromino,
        zTetromino,
        tTetromino,
        oTetromino,
        iTetromino
    ];

    let currentPosition = 4;
    let currentRotation = 0;

    //randomly select rotation in the first rotation
    let random = Math.floor(Math.random() * theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];

    //the first rotation in a random tetromino
    function draw() {
        current.forEach((i) => {
            squares[currentPosition + i].classList.add('tetromino');
        });
    }

    //undraw the tetromino
    function undraw() {
        current.forEach((i) => {
            squares[currentPosition + i].classList.remove('tetromino');
        });
    }

    //make the tetromino move down every second
    function timerId() {
        setInterval(moveDown, 1000);
    }

    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

    //freeze function
    function freeze() {
        if (current.some((i) => squares[currentPosition + i + width].classList.contains('taken')
        )) {
            current.forEach((i) => squares[currentPosition + i].classList.add('taken')
            );
            //start a new tetromino falling
            random = Math.floor(Math.random() * theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            currentPosition = 4;
            draw();
        }
    }

    console.log(squares);
    //TODO 51mnts

    timerId();
};
