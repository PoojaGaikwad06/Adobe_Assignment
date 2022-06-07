const featureBannerTemplate = document.createElement('template');
featureBannerTemplate.innerHTML = `
<link href='/components/featureBanner/featureBanner.css' rel='stylesheet' type="text/css" />
<div class="main-feature-banner">
    <div class="feature-banner-one">
        <i class="fa fa-university fa-2x" aria-hidden="true"></i>
        <p>We're offering new ways to shop.</p>
        <a href="">Store locator</a>    
    </div>
    <div class="feature-banner-two">
        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
        <p>Buy online, pickup in store</p>
        <a href="">Learn more</a>
    </div>
    <div class="feature-banner-three">
        <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
        <p>Curbside pickup</p>
        <a href="">Learn more</a>
    </div>

</div>
`;

class featureBanner extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(featureBannerTemplate.content);
    }

}

export default featureBanner;