/* JavaScript for yokai_enemies.html */

/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function base() {
    let element = document.getElementById("base");
    element.scrollIntoView();
}

function dlc1() {
    let element = document.getElementById("dlc1");
    element.scrollIntoView();
}

function dlc2() {
    let element = document.getElementById("dlc2");
    element.scrollIntoView();
}

function dlc3() {
    let element = document.getElementById("dlc3");
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

/*
========== ========== ========== ========== ==========
Sort Table Function
========== ========== ========== ========== ==========
*/
document.querySelector("#sort-button-1").addEventListener("click", sort_table);
document.querySelector("#sort-button-2").addEventListener("click", sort_table);
document.querySelector("#sort-button-3").addEventListener("click", sort_table);
document.querySelector("#sort-button-4").addEventListener("click", sort_table);


function sort_table(event) {
    /*
        - We will use event.target.className to get the class name of the object that called this function.
        - We ALWAYS follow the general structure for the sort button's class as: class="sort-button table-id"
        - Here the table id changes depending on the table we are working with, this is the part we want to capture.
        - We take the full class name and split it getting the second class of the button, this will ALWAYS be ID of the table.
        - Once we have the ID of the current table we're working with, we will sort the content within the table alphabettically.
    */
    // declare variables
    let current_table_id = (event.target.className).split(" ")[1];
    let current_table = document.getElementById(current_table_id);
    let switching = true;
    let i, rows;
    let ele1, ele2;
    let should_switch;

    // loop will continue until all of the switching has been done
    while (switching) {
        // we start by saying no switching is done
        switching = false;
        rows = current_table.rows;
        // rows is an array containing all fo the rows of the current_table

        // loop through all of the rows of the table except for the first row, the first row is the header for the table
        // i needs to be global within the function so that the for loop and the if statement can use the current index
        for (i = 1; i < (rows.length - 1); i++) {
            // start by saying that should_switch is false
            should_switch = false;

            // get the 2 elements we want to compare for the swap
            ele1 = rows[i].getElementsByTagName("TD")[0];
            ele2 = rows[i + 1].getElementsByTagName("TD")[0];

            // check to see if the 2 rows should be swapped
            if (ele1.innerText.toLowerCase() > ele2.innerText.toLowerCase()) {
                // if the rows should be swapped, set the should_switch to true and break out of the loop
                should_switch = true;
                break;
            }
        }

        // if a switch has been marked, we make the switch and mark that the switch has been done
        if (should_switch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);

            // mark the switch
            switching = true;
        }
    }
}

/*
========== ========== ========== ========== ==========
Refresh Window Function
========== ========== ========== ========== ==========
*/
document.querySelector("#refresh-button-1").addEventListener("click", refresh_location);
document.querySelector("#refresh-button-2").addEventListener("click", refresh_location);
document.querySelector("#refresh-button-3").addEventListener("click", refresh_location);
document.querySelector("#refresh-button-4").addEventListener("click", refresh_location);


function refresh_location() {
    // refresh the window at the current location
    window.location.reload();
}
