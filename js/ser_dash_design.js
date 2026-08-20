import { loadComponent } from "./loader.js";

import { initializeFixedBackground } from "./bg_comp.js";

import { initNavbar } from "./navbar_comp.js";

import { sec1_ser_aut_report } from "./services_sec1.js";

import { sec2_ser_aut_report } from "./services_sec2.js";

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

        loadComponent("dash-design-sect1","./components/ser_dash_design_sec1.html"),

        loadComponent("dash-design-sect2","./components/ser_dash_design_sec2.html"),

        loadComponent("footer-component","./components/footer_comp.html"),

    ]);

    initializeFixedBackground();

    initNavbar();

    sec1_ser_aut_report();

    sec2_ser_aut_report();

    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();