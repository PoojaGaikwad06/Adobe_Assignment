const imageTilesTemplate = document.createElement('template');
imageTilesTemplate.innerHTML = `
<link href='/components/imageTiles/imageTiles.css' rel='stylesheet' type="text/css" />
<div class="main-image-tiles">
    <div class="title-image-tiles">
        <p>We use the best ingredients</p>
        <p>Explore our innovative skincare products</p>
    </div>
    <div class="image-tiles-one">
        <img src="../Assets/11.png"/>
        <p class="img-title">Cacao</p>
        <p class="img-description">Lorem ipsum dolar et al</p>
    </div>
    <div class="image-tiles-two">
        <img src="../Assets/22.png"/>
        <p class="img-title">Honey</p>
        <p class="img-description">Lorem ipsum dolar et al</p>
    </div>
    <div class="image-tiles-three">
        <img src="../Assets/33.png"/>
        <p class="img-title">Mint</p>
        <p class="img-description">Lorem ipsum dolar et al</p>
    </div>
    <div class="image-tiles-four">
        <img src="../Assets/44.png"/>
        <p class="img-title">Coconut root</p>
        <p class="img-description">Lorem ipsum dolar et al</p>
    </div>
    <div class="image-tiles-five">
        <img src="../Assets/55.png"/>
        <p class="img-title">Flour</p>
        <p class="img-description">Lorem ipsum dolar et al</p>
    </div>
    <div class="image-tiles-six">
        <img src="../Assets/66.png"/>
        <p class="img-title">Cacao</p>
        <p class="img-description">Lorem ipsum dolar et al</p>
    </div>
</div>
`;

class imageTiles extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(imageTilesTemplate.content);
    }
}

export default imageTiles;