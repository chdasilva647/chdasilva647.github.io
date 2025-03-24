//load image
//load video 
//load sound 
//playback rate
//volume 
//many kitties 

var kitten;
var kindle;
var meow;
var numberOfKitties = 10;

function setup(){
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER)
    randy = loadImage('Randy.jpeg');
    jetty = createImg('Jetty.png');
    tango = createImg('Tango.jpeg');
    rusty = createVideo('Rusty.mp4');
    tango.hide();
    jetty.hide();
    rusty.hide();
    rusty.volume(0);
    rusty.play();
    rusty.loop();
    meow = createAudio('meow.wav');
    meow.volume(0.25);
    meow.currentTime = 0;
    meow.speed(2);
}

function draw(){
    background('cornflowerBlue');
    for(var x = 0; x < numberOfKitties; x++){
        for(var y = 0; y < numberOfKitties; y++){
            push();
            translate(x * width/numberOfKitties, y * height/numberOfKitties);
            rotate(frameCount/50);
            image(tango, 0, 0, 100, 160);
            pop();
        }
    }
    image(rusty, 1000, 500, 200, 260);
    imageMode(CENTER);
    push();
    translate(150,150);
    rotate(frameCount/20)
    image(randy, 0, 0, 160, 200);
    pop();
    translate(mouseX, mouseY);
    image(jetty, 0, 0, 100, 100);
}

function mousePressed(){
    rusty.play();
    meow.speed(10);
    meow.play();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}