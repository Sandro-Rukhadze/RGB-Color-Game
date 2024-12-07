const colorBtns = document.querySelectorAll(".color-btn");
const rgbValueDisplay = document.getElementById("rgb-value");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset");

let colors = [];
let correctColor;

function startGame() {
    colors = generateRandomColors(6);
    correctColor = pickColor();
    rgbValueDisplay.textContent = correctColor;
    messageDisplay.textContent = "";

    colorBtns.forEach((button, index) => {
        button.style.backgroundColor = colors[index];
        button.addEventListener("click", function () {
            checkAnswer(button.style.backgroundColor);
        });
    });
}

function generateRandomColors(num) {
    const colorArr = [];
    for (let i = 0; i < num; i++) {
        colorArr.push(randomColor());
    }
    return colorArr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function pickColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function checkAnswer(selectedColor) {
    if (selectedColor === correctColor) {
        messageDisplay.textContent = "Correct! 🎉";
        messageDisplay.style.color = "green";
        document.body.style.backgroundColor = correctColor;
    } else {
        messageDisplay.textContent = "Try Again!";
        messageDisplay.style.color = "red";
        document.body.style.backgroundColor = "#f4f4f4";
    }
}

resetButton.addEventListener("click", startGame);

startGame();
