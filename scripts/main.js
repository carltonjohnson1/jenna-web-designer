

// alert when portfolio buttons are clicked to say just demo

function justDemo() {
    alert("Link isn't active - This is just a demo site");
}


// Footer copyright making sure year is always accurate
let date = new Date();
let year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;