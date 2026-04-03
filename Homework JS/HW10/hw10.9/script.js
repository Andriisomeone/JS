const block = document.createElement('div');
block.id = 'price-block';
document.body.appendChild(block);

const STEP = 10;
const DELAY = 10000;
const INITIAL_PRICE = 100;

let currentPrice = +localStorage.getItem('price') || INITIAL_PRICE;
let lastUpdate = +localStorage.getItem('lastUpdate') || 0;
const now = Date.now();

if (now - lastUpdate > DELAY) {
    if (lastUpdate !== 0) {
        currentPrice += STEP;
    }
    localStorage.setItem('price', currentPrice);
    localStorage.setItem('lastUpdate', now);
}

block.innerText = `${currentPrice}грн`;