import { loadComponent } from "../../Universal/loader.js";

import { initNavbar } from "../../Universal/navbar.js";

import { initializeFixedBackground } from "../../Universal/fixed_bg.js";

import { bottom_CTA } from "../../Universal/bottom_CTA.js";

import { section_header } from "../../Universal/section_header.js";

import { home_sec1 } from "../../Pages/Home/sec1.js";

import { home_sec2 } from "../../Pages/Home/sec2.js";

import { home_sec3 } from "../../Pages/Home/sec3.js";

import { home_sec4 } from "../../Pages/Home/sec4.js";

import { home_sec5 } from "../../Pages/Home/sec5.js";

import { home_sec6 } from "../../Pages/Home/sec6.js";

import { home_sec7 } from "../../Pages/Home/sec7.js";

import { home_sec8 } from "../../Pages/Home/sec8.js";

import { home_sec9 } from "../../Pages/Home/sec9.js";

import { home_sec10 } from "../../Pages/Home/sec10.js";

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

        loadComponent("sec1-component","./components/Pages/Home/sec1.html"),

        loadComponent("sec2-component","./components/Pages/Home/sec2.html"),

        loadComponent("sec3-component","./components/Pages/Home/sec3.html"),

        loadComponent("sec4-component","./components/Pages/Home/sec4.html"),

        loadComponent("sec5-component","./components/Pages/Home/sec5.html"),

        loadComponent("sec6-component","./components/Pages/Home/sec6.html"),

        loadComponent("sec7-component","./components/Pages/Home/sec7.html"),

        loadComponent("sec8-component","./components/Pages/Home/sec8.html"),

        loadComponent("sec9-component","./components/Pages/Home/sec9.html"),

        loadComponent("sec10-component","./components/Pages/Home/sec10.html"),

        loadComponent("footer-component","./components/Universal/footer.html"),

    ]);

    lucide.createIcons();

    initNavbar();

    initializeFixedBackground();
    
    section_header();

    home_sec1();

    home_sec2();

    home_sec3();

    home_sec4();

    home_sec5();

    home_sec6();

    home_sec7();

    home_sec8();

    home_sec9();

    home_sec10();

    bottom_CTA();

    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();