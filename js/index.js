function myFunction() {
    location.href("https://www.amazon.com")
    location.href = 'http://www.w3schools.com';
  }


$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color",  "#ef624b");
  });
  $("input").blur(function(){
    $(this).css("background-color", "#F7B6AB");
  });
});

$(document).ready(function(){
  $(".submit").click (function(){
    alert("Thank you for your interest!");
  });
});
