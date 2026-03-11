document.addEventListener("DOMContentLoaded", () => {

initMobileMenu();
initScrollReveal();
initScrollProgress();

});

/* ================================
MOBILE MENU
================================ */

function initMobileMenu(){

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

if(!navbar || !navLinks) return;

/* Prevent duplicate menu toggle */
if(navbar.querySelector(".menu-toggle")) return;

const menuToggle = document.createElement("button");

menuToggle.className = "menu-toggle";
menuToggle.innerHTML = "☰";

menuToggle.setAttribute("aria-label","Toggle navigation menu");
menuToggle.setAttribute("aria-expanded","false");
menuToggle.setAttribute("aria-controls","primary-navigation");

navLinks.id = "primary-navigation";

navbar.appendChild(menuToggle);

menuToggle.addEventListener("click", () => {

const isOpen = navLinks.classList.toggle("nav-active");

menuToggle.setAttribute("aria-expanded", isOpen);

});

/* Close menu when clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("nav-active");
menuToggle.setAttribute("aria-expanded","false");

});

});

/* Close menu with ESC key */

document.addEventListener("keydown", e => {

if(e.key === "Escape"){

navLinks.classList.remove("nav-active");
menuToggle.setAttribute("aria-expanded","false");

}

});

}

/* ================================
SCROLL REVEAL
================================ */

function initScrollReveal(){

const prefersReducedMotion =
window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if(prefersReducedMotion) return;

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");
observer.unobserve(entry.target);

}

});

},{ threshold:0.15 });

const elements = document.querySelectorAll(
".project-card, .skill-badge, .certificate-card, .highlight"
);

elements.forEach(el => observer.observe(el));

}

/* ================================
SCROLL PROGRESS BAR
================================ */

function initScrollProgress(){

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);

let ticking = false;

window.addEventListener("scroll", () => {

if(!ticking){

window.requestAnimationFrame(() => {

const doc = document.documentElement;

const scrollTop = doc.scrollTop;

const scrollHeight = doc.scrollHeight - doc.clientHeight;

if(scrollHeight > 0){

const percent = (scrollTop / scrollHeight) * 100;

progressBar.style.width = percent + "%";

}

ticking = false;

});

ticking = true;

}

},{ passive:true });

}
