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

let showDef = false; 

function setup() {
  createCanvas(windowWidth, 500);

  defButton = createButton('Definitions');
  defButton.position(140, 600);
  defButton.mousePressed(() => {
    showDef = !showDef; 
  });

  restartButton = createButton('Restart');
  restartButton.position(240, 600);

  restartButton.mousePressed(() => {
    location.reload(); 
  });
  
  button = createButton('Go Mad!');
  button.position(140, 540);
  input0 = createInput('holiday');
  input0.position(140, 200);
  input1 = createInput("person's name");
  input1.position(140, 220);
  input2 = createInput('verb');
  input2.position(140, 240);
  input3 = createInput('store name');
  input3.position(140, 260);
  input4 = createInput('noun');
  input4.position(140, 280);
  input5 = createInput('adjective');
  input5.position(140, 300);
  input6 = createInput('noun');
  input6.position(140, 320);
  input7 = createInput('adjective');
  input7.position(140, 340);
  input8 = createInput('noun');
  input8.position(140, 360);
  input9 = createInput('adjective');
  input9.position(140, 380);
  input10 = createInput('noun');
  input10.position(140, 400);
  input11 = createInput("person's name");
  input11.position(140, 420);
  input12 = createInput('verb ending in ed');
  input12.position(140, 440);
  input13 = createInput('verb ending in ed');
  input13.position(140, 460);
  input14 = createInput('adjective');
  input14.position(140, 480);
  input15 = createInput('type of store');
  input15.position(140, 500);
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
    135,490
    );
  }

  button.mousePressed(changeX)
  if (story) {
    textSize(25);
    text('It was almost ' + input0.value() + ', so ' + input1.value() + ' knew they had to go grocery shopping. They ' + input2.value() + ' to the ' + input3.value() + ' and picked up a(n) ' + input4.value() + '. They looked at their list and went to get the ' + input5.value() + ' ' + input6.value() + ', ' + input7.value() + ' ' + input8.value() + ', and ' + input9.value() + ' ' + input10.value() + ". They couldn't find anything! Eventually they saw their friend, " + input11.value() + ', and ' + input12.value() + ' them for help. Their friend '+ input13.value() + " in panic. 'You're in the " + input14.value() + " place!' they said. 'This is a " + input15.value() + "!'",  440, 50, 700, 900);
  }
 }

 function keyPressed() {
  if (key === "=") {
    showDef = !showDef;
  }
}