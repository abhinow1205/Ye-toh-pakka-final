import { loadComponent } from "./loader.js";

import { initializeFixedBackground } from "./bg_comp.js";

import { initNavbar } from "./navbar_comp.js";

import { sec1_about } from "./about_sec1.js";

import { sec2_about } from "./about_sec2.js";

import { sec3_about } from "./about_sec3.js";

import { sec4_about } from "./about_sec4.js";

import { sec5_about } from "./about_sec5.js";

import { sec6_about } from "./about_sec6.js";

// import { sec7_about } from "./about_sec7.js";

import { sec8_about } from "./about_sec8.js";

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

        loadComponent("about-sec1","./components/about_sec1.html"),

        loadComponent("about-sec2","./components/about_sec2.html"),

        loadComponent("about-sec3","./components/about_sec3.html"),

        loadComponent("about-sec4","./components/about_sec4.html"),

        loadComponent("about-sec5","./components/about_sec5.html"),

        // loadComponent("about-sec6","./components/about_sec6.html"),

        // loadComponent("about-sec7","./components/about_sec7.html"),

        // loadComponent("about-sec8","./components/about_sec8.html"),


        loadComponent("footer-component","./components/footer_comp.html"),

    ]);

    initializeFixedBackground();

    initNavbar();

    sec1_about();

    sec2_about();

    sec3_about();

    sec4_about();

    sec5_about();

    sec6_about();

    // sec7_about();

    sec8_about();


    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();