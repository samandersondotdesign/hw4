function setup() {
	createCanvas(400, 400);

	colorMode(HSB);

	noStroke();
	fill(255);
	background(255);

	for (var x = 20; x <= width; x += 30) {
		for (var y = 20; y <= height; y += 30) {
			fill(random(360), 100, 100)
			ellipse(x, y, 20, 20);

		}


	}
}
