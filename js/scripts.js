
$(document).ready(function() {
//Back end Logic

// Constructor of the Game
function Card (id, image, fortune) {
  this.id = id;
  this.image = image;
  this.fortune = fortune;
}

  var taille = "350px";
  //Empty deck of cards
  var deck = [];
  // Creating new cards dynamically
  for (var i=1; i<23; i++) {
    deck.push(new Card(i, "img#"+i, "fortune#"+i));
  };

  deck[0].image = "img/death.png";
  deck[0].fortune ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  deck[1].image = "img/judgement.png";
  deck[1].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[2].image = "img/justice.png";
  deck[2].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[3].image = "img/strength.png";
  deck[3].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[4].image = "img/temperance.png";
  deck[4].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[5].image = "img/theChariot.png";
  deck[5].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[6].image = "img/theDevil.png";
  deck[6].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[7].image = "img/theEmpress.png";
  deck[7].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[8].image = "img/theFool.png";
  deck[8].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[9].image = "img/theHangedMan.png";
  deck[9].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[10].image = "img/theHermit.png";
  deck[10].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[11].image = "img/theLovers.png";
  deck[11].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[12].image = "img/theMagician.png";
  deck[12].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[13].image = "img/theMoon.png";
  deck[13].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[14].image = "img/thePope.png";
  deck[14].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[15].image ="img/thePopess.png";
  deck[15].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[16].image ="img/theStar.png";
  deck[16].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[17].image ="img/theSun.png";
  deck[17].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[18].image ="img/theTower.png";
  deck[18].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[19].image ="img/theWorld.png";
  deck[19].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[20].image ="img/wheelOfFortune.png";
  deck[20].fortune="Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  deck[21].image ="img/theEmperor.png";
  deck[21].fortune = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  var pickCards = []; //Contains the cards that we take from the beginning of the shuffled deck
  var pastPosition;
  var presentPosition;
  var futurePosition;
//function to shuffle the cards
  function shuffle (deck) {
    var i = 0,
        j = 0,
        temp = null
    for (i = deck.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = deck[i]
      deck[i] = deck[j]
      deck[j] = temp
    }
      pickCards = (deck.slice(0,3)); //Set empty cards array to the array sliced from the first 3 elements of the newly shuffled deck, because "slice" takes the elements between the two indices up to but NOT including the final index (e.g., 3 in this case)
      pastPosition = pickCards[0];
      presentPosition = pickCards[1];
      futurePosition = pickCards[2];
  };
// Call the function
shuffle(deck);

// User Logic

// Add an Image inside the div
  $("#imgReading1").html("<img src=" + pastPosition.image+ " height="+ taille +">");
  $("#imgReading2").html("<img src=" + presentPosition.image+ " height="+ taille +">");
  $("#imgReading3").html("<img src=" + futurePosition.image + " height="+ taille +">");

// Click Function to hide the backcard and show a random image
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
});
