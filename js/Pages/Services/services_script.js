import { loadComponent } from "../../Universal/loader.js";

import { initNavbar } from "../../Universal/navbar.js";

import { initializeFixedBackground } from "../../Universal/fixed_bg.js";

import { section_header } from "../../Universal/section_header.js";

import { bottom_CTA } from "../../Universal/bottom_CTA.js";

import { services_sec1 } from "../../Pages/Services/sec1.js";

import { services_sec2 } from "../../Pages/Services/sec2.js";

import { services_sec3 } from "../../Pages/Services/sec3.js";

import { services_sec4 } from "../../Pages/Services/sec4.js";

import { services_sec5 } from "../../Pages/Services/sec5.js";

import { services_sec6 } from "../../Pages/Services/sec6.js";

import { services_sec7 } from "../../Pages/Services/sec7.js";

import { services_sec8 } from "../../Pages/Services/sec8.js";

import { services_sec9 } from "../../Pages/Services/sec9.js";


import { footer_comp_common } from "../../Universal/footer.js";

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

        loadComponent("sec1-component","./components/Pages/Services/sec1.html"),

        loadComponent("sec2-component","./components/Pages/Services/sec2.html"),

        loadComponent("sec3-component","./components/Pages/Services/sec3.html"),

        loadComponent("sec4-component","./components/Pages/Services/sec4.html"),

        loadComponent("sec5-component","./components/Pages/Services/sec5.html"),

        loadComponent("sec6-component","./components/Pages/Services/sec6.html"),

        loadComponent("sec7-component","./components/Pages/Services/sec7.html"),

        loadComponent("sec8-component","./components/Pages/Services/sec8.html"),

        loadComponent("sec9-component","./components/Pages/Services/sec9.html"),


        loadComponent("footer-component","./components/Universal/footer.html"),

    ]);

    lucide.createIcons();

    initNavbar();

    initializeFixedBackground();

    section_header();

    services_sec1();

    services_sec2();

    services_sec3();

    services_sec4();

    services_sec5();

    services_sec6();

    services_sec7();

    services_sec8();

    services_sec9();

    bottom_CTA();

    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();