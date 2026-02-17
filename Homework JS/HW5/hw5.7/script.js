function createList(text, count) {
    const ul = document.createElement('ul');

    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}

createList("Текст елемента", 3);