//put list of token strings here:
var tokenArray = ["140000000000000000000000000000000000000",
"105620057623489367144260519908720061134","85000000000000000000000000000000000000",
"45000000000000000000000000000000000000","20000000000000000000000000000000000000",
"12000000000000000000000000000000000000","3446291234030450529830113896721145692",
"170000000000000000000000000000000000000","250000"]; //can be up to 100 nodes
var arrayLength = tokenArray.length;

//add nodes to ring
for (i=0;i<arrayLength;i++) {
	var token = tokenArray[i];
	var angle = estimateAngleFromToken(token);
	var x = getNodeXCoordinate(angle);
	var y = getNodeYCoordinate(angle);
	drawNode(token, x, y);
}

//function that deals with big number tokens
function estimateAngleFromToken(token){
	var tokenLength = token.length;
	var truncToken = 0;
	if (tokenLength > 36) {
		var truncTokenString = token.slice(0,tokenLength-36);
		truncToken = Number(truncTokenString);
	}
	var angle1 = Math.PI*2*truncToken/170 //170 is first 3 digits of 2^127
	var angle2 = Math.PI/2-angle1;
	return angle2;
}

//function that uses the token's angle to determine where to place the node on the ring (x)
function getNodeXCoordinate(angle) {
	var x1 = 100*Math.cos(angle) //radius of ring is 100 in this case
	return x1+100; //accounts for coordinate plane translation & radius (10) of node
}

//function that uses the token's angle to determine where to place the node on the ring (y)
function getNodeYCoordinate(angle) {
	var y1 = 100*Math.sin(angle) //radius of ring is 100 in this case
	return 100-y1; //accounts for coordinate plane translation & radius (10) of node
}

//function that draws the node on the ring
function drawNode(token, x, y) {
	var node = document.createElement("div");
	node.className = "node";
	node.id = token;
	node.addEventListener("click", function(){console.log("Token "+node.id)}, false);
	node.style.WebkitTransform = "translate("+x+"px, "+y+"px)"; //Chrome, Opera, Safari
	//node.style.transform = "translate("+x+"px, "+y+"px)";
	document.getElementById("container").appendChild(node);
}