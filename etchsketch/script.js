const container = document.querySelector('.container');
const btn = document.querySelectorAll('.btn')
let item = [];
for(let i = 0; i < 256; i++){
item[i] = document.createElement('div');
item[i].classList.add('grid-item');
container.appendChild(item[i]);
}

let buttonid = "Black";

btn.forEach(button =>{
    button.addEventListener('click', ()=>{
        buttonid = button.id
    })
})

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let colorRainbow;
function Rainbow() {
    randomA = getRandom(0,255);
    randomB = getRandom(0,255);
    randomC = getRandom(0,255);
    colorRainbow = `rgb(${randomA}, ${randomB}, ${randomC})`;
}
let gbc = 0
const grid = document.querySelectorAll('.grid-item');
grid.forEach(elem =>{
    elem.addEventListener('mouseenter', ()=>{
        if(buttonid == "Black"){
        elem.style.backgroundColor = "black"
        }
        if(buttonid == "Eraser"){
           elem.style.backgroundColor = "white"
        }
        if(buttonid == "Rainbow"){
            Rainbow()
            elem.style.backgroundColor = colorRainbow
        }
        }
        )
})


