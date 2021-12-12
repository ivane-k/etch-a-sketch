// declare variables and assign default values
let numberOfSquares = 16;
let squareDimensions = 32;

// get elements
const container = document.querySelector("#container");
const defaultMode = document.querySelector("#defualt-mode");
const colorPicker = document.querySelector("#colorpicker");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");
const sizes = document.querySelectorAll(".size");


// add event listeners
defaultMode.addEventListener("click", switchToDefault);
clear.addEventListener("click", clearBackground);
rainbow.addEventListener("click", makeRainbow);
colorPicker.addEventListener("click", changeColor);
eraser.addEventListener("click", erase);
sizes.forEach(item => {
    item.addEventListener('click', () => {
        calculateGridSize(item.id.substring(1));
    });
});

// set up default mode
createDivs(numberOfSquares, squareDimensions);
draw();

// creates the grid
function createDivs(a, b) {
    for (i = 0; i < a; i++) {
        for (j = 0; j < a; j++) {
            const div = document.createElement("div");
            div.classList = "square";
            div.style.width = `${b}px`;
            div.style.height = `${b}px`;
            container.appendChild(div);
        }
    }
}

// changes square's color on hover
function draw() {
    container.addEventListener("mouseover", function(e) {
        if (e.target && e.target.matches("div.square")) {
            e.target.style.backgroundColor = "black";
        }
    });
}

// functions for different buttons
// clears the grid
function clearBackground() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}

// changes number of squares on the grid
function calculateGridSize(x) {
    let y = squareDimensions;
    squareDimensions = y / (x / numberOfSquares);
    numberOfSquares = x;
    updateGridSize(numberOfSquares, squareDimensions);
}

function updateGridSize (a, b) {
    container.innerHTML = "";
    createDivs(a, b);
}

// resets to default mode
function switchToDefault() {
    clearBackground();
    draw();
}

// rainbow mode
// returns random RGB value
function generateColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function makeRainbow() {
    clearBackground();
    container.addEventListener("mouseover", function(e) {
        if (e.target && e.target.matches("div.square")) {
            e.target.style.backgroundColor = generateColor();
        }
    });
}

// changes color
function changeColor() {
    clearBackground();
    container.addEventListener("mouseover", function(e) {
        if (e.target && e.target.matches("div.square")) {
            e.target.style.backgroundColor = colorPicker.value;
        }
    });
}

// eraser mode
function erase() {
    container.addEventListener("mouseover", function(e) {
        if (e.target && e.target.matches("div.square")) {
            e.target.style.backgroundColor = "white";
        }
    });
}


