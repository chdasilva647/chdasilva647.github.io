var x = 0;
var y = 0;
function setup(){
    createCanvas(720, 480); 
    canvas.position(325, 800); 
}

function draw(){
    background('#000000') 
    circle(x,y,10,10);
    x = x + 1;
    x = x % 600; 
    y = y + 2;
    y = y % 480;
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
