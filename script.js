//function that generates random RGB color
function getRandomRGB(){
    const r = Math.floor(Math.random()* 255);
    const g = Math.floor(Math.random()* 255);
    const b = Math.floor(Math.random()* 255);
    
    return `rgb(${r}, ${g}, ${b})`;
}

//select the panels from HTML 
const panel1 = document.getElementById('panel-1');
const panel2 = document.getElementById('panel-2');

//set interval - delay in milliseconds (1000ms = 1 seconds)
setInterval(() => {
    panel1.style.backgroundColor = getRandomRGB();
    panel2.style.backgroundColor = getRandomRGB();
}, 1000)