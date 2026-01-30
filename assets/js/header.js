function headerloader(){
    // Determine base path
    const isInPages = window.location.pathname.includes('/pages/');
    const basePath = isInPages ? '..' : '.';
    const pagesPath = isInPages ? '.' : 'pages';
    
    const headerHTML=`
         <header>
  <div class="sidebar-overlay" id="sidebar-overlay" style="display: none;"></div>
  <div class="sidebar" id="side" style="display: none;">
        <div class="hdn_head">
              <div class="sidebar-back" id="sidebar-close">
                  <i class="fa-solid fa-arrow-left"></i>
                  <span>Back</span>
              </div>
              <a href="${pagesPath}/login.html" style="text-decoration: none; color: white;"><h2>Hello, Sign in</h2></a>
          </div>
          <div class="hdn_cont">
              <h3>Digital Content & Devices</h3>
              <ul>
               <div onclick="window.location.href='${pagesPath}/music.html'" style="cursor: pointer;">
                  <li>Amazon music</li><i class="fa-solid fa-angle-right"></i>
               </div>
               <div onclick="window.location.href='${pagesPath}/books.html'" style="cursor: pointer;">
                  <li>Kindle E-readers & Books</li><i class="fa-solid fa-angle-right"></i>
               </div> <div onclick="window.location.href='${pagesPath}/apps.html'" style="cursor: pointer;">
                  <li>Amazon Appstore</li><i class="fa-solid fa-angle-right"></i>
               </div> <div onclick="window.location.href='${pagesPath}/subscriptions.html'" style="cursor: pointer;">
                  <li>Subscriptions</li><i class="fa-solid fa-angle-right"></i>
               </div>
              </ul>
          </div>
          <div class="line"><hr></div>
          <div class="hdn_cont">
              <h3>Shop By Department</h3>
              <ul>
               <div onclick="window.location.href='${pagesPath}/smartphone.html'" style="cursor: pointer;">
                  <li>Electronics</li><i class="fa-solid fa-angle-right"></i>
               </div>
               <div onclick="window.location.href='${pagesPath}/computers.html'" style="cursor: pointer;">
                  <li>Computers</li><i class="fa-solid fa-angle-right"></i>
               </div> <div onclick="window.location.href='${pagesPath}/smart-home.html'" style="cursor: pointer;">
                  <li>Smart Homes</li><i class="fa-solid fa-angle-right"></i>
               </div> <div onclick="window.location.href='${pagesPath}/arts.html'" style="cursor: pointer;">
                  <li>Arts & Crafts</li><i class="fa-solid fa-angle-right"></i>
               </div>
              </ul>
          </div>
          <div class="line"><hr></div>
          <div class="hdn_cont">
              <h3>Programs & Features</h3>
              <ul>
               <div onclick="window.location.href='${pagesPath}/gift-cards.html'" style="cursor: pointer;">
                  <li>Gift Cards</li><i class="fa-solid fa-angle-right"></i>
               </div>
               <div onclick="window.location.href='${pagesPath}/deals.html'" style="cursor: pointer;">
                  <li>#Found on Amazon</li><i class="fa-solid fa-angle-right"></i>
               </div> <div onclick="window.location.href='${pagesPath}/live.html'" style="cursor: pointer;">
                  <li>Amazon Live</li><i class="fa-solid fa-angle-right"></i>
               </div> <div onclick="window.location.href='${pagesPath}/redeem.html'" style="cursor: pointer;">
                  <li>Redeem codes</li><i class="fa-solid fa-angle-right"></i>
               </div>
              </ul>
          </div>
       </div>

<div class="navbar">
    <div class="navlogo border" >
        <a href="${basePath}/index.html"><div class="logo">
        </div></a>
    </div>
    <div class="address border" onclick="window.location.href='${pagesPath}/delivery.html'" style="cursor: pointer;">
        <p class="addfirst">Deliver to</p>
        <div class="icon">
            <i class="fa-solid fa-location-dot"></i>
            <p class="addsec">Pakistan</p>
        </div>
    </div>
    <div class="navsearch">
        <select class="search_select">
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home & Kitchen</option>
                <option value="beauty">Beauty & Personal Care</option>
                <option value="toys">Toys & Games</option>
                <option value="sports">Sports & Outdoors</option>
                <option value="automotive">Automotive</option>
                <option value="grocery">Grocery & Gourmet Food</option>
                <option value="health">Health & Household</option>
                <option value="pet">Pet Supplies</option>
                <option value="garden">Garden & Outdoor</option>
                <option value="baby">Baby</option>
                <option value="industrial">Industrial & Scientific</option>
                <option value="software">Software</option>
                <option value="video_games">Video Games</option>
                <option value="handmade">Handmade</option>
                <option value="luxury_beauty">Luxury Beauty</option>
                <option value="office">Office Products</option>
                <option value="smart_home">Smart Home</option>
        </select>
        <input class="searchitem" placeholder="search amazon">
        <div class="search_icon">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div> 
    <div class="navsign border" onclick="window.location.href='${pagesPath}/login.html'" style="cursor: pointer;">
        <p class="navfirst"><span>Hello, Sign in</span></p>
        <p class="navsec">Account & List</p>
    </div>
    <div class="navsign border" onclick="window.location.href='${pagesPath}/orders.html'" style="cursor: pointer;">
        <p class="navfirst"><span>Returns</span></p>
        <p class="navsec">& Orders</p>
    </div>
    <div class="navcart border" id="cart"><a href="${pagesPath}/cartpage.html">
        <i class="fa-solid fa-cart-shopping"></i>
        <span class="cart-count" id="cart-count">0</span>
        <span class="cart-text">Cart</span></a>
    </div>
</div>
<div class="panel">
    <div class="panelall">
        <div id="bars">
            <i class="fa-solid fa-bars"></i>
            <span>All</span>
        </div>
    </div>
    <div class="panops">
        <a href="${pagesPath}/deals.html">Today's Deals</a>
        <a href="${pagesPath}/customer-service.html">Customer Service</a>
        <a href="${pagesPath}/registry.html">Registry</a>
        <a href="${pagesPath}/gift-cards.html">Gift Cards</a>
        <a href="${pagesPath}/sell.html">Sell</a>
    </div>
    <div class="pan3">
        <a href="${pagesPath}/smartphone.html">Shop deals in Electronics</a>
    </div>
</div>
</header>`;

    // Inject header HTML
    document.getElementById('header-container').innerHTML = headerHTML;

    // Add event listeners after elements exist
    const bars = document.getElementById('bars');
    const side = document.getElementById('side');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarClose = document.getElementById('sidebar-close');
    
    function openSidebar() {
        side.style.display = "block";
        if (overlay) overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    }
    
    function closeSidebarFunc() {
        side.style.display = "none";
        if (overlay) overlay.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // Open sidebar
    bars.addEventListener('click', openSidebar);

    // Close sidebar - all close methods
    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebarFunc);
    if (overlay) overlay.addEventListener('click', closeSidebarFunc);

    // Close sidebar when clicking outside or pressing Escape
    document.addEventListener('click', (e) => {
        if (side.style.display === "block" && !side.contains(e.target) && !bars.contains(e.target)) {
            closeSidebarFunc();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && side.style.display === "block") {
            closeSidebarFunc();
        }
    });

    // Search functionality
    const searchInput = document.querySelector('.searchitem');
    const searchIcon = document.querySelector('.search_icon');
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            localStorage.setItem('searchTerm', searchTerm);
            const searchPath = isInPages ? 'search.html' : 'pages/search.html';
            window.location.href = searchPath;
        }
    }

    searchIcon.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Update cart count on load
    updateCartCount();
}

// Global function to update cart count - accessible from anywhere
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update all cart count elements
    const cartCountElements = document.querySelectorAll('.cart-count, #cart-count');
    cartCountElements.forEach(element => {
        if (element) {
            element.textContent = totalItems;
        }
    });
}

// Listen for storage changes to update cart across tabs
window.addEventListener('storage', function(e) {
    if (e.key === 'cart') {
        updateCartCount();
    }
});

// Make updateCartCount globally accessible
window.updateCartCount = updateCartCount;

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', headerloader);
