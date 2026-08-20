import { loadComponent } from "./loader.js";

import { initializeFixedBackground } from "./bg_comp.js";

import { initNavbar } from "./navbar_comp.js";

import { home_hero_sec } from "./homepage_hero.js";

import { sec2_home } from "./home_sec2.js";

import { sec3_home } from "./home_sec3.js";

import { sec4_home } from "./home_sec4.js";

import { sec5_home } from "./home_sec5.js";

import { sec6_home } from "./home_sec6.js";

import { sec7_home } from "./home_sec7.js";

import { sec8_home } from "./home_sec8.js";

import { sec9_home } from "./home_sec9.js";

import { sec10_home } from "./home_sec10.js";

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

        loadComponent("home-hero-sec","./components/homepage_hero.html"),

        loadComponent("home-sect2","./components/home_sec2.html"),

        loadComponent("home-sect3","./components/home_sec3.html"),

        loadComponent("home-sect4","./components/home_sec4.html"),

        loadComponent("home-sect5","./components/home_sec5.html"),

        // loadComponent("home-sect6","./components/home_sec6.html"),

        loadComponent("home-sect7","./components/home_sec7.html"),

        loadComponent("home-sect8","./components/home_sec8.html"),

        loadComponent("home-sect9","./components/home_sec9.html"),

        loadComponent("home-sect10","./components/home_sec10.html"),

        loadComponent("footer-component","./components/footer_comp.html"),

    ]);

    initializeFixedBackground();

    initNavbar();

    home_hero_sec();

    sec2_home();

    sec3_home();

    sec4_home();

    sec5_home();

    sec6_home();

    sec7_home();

    sec8_home();

    sec9_home();

    sec10_home();

    footer_comp_common();

    ScrollTrigger.refresh();

}

initSite();