function setup() {
	createCanvas(400, 400);
}

function draw() {

	noStroke();
	fill(255);
	background(0);
	
	for (var x = 20; x <= width; x += 30) {
		for (var y = 20; y <= height; y += 30) {
			ellipse(x, y, 20, 20);
		}
	}
}
