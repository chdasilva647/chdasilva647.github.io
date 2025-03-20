///Create a web page with P5.js and include an array, a for loop, and the push() method of an array.

var fruits = ["Peaches", "Strawberries", "Bananas", "Blueberries", "Watermelons", "Pineapples", "Dragon Fruits", "Cherries", "Mangos", "Grapes", "Apples", "Lemons", "Kiwis", "Apriocots", "Pears"];
fruits.push("Oranges", "Persimmons", "Cranberries");
var i = 0;
var c = 0;
var colours = ["red", "blue", "aquamarine", "green", "yellow", "orange", "purple", "pink", "brown", "crimson", "coral", "cornflower blue", "lavendar", "antiquewhite", "gold", "indigo", "violet", "magenta", "cyan", "turquoise", "teal", "maroon", "olive", "navy", "lime", "aqua", "fuchsia", "beige", "khaki", "coral", "salmon", "peach", "tan", "peru", "orchid", "plum", "wheat", "sienna", "thistle", "tomato", "snow", "slate", "sky", "seashell", "saddle", "royal", "rosy", "powder", "papaya", "pale", "navajo", "mint", "moccasin", "misty", "midnight"];
var position = 0;
var cColors = [];
var shapes = [];
var positions = [];
var rotations = [];
var speeds = [];

var numberOfConfetto = 500;
var partyOn = false;


function setup() {
    let i = 0;
    // https://p5js.org/reference/p5/for/ reference for creating a for loop 
    for (let i = 0; i < fruits.length; i++) { 
        let fruitDiv = createDiv(fruits[i]); 
        fruitDiv.addClass("Fruits"); 
        console.log(fruits[i]);
    }

    let changeColorButton = createButton("FRUIT PARTY! :D");
    // changeColorButton.mousePressed(changeColors);
    changeColorButton.position(150, 120);
    changeColorButton.mousePressed(function(){
        setInterval(changeColors, 500);
    });

    let restartButton = createButton('No Fruit Party! >:(');
    restartButton.position(150, 170);
    restartButton.addClass("restartButton");
    restartButton.mousePressed(() => {
    location.reload(); 
  });


  createCanvas(1300, windowHeight);
    noStroke();
    var button = createButton('HORRAY!');
    button.position(150,178);
    button.mousePressed(function(){
        partyOn = !partyOn;
    });

    for(var c = 0; c < numberOfConfetto; c++){
        cColors[c] = color(random(255), random(255), random(255));
        positions[c] = random(height);
        shapes[c] = shapeDecider();
        speeds[c] = random(6) + 1;
        rotations[c] = random(TWO_PI);
    }
}

 // https://editor.p5js.org/aferriss/sketches/rJf3luXdG random colour tutorial 
function changeColors() {
    console.log("Colors changed!");
    document.body.style.backgroundColor = getRandomColor();
    let allDivs = selectAll('.Fruits'); 
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style('background-color', getRandomColor());
        allDivs[i].style('color', getRandomColor()); 
    }
}

// https://stackoverflow.com/questions/1484506/random-color-generator tutorial for making this function choose colors from my array
function getRandomColor() {
    return colours[Math.floor(Math.random() * colours.length)];
 }

 function draw(){
    background(255);
    if(partyOn){
        party();
    }
}

 function party(){
    for(var c = 0; c < cColors.length; c++){
        fill (cColors[c]);
        push();
        translate((c*10)%width, positions[c]);
        rotate(rotations[c]);
        if(shapes[c] === 'confetto'){
            rect(0, 0, 15, 5);
        }  
        if(shapes[c] === 'circle'){
            ellipse(0, 0, 10, 10);
        }
        if(shapes[c] === 'face'){
            text('😸', 0,0 );
        }
        pop();
        positions[c] += speeds[c];
        positions[c] = positions[c]%height
    }
}

function shapeDecider(){
    var shape = 'confetto';
    if(random() > 0.6){
        shape = 'circle'
    }
    if(random() > 0.9){
        shape = 'face';
    }
    return shape;
}