// creating script using robot.js
var robot = require("robotjs");
var fs = require("fs");
var screenSize = robot.getScreenSize();

setTimeout(handlePaint, 2000);

function handlePaint() {
    // move mouse with animation
    robot.moveMouse(50, 849);
    robot.mouseClick();
    robot.typeStringDelayed("Paint", 1000);
    // press certain key
    robot.keyTap("enter");
    // write HI
    setTimeout(writeHi, 2000);
}

function writeHi() {
    // H
    // first vertical line
    robot.moveMouse(403, 411);
    robot.mouseToggle("down", "left");
    robot.dragMouse(403, 511);
    robot.mouseToggle("up", "left");

    // second vertical line
    robot.moveMouse(503, 411);
    robot.mouseToggle("down", "left");
    robot.dragMouse(503, 511);
    robot.mouseToggle("up", "left");

    // horizontal H line
    robot.moveMouse(403, 461);
    robot.mouseToggle("down", "left");
    robot.dragMouse(503, 461);
    robot.mouseToggle("up", "left");

    // I
    // first horizontal
    robot.moveMouse(550, 411);
    robot.mouseToggle("down", "left");
    robot.dragMouse(650, 411);
    robot.mouseToggle("up", "left");
    // second horizontal
    robot.moveMouse(550, 511);
    robot.mouseToggle("down", "left");
    robot.dragMouse(650, 511);
    robot.mouseToggle("up", "left");
    // vertical I
    robot.moveMouse(600, 411);
    robot.mouseToggle("down", "left");
    robot.dragMouse(600, 511);
    robot.mouseToggle("up", "left");
    
    // got to telegram
    setTimeout(function() {
        robot.moveMouse(1535, 849);
        robot.mouseClick();
        handleTelegram();
    }, 2000);
}

function handleTelegram() {
    // move mouse with animation
    robot.moveMouse(50, 849);
    robot.mouseClick();
    robot.typeStringDelayed("Telegram", 1000);
    // press certain key
    robot.keyTap("enter");
    // write HI
    setTimeout(sendMsg, 2000);
}

function sendMsg() {
    robot.typeStringDelayed("Vidushi", 1000);
    robot.keyTap("enter");
    robot.typeStringDelayed("Hello", 1000);
    robot.keyTap("enter");

    setTimeout(function() {
        robot.moveMouse(1535, 849);
        robot.mouseClick();
        handleChrome();
    }, 2000);
}

function handleChrome() {
    // move mouse with animation
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
    var data = fs.readFileSync("./chrome.json");
    var tabs = JSON.parse(data);

    for(var i = 0; i < tabs.length; i++) {
        for(var j = 0; j < tabs[i].length; j++) {
            robot.typeString(tabs[i][j], 1000);
            robot.keyTap("enter");
            
            if(j < tabs[i].length - 1) {
                robot.keyToggle("down", "control");
                robot.keyTap("t");
                robot.keyToggle("up", "control");
            } else if(i < tabs.length - 1 && j == tabs.length - 1) {
                robot.keyToggle("down", "control");
                robot.keyTap("n");
                robot.keyToggle("up", "control");
            }
        }
    }
}