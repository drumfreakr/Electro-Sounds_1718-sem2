function setup() {

	// Canvas size
	createCanvas(960, 540);

	// Stop the drawing from running 60 times a second
	noLoop();

}

function draw() {

	var r, g, b;

	// For the circle pattern
	for (var circle = 1200; circle > 10; circle -= 20, r = random(251), g = random(255), b = random(255)) {
		fill(r, g, b);
		noStroke();
		ellipse(width / 8 * 3, height / 4 * 3, circle, circle);
	}

	// For vertical pattern
	for (var vertical = 300; vertical < width; vertical += 10, r = random(255), g = random(255), b = random(255)) {
		fill(r, g, b);
		noStroke();
		rect(vertical, 0, 10, height / 2);
	}

	// For the horizontal pattern
	for (var horizontal = 0; horizontal < height; horizontal += 10, r = random(255), g = random(255), b = random(255)) {
		fill(r, g, b);
		noStroke();
		rect(0, horizontal, 300, 10);
	}

	// For the borders
	stroke(0);
	strokeWeight(12);
	line(300, 0, 300, height);
	line(300, height / 2, width, height / 2);
	noFill();
	rect(5, 5, width - 10, height - 10);

}
