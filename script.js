let cont = document.querySelector("#container");
const CONTAINER_LENGTH = 960;
const NUMBER_OF_BOXES = 20;
let color = 'black';
createGrid();





function createBox() {
	const div = document.createElement("div");
    div.classList.add('pixels');
	div.style.border = "1px solid black";
	div.style.boxSizing = "border-box";
	div.style.width = String(CONTAINER_LENGTH / NUMBER_OF_BOXES) + "px";
	div.style.height = String(CONTAINER_LENGTH / NUMBER_OF_BOXES) + "px";
	cont.appendChild(div);
}

function createGrid() {
	for (let i = 0; i < NUMBER_OF_BOXES * NUMBER_OF_BOXES; i++) {
		createBox();
	}
}

const squares = document.querySelectorAll('.pixels');
squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'black';
    });
});