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
    this.classList.add("redSeat");
    seatNumber = Number((this.className).match(/\d+/)[0]);
    selectedSeat = $(this);
    seatDistance();
    return selectedSeat;
});

function seatDistance(){
  currentSeat = selectedSeat;
  var i = seatNumber;
  while (i < (seatNumber+9)) {
    // console.log(i);
    currentSeat =  $(currentSeat).next();
    currentSeat.addClass("orangeSeat");  
    i++;
    console.log(i);
  }    
  while (i < seatCount) {
    currentSeat =  $(currentSeat).next();
    currentSeat.addClass("greenSeat");  
    i++;
  }    
  currentSeat = selectedSeat;
  var i = seatNumber;
  while (i > seatNumber-9) {
    currentSeat =  $(currentSeat).prev();
    currentSeat.addClass("orangeSeat");  
    i--;
    console.log(i);
  }     
  while (i > 0) {
    currentSeat =  $(currentSeat).prev();
    currentSeat.addClass("greenSeat");  
    i--;
  }             
}

function wipeSeats() {
  $('.seat').each(function(i, obj) {
    if (String(this.classList).includes("redSeat")){
      this.classList.remove("redSeat");
    }
    if (String(this.classList).includes("orangeSeat")){
      this.classList.remove("orangeSeat");
    }
    if (String(this.classList).includes("greenSeat")){
      this.classList.remove("greenSeat");
    }
  });
}