// Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Typing animation
const typingElement = document.getElementById("typing");
const roles = ["Suraj", "a Web Developer", "a Coder"];
let roleIndex = 0, charIndex = 0;

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex][charIndex++];
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length;
      type();
    }, 1500);
  }
}
type();

// Project filter
function filterProjects(type) {
  document.querySelectorAll(".project").forEach((proj) => {
    proj.style.display = (type === "all" || proj.classList.contains(type)) ? "block" : "none";
  });
}

// Navbar toggle for mobile
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}
