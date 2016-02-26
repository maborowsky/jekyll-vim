document.addEventListener('DOMContentLoaded', function() {
    vim_setup_grid();
}, false);

// TODO: change name
function vim_setup_grid() {
    const MAX_LINES = 25;
    //var tableHeight = window.getComputedStyle(vim-lines);
    var top_padding = document.getElementById("lines-top-padding");
    var bottom_padding = document.getElementById("lines-bottom-padding");

    //document.getElementById("line-num").innerHTML("█");

    for (var i=0; i < MAX_LINES; i++) {
        if (i % 2 == 0) {
            insertBlankRow(top_padding);
        } else {
            insertBlankRow(bottom_padding);
        }
    }

    lineNumbers_startup();
    //lineNumbers();
}

function lineNumbers_startup() {
    var line_nums = document.getElementsByClassName("line-num");

    if (line_nums.length >= 1) {
        line_nums[0].innerHTML = "█";
        // TODO: NOT WORKING
        //line_nums[0].className += "cursor_blink";
    }

    for (var i = 1; i < line_nums.length; i++) {
        line_nums[i].innerHTML = "~";
    }
}

function lineNumbers() {
    var line_nums = document.getElementsByClassName("line-num");

    for (var i = 0; i < line_nums.length; i++) {
        line_nums[i].innerHTML = i+1;
    }
}


function insertBlankRow(ele) {
    var row = ele.insertRow();
    var line_num = row.insertCell(-1);
    var text = row.insertCell(-1);

    line_num.className = "line-num";
    text.className = "line-text";
}

function vim_grid_resize() {

}
