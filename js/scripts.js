//Back end Logic

// Creation of the Constructor for the list

// Prototype fo radd to an array every

//Creation of the Constructor of the Game

var array1= [""]




// User Logic
$(document).ready(function() {
  var justice = "img/temperance.png"
  var game = true;
  var taille = "350px";

  $("#imgSA").html("<img src=" + justice + " height="+ taille +">");



  $("#toggle-fading").click(function() {
    $(this).find("img").toggle(200);
  });
  $("#toggle-fading2").click(function() {
    $(this).find("img").toggle(200);
  });
  $("#toggle-fading3").click(function() {
    $(this).find("#img3").fadeOut(100);
    $("#imgSA").show();

   });


event.preventDefault();
});
