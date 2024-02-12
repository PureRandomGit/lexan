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

var selectedSeat;
var seatNumber;

$(".seat").click(function(){
    wipeSeats();
    this.classList.add("greySeat");
    seatNumber = Number((this.className).match(/\d+/)[0]);
    selectedSeat = $(this);
    console.log(selectedSeat);
    return selectedSeat;
});

function wipeSeats() {
  $('.seat').each(function(i, obj) {
    if (String(this.classList).includes("greySeat")){
      this.classList.remove("greySeat");
    }
  });
}

function confirm(){
  // Send Seat to things
  document.getElementById("popup").style.display = "none";
}