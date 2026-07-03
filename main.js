/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
      icon.classList.replace("fa-bars", "fa-xmark");
    } else {
      icon.classList.replace("fa-xmark", "fa-bars");
    }
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.replace("fa-xmark", "fa-bars");
  });
});

/* =========================
   ANIMATED COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

/* =========================
   REVIEW SLIDER
========================= */

const reviews = document.querySelectorAll(".review");

let reviewIndex = 0;

function showReview() {
  reviews.forEach((review) => {
    review.classList.remove("active");
  });

  reviews[reviewIndex].classList.add("active");

  reviewIndex++;

  if (reviewIndex >= reviews.length) {
    reviewIndex = 0;
  }
}

setInterval(showReview, 3000);

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  ".product-card,.service-card,.counter-card,.why-grid .glass",
);

window.addEventListener("scroll", reveal);

function reveal() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element) => {
    const boxTop = element.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      element.classList.add("show");
    }
  });
}

reveal();

/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* =========================
   NAVBAR SHADOW
========================= */

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const buttons = document.querySelectorAll(".btn,.product-card button");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");

    const diameter = Math.max(this.clientWidth, this.clientHeight);

    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;

    circle.style.top = `${e.clientY - this.offsetTop - radius}px`;

    circle.classList.add("ripple");

    const ripple = this.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    this.appendChild(circle);
  });
});

/* =========================
   HERO TEXT ANIMATION
========================= */

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {
  heroTitle.style.opacity = "0";

  setTimeout(() => {
    heroTitle.style.transition = "all 1.5s ease";

    heroTitle.style.opacity = "1";

    heroTitle.style.transform = "translateY(0)";
  }, 300);
}

/* =========================
   FLOATING EFFECT
========================= */

const cards = document.querySelectorAll(".product-card,.service-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const x = e.offsetX / card.offsetWidth;

    const y = e.offsetY / card.offsetHeight;

    card.style.transform = `rotateY(${(x - 0.5) * 20}deg)
 rotateX(${(0.5 - y) * 20}deg)
 translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});

/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    loader.style.display = "none";
  }
});

/* =========================
   CURRENT YEAR
========================= */

const year = document.getElementById("year");

if (year) {
  year.innerText = new Date().getFullYear();
}

const form = document.getElementById("enquiryForm");

const popup = document.getElementById("successPopup");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  popup.style.display = "flex";

  form.reset();
});

function closePopup() {
  popup.style.display = "none";
}
