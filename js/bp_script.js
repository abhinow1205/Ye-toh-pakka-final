import { loadComponent } from "./loader.js";

import { initializeFixedBackground } from "./bg_comp.js";

import { initNavbar } from "./navbar_comp.js";

import { sec1_bp } from "./bp_sec1.js";

import { sec2_bp } from "./bp_sec2.js";

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

        loadComponent("bp-sec1","./components/bp_sec1.html"),

        loadComponent("bp-sec2","./components/bp_sec2.html"),


        loadComponent("footer-component","./components/footer_comp.html"),

    ]);

    initializeFixedBackground();

    initNavbar();

    sec1_bp();

    sec2_bp();


    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();