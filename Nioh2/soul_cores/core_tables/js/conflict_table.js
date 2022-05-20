/* JavaScript for conflict_table.html */


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function how_to() {
    let element = document.getElementById("how-to");
    element.scrollIntoView();
}

function anima_stats() {
    let element = document.getElementById("anima-stats");
    element.scrollIntoView();
}

function damage_stats() {
    let element = document.getElementById("damage-stats");
    element.scrollIntoView();
}

function ki_damage_stats() {
    let element = document.getElementById("ki-damage-stats");
    element.scrollIntoView();
}

function elemental_damage_stats() {
    let element = document.getElementById("elemental-damage-stats");
    element.scrollIntoView();
}

function idr_stats() {
    let element = document.getElementById("idr-stats");
    element.scrollIntoView();
}

function edr_stats() {
    let element = document.getElementById("edr-stats");
    element.scrollIntoView();
}

function luck_stats() {
    let element = document.getElementById("luck-stats");
    element.scrollIntoView();
}

function power_stats() {
    let element = document.getElementById("power-stats");
    element.scrollIntoView();
}

function no_conflict_stats() {
    let element = document.getElementById("no-conflict-stats");
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
