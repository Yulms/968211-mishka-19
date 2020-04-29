"use strict";

const pageHeader = document.querySelector(".header");
// без включенного js меню будет показано по умолчанию
pageHeader.classList.add("header--closed");
pageHeader.classList.remove("header--no-js");
const buttonToggle = document.querySelector(".header__toggle");
buttonToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  buttonToggle.classList.toggle("header__toggle--active");
  pageHeader.classList.toggle("header--closed");
})


let modalCart = document.querySelector(".modal--cart");
const buttonsCartAdd = document.querySelectorAll(".product-card__button");
for (let buttonCartAdd of buttonsCartAdd) {
  buttonCartAdd.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalCart.classList.remove("modal--closed");
  })
};

modalCart.addEventListener("click", function(evt) {
  // если клик по overlay
  if (evt.target.classList.contains("modal")) {
    evt.target.classList.add("modal--closed");
  };
});

// закрытие окна по нажатию esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (!modalCart) return;
    if (!modalCart.classList.contains("modal--closed")) {
      evt.preventDefault();
      modalCart.classList.add("modal--closed");
    }
  }
});
