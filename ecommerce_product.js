const activeImg = document.getElementById("active-img");
const inActiveImg = document.querySelectorAll(".inactive-img");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const count = document.querySelector(".count");
const addToCartBtn = document.querySelector(".add-cart-btn");
const cartState = document.querySelector(".cart-state");
const cartBtn = document.querySelector(".cart-container");
const showCart = document.getElementById("cart-display");
const emptyState = document.querySelector(".empty-state");
const filledState = document.querySelector(".filled-state");
const cartDeleteBtn = document.querySelector(".delete-btn");
const totalShoes = document.querySelector(".total-shoe");
const subTotal = document.querySelector(".sub-total");
const imageOverlay = document.querySelector(".images-overlay");
const closeBtn = document.querySelector(".close-icon");
const nextBtn = document.querySelector(".next-icon");
const previousBtn = document.querySelector(".previous-icon");
const defaultImg = document.getElementById("big-image-default");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.getElementById("primary-menu");

// Edits
let previousImg = inActiveImg[0];
let counter = 0;
let currentImage = 0;

// Functions
activeImg.addEventListener("click", () => {
  imageOverlay.classList.add("overlay-active");
});
closeBtn.addEventListener("click", () => {
  imageOverlay.classList.remove("overlay-active");
});

nextBtn.addEventListener("click", () => {
  if (currentImage == 3) {
    // console.log("when it hits 3rd element", currentImage);
    // console.log("hi");
    defaultImg.src = inActiveImg[currentImage].src;
  } else {
    defaultImg.src = inActiveImg[currentImage].src;
    currentImage++;
  }
});

previousBtn.addEventListener("click", () => {
  if (currentImage == 0) {
    defaultImg.src = inActiveImg[currentImage].src;
    // currentImage--;
    // console.log("when it hits zero", currentImage);
  } else {
    defaultImg.src = inActiveImg[currentImage].src;
    currentImage--;
  }
});

cartBtn.addEventListener("click", () => {
  if (cartBtn.classList.contains("show")) {
    // console.log("hi there");
    showCart.style.display = "block";
    cartBtn.classList.remove("show");
  } else {
    // console.log("im in else block");
    showCart.style.display = "none";
    cartBtn.classList.add("show");
  }
});

cartDeleteBtn.addEventListener("click", () => {
  filledState.style.display = "none";
  emptyState.style.display = "block";
  // cartState.textContent = counter;
  cartState.classList.remove("active-state");
});

inActiveImg.forEach((img) => {
  // inActiveImg.forEach((image) => image.classList.remove(active));
  img.addEventListener("click", function () {
    if (previousImg) {
      previousImg.classList.remove("active");
    }
    // img.classList.remove("active");
    activeImg.src = this.src;
    img.classList.add("active");
    previousImg = img;
  });
  // img.classList.remove("active");
});
minusBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    count.textContent = counter;
  }
});
plusBtn.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
});
addToCartBtn.addEventListener("click", () => {
  if (counter > 0) {
    cartState.textContent = counter;
    cartState.classList.add("active-state");
    totalShoes.textContent = counter;
    subTotal.textContent = `$${counter * 125}.00`;
    counter = 0;
    count.textContent = counter;
    filledState.style.display = "flex";
    emptyState.style.display = "none";
  }
});

// Mobile nav toggle behavior
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const opened = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", opened ? "true" : "false");
  });

  // Close menu when a nav link is clicked (mobile UX)
  if (navLinks) {
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}
