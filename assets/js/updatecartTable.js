// Function to update cart table display
function updateCartTable() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTableBody = document.querySelector("#cart-table tbody");
    const cartTotalElement = document.querySelector("#cart-total");

    if (!cartTableBody) return;

    // Clear existing rows
    cartTableBody.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const row = document.createElement("tr");
        
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;"></td>
            <td>${item.name}</td>
            <td>Rs ${item.price}</td>
            <td>
                <button class="qty-btn" onclick="decreaseQuantity(${index})">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="increaseQuantity(${index})">+</button>
            </td>
            <td>Rs ${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove-btn" onclick="removeFromCart(${index})">Remove</button></td>
        `;
        
        cartTableBody.appendChild(row);
        total += item.price * item.quantity;
    });

    if (cartTotalElement) {
        cartTotalElement.textContent = `Total: Rs ${total.toFixed(2)}`;
    }
}

// Function to increase quantity
function increaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartTable();
    if (typeof window.updateCartCount === 'function') {
        window.updateCartCount();
    }
    window.dispatchEvent(new CustomEvent('cartUpdated'));
}

// Function to decrease quantity
function decreaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartTable();
        if (typeof window.updateCartCount === 'function') {
            window.updateCartCount();
        }
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    }
}

// Function to remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartTable();
    if (typeof window.updateCartCount === 'function') {
        window.updateCartCount();
    }
    window.dispatchEvent(new CustomEvent('cartUpdated'));
}

// Function to clear entire cart
function clearCart() {
    if (confirm("Are you sure you want to clear the cart?")) {
        localStorage.removeItem("cart");
        updateCartTable();
        if (typeof window.updateCartCount === 'function') {
            window.updateCartCount();
        }
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    }
}

// Initialize cart table on page load
document.addEventListener("DOMContentLoaded", updateCartTable);
