
var Value1 = document.querySelector("#Value1");
var Value2 = document.querySelector("#Value2");
var Value3 = document.querySelector("#Value3");
var Value4 = document.querySelector("#Value4");
var Value5 = document.querySelector("#Value5");
var Value6 = document.querySelector("#Value6");
var Value7 = document.querySelector("#Value7");
var Value8 = document.querySelector("#Value8");
var Value9 = document.querySelector("#Value9");

var currentTime = moment();
$('#currentDay').text(currentTime.format('MMMM Do YYYY [at] h:mm:ss a'));

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // Get nearby values of the users plan 
        var text = $(this).siblings(".form-control").val();
        var time = $(this).parent().attr("id");
        // Save text in local storage
localStorage.setItem(time, text);
    })
    

})


function showResponse() {
    var response1 = localStorage.getItem("9AM");
    Value1.value = response1;
    console.log(response1)
    var response2 = localStorage.getItem("10AM");
    Value2.value = response2;
    console.log(response2)
    var response3 = localStorage.getItem("11AM");
    Value3.value = response3;
    console.log(response3)
    var response4 = localStorage.getItem("12PM");
    Value4.value = response4;
    console.log(response4)
    var response5 = localStorage.getItem("1PM");
    Value5.value = response5;
    console.log(response5)
    var response6 = localStorage.getItem("2PM");
    Value6.value = response6;
    console.log(response6)
    var response7 = localStorage.getItem("3PM");
    Value7.value = response7;
    console.log(response7)
    var response8 = localStorage.getItem("4PM");
    Value8.value = response8;
    console.log(response8)
    var response9 = localStorage.getItem("10PM");
    Value9.value = response9;
    console.log(response9)

    if (response1<currentTime) {
        Value1.style.backgroundColor="red"
    }
    else if (response1>currentTime) {
        Value1.style.backgroundColor="green"
    }
    else (Value1.style.backgroundColor="blue");
    //
    if (response2<currentTime) {
        Value2.style.backgroundColor="red"
    }
    else if (response2>currentTime) {
        Value2.style.backgroundColor="green"
    }
    else (Value2.style.backgroundColor="blue")
    //
    if (response3<currentTime) {
        Value3.style.backgroundColor="red"
    }
    else if (response3>currentTime) {
        Value3.style.backgroundColor="green"
    }
    else (Value3.style.backgroundColor="blue")
    //
    if (response4<currentTime) {
        Value4.style.backgroundColor="red"
    }
    else if (response4>currentTime) {
        Value4.style.backgroundColor="green"
    }
    else (Value4.style.backgroundColor="blue")
    //
    if (response5<currentTime) {
        Value5.style.backgroundColor="red"
    }
    else if (response5>currentTime) {
        Value5.style.backgroundColor="green"
    }
    else (Value5.style.backgroundColor="blue")
    //
    if (response6<currentTime) {
        Value6.style.backgroundColor="red"
    }
    else if (response6>currentTime) {
        Value6.style.backgroundColor="green"
    }
    else (Value6.style.backgroundColor="blue")
    //
    if (response7<currentTime) {
        Value7.style.backgroundColor="red"
    }
    else if (response7>currentTime) {
        Value7.style.backgroundColor="green"
    }
    else (Value7.style.backgroundColor="blue")
    //
    if (response8<currentTime) {
        Value8.style.backgroundColor="red"
    }
    else if (response8>currentTime) {
        Value8.style.backgroundColor="green"
    }
    else (Value8.style.backgroundColor="blue")
    //
    if (response9<currentTime) {
        Value9.style.backgroundColor="red"
    }
    else if (response9>currentTime) {
        Value9.style.backgroundColor="green"
    }
    else (Value9.style.backgroundColor="blue")
    //
  
  }
  
showResponse();


