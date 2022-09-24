/* JavaScript for accessories.html */


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function samurai() {
    let element = document.getElementById("samurai");
    element.scrollIntoView();
}

function demon() {
    let element = document.getElementById("demon");
    element.scrollIntoView();
}

function nioh() {
    let element = document.getElementById("nioh");
    element.scrollIntoView();
}

function restricted() {
    let element = document.getElementById("restricted");
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
let back_to_top = document.getElementById("back-to-top-button");
window.onscroll = function() { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        back_to_top.style.display = "block";
    } else {
        back_to_top.style.display = "none";
    }
}
