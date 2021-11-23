//Need to create new objects and movements

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//player
var playerX = 400;
var playerY = 740;
//var playerDirection;

//obstacle Ball A large and slow
var aballX = 590;
var aballY = 570;
var aballDirection;

//obstacle Ball B medium and fast
var bballX = 300;
var bballY = 450;
var bballDirection;

//obstacle Ball C small and fast and multiplies
var cballX = 150;
var cballY = 200;
var cballDirection;

//Do I need a variable for the exit rectangle? Should it move?
var exitX = 120;
var exitY = 0;
var exitDirection;

//You Win sign at end of game    Does it need direction???
var size = 40;
var count = 0;
var sizeDirection = 1;

//mouse click barrier shape 
var mouseShapeX;
var mouseShapeY;

//random number for speed is set up inside setup function
function setup() {
        createCanvas(800,800); 
        aballDirection = Math.floor(Math.random() * 10 + 1);
        bballDirection = Math.floor(Math.random() * 10 + 2);
        cballDirection = Math.floor(Math.random() * 10 + 5);
//call create player function is here???
     createPlayer(400, 740);
     }

function draw() {
        background(255, 205, 205);

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

        //create obstacles by names
        createAball();
        createBball();
        createCball();

        //create barrier with mouse click
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

    //create aball obstacle
    function createAball() 
    {
          fill(255, 240, 200)
          strokeWeight(1);
          circle(aballX, aballY, 180);
          aballY += aballDirection;
        if (aballY <= 150 || aballY >= 700) {
          aballDirection *= -1; 
        } 
    }

    //create bball
    function createBball()
    {
       fill(200, 225, 180);
       strokeWeight(1);
       circle(bballX, bballY, 100);

       bballX += bballDirection;
       if(bballX > width)
       {
           bballX= 0;
       }
       if(bballX < 0)
       {
           bballX = width;
       }
    }


    //cball
    function createCball()
    {
       fill(255, 0, 0);
       strokeWeight(1);
       circle(cballX, cballY, 60);
       cballX += cballDirection;
       if (cballX <= 50 || cballX >= 720) {
           cballDirection *= -1; 
       }
       cballY += cballDirection;
       if (cballY <= 50 || cballY >= 720) {
           cballDirection *= -1; 
       }
    } 
     
    //Need to add function to call up the obstable one time
    function createShape()
    {
        fill(0, 255, 0);
        strokeWeight(3);
        circle(mouseShapeX, mouseShapeY, 100);
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





