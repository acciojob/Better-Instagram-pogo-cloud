let divs = document.querySelectorAll(".image");
let draggeddiv = null;

divs.forEach((div) => {
    div.setAttribute("draggable", "true");
    div.addEventListener("dragstart", (event) => {
        draggeddiv = event.target;
    });
    div.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
    div.addEventListener("drop", (event) => {
        event.preventDefault();
        let temp = draggeddiv.id;
        draggeddiv.id = event.target.id;
        event.target.id = temp;
    });
});