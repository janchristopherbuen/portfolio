document.addEventListener("DOMContentLoaded", () => {

initMobileMenu();
initScrollReveal();
initScrollProgress();

});

function initMobileMenu(){

const navbar=document.querySelector(".navbar");
const navLinks=document.querySelector(".nav-links");

if(!navbar || !navLinks) return;

const menuToggle=document.createElement("div");

menuToggle.className="menu-toggle";
menuToggle.innerHTML="☰";

menuToggle.setAttribute("aria-label","Toggle navigation menu");
menuToggle.setAttribute("aria-expanded","false");

navbar.appendChild(menuToggle);

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("nav-active");

const expanded=
menuToggle.getAttribute("aria-expanded")==="true";

menuToggle.setAttribute("aria-expanded",!expanded);

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{
navLinks.classList.remove("nav-active");
});

});

}

function initScrollReveal(){

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");
observer.unobserve(entry.target);

}

});

},{threshold:0.15});

const elements=document.querySelectorAll(
".project-card, .skill-badge, .certificate-card, .highlight"
);

elements.forEach(el=>observer.observe(el));

}

function initScrollProgress(){

const progressBar=document.createElement("div");

progressBar.className="scroll-progress";

document.body.appendChild(progressBar);

let ticking=false;

window.addEventListener("scroll",()=>{

if(!ticking){

window.requestAnimationFrame(()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

if(scrollHeight>0){

const percent=(scrollTop/scrollHeight)*100;

progressBar.style.width=percent+"%";

}

ticking=false;

});

ticking=true;

}

});

}
