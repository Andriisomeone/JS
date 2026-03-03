const cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
];

const packedCards = cards.reduce((acc, card) => {
    const suitKey = card.cardSuit === 'spade' ? 'spades' :
        card.cardSuit === 'diamond' ? 'diamonds' :
            card.cardSuit === 'heart' ? 'hearts' : 'clubs';

    acc[suitKey].push(card);

    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] }); // Початковий стан

console.log(packedCards);