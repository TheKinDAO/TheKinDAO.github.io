var N_SIZE = 10,
    EMPTY = '&nbsp;',
    boxes = [],
    tile = '🌴',
    score,
    moves;

// Initialize the board and start the game.
function init() { 
    var board = document.createElement('table');
    board.setAttribute('border', 1);
    board.setAttribute('cellspacing', 0);

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
            identifier += identifier;
        }
    }

    document.getElementById('changemaker').appendChild(board);
    startNewGame();
}

// New game
function startNewGame() {
    score = {
        '🌴': 0,
        'O': 0
    };
    moves = 0;
    tile = '🌴';
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

function win(clicked) {
    // Get all cell classes
    var memberOf = clicked.className.split(/\s+/);
    for (var i = 0; i < memberOf.length; i++) {
        var testClass = '.' + memberOf[i];
        var items = contains('#tictactoe ' + testClass, tile);
        // winning condition: tile == N_SIZE
        if (items.length == N_SIZE) {
            return true;
        }
    }
    return false;
}


// Helper function to check if NodeList from selector has a particular text
function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return [].filter.call(elements, function (element) {
        return RegExp(text).test(element.textContent);
    });
}


// Set this box
function set() {
    if (this.innerHTML !== EMPTY) {
        return;
    }
    else{
    this.innerHTML = select.value;
    score[tile] += this.identifier;
    tile = select.value;
    document.getElementById('tile').textContent = tile;
}
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

var change-view = document.getElementById(change-view);

change-view.addEventListener('click', event => {
    if (change-view.value = one) {
        
     boxes.forEach(function (box) {
         box.innerHTML = EMPTY;
     }
    }
                   false;
    });


init();
