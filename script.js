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
  var hours = today.getHours();
  if (hours == parseInt(blockNum)) {
    $("#block" + blockNum).addClass("present")
  }
  else if (hours < parseInt(blockNum)) {
    $("#block" + blockNum).addClass("future")
  }

}


// var time

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
currentTime(14);
currentTime(15);
currentTime(16);
currentTime(17);


handleAppt(8);
handleAppt(9);
handleAppt(10);
handleAppt(11);
handleAppt(12);
handleAppt(13);
handleAppt(14);
handleAppt(15);
handleAppt(16);
handleAppt(17);

