import { loadComponent } from "../../Universal/loader.js";

import { initNavbar } from "../../Universal/navbar.js";

import { initializeFixedBackground } from "../../Universal/fixed_bg.js";

import { section_header } from "../../Universal/section_header.js";

import { bottom_CTA } from "../../Universal/bottom_CTA.js";

import { solutions_sec1 } from "../../Pages/Solutions/sec1.js";

import { solutions_sec2 } from "../../Pages/Solutions/sec2.js";

import { solutions_sec3 } from "../../Pages/Solutions/sec3.js";

import { solutions_sec4 } from "../../Pages/Solutions/sec4.js";

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

        loadComponent("sec1-solutions","./components/Pages/Solutions/sec1.html"),

        loadComponent("sec2-solutions","./components/Pages/Solutions/sec2.html"),

        loadComponent("sec3-solutions","./components/Pages/Solutions/sec3.html"),

        loadComponent("sec4-solutions","./components/Pages/Solutions/sec4.html"),

        loadComponent("footer-component","./components/Universal/footer.html"),

    ]);

    lucide.createIcons();

    initNavbar();

    initializeFixedBackground();

    section_header();

    solutions_sec1();

    solutions_sec2();

    solutions_sec3();

    solutions_sec4();

    bottom_CTA();

    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();