import { loadComponent } from "./loader.js";

import { initializeFixedBackground } from "./bg_comp.js";

import { initNavbar } from "./navbar_comp.js";

import { sec1_blog_post } from "./blog_post_sec1.js";

import { sec2_blog_post } from "./blog_post_sec2.js";

import { sec4_blog_post } from "./blog_post_sec4.js";


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

        loadComponent("blog-post-sec1","./components/blog_post_sec1.html"),


        loadComponent("footer-component","./components/footer_comp.html"),

    ]);

    initializeFixedBackground();

    initNavbar();

    sec1_blog_post();

    ScrollTrigger.refresh();

}

initSite();