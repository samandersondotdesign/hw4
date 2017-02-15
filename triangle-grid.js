function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	noStroke();
	fill(0);
	background(255);

	for (var y = 20; y <= 200; y += 20) {
		for (var x = y; x <= 400-y; x += 20) {
			ellipse(x, y, 18, 18);
		}
	}
}
