const teaserTwoTemplate = document.createElement('template');
teaserTwoTemplate.innerHTML = `
<link href='/components/teaser-two/teaser-two.css' rel='stylesheet' type="text/css" />
<div class="main-teaser-two">
    <div class="img-tea"></div>
    <div class="content-tea">
        <p class="tea-banner-title">All Natural Ingredients.</p>
        <p class="tea-banner-description">A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</p>
        <button type="submit" class="tea-sm-button">Shop more</button>
    </div>

</div>`;

class teaserTwo extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(teaserTwoTemplate.content);
    }

};

export default teaserTwo;