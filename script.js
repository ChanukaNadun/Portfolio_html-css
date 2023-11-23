const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
})

function myMenuFunction(){
    var navMenu = document.getElementById('navMenu');
    if (navMenu.className === "nav_menu") {
        navMenu.className += "responsive";
    }
    else {
        navMenu.className = "nav_menu";
    }
}
function menuClose(){
    var navMenu = document.getElementById('navMenu');
    navMenu.className = "nav_menu";
}
var closeBtn = document.getElementsByClassName("close");