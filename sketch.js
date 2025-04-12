var x = 0;
var y = 0;

function setup() {
    let canvas = createCanvas(720, 480); 
    canvas.position(350, 800); 
}

function draw() {
    background('#000000');
    circle(x, y, 10);
    x = (x + 1) % 600; 
    y = (y + 2) % 480;
}

