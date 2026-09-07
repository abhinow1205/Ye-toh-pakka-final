export function home_sec5() {

    // Initialize Lucide icons
    lucide.createIcons();

    // Cache DOM elements
    const buttons = document.querySelectorAll(".pillar-btn");
    const views = document.querySelectorAll(".pillar-view");

    // Function to switch between pillars
    function activatePillar(index) {

        // Update button state
        buttons.forEach((btn, idx) => {
            if (idx === index) {
                btn.className =
                    "pillar-btn active w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 bg-slate-900 border-brand-500 text-white shadow-lg shadow-brand-500/10";
            } else {
                btn.className =
                    "pillar-btn w-full text-left p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 text-slate-400 hover:text-white hover:bg-slate-900 transition-all duration-300 flex items-start gap-4";
            }
        });

        // Update content panels
        views.forEach((view, idx) => {
            if (idx === index) {
                view.classList.remove("hidden");

                gsap.fromTo(
                    view,
                    {
                        opacity: 0,
                        y: 15
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    }
                );
            } else {
                view.classList.add("hidden");
            }
        });
    }

    // Attach click events to each button
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            activatePillar(index);
        });
    });

    // Set the first pillar as active when the component loads
    if (buttons.length > 0) {
        activatePillar(0);
    }

}