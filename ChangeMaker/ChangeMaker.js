const container = document.getElementById("container"),
    option = document.createElement('option'),
    option1 = document.createElement('option'),
    Option1 = document.createElement('option'),
    Option2 = document.createElement('option'),
    Option3 = document.createElement('option'),
    Option4 = document.createElement('option');
var pLayer = 0,
    boxes = [],
    state1 = [],
    state = [],
    biN = 0,
    s = 0,
    power = 900,
    contract = 0;


// Initialize the board and start the game.
function init() {

    option.text = "⬛";
    option1.text = "⬜"
    Option1.text = "🏠";
    Option2.text = "🌴";
    Option3.text = "💧";
    Option4.text = "🏭";

    for (i = 0; i < 3600; i++) {
        state1[i] = "";
        state[i] = "";
    }

    document.addEventListener('mousedown', function() {
        biN = 1
    });
    document.addEventListener('mouseup', function () {
        biN = 0
    });

    function makeRows(rows, cols) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        for (c = 0; c < (3600); c++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
            cell.innerHTML = "";
            cell.addEventListener('click', swap);
            cell.addEventListener('mouseover', function() {
                if (biN == 1 && power != 0) {
                    cell.innerHTML = seLect.value;
                    power -= 1;
                }
                cell.style.border = ".1px solid #C0C0C0";
            });
            cell.addEventListener('mouseout', function () {
                cell.style.border = "none";
            });

            boxes.push(cell);

        };
    };

    makeRows(60, 60);



    startNewGame();

}


// New game
function startNewGame() {
    // get from cookies if present
    itemsArray = localStorage.getItem('items')
    const data = JSON.parse(localStorage.getItem('items'))


    if (localStorage.getItem('items')) {
        var i = 0;
        boxes.forEach(function (box) {
            if (data[i]) {
                state[i] = data[i]
                box.innerHTML = data[i]
            }
            else {
                box.innerHTML = "";
            }
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
function swap() {
    if (this.innerHTML !== "") {
        this.innerHTML = "";
        power += 1;
    }
    else if (power == 0) {
        return;
    }
    else {
        this.innerHTML = seLect.value;
        power -= 1;
        myFunk();
    }
    pLayer++;
}

    function save() {
        var itemsArray = [];
        var i = 0;
        boxes.forEach(function (box) {
            itemsArray[i] = box.innerHTML;
            i++;
        });
        localStorage.setItem('items', JSON.stringify(itemsArray))
    }



function myFunk() {
    let list = "";
    let ele = document.getElementById('history');
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

function set() {
    var i = 0;
    let menu2 = document.getElementById('menu2');
    let menuClone = document.getElementById('menuClone');

    if (s == 0) {
        s = 1;

        while (seLect.options.length > 0) {
            seLect.remove(0);
        }

        seLect.appendChild(option);
        seLect.appendChild(option1);

        boxes.forEach(function (box) {
            state[i] = box.innerHTML;
            box.innerHTML = state1[i];
            i++;

        });
    }
    else if (s == 1) {
        menuClone.style.visibility = 'visible';
        menu2.style.visibility = 'hidden';
        container.style.visibility = 'hidden';
        container2.style.visibility = 'visible';
        s = 2;
        boxes.forEach(function (box) {
            box.innerHTML = "";
        });

    }

    else if (s == 2) {
        menuClone.style.visibility = 'hidden';
        menu2.style.visibility = 'visible';
        container.style.visibility = 'visible';
        container2.style.visibility = 'hidden';
        s = 0;
                while (seLect.options.length > 0) {
            seLect.remove(0);
        }

        seLect.appendChild(Option1);
        seLect.appendChild(Option2);
        seLect.appendChild(Option3);
        seLect.appendChild(Option4);

        boxes.forEach(function (box) {
            state1[i] = box.innerHTML;
            box.innerHTML = state[i];
            i++;

        });

    }
}

function contract1() {
    fname.style.visibility = 'hidden';
    lname.style.visibility = 'visible';
}

function contract2() {
    fname.style.visibility = 'visible';
    lname.style.visibility = 'hidden';
}

    init();
