function toggleDropdown(id) {
  const panel = document.getElementById(id);
  panel.style.display = (panel.style.display === 'flex' || panel.style.display === 'block') ? 'none' : 'flex';
}

function closeDropdown(id) {
  document.getElementById(id).style.display = 'none';
}