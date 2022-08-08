/* JavaScript for hidden_skills.html */


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function weapon() {
    let element = document.getElementById("weapon");
    element.scrollIntoView();
}

function shiftling() {
    let element = document.getElementById("shiftling");
    element.scrollIntoView();
}

function ninjutsu() {
    let element = document.getElementById("ninjutsu");
    element.scrollIntoView();
}

function onmyo() {
    let element = document.getElementById("onmyo");
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
