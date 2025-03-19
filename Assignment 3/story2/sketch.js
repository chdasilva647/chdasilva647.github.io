function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  button.show();
}

var story;
var button;
var input0;
var input1;
var input2;
var input3;
var input4;
var input5;
var input6;
var input7;
var input8;
var input9;
var input10;
var input11;
var input12;
var input13;
var input14;
var input15;
var input16;
var input17;
var input18;
var input19;

let showDef = false; 


function setup() {
  createCanvas(windowWidth, 500);

  defButton = createButton('Definitions');
  defButton.position(140, 680);
  defButton.mousePressed(() => {
    showDef = !showDef; 
  });

  restartButton = createButton('Restart');
  restartButton.position(240, 680);

  restartButton.mousePressed(() => {
    location.reload(); 
  });
  
  button = createButton('Go Mad!');
  button.position(140, 620);
  input0 = createInput('adjective');
  input0.position(140, 200);
  input1 = createInput('adjective');
  input1.position(140, 220);
  input2 = createInput('noun');
  input2.position(140, 240);
  input3 = createInput('noun');
  input3.position(140, 260);
  input4 = createInput('plural noun');
  input4.position(140, 280);
  input5 = createInput('game');
  input5.position(140, 300);
  input6 = createInput('plural noun');
  input6.position(140, 320);
  input7 = createInput('verb ending in ing');
  input7.position(140, 340);
  input8 = createInput('verb ending in ing');
  input8.position(140, 360);
  input9 = createInput('plural noun');
  input9.position(140, 380);
  input10 = createInput('game');
  input10.position(140, 400);
  input11 = createInput('verb ending in ing');
  input11.position(140, 420);
  input12 = createInput('noun');
  input12.position(140, 440);
  input13 = createInput('plant');
  input13.position(140, 460);
  input14 = createInput('part of the body');
  input14.position(140, 480);
  input15 = createInput('a place');
  input15.position(140, 500);
  input16 = createInput('verb ending in ing');
  input16.position(140, 520);
  input17 = createInput('adjective');
  input17.position(140, 540);
  input18 = createInput('number');
  input18.position(140, 560);
  input19 = createInput('plural noun');
  input19.position(140, 580);
  
  createCanvas(windowWidth, windowHeight);
}

function changeX(){
  story = true
}

function draw() {
  if (showDef) {
    fill(0);
    textSize(15);
    textAlign(LEFT, TOP);
    text(
        'Noun: A word that names a person, place, thing, or idea (e.g., cat, city, book, freedom).\n' +
        'Verb: A word that describes an action or state of being (e.g., run, sing, is, are).\n' +
        'Adjective: A word that describes a noun or pronoun (e.g., big, blue, happy).\n' +
        'Adverb: A word that modifies a verb, adjective, or another adverb, often describing\n             how, when, where, or to what extent (e.g., quickly, very, slowly).\n',
    135,570
    );
  }

  button.mousePressed(changeX)
  if (story) {
    textSize(25);
    text('A vacation is when you take a trip to some ' + input0.value() + ' place with your ' + input1.value() + ' family. Usually you go to some placethat is near a(n) ' + input2.value() + ' or up on a(n) ' + input3.value() + '. A good vacation place is one where you can ride ' + input4.value() + ' or play ' + input5.value() + ' or go hunting for ' + input6.value() + '. I like to spend my time ' + input7.value() + ' or ' + input8.value() + '. When parents go on a vacation, they spend their time eating three ' + input9.value() + ' a day, and fathers play ' + input10.value() + ' and mothers sit around ' + input11.value() + '. Last summer, my little brother fell in a(n) ' + input12.value() + ' and got poison ' + input13.value() + ' all over his ' + input14.value() + ". My family is going to go to (the) " + input15.value() + ', and I will practice ' + input16.value() + '. Parents need vacations more than kids because parents are always very ' + input17.value() + ' and because they have to work ' + input18.value() + ' hours every day all year making enough ' + input19.value() + ' to pay for the vacation ',  440, 50, 700, 900);
  }
 }

 function keyPressed() {
  if (key === "=") {
    showDef = !showDef;
  }
}