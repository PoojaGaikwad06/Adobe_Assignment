const secondaryBannerTemplate = document.createElement('template');
secondaryBannerTemplate.innerHTML = `
<link href='/components/secondaryBanner/secondaryBanner.css' rel='stylesheet' type="text/css" />
<div class="mainSecBan" >
<div class="text-sec-ban-1">Solutions for all skin health</div>
<div class="text-sec-ban-2">Explore our innovative skincare products</div>
</div>

`;

class secondaryBanner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.appendChild(secondaryBannerTemplate.content);
    }
}

export default secondaryBanner;