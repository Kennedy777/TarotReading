//Back end Logic

// Creation of the Constructor for the list

// Prototype fo radd to an array every

//Creation of the Constructor of the Game

var array1= [""]




// User Logic
$(document).ready(function() {

  var firstCard= "img/temperance.png"
  var secondCard= "img/death.png"
  var thirdCard= "img/theFool.png"
  var taille = "350px";

  $("#imgReading1").html("<img src=" + firstCard+ " height="+ taille +">");
  $("#imgReading2").html("<img src=" + secondCard + " height="+ taille +">");
  $("#imgReading3").html("<img src=" + thirdCard + " height="+ taille +">");



  $("#toggle-fading1").click(function() {
    $(this).find("#img1").fadeOut(5);
    $("#imgReading1").show();
   });
  $("#toggle-fading2").click(function() {
    $(this).find("#img2").fadeOut(5);
    $("#imgReading2").show();
   });
  $("#toggle-fading3").click(function() {
    $(this).find("#img3").fadeOut(5);
    $("#imgReading3").show();
   });


event.preventDefault();
});
