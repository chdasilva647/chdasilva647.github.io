//// tutorial https://editor.p5js.org/Mowatk1/sketches/hLkvpeh6z
var story;
// let tada;
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

let showDef = false; 

function setup() {
  createCanvas(windowWidth, 500);
  // tada = createAudio('tada.mp3');
 defButton = createButton('Definitions');
 defButton.position(140, 580);
 defButton.mousePressed(() => {
   showDef = !showDef; 
 });

 restartButton = createButton('Restart');
  restartButton.position(240, 580);

  restartButton.mousePressed(() => {
    location.reload(); 
  });

 button = createButton('Go Mad!');
  button.position(140, 520);
  input0 = createInput('adjective');
  input0.position(140, 200);
  input1 = createInput('nationality');
  input1.position(140, 220);
  input2 = createInput("person's name");
  input2.position(140, 240);
  input3 = createInput('noun');
  input3.position(140, 260);
  input4 = createInput('adjective');
  input4.position(140, 280);
  input5 = createInput('shape');
  input5.position(140, 300);
  input6 = createInput('adjective');
  input6.position(140, 320);
  input7 = createInput('adjective');
  input7.position(140, 340);
  input8 = createInput('plural noun');
  input8.position(140, 360);
  input9 = createInput('noun');
  input9.position(140, 380);
  input10 = createInput('number');
  input10.position(140, 400);
  input11 = createInput('plural shapes');
  input11.position(140, 420);
  input12 = createInput('food');
  input12.position(140, 440);
  input13 = createInput('food');
  input13.position(140, 460);
  input14 = createInput('number');
  input14.position(140, 480);
  createCanvas(windowWidth, windowHeight);

}

function changeX(){
  story = true
  // button.html('Finish!');
  // if (tada) {
  //   tada.play();
  // }
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
    135,470
    );
  }

  button.mousePressed(changeX)
  if (story) {
    textSize(25);
    text('Pizza was invented by a ' + input0.value() + ' ' + input1.value() + ' chef named ' + input2.value() + '. To make a pizza, you need to take a lump of ' + input3.value() + ', and make a thin, round ' + input4.value() + ' ' + input5.value() + '. Then you cover it with ' + input6.value() + ' sauce, ' + input7.value() + ' cheese, and fresh chopped ' + input8.value() + '. Next you have to bake it in a very hot ' + input9.value() + '. When it is done, cut it into ' + input10.value() + ' ' + input11.value() + '. Some people like ' + input12.value() + ' pizza the best, but my favourite is the ' + input13.value() + " pizza. If I could, I would eat pizza " + input14.value() + ' times a day! ',  440, 50, 700, 900);
  }
 }


 function keyPressed() {
  if (key === "=") {
    showDef = !showDef;
    console.log('showDef toggled:', showDef); // Debugging output
  }
}
// i was trying to get the definitins to toggle on and off but it didn't work, even after trying to use tutorials and other resources to help me.