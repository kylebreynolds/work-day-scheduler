
var now = moment().format("LLLL");
var save9Btn = $("#save-9");
var save10Btn = $("#save-10");
var save11Btn = $("#save-11");
var save12Btn = $("#save-12");
var save1Btn = $("#save-1");
var save2Btn = $("#save-2");
var save3Btn = $("#save-3");
var save4Btn = $("#save-4");
var save5Btn = $("#save-5");



//display current day's date at top of page//
const currentDate = $('#currentDay');
currentDate.text(now);


// color code past present and future //










// save input to local storage //

save9Btn.on("click", function() {
    var hr9 = document.getElementById("9").value;
    localStorage.setItem("hr9", JSON.stringify(hr9));
})
save10Btn.on("click", function() {
    var hr10 = document.getElementById("10").value;
    localStorage.setItem("hr10", JSON.stringify(hr10));
})
save11Btn.on("click", function() {
    var hr11 = document.getElementById("11").value;
    localStorage.setItem("hr11", JSON.stringify(hr11));
})
save12Btn.on("click", function() {
    var hr12 = document.getElementById("12").value;
    localStorage.setItem("hr12", JSON.stringify(hr12));
})
save1Btn.on("click", function() {
    var hr1 = document.getElementById("1").value;
    localStorage.setItem("hr1", JSON.stringify(hr1));
})
save2Btn.on("click", function() {
    var hr2 = document.getElementById("2").value;
    localStorage.setItem("hr2", JSON.stringify(hr2));
})
save3Btn.on("click", function() {
    var hr3 = document.getElementById("3").value;
    localStorage.setItem("hr3", JSON.stringify(hr3));
})
save4Btn.on("click", function() {
    var hr4 = document.getElementById("4").value;
    localStorage.setItem("hr4", JSON.stringify(hr4));
})
save5Btn.on("click", function() {
    var hr5 = document.getElementById("5").value;
    localStorage.setItem("hr5", JSON.stringify(hr5));
})

//display saved inputs //

var saved9 = localStorage.getItem("hr9");
document.getElementById("9").value = saved9;
var saved10 = localStorage.getItem("hr10");
document.getElementById("10").value = saved10;
var saved11 = localStorage.getItem("hr11");
document.getElementById("11").value = saved11;
var saved12 = localStorage.getItem("hr12");
document.getElementById("12").value = saved12;
var saved1 = localStorage.getItem("hr1");
document.getElementById("1").value = saved1;
var saved2 = localStorage.getItem("hr2");
document.getElementById("2").value = saved2;
var saved3 = localStorage.getItem("hr3");
document.getElementById("3").value = saved3;
var saved4 = localStorage.getItem("hr4");
document.getElementById("4").value = saved4;
var saved5 = localStorage.getItem("hr5");
document.getElementById("5").value = saved5;