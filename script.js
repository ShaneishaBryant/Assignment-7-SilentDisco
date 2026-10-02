//function that generates random RGB color
function getRandomRGB(){
    const r = Math.floor(Math.random()* 256);
    const g = Math.floor(Math.random()* 256);
    const b = Math.floor(Math.random()* 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

const danceFloor = document.getElementById('dance-floor')
const dancer = document.getElementById('dancer'); //DOM Selection 
const dancers = ['🧑🏽‍🩰','🕺🏿', '👯‍♀️', '🪩']; //array of dancer emojis 
let dancerIndex = 0; 

//select the panels from HTML 
const panel1 = document.getElementById('panel-1');
const panel2 = document.getElementById('panel-2');

//set interval - delay in milliseconds (1000ms = 1 seconds)
setInterval(() => {
    panel1.style.backgroundColor = getRandomRGB();
    panel2.style.backgroundColor = getRandomRGB();
}, 1000)


//click listener that changes color on Dance Floor 
danceFloor.addEventListener('click', () => {
    danceFloor.style.backgroundColor = getRandomRGB(); 
})

//click listener that changes Dancer 
dancer.addEventListener('click', (event) => {
    event.stopPropagation();

    dancerIndex++; //increment index

    if(dancerIndex >= dancers.length){ //reset index if it reaches the end of array 
        dancerIndex = 0;
    }
    dancer.textContent = dancers[dancerIndex];
});