/* JavaScript for picture_scrolls.html */


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function attribute() {
    let element = document.getElementById("attribute");
    element.scrollIntoView();
}

function ultimate() {
    let element = document.getElementById("ultimate");
    element.scrollIntoView();
}

function path() {
    let element = document.getElementById("path");
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
