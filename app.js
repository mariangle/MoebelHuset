const topButton = document.getElementById("top");
const subBtn =  document.querySelector(".btn");
const burger = document.querySelector(".burger");
const navLink = document.querySelectorAll(".burger-links");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const logo = document.querySelector("#logo");
const navBurger = document.querySelector(".nav-burger");

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Toggle top button visibility on scroll   
function toggleTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    gsap.to(topButton, 0, { display: "block" });
  } else {
    gsap.to(topButton, 0, { display: "none" });
  }
}

// Smooth scrolling to section on link click
function smoothScrollToSection(e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute("href"));
  target.scrollIntoView({ behavior: "smooth" });
}

// Toggle navigation menu
function toggleNavMenu() {
  const isActive = burger.classList.contains("active");
  if (!isActive) {
    burger.classList.add("active");
    openNav();
  } else {
    burger.classList.remove("active");
    closeNav();
  }
}

// Open navigation menu
function openNav() {
  gsap.to(line1, 0.3, { rotate: "45", y: 3, background: "white" });
  gsap.to(line2, 0.3, { rotate: "-45", y: -3, background: "white" });
  gsap.to(logo, 0.3, { color: "white" });
  gsap.to(navBurger, 0.3, { transform: "translateX(0%)" });
  gsap.to(document.body, 0, { overflow: "hidden" });
}

// Close navigation menu
function closeNav() {
  gsap.to(line1, 0.3, { rotate: "0", y: 0, background: "black" });
  gsap.to(line2, 0.3, { rotate: "0", y: 0, background: "black" });
  gsap.to(logo, 0.3, { color: "black" });
  gsap.to(navBurger, 0.5, { transform: "translateX(800px)", ease: "power4.out" });
  gsap.to(document.body, 0, { overflow: "visible" });
}

// Close navigation menu on link click
function closeNavOnLinkClick() {
  closeNav();
}

// Add event listeners
window.addEventListener("scroll", toggleTopButton);
topButton.addEventListener("click", scrollToTop);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", smoothScrollToSection);
});
burger.addEventListener("click", toggleNavMenu);
navLink.forEach(link => {
  link.addEventListener("click", closeNavOnLinkClick);
});
subBtn.addEventListener("click", function(e){
    e.preventDefault();
});

// Close navigation menu on window resize (if window size is not mobile)
window.addEventListener("resize", function() {
  if (window.innerWidth >= 768) {
    closeNav();
  }
});