/* JavaScript for samurai_skills.html */


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function description() {
    let element = document.getElementById("description");
    element.scrollIntoView();
}

function active_skills() {
    let element = document.getElementById("active-skills");
    element.scrollIntoView();
}

function passive_skills() {
    let element = document.getElementById("passive-skills");
    element.scrollIntoView();
}

function custom_active_skills() {
    let element = document.getElementById("custom-active-skills");
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
