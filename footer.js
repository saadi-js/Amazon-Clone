function loadfooter() {
    const footerHTML = `
       <footer>
        <div class="foot1">
           <a href="#">Back To Top</a>
        </div>
        <div class="foot2">
            <ul>
                <p> Get to Know Us</p>
               <a> Careers</a>
             <a>Blog</a>
               <a> About Amazon</a>
               <a> Investor Relations</a>
                <a>Amazon Devices</a>
               <a> Amazon Science</a>
                 
            </ul>
            <ul>
                <p> Get to Know Us</p>
               <a> Careers</a>
             <a>Blog</a>
               <a> About Amazon</a>
               <a> Investor Relations</a>
                <a>Amazon Devices</a>
               <a> Amazon Science</a>
                 
            </ul>
            <ul>
                <p> Get to Know Us</p>
               <a> Careers</a>
             <a>Blog</a>
               <a> About Amazon</a>
               <a> Investor Relations</a>
                <a>Amazon Devices</a>
               <a> Amazon Science</a>
                 
            </ul>
            <ul>
                <p> Get to Know Us</p>
               <a> Careers</a>
             <a>Blog</a>
               <a> About Amazon</a>
               <a> Investor Relations</a>
                <a>Amazon Devices</a>
               <a> Amazon Science</a>
                 
            </ul>
        </div>
        <div class="foot3">
         <a href="index.html"> <div class="logo"></div></a>
        </div>
        <div class="foot4">
            <div class="pages">
                <A>Conditions of Use</A>
                <A>Privacy Notice</A>
                <A>Your Add Privacy choices</A>
            </div>
    
            <div class="copyright">
               <p> © 1996-2024, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
       </footer>
    `;
    document.getElementById('footer-container').innerHTML = footerHTML;}
//
// Call the loadfooter function
document.addEventListener('DOMContentLoaded', loadfooter);