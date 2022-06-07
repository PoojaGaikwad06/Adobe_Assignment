import offerBanner from "./components/offerBanner/offerBanner.js";
import header from "./components/header/header.js";
import teaserOne from './components/teaser-one/teaser-one.js';
import secondaryBanner from './components/secondaryBanner/secondaryBanner.js';
import newsLetter from './components/newsLetter/newsLetter.js';
import footer from './components/footer/footer.js';
import featureBanner from './components/featureBanner/featureBanner.js';
import imageTiles from './components/imageTiles/imageTiles.js';
import teaserTwo from './components/teaser-two/teaser-two.js';
import productTeaserOne from './components/productTeaser-one/productTeaser-one.js';
import banner from './components/banner/banner.js';

customElements.define('offer-banner-component', offerBanner);
customElements.define('header-component', header);
customElements.define('teaser-one-component', teaserOne);
customElements.define('secondary-banner-component', secondaryBanner);
customElements.define('news-letter-component', newsLetter);
customElements.define('footer-component', footer);
customElements.define('feature-banner-component', featureBanner);
customElements.define('image-tiles-component', imageTiles);
customElements.define('teaser-two-component', teaserTwo);
customElements.define('product-teaser-one-component', productTeaserOne);
customElements.define('banner-component',banner);

const data = {
    "one": [
        {
            "tag": "New!",
            "img": "../Assets/Cream1-1@2x.png",
            "hoverImg": "",
            "title": "Acne Cream",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
            "category": "Most Popular"
        },
        {
            "tag": "New!",
            "img": "../Assets/vitiligio@2x.png",
            "hoverImg": "",
            "title": "Vitiligio Solution",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
            "category": "Most Popular"
        },
        {
            "tag": "New!",
            "img": "../Assets/ezcema-1@2x.png",
            "hoverImg": "",
            "title": "Ezcema Cream",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
            "category": "Most Popular"
        },
        {
            "tag": "15% off",
            "img": "../Assets/suburn1@2x.png",
            "hoverImg": "",
            "title": "Sunburn Ointment",
            "description": "All Natural Ingredients.",
            "price": "$18.99 <del> 24.99</del>",
            "category": "Most Popular"
        },
    ],
    "two": [
        {
            "tag": "15% off",
            "img": "../Assets/psoriasis_treatment@2x.png",
            "hoverImg": "",
            "title": "Psoriasis Cream",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
            "category": "Top rated"
        },
        {
            "tag": "15% off",
            "img": "../Assets/ezcema-1@2x.png",
            "hoverImg": "",
            "title": "Ezcema Cream",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
            "category": "Top rated"
        },
        {
            "tag": "15% off",
            "img": "../Assets/suburn1-1@2x.png",
            "hoverImg": "",
            "title": "Sunburn Ointment",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
            "category": "Top rated"
        },
        {
            "tag": "15% off",
            "img": "../Assets/vitiligio_Balm@2x.png",
            "hoverImg": "",
            "title": "Vitiligio Balm",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
            "category": "Top rated"
        },
        {
            "tag": "New!",
            "img": "../Assets/vitiligio@2x.png",
            "hoverImg": "",
            "title": "Vitiligio Solution",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
            "category": "Top rated"
        },
        {
            "tag": "New!",
            "img": "../Assets/Cream1-1@2x.png",
            "hoverImg": "",
            "title": "Acne Cream",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
        },

        {
            "tag": "New!",
                "img": "../Assets/acne_Cream@2x.png",
                "hoverImg": "",
                "title": "Acne Cream",
                "description": "All Natural Ingredients.",
                "price": "$24.99",
        },
        {
            "tag": "New!",
                "img": "../Assets/ezema_dropper@2x.png",
                "hoverImg": "",
                "title": "Ezcema Oil",
                "description": "All Natural Ingredients.",
                "price": "$24.99",
        },
    ],
    "three": [
        {
            "tag": "15% off",
            "img": "../Assets/psoriasis_treatment@2x.png",
            "hoverImg": "",
            "title": "Psoriasis Cream",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
            "category": "Recommended"
        },
        {
            "tag": "15% off",
            "img": "../Assets/222.png",
            "hoverImg": "",
            "title": "Sunburn Balm",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
            "category": "Recommended"
        },
        {
            "tag": "15% off",
            "img": "../Assets/psoriasi_Cream@2x.png",
            "hoverImg": "",
            "title": "Psoriasis Cream",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
            "category": "Recommended"
        },
        {
            "tag": "15% off",
            "img": "../Assets/vitiglio_treatment@3x.png",
            "hoverImg": "",
            "title": "Vitiligio Treatment",
            "description": "All Natural Ingredients.",
            "price": "$24.99",
            "category": "Recommended"
        },
    ]
}


document.getElementById("product-teaser-comp-one").setAttribute("product-teaser-comp-one", JSON.stringify(data.one));

document.getElementById("product-teaser-comp-two").setAttribute("product-teaser-comp-two", JSON.stringify(data.two));

document.getElementById("product-teaser-comp-three").setAttribute("product-teaser-comp-three", JSON.stringify(data.three));

