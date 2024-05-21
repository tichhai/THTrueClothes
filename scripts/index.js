//show/hide navbar when scroll
let lastScrollTop = 0;
const header = document.getElementById("nav");
window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = "-100px";
  } else {
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

//scroll to top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
scrollToTopBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
// active navbar
const navLinks = document.querySelectorAll(".nav-link");
const windowPathname = window.location.pathname;
navLinks.forEach((item) => {
  const navLinkPathName = new URL(item.href).pathname;
  if (
    windowPathname == "/templates/ProductDetail.html" &&
    navLinkPathName == "/templates/Shop.html"
  ) {
    navLinks.forEach((item) => {
      item.classList.remove("active-a");
    });
    item.classList.add("active-a");
    return;
  }
  if (windowPathname == navLinkPathName) {
    item.classList.add("active-a");
  }
});
// show/hide password
const togglePasswordButton = document.querySelectorAll(".eyes-icon");
togglePasswordButton.forEach((item) => {
  item.addEventListener("click", (e) => {
    const input = e.currentTarget.previousElementSibling;
    const type =
      input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
    if (type == "text") {
      e.currentTarget.classList.remove("fa-eye-slash");
      e.currentTarget.classList.add("fa-eye");
    } else {
      e.currentTarget.classList.remove("fa-eye");
      e.currentTarget.classList.add("fa-eye-slash");
    }
  });
});
