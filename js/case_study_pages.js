import { loadComponent } from "./loader.js";

import { initializeFixedBackground } from "./bg_comp.js";

import { initNavbar } from "./navbar_comp.js";

import { sec1_case_study_page } from "./case_study_page_sec1.js";

import { sec2_case_study_page } from "./case_study_page_sec2.js";

import { sec3_case_study_page } from "./case_study_page_sec3.js";



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

        loadComponent("case-study-page-sec1","./components/case_study_page_sec1.html"),

        loadComponent("case-study-page-sec2","./components/case_study_page_sec2.html"),

        loadComponent("case-study-page-sec3","./components/case_study_page_sec3.html"),

        loadComponent("case-study-page-sec4","./components/case_study_page_sec4.html"),

        loadComponent("case-study-page-sec5","./components/case_study_page_sec5.html"),

        loadComponent("case-study-page-sec6","./components/case_study_page_sec6.html"),

        loadComponent("case-study-page-sec7","./components/case_study_page_sec7.html"),

        loadComponent("case-study-page-sec8","./components/case_study_page_sec8.html"),

        loadComponent("case-study-page-sec9","./components/case_study_page_sec9.html"),

        loadComponent("case-study-page-sec10","./components/case_study_page_sec10.html"),

        loadComponent("case-study-page-sec11","./components/case_study_page_sec11.html"),

        loadComponent("case-study-page-sec12","./components/case_study_page_sec12.html"),


        loadComponent("footer-component","./components/footer_comp.html"),

    ]);

    initializeFixedBackground();

    initNavbar();

    sec1_case_study_page();

    sec2_case_study_page();

    sec3_case_study_page();


    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();