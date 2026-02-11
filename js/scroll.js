// Select elements
const navbar = document.querySelector(".navbar");
const reveals = document.querySelectorAll(".reveal");

// Scroll Function
function onScroll() {

  // 🔥 Navbar Scroll Effect
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // 🔥 Reveal Animation
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });

}

// Event Listener
window.addEventListener("scroll", onScroll);

// Run once on load
onScroll();
