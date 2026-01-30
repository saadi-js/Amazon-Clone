function loadfooter() {
    // Determine base path
    const isInPages = window.location.pathname.includes('/pages/');
    const basePath = isInPages ? '..' : '.';
    const pagesPath = isInPages ? '.' : 'pages';
    
    const footerHTML = `
       <footer>
        <div class="foot-back-to-top">
           <a href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;">Back to top</a>
        </div>
        
        <div class="foot-main">
            <div class="foot-column">
                <h3>Get to Know Us</h3>
                <ul>
                    <li><a href="${pagesPath}/customer-service.html">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press Releases</a></li>
                    <li><a href="#">Amazon Science</a></li>
                </ul>
            </div>
            
            <div class="foot-column">
                <h3>Make Money with Us</h3>
                <ul>
                    <li><a href="${pagesPath}/sell.html">Sell on Amazon</a></li>
                    <li><a href="#">Sell under Amazon Accelerator</a></li>
                    <li><a href="#">Protect and Build Your Brand</a></li>
                    <li><a href="#">Amazon Global Selling</a></li>
                    <li><a href="#">Become an Affiliate</a></li>
                    <li><a href="#">Advertise Your Products</a></li>
                </ul>
            </div>
            
            <div class="foot-column">
                <h3>Amazon Payment Products</h3>
                <ul>
                    <li><a href="#">Amazon Business Card</a></li>
                    <li><a href="${pagesPath}/gift-cards.html">Shop with Points</a></li>
                    <li><a href="${pagesPath}/gift-cards.html">Reload Your Balance</a></li>
                    <li><a href="#">Amazon Currency Converter</a></li>
                </ul>
            </div>
            
            <div class="foot-column">
                <h3>Let Us Help You</h3>
                <ul>
                    <li><a href="${pagesPath}/customer-service.html">Help Center</a></li>
                    <li><a href="${pagesPath}/orders.html">Your Orders</a></li>
                    <li><a href="${pagesPath}/delivery.html">Shipping Rates & Policies</a></li>
                    <li><a href="${pagesPath}/orders.html">Returns & Replacements</a></li>
                    <li><a href="${pagesPath}/customer-service.html">Amazon Assistant</a></li>
                </ul>
            </div>
        </div>
        
        <div class="foot-divider"></div>
        
        <div class="foot-logo-section">
            <a href="${basePath}/index.html">
                <div class="foot-logo"></div>
            </a>
        </div>
        
        <div class="foot-bottom">
            <div class="foot-bottom-links">
                <a href="#">Conditions of Use</a>
                <a href="#">Privacy Notice</a>
                <a href="#">Your Ads Privacy Choices</a>
            </div>
            <div class="foot-copyright">
                <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
       </footer>
    `;
    document.getElementById('footer-container').innerHTML = footerHTML;
}

// Call the loadfooter function
document.addEventListener('DOMContentLoaded', loadfooter);