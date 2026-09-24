export function case_studies_sec2(){
      // ---- Dummy data ----
  const caseStudies = [
    {
      title: "Media & News Monitoring System (Political Consultancy)",
      href: "./cs-media-monitoring-system.html",
      industry: "Agency",
      client: "Wilbert Creations",
      date: "2026-05-12",
      summary: "Automated news monitoring that tracks, filters, and delivers relevant updates."
    },
    {
      title: "Business Operating System for a Solo Founder",
      href: "./cs-business-operating-system.html",
      industry: "Agency",
      client: "Loopmark",
      date: "2026-06-12",
      summary: "A solo founder was running their business across a dozen scattered tools. Here's how we built them a single operating system for the whole business."
    },
    {
      title: "Workflow Automation with Approval & Auto-Execution",
      href: "./cs-workflow-automation.html",
      industry: "Logistics",
      client: "Vintage Operations",
      date: "2026-06-12",
      summary: "Automated workflows that track tasks, route approvals, and reduce manual delays."
    },
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
      const card = document.createElement('a');
      card.className = 'interactive_card cs-card';
      card.href = cs.href;
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
