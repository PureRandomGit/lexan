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


let seatSelect = document.querySelectorAll('.seat');

seatSelect.forEach(function(elem) {
    elem.addEventListener("input", function() {
        console.log("Seats Pressed");
    });
});