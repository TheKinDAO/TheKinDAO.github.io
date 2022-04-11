var pLayer = 0,
    boxes = [];
const container = document.getElementById("container");

// Initialize the board and start the game.
function init() { 
    var board = document.createElement('table');
    var identifier = 1;

    function makeRows(rows, cols) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        for (c = 0; c < (rows * cols); c++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
            cell.addEventListener('click', set);
            boxes.push(cell);

        };
    };

    makeRows(30, 30);

    document.getElementById('changemaker').appendChild(board);

    startNewGame();

}


// New game
function startNewGame() {
    // get from cookies if present
    var itemsArray = localStorage.getItem('items')
    const data = JSON.parse(localStorage.getItem('items'))


    if (localStorage.getItem('items')) {
        var i = 0;
        boxes.forEach(function (box) {

            box.innerHTML = data[i]
            i++;
        });
    }
    else {
        boxes.forEach(function (box) {
            box.innerHTML = "";
        });
    }
}

// Set this box
function set() {
    if (this.innerHTML !== "") {
        this.innerHTML = "";
        return;
    }
    else {
        this.innerHTML = seLect.value;
    }
    myFunk();
    pLayer++;
}
    function views() {
        boxes.forEach(function (box) {
            box.innerHTML = selectbox.value;
        });
    }

    function save() {
        var itemsArray = []
        var i = 0;
        boxes.forEach(function (box) {
            itemsArray[i] = box.innerHTML;
            i++;
        });
        localStorage.setItem('items', JSON.stringify(itemsArray))
    }



function myFunk() {
        let ele = document.getElementById('history');
    let list = "";
    if (pLayer == 0) {
        list += '<br>Diane placed:' + seLect.value;
    }
    else if (pLayer == 1) {
        list += '<br>Ricky placed:' + seLect.value;
    }
    else if (pLayer == 2) {
        list += '<br>Joanna placed:' + seLect.value;
    }
    else if (pLayer == 3) {
        list += '<br>Bobby placed:' + seLect.value;
        pLayer = -1;
    }
        ele.innerHTML += list;
    }

    init();
    
