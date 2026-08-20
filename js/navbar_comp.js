/* ===================== DATA ===================== */
const navData = [
  { label: "Solutions", href: "solutions.html" },
  { label: "About Us", href: "about-us.html" },
  // { label: "Case Studies", href: "case-studies.html" },
  { label: "Blogs", href: "blog-page.html" },
  { label: "Contact", href: "contact-us.html" },
];

const chevronDownSvg =
  '<svg class="chevron" viewBox="0 0 24 24" width="14height="14"><path d="M6 9l6 6 6-6" fill="nonestroke="currentColor" stroke-width="2stroke-linecap="round" stroke-linejoin="round"/></svg>';
const chevronRightSvg =
  '<svg class="chevron chevron-right" viewBox="0 0 24 24width="14" height="14"><path d="M9 6l6 6-6 6" fill="nonestroke="currentColor" stroke-width="2stroke-linecap="round" stroke-linejoin="round"/></svg>';

export function initNavbar(){
    ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          const nav = document.getElementById("siteNav");
          if (self.direction === 1 && self.scroll() > 120) {
            gsap.to(nav, {
              yPercent: -100,
              duration: 0.35,
              ease: "power2.out",
            });
          } else {
            gsap.to(nav, { yPercent: 0, duration: 0.35, ease: "power2.out" });
          }
        },
      });

      function isCurrentPage(href) {
  if (!href || href === "#") return false;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const targetPage = href.split("/").pop();

  return currentPage === targetPage;
}

      /* ===================== DESKTOP RENDER ===================== */
      function renderDesktopTop(data) {
  return data
    .map((item) => {
      const hasChildren = item.children && item.children.length;
      const active = isCurrentPage(item.href);

      return `
        <li class="nav-item ${active ? "active" : ""}">
          <a href="${item.href || "#"}" class="nav-link">
            <span>${item.label}</span>
            ${hasChildren ? chevronDownSvg : ""}
          </a>
        ${
          hasChildren
            ? `
        <div class="dropdown-panel">
          <div class="dropdown-inner">
            <ul class="dropdown-list">
              ${item.children.map(renderDesktopSub).join("")}
            </ul>
          </div>
        </div>`
            : ""
        }
      </li>`;
          })
          .join("");
      }

      function renderDesktopSub(child) {
        const hasChildren = child.children && child.children.length;
        const body = `
    <span>
      <span class="dropdown-link-title">${child.label}</span>
      ${child.desc ? `<span class="dropdown-link-desc">${child.desc}</span>` : ""}
    </span>`;

        if (hasChildren) {
          return `
      <li class="dropdown-item has-flyout">
        <button type="button" class="dropdown-link">
          ${body}
          ${chevronRightSvg}
        </button>
        <div class="flyout-panel">
          <ul class="flyout-list">
            ${child.children.map((sub) => `<li><a href="${sub.href || "#"}" class="flyout-link">${sub.label}</a></li>`).join("")}
          </ul>
        </div>
      </li>`;
        }

        return `
    <li class="dropdown-item">
      <a href="${child.href || "#"}" class="dropdown-link">${body}</a>
    </li>`;
      }

      document.getElementById("desktopNavList").innerHTML =
        renderDesktopTop(navData);

      /* ===================== MOBILE RENDER ===================== */
      function renderMobile(data, depth) {
        return data
          .map((item) => {
            const hasChildren = item.children && item.children.length;
            if (hasChildren) {
              return `
        <li class="m-item" data-depth="${depth}">
          <button type="button" class="m-link">
            <span>${item.label}</span>
            ${chevronDownSvg}
          </button>
          <div class="m-panel">
            <div class="m-panel-inner">
              <ul>${renderMobile(item.children, depth + 1)}</ul>
            </div>
          </div>
        </li>`;
            }
            return `
      <li class="m-item" data-depth="${depth}">
        <a href="${item.href || "#"}" class="m-link m-leaf">${item.label}</a>
      </li>`;
          })
          .join("");
      }

      document.getElementById("mobileNavList").innerHTML = renderMobile(
        navData,
        0,
      );

      /* ===================== DESKTOP INTERACTIONS ===================== */
      const topItems = Array.from(
        document.querySelectorAll("#desktopNavList > .nav-item"),
      );

      // Align first/last dropdown panels so they don't overflow the viewport edge
      if (topItems.length) {
        const firstPanel = topItems[0].querySelector(
          ":scope > .dropdown-panel",
        );
        const lastPanel = topItems[topItems.length - 1].querySelector(
          ":scope > .dropdown-panel",
        );
        if (firstPanel) firstPanel.classList.add("align-start");
        if (lastPanel) {
          lastPanel.classList.add("align-end");
          lastPanel
            .querySelectorAll(":scope .has-flyout")
            .forEach((el) => el.classList.add("flyout-left"));
        }
      }

      function togglePin(el, siblings) {
        const wasPinned = el.classList.contains("pinned");
        siblings.forEach((sib) => {
          if (sib !== el) {
            sib.classList.remove("pinned");
            sib
              .querySelectorAll(".pinned")
              .forEach((nested) => nested.classList.remove("pinned"));
          }
        });
        if (wasPinned) {
          el.classList.remove("pinned");
          el.querySelectorAll(".pinned").forEach((nested) =>
            nested.classList.remove("pinned"),
          );
        } else {
          el.classList.add("pinned");
        }
      }

      function closeAllDesktopPins() {
        document
          .querySelectorAll(".navbar .pinned")
          .forEach((el) => el.classList.remove("pinned"));
      }

      topItems.forEach((item) => {
        const link = item.querySelector(":scope > .nav-link");
        link.addEventListener("click", (e) => {
          if (item.querySelector(":scope > .dropdown-panel")) {
            e.stopPropagation();
            togglePin(item, topItems);
          }
        });

        // level-3 flyout toggles, scoped to this top-level item's own submenu
        const flyoutParents = Array.from(item.querySelectorAll(".has-flyout"));
        flyoutParents.forEach((fp) => {
          const fpLink = fp.querySelector(":scope > .dropdown-link");
          const siblingGroup = Array.from(
            fp.parentElement.querySelectorAll(":scope > .has-flyout"),
          );
          fpLink.addEventListener("click", (e) => {
            e.stopPropagation();
            togglePin(fp, siblingGroup);
          });
        });

        // leaf links close everything after "navigating"
        item
          .querySelectorAll("a.dropdown-link, a.flyout-link")
          .forEach((leaf) => {
            leaf.addEventListener("click", (e) => {
              closeAllDesktopPins();
            });
          });
      });

      document.addEventListener("click", (e) => {
        if (!e.target.closest(".navbar")) closeAllDesktopPins();
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeAllDesktopPins();
      });

      /* ===================== MOBILE INTERACTIONS ===================== */
      const hamburgerBtn = document.getElementById("hamburgerBtn");
      const mobileOverlay = document.getElementById("mobileOverlay");
      const mobileNavList = document.getElementById("mobileNavList");
      let mobileOpen = false;

      function morphHamburger(open) {
        if (open) {
          gsap.to("#hamburgerBtn .bar1", {
            y: 9,
            rotate: 45,
            duration: 0.35,
            ease: "power2.inOut",
          });
          gsap.to("#hamburgerBtn .bar2", { opacity: 0, duration: 0.2 });
          gsap.to("#hamburgerBtn .bar3", {
            y: -9,
            rotate: -45,
            duration: 0.35,
            ease: "power2.inOut",
          });
        } else {
          gsap.to("#hamburgerBtn .bar1", {
            y: 0,
            rotate: 0,
            duration: 0.35,
            ease: "power2.inOut",
          });
          gsap.to("#hamburgerBtn .bar2", {
            opacity: 1,
            duration: 0.2,
            delay: 0.15,
          });
          gsap.to("#hamburgerBtn .bar3", {
            y: 0,
            rotate: 0,
            duration: 0.35,
            ease: "power2.inOut",
          });
        }
      }

      function collapseAllMobileAccordions() {
        mobileNavList.querySelectorAll(".m-item.open").forEach((li) => {
          li.classList.remove("open");
          const panel = li.querySelector(":scope > .m-panel");
          const chevron = li.querySelector(":scope > .m-link .chevron");
          gsap.set(panel, { height: 0 });
          if (chevron) gsap.set(chevron, { rotate: 0 });
        });
      }

      function openMobileOverlay() {
        mobileOpen = true;
        hamburgerBtn.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
        morphHamburger(true);

        gsap.set(mobileOverlay, { display: "block" });
        gsap.fromTo(
          mobileOverlay,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.35, ease: "power2.out" },
        );

        const items = mobileNavList.querySelectorAll(":scope > .m-item");
        gsap.fromTo(
          items,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.05,
            delay: 0.1,
            ease: "power3.out",
          },
        );
        gsap.fromTo(
          ".mobile-actions",
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            delay: 0.1 + items.length * 0.05,
            ease: "power3.out",
          },
        );
      }

      function closeMobileOverlay() {
        mobileOpen = false;
        hamburgerBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        morphHamburger(false);

        gsap.to(mobileOverlay, {
          autoAlpha: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(mobileOverlay, { display: "none" });
            collapseAllMobileAccordions();
          },
        });
      }

      hamburgerBtn.addEventListener("click", () => {
        if (mobileOpen) closeMobileOverlay();
        else openMobileOverlay();
      });

      function toggleMobileItem(li) {
        const isOpen = li.classList.contains("open");
        const panel = li.querySelector(":scope > .m-panel");
        const inner = panel.querySelector(":scope > .m-panel-inner");
        const chevron = li.querySelector(":scope > .m-link .chevron");

        if (isOpen) {
          li.classList.remove("open");
          gsap.to(panel, { height: 0, duration: 0.35, ease: "power2.inOut" });
          if (chevron) gsap.to(chevron, { rotate: 0, duration: 0.3 });
        } else {
          li.classList.add("open");
          const targetHeight = inner.offsetHeight;
          gsap.fromTo(
            panel,
            { height: 0 },
            { height: targetHeight, duration: 0.35, ease: "power2.inOut" },
          );
          if (chevron) gsap.to(chevron, { rotate: 180, duration: 0.3 });
        }
      }

      mobileNavList.querySelectorAll(".m-link:not(.m-leaf)").forEach((btn) => {
        btn.addEventListener("click", () =>
          toggleMobileItem(btn.closest(".m-item")),
        );
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth >= 960 && mobileOpen) closeMobileOverlay();
      });
}

