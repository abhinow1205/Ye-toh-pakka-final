import { loadComponent } from "../../Universal/loader.js";

import { initNavbar } from "../../Universal/navbar.js";

import { initializeFixedBackground } from "../../Universal/fixed_bg.js";

import { section_header } from "../../Universal/section_header.js";

import { bottom_CTA } from "../../Universal/bottom_CTA.js";

import { case_studies_sec2 } from "../../Pages/Case Studies/sec2.js";

import { case_studies_sec3 } from "../../Pages/Case Studies/sec3.js";



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

        loadComponent("sec1-case-studies","./components/Pages/Case Studies/sec1.html"),

        loadComponent("sec2-case-studies","./components/Pages/Case Studies/sec2.html"),

        loadComponent("sec3-case-studies","./components/Pages/Case Studies/sec3.html"),



        loadComponent("footer-component","./components/Universal/footer.html"),

    ]);

    lucide.createIcons();

    initNavbar();

    initializeFixedBackground();

    section_header();

    case_studies_sec2();

    case_studies_sec3();

    bottom_CTA();


    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();