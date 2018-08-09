$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var q1Input = parseInt($("input:radio[name=healthcare]:checked").val());
    var q2Input = parseInt($("input:radio[name=abortion]:checked").val());
    var q3Input = parseInt($("input:radio[name=deathPenalty]:checked").val());

    var polNum = q1Input + q2Input + q3Input;

    $(".result").hide();
    
    if (polNum === 3 || polNum === 4) {
      $("#liberal").show();
    } else if (polNum > 4 && polNum < 8) {
      $("#moderate").show();
    } else if (polNum === 8 || polNum === 9) {
      $("#conservative").show();
    }
    event.preventDefault();
  })

  // $("#formOne").submit(function(event) {
  //   if (genderInput === "Male") {
  //     if (hairInput === "Black") {
  //       $("#chrisPine").show();
  //     } else if (hairInput === "Brown") {
  //       $("#chrisEvans").show();
  //     } else if (hairInput === "Blonde") {
  //       $("#chrisHemsworth").show();
  //     }
  //   } else if (genderInput === "Female") {
  //     if (hairInput === "Black") {
  //       $("#abigailSpencer").show();
  //     } else if (hairInput === "Brown") {
  //       $("#emmaWatson").show();
  //     } else if (hairInput === "Blonde") {
  //       $("#scarJo").show();
  //     }
  //   }
  //   event.preventDefault();
  // })


})
