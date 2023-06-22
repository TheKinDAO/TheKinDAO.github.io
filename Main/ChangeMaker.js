const container = document.getElementById("imgContainer");
var pLayer = 0,
    boxes = [],
    state1 = [],
    state = [],
    biN = 0,
    boo = true;


// Initialize the board and start the game.
function init() {

    for (i = 0; i < 100; i++) {
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
        for (c = 0; c < (400); c++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
            cell.innerHTML = "";
            boxes.push(cell);
            cell.addEventListener('click', swap);
            cell.addEventListener('mouseover', function() {
                if (biN == 1) {
                    cell.innerHTML = seLect.value;
                }
                cell.style.border = "1.5px solid black";
            });
            cell.addEventListener('mouseout', function () {
                cell.style.border = "none";
            });
        };
    };
 

    makeRows(20, 20);



}


// New game


// Set this box
function swap() {
    if (this.innerHTML !== "") {
        this.innerHTML = "";
    }
    else {
        this.innerHTML = seLect.value;
        myFunk();
    }
    pLayer++;
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

function griD() {
    if (boo == true) {
        document.getElementById("myimage").style.zIndex = "-1";
        boo = false;
    }
    else {
        document.getElementById("myimage").style.zIndex = "1";
        boo = true;
    }
}

init();
