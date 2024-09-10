const cont = document.querySelector('#container');
const CONTAINER_LENGTH = 960;
const btn = document.querySelector('#clear');
const para = document.querySelector('p');
const slider = document.querySelector('input');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
para.textContent = slider.value;
let NUMBER_OF_BOXES = 20;
let color = 'black';
createGrid();





function createBox() {
	const div = document.createElement('div');
    div.classList.add('pixels');
	div.style.border = '1px solid black';
	div.style.boxSizing = 'border-box';
	div.style.width = String(CONTAINER_LENGTH / NUMBER_OF_BOXES) + 'px';
	div.style.height = String(CONTAINER_LENGTH / NUMBER_OF_BOXES) + 'px';
	cont.appendChild(div);
}

function createGrid() {
	if(!(document.querySelector('.pixels'))) //only appends new squares if the container is empty
		for (let i = 0; i < NUMBER_OF_BOXES * NUMBER_OF_BOXES; i++) {
			createBox();
		}
	const squares = document.querySelectorAll('.pixels');
	squares.forEach((square) => {
    	square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = color;
    });
});
}
btn.addEventListener('click', () => {
	removeGrid();
	createGrid();
});


function removeGrid() {
	const sq = document.querySelectorAll('.pixels');
	sq.forEach((square) => {
		cont.removeChild(square);
	});
}

slider.addEventListener('input', () => {
	NUMBER_OF_BOXES = Number(slider.value);
	removeGrid();
	createGrid();
	para.textContent = NUMBER_OF_BOXES;
});

plusBtn.addEventListener('click', () => {
	NUMBER_OF_BOXES = NUMBER_OF_BOXES + 1;
	slider.value = NUMBER_OF_BOXES;
	removeGrid();
	createGrid();
	para.textContent = NUMBER_OF_BOXES;
});

minusBtn.addEventListener('click', () => {
	NUMBER_OF_BOXES = NUMBER_OF_BOXES - 1;
	slider.value = NUMBER_OF_BOXES;
	removeGrid();
	createGrid();
	para.textContent = NUMBER_OF_BOXES;
});