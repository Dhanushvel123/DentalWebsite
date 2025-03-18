document.addEventListener("DOMContentLoaded", function () {
    console.log("Dental website loaded successfully!");
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

function toggleDropdown() {
    document.querySelector(".dropdown-menu").classList.toggle("show");
}
