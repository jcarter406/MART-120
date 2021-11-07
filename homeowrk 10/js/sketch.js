//move head up and down at random
var headX = 300;
var headY = 210;
var headDirection;

//move hair left and right at random
var hairX = 180;
var hairY = 100;
var hairDirection;

//move kitten tail up and down at random
var tailX = 420;
var tailY = 520;
var tailDirection;

//move kitten paw left and right at random
var pawX = 320;
var pawY = 520;
var pawDirection;

//move laser diagomally at random
var laserX = 250;
var laserY = 480;
var laserDirection;

//change size of name
var size = 40;
var count = 0;
var sizeDirection = 1;

//random number for speed is set up inside setup function
function setup() {
        createCanvas(600,800); 
        headDirection = Math.floor(Math.random() * 10 + 1);
        hairDirection = Math.floor(Math.random() * 10 + 1);
        tailDirection = Math.floor(Math.random() * 10 + 1);
        pawDirection = Math.floor(Math.random() * 10 + 1);
        laserDirection = Math.floor(Math.random() * 10 + 5);
     }

function draw() {
        background(255, 205, 205);

        //hair
        fill(190, 140, 0);
        strokeWeight(0);
        rect(hairX, hairY, 240, 260);

        hairX += hairDirection;
        if (hairX <= 160 || hairX >= 210) {
            hairDirection *= -1;
        } 

        //face
        fill(255, 240, 200)
        strokeWeight(1);
        ellipse(headX, headY, 160, 230);
        headY += headDirection;
        if (headY <= 200 || headY >= 250) {
            headDirection *= -1; 
        } 

        //shirt
        fill(200, 225, 180);
        strokeWeight(0);
        rect(160, 345, 280, 350);
        triangle(100, 610, 160, 345, 160, 600);
        triangle(440, 600, 440, 345, 510, 610);

        //bangs
        fill(190, 140, 0);
        strokeWeight(0);       
        ellipse(303, 110, 250, 100);

        //neck
        fill(255, 240, 200)
        strokeWeight(0);
        rect(270, 300, 60, 80);
        circle(300, 370, 60);

        //kitten body
        fill(130, 90, 45);
        strokeWeight(0);
        triangle(290, 440, 275, 380, 340, 430);
        triangle(320, 430, 380, 380, 370, 440);
        ellipse(390, 505, 140, 80);
        ellipse(pawX, pawY, 160, 30);
        circle(330, 460, 90);
        rect(tailX, tailY, 120, 20);
        pawX += pawDirection;
        if (pawX <= 250 || pawX >= 350) {
            pawDirection *= -1; 
        } 
      
        tailY += tailDirection;
        if (tailY <= 480 || tailY >= 530) {
            tailDirection *= -1; 
        } 


        //arms and hands
        fill(255, 240, 200);
        strokeWeight(0);
        rect(115, 540, 160, 40);
        rect(330, 540, 160, 40);
        circle(290, 550, 60);
        circle(320, 550, 60);

       //facial features eyes
       fill(255, 255, 255);
       strokeWeight(2);
       stroke(0, 0, 0);
       ellipse(300, 210, 20, 15);
       ellipse(340, 210, 20, 15);

       fill(70, 115, 195);
       strokeWeight(0);
       circle(300, 213, 9);
       circle(340, 213, 9);

       //lips and nose  add lines and points here
       strokeWeight(3);
       line(320, 225, 330, 250);
       point(321, 253);
       point(326, 253);
       
       stroke(255, 0, 0);
       line(300, 275, 340, 275);
       line(285, 265, 300, 275);
       line(340, 275, 355, 265);

       //kitten face
        fill(0, 175, 80);
        stroke(0, 0, 0);
        strokeWeight(1);
        circle(320, 450, 12);
        circle(340, 450, 12);

        fill(255, 205, 205);
        triangle(330, 475, 320, 460, 340, 460);

        strokeWeight(3);
        line(280, 445, 310, 460);
        line(275, 460, 310, 465);
        line(280, 480, 311, 470);
        line(350, 460, 380, 445);
        line(350, 465, 385, 460);
        line(349, 470, 380, 480);

        //red laser dot
        stroke(255, 0, 0);
        strokeWeight(10);
        point(laserX, laserY);
        laserX += laserDirection;
        if (laserX <= 100 || laserX >= 450) {
            laserDirection *= -1; 
        }
        laserY += laserDirection;
        if (laserY <= 200 || laserY >= 680) {
            laserDirection *= -1; 
        }  
     

        //add name
        stroke(0, 0, 0);
        strokeWeight(2);
        fill(160, 95, 210);
        textSize(size);
        size += sizeDirection;
        count++;
        if (count > 5) {
            sizeDirection *= -1;
            count = 0;
                    }
        text("Jean Carter", 200, 720);

    }
