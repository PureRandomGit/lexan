const canvas = document.getElementById("bus");
const ctx = canvas.getContext("2d");

var seatRows = 10;
var seatColumns = 5;

var w = window.innerWidth;

const seatSize = (window.innerWidth/10);

var busLength = seatRows*(seatSize+10)+(seatSize*2-20);
var busWidth = (seatColumns*seatSize)+(seatSize);


canvas.width = busWidth+20;
canvas.height = busLength+20;

// drawArrow(ctx, busLength-seatSize+3, (busWidth/2), busLength, (busWidth/2), seatSize/8, 'gray');

ctx.strokeStyle = "gray";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.roundRect(10, 10, busWidth, busLength, [5]);
ctx.stroke();

var rowInstance = 0;
var columnInstance = 0;
while (columnInstance < seatColumns) {
    if (columnInstance < seatColumns/2) {
        while (rowInstance < seatRows) {
            ctx.strokeStyle = "gray";
            ctx.lineWidth = "2";
            ctx.beginPath();
            ctx.roundRect(columnInstance*seatSize+10 ,rowInstance*(seatSize+10)+seatSize*2, seatSize, seatSize, [5]);
            ctx.stroke();
            rowInstance++;
        }
    }
    else {
        while (rowInstance < seatRows) {
            ctx.strokeStyle = "gray";
            ctx.lineWidth = "2";
            ctx.beginPath();
            ctx.roundRect( (columnInstance*seatSize)+seatSize+10 ,rowInstance*(seatSize+10)+seatSize*2, seatSize, seatSize, [5]);
            ctx.stroke();
            rowInstance++;
        }
    }
    rowInstance = 0;
    columnInstance ++;
}




function drawArrow(ctx, fromx, fromy, tox, toy, arrowWidth, color){
    //variables to be used when creating the arrow
    var headlen = 10;
    var angle = Math.atan2(toy-fromy,tox-fromx);
 
    ctx.save();
    ctx.strokeStyle = color;
 
    //starting path of the arrow from the start square to the end square
    //and drawing the stroke
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineWidth = arrowWidth;
    ctx.stroke();
 
    //starting a new path from the head of the arrow to one of the sides of
    //the point
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
               toy-headlen*Math.sin(angle-Math.PI/7));
 
    //path from the side point of the arrow, to the other side point
    ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),
               toy-headlen*Math.sin(angle+Math.PI/7));
 
    //path from the side point back to the tip of the arrow, and then
    //again to the opposite side point
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
               toy-headlen*Math.sin(angle-Math.PI/7));
 
    //draws the paths created above
    ctx.stroke();
    ctx.restore();
}