// JavaScript for spirit_list.html


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function spirit_list() {
    let element = document.getElementById("spirit-list");
    element.scrollIntoView();
}

function combination_list() {
    let element = document.getElementById("combination-list");
    element.scrollIntoView();
}

function tier_list() {
    let element = document.getElementById("tier-list");
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
