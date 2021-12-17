
// p5.glitch-image example source
// cc teddavis.org 2020 source of code for glitching
// other codes from previous homework based on Michael Cassen examples

let glitch;
let deer;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

function setup() {
	createCanvas(1000, 1000);
	background(45, 90, 180);
	deer = loadImage('assets/deer3.png');
	imageMode(CENTER);

	// get a random speed when the it first starts and begin with 5 shapes
    for (var i = 0; i < 20; i++) 
    {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
        shapeXs[i] = random(0, 800);
        shapeYs[i] = random(0, 600); 
        diameters[i] = random(2, 8);
    }

	glitch = new Glitch();
	loadImage('assets/street.png', function(im){
		glitch.loadImage(im);
	});
}

function draw() {

	glitch.resetBytes();

	glitch.replaceBytes(100, 120); // swap all decimal byte 100 for higher value

	glitch.randomBytes(20); // add random bytes for movement

	glitch.buildImage();

	image(glitch.image, width/2, height/2);

	label();
	image(deer, 450, 550);

	//create snowflakes using arrays
	for (var i = 0; i < shapeXs.length; i++) 
	{
		stroke(255, 255, 255);
		strokeWeight(1);
		fill(255, 255, 255);

		circle(shapeXs[i], shapeYs[i], diameters[i]);

		shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 1);
		shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

		// move the snowflakes
		shapeXs[i] += shapeXSpeeds[i];
		shapeYs[i] += shapeYSpeeds[i];

		// Not sure why they are leaving tracks and not just floating
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
}

 //Function to add title
 function label()
 {
		stroke(0, 0, 0);
		strokeWeight(1);
		fill(255, 0, 0);
		textSize(30);
		text("How deer see passing cars", 300, 790);
 }

