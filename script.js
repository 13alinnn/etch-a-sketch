const CONTAINER_LENGTH = 500;
const cont = document.querySelector('#container');
const btn = document.querySelector('#clear');
const para = document.querySelector('p');
const slider = document.querySelector('input');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
let NUMBER_OF_BOXES = 20;
let color = 'black';
let mouseClicked = false;
const colorPickerText = document.querySelector('h3')
para.textContent = `${NUMBER_OF_BOXES} x ${NUMBER_OF_BOXES}`; //initial value of 20x20
const redBtn = document.querySelector('.colorbox.red');
redBtn.addEventListener('click', () => {
	color = 'red';
	colorPickerText.style.color = color;
});
const greenBtn = document.querySelector('.colorbox.green');
greenBtn.addEventListener('click', () => {
	color = 'green';
	colorPickerText.style.color = color;
});
const blueBtn = document.querySelector('.colorbox.blue');
blueBtn.addEventListener('click', () => {
	color = 'blue';
	colorPickerText.style.color = color;
});
const yellowBtn = document.querySelector('.colorbox.yellow') 
yellowBtn.addEventListener('click', () => {
	color = 'yellow';
	colorPickerText.style.color = color;
});
blackBtn = document.querySelector('.colorbox.black');
blackBtn.addEventListener('click', () => {
	color = 'black';
	colorPickerText.style.color = color;
});
whiteBtn = document.querySelector('.colorbox.white');
whiteBtn.addEventListener('click', () => {
	color = 'white';
	colorPickerText.style.color = color;
});
// const colorButtons = document.querySelectorAll('.colorbox');
// colorButtons.forEach((colorButton) => {
// 	if(colorButton.classList.contains('red')) colorOfThisButton = 'red';
// 	else if(colorButton.classList.contains('green')) colorOfThisButton = 'green';
// 	else if(colorButton.classList.contains('blue')) colorOfThisButton = 'blue';
// 	else if(colorButton.classList.contains('yellow')) colorOfThisButton = 'yellow';
// 	else if(colorButton.classList.contains('white')) colorOfThisButton = 'white';
// 	else if(colorButton.classList.contains('black')) colorOfThisButton = 'black';
// 	colorButton.addEventListener('click', () => {
// 		color = colorOfThisButton;
// 	});
// });

createGrid();

function createBox() {
	const div = document.createElement('div');
    div.classList.add('pixels');
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
		square.addEventListener('mousedown', () => {
			mouseClicked = true;
			square.style.backgroundColor = color;
		});
		square.addEventListener('mouseover', () => {
			if(mouseClicked)
				square.style.backgroundColor = color;
		});
		square.addEventListener('mouseup', () => {
			mouseClicked = false;
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
	para.textContent = `${NUMBER_OF_BOXES} x ${NUMBER_OF_BOXES}`;
});

plusBtn.addEventListener('click', () => {
	NUMBER_OF_BOXES = NUMBER_OF_BOXES + 1;
	slider.value = NUMBER_OF_BOXES;
	removeGrid();
	createGrid();
	para.textContent = `${NUMBER_OF_BOXES} x ${NUMBER_OF_BOXES}`;
});

minusBtn.addEventListener('click', () => {
	NUMBER_OF_BOXES = NUMBER_OF_BOXES - 1;
	slider.value = NUMBER_OF_BOXES;
	removeGrid();
	createGrid();
	para.textContent = `${NUMBER_OF_BOXES} x ${NUMBER_OF_BOXES}`;
});