var deck = [];

function Card (index, image, fortune) {
  this.index = index;
  this.image = image;
  this.fortune = fortune;
}

  for (var i=0; i<20; i++) {
    deck.push(new Card(i, "a", "b"));
  };
