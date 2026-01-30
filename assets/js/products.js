// Function to load products from XML file
document.addEventListener("DOMContentLoaded", loadProducts);
// Function to load products from XML file
function loadProducts() {
    fetch("../products.xml")
        .then(response => response.text())
        .then(xmlText => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xmlText, "text/xml");

            let products = xmlDoc.getElementsByTagName("product");
            let shopSection = document.querySelector(".shopsec");

            if (products.length === 0) {
                console.error("No products found in XML file.");
                return;
            }

            // Get category from a data attribute on the page
            let currentCategory = document.body.getAttribute("data-category"); 

            shopSection.innerHTML = ""; // Clear existing content

            Array.from(products).forEach(product => {
                let id = product.getElementsByTagName("id")[0]?.textContent.trim();
                let name = product.getElementsByTagName("name")[0]?.textContent.trim();
                let price = product.getElementsByTagName("price")[0]?.textContent.trim();
                let image = product.getElementsByTagName("image")[0]?.textContent.trim();
                let category = product.getElementsByTagName("category")[0]?.textContent.trim(); 

                // Skip products that don't belong to this category
                if (currentCategory && category !== currentCategory) return;

                // Create a product box dynamically
                let productDiv = document.createElement("div");
                productDiv.classList.add("box");

                productDiv.innerHTML = `
                    <div class="boxcont">
                        <h2 class="product-name" title="${name}" data-id="${id}">${name}</h2>
                        <div class="boximg product-image" style="background-image: url('${image}');" data-id="${id}"></div>
                        <h4 class="price">Rs ${price}</h4>
                        <button class="buttonx add-to-cart" 
                            data-id="${id}" 
                            data-name="${name}" 
                            data-price="${price}" 
                            data-image="${image}">
                            <i class="fas fa-shopping-cart"></i> Add to cart
                        </button>
                    </div>
                `;

                shopSection.appendChild(productDiv);
            });

            attachAddToCartListeners();
            attachProductClickListeners();
        })
        .catch(error => console.error("Error loading products:", error));
}



// Function to add product to cart in localStorage
function addToCart(productId, productName, productPrice, productImage) {
    // Use CartManager if available, otherwise use fallback
    if (typeof window.CartManager !== 'undefined') {
        const action = window.CartManager.addItem(productId, productName, productPrice, productImage);
        const message = action === 'updated' 
            ? `${productName} quantity updated!` 
            : `${productName} added to cart!`;
        
        if (typeof showToast !== 'undefined') {
            showToast(message, 'success');
        }
    } else {
        // Fallback method
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
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

        localStorage.setItem("cart", JSON.stringify(cart));
        
        if (typeof showToast !== 'undefined') {
            showToast(`${productName} added to cart!`, 'success');
        }
        
        if (typeof window.updateCartCount === 'function') {
            window.updateCartCount();
        }
    }
}

// Function to attach event listeners after loading products
function attachAddToCartListeners() {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let productId = this.getAttribute("data-id");
            let productName = this.getAttribute("data-name");
            let productPrice = this.getAttribute("data-price");
            let productImage = this.getAttribute("data-image");

            // Add pulse animation
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);

            addToCart(productId, productName, productPrice, productImage);
        });
    });
}

// Function to attach click listeners to product titles and images
function attachProductClickListeners() {
    document.querySelectorAll(".product-name, .product-image").forEach(element => {
        element.addEventListener("click", function(e) {
            e.stopPropagation();
            const productId = this.getAttribute("data-id");
            window.location.href = `product-detail.html?id=${productId}`;
        });
        element.style.cursor = "pointer";
    });
}
