//Need to create new objects and movements

//player
var playerX = 400;
var playerY = 740;
var playerDirection;

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

//mouse click rectangle barrier  
var mouseShapeX;
var mouseShapeY;

//random number for speed is set up inside setup function
function setup() {
        createCanvas(800,800); 
        aballDirection = Math.floor(Math.random() * 10 + 1);
        bballDirection = Math.floor(Math.random() * 10 + 2);
        cballDirection = Math.floor(Math.random() * 10 + 5);
        playerDirection = Math.floor(Math.random() * 10 + 1);
     }

function draw() {
        background(255, 205, 205);

        //exit 
        fill(255, 255, 255);
        strokeWeight(2);
        stroke(0, 0, 0);
        rect(exitX, exitY, 200, 30);
       
       //exit label
        stroke(0, 0, 0);
        strokeWeight(2);
        fill(0, 0, 255);
        textSize(30);
        text("EXIT", 180, 25);

        //Player
        fill(190, 140, 0);
        strokeWeight(2);
        rect(playerX, playerY, 50, 50);

        //message for leaving exit
        if(playerX > 120 && playerY < 0) {
            fill(0);
            stroke(5);
            text("YOU WIN!!!", 250, 100);
        }

        //aball
        fill(255, 240, 200)
        strokeWeight(1);
        circle(aballX, aballY, 180);
        aballY += aballDirection;
        if (aballY <= 150 || aballY >= 700) {
            aballDirection *= -1; 
        } 

        //bball
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
      
        //cball
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

        //mouse click obstacle - need to finish code here
        fill(0, 255, 0);
        strokeWeight(3);
        rect(mouseShapeX, mouseShapeY, 160, 40);




    }

    //Need to add this function AFTER or outside the draw function and call the variable
    function keyPressed(playerDirection) {
        if (key == 'd')
        {
            playerX+=25;
            }
        else if (key == 'a')
        {
            playerX-=25;
            }   
        else if (key == 's')
        {
            playerY-=25;
            }
        else if (key == 'w')
        {
            playerY-=25;
            }      
    }  

    //Need to add function to call up the obstable one time
    function mouseClicked() {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }


    //Need to show YOU WIN when player reaches exit
    