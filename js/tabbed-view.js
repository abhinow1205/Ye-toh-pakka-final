const listButtons = document.querySelectorAll('#panelList button');
  const contentItems = document.querySelectorAll('.content-item');

  listButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      listButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      contentItems.forEach(item => {
        item.classList.toggle('active', item.id === targetId);
      });
    });
  });