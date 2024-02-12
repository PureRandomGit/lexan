const bus = document.querySelector(".bus")
const seating = document.querySelector(".seating")
const seatRows = getComputedStyle(bus).getPropertyValue("--seatRows");
const seatCols = getComputedStyle(bus).getPropertyValue("--seatColumns");

console.log("Rows", seatRows);
console.log("Cols", seatCols);
console.log("Seats", seatCols * seatRows);

let seatCount = 1;
while (seatCount <= (seatCols * seatRows)) {
  const seat = document.createElement("div");
  seat.classList.add("seat");
  seat.classList.add(`seat-${seatCount}`);
  seat.innerText = seatCount;
  seating.append(seat);
  seatCount++;
}

var last = 0;

$(".seat").click(function(){
    console.log(last);
    console.log(this);
    var lastString = String(last);
    String()
    if (lastString.includes("redSeat")) {
        last.classList.remove('redSeat');
        console.log("test");
    }
    console.log(String(last).includes(".redSeat"));
    var lexiLocation = ((this.className).match(/\d+/)[0]);
    console.log(lexiLocation);
    this.classList.add("redSeat");
    last = this;

});