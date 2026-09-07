import { loadComponent } from "../Universal/loader.js";

import { initNavbar } from "../Universal/navbar.js";

import { initializeFixedBackground } from "../Universal/fixed_bg.js";

import { bottom_CTA } from "../Universal/bottom_CTA.js";

import { services_comp } from "../Services/services.js";

import { footer_comp_common } from "../Universal/footer.js";

gsap.registerPlugin(
        ScrollTrigger,
        ScrollToPlugin,
        Draggable,
        MotionPathPlugin,
        Flip,
      );

async function initSite(){

    await Promise.all([

        loadComponent("navbar-component","./components/Universal/navbar.html"),

        loadComponent("fixed-bg-comp","./components/Universal/fixed_bg.html"),

        loadComponent("sec1-data-integration","./components/Services/Data Integration/sec1.html"),

        loadComponent("sec2-data-integration","./components/Services/Data Integration/sec2.html"),

        loadComponent("sec3-data-integration","./components/Services/Data Integration/sec3.html"),

        loadComponent("footer-component","./components/Universal/footer.html"),

    ]);

    lucide.createIcons();

    initNavbar();

    initializeFixedBackground();

    services_comp();

    bottom_CTA();

    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();