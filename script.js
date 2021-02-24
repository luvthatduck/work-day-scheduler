var currentDate = document.getElementById("currentDay");
var apptDescription = document.getElementById("textarea")

var todayDate = function() {
var currentDatedisplay = moment().format("dddd, MMM, Do, YYYY, LT");
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
var time 
var appt8 = document.getElementById("#time-block-8");

document.getElementById("btn8").addEventListener("click", function(){
 var appt8El = document.querySelector("#block8").value;
   localStorage.setItem("btn8", appt8El);
  
})

// var loadAppts = function() { 
//   localStorage.getItem("btn8");
//   appt8El.textContent = "btn8";
// };

// loadAppts()























document.getElementById("btn9").addEventListener("click", function(){
  var appt9El = document.querySelector("#block9").value;
  localStorage.setItem("btn9", appt9El);
})

document.getElementById("btn10").addEventListener("click", function(){
  console.log("good job10")
})

document.getElementById("btn11").addEventListener("click", function(){
  console.log("good job11")
})

document.getElementById("btn12").addEventListener("click", function(){
  console.log("good job12")
})

document.getElementById("btn1").addEventListener("click", function(){
  console.log("good job1")
})
document.getElementById("btn2").addEventListener("click", function(){
  console.log("good job2")
})

document.getElementById("btn3").addEventListener("click", function(){
  console.log("good job3")
})

document.getElementById("btn4").addEventListener("click", function(){
  console.log("good job4")
})

document.getElementById("btn5").addEventListener("click", function(){
  console.log("good job5")
})



//click on 
// save appts to localstorage





// var saveAppts = function() {
//   localStorage.setItem("textarea", JSON.stringify(apptDescription));
// };
