function setup() {
	createCanvas(400, 400);
}

var addition = 2;
var step = 0;
var numSteps = 30;
var pacmanX = 0;
var pacmanY = 50;
var dotsX = [100, 200, 300];
var dotsY = [50, 50, 50];
var direction = 0;

function pointsClose(x1, y1, x2, y2) {
	var dist = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
	return dist < 100;
}

function draw() {
	clear();
	step += addition;
	
	if (keyIsDown(RIGHT_ARROW)) {
		pacmanX += 2;
		direction = 0;
	}
	if (keyIsDown(DOWN_ARROW)) {
		pacmanY += 2;
		direction = 1;
	}
	if (keyIsDown(LEFT_ARROW)) {
		pacmanX -= 2;
		direction = 2;
	}
	if (keyIsDown(UP_ARROW)) {
		pacmanY -= 2;
		direction = 3;
	}

	
	if (step == 0 || step >= numSteps) {
		addition *= -1;
	}

	for (var i = 0; i < dotsX.length; i++) {
		if (pointsClose(pacmanX, pacmanY, dotsX[i], dotsY[i])) {
			dotsX[i] = -100;
		}
		ellipse(dotsX[i], dotsY[i], 10, 10);
	}

	push();
	fill(255, 255, 255, 200);
	arc(pacmanX, pacmanY, 80, 80, PI / 2 * direction + step / numSteps * PI / 4, PI / 2 * direction + -step / numSteps * PI / 4 - .01, PIE);
	pop();

}
