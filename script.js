function makeGrid (container, color, area) {
    container.setAttribute(
        "style",
        `grid-template-rows: repeat(${gridArea}, 1fr);\
        grid-template-columns: repeat(${gridArea}, 1fr)`);    

    for (i = 0; i < area; i++) {
        const gridItem = document.createElement("div");
        container.appendChild(gridItem);
        gridItem.addEventListener("mouseover", () => {
            changeColor(gridItem, color)
        })    

        for (y = 0; y < (gridArea - 1); y++) {
            const gridItem = document.createElement("div");
            container.appendChild(gridItem);
            gridItem.addEventListener("mouseover", () => {
                changeColor(gridItem, color)
            })    
        }
    }
}

function changeColor (object, color) {
    object.setAttribute("style", `background-color: ${color}`)
}

function clean () {
    const pixels = gridContainer.childNodes;
    pixels.forEach( (pixel) => {
        changeColor(pixel, "white");
    })
}

function makeSmooth () {
    for (let item of gridItens) {
        item.blackTone = 229.5; 
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = `rgb(${item.blackTone}, ${item.blackTone}, ${item.blackTone})`;
            item.blackTone = item.blackTone - 25.5;
        })
    }
}

function makeRainbow () {
    for (let item of gridItens) {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = `rgb(
                ${Math.floor(Math.random() * 255)},
                ${Math.floor(Math.random() * 255)},
                ${Math.floor(Math.random() * 255)}
                )`            
        })
    }
}

const gridContainer = document.querySelector("#grid-container");

const clear = document.querySelector("#clear");

const artBoardSize = document.querySelector("#art-board-size");

const smooth = document.querySelector("#smooth");

const rainbow = document.querySelector("#rainbow");

let gridItens = gridContainer.children;

let gridArea = 40;

makeGrid(gridContainer, "black", gridArea);

clear.addEventListener("click", clean)

artBoardSize.addEventListener("click", () => {
    clean();
    do {
        gridArea = prompt("Enter the grid size (max value 100):")
    } while (gridArea < 1 || gridArea > 100);
    makeGrid(gridContainer, "black", gridArea);
});

smooth.addEventListener("click", makeSmooth)

rainbow.addEventListener("click", makeRainbow)



