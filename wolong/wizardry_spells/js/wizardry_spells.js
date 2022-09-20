// JavaScript for wizardry_spells.html


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function wood_phase() {
    let element = document.getElementById("wood-phase");
    element.scrollIntoView();
}

function fire_phase() {
    let element = document.getElementById("fire-phase");
    element.scrollIntoView();
}

function earth_phase() {
    let element = document.getElementById("earth-phase");
    element.scrollIntoView();
}

function metal_phase() {
    let element = document.getElementById("metal-phase");
    element.scrollIntoView();
}

function water_phase() {
    let element = document.getElementById("water-phase");
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
