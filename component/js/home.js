const hamburger = document.querySelector("#hamburger");
const navItemContainer = document.querySelector(".nav-item-container");
const productsContainer = document.querySelector("#products");
const products = document.querySelector(".nav-products");
const healthcare = document.querySelector("#healthcare");
// const loginEmail = document.querySelector("#loginemail").value;
// const loginPass = document.querySelector("#loginpassword").value;

hamburger.addEventListener("click", function () {
  navItemContainer.classList.toggle("hidden");
});

productsContainer.addEventListener("mouseover", function () {
  products.classList.remove("hidden");
});

productsContainer.addEventListener("mouseout", function () {
  products.classList.add("hidden");
});

// function checker(loginEmail, loginPass) {
//   if (loginEmail.length == 0) {
//     alert("Email harus diisi!");
//   }
//   if (loginPass.length == 0) {
//     alert("Password harus diisi!");
//   }
// }
