function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	noStroke();
	fill(0);
	background(255);

	
	
	for (var y = 20; y <= 400; y += 20) {
		var startX = y;
		var endX = 400-startX;
			for (var x = startX; x <= endX - y; x += 20) {
				ellipse(x, y, 18, 18);
			}
	}			
	for (var y = 380; y >= 220; y = y = 20) {
		for (var x = 400 - y; x <= y, x = x+20) {
			ellipse(x,y,18,18);
		}
	}
}
