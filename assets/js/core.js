export function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const currentPath = window.location.pathname.replace(/\/+$/, "");
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const href = new URL(link.getAttribute("href"), window.location.href).pathname.replace(/\/+$/, "");
    if (href === currentPath || (href.endsWith("/index.html") && currentPath.endsWith("/"))) {
      link.setAttribute("aria-current", "page");
    }
  });
}

export function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
}

export function initYear() {
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

export function initProjectLightbox() {
  const triggers = Array.from(document.querySelectorAll(".project-showcase__trigger"));
  if (!triggers.length) {
    return;
  }

  let previousActive = null;
  let activeTrigger = null;

  const lightbox = document.createElement("div");
  lightbox.className = "project-lightbox";
  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <div class="project-lightbox__dialog" role="dialog" aria-modal="true" aria-labelledby="project-lightbox-title">
      <button class="project-lightbox__close" type="button" aria-label="Close image preview">×</button>
      <figure class="project-lightbox__figure">
        <img class="project-lightbox__image" alt="">
        <figcaption class="project-lightbox__caption" id="project-lightbox-title"></figcaption>
      </figure>
    </div>
  `;

  const closeButton = lightbox.querySelector(".project-lightbox__close");
  const lightboxImage = lightbox.querySelector(".project-lightbox__image");
  const lightboxCaption = lightbox.querySelector(".project-lightbox__caption");
  const dialog = lightbox.querySelector(".project-lightbox__dialog");

  function closeLightbox() {
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("project-lightbox-open");
    document.removeEventListener("keydown", handleKeydown);
    if (activeTrigger) {
      activeTrigger.focus();
    } else if (previousActive instanceof HTMLElement) {
      previousActive.focus();
    }
    activeTrigger = null;
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  }

  function openLightbox(trigger) {
    previousActive = document.activeElement;
    activeTrigger = trigger;
    lightboxImage.src = trigger.dataset.lightboxImage || "";
    lightboxImage.alt = trigger.dataset.lightboxAlt || "";
    lightboxCaption.textContent = trigger.dataset.lightboxCaption || "";
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("project-lightbox-open");
    document.addEventListener("keydown", handleKeydown);
    closeButton.focus();
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openLightbox(trigger));
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (!dialog.contains(event.target)) {
      closeLightbox();
    }
  });

  document.body.appendChild(lightbox);
}
