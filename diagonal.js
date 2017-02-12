function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
	
	for(var x = 20; x < width; x=x+20){
	ellipse(x,x,20,20)
	}
	
}
