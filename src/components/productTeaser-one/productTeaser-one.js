
class productTeaserOne extends HTMLElement {
    constructor() {
        super();

    }

    static get observedAttributes() {
        return ["product-teaser-comp-one", "product-teaser-comp-two", "product-teaser-comp-three"];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        var productTeaserOneTemplate = document.createElement('template');
        productTeaserOneTemplate.innerHTML = `
            <link href='/components/productTeaser-one/productTeaser-one.css' rel='stylesheet' type="text/css" />
                <div class="main-product-teaser">
                    <span class="product-category"></span>
                    <span class="shop-all-products">Shop all products</span>
                    <div class="products"></div>
                </div>`;

        var shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(productTeaserOneTemplate.content);

        var objDataOne = JSON.parse(this.attributes[attrName].value);
        console.log(objDataOne);
        var productCategory = objDataOne[0]['category']
        var dynamicDiv = "";

        for (let i = 0; i < objDataOne.length; i++) {

            dynamicDiv += `
                <div class="product-details">
                    <div class="img-div">
                    ${objDataOne[i]['category'] == 'Most Popular' ? "<div class='product-tag'>" + objDataOne[i]['tag'] + "</div>" : "<div class='product-tag' style='visibility: hidden;'></div>"}
                    <img src="${objDataOne[i]['img']}" class="product-img-class"/>
                </div>
                <p class="product-title">${objDataOne[i]['title']}</p>
                <p class="product-description">${objDataOne[i]['description']}</p>
                <p class="product-price">${objDataOne[i]['price']}</p>
                <button class="add-cart-button"><span class="cart-icon"></span><span class="cart-text">Add to cart</span></button>
                </div>
            `;
        }

        shadowRoot.querySelector(".product-category").innerHTML += productCategory;
        shadowRoot.querySelector(".products").innerHTML += dynamicDiv;
    }

};

export default productTeaserOne;