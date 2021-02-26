// Launch app
document.addEventListener('readystatechange', (evt) => {
    if (evt.target.readyState === 'complete') {
        initApp();
    }
});

const initApp = () => {
    const grid = document.getElementById(grid);
    let squares = Array.from(document.querySelectorAll(`.square`));
    const ScoreDisplay = document.getElementById(score);
    const StartBtn = document.getElementById(startBtn);
    const width = 10;
};
