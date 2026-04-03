const data = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`
}));

const list = document.getElementById('list');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentPage = 0;
const limit = 10;


function render() {
    list.innerHTML = '';

    const start = currentPage * limit;
    const end = start + limit;

    const items = data.slice(start, end);

    items.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.id} - ${item.name}`;
        list.appendChild(div);
    });
}

nextBtn.addEventListener('click', () => {
    if ((currentPage + 1) * limit < data.length) {
        currentPage++;
        render();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        render();
    }
});

render();