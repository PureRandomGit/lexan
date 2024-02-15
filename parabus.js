const bus = document.querySelector(".bus")
const seating = document.querySelector(".seating")
const seatRows = getComputedStyle(bus).getPropertyValue("--seatRows");
const seatCols = getComputedStyle(bus).getPropertyValue("--seatColumns");

console.log("Rows", seatRows);
console.log("Cols", seatCols);
console.log("Seats", seatCols * seatRows);

const apiUrl = "http://127.0.0.1:8002/occuseats/"

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


var occuSeats = ['5','8','15','42'];
var muteSeats = [];

function password(){
  if (localStorage.getItem("safe").includes("true")) {
    document.getElementById("popup").style.display = "none";
  }
}

function submit(){
  // Send Seat to things
  console.log("Submmited");
  if (document.getElementById('pwd').value = "0824") {
    document.getElementById("popup").style.display = "none";
    localStorage.setItem("safe", "true");
  }
}

let seatCount = 1;
while (seatCount <= (seatCols * seatRows)) {
  const seat = document.createElement("div");
  seat.classList.add("seat");
  seat.classList.add(`seat-${seatCount}`);
  seat.innerText = seatCount;
  if (occuSeats.includes(String(seat.classList).match(/\d+/)[0])) {
    console.log("Seat " + (String(seat.classList).match(/\d+/)[0]) + " is occupied");
    seat.classList.add(`occuSeats`);
  }
  seating.append(seat);
  seatCount++;

}

var selectedSeat;
var seatNumber;

$(".seat").click(function(){
    wipeSeats();
    this.classList.add("redSeat");
    seatNumber = Number((this.className).match(/\d+/)[0]);
    targetSeat = $(this);
    seatDistance();
    return targetSeat;
});

function seatDistance(){
  currentSeat = targetSeat;
  muteSeats.push(((targetSeat[0]).className).match(/\d+/)[0]);
  var i = seatNumber;
  while (i < (seatNumber+9) && i < seatCount-1) {
    console.log(i);
    currentSeat =  $(currentSeat).next();
    currentSeat.addClass("orangeSeat");  
    muteSeats.push(((currentSeat[0]).className).match(/\d+/)[0]);
    i++;
  }    
  while (i < seatCount) {
    currentSeat =  $(currentSeat).next();
    currentSeat.addClass("greenSeat");  
    i++;
  }    
  currentSeat = targetSeat;
  var i = seatNumber;
  while (i > seatNumber-9 && i > 1) {
    currentSeat =  $(currentSeat).prev();
    currentSeat.addClass("orangeSeat");  
    i--;
    muteSeats.push(((currentSeat[0]).className).match(/\d+/)[0]);
  }     
  while (i > 0) {
    currentSeat =  $(currentSeat).prev();
    currentSeat.addClass("greenSeat");  
    i--;
  }            
  muteSeats.sort(function(a, b) {
    return a - b;
  });
  console.log(typeof muteSeats[3]); 
}

function wipeSeats() {
  $('.seat').each(function(i, obj) {
    if (String(this.classList).includes("redSeat")){
      this.classList.remove("redSeat");
      muteSeats.length = 0;
    }
    if (String(this.classList).includes("orangeSeat")){
      this.classList.remove("orangeSeat");
    }
    if (String(this.classList).includes("greenSeat")){
      this.classList.remove("greenSeat");
    }
  });
}