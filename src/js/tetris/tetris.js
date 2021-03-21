import {
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
    upNextTetrominoes
} from '~/js/tetris/tetris.setup.js';

export function tetris() {
    //DOM objects
    const grid = document.getElementById('grid');
    const scoreDisplay = document.getElementById('score');
    const linesDisplay = document.getElementById('lines');
    const startBtn = document.getElementById('startBtn');
    const restartBtn = document.getElementById('restartBtn');
    //show up-next tetromino in mini-grid display
    const displayGridSquares = document.querySelectorAll('#grid .square');
    const displaySquares = document.querySelectorAll('#mini-grid .square');
    const scoreBlock = document.getElementById('scoreblock');
    //game over objects
    const gameOverBlock = document.getElementById('gameover');
    const gScore = document.getElementById('gScore');
    const gLines = document.getElementById('gLines');
    let squares = Array.from(document.querySelectorAll('#grid .square'));

    //variables
    let nextRandom = 0;
    let timer;
    let score = 0;
    let lines = 0;
    let speed = 1000;
    let points = 30;
    let currentPosition = 3;
    let currentRotation = 0;

    //randomly select rotation in the first rotation
    let random = Math.floor(Math.random() * theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];

    //add functionality to the button
    startBtn.addEventListener('click', () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
            enableScroll();
            //stop swipe direction
            //determine swipe direction for movile playing
            document.removeEventListener('touchstart', handleTouchStart, false);
            document.removeEventListener('touchmove', handleTouchMove, false);
            //stop control
            document.removeEventListener('keydown', control);
            //stop music
            document.getElementById('audio').pause();
        } else {
            //determine swipe direction for movile playing
            document.addEventListener('touchstart', handleTouchStart, false);
            document.addEventListener('touchmove', handleTouchMove, false);
            disableScroll();
            play();
        }
    });

    //restart btn
    restartBtn.addEventListener('click', () => {
        //add grid
        grid.classList.remove('d-none');
        grid.classList.add('d-flex');

        //remove any trace of a tetromino form the entire grid
        displayGridSquares.forEach(square => {
            square.classList.remove('tetromino');
            square.classList.remove('taken');
            square.style.backgroundImage = 'none';
        });

        //hide gameOverBlock
        gameOverBlock.classList.add('d-none');
        gameOverBlock.classList.remove('d-flex');

        //add game score
        scoreBlock.classList.add('d-flex');
        scoreBlock.classList.remove('d-none');

        //reset score
        score = 0;
        lines = 0;
        scoreDisplay.innerHTML = score;
        linesDisplay.innerHTML = lines;

        play();
    });

    //play game
    function play() {
        //add control to tetris
        document.addEventListener('keydown', control);
        //start music
        document.getElementById('audio').play();

        //start to play
        draw();
        timer = setInterval(moveDown, speed);
        nextRandom = Math.floor(Math.random() * theTetrominoes.length);
        displayShape();
    }

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
            squares[currentPosition + i].style.backgroundImage = 'none';
        });
    }

    //assign funtions to keyCodes
    function control(evt) {
        switch (evt.keyCode) {
            case 37:
                evt.preventDefault();
                moveLeft();
                break;
            case 39:
                evt.preventDefault();
                moveRight();
                break;
            case 38:
                evt.preventDefault();
                rotate();
                break;
            case 40:
                evt.preventDefault();
                moveDown();
                break;
        }
    }

    //move the tetromino down and faster
    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
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

    //freeze function
    function freeze() {
        if (
            current.some(i =>
                squares[currentPosition + i + width].classList.contains('takenBottom')
            ) ||
            current.some(i => squares[currentPosition + i + width].classList.contains('taken'))
        ) {
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

    //display the shape in the mini-grid display
    function displayShape() {
        //remove any trace of a tetromino form the entire grid
        displaySquares.forEach(square => {
            square.classList.remove('tetromino');
            square.style.backgroundImage = 'none';
        });

        //display new tetromino
        upNextTetrominoes[nextRandom].forEach(i => {
            displaySquares[displayIndex + i].classList.add('tetromino');
            displaySquares[displayIndex + i].style.backgroundImage = colors[nextRandom];
            displaySquares[displayIndex + i].style.backgroundSize = '100%';
        });
    }

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
                    squares[i].style.backgroundImage = 'none';
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
            //show gameOver score
            gameOverBlock.classList.remove('d-none');
            gameOverBlock.classList.add('d-flex');

            //remove game score
            scoreBlock.classList.remove('d-flex');
            scoreBlock.classList.add('d-none');

            //remove grid
            grid.classList.remove('d-flex');
            grid.classList.add('d-none');

            //add total score
            gScore.innerHTML = score;
            gLines.innerHTML = lines;

            clearInterval(timer);

            //remove control to tetris
            document.removeEventListener('keydown', control);
            //sotp music
            document.getElementById('audio').pause();
        }
    }

    let xDown = null;
    let yDown = null;

    function getTouches(evt) {
        return (
            evt.touches || evt.originalEvent.touches // browser API
        ); // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
                moveLeft();
            } else {
                moveRight();
            }
        } else {
            if (yDiff > 0) {
                rotate();
            } else {
                moveDown();
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }

    //To stop scrolling when we slide but let key movement
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    try {
        window.addEventListener(
            'test',
            null,
            Object.defineProperty({}, 'passive', {
                get: function() {
                    supportsPassive = true;
                }
            })
        );
    } catch (e) {}

    let wheelOpt = supportsPassive ? { passive: false } : false;
    let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // call this to Disable
    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    // call this to Enable
    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
}
