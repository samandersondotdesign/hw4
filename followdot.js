function setup() {
  createCanvas(400, 400);
}

var rate = 0.1;
var x = 0;
var y = 0;
var target = 100;
var color = 0;

function draw() {
	background(255);
	fill(230,230,230);
	ellipse(x,y, 40, 40);
	fill(255,0,0);
	noStroke();
  ellipse(x, y, 25, 25);
  x = mouseX*rate + x*(1-rate); 
	y = mouseY*rate + y*(1-rate);
	
	
}
