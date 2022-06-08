const currentDay = $("#currentDay");
// const hourDisplay = document.getElementById("timeDisplay");
// const textBox = document.querySelectorAll("textarea");
// const timeDiv = document.getElementById("TimeContainer");
var saveButton = document.querySelectorAll("button");
var NineAM = document.getElementById("NineAM");
var TenAM = document.getElementById("TenAM");
var ElevenAM = document.getElementById("ElevenAM");
var TwelvePM = document.getElementById("TwelvePM");
var OnePM = document.getElementById("OnePM");
var TwoPM = document.getElementById("TwoPM");
var ThreePM = document.getElementById("ThreePM");
var FourPM = document.getElementById("FourPM");
var FivePM = document.getElementById("FivePM");

function setPlans() {
    var NineValue = NineAM.value.trim();
    var TenValue = TenAM.value.trim();
    var ElevenValue = ElevenAM.value.trim();
    var TwelveValue = TwelvePM.value.trim();
    var OneValue = OnePM.value.trim();
    var TwoValue = TwoPM.value.trim();
    var ThreeValue = ThreePM.value.trim();
    var FourValue = FourPM.value.trim();
    var FiveValue = FivePM.value.trim();
    localStorage.setItem("NineAMPlans", NineValue);
    localStorage.setItem("TenAMPlans", TenValue);
    localStorage.setItem("ElevenAMPlans", ElevenValue);
    localStorage.setItem("TwelvePMPlans", TwelveValue);
    localStorage.setItem("OnePMPlans", OneValue);
    localStorage.setItem("TwoPMPlans", TwoValue);
    localStorage.setItem("ThreePMPlans", ThreeValue);
    localStorage.setItem("FourPMPlans", FourValue);
    localStorage.setItem("FivePMPlans", FiveValue);
}

function renderPlans() {
    var NinePlans = localStorage.getItem("NineAMPlans");
    var TenPlans = localStorage.getItem("TenAMPlans");
    var ElevenPlans = localStorage.getItem("ElevenAMPlans");
    var TwelvePlans = localStorage.getItem("TwelvePMPlans");
    var OnePlans = localStorage.getItem("OnePMPlans");
    var TwoPlans = localStorage.getItem("TwoPMPlans");
    var ThreePlans = localStorage.getItem("ThreePMPlans");
    var FourPlans = localStorage.getItem("FourPMPlans");
    var FivePlans = localStorage.getItem("FivePMPlans");

    NineAM.innerHTML = NinePlans;
    TenAM.innerHTML = TenPlans;
    ElevenAM.innerHTML = ElevenPlans;
    TwelvePM.innerHTML = TwelvePlans;
    OnePM.innerHTML = OnePlans;
    TwoPM.innerHTML = TwoPlans;
    ThreePM.innerHTML = ThreePlans;
    FourPM.innerHTML = FourPlans;
    FivePM.innerHTML = FivePlans;
}

for (const button of saveButton) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        setPlans();
        renderPlans();
    });
}

function TimeUpdate() {
    console.log(moment().hour());
    if (moment().hour() == 9) {
        console.log("hello");
        NineAM.classList.add("present");
    } else if (moment().hour() > 9) {
        NineAM.classList.add("past");
    } else if (moment().hour() < 9) {
        NineAM.classList.add("future");
    }
    if (moment().hour() == 10) {
        console.log("hello");
        TenAM.classList.add("present");
    } else if (moment().hour() > 10) {
        TenAM.classList.add("past");
    } else if (moment().hour() < 10) {
        TenAM.classList.add("future");
    }
    if (moment().hour() == 11) {
        console.log("hello");
        ElevenAM.classList.add("present");
    } else if (moment().hour() > 11) {
        ElevenAM.classList.add("past");
    } else if (moment().hour() < 11) {
        ElevenAM.classList.add("future");
    }
    if (moment().hour() == 12) {
        console.log("hello");
        TwelvePM.classList.add("present");
    } else if (moment().hour() > 12) {
        TwelvePM.classList.add("past");
    } else if (moment().hour() < 12) {
        TwelvePM.classList.add("future");
    }

    if (moment().hour() == 13) {
        console.log("hello");
        OnePM.classList.add("present");
    } else if (moment().hour() > 13) {
        OnePM.classList.add("past");
    } else if (moment().hour() < 13) {
        OnePM.classList.add("future");
    }
    if (moment().hour() == 14) {
        console.log("hello");
        TwoPM.classList.add("present");
    } else if (moment().hour() > 14) {
        TwoPM.classList.add("past");
    } else if (moment().hour() < 14) {
        TwoPM.classList.add("future");
    }
    if (moment().hour() == 15) {
        console.log("hello");
        ThreePM.classList.add("present");
    } else if (moment().hour() > 15) {
        ThreePM.classList.add("past");
    } else if (moment().hour() < 15) {
        ThreePM.classList.add("future");
    }
    if (moment().hour() == 16) {
        console.log("hello");
        FourPM.classList.add("present");
    } else if (moment().hour() > 16) {
        FourPM.classList.add("past");
    } else if (moment().hour() < 16) {
        FourPM.classList.add("future");
    }
    if (moment().hour() == 17) {
        console.log("hello");
        FivePM.classList.add("present");
    } else if (moment().hour() > 17) {
        FivePM.classList.add("past");
    } else if (moment().hour() < 17) {
        FivePM.classList.add("future");
    }
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
    // timeFormat();
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

// function timeFormat() {
//     console.log("hello");
// }
TimeUpdate();
renderPlans();
displayTime();
