// Scroll-to-top button logic
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

// Toggle menu
burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  burger.classList.toggle('toggle');
});

// Close menu on link click
navLinks.querySelectorAll('li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    burger.classList.remove('toggle');
  });
});

// Close menu on overlay click
navOverlay.addEventListener('click', () => {
  navLinks.classList.remove('show');
  burger.classList.remove('toggle');
});
