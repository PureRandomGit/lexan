const canvas = document.getElementById("bus");
const ctx = canvas.getContext("2d");

const seatSize = (window.innerWidth/10);
const seatGap = 1.25;

var seatRows = 14;
var seatColumns = 4;
var busLength = (seatRows*seatSize*seatGap)+(seatSize*2)-seatSize*(seatGap-1);
var busWidth = (seatColumns*seatSize)+(seatSize);


canvas.width = busWidth+20;
canvas.height = busLength+20;

ctx.font = .15 * busWidth + "px Arial";
ctx.fillStyle = "grey"
ctx.textAlign = "center";
ctx.fillText("Front", busWidth/2+5, seatSize*1.5);

ctx.strokeStyle = "gray";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.roundRect(10, 10, busWidth, busLength, [5]);
ctx.stroke();

var rowInstance = 0;
var columnInstance = 0;
var seatNumber = 1;

while (rowInstance < seatRows) {
    while (columnInstance < seatColumns) {
        if (columnInstance < seatColumns/2) {
            ctx.strokeStyle = "gray";
            ctx.lineWidth = "2";
            ctx.beginPath();
            ctx.roundRect(columnInstance*seatSize+10 ,(rowInstance*seatSize*seatGap)+(seatSize*2)+10, seatSize, seatSize, [5]);
            ctx.stroke();

            ctx.font = seatSize/2 + "px Arial";
            ctx.fillStyle = "grey"
            ctx.textAlign = "center";
            ctx.fillText(seatNumber, columnInstance*seatSize+seatSize-(seatSize/4), (rowInstance*seatSize*seatGap)+(seatSize*2.65)+10);
            
            columnInstance++;
            seatNumber++;
        }
        else {
            // Seats
            ctx.strokeStyle = "gray";
            ctx.lineWidth = "2";
            ctx.beginPath();
            ctx.roundRect(columnInstance*seatSize+seatSize+10 ,(rowInstance*seatSize*seatGap)+(seatSize*2)+10, seatSize, seatSize, [5]);
            ctx.stroke();
            // Seat Numbers
            ctx.font = seatSize/2 + "px Arial";
            ctx.fillStyle = "grey"
            ctx.textAlign = "center";
            ctx.fillText(seatNumber, columnInstance*seatSize+seatSize*2-(seatSize/4), (rowInstance*seatSize*seatGap)+(seatSize*2.65)+10);
            
            seatNumber++;
            columnInstance++;
        }
    }
    rowInstance++;
    columnInstance=0;
}
