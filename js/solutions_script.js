import { loadComponent } from "./loader.js";

import { initializeFixedBackground } from "./bg_comp.js";

import { initNavbar } from "./navbar_comp.js";

import { sec1_sols } from "./sols_sec1.js";

import { sec2_sols } from "./sols_sec2.js";

import { sec3_sols } from "./sols_sec3.js";

import { sec4_sols } from "./sols_sec4.js";

import { sec5_sols } from "./sols_sec5.js";

import { sec6_sols } from "./sols_sec6.js";

import { sec7_sols } from "./sols_sec7.js";

import { sec8_sols } from "./sols_sec8.js";

import { sec9_sols } from "./sols_sec9.js";

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

        loadComponent("solutions-sect1","./components/sols_sec1.html"),

        loadComponent("solutions-sect2","./components/sols_sec2.html"),

        loadComponent("solutions-sect3","./components/sols_sec3.html"),

        loadComponent("solutions-sect4","./components/sols_sec4.html"),

        loadComponent("solutions-sect5","./components/sols_sec5.html"),

        loadComponent("solutions-sect6","./components/sols_sec6.html"),

        loadComponent("solutions-sect7","./components/sols_sec7.html"),

        loadComponent("solutions-sect8","./components/sols_sec8.html"),

        // loadComponent("solutions-sect8","./components/sols_sec9.html"),

        loadComponent("footer-component","./components/footer_comp.html"),

    ]);

    initializeFixedBackground();

    initNavbar();

    sec1_sols();

    sec2_sols();

    sec3_sols();

    sec4_sols();

    sec5_sols();

    sec6_sols();

    sec7_sols();

    sec8_sols();

    sec9_sols();


    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();