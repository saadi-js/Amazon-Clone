function headerloader(){
    const headerHTML=`
         <header>
  <div class="sidebar" id="side" style="display: none;">
        <i class="fa-solid fa-xmark" id="cros" style="position: absolute; top: 10px; right: 10px; font-size: 20px; cursor: pointer;"></i>
          <div class="hdn_head">
              <h2>Hello,Sign in</h2>
          </div>
          <div class="hdn_cont">
              <h3>Digital Content & Devices</h3>
              <ul>
               <div>
                  <li>Amazon music</li><i class="fa-solid fa-angle-right"></i>
               </div>
               <div>
                  <li>Kindle E-readers & Books</li><i class="fa-solid fa-angle-right"></i>
               </div> <div>
                  <li>Amazon Appstore</li><i class="fa-solid fa-angle-right"></i>
               </div> <div>
                  <li>Subscriptions</li><i class="fa-solid fa-angle-right"></i>
               </div>
              </ul>
          </div>
          <div class="line"><hr></div>
          <div class="hdn_cont">
              <h3>Shop By Department</h3>
              <ul>
               <div>
                  <li>Electronics</li><i class="fa-solid fa-angle-right"></i>
               </div>
               <div>
                  <li>Computers</li><i class="fa-solid fa-angle-right"></i>
               </div> <div>
                  <li>Smart Homes</li><i class="fa-solid fa-angle-right"></i>
               </div> <div>
                  <li>Arts & Crafts</li><i class="fa-solid fa-angle-right"></i>
               </div>
              </ul>
          </div>
          <div class="line"><hr></div>
          <div class="hdn_cont">
              <h3>Programs & Features</h3>
              <ul>
               <div>
                  <li>Gift Cards</li><i class="fa-solid fa-angle-right"></i>
               </div>
               <div>
                  <li>#Found on Amazon</li><i class="fa-solid fa-angle-right"></i>
               </div> <div>
                  <li>Amazon Live</li><i class="fa-solid fa-angle-right"></i>
               </div> <div>
                  <li>Redeem codes</li><i class="fa-solid fa-angle-right"></i>
               </div>
              </ul>
          </div>
       </div>
       <i class="fa-solid fa-xmark" id="cross"></i>

<div class="navbar">
    <div class="navlogo border" >
        <a href="index.html"><div class="logo">
        </div></a>
    </div>
    <div class="address border">
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
    <div class="navsign border">
        <p class="navfirst"><span>Hello,<a href="login.html">Sign in</a></span></p>
        <p class="navsec">Account & List</p>
    </div>
    <div class="navsign border">
        <p class="navfirst"><span>Returns</span></p>
        <p class="navsec">& Orders</p>
    </div>
    <div class="navcart border" id="cart"><a href="cartpage.html">
        <i class="fa-solid fa-cart-shopping"></i>
        Cart<a/>
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
        <a href="panel.html">Today's Deals</a>
        <a href="panel.html">Customer Service</a>
        <a href="panel.html">Registry</a>
        <a href="panel.html">Gift Cards</a>
        <a href="panel.html">Sell</a>
    </div>
    <div class="pan3">
        <a href="panel.html">Shop deals in Electronics</a>
    </div>
</div>
</header>`;

    // Inject header HTML
    document.getElementById('header-container').innerHTML = headerHTML;

    // Add event listeners after elements exist
    const bars = document.getElementById('bars');
    const side = document.getElementById('side');
    const cross = document.getElementById('cross');

    bars.addEventListener('click', () => {
        side.style.display = "block";
    });

    cross.addEventListener('click', () => {
        side.style.display = "none";
    });
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', headerloader);
