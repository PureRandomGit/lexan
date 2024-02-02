const socket = new WebSocket("ws://localhost:8080");
var distance;

// Add Audio Clips here
var raw23 = document.getElementById('raw23.wav');

// Listen for Play Audio Message
socket.addEventListener("message", (message) => {
    console.log("Message from server ", message.tpye);
    switch (message.type) {
        case "near":
            break;
        case "mid":

        case "far":

    }
});

// Get Distance
function selectDistance(ele){
   distance = ele.options[ele.selectedIndex].id;
   console.log(distance)
}

