

// --------------------------------------------------------------------------
// Turotal from https://p5js.org/examples/input-elements-input-button/
let nameInput;
let button;
let greeting;

function setup() {
// --------------------------------------------------------------------------
// Tutorial on how to position the canvas https://github.com/processing/p5.js/wiki/Positioning-your-canvas
    var cnv = createCanvas(710, 250);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(550, 450);
    background(255);
// --------------------------------------------------------------------------

  greeting = createElement('h2', 'What Is Your Favourite Movie?');
  greeting.position(550, 370);

  nameInput = createInput();
  nameInput.position(550, 420);

  button = createButton('submit');
  button.position(nameInput.x + nameInput.width, 420);

  button.mousePressed(greet);
  nameInput.changed(greet);
}

function greet() {
  background(255);

  let name = nameInput.value();

  nameInput.value('');

  textSize(45);
  textAlign(CENTER, CENTER);
  text(name, width / 2, height / 2);
}
// remixed by changing the question asked and the size of the text
// --------------------------------------------------------------------------
