const canvas = document.querySelector('.canvas');
const btn = document.querySelector('.btn');
const reset = document.querySelector('.reset');
// const toggler = document.querySelector('.toggler');
let canvasPixelLength = 800;
let cellPixelLength = 10;
let cellCount = 6400;
let r = 0; //for controlling RGB color fills later
let g = 0;
let b = 0;

function resetGrid() {
    //first, delete all child cells inside parent canvas, clean canvas
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    //second, construct grid based on size parameters
    for (i = 0; i < cellCount; i++) {
        const cell = document.createElement('div');
        cell.style.width = `${cellPixelLength}px`;
        cell.style.height = `${cellPixelLength}px`;
        cell.style.backgroundColor = '';
        cell.style.border = '1px solid #e0e0e0';
        cell.style.boxSizing = 'border-box';
        canvas.appendChild(cell);
        cell.addEventListener("mouseover", () => cell.classList.add("hovered")); //add class Hovered to cell; makes it change color
    }
}

function changeGridSize() {
    let userInput = parseInt(prompt('How many cells per row? (Max: 125 cells)'));
    while (!userInput || userInput > 125) {userInput = parseInt(prompt('Not valid. How many cells per row? (Max: 125 cells)')); }
    cellPixelLength = canvasPixelLength / userInput;
    cellCount = userInput*userInput;
    resetGrid(); //builds the grid based on user parameters
}

resetGrid(); //build default grid based on default cell values
btn.addEventListener("click", changeGridSize); //listen for user button press to change size
reset.addEventListener("click", resetGrid); //listen for user button press to reset.