// Launch app
document.addEventListener('readystatechange', evt => {
    if (evt.target.readyState === 'complete') {
        initApp();
    }
});

const initApp = () => {
    const blue = 'url(' + require(`@/assets/images/tetrisBlocks/blue_block.png`) + ')';
    const purple = 'url(' + require(`@/assets/images/tetrisBlocks/purple_block.png`) + ')';
    const peach = 'url(' + require(`@/assets/images/tetrisBlocks/peach_block.png`) + ')';
    const green = 'url(' + require(`@/assets/images/tetrisBlocks/green_block.png`) + ')';
    const yellow = 'url(' + require(`@/assets/images/tetrisBlocks/yellow_block.png`) + ')';
    const grid = document.getElementById('grid');
    let squares = Array.from(document.querySelectorAll('#grid .square'));
    const scoreDisplay = document.getElementById('score');
    const linesDisplay = document.getElementById('lines');
    const startBtn = document.getElementById('startBtn');
    const width = 10;
    let nextRandom = 0;
    let timer;
    let score = 0;
    let lines = 0;
    const colors = [blue, purple, peach, green, yellow];
    let speed = 1000;
    let points = 30;

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

    let currentPosition = 3;
    let currentRotation = 0;

    //randomly select rotation in the first rotation
    let random = Math.floor(Math.random() * theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];

    //the first rotation in a random tetromino
    function draw() {
        current.forEach(i => {
            squares[currentPosition + i].classList.add('tetromino');
            squares[currentPosition + i].style.backgroundImage = colors[random];
            squares[currentPosition + i].style.backgroundSize = '100%';
        });
    }

    //undraw the tetromino
    function undraw() {
        current.forEach(i => {
            squares[currentPosition + i].classList.remove('tetromino');
            squares[currentPosition + i].style.backgroundImage = '';
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
        if (current.some(i => squares[currentPosition + i + width].classList.contains('taken'))) {
            current.forEach(i => squares[currentPosition + i].classList.add('taken'));
            //start a new tetromino falling
            random = nextRandom;
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            currentPosition = Math.floor(Math.random() * 7);
            draw();
            displayShape();
            addScore();
            gameOver();
        }
    }

    //move the tetromino left, unless is at the edge or there is a blockage
    function moveLeft() {
        undraw();
        const isAtLeftEdge = current.some(i => (currentPosition + i) % width === 0);

        if (!isAtLeftEdge) currentPosition -= 1;

        if (current.some(i => squares[currentPosition + i].classList.contains('taken'))) {
            currentPosition += 1;
        }
        draw();
    }

    //move the tetromino right, unless is at the edge or ther is a blockage
    function moveRight() {
        undraw();
        const isAtRightEdge = current.some(i => (currentPosition + i) % width === width - 1);

        if (!isAtRightEdge) currentPosition += 1;

        if (current.some(i => squares[currentPosition + i].classList.contains('taken'))) {
            currentPosition -= 1;
        }
        draw();
    }

    //FIX ROTATION OF TETROMINOS A THE EDGE
    function isAtRight() {
        return current.some(i => (currentPosition + i + 1) % width === 0);
    }

    function isAtLeft() {
        return current.some(i => (currentPosition + i) % width === 0);
    }

    function checkRotatedPosition(P) {
        P = P || currentPosition; //get current position.  Then, check if the piece is near the left side.
        if ((P + 1) % width < 4) {
            //add 1 because the position index can be 1 less than where the piece is (with how they are indexed).
            if (isAtRight()) {
                //use actual position to check if it's flipped over to right side
                currentPosition += 1; //if so, add one to wrap it back around
                checkRotatedPosition(P); //check again.  Pass position from start, since long block might need to move more.
            }
        } else if (P % width > 5) {
            if (isAtLeft()) {
                currentPosition -= 1;
                checkRotatedPosition(P);
            }
        }
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
        checkRotatedPosition();
        draw();
    }

    //show up-next tetromino in mini-grid display
    const displaySquares = document.querySelectorAll('#mini-grid .square');
    const displayWidth = 4;
    const displayIndex = 0;

    //the Tetrominos without rotations
    const upNextTetrominoes = [
        [1, displayWidth + 1, displayWidth * 2 + 1, 2], //lTetromino
        [displayWidth * 2, displayWidth + 1, displayWidth * 2 + 1, displayWidth + 2], //zTetromino
        [displayWidth, 1, displayWidth + 1, displayWidth + 2], //tTetromino
        [0, displayWidth, 1, displayWidth + 1], //oTetromino
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] //iTetromino
    ];

    //display the shape in the mini-grid display
    function displayShape() {
        //remove any trace of a tetromino form the entire grid
        displaySquares.forEach(square => {
            square.classList.remove('tetromino');
            square.style.backgroundImage = '';
        });

        //display new tetromino
        upNextTetrominoes[nextRandom].forEach(i => {
            displaySquares[displayIndex + i].classList.add('tetromino');
            displaySquares[displayIndex + i].style.backgroundImage = colors[nextRandom];
            displaySquares[displayIndex + i].style.backgroundSize = '100%';
        });
    }

    //add functionality to the button
    startBtn.addEventListener('click', () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
        } else {
            draw();
            timer = setInterval(moveDown, speed);
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            displayShape();
        }
    });

    //add score
    function addScore() {
        for (let i = 0; i < 199; i += width) {
            const row = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9];

            if (row.every(i => squares[i].classList.contains('taken'))) {
                score += 10;
                lines += 1;
                scoreDisplay.innerHTML = score;
                linesDisplay.innerHTML = lines;

                //with this on speed up the application
                if (points === score) {
                    clearInterval(timer);
                    timer = setInterval(moveDown, speed);
                    speed -= 20;
                    points += 30;
                }
                row.forEach(i => {
                    squares[i].classList.remove('taken');
                    squares[i].classList.remove('tetromino');
                    squares[i].style.backgroundImage = '';
                });
                const squaresRemoved = squares.splice(i, width);
                squares = squaresRemoved.concat(squares);
                squares.forEach(cell => grid.appendChild(cell));
            }
        }
    }

    //game over
    function gameOver() {
        if (current.some(i => squares[currentPosition + i].classList.contains('taken'))) {
            scoreDisplay.innerHTML = 'Your total score is ' + score;
            linesDisplay.innerHTML = 'your number of lines is' + lines;
            clearInterval(timer);
        }
    }
};
