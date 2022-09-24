/* JavaScript for skills_index.html */


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function stat_scaling() {
    let element = document.getElementById("stat-scaling");
    element.scrollIntoView();
}

function skill_trees() {
    let element = document.getElementById("skill-trees");
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
