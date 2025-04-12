var x = 0;
var y = 0;
function setup(){
    createCanvas(720, 480); 
    //background(200); // 0-255 is black, white and greyscale in between
}

function draw(){
    background('#000000') // for a hex hode, u need a # // automatic semicolon insertion
    circle(x,y,10,10);
    x = x + 1;
    x = x % 600; //modulo operator
    y = y + 2;
    y = y % 480;
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }