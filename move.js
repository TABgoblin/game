const box =
    document.getElementbyid("game-box");
const scoreDisplay =
    document.getElementbyid("score");
let score = 0;

// move the box randomly
function moveBox() {
    const x = Math.random() *
        (window.innerwidth - 60);
    const y = Math.random() *
        (window.innerHeight - 60);
    box.style.left = '${x}px';
    box.style.top = '${y}px';
}
//increase score and move the box on click
box.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent =score;
    moveBox();
});
//initial move
moveBox();