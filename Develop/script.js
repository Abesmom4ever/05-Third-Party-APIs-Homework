const currentDay = $("#currentDay");
// const hourDisplay = document.getElementById("timeDisplay");
const textBox = document.querySelectorAll("textarea");
var saveButton = document.querySelectorAll("button");
// const timeDiv = document.getElementById("TimeContainer");

function setPlans() {
    var textValue = textBox.value;
    localStorage.setItem("Plans", textValue);
}

function keepInfo() {}

for (var i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener("click", function (event) {
        event.preventDefault();
        setPlans();
    });
}

// const times = [
//     "9AM",
//     "10AM",
//     "11AM",
//     "12PM",
//     "1PM",
//     "2PM",
//     "3PM",
//     "4PM",
//     "5PM",
// ];

function displayTime() {
    var rightNow = moment().format("dddd, MMM DD, YYYY");
    currentDay.text(rightNow);
    timeFormat();
}

// function timeFormat() {
//     for (let i = 0; i < times.length; i++) {
//         let division = document.createElement("div");
//         //length of time = 9
//         let para = document.createElement("p");
//         //the value of times
//         let btn = document.createElement("button");
//         //9 save buttons
//         let textarea = document.createElement("textarea");
//         //9 text boxes
//         let divTime = times.length;

//         console.log(times.length);
//         timeDiv.append(divTime);
//     }
// }

function timeFormat() {
    console.log("hello");
}

displayTime();
