//
function Card (id, image, fortune) {
  this.id = id;
  this.image = image;
  this.fortune = fortune;
}


  //Empty deck of cards
  var deck = [];
  // Creating new cards dynamically
  for (var i=1; i<23; i++) {
    deck.push(new Card(i, "img#"+i, "fortune#"+i));
  };

//Cards' images and corresponding fortunes
  deck[0].image = "img/death.png";
  deck[0].fortune =`The Death card can mean a number of things--don't worry, it doesn't mean you're *literally* going to die (well, actually, you ARE going to die, but but probably not any time soon, and not because of this card). The Death card can represent the end of a phase or a change on the horizon related to the situation you're considering.  It could be a welcome one, and can signal the end of a dry spell or another ending. You could be reaching the end of a very dull cycle and standing on the brink of a wonderful new cycle.

   That, or you're about to be hit by a car. In fact, it's probably that, so sure to look both ways when crossing the street.`;

  deck[1].image = "img/judgement.png";
  deck[1].fortune=`The Judgement card asks you to Imagine the panel of judges on American Idol.  The card shows women, men, and children rising from the grave to respond to Gabriel's trumpet call. Their outstretched arms symbolize that they are ready to be judged by the universe and/or Simon Cowell. You may be about to win the contest, or you may be about to become some really embarrassing meme based on your performance. But just by getting on the stage and facing the judges, you're a winner in our eyes.

  Judgement is ruled by Pluto, who is the underworld’s ruler, and also Mickey Mouse's dog. Which is kind of weird, since his friend Goofy is also a dog, although Goofy wears pants and can talk, but Pluto can't. Which kinda breaks your brain, if you think about it too hard.  You have the potential to win and be judged a success, like Walt Disney. Except for the part where he cryogenically froze his head, unless it turns out that that works, and in the future they reanimate him as a sentient flume ride at the intergalactic Disneyverse on Mars.`;

  deck[2].image = "img/justice.png";
  deck[2].fortune=`The Justice tarot card is a symbol of truth, fairness, and law. Kinda like Judge Judy, but way less terrifying.  As she sits in her chair, the scales in her left hand represent how intuition should balance logic. She symbolizes impartiality with the double-edged sword in her right hand. The clarity in thought which is required to dispense justice are symbolized by the square on the crown she wears. Behind her, there is a purple cloak and standing grey pillars. She also has a nice judge collar, like Ruth Bader Ginsburg, but not nearly as cool as RBG, because, really, who is?

   This is a spiritual reminder that what she delivers to people are the outcomes of their actions. You might say karma's a bitch, but she's also a badass and brings folks what they deserve, for better or worse.`;

  deck[3].image = "img/strength.png";
  deck[3].fortune=`The Strength Tarot card is basically the Ruth Bader Ginsburg of cards.. It represents nature, which, however wild in its primal form, is tamed by our subtler, finer self -- our feminine side, our inner self. The will and passion of our instinctive nature does not need to be broken, but refined and brought to consciousness, so that all levels of creation may come into harmony. The feminine soul-force contains a persuasive power that can nurture and induce cooperation from others, stilling disruptive energies by harmonizing differences in the spirit of collective good will.`;

  deck[4].image = "img/temperance.png";
  deck[4].fortune=`On the Temperance card, there is an angel with wings whose gender is not obvious. This suggests that there is a balance between the sexes, and/or you are a huge David Bowie fan. One foot of the angel is in water, to represent the subconscious, while the other foot is on dry land, a representation of the material world. On her robe, there is a square, which has a triangle inscribed inside, another echo of the tangible earth in union with the holy trinity. She holds two cups in a manner where she can mix the waters, which represent the super and subconscious minds. The water flows between them, suggesting union and infinity. It’s pretty deep, man. Pass that joint, ‘k?`;

  deck[5].image = "img/theChariot.png";
  deck[5].fortune=`The Chariot is a card about overcoming conflicts and moving forward in a positive direction. Keep going--through sheer hard work and commitment, you will be victorious. The downside of hard work is that it's really fucking hard, but what doesn't kill you makes you stronger. Unless, of course, it puts you in a coma. But usually stronger, so that's something?`;

  deck[6].image = "img/theDevil.png";
  deck[6].fortune=`They say that God is in the details, but the same is true for the Devil. Your dealings with a domineering person or situation are over and done with. The foundation on which your life operates has the experience of this intense relationship at its core, but you have new structures in your life from which to operate and excel. The chains have been broken, so start up your favorite Power Ballad and sing it loud, no matter how much it annoys the people around you.`;

  deck[7].image = "img/theEmpress.png";
  deck[7].fortune=`The Empress is traditionally associated with maternal influence. She can represent the creation of life, romance, art, or new business. She’s a total badass, but in a good way. And she’s much nicer than Queen Victoria, who did a lot of colonial stuff that kinda sucked. But this Empress is more about consensus, and is woke enough to think British hegemony in the 19th century was totally uncool.`;

  deck[8].image = "img/theFool.png";
  deck[8].fortune=`The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, beginner's luck, and believing in the universe. Granted, sometimes the Universe is a big jerk, but other times, it is the place where literally all kittens live. So, kind of a mixed bag?`;

  deck[9].image = "img/theHangedMan.png";
  deck[9].fortune=`The Hanged Man is the card that suggests ultimate surrender, sacrifice, or being suspended in time. That, or you’re really hung up on something or someone, but you deserve better. They're not worth it. Also, your hair looks great today!`;

  deck[10].image = "img/theHermit.png";
  deck[10].fortune=`The situation involves a time when you embrace your inner Hobbit. The Hermit suggests that you are in a phase of introspection where you are drawing your attention inwards and looking for answers within. You are in need of a period of inner reflection, away from the current demands of your position. So, maybe time for a “staycation”??`;

  deck[11].image = "img/theLovers.png";
  deck[11].fortune=`The Lovers represent relationships and choices. Its appearance in a spread indicates some decision about an existing relationship, a temptation of the heart, or a choice of potential partners. Often an aspect of the querent's life will have to be sacrificed; a bachelor(ette)'s lifestyle may be sacrificed and a relationship gained (or vice versa), or one potential partner may be chosen while another is turned down. Whatever the choice, it should not be made lightly, as the ramifications will be lasting.`;

  deck[12].image = "img/theMagician.png";
  deck[12].fortune=`This card suggests a time when you pulled a rabbit out of a hat, or possibly made the Statue of Liberty disappear. Metaphorically speaking, we hope--otherwise, you probably shouldn’t be allowed near bunnies or other household pets. The Magician card  involves tapping into your full potential rather than holding back, especially when there is a need to transform something. You are full of strong magic and you know how to use it. Kinda like David Copperfield, but your outfits are way less tacky. `;

  deck[13].image = "img/theMoon.png";
  deck[13].fortune=`When the moon hits your eye like a big pizza pie, that's pretty much you right now. The moon is mystery and wisdom, and also a fairly gross kind of pie they still sell in the south. This is also a time when you're like a light in the darkness. You're walking on the moon, so to speak. Also, you control the tides and have something to do with the menstual cycle that isn't entirely clear, so good for you.`;

  deck[14].image = "img/thePope.png";
  deck[14].fortune=`The Pope card suggests a situation where someone in power had a lot of control over you. The pope represents convention and tradition, which can be simultaneously comforting and oppressive. This card also has a lot of legal issues, and is kinda homophobic.`;

  deck[15].image ="img/thePopess.png";
  deck[15].fortune=`Did you know there was once a female pope? Her name was Pope Joan. Seriously, Google it. You're like Pope Joan in this situation, in part because you aren't famous either. The Popess is a card of mystery, kind of like figuring out JQuery. This card suggests that it is time to retreat and reflect upon the situation and trust your inner instincts to guide you through it. Things around you are not what they appear to be right now.`;

  deck[16].image ="img/theStar.png";
  deck[16].fortune=`When the Star card appears, you are likely to find yourself feeling inspired. Unless the star happens to be Rick Perry, that time he was on Dancing With the Stars. Can you believe he’s Secretary of Energy now?? Anyway, this card brings renewed hope and a sense that you are truly blessed by the universe at this time. Also, your hair looks great today.`;


  deck[17].image ="img/theSun.png";
  deck[17].fortune=`The sun is a mass of incandescent gas, like the song says. Even though we now know that the sun is more of a miasma of incandescent plasma, but nevermind.  This card portends good fortune, happiness, joy and harmony. It represents the universe coming together and agreeing with your path and aiding forward movement into something greater.`;

  deck[18].image ="img/theTower.png";
  deck[18].fortune=`The Tower is commonly interpreted as meaning danger, crisis, destruction, and liberation. It is associated with sudden unforeseen change. But hey, change can be good, right??`;

  deck[19].image ="img/theWorld.png";
  deck[19].fortune=`The World represents an ending to a cycle of life, a pause in life before the next big cycle beginning with the fool. It is an indicator of a major and inexorable change, of tectonic breadth. Now you're probably thinking that you don't know what "tectonic breadth" means. But don't worry, nobody else knows either.`;

  deck[20].image ="img/wheelOfFortune.png";
  deck[20].fortune=`Do you ever wonder what Vanna White and Pat Sajak would be doing if not for Wheel of Fortune? Or how it is that they’ve been doing it for so long? Like, even old people can't remember a time when that show wasn't on. Maybe those two are cyborgs? Anyway, a common aspect to most interpretations of this card within a reading is to introduce an element of change in the given situation, such change being in station, position or fortune: such as the rich becoming poor, or the poor becoming rich. Now would be a good time to buy a vowel.`;

  deck[21].image ="img/theEmperor.png";
  deck[21].fortune = `This is a WAY better Emperor than Napoleon, and doesn't have as much of a complex. This card is suggestive of stability and security in life--the kind of emperor who would never invade Russia in winter. You are on top of things and everything in under your control. It is your hard work, discipline and self control that have bought you this far. It means that you are in charge of your life now setting up your own rules and boundaries. In other words...you totally rule.`;


  var pickCards = []; //Contains the cards that we take from the beginning of the shuffled deck
  var pastPosition;
  var presentPosition;
  var futurePosition;

