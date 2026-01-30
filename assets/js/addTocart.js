// Function to add product to cart in localStorage
function addToCart(productId, productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    let existingProduct = cart.find(product => product.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
        if (typeof showToast !== 'undefined') {
            showToast(`${productName} quantity updated in cart!`, 'success');
        }
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: parseFloat(productPrice),
            image: productImage,
            quantity: 1
        });
        if (typeof showToast !== 'undefined') {
            showToast(`${productName} added to your cart!`, 'success');
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Update cart count immediately
    if (typeof window.updateCartCount === 'function') {
        window.updateCartCount();
    }
    
    // Dispatch custom event for cart update
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart } }));
}

// Function to update cart count in the UI (fallback if window.updateCartCount not available)
if (typeof window.updateCartCount !== 'function') {
    window.updateCartCount = function() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        const cartCountElements = document.querySelectorAll('.cart-count, #cart-count');
        cartCountElements.forEach(element => {
            if (element) {
                element.textContent = totalItems;
            }
        });
    };
}

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", function() {
    if (typeof window.updateCartCount === 'function') {
        window.updateCartCount();
    }
});
