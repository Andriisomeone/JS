let products = [ 4 elements... ];
for (const product of products) {
    document.write(
        `<div class="product-card">
<h3 class="product-title">${product.title}. Price - ${product.price}</h3>
<img src="${product.image}" alt="" class="product-image">
</div>`
    );
}
