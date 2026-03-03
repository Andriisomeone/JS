const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: (suit === 'heart' || suit === 'diamond') ? 'red' : 'black'
        });
    }
}

const spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');

const allSixes = deck.filter(card => card.value === '6');

const redCards = deck.filter(card => card.color === 'red');

const diamonds = deck.filter(card => card.cardSuit === 'diamond');

const highValues = ['9', '10', 'jack', 'queen', 'king', 'ace'];
const clubsNinePlus = deck.filter(card =>
    card.cardSuit === 'clubs' && highValues.includes(card.value)
);

console.log('Піковий туз:', spadeAce);
console.log('Кількість червоних карт:', redCards.length);
console.log('Трефи від 9:', clubsNinePlus);