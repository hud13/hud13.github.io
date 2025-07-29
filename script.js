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

document.querySelectorAll('.expandable').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('expandedImg');
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

document.querySelector('.modal .close').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = "none";
});

// Optional: click outside the image to close
document.getElementById('imageModal').addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = "none";
  }
});

 document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-nav');

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
      toggle.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
    });

    // Close menu after tapping a link (single-page sites)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  });