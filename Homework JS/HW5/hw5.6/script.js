function createListWithItems(text) {
    const ul = document.createElement('ul');

    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}

createListWithItems("Ваш текст");