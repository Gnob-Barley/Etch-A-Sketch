const gridContainer = document.querySelector("#gridContainer");

let createDiv;
let createGrid = makeGrid(5);
let gridCell = document.getElementsByClassName("gridCell");


function makeGrid(gridSize) {

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr )`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        createDiv = document.createElement('div');
        createDiv.classList.add('gridCell');
        createDiv.addEventListener("mouseover", function (e) {
            changeColor(e.target);
        })
        gridContainer.appendChild(createDiv);
    }
    return;
}

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let prompt = window.prompt("reset");
    gridMaker = makeGrid(prompt);

    return;
}
function changeColor(divTarget){
    divTarget.style.backgroundColor = "#000";
    return;
}

//ability to choose color from hexcodes
function chooseColor() {
    let cellR = document.querySelectorAll(".gridCell");
    let color = window.prompt("input a color");
    cellR.forEach(gridCells => {
      gridCells.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = color;
      });
    });
}

function random() {
    let hash = "#";
    let colour = Math.floor(Math.random() * 16777215).toString(16);
    return hash + colour;
  }
function rainbow() {
    // let colour = Math.floor(Math.random() * 16777215).toString(16);
    let cellR = document.querySelectorAll(".gridCell");
    cellR.forEach(gridCells => {
      gridCells.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = random();
      });
    });
}

//handles button clicks
document.getElementById('reset').addEventListener("click", resetGrid, false);
document.getElementById('random').addEventListener("click", rainbow, false);
document.getElementById('colorpicker').addEventListener("click", chooseColor, false);

