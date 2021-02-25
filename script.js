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
  displayDay.text( moment().format("dddd, MMM Do YYYY, LT"))
  $("#currentDay").append(displayDay)
}



$(document).ready(function () {
 dayDisplay()

});




// var currentTime = function(blockNum) {
// // apply new class if task is near/over due date
// if (moment().isAfter(time); || moment().isAfter(time) ) {
//   $("block"+ blockNum).removeClass("#past");
 
// } 
// else if (moment().isBefore(time)) {
//   $(taskEl).addClass("#future");

// }
var time

var handleAppt = function (blockNum) {
  var appt = $("#block" + blockNum)
  $("#btn"+ blockNum).click(function(){
    var apptEl = $("#block" + blockNum).val()
    localStorage.setItem("btn" + blockNum, apptEl);
  })


  var loadAppts = function () {
    appt.text(localStorage.getItem("btn" + blockNum));

  };
  loadAppts();
}

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
