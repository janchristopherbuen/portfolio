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
