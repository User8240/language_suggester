$(document).ready(function() {
  
  $("form#questionsForm").submit(function(event) {
  
   /*const name = ($("input#name").val());
   */ 

    const gender = $("select#gender").val();
    

    if (gender === "male") {
      $("#language").text("MAN");
    }
    else if(gender === "female") {
      $("#language").text("WOMAN");
    }
    else {
      $("#language").text("COOL:)");
    }


    event.preventDefault();  
  });

  $("#hideResults").click(function(event) {
    $("#language").text("");
    $("#name").val("");
  });
});