// Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// See More functionality for project descriptions
window.toggleDesc = function(btn) {
  const allDescs = document.querySelectorAll('.project-desc');
  const allShorts = document.querySelectorAll('.desc-short');
  const allFulls = document.querySelectorAll('.desc-full');
  const allBtns = document.querySelectorAll('.see-more-btn');
  // Determine if any are currently hidden
  const anyHidden = Array.from(allFulls).some(full => full.style.display === 'none');
  if (anyHidden) {
    allShorts.forEach(short => short.style.display = 'none');
    allFulls.forEach(full => full.style.display = 'inline');
    allBtns.forEach(b => b.textContent = 'See Less');
  } else {
    allShorts.forEach(short => short.style.display = 'inline');
    allFulls.forEach(full => full.style.display = 'none');
    allBtns.forEach(b => b.textContent = 'See More');
  }
};
