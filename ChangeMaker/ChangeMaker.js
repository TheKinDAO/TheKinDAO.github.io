var N_SIZE = 10,
    EMPTY = '&nbsp;',
    pLayer = 0,
    boxes = [];

// Initialize the board and start the game.
function init() { 
    var board = document.createElement('table');
    var identifier = 1;
    for (var i = 0; i < N_SIZE; i++) {
        var row = document.createElement('tr');
        board.appendChild(row);
        for (var j = 0; j < N_SIZE; j++) {
            var cell = document.createElement('td');
            cell.setAttribute('height', 60);
            cell.setAttribute('width', 60);
            cell.setAttribute('align', 'center');
            cell.setAttribute('valign', 'center');
            cell.classList.add('col' + j, 'row' + i);
            if (i == j) {
                cell.classList.add('diagonal0');
            }
            if (j == N_SIZE - i - 1) {
                cell.classList.add('diagonal1');
            }
            cell.identifier = identifier;
            cell.addEventListener('click', set);
            row.appendChild(cell);
            boxes.push(cell);
            identifier++;

        }

    }

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
            box.innerHTML = EMPTY;
        });
    }
}

// Set this box
function set() {
    if (this.innerHTML !== EMPTY) {
        this.innerHTML = EMPTY;
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
    
