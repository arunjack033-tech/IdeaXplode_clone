function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
function togglePromise(btn) {
  btn.parentElement.classList.toggle("active");
}
const testimonials = [
  {
    text: "I have worked with numerous offshore software consultants but Rathan’s team is at least 100 times better.",
    author: "Philip Bradley",
    role: "CTO, Lencomms Inc."
  },
  {
    text: "ideaXplode helped us launch faster than any team we’ve worked with.",
    author: "Startup Founder",
    role: "FinTech Company"
  }
];

let current = 0;

function updateTestimonial() {
  document.getElementById("quote").innerText = "“ " + testimonials[current].text + " ”";
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  updateTestimonial();
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}
