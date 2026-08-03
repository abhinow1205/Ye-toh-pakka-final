document.addEventListener('DOMContentLoaded', () => {
            // Initialize Lucide Icons
            lucide.createIcons();
        });

        // Function to handle switching between pillars
        function activatePillar(index) {
            // Update buttons state
            const buttons = document.querySelectorAll('.pillar-btn');
            buttons.forEach((btn, idx) => {
                if (idx === index) {
                    btn.className = "pillar-btn active w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 bg-slate-900 border-brand-500 text-white shadow-lg shadow-brand-500/10";
                } else {
                    btn.className = "pillar-btn w-full text-left p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 text-slate-400 hover:text-white hover:bg-slate-900 transition-all duration-300 flex items-start gap-4";
                }
            });

            // Fade out current views and show selected
            const views = document.querySelectorAll('.pillar-view');
            views.forEach((view, idx) => {
                if (idx === index) {
                    view.classList.remove('hidden');
                    // Uses GSAP to animate the entrance
                    gsap.fromTo(view, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
                } else {
                    view.classList.add('hidden');
                }
            });
        }

        // Function to handle the demo "Copy" toast functionality
        function copyCode(elementId) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-msg');
            
            // Perform simulated copy action with snippet notification
            toastMsg.innerText = "Section HTML snippet ready to integrate!";
            toast.classList.remove('translate-y-24', 'opacity-0');
            
            setTimeout(() => {
                toast.classList.add('translate-y-24', 'opacity-0');
            }, 3000);
        }