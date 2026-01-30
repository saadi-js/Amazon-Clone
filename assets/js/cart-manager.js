/**
 * Global Cart Management System
 * Ensures consistent cart updates across all pages and scenarios
 */

(function() {
    'use strict';

    // Cart Management Object
    window.CartManager = {
        
        /**
         * Get cart from localStorage
         */
        getCart: function() {
            try {
                return JSON.parse(localStorage.getItem("cart")) || [];
            } catch (e) {
                console.error("Error reading cart:", e);
                return [];
            }
        },

        /**
         * Save cart to localStorage
         */
        saveCart: function(cart) {
            try {
                localStorage.setItem("cart", JSON.stringify(cart));
                this.updateUI();
                this.triggerCartEvent();
            } catch (e) {
                console.error("Error saving cart:", e);
            }
        },

        /**
         * Add item to cart
         */
        addItem: function(productId, productName, productPrice, productImage) {
            let cart = this.getCart();
            let existingProduct = cart.find(product => product.id === productId);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: parseFloat(productPrice),
                    image: productImage,
                    quantity: 1
                });
            }

            this.saveCart(cart);
            return existingProduct ? 'updated' : 'added';
        },

        /**
         * Update item quantity
         */
        updateQuantity: function(index, newQuantity) {
            let cart = this.getCart();
            if (cart[index] && newQuantity > 0) {
                cart[index].quantity = newQuantity;
                this.saveCart(cart);
                return true;
            }
            return false;
        },

        /**
         * Increase item quantity
         */
        increaseQuantity: function(index) {
            let cart = this.getCart();
            if (cart[index]) {
                cart[index].quantity += 1;
                this.saveCart(cart);
                return true;
            }
            return false;
        },

        /**
         * Decrease item quantity
         */
        decreaseQuantity: function(index) {
            let cart = this.getCart();
            if (cart[index] && cart[index].quantity > 1) {
                cart[index].quantity -= 1;
                this.saveCart(cart);
                return true;
            }
            return false;
        },

        /**
         * Remove item from cart
         */
        removeItem: function(index) {
            let cart = this.getCart();
            if (cart[index]) {
                const removedItem = cart.splice(index, 1)[0];
                this.saveCart(cart);
                return removedItem;
            }
            return null;
        },

        /**
         * Clear entire cart
         */
        clearCart: function() {
            localStorage.removeItem("cart");
            this.updateUI();
            this.triggerCartEvent();
        },

        /**
         * Get total items count
         */
        getTotalItems: function() {
            let cart = this.getCart();
            return cart.reduce((sum, item) => sum + item.quantity, 0);
        },

        /**
         * Get total price
         */
        getTotalPrice: function() {
            let cart = this.getCart();
            return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        },

        /**
         * Update cart count in UI
         */
        updateUI: function() {
            let totalItems = this.getTotalItems();
            const cartCountElements = document.querySelectorAll('.cart-count, #cart-count');
            
            cartCountElements.forEach(element => {
                if (element) {
                    element.textContent = totalItems;
                    // Add animation
                    element.style.animation = 'none';
                    setTimeout(() => {
                        element.style.animation = 'pulse 0.3s ease-in-out';
                    }, 10);
                }
            });
        },

        /**
         * Trigger custom cart event
         */
        triggerCartEvent: function() {
            const event = new CustomEvent('cartUpdated', {
                detail: {
                    cart: this.getCart(),
                    totalItems: this.getTotalItems(),
                    totalPrice: this.getTotalPrice()
                }
            });
            window.dispatchEvent(event);
        }
    };

    // Override global updateCartCount function
    window.updateCartCount = function() {
        window.CartManager.updateUI();
    };

    // Listen for storage changes (for multi-tab sync)
    window.addEventListener('storage', function(e) {
        if (e.key === 'cart') {
            window.CartManager.updateUI();
        }
    });

    // Listen for custom cart update events
    window.addEventListener('cartUpdated', function(e) {
        window.CartManager.updateUI();
    });

    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', function() {
        window.CartManager.updateUI();
    });

    // Add pulse animation to style
    if (!document.getElementById('cart-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'cart-animation-styles';
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
        `;
        document.head.appendChild(style);
    }

})();
