import { loadComponent } from "../Universal/loader.js";

import { initNavbar } from "../Universal/navbar.js";

import { initializeFixedBackground } from "../Universal/fixed_bg.js";

import { section_header } from "../Universal/section_header.js";

import { bottom_CTA } from "../Universal/bottom_CTA.js";

import { case_studies_post_script } from "../Case Studies/case_studies_post_script.js";

import { footer_comp_common } from "../Universal/footer.js";

gsap.registerPlugin(
        ScrollTrigger,
        ScrollToPlugin,
        Draggable,
        MotionPathPlugin,
        Flip,
      );

async function initSite(){

    await Promise.all([

        loadComponent("navbar-component","../components/Universal/navbar.html"),

        loadComponent("fixed-bg-comp","../components/Universal/fixed_bg.html"),

        loadComponent("cs3-body","../components/Case Studies/cs3.html"),

        loadComponent("footer-component","../components/Universal/footer.html"),

    ]);

    lucide.createIcons();

    initNavbar();

    initializeFixedBackground();

    section_header();

    case_studies_post_script();

    bottom_CTA();

    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();