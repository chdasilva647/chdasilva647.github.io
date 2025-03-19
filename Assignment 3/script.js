function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  button.show();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {

      const content = document.getElementById('content');
      content.style.display = 'block';
  
      const heading = document.querySelector('h1');
      heading.style.display = 'none';
    }
  });

// i tried using the p5.js version of this and it kept breaking the code so i had to use the vanilla js version


