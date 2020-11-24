var robot = require("robotjs");

var id = setInterval(mouseLocation, 2000);

function mouseLocation() {
    var mouse = robot.getMousePos();
    console.log(mouse);

    if(mouse.x == 0 && mouse.y == 0) clearInterval(id);
}