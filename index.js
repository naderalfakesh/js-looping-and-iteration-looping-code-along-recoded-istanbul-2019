// Code your solutions in this file

function writeCards(cards,event) {
  let result=[];
  for (let i = 0; i < cards.length; i++) {
    result.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

}

writeCards(["Ada", "Brendan", "Ali"], "birthday");
