      // Data Architecture Definitions
      const solutionsData = {
        startups: [
          {
            title: "Automated Reporting",
            desc: "Replace manual spreadsheet updates with real-time automated data delivery.",
            outcome: "Save 15+ hours/week",
            tag: "Foundational",
          },
          {
            title: "Dashboard & BI",
            desc: "Centralized early-stage metrics tracking key traction, burn, and growth indicators.",
            outcome: "Single source of truth",
            tag: "Visibility",
          },
          {
            title: "Workflow Automation",
            desc: "Connect core SaaS tools to process leads and user actions automatically.",
            outcome: "Zero operational lag",
            tag: "Velocity",
          },
          {
            title: "Data Integration",
            desc: "Unify primary app data, billing, and marketing platforms into one pipeline.",
            outcome: "Clean data ingestion",
            tag: "Infrastructure",
          },
          {
            title: "Analytics Foundation",
            desc: "Set up scalable tracking patterns designed to grow alongside your codebase.",
            outcome: "Future-proof setup",
            tag: "Architecture",
          },
        ],
        growing: [
          {
            title: "Automated Reporting",
            desc: "Cross-departmental schedule reports engineered for complex, multi-touch metrics.",
            outcome: "Eliminate error margins",
            tag: "Efficiency",
          },
          {
            title: "Dashboard & BI",
            desc: "Interactive role-specific views for executive, product, and sales teams.",
            outcome: "Fast leadership alignment",
            tag: "Visibility",
          },
          {
            title: "Workflow Automation",
            desc: "Multi-branch operational workflows carrying data across enterprise tools.",
            outcome: "Scale without headcount",
            tag: "Automation",
          },
          {
            title: "Data Integration",
            desc: "Robust ETL pipelines connecting custom databases with third-party software.",
            outcome: "Synchronized systems",
            tag: "Pipelines",
          },
          {
            title: "Predictive Analytics",
            desc: "Forecast customer churn, lifetime value, and demand patterns automatically.",
            outcome: "Proactive decisioning",
            tag: "Intelligence",
          },
        ],
        established: [
          {
            title: "Reporting Transformation",
            desc: "Modernize legacy reporting infrastructures into real-time analytical ecosystems.",
            outcome: "Modern tech stack",
            tag: "Transformation",
          },
          {
            title: "Business Intelligence",
            desc: "Enterprise-wide data modeling, governance, and self-serve dashboarding.",
            outcome: "Democratized data access",
            tag: "Enterprise BI",
          },
          {
            title: "Process Automation",
            desc: "End-to-end orchestration of complex core operations and compliance checks.",
            outcome: "Maximum enterprise agility",
            tag: "Orchestration",
          },
          {
            title: "Data Integration & Management",
            desc: "High-throughput data warehousing, governance layers, and security controls.",
            outcome: "Strict compliance & speed",
            tag: "Governance",
          },
          {
            title: "Advanced Analytics",
            desc: "Custom machine learning models integrated directly into daily operational tools.",
            outcome: "Competitive edge",
            tag: "AI / ML",
          },
        ],
      };

      // Card Renderer
      function renderSolutions(category) {
        const container = document.getElementById("solutions-container");
        const data = solutionsData[category];

        container.innerHTML = data
          .map(
            (item, index) => `
        <a href="#solution-detail" class="solution-card" data-index="${index}">
          <div>
            <div class="card-meta">
              <span class="card-tag">${item.tag}</span>
              <div class="card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.desc}</p>
          </div>
          <div class="card-footer">
            <span>Target: ${item.outcome}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </a>
      `,
          )
          .join("");

        // Mouse position track for card glow effect
        document.querySelectorAll(".solution-card").forEach((card) => {
          card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
            card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
          });
        });

        // Animate card entrance
        gsap.fromTo(
          ".solution-card",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
        );
      }

      // GSAP Scroll Animations Setup
      document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        // Initial tab render
        renderSolutions("startups");

        // Header Reveals
        gsap.from(".gsap-reveal", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });

        // Tab Controls Listener
        const tabs = document.querySelectorAll(".tab-btn");
        tabs.forEach((tab) => {
          tab.addEventListener("click", (e) => {
            tabs.forEach((t) => t.classList.remove("active"));
            e.target.classList.add("active");
            renderSolutions(e.target.dataset.category);
          });
        });
      });