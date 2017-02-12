function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
	
	for(var x=0; x <= width; x+=30){
		for (var y=0; y <= height; y+=30){
			ellipse(x,y,20,20);
		}
	}
	
	
}
