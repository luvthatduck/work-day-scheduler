// var currentDate = document.getElementById("currentDay");
// var apptDescription = document.getElementById("textarea")

// var todayDate = function() {
// var currentDatedisplay = moment().format("dddd, MMM, Do, YYYY, LT");
// currentDate.textContent = currentDatedisplay
// };
// todayDate();

time = moment().format("LT");




function dayDisplay() {
  var displayDay = $("<h2>")
  displayDay.addClass("lead")
  displayDay.text(moment().format("dddd, MMM Do YYYY, LT"))
  $("#currentDay").append(displayDay)
}



$(document).ready(function () {
  dayDisplay()

});




function currentTime(blockNum) {
  var today = new Date();
  var hours = today.getUTCHours();
  if (hours = blockNum) {
    $("#block" + blockNum).addClass("present")
  }
  else if (hours < blockNum) {
    $("#block" + blockNum).addClass("future")
  }
  else {
    $("#block" + blockNum).addClass("past")
  }
}


var time

var handleAppt = function (blockNum) {
  var appt = $("#block" + blockNum)
  $("#btn" + blockNum).click(function () {
    var apptEl = $("#block" + blockNum).val()
    localStorage.setItem("btn" + blockNum, apptEl);
  })


  var loadAppts = function () {
    appt.text(localStorage.getItem("btn" + blockNum));

  };
  loadAppts();
}

currentTime(8);
currentTime(9);
currentTime(10);
currentTime(11);
currentTime(12);
currentTime(13);
currentTime(2);
currentTime(3);
currentTime(4);
currentTime(5);


handleAppt(8);
handleAppt(9);
handleAppt(10);
handleAppt(11);
handleAppt(12);
handleAppt(1);
handleAppt(2);
handleAppt(3);
handleAppt(4);
handleAppt(5);

