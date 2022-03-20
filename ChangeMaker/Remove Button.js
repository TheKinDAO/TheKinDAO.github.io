    
    document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(event) {
    var shiftPressed = false;
    if(event.keyCode == 16) {
        shiftPressed = true;
    }
}

function keyupHandler(event) {
    if(event.keyCode == 16) {
        shiftPressed = false;
    }
}
   

addEventListener('click', remov);

function remov() {
  if (shiftPressed == true) {
    this.innerHTML = EMPTY;
