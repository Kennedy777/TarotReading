//Empty deck of cards
var deck = [];

// Creating new cards dynamically
for (var i=1; i<21; i++) {
  deck.push(new Card(i, "img#"+i, "fortune#"+i));
};

function Card (id, image, fortune) {
  this.id = id;
  this.image = image;
  this.fortune = fortune;
}

//Shuffle cards


var pickCards = []; //Contains the cards that we take from the beginning of the shuffled deck

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
};

////Notes ----

// Attempt to select 3 random cards

// function selectCards(){
//   for (var i=0; i<20; i++){
//   //if (cards.length <=3)
//   var cardNumber = Math.floor((Math.random() * 20) + 1 );
//   return cardNumber
//     if (cards.indexOf(deck[cardNumber])<0) {
//       cards.push(deck[cardNumber]);
//       }
//     }
//   };
//
//
//   //cards.length = 20;
//   for (var i=0; i<20; i++) {
//     var cardNumber = Math.floor((Math.random() * 20) + 1 );
//     if(cards.includes(deck[cardNumber])){
//
//     }else{
//     cards.push(deck[cardNumber]);
//     }
//   }
// };

// function shuffle(deck){
//   var i=deck.length,
//   j=0,
//   temp;
//   while i--{
//     j=Math.floor(Math.random() *(i+1));
//     temp=deck[i];
//     deck[i]=deck[i];
//     deck[j]=temp;
//   }
//   return deck;
// }
