const suits = ["spades", "hearts", "diamonds", "clubs"]
const cardNumbers = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]
var deck = [];

function deal() {
	cardIndex = Math.floor(Math.random()*deck.length);
	card = deck[cardIndex];
	deck.splice(cardIndex, 1);
	document.getElementById('cardTable').innerHTML = document.getElementById('cardTable').innerHTML + '<br>' + card.rank + ' of ' + card.suit;
	console.log(deck.length)
}

function make_deck() {
	for(var i=0; i<suits.length; i++){
		for(var j=0; j<cardNumbers.length; j++){
			//deck[j + i*cardNumbers.length] = `${cardNumbers[j]} of ${suits[i]}`;
			deck[j + i*cardNumbers.length] = {"suit": suits[i], "rank": cardNumbers[j]};
		}
	}
}

make_deck();