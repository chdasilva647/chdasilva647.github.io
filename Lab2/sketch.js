var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 1,
    ySpeed: 1,
    color: 'red',
    draw: function(){
        fill(this.color); // 'this' refers to self so u dont need to write 'redBrick'
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width -this.w){ // || means or
            this.xSpeed *= -1;
        }
        if (this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
       // redBrick.x = (redBrick.x + 1) % width;
       // redBrick.y = (redBrick.y + 1) % height;
    }
};

var blueBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 2,
    ySpeed: 2,
    color: 'blue',
    draw: function(){
        fill(this.color); 
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){ 
            this.xSpeed *= -1;
        }
        if (this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var greenBrick = {
    x: 50,
    y: 60,
    w: 30,
    h: 30,
    xSpeed: 3,
    ySpeed: 3,
    color: 'green',
    draw: function(){
        fill(this.color); 
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){ 
            this.xSpeed *= -1;
        }
        if (this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

// redBrick.x++ returns current vlaue then increments 
// ++redBrick.x increments value and then returns it

function setup(){
    createCanvas(720,480);
};

function draw(){
    background('grey')
     redBrick.draw();
     redBrick.move();
     blueBrick.draw();
     blueBrick.move();
     greenBrick.draw();
     greenBrick.move();

};

