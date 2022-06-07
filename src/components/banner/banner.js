const bannerTemplate = document.createElement('template');
bannerTemplate.innerHTML = ` 
<link href='/components/banner/banner.css' rel='stylesheet' type="text/css" />
<div class="main-banner">
    <div class="mob-banner"></div>
    <div class="banner-content">
        <div class="new-content">New!</div>
        <div class="banner-title">All Natural <br/> Skin Remedies.</div>
        <div class="banner-discription">A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</div>
        <div class="banner-btn">Shop products</div>
    </div>
</div>
`;

class banner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(bannerTemplate.content);
    }

}

export default banner;