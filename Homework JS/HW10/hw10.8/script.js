const inputRows = document.createElement('input');
inputRows.type = 'number';
inputRows.placeholder = 'Кількість рядків';

const inputCols = document.createElement('input');
inputCols.type = 'number';
inputCols.placeholder = 'Кількість ячеєк';

const inputContent = document.createElement('input');
inputContent.type = 'text';
inputContent.placeholder = 'Вміст';

const button = document.createElement('button');
button.innerText = 'Побудувати таблицю';

document.body.append(inputRows, inputCols, inputContent, button);

button.onclick = () => {
    const rows = +inputRows.value;
    const cols = +inputCols.value;
    const content = inputContent.value;

    const table = document.createElement('table');
    table.style.border = '1px solid black';

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.style.border = '1px solid gray';
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    document.body.appendChild(table);
};