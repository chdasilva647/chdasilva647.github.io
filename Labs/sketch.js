

function setup(){
     createCanvas(windowWidth,windowHeight);
}

function draw(){
    background('white');
    fill('pink');
    stroke('red');
    for(var i = 0; i < 19000; i++){
        rect((i*10)%width,(i*10)%height,10,10);
    }

    
    fill('#ec2e7f');
    stroke('#982f5c');
    if(mouseX < 650){
        rect(mouseX,mouseY, 50, 50, 25);
    }else{
        ellipse(mouseX, mouseY, 80, 40);
    }
 }
 