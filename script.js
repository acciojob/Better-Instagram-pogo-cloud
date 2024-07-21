 const divs = document.querySelectorAll(".image");
  let draggeddiv = null;
        divs.forEach((input, index) => {
            input.setAttribute("draggable", "true");
            input.addEventListener("dragstart", (event) => {
                draggeddiv = event.target;
                //console.log(draggeddiv);
            });
            input.addEventListener("dragover", (event) => {
                event.preventDefault();
            });
            input.addEventListener("drop", (event) => {
                event.preventDefault();
                let temp = draggeddiv.id
                draggeddiv.id= event.target.id;
                event.target.id = temp;
            });
        });