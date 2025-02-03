var hotBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 1.5,
    ySpeed: 1.5,
    color: '#ff1e7d',
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

var pinkBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 2.5,
    ySpeed: 2.5,
    color: '#ff6caa',
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

var whiteBrick = {
    x: 50,
    y: 60,
    w: 30,
    h: 30,
    xSpeed: 3.5,
    ySpeed: 3.5,
    color: 'white',
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
    background('#830b3e')
     hotBrick.draw();
     hotBrick.move();
     pinkBrick.draw();
     pinkBrick.move();
     whiteBrick.draw();
     whiteBrick.move();

};

