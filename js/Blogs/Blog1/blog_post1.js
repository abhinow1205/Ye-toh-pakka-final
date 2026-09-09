import { loadComponent } from "../../Universal/loader.js";

import { initNavbar } from "../../Universal/navbar.js";

import { initializeFixedBackground } from "../../Universal/fixed_bg.js";

import { section_header } from "../../Universal/section_header.js";

import { bottom_CTA } from "../../Universal/bottom_CTA.js";

import { blog_body1 } from "./blog_body1.js";

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

        loadComponent("navbar-component","../components/Universal/navbar.html"),

        loadComponent("fixed-bg-comp","../components/Universal/fixed_bg.html"),

        loadComponent("blog1-body","../components/Blogs/bp1.html"),

        loadComponent("footer-component","../components/Universal/footer.html"),

    ]);

    lucide.createIcons();

    initNavbar();

    initializeFixedBackground();

    section_header();

    blog_body1();

    bottom_CTA();

    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();