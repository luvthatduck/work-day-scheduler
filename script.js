var currentDate = document.getElementById("currentDay");
var apptDescription = document.getElementById("#textarea")

var todayDate = function() {
var currentDatedisplay = moment().format("dddd, MMM, Do, YYYY");
currentDate.textContent = currentDatedisplay
};
todayDate();


time = moment().format("LT");

// var currentTime = function() {
// // apply new class if task is near/over due date
// if (moment().isAfter(time)) {
//   $(taskEl).removeClass("past");

// } 
// else if (Math.abs(moment().diff(time, "days")) <= 2) {
//   $(taskEl).addClass("list-group-item-warning");

// }
// save appts to localstorage
var saveApptss = function() {
  localStorage.setItem("textarea", JSON.stringify(apptDescription));
};
