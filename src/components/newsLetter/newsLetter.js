const newsLetterTemplate = document.createElement('template');
newsLetterTemplate.innerHTML = `
<link href='/components/newsLetter/newsLetter.css' rel='stylesheet' type="text/css" />
<div class="main-news-letter">
<div class="news-letter-section-one">Join the Sooth family</div>
<div class="news-letter-section-two"></div>
<div class="news-letter-section-three">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</div>
<div class="news-letter-section-Four"><input type="text"/><button type="submit">Subscribe</button></div>

</div>
`

class newsLetter extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(newsLetterTemplate.content);
    }


}

export default newsLetter