/* =================================================
   DOM READY
================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =================================================
     MOBILE NAVIGATION
  ================================================= */

  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");

  if (navbar && navLinks) {

    const menuToggle = document.createElement("div");
    menuToggle.className = "menu-toggle";
    menuToggle.innerHTML = "☰";

    navbar.appendChild(menuToggle);

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
    });

    /* close mobile menu after clicking link */

    document.querySelectorAll(".nav-links a").forEach(link => {

      link.addEventListener("click", () => {
        navLinks.classList.remove("nav-active");
      });

    });

  }

  /* =================================================
     SCROLL REVEAL ANIMATION
  ================================================= */

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");
        observer.unobserve(entry.target);

      }

    });

  }, observerOptions);


  const revealElements = document.querySelectorAll(
    ".project-card, .skill-badge, .certificate-card, .highlight"
  );

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  /* =================================================
     ACTIVE NAVIGATION HIGHLIGHT
  ================================================= */

  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }

    });

    navItems.forEach(link => {

      link.classList.remove("active");

      if (current && link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }

    });

  });

  /* =================================================
     SCROLL PROGRESS BAR
  ================================================= */

  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";

  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = scrollPercent + "%";

  });

});
