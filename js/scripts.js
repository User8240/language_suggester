$(document).ready(function() {
  $("form#questionsForm").submit(function(event) {
    event.preventDefault();  
 
    const gender = $("select#gender").val();
    const swift = $("select#swift").val();
    const C = $("select#c").val();
    const python = $("select#python").val();
    const noodle = $("select#noodle").val();
   
  if (gender === "male" && swift === "yes" && C === "yes" && python === "yes" && noodle === "yes") {
    $("#language").text("JavaScript");
  } else if (gender === "male" && swift === "yes" && C === "yes" && python === "yes" && noodle === "no") {
    $("#language").text("JavaScript");
  } else if (gender === "male" && swift === "yes" && C === "yes" && python === "no" && noodle === "yes") {
    $("#language").text("C#");
  } else if (gender === "male" && swift === "yes" && C === "yes" && python === "no" && noodle === "no") {
    $("#language").text("C#");
  } else if (gender === "male" && swift === "yes" && C === "no" && python === "no" && noodle === "yes") {
    $("#language").text("Swift");
  } else if (gender === "male" && swift === "yes" && C === "no" && python === "no" && noodle === "no") {
    $("#language").text("Swift");
  } else if (gender === "male" && swift === "no" && C === "no" && python === "no" && noodle === "yes") {
    $("#language").text("C#");
  } else if (gender === "male" && swift === "no" && C === "no" && python === "no" && noodle === "no") {
    $("#language").text("C#");  
  } else if (gender === "male" && swift === "no" && C === "no" && python === "no" && noodle === "yes") {
    $("#language").text("C#");    
  } else if (gender === "male" && swift === "yes" && C === "no" && python === "yes" && noodle === "no") {
    $("#language").text("Python");
  } else if (gender === "male" && swift === "yes" && C === "no" && python === "yes" && noodle === "yes") {
    $("#language").text("Python");  
  } else if (gender === "male" && swift === "no" && C === "yes" && python === "yes" && noodle === "no") {
    $("#language").text("C#");
  } else if (gender === "male" && swift === "no" && C === "yes" && python === "yes" && noodle === "yes") {
    $("#language").text("C#");
  } else if (gender === "male" && swift === "no" && C === "no" && python === "yes" && noodle === "no") {
    $("#language").text("Python");
  } else if (gender === "male" && swift === "no" && C === "no" && python === "yes" && noodle === "yes") {
    $("#language").text("Python");
  } else if (gender === "male" && swift === "no" && C === "yes" && python === "no" && noodle === "no") {
    $("#language").text("C#");
  } else if (gender === "male" && swift === "no" && C === "yes" && python === "no" && noodle === "yes") {
    $("#language").text("C#");  

  } else if (gender === "female" && swift === "yes" && C === "yes" && python === "yes" && noodle === "yes") {
    $("#language").text("JavaScript");
  } else if (gender === "female" && swift === "yes" && C === "yes" && python === "yes" && noodle === "no") {
    $("#language").text("JavaScript");
  } else if (gender === "female" && swift === "yes" && C === "yes" && python === "no" && noodle === "yes") {
    $("#language").text("C#");
  } else if (gender === "female" && swift === "yes" && C === "yes" && python === "no" && noodle === "no") {
    $("#language").text("C#");
  } else if (gender === "female" && swift === "yes" && C === "no" && python === "no" && noodle === "yes") {
    $("#language").text("Swift");
  } else if (gender === "female" && swift === "yes" && C === "no" && python === "no" && noodle === "no") {
    $("#language").text("Swift");
  } else if (gender === "female" && swift === "no" && C === "no" && python === "no" && noodle === "yes") {
    $("#language").text("C#");
  } else if (gender === "female" && swift === "no" && C === "no" && python === "no" && noodle === "no") {
    $("#language").text("C#");  
  } else if (gender === "female" && swift === "no" && C === "no" && python === "no" && noodle === "yes") {
    $("#language").text("C#");    
  } else if (gender === "female" && swift === "yes" && C === "no" && python === "yes" && noodle === "no") {
    $("#language").text("Python");
  } else if (gender === "female" && swift === "yes" && C === "no" && python === "yes" && noodle === "yes") {
    $("#language").text("Python");  
  } else if (gender === "female" && swift === "no" && C === "yes" && python === "yes" && noodle === "no") {
    $("#language").text("C#");
  } else if (gender === "female" && swift === "no" && C === "yes" && python === "yes" && noodle === "yes") {
    $("#language").text("C#");
  } else if (gender === "female" && swift === "no" && C === "no" && python === "yes" && noodle === "no") {
    $("#language").text("Python");
  } else if (gender === "female" && swift === "no" && C === "no" && python === "yes" && noodle === "yes") {
    $("#language").text("Python");
  } else if (gender === "female" && swift === "no" && C === "yes" && python === "no" && noodle === "no") {
    $("#language").text("C#");
  } else if (gender === "female" && swift === "no" && C === "yes" && python === "no" && noodle === "yes") {
    $("#language").text("C#");  
  
  } else if (gender === "non-binary" && swift === "yes" && C === "yes" && python === "yes" && noodle === "yes") {
    $("#language").text("JavaScript");
  } else if (gender === "non-binary" && swift === "yes" && C === "yes" && python === "yes" && noodle === "no") {
    $("#language").text("JavaScript");
  } else if (gender === "non-binary" && swift === "yes" && C === "yes" && python === "no" && noodle === "yes") {
    $("#language").text("C#");
  } else if (gender === "non-binary" && swift === "yes" && C === "yes" && python === "no" && noodle === "no") {
    $("#language").text("C#");
  } else if (gender === "non-binary" && swift === "yes" && C === "no" && python === "no" && noodle === "yes") {
    $("#language").text("Swift");
  } else if (gender === "non-binary" && swift === "yes" && C === "no" && python === "no" && noodle === "no") {
    $("#language").text("Swift");
  } else if (gender === "non-binary" && swift === "no" && C === "no" && python === "no" && noodle === "yes") {
    $("#language").text("C#");
  } else if (gender === "non-binary" && swift === "no" && C === "no" && python === "no" && noodle === "no") {
    $("#language").text("C#");  
  } else if (gender === "non-binary" && swift === "no" && C === "no" && python === "no" && noodle === "yes") {
    $("#language").text("C#");    
  } else if (gender === "non-binary" && swift === "yes" && C === "no" && python === "yes" && noodle === "no") {
    $("#language").text("Python");
  } else if (gender === "non-binary" && swift === "yes" && C === "no" && python === "yes" && noodle === "yes") {
    $("#language").text("Python");  
  } else if (gender === "non-binary" && swift === "no" && C === "yes" && python === "yes" && noodle === "no") {
    $("#language").text("C#");
  } else if (gender === "non-binary" && swift === "no" && C === "yes" && python === "yes" && noodle === "yes") {
    $("#language").text("C#");
  } else if (gender === "non-binary" && swift === "no" && C === "no" && python === "yes" && noodle === "no") {
    $("#language").text("Python");
  } else if (gender === "non-binary" && swift === "no" && C === "no" && python === "yes" && noodle === "yes") {
    $("#language").text("Python");
  } else if (gender === "non-binary" && swift === "no" && C === "yes" && python === "no" && noodle === "no") {
    $("#language").text("C#");
  } else if (gender === "non-binary" && swift === "no" && C === "yes" && python === "no" && noodle === "yes") {
    $("#language").text("C#");  

  } else if (gender === "other" && swift === "yes" && C === "yes" && python === "yes" && noodle === "yes") {
    $("#language").text("JavaScript");
  } else if (gender === "other" && swift === "yes" && C === "yes" && python === "yes" && noodle === "no") {
    $("#language").text("JavaScript");
  } else if (gender === "other" && swift === "yes" && C === "yes" && python === "no" && noodle === "yes") {
    $("#language").text("C#");
  } else if (gender === "other" && swift === "yes" && C === "yes" && python === "no" && noodle === "no") {
    $("#language").text("C#");
  } else if (gender === "other" && swift === "yes" && C === "no" && python === "no" && noodle === "yes") {
    $("#language").text("Swift");
  } else if (gender === "other" && swift === "yes" && C === "no" && python === "no" && noodle === "no") {
    $("#language").text("Swift");
  } else if (gender === "other" && swift === "no" && C === "no" && python === "no" && noodle === "yes") {
    $("#language").text("C#");
  } else if (gender === "other" && swift === "no" && C === "no" && python === "no" && noodle === "no") {
    $("#language").text("C#");  
  } else if (gender === "other" && swift === "no" && C === "no" && python === "no" && noodle === "yes") {
    $("#language").text("C#");    
  } else if (gender === "other" && swift === "yes" && C === "no" && python === "yes" && noodle === "no") {
    $("#language").text("Python");
  } else if (gender === "other" && swift === "yes" && C === "no" && python === "yes" && noodle === "yes") {
    $("#language").text("Python");  
  } else if (gender === "other" && swift === "no" && C === "yes" && python === "yes" && noodle === "no") {
    $("#language").text("C#");
  } else if (gender === "other" && swift === "no" && C === "yes" && python === "yes" && noodle === "yes") {
    $("#language").text("C#");
  } else if (gender === "other" && swift === "no" && C === "no" && python === "yes" && noodle === "no") {
    $("#language").text("Python");
  } else if (gender === "other" && swift === "no" && C === "no" && python === "yes" && noodle === "yes") {
    $("#language").text("Python");
  } else if (gender === "other" && swift === "no" && C === "yes" && python === "no" && noodle === "no") {
    $("#language").text("C#");
  } else if (gender === "other" && swift === "no" && C === "yes" && python === "no" && noodle === "yes") {
    $("#language").text("C#");  
  } else {
    $("#language").text("- Please select all boxes -");
  }
  });
  $("#hideResults").click(function(event) {
    $("#language").text("");
    $("#name").val("");
    $("#gender").val("");
    $("#swift").val("");
    $("#c").val("");
    $("#python").val("");
    $("#noodle").val("");
  });
});