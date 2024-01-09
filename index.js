let cart = [];
let total = 0;

function addToCart(itemId, itemName, itemPrice) {
    cart.push({ id: itemId, name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalElement = document.getElementById("total");

    cartList.innerHTML = "";
    total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - R$${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    alert(`Pedido finalizado! Total: R$${total.toFixed(2)}`);
    cart = [];
    updateCart();
}