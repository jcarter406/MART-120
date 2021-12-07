//Need to create new objects and movements

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//player
var playerX = 400;
var playerY = 740;

//change obstacle vars to arrays
// x and y for a shape begin with example code then vary for effect
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

//variable for the exit rectangle
var exitX = 120;
var exitY = 0;
var exitDirection;

//You Win sign at end of game
var size = 40;
var count = 0;
var sizeDirection = 1;

//mouse click barrier shape 
var mouseShapeX;
var mouseShapeY;

//random number for speed is set up inside setup function
function setup() {
        createCanvas(800,800);
// Pick colors randomly
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);

// get a random speed when the it first starts and begin with 5 shapes
    for (var i = 0; i < 10; i++) 
    {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = random(0, 800);
        shapeYs[i] = random(0, 800);
        diameters[i] = random(15, 60);
    }

//call create player function is here
        createPlayer(400, 740);
  
    }

//end of set up function - go to draw function

function draw() {
        background(100, 160, 225);

        //add border function
        createBorder(5);

        //call functions to make and label Exit
        makeExit();
        labelExit();

        //call function for winning message
        message();

        //createPlayer(400, 740);
        drawPlayer();
        playerMovement();

        //create obstacles using arrays
        for (var i = 0; i < shapeXs.length; i++) 
        {
            //different colors and sizes needed
            stroke(0, 0, 0);
            strokeWeight(2);
            fill(145, 70, 200);
            if (diameters[i] <= 30) {
               fill(r, g, b);
            }
            if (diameters[i] >= 50) {
                fill(r + 50, g - 30, b - 50);
            }


            circle(shapeXs[i], shapeYs[i], diameters[i]);
           
            shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

            // move the shape
            shapeXs[i] += shapeXSpeeds[i];
            shapeYs[i] += shapeYSpeeds[i];

            // check to see if the shape has gone out of bounds
            if (shapeXs[i] > width) {
            shapeXs[i] = 0;
         }
            if (shapeXs[i] < 0) {
            shapeXs[i] = width;
         }
            if (shapeYs[i] > height) {
            shapeYs[i] = 0;
         }
            if (shapeYs[i] < 0) {
            shapeYs[i] = height;
         }
        }
        //create multiple barriers with mouse click
        createShape();

    }

    //Need to add this function AFTER or outside the draw function and call the variable
    function playerMovement()
        {
        if (keyIsDown(d))
        {
            playerX+=15;
            }
        if (keyIsDown (a))
        {
            playerX-=15;
            }   
        if (keyIsDown(s))
        {
            playerY+=15;
            }
        if (keyIsDown(w))
        {
            playerY-=15;
            }      
        }  

    
    //function to createPlayer with draw and movement
    function createPlayer(x,y)
    {
        playerX = x;
        playerY = y;
    }

 
    //function to draw player
    function drawPlayer()
    {
        fill(190, 140, 0);
        strokeWeight(2);
        rect(playerX, playerY, 50, 50);
    }

        
    // Function to callExit
    function makeExit()
    {    
        fill(255, 255, 255);
        strokeWeight(2);
        stroke(0, 0, 0);
        rect(exitX, exitY, 200, 30);
    }

    //Function to label exit
    function labelExit()
    {
           stroke(0, 0, 0);
           strokeWeight(2);
           fill(0, 0, 255);
           textSize(30);
           text("EXIT", 180, 25);
    }

    //Function for winning message
    function message() 
    {
        if(playerX > 120 && playerY < 0) {
            fill(0);
            stroke(5);
            text("YOU WIN!!!", 250, 100);
            }
    }

    //Need to add function to call up obstacle each time mouse clicked so it 
    //remains and lets more be added
    function createShape()
    {
        fill(255, 0, 0);
        strokeWeight(4);
        stroke(0, 0, 255);
        rect(mouseShapeX, mouseShapeY, 160, 40);
    }
    
    function mouseClicked() 
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }

    function createBorder(thickness) 
    {
        fill(0, 0, 255);
        strokeWeight(1);
        rect(0, 0, width, thickness);
        rect(0,0, thickness, height);
        rect(0,height-thickness, width, thickness);
        rect(width-thickness, 0, thickness, height);
        //do I need to add opening for exit since I have it labeled???

    }
