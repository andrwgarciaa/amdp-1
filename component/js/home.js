const hamburger = document.querySelector("#hamburger");
const navItemContainer = document.querySelector(".nav-item-container");
const productsContainer = document.querySelector("#products");
const products = document.querySelector(".nav-products");
const healthcare = document.querySelector("#healthcare");

hamburger.addEventListener("click", function () {
  navItemContainer.classList.toggle("hidden");
});

productsContainer.addEventListener("mouseover", function () {
  products.classList.remove("hidden");
});

productsContainer.addEventListener("mouseout", function () {
  products.classList.add("hidden");
});
