import { loadComponent } from "../../Universal/loader.js";

import { initNavbar } from "../../Universal/navbar.js";

import { initializeFixedBackground } from "../../Universal/fixed_bg.js";

import { section_header } from "../../Universal/section_header.js";

import { bottom_CTA } from "../../Universal/bottom_CTA.js";

import { about_sec1 } from "../../Pages/About/sec1.js";

import { about_sec2 } from "../../Pages/About/sec2.js";

import { about_sec3 } from "../../Pages/About/sec3.js";

import { about_sec4 } from "../../Pages/About/sec4.js";

import { about_sec5 } from "../../Pages/About/sec5.js";

import { about_sec6 } from "../../Pages/About/sec6.js";

import { about_sec7 } from "../../Pages/About/sec7.js";

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

        loadComponent("sec1-about","./components/Pages/About/sec1.html"),

        loadComponent("sec2-about","./components/Pages/About/sec2.html"),

        loadComponent("sec3-about","./components/Pages/About/sec3.html"),

        loadComponent("sec4-about","./components/Pages/About/sec4.html"),

        loadComponent("sec5-about","./components/Pages/About/sec5.html"),

        loadComponent("sec6-about","./components/Pages/About/sec6.html"),

        loadComponent("sec7-about","./components/Pages/About/sec7.html"),

        loadComponent("sec8-about","./components/Pages/About/sec8.html"),


        loadComponent("footer-component","./components/Universal/footer.html"),

    ]);

    lucide.createIcons();

    initNavbar();

    initializeFixedBackground();

    section_header();

    about_sec1();

    about_sec2();

    about_sec3();

    about_sec4();

    about_sec5();

    about_sec6();

    about_sec7();

    bottom_CTA();


    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();