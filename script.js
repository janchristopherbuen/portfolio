/* ===============================
SMOOTH SCROLL WITH OFFSET
=============================== */

const headerOffset = 80

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

const targetID = this.getAttribute("href")

if(targetID === "#") return

const targetElement = document.querySelector(targetID)

if(!targetElement) return

e.preventDefault()

const elementPosition = targetElement.getBoundingClientRect().top
const offsetPosition = elementPosition + window.pageYOffset - headerOffset

window.scrollTo({
top: offsetPosition,
behavior: "smooth"
})

})

})


/* ===============================
ACTIVE NAVIGATION LINK
=============================== */

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll", () => {

let current = ""

sections.forEach(section => {

const sectionTop = section.offsetTop - 120
const sectionHeight = section.clientHeight

if(pageYOffset >= sectionTop){
current = section.getAttribute("id")
}

})

navLinks.forEach(link => {

link.classList.remove("active")

if(link.getAttribute("href") === "#" + current){
link.classList.add("active")
}

})

})


/* ===============================
SCROLL REVEAL ANIMATION
=============================== */

const reveals = document.querySelectorAll(".project-card, .certificate-card, .skills-list li")

function revealOnScroll(){

const windowHeight = window.innerHeight

reveals.forEach(element => {

const elementTop = element.getBoundingClientRect().top
const revealPoint = 120

if(elementTop < windowHeight - revealPoint){
element.classList.add("active")
}

})

}

window.addEventListener("scroll", revealOnScroll)

revealOnScroll()
