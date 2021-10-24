var hamburgher = document.querySelector(".fas fa-bars");

var activeham = document.querySelector(".hamburger-menu");

hamburgher = addEventListener("click",

    function() {
        activeham.className = "hamburger-menu.active"
    }
)
console.log(hamburgher);

