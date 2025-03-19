document.addEventListener("DOMContentLoaded", function () {
    console.log("Navbar loaded successfully!");
});

function toggleMenu() {
    document.getElementById("navbarNav").classList.toggle("show");
}

function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}
