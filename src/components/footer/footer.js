const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<link href='/components/footer/footer.css' rel='stylesheet' type="text/css" />

<div class="main-footer">

    <div class="content-footer">
        <div class="content-footer-inner-one">
            <ul>
                <li>SHOP</li>
                <li><span>Lorem ipsum al</span></li>
                <li><span>Dolar at</span></li>
                <li><span>Veraotio</span></li>
                <li><span>Chauloe</span></li>
            </ul>
        </div>
        <div class="content-footer-inner-two">
            <ul>
                <li><span>ABOUT</span></li>
                <li><span>About Us</span></li>
                <li><span>Sooth Stories (Blog)</span></li>
                <li><span>Contact Us</span></li>
                <li><span>Learn More</span></li>
                <li><span>Stores</span></li>
            </ul>
        </div>
        <div class="content-footer-inner-three">
            <ul>
                <li><span>MORE</span></li>
                <li><span>Dolar at</span></li>
                <li><span>Lorem at al</span></li>
                <li><span>Veraotio</span></li>
            </ul>
        </div>
    </div>
    
    <div class="banner-footer">
        <div class="banner-footer-title">sooth</div>
        <div class="banner-footer-sub-title">Explore our innovative skincare products</div>
        <div class="banner-footer-controller">
            <input type="text" placeholder="Your email..."/>
            <button type="submit">Subscribe</button>
        </div>
    </div>
        
    <div class="horizontal-line-footer"></div>
    
    <div class="copy-rights-footer">    
        <div class="copy-rights-footer-one">SOOTH ALL RIGHTS RESERVED</div>
        <div class="copy-rights-footer-two">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
            <a href="">Contact Us</a>
        </div>
        <div class="copy-rights-footer-three">            
            <span><i class="fa fa-youtube fa-2x" aria-hidden="true"></i></span>
            <span><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></span>
            <span><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></span>
            <span><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></span>
        </div>   
    </div>
</div>
`;

class footer extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode:'closed'});
        shadowRoot.append(footerTemplate.content);
    }
}

export default footer

