const input = document.createElement('input');
input.type = 'number';
input.placeholder = 'Введіть ваш вік';

const button = document.createElement('button');
button.innerText = 'Підтвердити';

document.body.append(input, button);

button.onclick = () => {
    const age = +input.value;

    if (age < 18) {
        alert('Ваш вік менше 18 років');
    } else {
        alert('Ваш вік 18 років або більше');
    }
};