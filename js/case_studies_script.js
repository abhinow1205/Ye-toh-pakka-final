import { loadComponent } from "./loader.js";

import { initializeFixedBackground } from "./bg_comp.js";

import { initNavbar } from "./navbar_comp.js";

import { sec2_case_studies } from "./case_studies_sec2.js";

import { sec3_case_studies } from "./case_studies_sec3.js";

import { footer_comp_common } from "./footer_comp.js";

gsap.registerPlugin(
        ScrollTrigger,
        ScrollToPlugin,
        Draggable,
        MotionPathPlugin,
        Flip,
      );

async function initSite(){

    await Promise.all([

        loadComponent("fixed-bg-comp","./components/bg_comp.html"),

        loadComponent("navbar-component","./components/navbar_comp.html"),

        loadComponent("case-studies-sec1","./components/case_studies_sec1.html"),

        loadComponent("case-studies-sec2","./components/case_studies_sec2.html"),

        // loadComponent("case-studies-sec3","./components/case_studies_sec3.html"),


        loadComponent("footer-component","./components/footer_comp.html"),

    ]);

    initializeFixedBackground();

    initNavbar();

    sec2_case_studies();

    sec3_case_studies();

    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();