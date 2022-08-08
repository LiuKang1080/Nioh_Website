/* JavaScript for mission_texts.html */


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function katana() {
    let element = document.getElementById("katana");
    element.scrollIntoView();
}

function dual() {
    let element = document.getElementById("dual");
    element.scrollIntoView();
}

function spear() {
    let element = document.getElementById("spear");
    element.scrollIntoView();
}

function axe() {
    let element = document.getElementById("axe");
    element.scrollIntoView();
}

function kusarigama() {
    let element = document.getElementById("kusarigama");
    element.scrollIntoView();
}

function odachi() {
    let element = document.getElementById("odachi");
    element.scrollIntoView();
}

function tonfa() {
    let element = document.getElementById("tonfa");
    element.scrollIntoView();
}

function hatchets() {
    let element = document.getElementById("hatchets");
    element.scrollIntoView();
}

function switchglave() {
    let element = document.getElementById("switchglave");
    element.scrollIntoView();
}

function splitstaff() {
    let element = document.getElementById("splitstaff");
    element.scrollIntoView();
}

function fists() {
    let element = document.getElementById("fists");
    element.scrollIntoView();
}

function bow() {
    let element = document.getElementById("bow");
    element.scrollIntoView();
}

function rifle() {
    let element = document.getElementById("rifle");
    element.scrollIntoView();
}

function cannon() {
    let element = document.getElementById("cannon");
    element.scrollIntoView();
}

function headgear() {
    let element = document.getElementById("headgear");
    element.scrollIntoView();
}

function light_armor() {
    let element = document.getElementById("light_armor");
    element.scrollIntoView();
}

function medium_armor() {
    let element = document.getElementById("medium_armor");
    element.scrollIntoView();
}

function heavy_armor() {
    let element = document.getElementById("heavy_armor");
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
