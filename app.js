const canvas = document.querySelector('.canvas');
const cell = document.createElement('div');
cell.style.width = '10px';
cell.style.height = '10px';
cell.style.border = '1px solid lightgrey';
cell.style.boxSizing = 'content-box';
canvas.appendChild(cell);

console.log((canvas.style.width));