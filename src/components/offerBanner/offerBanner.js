const offerBannerTemplate = document.createElement('template');
offerBannerTemplate.innerHTML = `
<link href='/components/offerBanner/offerBanner.css' rel='stylesheet' type="text/css" />
        <div class="aem-Grid aem-Grid--12 outerOfferBanner">
            <div class="aem-GridColumn aem-GridColumn--default--12 headline-5-—-18pt innerOfferBanner">Free Standard Shipping on orders over $99.99</div>
        </div>
`;

class offerBanner extends HTMLElement {
    constructor() {
        super(); // Always call super first in constructor
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(offerBannerTemplate.content);
    }
}

export default offerBanner

