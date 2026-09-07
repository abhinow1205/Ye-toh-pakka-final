export function case_studies_sec2(){
      // ---- Dummy data ----
  const caseStudies = [
    {
      title: "Cutting claims processing time by 60%",
      industry: "Healthcare",
      client: "Meridian Health Network",
      date: "2026-05-12",
      summary: "How a regional health network automated claims intake and slashed processing time from days to hours."
    },
    {
      title: "Scaling fraud detection to 2M transactions a day",
      industry: "Finance",
      client: "Northbridge Capital",
      date: "2026-03-02",
      summary: "A mid-size fintech rebuilt its fraud detection pipeline to keep pace with rapid transaction growth."
    },
    {
      title: "Turning returns data into a 12% margin gain",
      industry: "Retail",
      client: "Solstice Apparel Co.",
      date: "2026-06-18",
      summary: "An apparel brand used return pattern analysis to cut inventory waste and improve margins."
    },
    {
      title: "Rerouting a fleet of 400 vehicles in real time",
      industry: "Logistics",
      client: "Ferrovia Freight",
      date: "2025-11-09",
      summary: "A freight company built a live rerouting system that adapts to traffic and weather instantly."
    },
    {
      title: "Personalized learning paths for 50,000 students",
      industry: "Education",
      client: "Brightline Learning",
      date: "2026-01-22",
      summary: "An edtech platform introduced adaptive learning paths that lifted course completion rates."
    },
    {
      title: "Reducing patient no-shows by a third",
      industry: "Healthcare",
      client: "Alden Family Clinics",
      date: "2025-09-14",
      summary: "A clinic network used predictive reminders to significantly cut missed appointments."
    },
    {
      title: "Automating reconciliation across 14 currencies",
      industry: "Finance",
      client: "Vantage Global Bank",
      date: "2026-04-27",
      summary: "A multinational bank replaced manual reconciliation with an automated, audit-ready workflow."
    },
    {
      title: "Rebuilding checkout to cut cart abandonment",
      industry: "Retail",
      client: "Northloop Home Goods",
      date: "2026-02-08",
      summary: "A home goods retailer redesigned checkout and recovered a meaningful share of lost sales."
    },
    {
      title: "Cutting warehouse pick times by 40%",
      industry: "Logistics",
      client: "Cascade Distribution",
      date: "2025-12-30",
      summary: "A distribution center reorganized picking routes using historical order data."
    },
    {
      title: "Bringing hybrid classrooms to rural districts",
      industry: "Education",
      client: "Prairie Unified School District",
      date: "2026-07-01",
      summary: "A rural school district rolled out hybrid classroom tools despite limited connectivity."
    }
  ];

  // ---- State ----
  let activeIndustry = 'all';
  let searchTerm = '';
  let sortMode = 'newest';

  // ---- DOM refs ----
  const grid = document.getElementById('grid');
  const resultsMeta = document.getElementById('resultsMeta');
  const emptyState = document.getElementById('emptyState');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  const filterButtons = document.querySelectorAll('#industryFilters button');

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  function render() {
    let items = caseStudies.filter(cs => {
      const matchesIndustry = activeIndustry === 'all' || cs.industry === activeIndustry;
      const matchesSearch =
        searchTerm === '' ||
        cs.title.toLowerCase().includes(searchTerm) ||
        cs.summary.toLowerCase().includes(searchTerm) ||
        cs.client.toLowerCase().includes(searchTerm);
      return matchesIndustry && matchesSearch;
    });

    items.sort((a, b) => {
      switch (sortMode) {
        case 'newest': return new Date(b.date) - new Date(a.date);
        case 'oldest': return new Date(a.date) - new Date(b.date);
        case 'az': return a.title.localeCompare(b.title);
        case 'za': return b.title.localeCompare(a.title);
        default: return 0;
      }
    });

    resultsMeta.textContent = `${items.length} case ${items.length === 1 ? 'study' : 'studies'} found`;

    grid.innerHTML = '';
    emptyState.style.display = items.length === 0 ? 'block' : 'none';

    items.forEach(cs => {
      const card = document.createElement('div');
      card.className = 'interactive_card cs-card';
      card.innerHTML = `
        <span class="industry-tag">${cs.industry}</span>
        <h3>${cs.title}</h3>
        <p>${cs.summary}</p>
        <div class="meta-row">
          <span class="client">${cs.client}</span>
          <span>${formatDate(cs.date)}</span>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // ---- Event listeners ----
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value.trim().toLowerCase();
    render();
  });

  sortSelect.addEventListener('change', (e) => {
    sortMode = e.target.value;
    render();
  });

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeIndustry = btn.getAttribute('data-industry');
      render();
    });
  });

  // ---- Initial render ----
  render();
}
