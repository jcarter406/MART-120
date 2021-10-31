
function setup() {
        createCanvas(600,800);
    }

function draw() {
        background(255, 205, 205);

        //hair
        fill(190, 140, 0);
        strokeWeight(0);
        rect(180, 100, 240, 260);

        //face
        fill(255, 240, 200)
        strokeWeight(1);
        ellipse(300, 210, 160, 230);

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
        ellipse(310, 520, 75, 30);
        circle(330, 460, 90);
        rect(420, 520, 80, 20);

      
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

       strokeWeight(3);
       line(320, 225, 330, 250);
       point(321, 253);
       point(326, 253);
       
       stroke(255, 0, 0);
       line(300, 275, 340, 275);
       line(285, 265, 300, 275);
       line(340, 275, 355, 265);


       //lips and nose  add lines and points here

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


        //add name
        fill(160, 95, 210);
        textSize(40);
        text("Jean Carter", 200, 720);

    }
