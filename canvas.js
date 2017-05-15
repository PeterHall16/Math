var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Axes
ctx.moveTo(250,0);
ctx.lineTo(250,500);
ctx.stroke();

ctx.moveTo(500,250);
ctx.lineTo(0,250);
ctx.stroke();

ctx.moveTo(500,250);
ctx.lineTo(0,250);
ctx.stroke();

//Quadratic