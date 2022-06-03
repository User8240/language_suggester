$(document).ready(function() {
  
  $("form#questionsForm").submit(function(event) {
  
   /*const name = ($("input#name").val());
   */ 

    const gender = $("select#gender").val();
    const swift = $("select#swift").val();
    const C = $("select#c").val();
    const python = $("select#python").val();
    

  if (gender === "male" && swift === "yes" && C === "yes" && python === "yes") {
    $("#language").text("JavaScript");
  } else if (gender === "male" && swift === "yes" && C === "yes" && python === "no") {
    $("#language").text("C#");
  } else if (gender === "male" && swift === "yes" && C === "no" && python === "no") {
    $("#language").text("Swift");
  } else if (gender === "male" && swift === "no" && C === "no" && python === "no") {
    $("#language").text("C#");
  } else if (gender === "male" && swift === "yes" && C === "no" && python === "yes") {
    $("#language").text("Python");
  } else if (gender === "male" && swift === "no" && C === "yes" && python === "yes") {
    $("#language").text("C#");
  } else if (gender === "male" && swift === "no" && C === "no" && python === "yes") {
    $("#language").text("Python");
  } else if (gender === "male" && swift === "no" && C === "yes" && python === "no") {
    $("#language").text("C#");
    /**/
  } else if (gender === "female" && swift === "yes" && C === "yes" && python === "yes") {
    $("#language").text("JavaScript");
  } else if (gender === "female" && swift === "yes" && C === "yes" && python === "no") {
    $("#language").text("C#");
  } else if (gender === "female" && swift === "yes" && C === "no" && python === "no") {
    $("#language").text("Swift");
  } else if (gender === "female" && swift === "no" && C === "no" && python === "no") {
    $("#language").text("C#");
  } else if (gender === "female" && swift === "yes" && C === "no" && python === "yes") {
    $("#language").text("Python");
  } else if (gender === "female" && swift === "no" && C === "yes" && python === "yes") {
    $("#language").text("C#");
  } else if (gender === "female" && swift === "no" && C === "no" && python === "yes") {
    $("#language").text("Python");
  } else if (gender === "female" && swift === "no" && C === "yes" && python === "no") {
    $("#language").text("C#");
    /**/ 
  } else if (gender === "non-binary" && swift === "yes" && C === "yes" && python === "yes") {
    $("#language").text("JavaScript");
  } else if (gender === "non-binary" && swift === "yes" && C === "yes" && python === "no") {
    $("#language").text("C#");
  } else if (gender === "non-binary" && swift === "yes" && C === "no" && python === "no") {
    $("#language").text("Swift");
  } else if (gender === "non-binary" && swift === "no" && C === "no" && python === "no") {
    $("#language").text("C#");
  } else if (gender === "non-binary" && swift === "yes" && C === "no" && python === "yes") {
    $("#language").text("Python");
  } else if (gender === "non-binary" && swift === "no" && C === "yes" && python === "yes") {
    $("#language").text("C#");
  } else if (gender === "non-binary" && swift === "no" && C === "no" && python === "yes") {
    $("#language").text("Python");
  } else if (gender === "non-binary" && swift === "no" && C === "yes" && python === "no") {
    $("#language").text("C#");
    /**/
  } else if (gender === "other" && swift === "yes" && C === "yes" && python === "yes") {
    $("#language").text("JavaScript");
  } else if (gender === "other" && swift === "yes" && C === "yes" && python === "no") {
    $("#language").text("C#");
  } else if (gender === "other" && swift === "yes" && C === "no" && python === "no") {
    $("#language").text("Swift");
  } else if (gender === "other" && swift === "no" && C === "no" && python === "no") {
    $("#language").text("C#");
  } else if (gender === "other" && swift === "yes" && C === "no" && python === "yes") {
    $("#language").text("Python");
  } else if (gender === "other" && swift === "no" && C === "yes" && python === "yes") {
    $("#language").text("C#");
  } else if (gender === "other" && swift === "no" && C === "no" && python === "yes") {
    $("#language").text("Python");
  } else (gender === "other" && swift === "no" && C === "yes" && python === "no"); {
    $("#language").text("C#");
  }

  event.preventDefault();  
  });

  $("#hideResults").click(function(event) {
    $("#language").text("");
    $("#name").val("");
  });
});