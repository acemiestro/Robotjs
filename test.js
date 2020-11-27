var robot = require("robotjs");
var fs = require("fs");

var data = fs.readFileSync("./test.json");
var tabs = JSON.parse(data);

var tl = +tabs[0][0];
var tf = +tabs[1][0];
var ntf = tf;
var link = tabs[2][0];

var initialPos = robot.getMousePos();

var id = setInterval(checkPos, tf);

function checkPos() {
    ntf += tf;
    var mouse = robot.getMousePos();
    console.log(mouse + " " + ntf);
    if(ntf == tl) { 
        if(initialPos.x == mouse.x && initialPos.y == mouse.y) {
            handleOperations();
            clearInterval(id);
        } else {
            clearInterval(id);
        }
    }
}

function handleOperations() {
    robot.moveMouse(50, 849);
    robot.mouseClick();
    robot.typeStringDelayed("Notepad", 1000);
    // press certain key
    robot.keyTap("enter");
    // write HI
    setTimeout(writeHi, 2000);
}

function writeHi() {
    robot.typeStringDelayed("Hello", 1000);
    setTimeout(shake, 2000);
}

function shake() {
    robot.moveMouse(386, 42);
    robot.mouseToggle("down", "left");
    robot.dragMouse(200, 200);
    robot.dragMouse(500, 500);
    robot.dragMouse(600, 700);
    robot.dragMouse(200, 700);
    robot.dragMouse(500, 200);
    robot.mouseToggle("up", "left");    
    setTimeout(handleChrome, 2000);
}

function handleChrome() {
    robot.moveMouse(50, 849);
    robot.mouseClick();
    robot.typeStringDelayed("Chrome", 1000);
    // press certain key
    robot.keyTap("enter");
    // write HI
    robot.moveMouse(500, 500);
    setTimeout(opentabs, 2000);
}

function opentabs() {
    robot.typeString(link, 1000);
    robot.keyTap("enter");
}