
// User Logic

$(document).ready(function() {


  $("#fade-in").click(function() {
    $("img1").fadeIn("fast");
  });

  $("#fade-out").click(function() {
    $("img1").fadeOut(400);
  });

  $("#toggle-fading").click(function() {
    $('#img1').fadeToggle("slow");
  });
  $("#toggle-fading2").click(function() {
    $('#img2').fadeToggle("slow");
  });

  $("#toggle-fading3").click(function() {
    $('#img3').fadeToggle("slow");
  });




});












// $(document).ready(function() {
//   $(".clickable").click(function() {
//
//
//
//     $("#toggle-fading").click(function() {
//       $('img').fadeToggle("slow");
//     });
//
//
//
// var imgArray = [];
// imgArray[0] = new Image ();
// imgArray[0].src = "img/backCard.png";
//
//
//
//
//   event.preventDefault();
//   });
// });
