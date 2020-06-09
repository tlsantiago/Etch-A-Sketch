const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const shades = document.querySelector(".shades");
const colors = document.querySelector("#colors");
let squareNumber;
let squares;


function gridCreation(squareNumber) {
    container.style.gridTemplateColumns = "repeat(" + squareNumber + ", 1fr)";

    for (var i = 0; i < squareNumber; i++) {
        for (var j = 0; j < squareNumber; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
            square.onmouseover = () => square.style.backgroundColor = "black";
        }
    }

    squares = document.querySelectorAll(".square");
}

gridCreation(16)

reset.addEventListener('click', () => {
    container.textContent = '';
    const selectedNumber = prompt("Please, select a number between 10 and 100");

    while (selectedNumber < 10 || selectedNumber > 100 || isNaN(selectedNumber)) {
            selectedNumber = prompt("Invalid selection. Please, select a number between 10 and 100");
    }

    gridCreation(selectedNumber)

})

function setOpacity(square) {
    square.style.opacity = Number(square.style.opacity) + 0.1;
}

shades.addEventListener('click', () => {
    squares.forEach((square) => {
        square.onmouseover = () => setOpacity(square);
    });
});

function setColor (square) {
    square.style.removeProperty("opaticy");
    let selectedColor = document.getElementById("colors").value;
    square.style.backgroundColor = `${selectedColor}`;
}

colors.addEventListener('click', () => {
    squares.forEach((square) => {
        square.onmouseover = () => setColor(square);
    })
})