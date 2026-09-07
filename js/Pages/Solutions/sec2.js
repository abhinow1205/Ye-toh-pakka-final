export function solutions_sec2(){
    const CATEGORY_LABEL = {
    startup: "Startup",
    growing: "Growing Business",
    established: "Established Business",
    tailored: "Tailored"
  };

  // Structured dataset mapping requested solution items into categories
  const posts = [
    // ================= STARTUP =================
    {
      id: "startup-reporting-dashboards",
      category: "startup",
      title: "Reporting & Dashboards",
      desc: "Turn scattered spreadsheets into one live view of the business, updated automatically.",
      fit: "Reporting · BI",
      overview: {
        headline: "One dashboard instead of twelve spreadsheets",
        body: "We connect your early-stage tools—Stripe, QuickBooks, Google Analytics—into a unified reporting layer so founders and lead teams see real-time updates without manual exports.",
        chips: ["Live data refresh", "Zero manual spreadsheets", "Founder-friendly UI"]
      },
      problem: {
        headline: "Manual reporting steals precious founder hours",
        body: "Early teams waste hours pulling numbers together every week, leading to slow adjustments and unreliable figures.",
        pains: [
          "Hours spent every week stitching numbers together manually",
          "Lack of a single accurate metric for weekly team syncs",
          "Delayed visibility into burn rate and acquisition changes"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "A streamlined reporting system built around core early-stage health indicators.",
        mockups: [
          { type: "bar", caption: "Monthly revenue growth breakdown" },
          { type: "line", caption: "Customer acquisition trend" },
          { type: "kpi", caption: "Executive summary at a glance" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Reporting becomes automatic, giving leadership time back to focus on growth.",
        metrics: [
          { value: "6+ hrs", label: "Saved weekly on manual data pulling" },
          { value: "100%", label: "Real-time visibility into vital metrics" },
          { value: "< 1 day", label: "Time to identify metric anomalies" }
        ]
      }
    },
    {
      id: "startup-workflow-automation",
      category: "startup",
      title: "Workflow Automation",
      desc: "Replace repetitive manual steps with flows that run themselves automatically.",
      fit: "Ops automation",
      overview: {
        headline: "Automate internal handoffs and operational tasks",
        body: "We turn manual multi-step tasks—like user onboarding, lead routing, and notifications—into automated flows triggered instantly upon events.",
        chips: ["Zapier/Make integration", "Zero manual errors", "Instant task triggers"]
      },
      problem: {
        headline: "Manual tasks bottleneck operational speed",
        body: "As order volume or lead count grows, manual handling leads to missed leads, delayed onboarding, and human error.",
        pains: [
          "Leads remain unassigned for hours waiting on manual routing",
          "Manual customer data entry causes copy-paste errors",
          "Inconsistent team handoffs frustrate early adopters"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Reliable, event-driven workflows that keep operations moving automatically.",
        mockups: [
          { type: "flow", caption: "Automated lead intake and routing" },
          { type: "kpi", caption: "Time saved across operational tasks" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Operations scale smoothly without requiring immediate operational hires.",
        metrics: [
          { value: "70%", label: "Reduction in manual task steps" },
          { value: "< 5 min", label: "Lead response time turnaround" },
          { value: "0", label: "Data entry errors on automated flows" }
        ]
      }
    },
    {
      id: "startup-data-integration",
      category: "startup",
      title: "Data Integration",
      desc: "Connect your core app, CRM, and financial stack into a single data pipeline.",
      fit: "Data pipeline",
      overview: {
        headline: "Unify isolated tools into a synchronized stream",
        body: "We set up lightweight, cost-effective pipelines that stream data directly from your SaaS applications into a centralized database.",
        chips: ["Plug-and-play connectors", "Cost-efficient setup", "Automated sync"]
      },
      problem: {
        headline: "Siloed data blinds early strategic planning",
        body: "When customer data lives in CRM and product data lives in a production database, understanding user behavior becomes guesswork.",
        pains: [
          "Inability to join sales data with product usage statistics",
          "Duplicate customer records across marketing and finance",
          "Fragile CSV uploads used as temporary integration bridge"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Robust, connected pipelines consolidating your essential tools.",
        mockups: [
          { type: "flow", caption: "Continuous CRM-to-Database sync" },
          { type: "line", caption: "Data processing volume tracking" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "A clean, unified dataset ready for analysis and scaling.",
        metrics: [
          { value: "100%", label: "Data synchronization across key apps" },
          { value: "Near-instant", label: "Cross-system record updates" },
          { value: "0", label: "Manual export steps required" }
        ]
      }
    },
    {
      id: "startup-business-analytics",
      category: "startup",
      title: "Business Analytics",
      desc: "Gain actionable clarity on retention, unit economics, and customer acquisition costs.",
      fit: "Growth analytics",
      overview: {
        headline: "Actionable answers on unit economics and retention",
        body: "We implement analytics tailored for early-stage metrics—CAC, LTV, payback period, and cohort retention—to pinpoint growth drivers.",
        chips: ["Cohort analysis", "Unit economics", "Conversion funnels"]
      },
      problem: {
        headline: "Growing without clear unit economics insight",
        body: "Without accurate analytics, startups run the risk of spending heavily on user acquisition without understanding real lifetime value.",
        pains: [
          "Unclear understanding of customer acquisition cost dynamics",
          "Inability to measure retention cohorts across launch months",
          "Decisions made on vanity metrics rather than net retention"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Tailored analytical views highlighting growth, churn, and profitability.",
        mockups: [
          { type: "line", caption: "Cohort retention over 12 months" },
          { type: "bar", caption: "LTV vs. CAC by channel" },
          { type: "kpi", caption: "Payback Period tracking tile" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Confident capital allocation backed by validated metrics.",
        metrics: [
          { value: "3x", label: "Faster evaluation of marketing campaigns" },
          { value: "+25%", label: "Improved capital allocation efficiency" },
          { value: "100%", label: "Clarity on payback periods" }
        ]
      }
    },

    // ================= GROWING =================
    {
      id: "growing-automated-reporting",
      category: "growing",
      title: "Automated Reporting",
      desc: "Eliminate repetitive report assembly with automated schedules delivered right to Slack or inbox.",
      fit: "Automated dispatch",
      overview: {
        headline: "Scheduled, broadcast-ready reports delivered on time",
        body: "We automate report generation and distribution so executives, department leads, and stakeholders receive timely updates automatically.",
        chips: ["Scheduled emails/Slack", "PDF/CSV exports", "Role-based views"]
      },
      problem: {
        headline: "Mondays consumed by report preparation",
        body: "Mid-level managers spend whole mornings building weekly updates instead of executing strategic priorities.",
        pains: [
          "Endless copying and pasting from tools into slide decks",
          "Outdated reports reaching executive inboxes days late",
          "Inconsistent presentation formatting across departments"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Automated dispatch triggers sending formatted reports directly to key destinations.",
        mockups: [
          { type: "kpi", caption: "Daily summary push notification tile" },
          { type: "bar", caption: "Weekly performance breakdown" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Consistent executive alignment without operational lag.",
        metrics: [
          { value: "8+ hrs", label: "Saved weekly per department lead" },
          { value: "Mon 8AM", label: "Guaranteed deliverable readiness" },
          { value: "100%", label: "Format consistency across teams" }
        ]
      }
    },
    {
      id: "growing-business-process-automation",
      category: "growing",
      title: "Business Process Automation",
      desc: "Streamline multi-departmental approvals, order routing, and client onboarding.",
      fit: "Process optimization",
      overview: {
        headline: "Connect departmental handoffs into frictionless flows",
        body: "We map out complex operations across sales, finance, and delivery—creating end-to-end automated workflows that cut operational noise.",
        chips: ["Multi-step approvals", "CRM to ERP triggers", "SLA tracking"]
      },
      problem: {
        headline: "Hand-offs cause friction as headcount expands",
        body: "Growing teams struggle with cross-departmental bottlenecks, leading to delayed approvals and dissatisfied clients.",
        pains: [
          "Deals delayed waiting for manual finance approval",
          "Client onboarding stuck due to missing team notifications",
          "Lack of visibility into process completion statuses"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Custom process orchestration ensuring rapid execution across business lines.",
        mockups: [
          { type: "flow", caption: "Cross-department approval pipeline" },
          { type: "kpi", caption: "Average process cycle time" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Scalable operations capable of handling double the volume without added headcount.",
        metrics: [
          { value: "65%", label: "Faster end-to-end approval cycles" },
          { value: "2x", label: "Transaction volume capacity" },
          { value: "100%", label: "Audit trail transparency" }
        ]
      }
    },
    {
      id: "growing-business-intelligence",
      category: "growing",
      title: "Business Intelligence",
      desc: "Empower managers with interactive BI tools to drill down into operational trends.",
      fit: "Self-serve BI",
      overview: {
        headline: "Interactive visual analytics for cross-functional teams",
        body: "We deploy modern BI platforms (PowerBI, Tableau, Lightdash) structured around custom data models, letting teams explore metrics self-sufficiently.",
        chips: ["Self-serve queries", "Interactive filtering", "Granular permissions"]
      },
      problem: {
        headline: "Data teams overwhelmed by custom ad-hoc requests",
        body: "Data analysts become bottlenecked answering basic questions, while managers wait days for simple metric breakdowns.",
        pains: [
          "Data analysts buried under repetitive dashboard tweak requests",
          "Inability for sales managers to filter performance by region",
          "Slow decision-making due to delayed insight retrieval"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "A intuitive BI environment tailored to your organization's business logic.",
        mockups: [
          { type: "bar", caption: "Regional performance comparison chart" },
          { type: "line", caption: "Interactive trend exploration tool" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "A data-driven culture with instant, self-serve answers.",
        metrics: [
          { value: "80%", label: "Drop in basic ad-hoc data requests" },
          { value: "Minutes", label: "To explore complex metric variations" },
          { value: "100%", label: "Adoption across management tiers" }
        ]
      }
    },
    {
      id: "growing-data-integration-management",
      category: "growing",
      title: "Data Integration & Management",
      desc: "Establish clean data governance, staging layers, and automated transformation models.",
      fit: "Data governance",
      overview: {
        headline: "Structured data pipelines with automated validation checks",
        body: "We implement dbt transformation layers and data governance rules, ensuring clean, tested, and reliable data enters your analytics store.",
        chips: ["dbt models", "Data quality alerts", "Schema management"]
      },
      problem: {
        headline: "Dirty data leads to conflicting metrics and mistrust",
        body: "Duplicate entries, changing schemas, and unvalidated data leads teams to argue over whose numbers are right.",
        pains: [
          "Sales and Finance presenting conflicting revenue numbers",
          "Broken analytics charts due to unannounced schema updates",
          "Lack of data documentation or clear metric definitions"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "A fully modeled, reliable data pipeline with built-in automated quality testing.",
        mockups: [
          { type: "flow", caption: "Automated dbt transformation DAG" },
          { type: "kpi", caption: "Data freshness & health score" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Complete trust in company metrics backed by clear governance.",
        metrics: [
          { value: "99.9%", label: "Pipeline uptime and reliable refresh" },
          { value: "0", label: "Conflicting departmental reports" },
          { value: "1", label: "Standardized metric catalog" }
        ]
      }
    },
    {
      id: "growing-advanced-analytics",
      category: "growing",
      title: "Advanced Analytics",
      desc: "Leverage customer segmentation, basket analysis, and propensity scoring to lift revenue.",
      fit: "Predictive insights",
      overview: {
        headline: "Deep statistical models to identify revenue expansion opportunities",
        body: "We apply advanced statistical modeling—RFM analysis, customer lifetime value modeling, and churn risk scoring—to sharpen growth efforts.",
        chips: ["RFM Segmentation", "Churn propensity", "Cross-sell modeling"]
      },
      problem: {
        headline: "Treating all customer segments identically",
        body: "Generic marketing and sales reach-outs result in lower conversion rates and missed expansion opportunities.",
        pains: [
          "High-value churn caught only after accounts request cancellation",
          "Generic upsell emails sent without purchase affinity context",
          "Inefficient sales focus on low-conversion prospects"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Segmented customer scoring model integrated directly into your marketing tools.",
        mockups: [
          { type: "bar", caption: "Customer value segment breakdown" },
          { type: "kpi", caption: "Identified expansion revenue pipeline" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Targeted, high-converting growth campaigns driven by data.",
        metrics: [
          { value: "+18%", label: "Increase in customer retention" },
          { value: "2.4x", label: "Upsell conversion rate improvement" },
          { value: "Real-time", label: "Churn risk alert triggers" }
        ]
      }
    },

    // ================= ESTABLISHED =================
    {
      id: "established-enterprise-reporting-systems",
      category: "established",
      title: "Enterprise Reporting Systems",
      desc: "Scalable, secure, and compliance-ready reporting architectures across all business divisions.",
      fit: "Enterprise BI",
      overview: {
        headline: "Multi-entity enterprise reporting with granular security controls",
        body: "We architect multi-tenant, SOC2-compliant reporting portals that consolidate complex global entities, currencies, and business units smoothly.",
        chips: ["Row-level security", "Multi-entity consolidation", "SOC2 compliant"]
      },
      problem: {
        headline: "Complex organizational structures slow down corporate reporting",
        body: "Managing disparate currencies, subsidiaries, and strict access controls turns quarterly board prep into a painful ordeal.",
        pains: [
          "Manual consolidation of international financial statements",
          "Security risks around broad data permissions in legacy tools",
          "Sluggish performance on multi-terabyte analytical queries"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "A secure, high-performance enterprise analytics platform engineered for global scale.",
        mockups: [
          { type: "bar", caption: "Consolidated regional P&L view" },
          { type: "kpi", caption: "Global operational KPI summary" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Rapid board deck preparation and bulletproof data governance.",
        metrics: [
          { value: "10x", label: "Faster query speed on terabyte datasets" },
          { value: "100%", label: "Role-based security compliance" },
          { value: "Days → Hrs", label: "Quarterly consolidation turnaround" }
        ]
      }
    },
    {
      id: "established-operational-intelligence",
      category: "established",
      title: "Operational Intelligence",
      desc: "Real-time monitoring and anomaly detection to keep large-scale operations running smooth.",
      fit: "Real-time ops",
      overview: {
        headline: "Continuous monitoring with proactive anomaly detection",
        body: "We build real-time monitoring engines that track supply chain, platform, and transactional operations to flag deviations before they impact revenue.",
        chips: ["Streaming data feeds", "Automated alert triggers", "SLO/SLA dashboards"]
      },
      problem: {
        headline: "Reactive fixes cause costly operational downtime",
        body: "In large enterprises, operational outages or supply bottlenecks are often noticed hours after revenue impact has occurred.",
        pains: [
          "Supply chain delays discovered after customer order backlogs build up",
          "Transaction drops identified only during post-day reconciliation",
          "Alert fatigue caused by uncalibrated system notification systems"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Real-time intelligence dashboards with intelligent, noise-filtered alerting.",
        mockups: [
          { type: "line", caption: "Real-time system throughput & threshold alerts" },
          { type: "kpi", caption: "Operational uptime metrics" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Proactive issue resolution before operational impact occurs.",
        metrics: [
          { value: "-45%", label: "Reduction in mean time to resolution (MTTR)" },
          { value: "Real-time", label: "Incident detection and notification" },
          { value: "$100k+", label: "Saved in avoided outage costs" }
        ]
      }
    },
    {
      id: "established-process-automation",
      category: "established",
      title: "Process Automation",
      desc: "Enterprise-grade RPA and API integrations linking legacy systems and modern platforms.",
      fit: "RPA & API integrations",
      overview: {
        headline: "Bridge legacy mainframes with modern cloud environments",
        body: "We build automated bridges and robotic process workflows that tie together legacy ERPs, custom databases, and modern cloud applications.",
        chips: ["RPA bots", "Legacy system bridge", "High-throughput APIs"]
      },
      problem: {
        headline: "Legacy systems lock workforce in manual data bridging",
        body: "Core business functions rely on outdated software that lacks APIs, forcing teams into extensive re-keying work.",
        pains: [
          "Dedicated teams hired purely to transfer data between systems",
          "High human error rate during manual data re-entry",
          "Slow transaction processing due to batch-only transfers"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Resilient automated connectors operating continuous synchronization across systems.",
        mockups: [
          { type: "flow", caption: "Legacy ERP to Cloud API pipeline" },
          { type: "kpi", caption: "Daily automated transaction count" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Unlocked agility without replacing core legacy platforms.",
        metrics: [
          { value: "90%", label: "Reduction in manual re-keying tasks" },
          { value: "24/7", label: "Continuous background synchronization" },
          { value: "0%", label: "Data transcription error rate" }
        ]
      }
    },
    {
      id: "established-data-system-integration",
      category: "established",
      title: "Data and System Integration",
      desc: "Consolidate complex enterprise data infrastructure into a cloud warehouse architecture.",
      fit: "Cloud data warehouse",
      overview: {
        headline: "Unify enterprise data assets into Snowflake, BigQuery, or Databricks",
        body: "We design high-throughput ETL/ELT pipelines that centralize disparate enterprise databases, mainframe records, and cloud stores into one warehouse.",
        chips: ["Snowflake/Databricks", "Zero-downtime migration", "Scalable ELT"]
      },
      problem: {
        headline: "Siloed data lakes obstruct corporate-wide insights",
        body: "Acquisitions and departmental autonomy lead to fragmented data ecosystems that make unified governance impossible.",
        pains: [
          "Data scattered across legacy databases, cloud platforms, and data lakes",
          "Extremely long query times spanning multiple legacy systems",
          "High maintenance costs of aging on-premise data infrastructure"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "A modern, unified cloud data warehouse architecture supporting all analytics workloads.",
        mockups: [
          { type: "flow", caption: "Enterprise multi-source integration schema" },
          { type: "bar", caption: "Query performance benchmark comparison" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "A single, highly performant corporate source of truth.",
        metrics: [
          { value: "15 → 1", label: "Data repositories integrated" },
          { value: "-40%", label: "Data infrastructure maintenance overhead" },
          { value: "Sub-second", label: "Query performance response times" }
        ]
      }
    },
    {
      id: "established-predictive-analytics",
      category: "established",
      title: "Predictive Analytics",
      desc: "Machine learning models predicting customer churn, demand changes, and asset maintenance.",
      fit: "Enterprise ML models",
      overview: {
        headline: "Deploy machine learning models directly into business operations",
        body: "We train and deploy enterprise ML models—demand forecasting, predictive maintenance, and churn prevention—directly into operational tools.",
        chips: ["Custom ML pipelines", "Real-time scoring API", "Continuous retrain"]
      },
      problem: {
        headline: "Reactive operations lead to unnecessary expenses and customer loss",
        body: "Relying purely on historical reports means discovering customer churn or equipment failure after the financial loss occurs.",
        pains: [
          "Unplanned operational downtime due to unexpected equipment failure",
          "High customer churn rate discovered too late for intervention",
          "Inaccurate inventory planning driving storage costs up"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Production-ready predictive APIs integrated into core operational systems.",
        mockups: [
          { type: "line", caption: "Predicted vs actual demand curve" },
          { type: "kpi", caption: "Model accuracy score percentage" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Predictive foresight driving proactive, cost-saving operational decisions.",
        metrics: [
          { value: "+92%", label: "Forecast accuracy model reliability" },
          { value: "-25%", label: "Unplanned operational downtime" },
          { value: "$1.2M", label: "Annual savings in optimized inventory" }
        ]
      }
    },

    // ================= TAILORED =================
    {
      id: "tailored-automate",
      category: "tailored",
      title: "Automate",
      desc: "Custom operational automation engineered for your unique workflow rules.",
      fit: "Bespoke automation",
      overview: {
        headline: "Custom automation engineered around your exact operations",
        body: "When off-the-shelf automation tools can't handle your custom business logic, we code tailored, event-driven automation engines.",
        chips: ["Custom API development", "Bespoke logic engines", "High reliability"]
      },
      problem: {
        headline: "Standard automation tools break on complex logic",
        body: "Off-the-shelf tools fail when dealing with complex conditional rules, specialized calculations, or custom software platforms.",
        pains: [
          "Zapier/Make reaching structural complexity limitations",
          "Unique business logic forcing teams back into manual work",
          "Fragile webhooks failing without monitoring or error-handling"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Custom, resilient automation scripts and microservices with complete logging.",
        mockups: [
          { type: "flow", caption: "Tailored custom automation logic architecture" },
          { type: "kpi", caption: "Daily executed custom logic events" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Frictionless execution of even your most complex proprietary processes.",
        metrics: [
          { value: "100%", label: "Match with your exact business rules" },
          { value: "99.99%", label: "Execution reliability uptime" },
          { value: "0", label: "Manual fallback interventions needed" }
        ]
      }
    },
    {
      id: "tailored-centralize",
      category: "tailored",
      title: "Centralize",
      desc: "Bring custom data sources, legacy databases, and external APIs into one hub.",
      fit: "Custom unification",
      overview: {
        headline: "A single central hub for proprietary and non-standard data",
        body: "We construct centralized data hubs engineered to ingestion needs across custom databases, IoT devices, or non-standard APIs.",
        chips: ["Custom connectors", "Proprietary formats", "Central storage"]
      },
      problem: {
        headline: "Proprietary systems left disconnected from standard tools",
        body: "In-house software and specialized industry tools frequently lack standard connectors, leaving valuable data stranded.",
        pains: [
          "Valuable product telemetry locked inside internal databases",
          "Inability to join custom app data with third-party SaaS tools",
          "Expensive custom engineering required to pull basic reports"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Tailored ingestion connectors unifying all proprietary systems into one store.",
        mockups: [
          { type: "flow", caption: "Bespoke multi-system centralization pipeline" },
          { type: "bar", caption: "Ingested volume by data stream" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Complete visibility across both standard and proprietary operational data.",
        metrics: [
          { value: "100%", label: "Proprietary data source integration" },
          { value: "Single", label: "Unified access layer across systems" },
          { value: "Real-time", label: "Central data sync frequency" }
        ]
      }
    },
    {
      id: "tailored-visualize",
      category: "tailored",
      title: "Visualize",
      desc: "Custom-designed dashboards and white-labeled analytical portals for your clients.",
      fit: "Embedded analytics",
      overview: {
        headline: "Bespoke analytics interfaces tailored to your brand identity",
        body: "We build custom, embedded analytics portals and client-facing dashboards designed to match your brand style and product requirements.",
        chips: ["Embedded analytics", "Custom UI/UX", "White-label support"]
      },
      problem: {
        headline: "Standard BI templates look generic and disconnected from your product",
        body: "Out-of-the-box dashboards fail to offer the polished, tailored UI experience required for high-value client reporting.",
        pains: [
          "Generic BI dashboards clash with your application brand aesthetic",
          "Limited UI customization capabilities in off-the-shelf platforms",
          "Inability to embed interactive analytics into your client app"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Fully bespoke frontend analytical UI components integrated into your product.",
        mockups: [
          { type: "kpi", caption: "Custom white-labeled KPI metric tile" },
          { type: "line", caption: "Tailored brand-styled interactive chart" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "A seamless, branded analytical experience for internal and external users.",
        metrics: [
          { value: "100%", label: "Brand-aligned design integration" },
          { value: "+40%", label: "User engagement with reporting portal" },
          { value: "Native", label: "Embedded feel within client apps" }
        ]
      }
    },
    {
      id: "tailored-analyze",
      category: "tailored",
      title: "Analyze",
      desc: "Deep-dive diagnostic analytics solving specialized business problems.",
      fit: "Custom diagnostic",
      overview: {
        headline: "Bespoke diagnostic modeling for unique operational questions",
        body: "We conduct deep statistical analyses on complex challenges—such as dynamic pricing optimization, fraud detection, or route modeling.",
        chips: ["Custom algorithms", "Diagnostic modeling", "Tailored research"]
      },
      problem: {
        headline: "Complex operational questions go beyond standard metrics",
        body: "Unique business models face complex operational questions that standard SaaS analytics dashboards cannot solve.",
        pains: [
          "Uncertainty around pricing optimization boundaries",
          "Complex operational bottlenecks with unquantified root causes",
          "Inability to model multi-variable market behavior scenarios"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "Tailored analytical models providing explicit clarity on high-stakes decisions.",
        mockups: [
          { type: "line", caption: "Price elasticity simulation curve" },
          { type: "bar", caption: "Root cause variance distribution" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "Definitive, model-backed answers to your most strategic operational questions.",
        metrics: [
          { value: "Clear", label: "Quantified strategy recommendations" },
          { value: "+15%", label: "Margin uplift from optimized strategy" },
          { value: "100%", label: "Custom analysis tailored to your logic" }
        ]
      }
    },
    {
      id: "tailored-scale",
      category: "tailored",
      title: "Scale",
      desc: "Data infrastructure architecture built to handle massive growth and high throughput.",
      fit: "Scale architecture",
      overview: {
        headline: "Data infrastructure designed to sustain exponential growth",
        body: "We re-architect data pipelines and storage layers to support rapid user growth, high query concurrency, and massive data volume expansion.",
        chips: ["High concurrency", "Auto-scaling infrastructure", "Cost optimization"]
      },
      problem: {
        headline: "Growing data volume crashes legacy reporting platforms",
        body: "Rapid company growth often leads to timeouts, ballooning cloud warehouse bills, and broken reporting pipelines.",
        pains: [
          "Dashboard loading times slowing to a crawl during peak business hours",
          "Skyrocketing cloud database bills due to unoptimized queries",
          "Pipeline crashes when daily processing volumes surge"
        ]
      },
      deliver: {
        headline: "What you get",
        sub: "An auto-scaling, highly performant data architecture built for high volume.",
        mockups: [
          { type: "bar", caption: "Warehouse query latency under heavy load" },
          { type: "kpi", caption: "Infrastructure cost savings percentage" }
        ]
      },
      outcome: {
        headline: "What changes for the business",
        sub: "An enterprise-grade data foundation ready for infinite operational scale.",
        metrics: [
          { value: "10x", label: "Increase in query processing capacity" },
          { value: "-35%", label: "Reduction in monthly cloud compute spend" },
          { value: "99.99%", label: "Pipeline uptime during high spikes" }
        ]
      }
    }
  ];

  const TABS = [
    { key: "overview", label: "Overview", icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>` },
    { key: "problem", label: "The Problem", icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>` },
    { key: "deliver", label: "What We Deliver", icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/></svg>` },
    { key: "outcome", label: "Business Outcome", icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 6"/><polyline points="14 6 21 6 21 13"/></svg>` }
  ];

  const grid = document.getElementById("blogGrid");
  const tabs = document.querySelectorAll("#blogTabs .tab-btn");
  const overlayBackdrop = document.getElementById("overlayBackdrop");
  const overlayList = document.getElementById("overlayList");
  const overlayContent = document.getElementById("overlayContent");
  const overlayClose = document.getElementById("overlayClose");

  // Visual component mock renderers
  function renderMock(type) {
    if (type === "bar") {
      const heights = [38, 62, 45, 80, 55, 70];
      const bars = heights.map((h, i) => `<rect x="${i * 17 + 6}" y="${100 - h}" width="11" height="${h}" rx="2" fill="var(--accent)" opacity="${0.55 + (i % 3) * 0.15}"></rect>`).join("");
      return `<svg width="100%" height="100%" viewBox="0 0 110 100" preserveAspectRatio="none">${bars}</svg>`;
    }
    if (type === "line") {
      return `<svg width="100%" height="100%" viewBox="0 0 110 100" preserveAspectRatio="none">
        <polyline points="4,80 20,60 36,68 52,40 68,48 84,20 106,28" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <polygon points="4,80 20,60 36,68 52,40 68,48 84,20 106,28 106,100 4,100" fill="var(--accent)" opacity="0.12"/>
      </svg>`;
    }
    if (type === "flow") {
      return `<svg width="100%" height="100%" viewBox="0 0 110 100">
        <rect x="4" y="40" width="26" height="20" rx="4" fill="none" stroke="var(--accent)" stroke-width="2"/>
        <rect x="42" y="40" width="26" height="20" rx="4" fill="var(--accent)" opacity="0.7"/>
        <rect x="80" y="40" width="26" height="20" rx="4" fill="none" stroke="var(--accent)" stroke-width="2"/>
        <line x1="30" y1="50" x2="42" y2="50" stroke="var(--muted)" stroke-width="2"/>
        <line x1="68" y1="50" x2="80" y2="50" stroke="var(--muted)" stroke-width="2"/>
      </svg>`;
    }
    // Default KPI render
    return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:4px;">
      <div style="font-family:var(--font-display);font-size:1.6rem;color:var(--accent);">↑ 32%</div>
      <svg width="70" height="24" viewBox="0 0 70 24"><polyline points="0,20 12,14 24,17 36,8 48,12 60,3 70,6" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/></svg>
    </div>`;
  }

  // Render cards grid
  function renderGrid(filter) {
    const data = filter === "all" ? posts : posts.filter(p => p.category === filter);

    if (!data.length) {
      grid.innerHTML = `<div class="blog-empty">No solutions found in this section.</div>`;
      return;
    }

    grid.innerHTML = data.map(post => `
      <button class="interactive_card blog-card" data-id="${post.id}" data-category="${post.category}">
        <div>
          <div class="blog-card__meta">
            <span class="blog-card__tag">${CATEGORY_LABEL[post.category]}</span>
            <span class="blog-card__time">${post.fit}</span>
          </div>
          <h3 class="blog-card__title">${post.title}</h3>
          <p class="blog-card__desc">${post.desc}</p>
        </div>
        <div class="blog-card__footer">
          <span>View solution</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </button>
    `).join("");
  }

  // Render overlay tab list
  function renderTabRail() {
    overlayList.innerHTML = `<div class="rail-label">Explore solution details</div>` + TABS.map((t, i) => `
      <button data-tab="${t.key}" class="${i === 0 ? "active" : ""}">
        <span class="rail-icon">${t.icon}</span>
        <span class="item-title">${t.label}</span>
      </button>
    `).join("");
  }

  // Render content panes inside overlay
  function renderContent(post) {
    const accentVar = { startup: "var(--accent-2)", growing: "var(--accent)", established: "var(--accent-3)", tailored: "var(--accent-4)" }[post.category];

    const overviewPane = `
      <div class="overlay-pane active" data-pane="overview">
        <h3 class="ov-pane-headline">${post.overview.headline}</h3>
        <p class="ov-pane-sub">${post.overview.body}</p>
        <div class="ov-chip-row">
          ${post.overview.chips.map(c => `<span class="ov-chip"><span class="dot"></span>${c}</span>`).join("")}
        </div>
      </div>`;

    const problemPane = `
      <div class="overlay-pane" data-pane="problem">
        <h3 class="ov-pane-headline">${post.problem.headline}</h3>
        <p class="ov-pane-sub">${post.problem.body}</p>
        <div class="ov-problem-list">
          ${post.problem.pains.map(p => `
            <div class="ov-problem-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <p>${p}</p>
            </div>
          `).join("")}
        </div>
      </div>`;

    const deliverPane = `
      <div class="overlay-pane" data-pane="deliver">
        <h3 class="ov-pane-headline">${post.deliver.headline}</h3>
        <p class="ov-pane-sub">${post.deliver.sub}</p>
        <div class="ov-deliver-grid">
          ${post.deliver.mockups.map(m => `
            <div class="ov-mock-card">
              <div class="mock-canvas">${renderMock(m.type)}</div>
              <div class="mock-caption">${m.caption}</div>
            </div>
          `).join("")}
        </div>
      </div>`;

    const outcomePane = `
      <div class="overlay-pane" data-pane="outcome">
        <h3 class="ov-pane-headline">${post.outcome.headline}</h3>
        <p class="ov-pane-sub">${post.outcome.sub}</p>
        <div class="ov-outcome-grid">
          ${post.outcome.metrics.map(m => `
            <div class="ov-stat-card">
              <div class="stat-value">${m.value}</div>
              <div class="stat-label">${m.label}</div>
            </div>
          `).join("")}
        </div>
      </div>`;

    overlayContent.innerHTML = `
      <div class="ov-post-head" style="--tag-color:${accentVar}">
        <span class="tag">${CATEGORY_LABEL[post.category]}</span>
        <h2>${post.title}</h2>
        <span class="fit">${post.fit}</span>
      </div>
      <div class="ov-panes">
        ${overviewPane}${problemPane}${deliverPane}${outcomePane}
      </div>
    `;
  }

  function setActiveTab(key) {
    overlayList.querySelectorAll("button[data-tab]").forEach(b =>
      b.classList.toggle("active", b.dataset.tab === key)
    );
    overlayContent.querySelectorAll(".overlay-pane").forEach(pane =>
      pane.classList.toggle("active", pane.dataset.pane === key)
    );
  }

  function openOverlay(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;
    renderContent(post);
    overlayList.querySelectorAll("button[data-tab]").forEach((b, i) => b.classList.toggle("active", i === 0));
    overlayBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeOverlay() {
    overlayBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Filter tabs click listener
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderGrid(tab.dataset.filter);
    });
  });

  // Card click event delegation
  grid.addEventListener("click", e => {
    const card = e.target.closest(".blog-card");
    if (!card) return;
    openOverlay(card.dataset.id);
  });

  // Overlay tab rail click event listener
  overlayList.addEventListener("click", e => {
    const btn = e.target.closest("button[data-tab]");
    if (!btn) return;
    setActiveTab(btn.dataset.tab);
  });

  // Close handlers
  overlayClose.addEventListener("click", closeOverlay);
  overlayBackdrop.addEventListener("click", e => {
    if (e.target === overlayBackdrop) closeOverlay();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && overlayBackdrop.classList.contains("active")) closeOverlay();
  });

  // Init
  renderGrid("all");
  renderTabRail();
};

