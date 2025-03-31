

function windowResized(){
    resizeCanvas(windowWidth, 500);
}

var highscore = 10;
var score = 0; 
var playername = 'AAA';
var highscorename = 'ZZZ';
var  playernameInput;
var allthekitties = [];
var currentkitty = 0;
var kittyposition = {x: 100, y: 100, w:200, h:200};

function preload(){
    let url = 'https://api.thecatapi.com/v1/images/search?limit=15&category_ids=7';
    loadJSON(url, successCallback);
}

function successCallback(data){
        for(kitty of data){
            var kitty = createImg(kitty.url);
            kitty.hide();
            allthekitties.push(kitty);
        }
}

function setup(){
    createCanvas(windowWidth, 500);
    if(getItem('highscore') !== null){
        highscore = getItem('highscore');
        highscorename = getItem('highscorename');
    }
    playernameInput = createInput(playername);
    playernameInput.position(15,510)
    var resetButton = createButton('Reset');
    resetButton.position(170,510);
    resetButton.mousePressed(function(){
        clearStorage();
        highscore = 10;
        score = 0;
        highscorename = 'CCC';
    });
}

function draw(){
    background(' #57b9ffdf');    
    playername = playernameInput.value()

    text(score, 20, 25)
    text(playername, 20, 40)
    text(highscore, width-50, 25)
    text(highscorename, width-50, 40)
    image( allthekitties[currentkitty], kittyposition.x, kittyposition.y, kittyposition.w, kittyposition.h);
}

function mousePressed() {
    if (mouseX > kittyposition.x && mouseX < kittyposition.x + kittyposition.h
        && mouseY > kittyposition.y && mouseY < kittyposition.y + kittyposition.h) {
        currentkitty++;
        currentkitty = currentkitty % allthekitties.length;
        kittyposition.x = random(width - kittyposition.w);
        kittyposition.y = random(height - kittyposition.h);
        score++;
        if (score > highscore) {
            highscore = score;
            highscorename = playername;
            storeItem('highscore', highscore);
            storeItem('highscorename', highscorename);
        }
    }
}

