// // Function to add a product to the cart
function addToCart(productId) {
    const product = document.querySelector(`.product:nth-child(${productId})`);
    const productName = product.querySelector('h2').textContent;
    const cart = document.getElementById('cart');
    const listItem = document.createElement('li');
    listItem.textContent = productName;
    cart.appendChild(listItem);
}
