// Function to load products from XML file
document.addEventListener("DOMContentLoaded", loadProducts);
// Function to load products from XML file
function loadProducts() {
    fetch("products.xml")
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
                        <h2>${name}</h2>
                        <div class="boximg" style="background-image: url('${image}');"></div>
                        <button class="buttonx add-to-cart" 
                            data-id="${id}" 
                            data-name="${name}" 
                            data-price="${price}" 
                            data-image="${image}">
                            Add to cart
                        </button>
                        <h4 class="price">Rs ${price}</h4>
                    </div>
                `;

                shopSection.appendChild(productDiv);
            });

            attachAddToCartListeners();
        })
        .catch(error => console.error("Error loading products:", error));
}



// Function to add product to cart in localStorage
function addToCart(productId, productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
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
    alert("Product added to cart!");
}

// Function to attach event listeners after loading products
function attachAddToCartListeners() {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let productId = this.getAttribute("data-id");
            let productName = this.getAttribute("data-name");
            let productPrice = this.getAttribute("data-price");
            let productImage = this.getAttribute("data-image");

            addToCart(productId, productName, productPrice, productImage);
        });
    });
}