//Function to shuffle the cards
  function shuffle (deck) {
    var i = 0,
        j = 0,
        temp = null
    for (i = deck.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = deck[i]
      deck[i] = deck[j]
      deck[j] = temp
    } //Select first 3 cards from shuffled deck to tell past, present, future
      pickCards = (deck.slice(0,3));
      pastPosition = pickCards[0];
      presentPosition = pickCards[1];
      futurePosition = pickCards[2];
  };

var height = "350px";
// User Logic
$(document).ready(function() {

shuffle(deck);

// Add an Image inside the div
  $("#imgReading1").html("<img src=" + pastPosition.image+ " height="+ height+">");
  $("#imgReading2").html("<img src=" + presentPosition.image+ " height="+height+">");
  $("#imgReading3").html("<img src=" + futurePosition.image + " height="+height+">");

// Click Function to hide the backcard and show a random image + corresponding fortune
  $("#toggle-fading1").click(function() {
    $(this).find("#img1").fadeOut(5);
    $("#imgReading1").show();
    $("#fortune1").text(pastPosition.fortune);
    console.log(deck[0].fortune)
   });
  $("#toggle-fading2").click(function() {
    $(this).find("#img2").fadeOut(5);
    $("#imgReading2").show();
    $("#fortune2").text(presentPosition.fortune);
   });
  $("#toggle-fading3").click(function() {
    $(this).find("#img3").fadeOut(5);
    $("#imgReading3").show();
    $("#fortune3").text(futurePosition.fortune);
   });
});
