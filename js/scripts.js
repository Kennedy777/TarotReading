//Empty deck of cards
var deck = [];

for (var i=1; i<21; i++) {
  deck.push(new Card(i, "img#"+i, "fortune#"+i));
};

function Card (id, image, fortune) {
  this.id = id;
  this.image = image;
  this.fortune = fortune;
}





// Creating new cards dynamically

function selectCard(){
var cardNumber = Math.floor((Math.random() * 20) + 1 );
return deck[cardNumber];
};
