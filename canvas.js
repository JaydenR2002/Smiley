let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.fillStyle = "red";
context.fill();

context.lineWidth=1.7;

//haar
context.lineWidth=2;
context.strokeRect(200, 38, 1, 12);

//hoofd
context.beginPath();
context.arc(200,200,150,0,2*Math.PI);
context.fillStyle = "yellow";
context.fill();
context.stroke();

//ogen - links
context.beginPath();
context.arc(130,130,40,0,2*Math.PI);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();

//ogen - pupillen links
context.beginPath();
context.arc(118,134,28,0,2*Math.PI);
context.fillStyle = "blue";
context.fill();
context.closePath();
context.stroke();

// BOVEN RECHTS  -  //ONDER RECHTS

//ogen - rechts
context.beginPath();
context.arc(290,130,40,0,2*Math.PI);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();

//ogen - pupillen rechts
context.beginPath();
context.arc(280,134,28,0,2*Math.PI);
context.fillStyle = "blue";
context.fill();
context.closePath();
context.stroke();

//mond
context.beginPath();
context.arc(200,250,40,0,2*Math.PI/2);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();
