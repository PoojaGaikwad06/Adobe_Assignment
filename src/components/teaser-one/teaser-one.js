const teaserOneTemplate = document.createElement('template');
teaserOneTemplate.innerHTML = ` 
<link href='/components/teaser-one/teaser-one.css' rel='stylesheet' type="text/css" />
<div class="mainTeaser">
    <div class="textTeaser">
        <div class="text-1">Clean products that deliver better solutions</div>
        <div class="text-2">A healthier you from the inside out. We've sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</div>
        <button class="shopMoreTeaser">Shop More</button>
    </div>
    <div class="imgTeaser"></div>
</div>
`;

class teaserOne extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(teaserOneTemplate.content);
    }

}

export default teaserOne;