import { loadComponent } from "../../Universal/loader.js";

import { initNavbar } from "../../Universal/navbar.js";

import { initializeFixedBackground } from "../../Universal/fixed_bg.js";

import { section_header } from "../../Universal/section_header.js";

import { bottom_CTA } from "../../Universal/bottom_CTA.js";

import { blogs_sec1 } from "../../Pages/Blogs/sec1.js";

import { blogs_sec2 } from "../../Pages/Blogs/sec2.js";


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

        loadComponent("sec1-blogs","./components/Pages/Blogs/sec1.html"),

        loadComponent("sec2-blogs","./components/Pages/Blogs/sec2.html"),

        loadComponent("sec3-blogs","./components/Pages/Blogs/sec3.html"),



        loadComponent("footer-component","./components/Universal/footer.html"),

    ]);

    lucide.createIcons();

    initNavbar();

    initializeFixedBackground();

    section_header();

    blogs_sec1();

    blogs_sec2();

    bottom_CTA();


    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();