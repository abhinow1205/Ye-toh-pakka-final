import { loadComponent } from "./loader.js";

import { initializeFixedBackground } from "./bg_comp.js";

import { initNavbar } from "./navbar_comp.js";

import { sec1_contact_us } from "./contact_us_sec1.js";

import { sec2_contact_us } from "./contact_us_sec2.js";

import { sec3_contact_us } from "./contact_us_sec3.js";

import { sec4_contact_us } from "./contact_us_sec4.js";

import { sec5_contact_us } from "./contact_us_sec5.js";

import { sec6_contact_us } from "./contact_us_sec6.js";


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

        loadComponent("contact-us-sec1","./components/contact_us_sec1.html"),

        loadComponent("contact-us-sec2","./components/contact_us_sec2.html"),

        loadComponent("contact-us-sec3","./components/contact_us_sec3.html"),

        // loadComponent("contact-us-sec4","./components/contact_us_sec4.html"),

        loadComponent("contact-us-sec5","./components/contact_us_sec5.html"),

        loadComponent("contact-us-sec6","./components/contact_us_sec6.html"),


        loadComponent("footer-component","./components/footer_comp.html"),

    ]);

    initializeFixedBackground();

    initNavbar();

    sec1_contact_us();

    sec2_contact_us();

    sec3_contact_us();

    sec4_contact_us();

    sec5_contact_us();

    sec6_contact_us();


    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();