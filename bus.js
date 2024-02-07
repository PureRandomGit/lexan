const canvas = document.getElementById("bus");
const ctx = canvas.getContext("2d");

var seatRows = 10;
var seatColumns = 4;

ctx.strokeStyle = "gray";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.roundRect(10, 10, 100, 300, [10]);
ctx.stroke();

ctx.strokeStyle = "gray";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.roundRect(20, 20, 20, 20, [5]);
ctx.stroke();