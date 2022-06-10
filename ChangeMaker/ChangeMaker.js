const container = document.getElementById("container");
var pLayer = 0,
    boxes = [],
    state1 = [],
    state = [],
    biN = 0,
    power = 900,
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


function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /* Create lens: */
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /* Insert lens: */
    img.parentElement.insertBefore(lens, img);
    /* Calculate the ratio between result DIV and lens: */
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /* Set background properties for the result DIV */
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /* Execute a function when someone moves the cursor over the image, or the lens: */
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /* And also for touch screens: */
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
        var pos, x, y;
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        /* Calculate the position of the lens: */
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /* Prevent the lens from being positioned outside the image: */
        if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
        if (x < 0) { x = 0; }
        if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
        if (y < 0) { y = 0; }
        /* Set the position of the lens: */
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /* Display what the lens "sees": */
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
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
imageZoom("myimage", "myresult");
