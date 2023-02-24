//create 16x16 grid of divs all the same size in a square
  //put the divs into the html id 'container'
  //create a slider to adjust the amount of divs present
  //make slider go up to 64 divs and down to 16 from 32 divs
//create 'click' effect that toggles the color on and off
  //create 'hover' effect that colors where the mouse goes
//create different color options from RGB to B/W
//Have fun :) and get it done on time with little distractions

const normalColor = '#333333';
const normalSize = 16;
const normalMode = 'color';

const normalBTN = document.getElementById('normalBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const value = document.getElementById('value');
const sizeBar = document.getElementById('sizeBar');
const grid = document.getElementById('grid');





for (i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    square.className = 'grid';
    document.getElementById('square').appendChild(square);
}

