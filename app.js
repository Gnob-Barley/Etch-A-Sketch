const gridContainer = document.querySelector("#gridContainer");

let createDiv;
let createGrid = makeGrid(32);
//let gridCell = document.getElementsByClassName("gridCell");
function makeGrid(gridSize){

    gridContainer.style.gridTemplateColumns = `repeat(${gSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gSize}, 1fr )`;

    for(let i =0; i < gridSize * gridSize; i++){
        createDiv = document.createElement('div');
        createDiv.classList.add('cell');
        gridContainer.appendChild(createDiv);
    }

}
function resetGrid(){

}
function colorPickerGrid(){

}
function randomColorGrid(){

}