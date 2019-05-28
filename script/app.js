(() => {
	//stub
	console.log('fired!');

//const is short for constant => variables that shouldn't change
	const pieceBoard = document.querySelector('.puzzle-pieces'),
		  puzzleBoard = document.querySelector('.puzzle-board'),
	  	  puzzleSelector = document.querySelectorAll('#bottomHolder img'),
	  	  dropZones = document.querySelectorAll('.drop-zone');

	let draggablePieces = pieceBoard.querySelectorAll('img');

	debugger;

	function switchImage() {
		console.log(this);
}

	puzzleSelector.forEach(thumbnail => {thumbnail.addEventListener("click", switchImage); });

	//loop through the draggable images
	//this let us drag stuff => not that hard

	draggablePieces.forEach(piece => {
		piece.addEventListener("dragstart", function(e) {
			console.log('dragging...');

//dataTransfer has two methods, a setter and a getter
//set data on the drag, and retrieve it on the drop
		e.dataTransfer.setData("text/plain", this.id);

		});
	});

// this is the drag over and drop functionality => this is for the frop zone


dropZones.forEach(zone => {
	zone.addEventListener("dragover", function(e) {
		e.preventDefault();
		console.log('dragged sumpin over me');
	});

//allow an user to drop an element

zone.addEventListener("drop", function(e) {
	e.preventDefault();
	console.log('you dropped sumpin on me');

	let draggedElement = e.dataTransfer.getData("text/plain");
	console.log('you dragged:', draggedElement);


//add the image to the drop zone
	e.target.appendChild(document.querySelector(`#${draggedElement}`));
});

})

})();