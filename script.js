function toggleDropdown(id) {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(d => {
    d.style.display = (d.id === id && d.style.display !== 'flex') ? 'flex' : 'none';
  });
}

function toggleDropdown(id, btn) {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  const buttons = document.querySelectorAll('.dropdown-toggle');

  dropdowns.forEach(d => {
    d.style.display = (d.id === id && d.style.display !== 'flex') ? 'flex' : 'none';
  });

  buttons.forEach(b => b.classList.remove('active'));

  // Only mark as active if corresponding dropdown is now open
  const isNowOpen = document.getElementById(id).style.display === 'flex';
  if (isNowOpen) {
    btn.classList.add('active');
  }
}