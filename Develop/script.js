const currentDay = $("#currentDay");
// const hourDisplay = document.getElementById("timeDisplay");
// const textBox = document.getElementById("planner");
const saveButton = document.querySelector(".saveBtn");
// const timeDiv = document.getElementById("TimeContainer");
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
