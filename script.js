let cont = document.querySelector("#container");
const CONTAINER_LENGTH = 800;
const NUMBER_OF_BOXES = 20;

createGrid();




function createBox() {
	let div = document.createElement("div");
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
