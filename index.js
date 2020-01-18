// Code your solutions in this file

function writeCards(cards,event) {
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

}

writeCards(["Ada", "Brendan", "Ali"], "birthday");
