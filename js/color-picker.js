window.addEventListener("load", startup, false);
function startup() {
    let colorWell = document.querySelector("#colorWell");
        colorWell.addEventListener("change", updateAll, false);

    let lineSizeSlide = document.querySelector("#lineSize");
    lineSizeSlide.addEventListener("change", updatelineSize, false);

    let straightlineSizeSlide = document.querySelector("#straightlineSize");
    straightlineSizeSlide.addEventListener("change", updatestraightlineSize, false);

    let eraser = document.querySelector("#eraseSize");
    eraser.addEventListener("change", updateEraser, false);

    let worm = document.querySelector("#wormlineSize");
    worm.addEventListener("change", updateWorm, false);
}
function updateAll(event){
    colorCode = event.target.value;
}
function updatelineSize(event){
 lineSize = event.target.value;
 console.log(lineSize);
}

function updatestraightlineSize(event){
    straightlineSize = event.target.value;
    console.log(straightlineSize);
   }

function updateEraser(event){
    eraserSize = event.target.value;
}

function updateWorm(event){
    wormlineSize = event.target.value;
}
