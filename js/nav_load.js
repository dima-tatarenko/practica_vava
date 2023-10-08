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

function showElement(pItem, pParagraph) {
    let seeElement = document.getElementById(pParagraph)
    let changeItem = document.getElementById(pItem)

    liDiscover.style.border = "0rem";
    liAnalyse.style.border = "0rem";
    liImprove.style.border = "0rem";
    liMeasure.style.border = "0rem";
    liControl.style.border = "0rem";
    changeItem.style.border = "0rem"
    if (changeItem.style.border == "0rem") {
        changeItem.style.borderBottom = "solid";
    }

    discover.style.display = "none";
    analyse.style.display = "none";
    improve.style.display = "none";
    measure.style.display = "none";
    control.style.display = "none";
    seeElement.style.display = "none";
    if (seeElement.style.display === "none") {
        seeElement.style.display = "block";
    }
};