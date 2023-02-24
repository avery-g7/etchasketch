//create 16x16 grid of divs all the same size in a square
  //put divs into parent grid element
  //create a slider to adjust the amount of divs present
  //make slider go up to 64 divs and down to 16 from 32 divs
//create 'click' effect that toggles the color on and off
  //create 'hover' effect that colors where the mouse goes
//create different color options from RGB to B/W
//Have fun :) and get it done on time with little distractions

const normalColor = '#333333';
const normalSize = 32;
const normalMode = 'color';

let currentColor = normalColor;
let currentSize = normalSize;
let currentMode = normalMode;

const normalBtn = document.getElementById('normalBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const gridValue = document.getElementById('gridValue');
const sizeBar = document.getElementById('sizeBar');
const grid = document.getElementById('grid');

rainbowBtn.onclick = () => document.setMode('rainbow');
normalBtn.onclick = () => document.setMode('normal');
eraserBtn.onclick = () => document.setMode('eraser');
clearBtn.onclick 
sizeBar.onmousemove = (e) => updateValue(e.target.value);
sizeBar.onchange = (e) => updateSize(e.target.value);


function setColor(newColor) {
  currentColor = newColor;
};
function setSize(newSize) {
  currentSize = newSize;
};
function setMode(newMode) {
  currentMode = newMode;
};
//grid functions
function setGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (i = 0; i < size * size; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.className = 'grid-square';
    gridSquare.addEventListener('mouseover', changeColor)
    gridSquare.addEventListener('mousedown', changeColor)
    grid.appendChild(gridSquare);
  };
};
function updateValue(value) {
  gridValue.textContent = `${value} x ${value}`
}
function updateSize(value) {
  setSize()
  updateValue()
}
//buttons that change the color on click
function changeColor(e) {
  if (e.type === 'mouseover' && 'mousedown') return;
  if (currentMode === 'rainbow') {
    randomRed = Math.floor(Math.random() * 256)
    randomGreen = Math.floor(Math.random() * 256)
    randomBlue = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue}`;
  }else if (currentMode === 'normal'){
    e.target.style.backgroundColor = currentColor;
  }else if (currentMode === 'eraser'){
    e.target.style.backgroundColor = rgb(255, 255, 255);
  }
}

let btns = document.getElementsByClassName('btn');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    let currentMode = document.getElementsByClassName('active');
    currentMode[0].className = currentMode[0].className.replace(' active', "");
    this.className += ' active';
  });
}

