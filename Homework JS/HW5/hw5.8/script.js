function createListFromArray(items) {
    const ul = document.createElement('ul');

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

createListFromArray([42, "Привіт", true, 0.5]);