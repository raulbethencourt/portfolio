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
        setInterval(moveDown, 700);
    }

    //assign funtions to keyCodes
    function control(evt) {
        evt.preventDefault();
        switch (evt.keyCode) {
            case 37:
                moveLeft();
                break;
            case 39:
                moveRight();
                break;
            // case 38:
            //     rotate+();
            //     break;
            case 40:
                moveDown();
                break;
        }
    }
    document.addEventListener('keydown', control);

    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

    //freeze function
    function freeze() {
        if (
            current.some((i) =>
                squares[currentPosition + i + width].classList.contains('taken')
            )
        ) {
            current.forEach((i) =>
                squares[currentPosition + i].classList.add('taken')
            );
            //start a new tetromino falling
            random = Math.floor(Math.random() * theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            currentPosition = Math.floor(Math.random() * 8);
            draw();
        }
    }

    //move the tetromino left, unless is at the edge or there is a blockage
    function moveLeft() {
        undraw();
        const isAtLeftEdge = current.some(
            (i) => (currentPosition + i) % width === 0
        );

        if (!isAtLeftEdge) currentPosition -= 1;

        if (
            current.some((i) =>
                squares[currentPosition + i].classList.contains('taken')
            )
        ) {
            currentPosition += 1;
        }
        draw();
    }

    //move the tetromino right, unless is at the edge or ther is a blockage
    function moveRight() {
        undraw();
        const isAtRightEdge = current.some(
            (i) => (currentPosition + i) % width === width - 1
        );

        if (!isAtRightEdge) currentPosition += 1;

        if (
            current.some((i) =>
                squares[currentPosition + i].classList.contains('taken')
            )
        ) {
            currentPosition -= 1;
        }
        draw();
    }

    //rotate the tetromino
    function rotate() {
        
    }
    //TODO 1h02

    timerId();
};
