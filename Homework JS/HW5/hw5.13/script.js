function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let targetCurrency = null;

    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            targetCurrency = item;
            break;
        }
    }

    if (targetCurrency) {
        return sumUAH / targetCurrency.value;
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
