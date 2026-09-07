import { loadComponent } from "../../Universal/loader.js";

import { initNavbar } from "../../Universal/navbar.js";

import { initializeFixedBackground } from "../../Universal/fixed_bg.js";

import { section_header } from "../../Universal/section_header.js";

import { bottom_CTA } from "../../Universal/bottom_CTA.js";

import { contact_us_sec1 } from "../../Pages/Contact Us/sec1.js";

import { contact_us_sec2 } from "../../Pages/Contact Us/sec2.js";

import { contact_us_sec3 } from "../../Pages/Contact Us/sec3.js";

import { contact_us_sec4 } from "../../Pages/Contact Us/sec4.js";

import { contact_us_sec5 } from "../../Pages/Contact Us/sec5.js";

import { contact_us_sec6 } from "../../Pages/Contact Us/sec6.js";

import { contact_us_sec7 } from "../../Pages/Contact Us/sec7.js";



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

        loadComponent("sec1-contact-us","./components/Pages/Contact Us/sec1.html"),

        loadComponent("sec2-contact-us","./components/Pages/Contact Us/sec2.html"),

        loadComponent("sec3-contact-us","./components/Pages/Contact Us/sec3.html"),

        loadComponent("sec4-contact-us","./components/Pages/Contact Us/sec4.html"),

        loadComponent("sec5-contact-us","./components/Pages/Contact Us/sec5.html"),

        loadComponent("sec6-contact-us","./components/Pages/Contact Us/sec6.html"),

        loadComponent("sec7-contact-us","./components/Pages/Contact Us/sec7.html"),


        loadComponent("footer-component","./components/Universal/footer.html"),

    ]);

    lucide.createIcons();

    initNavbar();

    initializeFixedBackground();

    section_header();

    contact_us_sec1();

    contact_us_sec2();

    contact_us_sec3();

    contact_us_sec4();

    contact_us_sec5();

    contact_us_sec6();

    contact_us_sec7();

    bottom_CTA();


    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();