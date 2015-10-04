"use strict";
var result;
window.onload = function() {
    var boundary = $$("div#maze div.boundary");
    var count = 0;
    while (count < boundary.length) {
        boundary[count].onmouseover = outOfBounds;
        count++;
    }
    $("start").onclick = start;
    $("end").onmouseover = end;
};

function outOfBounds() {
	result = false;
    var boundary = $$("div#maze div.boundary");
    var count = 0;
    while (count < boundary.length) {
        boundary[count].addClassName("youlose");
        count++;
    }
}

function start() {
    result = true;
    var boundary = $$("div#maze div.boundary");
    var count = 0;
    while (count < boundary.length) {
        boundary[count].removeClassName("youlose");
        count++;
    }
}

function end() {
    if(result) {
    	alert("You win! :)");
    } else {
        alert("Sorry, you lost. :(");
    }
}