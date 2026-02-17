function createParagraph(text) {
    const p = document.createElement('p');

    p.textContent = text;
    document.body.appendChild(p);
}

createParagraph("Привіт! Це текст вашого нового параграфа.");