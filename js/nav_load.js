$(function () {
    $("#nav-placeholder").load("nav.html");
});

$(function () {
    $("#footer-placeholder").load("footer.html");
});

function dropDown() {
    let navMenu = document.getElementById("navLinks");
    (navMenu.style.display === "block") ? navMenu.style.display = "none" : navMenu.style.display = "block"
};