/* JavaScript for nioh.html */


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function region1() {
    let element = document.getElementById("region1");
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
