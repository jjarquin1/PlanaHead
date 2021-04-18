// var saveBtn = document.querySelector(".saveBtn");
var userInput = document.querySelector(".form-control");



// saveBtn.addEventListener("click", function(event){
//    event.preventDefault ();

//    var userInfo = {
//     userInput: userInput.value,
// };

//    localStorage.setItem("userLogged", JSON.stringify(userInfo));
//  });

 $(document).ready(function () {
    // we go through each! save button class
    $(".saveBtn").on("click", function () {
        // Get nearby values of the users plan 
        var text = $(this).siblings(".form-control").val();
        var time = $(this).parent().attr("id");
        // Save text in local storage
        localStorage.setItem(time, text);
    })
})

// Action to be performed on click store in named function
// function showResponse(event) {
//     // Prevent default action
//     event.preventDefault();
//     console.log(event);
//     var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
//     submissionResponseEl.textContent = response;
//   }


var currentTime = moment();
$('#currentDay').text(currentTime.format('MMMM Do YYYY [at] h:mm:ss a'));

