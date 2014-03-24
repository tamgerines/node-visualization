var tokenArray = ["250000",
"100000000000000000000000000000000000000","85000000000000000000000000000000000000",
"45000000000000000000000000000000000000","20000000000000000000000000000000000000",
"12000000000000000000000000000000000000","3446291234030450529830113896721145692",
"170000000000000000000000000000000000000"]; //can be up to 100 nodes
var arrayLength = tokenArray.length;

//draw ring visualization
var ringCanvas = document.getElementById("ring");
var ringContext = ringCanvas.getContext("2d");
ringContext.beginPath();
ringContext.arc(150, 150, 100, 0, Math.PI*2, false);
ringContext.closePath();
ringContext.fillStyle = "#383838";
ringContext.fill();

//add nodes to ring
for (i=0;i<arrayLength;i++) {
	var angle = tokenMath(tokenArray[i]);
	var x = getNodeXCoordinate(angle);
	var y = getNodeYCoordinate(angle);
	drawNode(x, y);
}

//function that deals with big number tokens
function tokenMath(token){
	var tokenLength = token.length;
	console.log(tokenLength);
	if (tokenLength > 36) {
		var truncTokenString = token.slice(0,tokenLength-36);
		var truncToken = Number(truncTokenString);
		console.log(truncToken);
	}
	else {
		var truncToken = 0;
	}
	var angle1 = Math.PI*2*truncToken/170 //170 is first 3 digits of 2^127
	var angle2 = Math.PI/2-angle1;
	return angle2;
}

//function that uses the token to determine where to place the node on the ring (x)
function getNodeXCoordinate(angle) {
	var x1 = 100*Math.cos(angle) //radius of ring is 100 in this case
	return x1+150; //accounts for canvas coordinate plane
}

//function that uses the token to determine where to place the node on the ring (y)
function getNodeYCoordinate(angle) {
	var y1 = 100*Math.sin(angle) //radius of ring is 100 in this case
	return 150-y1; //accounts for canvas coordinate plane
}

//function that draws the node on the ring
function drawNode(x, y) {
	ringContext.beginPath();
	ringContext.arc(x, y, 10, 0, Math.PI*2, false);
	ringContext.closePath();
	ringContext.fillStyle = "#009966";
	ringContext.fill();
}