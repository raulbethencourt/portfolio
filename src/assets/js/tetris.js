// Launch app
document.addEventListener('readystatechange', (evt) => {
    if (evt.target.readyState === 'complete') {
        initApp();
    }
});

const initApp = () => {
    const grid = document.getElementById('grid');
    let squares = Array.from(document.querySelectorAll('#grid .square'));
    const scoreDisplay = document.getElementById('score');
    const startBtn = document.getElementById('startBtn');
    const width = 10;
    let nextRandom = 0;
    let timer;
    let score = 0;

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
            case 38:
                rotate();
                break;
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
            random = nextRandom;
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            currentPosition = Math.floor(Math.random() * 8);
            draw();
            displayShape();
            addScore();
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
        undraw();
        currentRotation++;

        if (currentRotation === current.length) {
            //if the current rotation gets to 4, make it go back to 0
            currentRotation = 0;
        }

        current = theTetrominoes[random][currentRotation];
        draw();
    }

    //show up-next tetromino in mini-grid display
    const displaySquares = document.querySelectorAll('#mini-grid .square');
    const displayWidth = 4;
    let displayIndex = 0;

    //the Tetrominos without rotations
    const upNextTetrominoes = [
        [1, displayWidth + 1, displayWidth * 2 + 1, 2], //lTetromino
        [
            displayWidth * 2,
            displayWidth + 1,
            displayWidth * 2 + 1,
            displayWidth + 2
        ], //zTetromino
        [displayWidth, 1, displayWidth + 1, displayWidth + 2], //tTetromino
        [0, displayWidth, 1, displayWidth + 1], //oTetromino
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] //iTetromino
    ];

    //display the shape in the mini-grid display
    function displayShape() {
        //remove any trace of a tetromino form the entire grid
        displaySquares.forEach((square) => {
            square.classList.remove('tetromino');
        });
        //display new tetromino
        upNextTetrominoes[nextRandom].forEach((i) => {
            displaySquares[displayIndex + i].classList.add('tetromino');
        });
    }

    //add functionality to the button
    startBtn.addEventListener('click', () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
        } else {
            draw();
            timer = setInterval(moveDown, 800);
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            displayShape();
        }
    });

    //add score
    function addScore() {
        for (let i = 0; i < 199; i += width) {
            const row = [
                i,
                i + 1,
                i + 2,
                i + 3,
                i + 4,
                i + 5,
                i + 6,
                i + 7,
                i + 8,
                i + 9
            ];

            if (
                row.every((index) => squares[index].classList.contains('taken'))
            ) {
                score += 10;
                scoreDisplay.innerHTML = score;
                row.forEach((index) => {
                    squares[index].classList.remove('taken');
                    squares[index].classList.remove('tetromino');
                    squares[index].style.backgroundColor = '';
                });
                const squaresRemoved = squares.splice(i, width);
                squares = squaresRemoved.concat(squares);
                squares.forEach((cell) => grid.appendChild(cell));
            }
        }
    }
};
