// Product Detail Page JavaScript
document.addEventListener("DOMContentLoaded", function() {
    loadProductDetails();
    loadRecommendedProducts();
});

function loadProductDetails() {
    // Get product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        if (typeof Toast !== 'undefined') {
            Toast.error('Product not found', 'Error');
        }
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 2000);
        return;
    }
    
    // Load product from XML
    fetch("../products.xml")
        .then(response => response.text())
        .then(xmlText => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xmlText, "text/xml");
            let products = xmlDoc.getElementsByTagName("product");
            
            let foundProduct = null;
            for (let product of products) {
                let id = product.getElementsByTagName("id")[0]?.textContent.trim();
                if (id === productId) {
                    foundProduct = product;
                    break;
                }
            }
            
            if (foundProduct) {
                displayProduct(foundProduct);
            } else {
                if (typeof Toast !== 'undefined') {
                    Toast.error('Product not found', 'Error');
                }
                setTimeout(() => {
                    window.location.href = '../index.html';
                }, 2000);
            }
        })
        .catch(error => {
            console.error("Error loading product:", error);
            if (typeof Toast !== 'undefined') {
                Toast.error('Failed to load product', 'Error');
            }
        });
}

function displayProduct(product) {
    const id = product.getElementsByTagName("id")[0]?.textContent.trim();
    const name = product.getElementsByTagName("name")[0]?.textContent.trim();
    const price = product.getElementsByTagName("price")[0]?.textContent.trim();
    const image = product.getElementsByTagName("image")[0]?.textContent.trim();
    const category = product.getElementsByTagName("category")[0]?.textContent.trim();
    
    // Update page title
    document.title = `${name} - Amazon`;
    
    // Update breadcrumb
    document.getElementById('breadcrumb-category').textContent = capitalizeFirst(category);
    document.getElementById('breadcrumb-product').textContent = name;
    
    // Update main product info
    document.getElementById('product-title').textContent = name;
    document.getElementById('product-price').textContent = `Rs ${price}`;
    document.getElementById('buy-price').textContent = `Rs ${price}`;
    
    // Update product image
    document.getElementById('main-image').style.backgroundImage = `url('${image}')`;
    
    // Update product details
    document.getElementById('detail-id').textContent = id;
    document.getElementById('detail-category').textContent = capitalizeFirst(category);
    
    // Setup add to cart button
    const addToCartBtn = document.getElementById('add-to-cart-detail');
    addToCartBtn.addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('quantity').value);
        
        for (let i = 0; i < quantity; i++) {
            addToCart(id, name, price, image);
        }
        
        if (typeof Toast !== 'undefined') {
            Toast.success(`${quantity} x ${name} added to cart!`, 'Added to Cart');
        }
        
        // Add pulse animation
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
    
    // Setup buy now button
    document.querySelector('.buy-now-btn').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('quantity').value);
        
        for (let i = 0; i < quantity; i++) {
            addToCart(id, name, price, image);
        }
        
        window.location.href = 'cartpage.html';
    });
}

function loadRecommendedProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentProductId = urlParams.get('id');
    
    fetch("../products.xml")
        .then(response => response.text())
        .then(xmlText => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xmlText, "text/xml");
            let products = xmlDoc.getElementsByTagName("product");
            
            const recommendedContainer = document.getElementById('recommended-products');
            recommendedContainer.innerHTML = '';
            
            let count = 0;
            let currentCategory = null;
            
            // First, find the current product's category
            for (let product of products) {
                let id = product.getElementsByTagName("id")[0]?.textContent.trim();
                if (id === currentProductId) {
                    currentCategory = product.getElementsByTagName("category")[0]?.textContent.trim();
                    break;
                }
            }
            
            // Then show products from the same category
            for (let product of products) {
                if (count >= 8) break; // Show max 8 recommended products
                
                let id = product.getElementsByTagName("id")[0]?.textContent.trim();
                if (id === currentProductId) continue; // Skip current product
                
                let category = product.getElementsByTagName("category")[0]?.textContent.trim();
                if (currentCategory && category !== currentCategory) continue;
                
                let name = product.getElementsByTagName("name")[0]?.textContent.trim();
                let price = product.getElementsByTagName("price")[0]?.textContent.trim();
                let image = product.getElementsByTagName("image")[0]?.textContent.trim();
                
                const productDiv = document.createElement("div");
                productDiv.classList.add("recommended-item");
                productDiv.onclick = function() {
                    window.location.href = `product-detail.html?id=${id}`;
                };
                
                productDiv.innerHTML = `
                    <div class="recommended-item-image" style="background-image: url('${image}');"></div>
                    <div class="recommended-item-title">${name}</div>
                    <div class="recommended-item-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div class="recommended-item-price">Rs ${price}</div>
                `;
                
                recommendedContainer.appendChild(productDiv);
                count++;
            }
        })
        .catch(error => console.error("Error loading recommended products:", error));
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Pulse animation for button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart-btn') || 
        e.target.classList.contains('buy-now-btn')) {
        e.target.classList.add('clicked');
        setTimeout(() => {
            e.target.classList.remove('clicked');
        }, 300);
    }
});
