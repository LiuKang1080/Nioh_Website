/* JavaScript for weapon_texts.html */


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function light() {
    let element = document.getElementById("light");
    element.scrollIntoView();
}

function medium() {
    let element = document.getElementById("medium");
    element.scrollIntoView();
}

function heavy() {
    let element = document.getElementById("heavy");
    element.scrollIntoView();
}

function demon() {
    let element = document.getElementById("demon");
    element.scrollIntoView();
}

function wise() {
    let element = document.getElementById("wise");
    element.scrollIntoView();
}

function nioh() {
    let element = document.getElementById("nioh");
    element.scrollIntoView();
}

function depths() {
    let element = document.getElementById("depths");
    element.scrollIntoView();
}

function description() {
    let element = document.getElementById("description");
    element.scrollIntoView();
}

function credits() {
    let element = document.getElementById("credits");
    element.scrollIntoView();
}


/*
========== ========== ========== ========== ==========
Back to top button JavaScript 
========== ========== ========== ========== ==========
*/ 
back_to_top = document.getElementById("back-to-top-button");
window.onscroll = function() { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        back_to_top.style.display = "block";
    } else {
        back_to_top.style.display = "none";
    }
}
