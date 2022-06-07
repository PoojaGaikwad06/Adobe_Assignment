const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link href='/components/header/header.css' rel='stylesheet' type="text/css" />


        <!--Desktop-->
        <div class="aem-Grid aem-Grid--12 outerHeader">

        <div class="innerHeader-1">
            <div class="menuBar-1 about"><span>ABOUT</span></div>
            <div class="menuBar-1 consultation"><span>CONSULTATION</span></div>
            <div class="menuBar-1 sooth"><span>sooth</span></div>
            <div class="menuBar-1 search"><span><i class="fa fa-search" aria-hidden="true"></i></span></div>
            <div class="menuBar-1 cart"><span>CART</span></div>
            <div class="menuBar-1 login"><span>LOGIN</span></div>
        </div>
        
        <div class="innerHeader-2">
            <div class="menuBar-2"><span>Acne</span></div>
            <div class="menuBar-2"><span>Sun</span></div>
            <div class="menuBar-2"><span>Ezcema</span></div>
            <div class="menuBar-2"><span>Psoriasis</span></div>
            <div class="menuBar-2"><span>Vitiligio</span></div>
        </div>

        
        </div>

        <!--mobile/tablet-->

        <div class="aem-Grid aem-Grid--12 mobileOutter">
            <div class="mobileInner">
                <div class="iconMenu"><span><i class="fa fa-bars" id="sidebarClickIcon" aria-hidden="true"></i></span></div>
                <div class="mobSooth"><span>sooth</span></div> 
                <div class="mobSearch"><span><i class="fa fa-search" aria-hidden="true"></i></span></div>
                <div class="mobCart"><span>CART</span></div>        
            </div>        
        </div>

        <div class="sideMenuBarOutter">
            <div class="sideMenuBarInner">
                <div class="topMenuSideBar">
                    <div class="cancleButton"><span><i class="fa fa-times" id="sidebarClickCancleIcon" aria-hidden="true"></i></span></div>
                    <div class="mobSearchSide"><span><i class="fa fa-search" aria-hidden="true"></i></span></div>
                    <div class="mobCartSide"><span>CART</span></div>
                </div>
                
                <div class="acneSide"><span>Acne</span></div>
                <div class="sunSide"><span>Sun</span></div>
                <div class="ezcemaSide"><span>Ezcema</span></div>
                <div class="psoriasisSide"><span>Psoriasis</span></div>
                <div class="vitiligioSide"><span>Vitiligio</span></div>
                <div class="aboutSide"><span>ABOUT</span></div>
                <div class="consultationSide"><span>CONSULTATION</span></div>
            </div>           
        </div> 
`;

class header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let flag = false;
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(headerTemplate.content);

        shadowRoot.addEventListener('click', (ev) => {
            if (ev.target.id == 'sidebarClickIcon' || ev.target.id == 'sidebarClickCancleIcon') {
                flag = !flag;
                shadowRoot.querySelector(".sideMenuBarOutter").style.display = flag ? "block" : "none";
                shadowRoot.querySelector(".mobileOutter").style.display = flag ? "none" : "block";
            }
        })

        window.addEventListener("resize", (ev) => {

            // console.log(`width:${document.body.clientWidth}`);

            if (document.body.clientWidth > 768) {
                shadowRoot.querySelector(".sideMenuBarOutter").style.display = "none";
                shadowRoot.querySelector(".mobileOutter").style.display = "none";
            } else {
                shadowRoot.querySelector(".mobileOutter").style.display = "block";
            }


        })

    }

}



export default header;